(ns testapp.routes.eval
  (:require [compojure.core :refer :all]
            [testapp.views.layout :as layout]))

(defn parse-integer
  "Reads a single number from a string."
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

(comment
(defn livelisp [input]
  "antipattern"
  (layout/common
    [:div#viewport
      [:div#main_alt
        [:h1 "Live REPL"]
        [:hr]
        [:p input]
        [:p (eval (read-string input))]]])))

(defroutes eval-routes
  (GET "/evali/:number" [number] (evaluate number parse-integer))
  (GET "/eval/:number" [number] (evaluate number parse-number)))
  ;(GET "/repl/:input" [input] (livelisp input)))
