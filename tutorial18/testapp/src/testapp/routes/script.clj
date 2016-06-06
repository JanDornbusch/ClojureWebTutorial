(ns testapp.routes.script
  (:require [compojure.core :refer :all]
            [testapp.views.layout :as layout]))

(defn scriptbase []
  (layout/common
    [:div#viewport
      [:div#main_alt
       [:h1 "Scripted"]
       [:hr]
       [:main]
       [:script {:src "/js/app.js"}]]]))

(defroutes script-routes
  (GET "/script" [] (scriptbase)))
