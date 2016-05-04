(ns testapp.models.guestbook
  (:require [clojure.java.jdbc :as sql]
            [hiccup.util :refer [escape-html]])
  (:import java.sql.DriverManager))

(def db
  "define DB connection and/or type"
  {:classname "org.sqlite.JDBC",
   :subprotocol "sqlite",
   :subname "db.sq3"})

(defn create-guestbook-table []
  "creates the guestbook table within the database"
  (sql/db-do-commands
    db
    (sql/create-table-ddl
      :guestbook
      [:id "INTEGER PRIMARY KEY AUTOINCREMENT"]
      [:timestamp "TIMESTAMP DEFAULT CURRENT_TIMESTAMP"]
      [:gname "TEXT"]
      [:message "TEXT"])
     "CREATE INDEX timestamp_index ON guestbook (timestamp)"))

(defn read-entries []
  "reads all entries within the guestbook table and returns a map"
  (sql/query db
      ["SELECT * FROM guestbook ORDER BY timestamp DESC"]))

(defn save-entry! [guest_name message]
  "saves the guests name and message within the guestbook"
    (sql/insert! db 						                  ;; Connection
      :guestbook 							                    ;; Table
      [:gname :message :timestamp] 			          ;; Fields
      [(escape-html guest_name)
       (escape-html message)
       (new java.util.Date)])) ;; Data
