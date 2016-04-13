(ns testapp.handler
  (:require [compojure.core :refer [defroutes routes]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]
            [hiccup.middleware :refer [wrap-base-url]]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [testapp.routes.home :refer [home-routes]]
            [testapp.models.guestbook :as db]
            [clojure.pprint])
  (:use [ring.middleware.refresh]))

;; /*****************************CONSTRUCTOR AND DESTRUCTOR*************************/

(defn init []
  (println "testapp is starting")
  (if-not (.exists (java.io.File. "./db.sq3"))
    (do (println "creating database")
        (db/create-guestbook-table))))

(defn destroy []
  (println "testapp is shutting down"))

;; /*****************************LOGGING********************************************/

(defn format-logs [logname request striped-keys striped-headers with-body]
  (let [without-striped-keys (reduce dissoc request striped-keys)
        without-striped-keys-and-headers (reduce (fn [headers to-remove] (update-in headers [:headers] dissoc to-remove)) without-striped-keys striped-headers)
        body (request :body)]
  (with-out-str
    (println logname "********************************************")
    (clojure.pprint/pprint without-striped-keys-and-headers)
    (if (true? with-body)
      ((println "-------------------------------")
       (clojure.pprint/pprint body)))
    (println "****************************** /" logname))))

(def stripe-nothing-keys [])
(def stripe-keys [:body :character-encoding :remote-addr :server-name :server-port :ssl-client-cert :scheme  :content-type  :content-length])
(def stripe-nothing-headers [])
(def stripe-headers ["user-agent" "accept" "accept-encoding" "accept-language" "accept-charset" "cache-control" "connection"])

(defn wrap-log [handler logname with-body keystriper headerstriper]
  (fn [request]
    (let [incoming (format-logs (str logname ":\n Incoming Request:") request keystriper headerstriper false)] ;; There is no body so we cannot log it
      (println incoming)
      (let [response (handler request)]
        (let [outgoing (format-logs (str logname ":\n Outgoing Response Map:") response keystriper headerstriper with-body)]
          (println outgoing)
          response)))))

;; /*****************************ROUTES*********************************************/

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (routes home-routes app-routes)
      (wrap-log "adapter" false stripe-nothing-keys stripe-nothing-headers) ;; Show all
      (wrap-reload)
      (wrap-refresh ["src" "resources"])
      (handler/site)
      (wrap-base-url)
      (wrap-log "handler" false stripe-keys stripe-headers) ;; Stripe the most
  ))
