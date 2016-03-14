(ns testapp.routes.home
  (:require [compojure.core :refer :all]
            [testapp.views.layout :as layout]
            [hiccup.form :refer :all]
            [testapp.models.guestbook :as db]))

(defn list-entries []
  [:ul
    (for [{:keys [message guest_name timestamp]} (db/read-entries)]
     [:li
      [:cite guest_name] " @ "
      [:time (format-time timestamp)]
      [:blockquote
        [:p message]]])])

(defn show-guestbook [& [guest_name message error]]
  (layout/common
    [:h1 "Guestbook"]
    [:p "Welcome to my guestbook"]
    [:p error]
    ;; here we create a form with text fields called "name" and "message"
    ;; these will be sent when the form posts to the server as keywords of
    ;; the same name
    (form-to [:post "/"]
      [:p "Name"]
      (text-field "guest_name" guest_name)
      [:p "Message"]
      (text-area {:rows 10 :cols 40} "message" message)
      [:br]
      (submit-button "Write"))
    [:hr]
    ;; here we call our list-entries function
    ;; to generate the list of existing comments
    (list-entries)))

(defn save-new-message [guest_name message]
  (cond
    (empty? guest_name)
    (show-guestbook guest_name message "Forgot your name? Or did your mother give you none?")
    (empty? message)
    (show-guestbook guest_name message "Nothing to say?")
    :else
    (do
      (db/save-entry! guest_name message)
      (show-guestbook guest_name))))

(defroutes home-routes
  (GET "/" [] (show-guestbook))
  (POST "/" [guest_name message] (save-new-message guest_name message)))
