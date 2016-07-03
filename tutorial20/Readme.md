# Tutorial 20 Sente and events within communication
Within this tutorial we will add Sente to our project. It offers auto fall back to long polling if not WebSockets are available.
The overhead is minimal. And if you have a look into source code you will see the socktes are chained by Alephs dereferred. Additional it will bring us events and EDN data exchange.

Sometimes you will see an error like: `[17/06/2016:02:14:49 +0200]  /chsk No HttpDecoder and no HttpServerCodec in the pipeline ` which can be cause of alpha software. If you have an idea to fix it please create an issue or submit a fix.

During work of this project I tuned a bit of logging. You can find all changes withing `handler.clj ` if you are interested in. But they are not of main focus here so feel free to ignore them as well.

- [Integration of Sente serverside](#integration-of-sente-serverside)
    - [Basics](#basics)
    - [Events](#events)
    - [Server startup changes](#server-startup-changes)
- [Integration of Sente clientside](#integration-of-sente-clientside)
    - [Sente socket](#sente-socket)
    - [Events](#events)
    - [Startup of router and rest of page](#startup-of-router-and-rest-of-page)


## Integration of Sente serverside
Starting to change the project file `testapp\ project.clj ` :


```clojure
;; dependencies extended by:
                 [com.taoensso/sente "1.9.0-beta2"] ;; Dev -unstable- but first with Aleph integration
```

Within `testapp\ src\ testapp\ routes\ script.clj ` we will have to add a function prepares the WebSockets wrapper which will handle both Ajax and WebSockets calls.
It will also give us send and receive functions which we do not have to care the transportlayer. The Send function will take an user ID to identify the WebSocket required to reach the target.
User ID could be an unique Number, better an emailaddress or some kind of unique username.

### Basics

```clojure
;; add to require
[taoensso.sente :as sente]
[taoensso.sente.server-adapters.aleph :refer (get-sch-adapter)]
[noir.session :as session]

;; add an atom to hold our message router
(defonce router_ (atom nil))

;; change the scriptbase to add a console for debug messages (yes could be done by script too)
(defn scriptbase []
  ;; For now every User will get same ID, use GUID, Email or something unique here
  (session/put! :uid 1)
  (layout/common
    [:div#viewport
      [:div#main_alt
       [:h1 "Scripted"]
       [:hr]
       [:main]
       [:br]
       [:lable "Console:"]
       [:textarea#output {:style "width: 100%; height: 200px;"}]
       [:script {:src "/js/app.js"}]]]))

;; remove
(def non-websocket-request ...)
;; and
(defn echo-handler ...)

;; Start adding miltimethods we will use to route the events to certain actions:
;; Sente event handlers
(defmulti -event-msg-handler
  "Multimethod to handle Sente event-msgs"
  :id ; Dispatch on event-id
  )
(defmulti -internal-event-msg-handler
  "Multimethod to handle Sente event-msgs available only to users with user ID"
  :id ; Dispatch on event-id
  )
(defn event-msg-handler [{:as ev-msg :keys [uid]}]
  "Wraps -event-msg-handler with whatever you want to
   we will check the uid here to do see which handler has to be called"
  (if (= uid ::nil-uid)
    (-event-msg-handler ev-msg) ; Handle event-msgs on a single thread
    ;; (future (-event-msg-handler ev-msg)) ; Handle event-msgs on a thread pool

    ;; Here you could group by user groups too! I would suggest not to do this checks in every single function! Else do it here!
    (-internal-event-msg-handler ev-msg)
    ;; (future (-internal-event-msg-handler ev-msg)) ; Handle internal-event-msgs on a thread pool
))

;; Define our Sente channel socket (chsk) server
;; the default uid function has to be overwritten (fn [ring-req] (get-in ring-req [:session :uid]))
;; as we used noir all session manipulations will be within  [:session :noir] -> [:session :noir :uid] to prevent middleware
;; overwrites in keywords protected. The csrf token applied by our middleware is root parameter within our session [:session :csrf-token]
;; so this does not need any changes.
;; The default packer is EDN wich will be okay to us (it will fix the differences between ClojureScript and Clojure)
(let [user-fn (fn [ring-req] (session/get :uid))
      chsk-server
        (sente/make-channel-socket-server! (get-sch-adapter) {:user-id-fn user-fn})
      {:keys [ch-recv send-fn connected-uids ajax-post-fn ajax-get-or-ws-handshake-fn]}
        chsk-server]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  ;; Sente event router (event-msg-handler loop)
  (defn  stop-router! [] (when-let [stop-fn @router_] (stop-fn)))
  (defn start-router! []
    (stop-router!)
    (reset! router_
      (sente/start-server-chsk-router! ch-chsk event-msg-handler)))
  ;; And start the router to serve Messages to handlers which we will do internally of this file to keep it restarting in case of wrap-reload reloads the namespace!
  (start-router!)
)

```

### Events
Giving handlers event IDs `(defmethod -internal-event-msg-handler eventID ... ` like `(defmethod -internal-event-msg-handler :script/echo ` will allow you to call this handlers by clients script. If they not request an anser directly which you see within the first example event `:default ` your client will handle them as `:chsk/recv `. You are able to reroute the inner event and access them when send like `(chsk-send! uid [:script/echo {:echo "Message"}]) ` . Data will be send by EDN as default. The conversion between Clojure and ClojureScript is done by Sente too. Another nice feature is the binding of WebSocket to UIDs. Which allows us to anser to specific UIDs. The send! here used the requests uid to answer to event creator. This is a no care if WebSocket or Ajax calls variant, as Sente manages it in background.

```clojure
;; Next we define the event handlers
;; Catch all else of events without UID (::nil-uid)
(defmethod -event-msg-handler :default
  [{:as ev-msg :keys [event ?reply-fn]}]
  "Default/fallback case (no other matching handler)"
    (println "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-server event})))



;; Catch all of events with UID
(defmethod -internal-event-msg-handler :default
  [{:as ev-msg :keys [event ?reply-fn]}]
  "Default/fallback case (no other matching handler)"
    (println "Unhandled internal event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-server event})))

;; Next two are Servermessages
(defmethod -internal-event-msg-handler :chsk/uidport-open
  [{:as ev-msg :keys [?data uid]}]
    ;; this is message of new connection (port opened)
  )

(defmethod -internal-event-msg-handler :chsk/uidport-close
  [{:as ev-msg :keys [?data uid]}]
    ;; this is message of (port closed)
  )


;; This will be our echo handler
(defmethod -internal-event-msg-handler :script/echo
  [{:as ev-msg :keys [?data uid]}]
    ;; Just for testing you can remove it later!
    (println ?data " - " uid)
    (chsk-send! uid [:script/echo {:echo (?data :echo)}]))

;; And update the routes to the new functions!
(defroutes script-routes
  (GET   "/"      []       (scriptbase))
  (GET   "/chsk"  ring-req (ring-ajax-get-or-ws-handshake ring-req))
  (POST  "/chsk"  ring-req (ring-ajax-post ring-req)))


```

### Server startup changes

Next changes happen in `testapp\ src\ testapp\ repl.clj ` , we will add a router-stop to the server-stop.

```clojure
;; requires are extended by:
                 [testapp.routes.script :refer [start-router! stop-router!]]

;; within startup-server (after reser! / before (try..)) add
    (start-router!)
;; this is only required in case we restart the server (router beeing stopped and has to be started again)

;; and add behind (println "Stopping the server") within stop-server:
    (stop-router!)

```

## Integration of Sente clientside
We will remove goog just for fun and use only Sente and JavaScript interop.

```clojure
;; within namespace we will add sente and encore
(ns testapp.script.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [taoensso.encore :as encore :refer ()]
            [taoensso.sente :as sente :refer (cb-success?)]))

;; this is obvious same as before
(defn set-html! [el content]
  (set! (.-innerHTML el) content))

;; as we prepared a console to output debug messages this is our function to append data
(def output-element (.getElementById js/document "output"))
(defn ->output! [fmt & args]
  (let [msg (apply encore/format fmt args)]
    (aset output-element "value" (str (.-value output-element) "• " msg "\n"))
    (aset output-element "scrollTop" (.-scrollHeight output-element))))

```

### Sente socket

```clojure
;; ############################################## Socket Logic ###############################################

;; Here we creating our WebSocket/Ajax emulation targeting our Server with /chsk path!
;; Do not use a full qualified address here as Sente currently ony takes a path and does the rest!
(let [{:keys [chsk ch-recv send-fn state]}
        (sente/make-channel-socket-client! "/chsk" ;; Must match server Ring routing URL
        {})]

  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
)

;; this function is used to send a msg to the servers :script/echo event!
(defn send-echo-msg!
  "sends a message over socket with event echo"
  [msg]
  (chsk-send! [:script/echo {:echo msg}]))

;; and our parser function of last tutorial just to add the response to the screen.
(defn parser
  "attaches the response to the html element with id response"
  [response]
  (set-html! (.getElementById js/document "response") response))

```
### Events
Events are used in communication to the server. This allow us to handle specific requests. `(chsk-send! [event {data}])) ` can be used like shown before `(chsk-send! [:script/echo {:echo msg}])) ` to call specific handlers at  server side.

If it is the best idea to reroute events to the same multimethod or use a separate one is something you can decide . I used the same here as it is only demonstration use.

```clojure
;; Sente event handlers
;; same as server side but a little change all push events are covered by :chsk/recv
(defmulti -event-msg-handler
  "Multimethod to handle Sente event-msgs"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps -event-msg-handler with whatever you want to"
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event]}]
  (->output! "Unhandled event: %s" event))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (:first-open? ?data)
    (->output! "Channel socket successfully established!: %s" ?data)
    (->output! "Channel socket state change: %s" ?data)))

;; Here all pushes will arrive we will route them with the internal-event back to the multimethod.
(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data event id]}]
  (let [[internal-event args] ?data]
    (->output! "Push event from server: %s" ?data)
    ;; Callback with internal-event and rest as args
    (-event-msg-handler {:id internal-event, :data args})))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (->output! "Handshake: %s" ?data)))

;; And finally the eventhandler to our echo.
(defmethod -event-msg-handler :script/echo
  [{:as ev-msg :keys [data]}]
  (let [echo (data :echo)]
    (->output! "Echo called with: %s" ev-msg)
    (parser echo)))

;; Sente event router (event-msg-handler loop)
;; Same as server side take answers and route them to our event handlers
(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-client-chsk-router! ch-chsk event-msg-handler)))

```

### Startup of router and rest of page

```clojure

;; ############################################## Page Logic ###############################################
;; Next only without goog.
(defn main
  []
  (let [content (html [:hr]
                      [:label {:for "to_socket"} "Socket input"]
                      [:input {:type "text" :pattern "[a-zA-Z0-9 \\?]{3,}" :id "to_socket"}]
                      [:button {:id "button_socket" :type "submit" :class "btnSubmit"} "Submit"]
                      [:section
                       [:span "Response: "]
                       [:span {:id "response"}]])
        element (aget (js/document.getElementsByTagName "main") 0)]
    (set-html! element content)))

;; reduced a little bit no more socket opening here
(defn socketbinding
  "create the sockets and bind the function to the button with id button_socket"
  []
  (let [button  (.getElementById js/document "button_socket")
        input   (.getElementById js/document "to_socket")]

    ;; Assign event listener
    (set! (.-onclick button) (fn [event]
                               ;; Send message of to_socket through socket
                               (send-echo-msg! (.-value input))))))

(enable-console-print!)

(main)

;; and start the router added here
(defn start! [] (start-router!))
(defonce _start-once (start!))

(socketbinding)

```
