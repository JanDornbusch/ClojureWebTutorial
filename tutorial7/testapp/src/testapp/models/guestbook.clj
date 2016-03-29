(ns testapp.models.guestbook
  (:require [clojure.java.jdbc :as sql])
  (:import java.sql.DriverManager))

;; define DB connection and/or type
(def db {:classname "org.sqlite.JDBC",
         :subprotocol "sqlite",
         :subname "db.sq3"})

(defn create-guestbook-table []
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
  (sql/query db
      ["SELECT * FROM guestbook ORDER BY timestamp DESC"]))

(defn save-entry! [guest_name message]
    (sql/insert! db 						                  ;; Connection
      :guestbook 							                    ;; Table
      [:gname :message :timestamp] 			          ;; Fields
      [guest_name message (new java.util.Date)])) ;; Data
