(ns testapp.views.layout
  (:require [hiccup.page :refer [html5 include-css]]))

(defn common [& body]
  "Default layout to guestbook page"
  (html5
    [:head
     [:title "Welcome to my Clojure Web Tutorial"]
     (include-css "/css/screen.css")]
    [:body body]))

(defn not-found [& body]
  "404 Error Page!"
  (html5
    [:head
     [:title "Page not found - 404"]
     (include-css "/css/errors.css")]
    [:body
     [:div#head [:div#logo "MyPage"]]
     [:div#body body]]))
