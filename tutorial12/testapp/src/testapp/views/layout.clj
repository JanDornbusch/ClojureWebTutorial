(ns testapp.views.layout
  (:require [hiccup.page :refer [html5 include-css]]))

(defn common [& body]
  "Default layout to guestbook page"
  (html5
    [:head
     [:title "Welcome to my Clojure Web Tutorial"]
     (include-css "/css/screen.css")]
    [:body body]))
