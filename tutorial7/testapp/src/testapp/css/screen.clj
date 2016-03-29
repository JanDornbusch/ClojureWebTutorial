(ns testapp.css.screen
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px s em]]
            [garden.color :as color :refer [hsl rgb rgba]]
            [garden.def :refer [defcssfn]]))

;; Optional require and url def function
;; [garden.stylesheet :refer [cssfn]]
;; (def url (cssfn :url))

;; Define url function => url(param)
(defcssfn url)
;; Define linear-gradient => linear-gradient(param)
(defcssfn linear-gradient)
;; Define colors used
;;(def guestbook-background (rgb 132 121 95)) ;; use this with included png
(def guestbook-background (rgb 0 0 0))
(def element-background (rgb 255 255 255))
(def text-color (rgb 0 0 0))
(def text-color-contrast (rgb 255 255 255))
(def text-error-color (rgb 255 0 0)) ;; http://www.color-hex.com/color/ff0000
(def background-error-color (rgb 255 153 153)) ;; http://www.color-hex.com/color/ff9999
;;(def guestbook-background-frame (rbga 132 121 95 .4)) ;; use this with included png
(def guestbook-background-frame (rgba 255 255 255 0.3))
(def guestbook-background-frame-shadow (rgba 0 0 0 0.3))
(def guestbook-active-color (rgb 32 80 160)) ;; http://www.color-hex.com/color/2050a0
(def guestbook-inactive-color (rgb 121 150 198)) ;; http://www.color-hex.com/color/7996c6
(def guestbook-active-background-color (rgb 210 220 236)) ;; http://www.color-hex.com/color/d2dcec
(def guestbook-active-shadow (rgba 121 150 198 0.8)) ;; http://www.color-hex.com/color/7996c6


(defstyles entry-form
  [:fieldset {
               :padding [[0 (px 40) (px 35) (px 50)]]
               :margin 0
               :border [[(px 0) "solid" "transparent"]]}
   [:ul {
          :margin 0
          :padding [[(px 15) 0 0 0]]
          :list-style-type "none"}]

   [:li {
          :float "left"
          :margin [[0 0 (px 12) 0]]
          :padding 0
          :width (px 253)}]

   [:li:first-child {
                      :margin [[0 (px 40) (px 12) 0]]}]

   [:legend {
              :margin [[0 0 0 (px -60)]]
              :padding [[(px 7) (px 20)]]
              :color element-background
              :font-weight "bold"
              :font-size (px 18)
              ; :border-radius (px 5) ;; If you want to remove the edges
              :background (linear-gradient guestbook-inactive-color guestbook-active-color)
              :box-shadow [[(px 1) (px 1) (px 2) "#CCC"]]}]]

  [:form {
           :border 0
           :width (px 360)
           :background-color element-background
           :border-radius (px 5)
           :padding [[(px 15) 0 0 0]]
           :margin [[0 "auto"]]
           :position "relative"}]

  [:label {
            :float "left"
            :inline-height "167%"
            :width (px 83)
            :cursor "pointer"
            :position "relative"}]

  [:input :textarea {
                      :float "left"
                      :height (px 20)
                      :width (px 161)
                      :border [[(px 1) "solid" guestbook-inactive-color]]
                      :padding 0
                      ;; :transition [[all (s 0.25) ease-in-out]] ;; Fades in and out the background (I do not like it much)
                      :background element-background}]

  [:textarea {
               :height (px 100)}]

  [:input:active
   :input:hover
   :input:focus
   :textarea:active
   :textarea:hover
   :textarea:focus {
                     :border-color guestbook-active-color
                     :background-color guestbook-active-background-color}]

  [:input.btnReset
   :input.btnSubmit {
                      :margin [[(px 25) 0 0 0]]
                      :float "left"
                      :width (px 85)
                      :height (px 30)
                      :cursor "pointer"
                      :font-weight "bold"
                      :color "#FFF"
                      :text-align "center"
                      :padding [[0 0 (px 2) 0]]
                      :text-indent (px 0)
                      :border [[(px 1) "solid" guestbook-inactive-color]]
                      :background guestbook-inactive-color}]

  [:input.btnSubmit {
                      :float "right"
                      :margin-right (px 7)
                      :border [[(px 1) "solid" guestbook-active-color]]
                      :background guestbook-active-color}]

  [:input.btnReset:hover
   :input.btnReset:active
   :input.btnReset:focus {
                           :border-color guestbook-active-color}]

  [:input.btnSubmit:hover
   :input.btnSubmit:active
   :input.btnSubmit:focus {
                           :box-shadow [[0 0 (px 8) guestbook-active-shadow]]}]


  [:em {
         :font-weight "bold"
         :font-size "142%"
         :color "#E00"}]

  ["label[title~=\"mandatory\"]:after" {
                                         :content "\"*\""
                                         :position "absolute"
                                         :left (px 70)
                                         :top 0}]

  ["label[title~=\"mandatory\"]:after" :em {
                                             :font-weight "bold"
                                             :font-size "142%"
                                             :color "#E00"}]
)

