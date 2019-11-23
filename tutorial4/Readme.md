# Tutorial 4 - Creating a **HTML form and data structure** used by guestbooks
Within this tutorial we will create a simple form used by guestbooks. I thought a long time about this step and if it would be better to start with a chat layout to be used later with websockets. But in case of training we will create this later.

- [Functions required](#functions-required)
- [Startup the Server](#startup-the-server)
    - [Instarepl](#instarepl)
    - [Evaluation](#evaluation)
    - [Run it](#run-it)
- [Creating functions](#creating-functions)
    - [requires](#requires)
    - [list-entries](#list-entries)
    - [show-guestbook](#show-guestbook)
    - [save-new-message](#save-new-message)
    - [defroutes](#defroutes)
    - [Try it](#try-it)

## Functions required
We will need 3 different functions.
1. One to list up all entries made by our guests,
2. another one to provide a form the user can use to make an entry
3. and one more to save the data send by the form to the webserver.

Assuming you know a little bit about HTML we will jump directly into clojure now.

## Startup the Server
I suggest to create a helper file to startup the server for now.
Let us create `testapp\ startup.clj ` and write this code inside:

```clojure
(use 'testapp.repl)
(start-server)
```

### Instarepl

As we are using LightTable which with Instarepl plugin is able to evaluate files on the fly, it can cause problems if we use the server start within a file we turned to Instarepl. (It can be found within the plugin manager and then inside the commands `ctrl+space ` and search for `instarepl` it will find an command to turn the current file live).

### Evaluation

The above mentioned methode can be usefull but an automatic server start loop would not be nice. So we created the `startup.clj ` file wich you must not turn live. Instead to evaluate you will use one of the following both methods.
1. To evaluate blocks use `Cmd/Ctrl+Enter ` by default
2. and in case you want to evaluate an entire file, this is bound to `Cmd/Ctrl+Shift+Enter `.

### NEW Evaluation VSCode

When using calva and VSCode you might press `Ctrl+Alt+C ` followed by  `Ctrl+Alt+J ` to open the REPL startup. It will promt you to choose a proiofie which in most cases will be `:dev ` followed by pressing ok. The REPL will start up. The new tab lets you evaluate all you enter. 
Inside codefiles you can eval the current form with `Ctrl+Alt+C ` followed by `V `. If you want to search a command in VSCode you can use `Ctrl+Shift+P ` to do so. If you are in Calva REPL you can navigate the history of commands up and down with `Alt+Up/Down `.

### Run it
To run the server use the `startup.clj ` file and evaluate both lines. If you forget to load the namespace with the first line you will get an exception
```clojure
clojure.lang.Compiler$CompilerException: java.lang.RuntimeException: Unable to resolve symbol: start-server in this context, compiling:(C:\Users\admin\OneDrive\Dokumente\ClojureWebTutorial\tutorial4\testapp\startup.clj:2:1)
```
In case the `use ` line throws an error it points to problems within your code which will prevent the `use ` to load it.
If all goes correct you will get some messages within the console (`View -> Console `):

```clojure
2016-03-12 12:08:24.676:INFO:oejs.Server:jetty-7.6.8.v20121106
2016-03-12 12:08:31.412:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:8080
startup.clj:	Started server on port 8080
startup.clj:	You can view the site at http://localhost:8080
```

Now you can open (ctrl+space) and search browser (Browser: add browser tab) or go to connections and connect an browser (tab). Alternative you can use any external browser and open `http://localhost:8080 ` (maybe with different port depending on your changes to the startup function).

The internal browser is really simple. I suggest to use and external browser like Firefox or Chrome.

## Creating functions
We will alter the `src\ testapp\ routes\ home.clj ` file.

Remember in functional programming the order of defining functions is important. You can not use a function wich is defined later within the same file.

### requires
To provide advanced HTML-form capabilities you have to extend the `:require ` block within the file by:

```clojure
[hiccup.form :refer :all]
```

(to see the complete code have a look inside the attached project)

### list-entries
This function has to be written inside the file too. It simulates 3 entries of our guestbook for now and creates a list to show them.

```clojure
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
```

Our entries will exist of an HTML like:

```html
"<li><cite>name</cite> @ <time>timestamp</time><blockquote><p>message</p></blockquote></li>"
```

As I am comming of .net world I am not sure about the optimisation of the HotSpot-VM of java. Normally people like to separate code and layout - so the layout should go into views. But every call of functions normally cost time, at least if it is not inlined.

### show-guestbook
We will need a form the user can use to submit entries, this will be done in this function. We prepare a way to show problems when posting and a place to list all previous made entries.

```clojure
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
```

To create form elements we use special functions of hiccup.

```clojure
(form-to attr-map? [method action] & body)
(text-field attr-map? name & value)
(text-area attr-map? name & value)
(submit-button attr-map? text)
```

The form-to methode gets an vector telling the used method (here post) and the actions (destination in this case "/"). Care to put all fields belong to this form into the body of form-to.

### save-new-message
This function will check if the user provided a name and a message. If one is missing an error text will be generated and shown to the user by using the show-guestbook function. In case both is provided it will show the guestbook and keep the name. The real save will be done within the next tutorial with a database backed. (The way of error handling is not the best, the user feedback of only showing a text is not the best, maybe we will fix this later too).

```clojure
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
```

### defroutes
And finally we need some changes within our route definition to access our functions at coressponding paths.
```clojure
(defroutes home-routes
  (GET "/" [] (show-guestbook))
  (POST "/" [name message] (save-new-message name message)))
```

### Try it
Start the server and see the results (currently a black and white looking page). We will change this later with css!