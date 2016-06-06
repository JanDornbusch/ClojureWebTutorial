(ns testapp.script.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [goog.events :as events]
            [goog.dom :as dom]))

(defn set-html! [el content]
  (set! (.-innerHTML el) content))

(defn main
  []
  (let [content (html "Hello World from ClojureScript!"
                      [:section
                       [:span "Clicks: "]
                       [:span {:id "clicksnumber"}]]
                      [:button {:id "button"} "Click me"])
        element (aget (js/document.getElementsByTagName "main") 0)]
    (set-html! element content)))

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

(main)
(counter)
