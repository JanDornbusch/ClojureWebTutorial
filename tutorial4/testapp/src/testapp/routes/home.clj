(ns testapp.routes.home
  (:require [compojure.core :refer :all]
            [testapp.views.layout :as layout]
            [hiccup.form :refer :all]))

(defn list-entries []
  [:ul
   (for [{:keys [message name timestamp]}
         [{:message "Hi, I am Alice!" :name "Alice" :timestamp nil}
          {:message "Bob sends a message to Alice" :name "Bob" :timestamp nil}
          {:message "Charlie is the evil who tries to steal this message" :name "Charlie" :timestamp nil}]]
     [:li
      [:cite name] " @ "
      [:time timestamp]
      [:blockquote
        [:p message]]])])

(defn show-guestbook [& [name message error]]
  (layout/common
    [:h1 "Guestbook"]
    [:p "Welcome to my guestbook"]
    [:p error]
    ;; here we create a form with text fields called "name" and "message"
    ;; these will be sent when the form posts to the server as keywords of
    ;; the same name
    (form-to [:post "/"]
      [:p "Name"]
      (text-field "name" name)
      [:p "Message"]
      (text-area {:rows 10 :cols 40} "message" message)
      [:br]
      (submit-button "Write"))
    [:hr]
    ;; here we call our list-entries function
    ;; to generate the list of existing comments
    (list-entries)))

(defn save-new-message [name message]
  (cond
    (empty? name)
    (show-guestbook name message "Forgot your name? Or did your mother give you none?")
    (empty? message)
    (show-guestbook name message "Nothing to say?")
    :else
    (do
      ;; (Debug)message to console
      (println name message)
      (show-guestbook name))))

(defroutes home-routes
  (GET "/" [] (show-guestbook))
  (POST "/" [name message] (save-new-message name message)))
