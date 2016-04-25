#Tutorial 10 - Debugging projects with **logging** to console
Sometimes you wonder what the client send to the server or what is the return send to the client. If you want to inspect this you have to write a wrapper which logs these maps to console.

- [Most simple version of logging](#most-simple-version-of-logging)
- [More or less logging](#more-or-less-logging)
    - [Output of paths](#output-of-paths)
    - [Output at adapter](#output-at-adapter)
    - [Output at handler](#output-at-handler)
- [Logging to files](#logging-to-files)
- [Other debug methods](#other-debug-methods)

##Most simple version of logging
We will use the wrapper of tutorial1 and modify it to produce debug outputs.

```clojure
(defn wrap-log [handler]
"Logs request and response to console"
  (fn [request]
    (println request)
    (let [response (handler request)]
      (println response)
      response)))
```

Extend the app after routes function in `testapp\ src\ testapp\ handler.clj `.

```clojure
(def app
  (-> (routes ...)
      (wrap-log) ;; handlers side due to evaluation order of the functions? please correct me if I am wrong here, but print to console points out it is correct
      (...)
      (wrap-log) ;; adapters side
  ))
```

Well, as you see above the evaluation of nested functions work different to other languages you might know. 
I guess in this case the functions are passed as vars inside the wrapper and are first evaluated, at the moment of applying the request to the handler `(let [response (handler request)] `.
So the first `println ` fires before we go deep inside all functions towards the `handler ` (let us name it deepest function). 
After this it returns back through all function returns up to our first wrapper where the last `println ` is the last function before the request is returned to the adapter. 

Now every time the page reloads you will see the requests and responses within the console. Do not wonder if it produces several outputs with only 1 visitor!
This is caused by the browser sending several requests to the server (HTML, CSS, image) for now.

##More or less logging
The approach above writes a lot of bad formatted outputs. Now we want to bring in a filter which produces less output and change the output to pretty print the maps.

```clojure
	(:require ...
		[clojure.pprint]
		)
	(:use ...
        [clojure.string :as s]))

	...


;; /*****************************LOGGING********************************************/

(defn format-logs [logname request striped-keys striped-headers with-body]
    (let [without-striped-keys (reduce dissoc request striped-keys)
          without-striped-keys-and-headers (reduce (fn [headers to-remove] (update-in headers [:headers] dissoc to-remove)) without-striped-keys striped-headers)
          body (request :body)]
    (with-out-str
      (println logname)
      (clojure.pprint/pprint without-striped-keys-and-headers)
      (if (true? with-body)
        ((println "-------------------------------")
         (clojure.pprint/pprint body)))
      (println "***************** END OF LOG *************"))))

(def no-log-paths ["/img/" "/css/" "/__source_changed/"]) ;; this paths will be ignored
(def stripe-nothing-keys [])
(def stripe-keys [:body :character-encoding :remote-addr :server-name :server-port :ssl-client-cert :scheme  :content-type  :content-length]) ;; this keys will be removed
(def stripe-nothing-headers [])
(def stripe-headers ["dnt" "user-agent" "accept" "accept-encoding" "accept-language" "accept-charset" "cache-control" "connection"]) ;; this headers will be removed

(defn wrap-log [handler logname with-body keystriper headerstriper no-log-paths url-spy]
  (fn [request]
    (if url-spy (println (request :uri))) ;; if url-spy = true log all paths (urls) accessed to console
    (if (not-any? (fn [x] (s/includes? (request :uri) x)) no-log-paths) ;; only create full log entry if they are not blacklisted
      (let [incoming (format-logs (str "***** " logname " ***** INcoming request map *****") request keystriper headerstriper false)] ;; There is no body so we cannot log it
        ;; (println incoming)
        (let [response (handler request)]
          (let [outgoing (format-logs (str "***** " logname " ***** OUTgoing response map *****") response keystriper headerstriper with-body)]
            ;; (println outgoing)
            (println incoming "\n" outgoing)
            response))))
    (handler request)))

;; /*****************************ROUTES*********************************************/

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (routes home-routes app-routes)
      (wrap-log "handler" false stripe-keys stripe-headers no-log-paths false) ;; Stripe the most
      ...
      (wrap-log "adapter" false stripe-nothing-keys stripe-nothing-headers no-log-paths true) ;; Show all
  ))

```

Finally we are using `s/includes? ` which is new in clojure 1.8.0 so you will have to update this in `project.clj`

```clojure
  :dependencies [[org.clojure/clojure "1.7.0"]
  ;; changes to
  :dependencies [[org.clojure/clojure "1.8.0"]
```

Now we can create console outputs with a better readability. Attention, the order the Messages appear are switched. This is caused by waiting the response. You go through the adapter to the handler, back through handler and print it. Then back throuhg adapter and its printing function.
So you see, do not worry if the outputs are rotated. If you want them in correct order you will have to switch to single message logging (prepared as comments).

###Output of paths
This are the paths currently will appear within the console:

```clojure
testapp 0.1.0-SNAPSHOT[stdout]:
/
testapp 0.1.0-SNAPSHOT[stdout]:
/css/screen.css
testapp 0.1.0-SNAPSHOT[stdout]:
/img/bg_guestbook.jpg
testapp 0.1.0-SNAPSHOT[stdout]:
/img/exclamation_mark.png

```

###Output at adapter
Here is an example of the logging:


```clojure
***** adapter ***** INcoming request map *****
{:ssl-client-cert nil,
 :cookies {},
 :remote-addr "0:0:0:0:0:0:0:1",
 :params {},
 :flash nil,
 :headers
 {"accept"
  "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "connection" "keep-alive",
  "dnt" "1",
  "accept-encoding" "gzip, deflate",
  "cache-control" "max-age=0",
  "user-agent"
  "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0",
  "accept-language" "de",
  "host" "localhost:8080"},
 :server-port 8080,
 :content-length nil,
 :form-params {},
 :session/key nil,
 :query-params {},
 :content-type nil,
 :character-encoding nil,
 :uri "/",
 :server-name "localhost",
 :query-string nil,
 :body
 #object[org.eclipse.jetty.server.HttpInput 0x2e2b0024 "org.eclipse.jetty.server.HttpInput@2e2b0024"],
 :multipart-params {},
 :scheme :http,
 :request-method :get,
 :session {}}
***************** END OF LOG *************

 ***** adapter ***** OUTgoing response map *****
{:status 200,
 :headers {"Content-Type" "text/html; charset=utf-8"},
 :body
 "<!DOCTYPE html>\n<html><head><title>Welcome to my Clojure Web Tutorial</title><link href=\"/css/screen.css\" rel=\"stylesheet\" type=\"text/css\"></head><body><div id=\"viewport\"><div id=\"main\"><form action=\"/\" method=\"POST\"><fieldset id=\"guestbookForm\"><legend>Guestbook</legend><ul><li>Form fields marked with <em title=\"mandatory\">*</em> are mandatory and must be completed.</li><li><label for=\"firstname\" title=\"mandatory\">First name</label><input aria-required=\"true\" id=\"firstname\" name=\"firstname\" pattern=\"[a-zA-Z0-9]{3,10}\" required type=\"text\"><span class=\"form_hint\">3 to 10 letters and/or numbers</span></li><li><label for=\"message\" title=\"mandatory\">Message</label><textarea aria-required=\"true\" cols=\"40\" id=\"message\" name=\"message\" placeholder=\"Remember, be friendly!\" required rows=\"10\"></textarea></li><li><input class=\"btnReset\" type=\"reset\" value=\"Reset\"><input class=\"btnSubmit\" type=\"submit\" value=\"Submit\"></li></ul></fieldset></form></div><div id=\"space\"></div></div><div id=\"footer\"><ol><li><div class=\"commentAuthor\"><cite>Charlie</cite></div><div class=\"comment\"><blockquote><p>Charlie is the evil who tries to steal this message</p></blockquote><p class=\"date\">14/03/2016 17:21:20</p></div></li><li><div class=\"commentAuthor\"><cite>Bob</cite></div><div class=\"comment\"><blockquote><p>Bob sends a message to Alice</p></blockquote><p class=\"date\">14/03/2016 17:21:20</p></div></li><li><div class=\"commentAuthor\"><cite>Alice</cite></div><div class=\"comment\"><blockquote><p>Hi, I am Alice!</p></blockquote><p class=\"date\">14/03/2016 17:21:20</p></div></li></ol></div></body></html>"}
***************** END OF LOG *************

```

###Output at handler
Here is an example of the logging:


```clojure
***** handler ***** INcoming request map *****
{:headers {"host" "localhost:8080"},
 :uri "/",
 :query-string nil,
 :request-method :get}
***************** END OF LOG *************

 ***** handler ***** OUTgoing response map *****
{:status 200, :headers {"Content-Type" "text/html; charset=utf-8"}}
***************** END OF LOG *************

```

##Logging to files
As servers normally log to files and wrap-log (see [https://github.com/pjlegato/ring.middleware.logger](https://github.com/pjlegato/ring.middleware.logger) is too much overpowered to me, we will write our own short logging function.
As we now enter an area of programming which is made to fail some times (no space left, write failed or anything else) we will add more try ... catch logic. Altering the project `testapp\ project.clj ` and add `[try-let "1.1.0"] `.

```clojure
...
;; adding to
:require ...
[clojure.java.io :refer [make-parents]]
[try-let :refer [try-let]]
...

(defn get-time [toformat]
  (-> toformat
      (java.text.SimpleDateFormat.)
      (.format (java.util.Date.))))

(defn write-log [file request response duration ex]
  (let [log (if (nil? ex)
              (join " " [
                          (get-time "[dd/MM/yyyy:HH:mm:ss Z]")
                          duration
                          (request :remote-addr)
                          (response :status)
                          (request :uri)
                          "nil" ;; user-identifier a cookie can be this (we not use currently)
                          "nil" ;; user-id when logged in - not supported yet
                          (request :scheme)
                          (request :request-method)
                          (get-in request [:headers "user-agent"])
                          "\r\n"
                        ])
              (join " " [
                          (get-time "[dd/MM/yyyy:HH:mm:ss Z]")
                          (request :remote-addr)
                          (request :uri)
                          (.getMessage ex)
                        ]))]
    (try
      (spit file log :append true)
      (catch Exception exlog (println "Exception writing logs: " (.getMessage exlog) " Initial error: " log)))))

(defn wrap-log-to-file [handler path]
  (let [file (str path (get-time "yyyy-MM-dd") ".log")] ;; One file per day logging add -HH if you want a new file each hour
    (fn [request]
      (make-parents file)
      (let [start (System/currentTimeMillis)]
        (try-let [response (handler request)
                  duration (- (System/currentTimeMillis) start)]
                 (write-log file request response duration nil)
                 response
                 (catch Exception ex
                   (write-log file request nil nil ex)))))))

;; and add to end of app

(wrap-log-to-file "./logs/")

```

The logging format is aligned to the common log format but not similar. In error case we will add a different set of information to logfile, if this fails we will log to console.

##Other debug methods
As it is not fitting inside other topics above if you want to see the content of the threading macro you can use `macroexpand-1 ` to look inside.

```clojure
(macroexpand-1 '(-> (routes home-routes app-routes)
      (wrap-log "handler" false stripe-keys stripe-headers no-log-paths false) ;; Stripe the most
      (wrap-reload)
      (wrap-refresh ["src" "resources"])
      (handler/site) ;; deprecated use ring-defaults
      (wrap-base-url)
      (wrap-log "adapter" false stripe-nothing-keys stripe-nothing-headers no-log-paths true) ;; Show all
      (wrap-log-to-file "./logs/")
  ))

  ;; (wrap-log-to-file (wrap-log (wrap-base-url (handler/site (wrap-refresh (wrap-reload (wrap-log (routes home-routes app-routes) "handler" false stripe-keys stripe-headers no-log-paths false)) ["src" "resources"]))) "adapter" false stripe-nothing-keys stripe-nothing-headers no-log-paths true) "./logs/")

```
