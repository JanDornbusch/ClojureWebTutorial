# Tutorial 15 - Custom error page
Sounds obvious, but when you start think about this you will ask your self, if you really need this.
Currently we have just a simple text "not found" on routes not exist.
But normally no one want show the users the old fashon 404 and other error pages.
Bigger applications start to use error pages presenting their corporate design.

- [What is possible](#what-is-possible)
    - [Route not found - 404 by browser](#route-not-found---404-by-browser)
    - [Route not found - 404 customizing](#route-not-found---404-customizing)
        - [Template](#template)
        - [CSS](#css)
        - [Building CSS](#building-css)
        - [Testing](#testing)
    - [Internal errror - 500 customizing](#internal-errror---500-customizing)

## What is possible
From within our application we can handle all expected:

* Someone tries to access a path not exist
* The users rights are insufficient
* A session timed out

What we not can handle from within our application is the unexpected:

* Application crashes
* Application times out
* Errors appear before our handlers are in game

There are solutions for both! The first we can handle within our code.
The 2nd is done by our server we run. Most webservers provide remplates you can modify to customize your error responses.
This are normally html files and the usage can vary by server to server.

[Jettys Server Howto](https://wiki.eclipse.org/Jetty/Howto/Custom_Error_Pages)

### Route not found - 404 by browser
You can decide, if you want to send out hard 404 errors or if you prefer delivering a page telling nothing is there.
Both is done in `testapp\ src\ testapp\ handler.clj ` .
The first way is looking like:

```clojure
(defroutes app-routes
  (route/resources "/")
  (route/not-found {:status 404
                    :body "Not shown due to browsers own error page!"}))

```

Which will lead the browser to show its own error page!

### Route not found - 404 customizing
The alternative to browser error pages is just to deliver content pages to tell the user nothing is there!
We will change our handler in `testapp\ src\ testapp\ handler.clj ` :

```clojure
;; Add to requires
[testapp.views.layout :refer [not-found]]

;; change the app-routes to:
(defroutes app-routes
  (route/resources "/")
  (route/not-found (not-found "Ooooops! Something gone wrong! Noting is found here!")))

```

#### Template
So we deliver the not-found template with our error text! The template we will have to define in our layout `testapp\ src\ testapp\ views\ layout.clj ` adding:

```clojure
(defn not-found [& body]
  "404 Error Page!"
  (html5
    [:head
     [:title "Page not found - 404"]
     (include-css "/css/errors.css")]
    [:body
     [:div#head [:div#logo "MyPage"]]
     [:div#body body]]))

```

Remember this is not a real error page. But it is a good demonstration of how it works!

#### CSS
Looking at the code you will notice a new css file included. We will create it here `testapp\ src\ testapp\ css\ errors.clj ` with content:

```clojure
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

```

#### Building CSS
And next will be to build the file. We change our project configuration at `restapp\ project.clj ` and add:

```clojure
            {:id "error-style"
             :source-paths ["src/testapp/css"]
             :stylesheet testapp.css.errors/errors
             :compiler {:output-to "resources/public/css/errors.css"
                        :vendors ["webkit" "moz" "o"]
                        :auto-prefix #{:box-shadow}
                        :pretty-print? true}}

```

to the garden config. After this is done we have to rerun the garden compiler `lein garden auto ` and generate it.

#### Testing
Now you can see the custom error page when accessing any [invalid path](http://localhost:8080/not).


### Internal errror - 500 customizing
Catching errors and returning status 500 could be nice. Looking inside our application we already gathered some parts of code which can fail. In case we not can write our log, nothing is send back to the client.
We can add there:

```clojure
{:status 500
 :body "Errormessage"}

 ```

 to tell the client what happened or what gone wrong.

 You could also write a middleware to catch expeptions:

 ```clojure
 (defn wrap-exception [handler]
  (fn [request]
    (try
      (handler request)
      (catch Exception ex
         {:status 500
          :body (str "Exception caught: " (.getMessage e)}))))

 ```
