(ns testapp.handler
  (:require [compojure.core :refer [defroutes routes]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]
            [hiccup.middleware :refer [wrap-base-url]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.refresh :refer [wrap-refresh]]
            ; [compojure.handler :as handler]
            [compojure.route :as route]
            [testapp.routes.home :refer [home-routes]]
            [testapp.models.guestbook :as db]
            [clojure.pprint]
            [clojure.java.io :refer [make-parents]]
            [try-let :refer [try-let]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [clojure.string :refer [includes? join]]))
;  (:use [ring.middleware.refresh]
  ;      [clojure.string :refer [includes? join]]))

;; /*****************************CONSTRUCTOR AND DESTRUCTOR*************************/

(defn init []
  "called when start and ensures the database exists or creates it"
  (println "testapp is starting")
  (when-not (.exists (java.io.File. "./db.sq3"))
    (println "creating database")
    (db/create-guestbook-table)))

(defn destroy []
  "shutting down the app can be used to destruct things"
  (println "testapp is shutting down"))

;; /*****************************LOGGING********************************************/

(defn format-logs [logname request striped-keys striped-headers with-body]
  "used to format logs to console output"
    (let [without-striped-keys (reduce dissoc request striped-keys)
          without-striped-keys-and-headers (reduce (fn [headers to-remove] (update-in headers [:headers] dissoc to-remove)) without-striped-keys striped-headers)
          body (request :body)]
    (with-out-str
      (println logname)
      (clojure.pprint/pprint without-striped-keys-and-headers)
      (if with-body
        (do (println "-------------------------------")
         (clojure.pprint/pprint body)))
      (println "***************** END OF LOG *************"))))

(def no-log-paths
  "paths which will not show in console-logs"
  ["/img/" "/css/" "/__source_changed"])
(def stripe-nothing-keys
  "keys to remove when no keys are removed"
  [:body])
(def stripe-keys
  "keys to be removed in smallest logs version"
  [:body :character-encoding :remote-addr :server-name :server-port :ssl-client-cert :scheme  :content-type  :content-length])
(def stripe-nothing-headers
  "headers to remove when no headers are removed"
  [])
(def stripe-headers
  "headers to be removed in smallest logs version"
  ["dnt" "user-agent" "accept" "accept-encoding" "accept-language" "accept-charset" "cache-control" "connection"])

(defn wrap-log [handler logname with-body keystriper headerstriper no-log-paths url-spy]
  "wrapper to create logs to console"
  (fn [request]
    (if url-spy (println (request :uri))) ;; if url-spy = true log all paths (urls) accessed to console
    (if (not-any? (fn [x] (includes? (request :uri) x)) no-log-paths) ;; only create full log entry if they are not blacklisted
      (let [incoming (format-logs (str "***** " logname " ***** INcoming request map *****") request keystriper headerstriper false)] ;; There is no body so we cannot log it
        ;; (println incoming) ;; Single message logging
        (let [response (handler request)]
          (let [outgoing (format-logs (str "***** " logname " ***** OUTgoing response map *****") response keystriper headerstriper with-body)]
            ;; (println outgoing) ;; Single message logging
            (println incoming "\n" outgoing) ;; Double message logging
            response)))
    (handler request))))

(defn get-time [toformat]
  "time formatter help to use in logs"
  (-> toformat
      (java.text.SimpleDateFormat.)
      (.format (java.util.Date.))))

(defn write-log [file request response duration ex]
  "creates logs content and writes it to file (append)"
  (let [log (if (nil? ex)
              (join " " [(get-time "[dd/MM/yyyy:HH:mm:ss Z]")
                         duration
                         (request :remote-addr)
                         (response :status)
                         (request :uri)
                         "nil" ;; user-identifier a cookie can be this (we not use currently)
                         "nil" ;; user-id when logged in - not supported yet
                         (request :scheme)
                         (request :request-method)
                         (get-in request [:headers "user-agent"])
                         "\r\n"])
              (join " " [(get-time "[dd/MM/yyyy:HH:mm:ss Z]")
                         (request :remote-addr)
                         (request :uri)
                         (.getMessage ex)
                         "\r\n"]))]
    (try
      (spit file log :append true)
      (catch Exception exlog (println "Exception writing logs: " (.getMessage exlog) " Initial error: " log)))))

(defn wrap-log-to-file [handler path]
  "wrapper to create logs to file"
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


;; /*****************************ROUTES*********************************************/

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  "Stack of APP to execute on requests"
  (-> (routes home-routes app-routes)
      (wrap-log "handler" false stripe-keys stripe-headers no-log-paths false) ;; Stripe the most
      (wrap-reload)
      (wrap-refresh ["src" "resources"])
      (wrap-defaults (-> site-defaults
                         (assoc-in [:session :cookie-name] "name_the_cookie")))
      (wrap-base-url)
      (wrap-log "adapter" false stripe-nothing-keys stripe-nothing-headers no-log-paths true) ;; Show all
      (wrap-log-to-file "./logs/")))
