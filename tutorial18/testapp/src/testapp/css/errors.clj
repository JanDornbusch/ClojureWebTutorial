(ns testapp.css.errors
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px s em]]
            [garden.color :as color :refer [hsl rgb rgba]]
            [garden.def :refer [defcssfn]]))

;; Define url function => url(param)
(defcssfn url)
;; Define linear-gradient => linear-gradient(param)
(defcssfn linear-gradient)
;; Function to return x%)
(defn % [x]
  "returns 'x%'"
  (str x "%"))

;; ********** COLORS ************************** COLORS ******************** COLORS ***********************

(def logo-color (rgb 255 255 255))             ;; http://www.color-hex.com/color/ffffff

(def header-background-up (rgb 193 193 193))   ;; http://www.color-hex.com/color/c1c1c1
(def header-background-bot (rgb 51 51 51))     ;; http://www.color-hex.com/color/333333
(def header-border-bot (rgb 206 206 206))      ;; http://www.color-hex.com/color/cecece

(def background (rgb 242 242 242))             ;; http://www.color-hex.com/color/f2f2f2

(def design-black (rgb 0 0 0))                 ;; http://www.color-hex.com/color/000000
(def design-white (rgb 255 255 255))           ;; http://www.color-hex.com/color/ffffff

;; ********** keywords ************************** keywords ******************** keywords ***********************

(def auto "auto")
(def bold "bold")
(def inline-block "inline-block")
(def solid "solid")

;; ********** screen ************************** BASIC ******************** screen ***********************

(defstyles errors
  [:* {
       :margin 0}]

  [:html {
       :height (% 100)}]

  [:body {
       :height (% 100)
       :font-family "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
       :font-size (px 13)
       :background-color background}]

  [:#head {
       :margin 0
       :padding [[(px 4) (px 25)]]
       :background (linear-gradient header-background-up header-background-bot)
       :border-bottom [[(px 1) solid header-border-bot]]}]

  [:#logo {
       :color logo-color
       :font-family "Arial Rounded MT"
       :font-weight bold
       :font-size (px 30)
       :display inline-block
       :padding [[(px 2) (px 5)]]}]

  [:#body {
       :margin [[0 auto]]
       :padding [[(px 25) 0 (px 5) 0]]
       :width (% 80)
       :background-color design-white}])
