(ns testapp.handler
  (:require [compojure.core :refer [defroutes routes]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]
            [hiccup.middleware :refer [wrap-base-url]]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [testapp.routes.home :refer [home-routes]]
            [testapp.models.guestbook :as db])
  (:use [ring.middleware.refresh]))

(defn init []
  (println "testapp is starting")
  (if-not (.exists (java.io.File. "./db.sq3"))
    (do (println "creating database")
        (db/create-guestbook-table))))

(defn destroy []
  (println "testapp is shutting down"))

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (routes home-routes app-routes)
      (wrap-reload)
      (wrap-refresh ["src" "resources"])
      (handler/site)
      (wrap-base-url)))
