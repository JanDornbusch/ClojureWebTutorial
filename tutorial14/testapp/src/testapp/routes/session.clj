(ns testapp.routes.session
  (:require [compojure.core :refer :all]
            [testapp.views.layout :as layout]
            [ring.util.response :refer [content-type]]
            [noir.session :as noir]))

(defn session-content [session]
  "This function will list all contents of the session"
  (layout/common
    [:div#viewport
      [:div#main_alt
       [:h1 "Session"]
       [:hr]
        (for [[skey svalue] session]
          [:div [:h3 skey] svalue])]]))

;; ***************** DEFAULT *******************

(comment
(defn session-startup [request]
  "Makes sure the startup time of the session is set
  In reality you should write a wrapper to do this"
  (if (:startup (request :session))
    (do (println "Session variable already set")
         request)
    (do (println "Nothing in session, setting the var")
        (assoc-in request [:session :startup] (System/currentTimeMillis)))))

(defn show-session []
  "Will startup and return all content of the session"
  (fn [request]
    (let [response (session-startup request)]
      (-> (assoc response :body (session-content (response :session)))
          (content-type "text/html")))))

(defn register-session [skey svalue]
  "Will startup, add the new session-key and -value and return all content of the session"
  (fn [request]
    (let [response (assoc-in (session-startup request) [:session (keyword (str skey))] svalue)]
      (-> (assoc response :body (session-content (response :session)))
          (content-type "text/html"))))))

;; **************** NOIR *********************

(defn session-startup []
  "Makes sure the startup time of the session is set
  In reality you should write a wrapper to do this"
  (when-not (noir/get :startup)
    (println "Nothing in session, setting the var")
    (noir/put! :startup (System/currentTimeMillis))))

(defn show-session []
  "Will startup and return all content of the session"
  (session-startup)
  (session-content @noir/*noir-session*))

(defn register-session [skey svalue]
  "Will startup, add the new session-key and -value and return all content of the session"
  (session-startup)
  (noir/put! (keyword (str skey)) svalue)
  (session-content @noir/*noir-session*))

;; ************************************************

(defroutes session-routes
  (GET "/session" [] (show-session))
  (GET "/session/:skey/:svalue" [skey svalue] (register-session skey svalue)))


