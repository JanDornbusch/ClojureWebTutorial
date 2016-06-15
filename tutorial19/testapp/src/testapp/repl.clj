(ns testapp.repl
  (:require [aleph.http :refer [start-server]])
  (:use testapp.handler
        [ring.middleware file-info file]))

(defonce server (atom nil))

(defn get-handler []
  ;; #'app expands to (var app) so that when we reload our code,
  ;; the server is forced to re-resolve the symbol in the var
  ;; rather than having its own copy. When the root binding
  ;; changes, the server picks it up without having to restart.
  (-> #'app
    ; Makes static assets in $PROJECT_DIR/resources/public/ available.
    (wrap-file "resources")
    ; Content-Type, Content-Length, and Last Modified headers for files in body
    (wrap-file-info)))

(defn startup-server
  "used for starting the server in development mode from REPL"
  [& [port]]
  ;; test if server is running
  (if @server
    ;; blocks recreation if running
    (println "Warning server is running!")
    ;; select port if not supplied
    (let [port (if port (Integer/parseInt port) 8080)
          uri (format "http://localhost:%s/" port)]
      (reset! server
              (start-server (get-handler)
                     {:port port}))
      (try
        (.browse (java.awt.Desktop/getDesktop) (java.net.URI. uri))
        (catch java.awt.HeadlessException _))
      (println (str "You can view the site at http://localhost:" port)))))

(defn stop-server []
  "used to stop the server"
  (when @server
    ;; when adds a do here
    (println "Stopping the server")
    (@server)
    (reset! server nil)))
