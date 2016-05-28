(ns testapp.script.core)

(defn set-html! [el content]
  (set! (.-innerHTML el) content))

(defonce ts (.getTime (js/Date.)))

(defn main
  []
  (let [content (str "Hello World from ClojureScript " ts)
        element (aget (js/document.getElementsByTagName "main") 0)]
    (set-html! element content)))

(main)
