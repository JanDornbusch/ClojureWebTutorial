# Tutorial 13 - Playing with **URL parameters** and antipatterns
If you programmed PHP you possible know about mod_rewrite to cover URL with dynamic parameters. Here we will have a look at how URL parameters work within clojure.
There should be no problems if you try out all this even before go through the guestbook tutorials.

- [Why parameters](#why-parameters)
- [Prepare a demo](#prepare-a-demo)
- [How the routes work](#how-the-routes-work)

## Why parameters
When navigating withing pages you want to hand over parameters to your pages. If you use the common syntax `?param=value ` search engines possible will not follow it as dynamic content which possible already has changed on next visits.
In case of parameters you should guarantee that they point to the same conent all time. In my oppinion it is even possible to act this way with edits.
If content is edited I suggest to treat it as deleted! And the update as new content. Some systems would link these contents so you can see the changes (look how github works).
It will be your task to determine if this is required, but I would prefer to stick to a way like this.
Remember the last time you search something at google and the page you openeed did not contain it anymore because it has gone to another site! (Do not append new content at position 1 and move others back to 2nd,3rd... pages. Keep in mind writing a book, new conetent goes to the end!)

## Prepare a demo
To investigate the way parameters work we will create a new route within a new file `testapp\ src\ testapp\ routes\ eval.clj (new) `.

```clojure
(ns testapp.routes.eval
  (:require [compojure.core :refer :all]
            [testapp.views.layout :as layout]))

(defn parse-integer
  "Reads a number from a string."
  [input]
  (Integer. (re-find  #"^-?\d+" input )))

(defn parse-number
  "Reads a number from a string. Returns nil if not a number."
  [input]
  (if (re-find #"^-?\d+?" input)
    ; only use secured!
    (read-string input)))

; the next function is
(defn map-parse-number
  "Reads all numbers from string"
  [input]
  ; Take care with read-string this can be much evil if not secured correctly!
  (map read-string (re-seq #"[\d.]+" input)))


(defn evaluate [number func]
  "This function evaluates whether the number is even or not"
  (layout/common
    [:div#viewport
      [:div#main_alt
        [:h1 "Live eval"]
        [:hr]
        (let [numberInt (func number)]
          [:p "The given number " number " recognized as " numberInt " is "
           (cond
             (nil? numberInt) "not a number"
             (even? numberInt) "even"
             :else "uneven")])]]))

(defn livelisp [input]
  "antipattern"
  (layout/common
    [:div#viewport
      [:div#main_alt
        [:h1 "Live REPL"]
        [:hr]
        [:p input]
        [:p (eval (read-string input))]]]))

(defroutes eval-routes
  (GET "/evali/:number" [number] (evaluate number parse-integer))
  (GET "/eval/:number" [number] (evaluate number parse-number))
  (GET "/repl/:input" [input] (livelisp input)))

```

!!Only possible at this point if you passed tutorial 6 of guestbook already!!
We will add a style update here `testapp\ src\ testapp\ css\ screen.clj ` and recompile it.

```clojure
  [:#main_alt {
       :margin [[0 "auto"]]
       :padding [[(px 25) 0 (px 5) 0]]
       :width (px 500)
       :color text-color-contrast
       :text-align "center"}]

```

!!Continue here!!

Next we have to add our path to the app in `testapp\ src\ testapp\ handler.clj `.
First of all you will have to add a reference to the new route:

```clojure
[testapp.routes.eval :refer [eval-routes]]

```

now the new route have to be added to the routes macro as shown below:

```clojure
  "Stack of APP to execute on requests"
  (-> (routes home-routes eval-routes app-routes)
```

remember to stay before `app-routes ` or it will not be resolved because there already has been an not-found route!

## How the routes work
You can try to access one of the following routes now
- http://localhost:8080/evali/10
- http://localhost:8080/eval/10%2010
- http://localhost:8080/eval/%28+%2010%2010%29
- http://localhost:8080/repl/%28+%2010%2010%29

and you will see several different outputs. Take care with the antipattern you could use all available clojure to access the hdd of the computer executing the code! The evali route uses the `Integer. ` function the eval route uses `read-string ` secured and the repl route is the unsecured version.

How does the routes work? Have a look at `(GET "/repl/:input" [input] (livelisp input)) ` we are telling compojure here that we expect a path like `ourdomain.com/repl/parameter` this parameter will be bound to input which we can use later.

Limits within routs are `. , ; ? or / ` a dot will tell the app you are accessing a file within the ressources and the slash will not more match to our pattern. The questionmark is used to start visible parameters. About the comma and semicolon I am not sure at the moment. To match a route with slashes we would have to declare a route like `(GET "/repl/:input/:action" [input action] (livelisp input action)) `
More information about matching you can get at the undelying library [clout](https://github.com/weavejester/clout).

Compojure is an intelligent library which offers us regex support to URL matching.
Starting with compojure 1.3.0 inline regex where introduced and defined like `"/user/:id{[0-9]+}" `.
The old style used befor looked like `["/user/:id", :id #"[0-9]+"] `.

Introduction of RegEx coul be found at [vogella](http://www.vogella.com/tutorials/JavaRegularExpressions/article.html) or [ocpsoft](http://www.ocpsoft.org/opensource/guide-to-regular-expressions-in-java-part-1/)