(defstyles entry-form-errors
    [:.error {
               :color text-error-color}]

    [:.error
      [:input :textarea {
                :border-color text-error-color
                :background-color background-error-color}]]

    [:.errorMessage {
                      :float "left"
                      :width (px 360)
                      :margin [[0 0 (px 20) (px -50)]]
                      :padding 0
                      :border-width [[(px 1) 0]]
                      :border-style "solid"
                      :border-color text-error-color
                      :color text-error-color
                      :background-color background-error-color}
     [:span {
              :display "inline-block"
              :padding [[(px 15) (px 40) (px 15) (px 50)]]}]]
  )

(defstyles entry
  [:#footer
   [:ol {
          :list-style-type "none"}]

   [:li {
          :float "left"
          :padding 0
          :margin (em 0.5)
          :border-width (px 1)
          :border-style "solid"
          :border-image [[(linear-gradient "to bottom" guestbook-inactive-color guestbook-active-color) "1 100%"]]
          :border-image-slice 1}]

   [:.commentAuthor {
                      :background-color guestbook-active-color
                      :color text-color-contrast
                      :font-weight "bold"
                      :padding (em 0.2)
                      :width (em 20)
                      }]

   [:.comment {
                :background-color element-background
                :padding (em 0.2)
                :width (em 20)
                }

    [:blockquote {
                   :padding-bottom (em 0.5)
                   }]]

   [:.date {
             :background-color guestbook-active-background-color
              }]

  ])

(defstyles screen
  [:*
   {
     :margin 0}]

  [:html
   {
     :height "100%"}]

  [:body
   {
     :height "100%"
     :color text-color
     :font-family "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
     :font-size (px 13)
     :background [[guestbook-background (url "/img/bg_guestbook.jpg") 0 0 "repeat-x"]] ;; .png alternative is in project
     :background-size "cover"
     :background-repeat "no-repeat"
     }]

  [:#viewport
   {
     :min-height "100%"
     :height [["auto" "!important"]]
     'height "100%" ;; Workaround using ' to reuse the key, do you know a better way?
     :width "100%"
     :margin [[0 "auto" (px -200)]]}]

  [:#main
   {
     :margin [[0 "auto"]]
     :padding [[(px 25) 0 (px 5) 0]]
     :width (px 500)
     :box-shadow [[0 (px 0) (px 10) guestbook-background-frame-shadow]]
     ;:border-bottom-right-radius (px 5)
     ;:border-bottom-left-radius (px 5)
     :background-color guestbook-background-frame ;; Change this to 132,121,95,.4 when use png included
    }]

  [:#footer :#space
   {
     :width "100%"
     :height (px 200)}]

  [:#footer
   {
     :background-color guestbook-background-frame
     :overflow "auto"
     }]

    entry-form
    entry-form-errors
    entry
  )

