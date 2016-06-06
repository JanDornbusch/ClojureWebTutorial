# Tutorial 18 - Writing **ClojureScript** with simple **event(s)** registering
After the last tutorial pointed out about states and reloadable code we will continue here and have a look at javascript events.

- [Preparing HTML](#preparing-html)
- [Registering events](#registering-events)

## Preparing HTML
Wouldn't it be nice to use Hiccup withing ClojureScript to create our HTML to add to the main function?
Yes it would. So lets include its ClojureScript companion. Within `testapp\ project.clj ` we will add a new dependencie `[hiccups "0.3.0"] ` .

Now we can go into `testapp\ scripts\ core.cljs ` and create a button:

```clojure
;; adding
(:require-macros [hiccups.core :as hiccups :refer [html]])

;; and change content of main function to
(html "Hello World from ClojureScript!"
                      [:section
                       [:span "Clicks: "]
                       [:span {:id "clicksnumber"}]]
                      [:button {:id "button"} "Click me"])

```

## Registering events
We will use goog here to register events to the button. Changing `testapp\ scripts\ core.cljs ` again:

```clojure
;; adding
(:require [goog.events :as events]
            [goog.dom :as dom])

;; and create a function to register events to our button
(defn counter
  []
  (let [counter (atom 0)
        button  (dom/getElement "button")
        display (dom/getElement "clicksnumber")]

    ;; Set initial value
    (set! (.-innerHTML display) @counter)

    ;; Assign event listener
    (events/listen button "click"
                   (fn [event]
                     ;; Increment the value
                     (swap! counter inc)
                     ;; Set new value in display element
                     (set! (.-innerHTML display) @counter)))))

;; to apply this events to the button add
(counter)
;; after (main)

```

The value of the Button is not persistent to code reloads. As you learned by the last tutorial you should be able to persist it.

Figwheels author suggests to use teardown strategies here if you are not using react:

```clojure
(defn setup []
   (.on ($ "div#app") "click" "a.button" (fn [e] (print "clicked button"))))

(defn teardown []
   (.off ($ "div#app") "click" "a.button")

;; define a reload hook in the
(defn fig-reload-hook []
      (teardown)
      (setup))

```

As him states 'This is one of the reasons React is so damn brilliant.' we will not go further here and have a deeper look inside ClojureScript with React in later tutorials!
