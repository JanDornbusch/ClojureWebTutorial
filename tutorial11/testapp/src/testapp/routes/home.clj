(ns testapp.routes.home
  (:require [compojure.core :refer :all]
            [testapp.views.layout :as layout]
            [hiccup.form :refer :all]
            [testapp.models.guestbook :as db]))

(defn format-time [timestamp]
  "Time formatter for guestbook comments"
  (-> "dd/MM/yyyy HH:mm:ss"
      (java.text.SimpleDateFormat.)
      (.format timestamp)))

(defn list-entries []
  "Creates a list out of all entries within the guestbook"
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

(defn show-guestbook [& [firstname message errorName errorMessage]]
  "Creates the guestbook page. Containing the input form and adds the entries to the footer."
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
                   (text-field {:required true :pattern "[a-zA-Z0-9]{3,10}" :id "firstname" :aria-required "true"} "firstname" firstname)
                   [:span.form_hint "3 to 10 letters and/or numbers"]]
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

(defn save-new-message [firstname message]
  "Checks all inputs and saves them within the database if all fields required are submitted."
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

(defroutes home-routes
  "Define routes of guestbook"
  (GET "/" [] (show-guestbook))
  (POST "/" [firstname message] (save-new-message firstname message)))
