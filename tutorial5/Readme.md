# Tutorial 5 - Attach a simple **SQLite-Database** to store and read records
Within this tutorial we will update the project dependencies and create all needed database functions to store our guestbook entries inside a database. You can switch this to MySQL or other databases later on your own.

!Attention I renamed all variables named "name" to "guest_name" to prevent violatins with clojures name function - even if it would be possible to do so, please do not! This is ugly and bad code style!

- [Project dependencies](#project-dependencies)
- [Database functions](#database-functions)
	- [Namespace](#namespace)
	- [Databaseconnection](#databaseconnection)
	- [Table creation script](#table-creation-script)
		- [In-Depth-Explain-1](#in-depth-explain-1)
	- [Read-Entries](#read-entries)
		- [In-Depth-Explain-2](#in-depth-explain-2)
	- [Save-Entrie!](#save-entrie)
		- [In-Depth-Explain-3](#in-depth-explain-3)
	- [Full File 1](#full-file-1)
	- [MySQL](#mysql)
- [Changes to our guestbook functions](#changes-to-our-guestbook-functions)
	- [Requires and format-time](#requires-and-format-time)
	- [list-entries](#list-entries)
	- [save-new-message](#save-new-message)
	- [Full File 2](#full-file-2)
- [Changes to application startup](#changes-to-application-startup)
	- [Requires](#requires)
	- [Init](#init)
	- [Import](#import)
	- [Full File 3](#full-file-3)

## Project dependencies
File: `testapp\ project.clj `.

Let us start to update clojure, compojure and ring change:

```clojure
[org.clojure/clojure "1.6.0"]
[compojure "1.1.6"]
...
[ring-server "0.3.1"]]
:plugins [[lein-ring "0.8.12"]]
...
;; and the production profile dependencies
:dev
   {:dependencies [[ring-mock "0.1.5"] [ring/ring-devel "1.3.1"]]}})
```
to
```clojure
[org.clojure/clojure "1.7.0"]
[compojure "1.4.0"]
...
[ring-server "0.4.0"]]
:plugins [[lein-ring "0.9.7"]]
...
;; dev deps
:dev
{:dependencies [[ring/ring-mock "0.3.0"] [ring/ring-devel "1.4.0"]]}})
```
thats it.

But now we will use some more libraries within the dependencies section to get access to the database.

```clojure
;;JDBC dependencies
[org.clojure/java.jdbc "0.4.2"]
[org.xerial/sqlite-jdbc "3.8.11.2"]
```
So the complete project will look like this:
```clojure
(defproject testapp "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [compojure "1.4.0"]
                 [hiccup "1.0.5"]
                 [ring-server "0.4.0"]
                 ;; JDBC dependencies
                 [org.clojure/java.jdbc "0.4.2"]
                 [org.xerial/sqlite-jdbc "3.8.11.2"]]
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler testapp.handler/app
         :init testapp.handler/init
         :destroy testapp.handler/destroy}
  :profiles
  {:uberjar {:aot :all}
   :production
   {:ring
    {:open-browser? false, :stacktraces? false, :auto-reload? false}}
   :dev
   {:dependencies [[ring/ring-mock "0.3.0"] [ring/ring-devel "1.4.0"]]}})

```

Do not forget to reload the REPL to retrieve all project dependencies, when you look inside the connection (`View -> Connections `) you can see which dependencies are loaded inside your REPL.

## Database functions
Create a new file `testapp\ src\ testapp\ models\ guestbook.clj `
For now we will not need to split it in separate files, it might be a good idea to bring the connection definition into another file and include it here.

### Namespace
Start the file with a namespace and the required libraries.

```clojure
(ns testapp.models.guestbook
  (:require [clojure.java.jdbc :as sql])
  (:import java.sql.DriverManager))
```

### Databaseconnection
To connect the database we will define a connection.

```clojure
;; define DB connection and/or type
(def db {:classname "org.sqlite.JDBC",
         :subprotocol "sqlite",
         :subname "db.sq3"})
```
### Table creation script
To create Tables within our db.sq3 SQLite-File:
```clojure
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
```

#### In-Depth-Explain-1
We will need a table(relation) looking like this:

|Field|Type|Reason|Remarks|
|---|---|---|---|
|id|Integer|Index(obsolete)|Better use natural indexes! Autoincrement counts the id up by one each time a new row is inserted.|
|timestamp|Timestamp|The time of writing in our Guestbook|In our case the database is running on same machine so it does not matter which time we use as it should be same without use of microsecs. In case you use a database on different machines consider to let the database insert the default instead of providing a possible not in sync time of distributed servers.|
|gname|Text|Name of the writer.|Use varchar if possible. Naming the field name can result in keyword violation. (Same within clojure)|
|message|Text|The content(message) written to our guestbook.|Can be varchar if limited in length (maybe 4096) or use text.|

Why no ID? Many people use this in every single table within databases and run inside problems of datatype size when systems get heavy load. The better index within such a system would be:
- timestamp + username => the user could not write 2 messages in same time but 2 users could write same messages 
- username + message => the user is not able to post the same message 2 times
- timestamp + message => the user can post 2 different messages the same time
- timestamp => only one second can be recorded per time resolution (usually secs, if provided by INSERT).

Do not name fields(attributes) like keywords the database understands.
A good rule would be to use the table name as suffix to all fields(attributes).

Example of data structure

|id(Obsolete)|timestamp|gname|message|
|---|---|---|---|
|1|1457966538|Alice|Hi, I am Alice!|
|2|1457966548|Bob|Bob sends a message to Alice|
|3|1457966558|Charlie|Charlie is the evil who tries to steal this message|

### Read-Entries
Now we define a function to read all entries out of the database. Corresponding to the documentation this function returns a fully-realized sequence of rows.

```clojure
(defn read-entries []
  (sql/query db
      ["SELECT * FROM guestbook ORDER BY timestamp DESC"]))
```

#### In-Depth-Explain-2
As this is not a SQL tutorial I hope it is enough to say:
```sql
SELECT <fields> FROM <table> ORDER BY <field or list of fields> <sort order>
```
With * as &lt;fields&gt; it will collect all fields of the guestbook table, ordered by timestamp in descending order (newest first).

### Save-Entrie!
And finally we need a function to save new entries within the corresponding table of the database.

```clojure
(defn save-entrie! [guest_name message]
    (sql/insert! db 						;; Connection
      :guestbook 							;; Table
      [:gname :message :timestamp] 			;; Fields
      [guest_name message (new java.util.Date)])) ;; Data
```

#### In-Depth-Explain-3
This function will write the (name, message and timestamp (java.util.Date resolution is seconds)) into the fields (gname, message and timestamp) of our guestbook table within the database specified in "db". Rethink the use of java.util.Date with information given in [In-Depth-Explain-1](in-depth-explain-1).

### Full File 1

```clojure
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
    (sql/insert! db 						;; Connection
      :guestbook 							;; Table
      [:gname :message :timestamp] 			;; Fields
      [guest_name message (new java.util.Date)])) ;; Data      
```

### MySQL
[A good example of MySQL connection is given by the java.jdbc author.](https://github.com/clojure/java.jdbc)


## Changes to our guestbook functions
File: `testapp\ src\ testapp\ routes\ home.clj `

### Requires and format-time
We will have to include our just created database capabilities within the :requires

```clojure
[testapp.models.guestbook :as db]
```

and provide a suitable function to format our timestamp to something human readable.

```clojure
(defn format-time [timestamp]
  (-> "dd/MM/yyyy"
      (java.text.SimpleDateFormat.)
      (.format timestamp)))
```

(Remember to put this before first use (top of file)).

### list-entries
Within this function we will have to provide the data of database to the for loop. It will not help if we use always this predefined map of data here.

```clojure
(for [{:keys [message guest_name timestamp]} (db/read-entries)]
...
[:time (format-time timestamp)] ;; changed to format time (the name of function could be better I guess :D
```

### save-new-message
At this function we will remove the debug println we just let there last tutorial and replace it by this line:
```clojure
(db/save-entry! guest_name message)
```

### Full File 2

```clojure
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
```

## Changes to application startup
File: `testapp\ src\ testapp\ handler.clj `. We will check if the database exist and create in if its not existent.

### Requires
We will have to include the database model too.

```clojure
[guestbook.models.guestbook :as db]
```

### Init
After printing we will add our check of database

```clojure
(if-not (.exists (java.io.File. "./db.sq3"))
    (do (println "creating database")
        (db/create-guestbook-table))))
```

### Import
File: `testapp\ src\ testapp\ models\ guestbook.clj `.

If you want to import our 3 sample messages go into the model file, paste and run this code:

```clojure
(for [{:keys [message name timestamp]}
         [{:message "Hi, I am Alice!" :name "Alice" :timestamp nil}
          {:message "Bob sends a message to Alice" :name "Bob" :timestamp nil}
          {:message "Charlie is the evil who tries to steal this message" :name "Charlie" :timestamp nil}]]
    (save-entry! name message))
```

### Full File 3

```clojure 
(ns testapp.handler
  (:require [compojure.core :refer [defroutes routes]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]
            [hiccup.middleware :refer [wrap-base-url]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [testapp.routes.home :refer [home-routes]]
            [testapp.models.guestbook :as db]))

(defn init []
  (println "testapp is starting")
  (if-not (.exists (java.io.File. "./db.sq3"))
    (do (println "creating database")
        (db/create-guestbook-table))))

(defn destroy []
  (println "testapp is shutting down"))

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (routes home-routes app-routes)
      (handler/site)
      (wrap-base-url)))

```