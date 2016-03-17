(ns testapp.css.screen
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px]]))

(defstyles screen
  [:body
   {:color "#555"
    :font-family "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    :font-size (px 13)}]
  [:h1
   {:text-align "center"}])
