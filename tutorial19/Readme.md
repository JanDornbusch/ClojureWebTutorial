# Tutorial 19 - Starting with **websockets** using **Aleph**
This tutorial is about exchanging the Webserver to Aleph and learn how to enable websockets with a simple application.
Caution: Websockets are first available starting with IE 10! (most other browser support them since stone age already)

- [Clean up the Project](#clean-up-the-project)
- [Replace the Server](#replace-the-server)
- [Write simple scripts to send and receive messages](#write-simple-scripts-to-send-and-receive-messages)
    - [Note about antipattern](#note-about-antipattern)
    - [Alternative to older browsers](#alternative-to-older-browsers)

## Clean up the Project
First of all we will clean up our project to remove some of the test scripts created in the previous tutorials.
Within `testapp\ src\ testapp\ handler.clj ` we remove the eval and session handler:

```clojure
;; remove from requirements
            [testapp.routes.eval :refer [eval-routes]]
            [testapp.routes.session :refer [session-routes]]

;; and remove them of the routes macro
  (-> (routes home-routes script-routes eval-routes session-routes app-routes)
;; to

  (-> (routes home-routes script-routes app-routes)

```

Next we delete the files within `testapp\ src\ testapp\ routes\ ` which are not required anymore (`eval.clj ` and `session.clj ` ).

As we will work more with scripts we will exchange the paths of guestbook and scripts page:

`testapp\ src\ testapp\ routes\ script.clj `

```clojure
;; change
(defroutes script-routes
  (GET "/script" [] (scriptbase)))
;; to
(defroutes script-routes
  (GET "/" [] (scriptbase)))

```

and `testapp\ src\ testapp\ routes\ home.clj `

```clojure
;; change
        (form-to [:post "/"]
;; to target the new location
        (form-to [:post "/guestbook"]

;; and

;; change
(defroutes home-routes
  "Define routes of guestbook"
  (GET "/" [] (show-guestbook))
  (POST "/" [firstname message] (save-new-message firstname message)))
;; to
(defroutes home-routes
  "Define routes of guestbook"
  (GET "/guestbook" [] (show-guestbook))
  (POST "/guestbook" [firstname message] (save-new-message firstname message)))

```

Now when we start up the server our landingpage will be the scripted page of last tutorial. While the guestbook still is available for testing purpose after changing the server to Aleph.

## Replace the Server
To replace the server used up to now we will start within the project definition `testapp\ project.clj` and change:

```clojure
;; remove
                 [ring-server "0.4.0"]
;; and add
                 [aleph "0.4.1"]
;; instead

```

Next modifications are within the server start and stop functions `testapp\ src\ testapp\ repl.clj ` .

```clojure
;; within namespace we no longer can use ring.server.standalone so we remove it.
;; And add the new server start as requirement within namespace:
  (:require [aleph.http :refer [start-server]])


;; other changes will be made to the server startup function
(defn startup-server
  "used for starting the server in development mode from REPL"
  [& [port]]
  ;; test if server is running
  (if @server
    ;; blocks recreation if running
    (println "Warning server is running!")
    ;; select port if not supplied
    (let [port (if port (Integer/parseInt port) 8080)]
      (reset! server
              (start-server (get-handler)
                     {:port port}))
      (println (str "You can view the site at http://localhost:" port)))))

;; Notice we renamed the function to startup-server to avoid conflicts with


;; and we will have to change stop-server to be compatible as .stop changes
(defn stop-server []
  "used to stop the server"
  (when @server
    ;; when adds a do here
    (println "Stopping the server")
    (.close @server)
    (reset! server nil)))

```

The documentation of Aleph states:

```clojure
(defn start-server
  "Starts an HTTP server using the provided Ring `handler`.  Returns a server object which can be stopped
   via `java.io.Closeable.close()`, and whose port can be discovered with `aleph.netty/port`.

```

useful to know here are some keys you can supply to configure the server:


| Key | Description |
|---------|-------------|
| `port` | the port the server will bind to.  If `0`, the server will bind to a random port.|
| `socket-address` |  a `java.net.SocketAddress` specifying both the port and interface to bind to.|
| `shutdown-executor?` | if `true`, the executor will be shut down when `.close()` is called on the server, defaults to `true`.|
| `rejected-handler` | a spillover request-handler which is invoked when the executor's queue is full, and the request cannot be processed.  Defaults to a `503` response.|


[A full list of keys can be found at Alephs documentation](http://aleph.io/codox/aleph/aleph.http.html#var-start-server)


The last change we will have to do is within our startup script `testapp\ startup.clj ` :

```clojure
;; change
(start-server)
;; to
(startup-server)

```

Thats it try to run the project again and see if its working!

## Write simple scripts to send and receive messages
We will write a simple echo handler, let us change `testapp\ src\ testapp\ routes\ script.clj `

```clojure
;; first of all add dependencies we will use (new by Aleph)
            [aleph.http :as http]
            [manifold.stream :as s]
            [manifold.deferred :as d]
            [manifold.bus :as bus]))

;; ...

;; we will need a response to non WebSocket requests

(def non-websocket-request
  {:status 400
   :headers {"content-type" "application/text"}
   :body "Expected a websocket request."})

;; and finally the handler

(defn echo-handler
  "This handler sets up a websocket connection, and then proceeds to echo back every message
   it receives from the client.  The value yielded by `websocket-connection` is a **duplex
   stream**, which represents communication to and from the client.  Therefore, all we need to
   do in order to echo the messages is connect the stream to itself.
   Since any request it gets may not be a valid handshake for a websocket request, we need to
   handle that case appropriately."
  [req]
  ;; take the connection request and pass it through
  (-> (http/websocket-connection req)
    ;; Composes functions, left to right, over the value x, returning a deferred containing the result. When composing, either x or the returned values may be values which can be converted to a deferred, causing the composition to be paused.
    ;; The returned deferred will only be realized once all functions have been applied and their return values realized.
    (d/chain
      (fn [socket]
        ;; connect the socket to itself to reply all questions
        (s/connect socket socket)))
    ;; Catching errors as none socket requests
    (d/catch
      (fn [_]
        non-websocket-request))))

(defroutes script-routes
  (GET "/" [] (scriptbase))
  ;; apply the route to echo server
  (GET "/echo" [] echo-handler))

```

After this we will have to alter our scirpts `testapp\ scripts\ core.cljs ` :

```clojure
;; ############################################## Socket Logic ###############################################

;; adding an atom to hold the socket
(defonce socket (atom nil))

(defn receive-msg!
  "receive messages of socket and apply them to handler"
  [handler]
  (fn [msg]
    (handler (.-data msg))))

(defn send-msg!
  "sends a message over socket"
  [msg]
  ;; check if socket exists
  (if @socket
    ;; and if it is ready to take data
    (if (or (= (.-readyState @socket) (.-OPEN js/WebSocket)) (= (.-readyState @socket) 1))
      ;; send the message through the socket
      (.send @socket msg)
      ;; in case the socket has a problem alert it!
      (js/alert "The WebSocket is not open!"))
    ;; if socket is not there throw an error!
    (throw (js/Error. "Websocket is not available!"))))

(defn createWebSocket
  "creates a new socket with the given url and the handler to handle all incomming messages"
  [url handler]
  (println "attempting to connect websocket")
  ;; check if system can create sockets
  (if (.-WebSocket js/window)
    ;; create socket
    (if-let [chan (js/WebSocket. url)]
      (do
        ;; register events
        (set! (.-onopen chan) (fn [event] (js/alert "WebSocket open!")))
        (set! (.-onclose chan) (fn [event] (js/alert "WebSocket closed")))
        (set! (.-onmessage chan) (receive-msg! handler))
        ;; swap the socket into the atom
        (reset! socket chan)
        (println "Websocket connection established with: " url))
      (throw (js/Error. "Websocket connection failed!")))
    (js/alert "Your browser does not support WebSockets yet.")))

(defn closeSocket
  "closes the Socket"
  []
  (when @socket
    (println "Closing the socket")
    (.close @socket)
    (reset! socket nil)))

(defn parser
  "attaches the response to the html element with id response"
  [response]
  (set-html! (dom/getElement "response") response))

;; ############################################## Page Logic ###############################################

(defn main
  []
  (let [content (html ;; remove old code of counter here
                      ;; add the following to offer input possibilities
                      [:hr]
                      [:label {:for "to_socket"} "Socket input"]
                      [:input {:type "text" :pattern "[a-zA-Z0-9 \\?]{3,}" :id "to_socket"}]
                      [:button {:id "button_socket" :type "submit" :class "btnSubmit"} "Submit"]
                      [:section
                       [:span "Response: "]
                       [:span {:id "response"}]])
                       ;; following is old
        element (aget (js/document.getElementsByTagName "main") 0)]
    (set-html! element content)))

;; counter bindings can be removed


(defn socketbinding
  "create the sockets and bind the function to the button with id button_socket"
  []
  (let [button  (dom/getElement "button_socket")
        input   (dom/getElement "to_socket")]

    ;; create the socket
    (createWebSocket "ws://127.0.0.1:8080/echo" parser)

    ;; Assign event listener
    (events/listen button "click"
                   (fn [event]
                     ;; Send message of to_socket through socket
                     (send-msg! (.-value input))))))

(enable-console-print!)

(main)
;; remove call of counter here

(socketbinding)

```

### Note about antipattern
Note if you write server code take care it is not blocking the thread like:

```clojure
(defn echo-handler
  "This handler blocks until the websocket handshake completes, which unnecessarily
   takes up a thread."
  [req]
  (if-let [socket (try
                    @(http/websocket-connection req)
                    (catch Exception e
                      nil))]
    (s/connect socket socket)
    non-websocket-request))

```

The used handler within our project accomplishes the same as above, but asynchronously.
Generally prefer Alephs deferred `chain ` or `let-flow ` over blocking style.


### Alternative to older browsers
What to do if there are not WebSockets available?
Some developers suggest using flash instead, which is an infamous action. Frequently browsers blocking flash to force people to updates.
Security officers already stated they would love to delete it permanently of all world, so we will have to look at alternatives.
One alternative is to wrap [Sente arround the requests](https://github.com/ptaoussanis/sente).
"Sente is a small client+server library that makes it easy to build reliable, high-performance realtime web applications with Clojure + ClojureScript."
Which will use Ajax (auto-fallback) to emulate WebSockets by some kind of longtermpolling.

Sente will be evaluated withing the next tutorial!
