#Tutorial 7 - Style the guestbook with **CSS**
This tutorial will help you to gather some practise in CSS. (Server side validation, client side we will add within next tutorial).

- [Changes to HTML](#changes-to HTML)
- [Changing project setup](#changing-project setup)
- [Changing HTML](#changing-html)
    - [Knowledgebase](#Knowledgebase)
- [Adding CSS](#adding-css)
    - [Merging styles](#merging-styles)
    - [Special CSS - background-image: url(...)](#special-css - background-image: url...))
    - [Special CSS - double attributes](#special-css - double attributes)
    - [Special CSS - cascading and vectors](#special-css - cascading and vectors)
    - [Additional infos](#additional-infos)
    - [Full file](#full-file)


##Changes to HTML
Starting to change the Structure of our guestbook. File: `testapp\ src\ testapp\ routes\ home.clj`.

```clojure
(defn show-guestbook [& [firstname message error]]
  (layout/common
    ;; [:h1 "Guestbook"]                     ;; Remove
    ;; [:p "Welcome to my guestbook"]        ;; Remove
    ;; [:p error]                            ;; Remove
    ;; here we create a form with text fields called "firstname" and "message"
    ;; these will be sent when the form posts to the server as keywords of
    ;; the same name
    [:div#main                               ;; Adding & changing here
      (form-to [:post "/"]
        [:fieldset#guestbookForm
          [:legend "Guestbook"]
            [:ul
              [:li "Form fields marked with " [:em {:title "mandatory"} "*"] " are mandatory and must be completed."]
              [:li
                 [:label {:for "firstname" :title "mandatory"} "First name"]
                 (text-field {:id "firstname" :aria-required "true"} "firstname" firstname)]
              [:li
                 [:label {:for "message" :title "mandatory"} "Message"]
                 (text-area {:rows 10 :cols 40 :id "message" :aria-required "true" :placeholder "Remember, be friendly!"} "message" message)]
              [:li
                 (reset-button {:class "btnReset"} "Reset")
                 (submit-button {:class "btnSubmit"} "Submit")]
            ]
          ])
      ;; here we call our list-entries function
      ;; to generate the list of existing comments
      (list-entries)]))
```

What we did here?
We removed parts of the guestbook not more will need at end of this tutorial.
We changed the `paragraphs ` to a list, which we will style later.
Adding the `lable ` with `for ` attribute pointing to the `id ` of form fields. Which will let the cursor jump into the fields when clicking onto them.
Within the form elements we added an `aria-required ` directive to tell screen readers the field is required.

What you only will see in code is the renaming of the field guest-name to firstname, as I think this is fitting better.

##Changing project setup
File `testapp\ project.clj `. We will add compiler information to garden.

```clojure
:garden ...
  :compiler {...
             :vendors ["webkit" "moz" "o"]
             :auto-prefix #{:box-shadow}
             ...

```

With this code all occurances of `box-shadow ` will become to:

```css
// source: :box-shadow [[0 (px 0) (px 10) "rgba(0, 0, 0, 0.3)"]]
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
  -o-box-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
```

Most of this special CSS prefixes are not more required in modern browsers. See [W3Schools - box-shadow](http://www.w3schools.com/cssref/css3_pr_box-shadow.asp) explains are given at "Browser Support" chapter.


##Changing HTML
We will change the file `testapp\ src\ testapp\ routes\ home.clj ` to change the HTML layout a little and change the server side validation.

First of all the layout of our entries:

```clojure
(defn list-entries []
  [:ol
    (for [{:keys [message gname timestamp]} (db/read-entries)]
     [:li
      [:div.commentAuthor
        [:cite gname]]
      [:div.comment
        [:blockquote
          [:p message]]
        [:p.date (format-time timestamp)]]
      ])])
```

This allows us to format the entries with a header, content and a footer.

Our input form needs more changes, as we need a layout suitable to css formats.

```clojure
(defn show-guestbook [& [firstname message errorName errorMessage]]
  (layout/common
    ;; [:h1 "Guestbook"]                     ;; Remove
    ;; [:p "Welcome to my guestbook"]        ;; Remove
    ;; [:p error]                            ;; Remove
    ;; here we create a form with text fields called "firstname" and "message"
    ;; these will be sent when the form posts to the server as keywords of
    ;; the same name
    [:div#viewport
      [:div#main                               ;; Adding & changing here
        (form-to [:post "/"]
          [:fieldset#guestbookForm
            [:legend "Guestbook"]
              [:ul
                [:li "Form fields marked with " [:em {:title "mandatory"} "*"] " are mandatory and must be completed."]
               ;; Here we will add errormessages
               (if (or errorName errorMessage)
                         [:li.errorMessage
                          [:span
                           (if errorName errorName)
                           (if errorMessage errorMessage)
                           ]])
                [(if errorName :li.error :li)
                   [:label {:for "firstname" :title "mandatory"} "First name"]
                   (text-field {:required true :id "firstname" :aria-required "true"} "firstname" firstname)]
                [(if errorMessage :li.error :li)
                   [:label {:for "message" :title "mandatory"} "Message"]
                   (text-area {:required true :rows 10 :cols 40 :id "message" :aria-required "true" :placeholder "Remember, be friendly!"} "message" message)]
                [:li
                   (reset-button {:class "btnReset"} "Reset")
                   (submit-button {:class "btnSubmit"} "Submit")]
              ]
            ])]
       [:div#space]]
        ;; here we call our list-entries function
        ;; to generate the list of existing comments
     [:div#footer
        (list-entries)]))
```

This layout offers us a div we can add transparency surrounding the form. A propper layout to the form and additional divs for footer and placeholder techniques.

And finally we change the validation as we will use server-side validation as well. Even if you validate the clients input please never trust it! You can use tools to fake requests, change clients memory (client sides variables) and you can manipulate the page layout with plugins like ad-blockers and custom scripts.

```clojure
(defn save-new-message [firstname message]
  (cond
    (every? empty? [firstname message])
    (show-guestbook firstname message "Please enter your first name!<br />" "Please enter a message!")
    (empty? firstname)
    (show-guestbook firstname message "Please enter your first name!")
    (empty? message)
    (show-guestbook firstname message nil "Please enter a message!")
    :else
    (do
      (db/save-entry! firstname message)
      (show-guestbook firstname))))
```

This is our code to simply validate the inputs. WARNING: Currently we are not striping bad chars from input.

###Knowledgebase
Most HTML code is self-explaining. But you might have questions about hiccup creation. One thing you might ask is how to create a required field `<input type="text" ... required>` with hiccup.

```clojure
;; This will procude a compiling error (auto generated by [1nd HTML to hiccup converter](http://html2hiccup.buttercloud.com/).
 (text-field {:required :id "firstname" :aria-required "true"} "firstname" firstname)

;; This produces the wrong syntax (auto generated by [2nd HTML to hiccup converter](http://htmltohiccup.herokuapp.com/).
 (text-field {:required "required" :id "firstname" :aria-required "true"} "firstname" firstname)

;; Correct code to create required input fields in hiccup
(text-field {:required true :id "firstname" :aria-required "true"} "firstname" firstname)
```

Conditional elements:

```clojure
[(if errorName :li.error :li) ...
```

any other questions? Create an issue so I can extend this knowledgebase.


##Adding CSS
###Merging styles
First of all we will use separated functions merged together to create our style. There are macros for faster writing:

```clojure
(require '[garden.def :refer [defstyles defstylesheet]])

;; This:
(defstyles my-first-style
  [:h1 {:color "#F00"}])

;; is equivalent to:
(def my-first-style
  (list
    [:h1 {:color "#F00"}]))



;; This:
(defstylesheet screen
  ;; {:output-to (io/resource "public/css/screen.css")}
  my-first-style)

;; is equivalent to:
(def screen
  (css
  ;; {:output-to (io/resource "public/css/screen.css")}
    my-first-style))
```

###Special CSS - background-image: url(...)
Possible you already aked your self how to create css like `background-image: url(someurl); ` with garden? You will have to create css functions to attributes like this:

```clojure
;; add within :require
[garden.def :refer [defcssfn]]
;; this is a function we will use to create the url function
;; Define url function => url(param)
(defcssfn url)

;; alternative
;; [garden.stylesheet :refer [cssfn]]
;; (def url (cssfn :url))
```

###Special CSS - double attributes
In some case you will like to redefine attributes in order to achieve  compatibility with older broswers. You will get errrors or double usage of keys if you define them both like `:background-color `.

```clojure
;; this will not work
{
  :background-color (rgb 0 0 0)
  :background-color (rgba 0 0 0 0)
}

;; this will work, but i guess there is a better style possible - if you know one please create an issue
{
  :background-color (rgb 0 0 0)     ;; 1st
  'background-color (rgba 0 0 0 0)  ;; 2nd
  "background-color" (...)          ;; 3rd
  ;; 2nd and 3rd are exchangeable but normally you use only 2
}
```

###Special CSS - cascading and vectors
How to create attributes with multiple values without comma (`0 0 0 0 `) or how to cascade selectors `#main ul ` or create `input, textarea ` will be explained here.

```clojure
;; VECTOR
;; If you want to create a margin with 4 values without commas use double vectors
:margin [[0 0 (px 20) (px -50)]]
;; will generate => margin: 0 0 20px -50px;

;; If you want a comma separated list use a single vector
:makeNoSense [0 1]
;; will generate => makeNoSense: 0, 1;

:background (linear-gradient color1 color2)
;; will generate => background: linear-gradient(color1, color2)

;; CASCADING
;; using a definition for 2 elementsw, classes or a mixture
  [:#footer :#space
   {:width "100%"}]
;; will generate =>
;; #footer, #space {
;;   width: 100%;}

;; styling elements which are logically cascaded
  [:#footer
   [:ol {
          :list-style-type "none"}]]
;; will generate =>
;; #footer ol {
;;    list-style-type: none;}

```

###Additional infos
For CSS in detail tutorials see [W3Schools CSS Tutorial](http://www.w3schools.com/css/default.asp). For further information have a look at [CSS-Tricks snippets](https://css-tricks.com/snippets/css/).

###Full file
Do not forget to start css auto build. We will edit the file `testapp\ src\ testapp\ css\ screen.clj `.

```clojure
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

  [:#viewport ;wrapper
   {
     :min-height "100%"
     :height [["auto" "!important"]]
     'height "100%" ;; Workaround using ' to reuse the key, do you know a better way?
     :width "100%"
     :margin [[0 "auto" (px -200)]]}]

  [:#main ; contentwrapper
   {
     :margin [[0 "auto"]]
     :padding [[(px 25) 0 (px 5) 0]]
     :width (px 500)
     :box-shadow [[0 (px 0) (px 10) guestbook-background-frame-shadow]]
     ;:border-bottom-right-radius (px 5)
     ;:border-bottom-left-radius (px 5)
     :background-color guestbook-background-frame ;; Change this to 132,121,95,.4 when use png included
    }]

  [:#footer :#space; footer
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

```
