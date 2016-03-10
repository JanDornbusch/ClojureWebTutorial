# Tutorial 2 - Prerequirements and creating a simple **hands-on** project
In this tutorial we will go through the required software to start programming Clojure4Web and let lein create a basic project to us.

- [Lein](#lein)
- [Lighttable](#lighttable)
- [First project](#first-project)
- [ClojureScript Tutorials for LightTable](#clojurescript-tutorials-for-lighttable)

## Lein
For now we will use the [Lein tool to build](http://leiningen.org/) our projects. You can find it here: [http://leiningen.org/#install](http://leiningen.org/#install).

Follow the intallation tutorial at leiningen page. Go to command prompt (on Windows `Ctrl+R` enter `cmd` and press `enter` ). With `lein help` and you can see mostly all available commands. To complete the installation of lein enter `lein self-install` and let it run (you need an active internet connection and allow lein to pass your firewall to download all files and complete installation).

To test the successfull installation you could start a new repl `lein repl` and start to play with it `(+ 1 1) => 2`.

Alternatively you could use boot ([http://boot-clj.com/](http://boot-clj.com/)) to build projects. For now I will only show how to use lein. Maybe and only if requested or someone contributes it :P I might add the alternatives too.

In case you run a Lein command and get an error like Line does not know it, it is probably a forgotten line within the `project.clj -> :dependencies or :plugins`.

## Lighttable
[Ligth table](http://lighttable.com/) is a really nice project of code editor. Even if it is developed a little slow (as nearly all kickstartet projects do) it has some nice ideas behind.

Emacs users can continue at a later tutorial and stay with their preferred editor as well.

All others will go to [http://lighttable.com/](http://lighttable.com/) and click download. After downloading and installing Light table you can start it. At the time of writing this tutorial LightTable is available as Version 0.8.1.

For a better tutorial you can see [http://docs.lighttable.com/tutorials/full/](http://docs.lighttable.com/tutorials/full/), we will only do a little of setup here and explain the basics during next steps of tutorial.

Adding markdown to files not associated by default.

```clojure
; File -> Settings -> User behaviors
; add the following block of code this will mark files with ending .clj.txt
; as clojure files (this is an example because I used a file like this to
; collect the content of tutorials before I decided to prepare it as .md and
; publish them here.

 [:files :lt.objs.files/file-types [{:exts [:clj.txt],
                                     :mime "text/x-clojure"
                                     :name "clj.txt"
                                     :tags [:editor.clj :editor.clojure]}]]
```

If you wish to toggle line numbers go to the `:editor` key and add the following code:

```clojure
;; :lt.objs.editor/line-numbers
[:editor :lt.objs.editor/line-numbers]
```

The complete "User behaviors" would look like this now:
```clojure
;; User behaviors
;; -----------------------------
;; Behaviors are stored as a set of diffs that are merged together
;; to create the final set of functionality that makes up Light Table. You can
;; modify these diffs to either add or subtract functionality.
;;
;; Behaviors are added to tags, objects with those tags then automatically gain
;; whatever logic the behavior imparts. To see a list of user-level behaviors,
;; start typing a word related to the functionality you want in between the square
;; brackets (e.g. "theme").

[
 ;; The app tag is kind of like global scope. You assign behaviors that affect
 ;; all of Light Table to it.
 [:app :lt.objs.style/set-skin "dark"]
 [:app :lt.objs.plugins/load-js "user_compiled.js"]

 ;; The editor tag is applied to all editors
 [:editor :lt.objs.editor/no-wrap]
 [:editor :lt.objs.style/set-theme "default"]
 [:editor :lt.objs.editor/line-numbers]

 ;; Here we can add behaviors to just clojure editors
 [:editor.clojure :lt.plugins.clojure/print-length 1000]

 ;; Behaviors specific to a user-defined object
 [:user.hello :lt.plugins.user/on-close-destroy]

 ;; To subtract a behavior, prefix the name with '-' e.g.
 ;;  [:app :-lt.objs.intro/show-intro]
  
 ;; Interpret .clj.txt as clojure files
 [:files :lt.objs.files/file-types [{:exts [:clj.txt],
                                     :mime "text/x-clojure"
                                     :name "clj.txt"
                                     :tags [:editor.clj :editor.clojure]}]]
]


```

## First project
To create a basic project go back to command prompt and change to the folder where you want to create the project. This can be done by `cd <folder or ..>` and entry of `c: or d:` to change the used partition or folder (more about this can be found at command prompt tutorials).
([http://www.hacking-tutorial.com/tips-and-trick/16-steps-tutorial-basic-command-prompt/](http://www.hacking-tutorial.com/tips-and-trick/16-steps-tutorial-basic-command-prompt/))

Next you create a basic project by entering `lein new compojure-app testapp` this will create a default compojure-app layout in a newly created folder named testapp. (Compojure will be explained in the next tutorial).

Now you can open the project in LightTable go to `View -> Workspace` and open the workspace view if not open. Then go over this and use the `right-mouse -> add folder` search and select the recently selected testapp folder.

To start this project you can go to `View Connections -> Add Connection -> Clojure -> project.clj` (use the project.clj you want to run) or you can simply evaluate an expression inside the project with `ctrl + enter` which will start a new repl with your projects configuration.

To start up the web-server we will for now create an helper file `guestbook\ startup.clj` and write the following lines inside it:

```clojure
; We will use the repl of the project. This evaluates the project too and can throw errors if you made something wrong.
(use 'testapp.repl)
; Then we will start the server to accept connections, in this case the browser will open too and show our page.
(start-server)
```

We also could go inside the command prompt change the directory inside the project folder and run `lein ring server` to start the server.

Normally you do not have to reload the code and restart the server, it will automatically reload all your changed files. During my tests it seems, to save this files and restart the server sometimes help a lot. When you change dependencies of the project you can load them by restart the repl (go to connections close the repl and reevaluate the code in startup file). To load the dependencies manual you can go to command prompt and run `lein deps` which will load all required libraries defined inside the project.clj.

In case of "missing" errors you probably misspelled a line at project.clj or used a wrong version number not published by the author of the library.

## ClojureScript Tutorials for LightTable
For a little tutorial on ClojureScript see [https://github.com/swannodette/lt-cljs-tutorial](https://github.com/swannodette/lt-cljs-tutorial).

Generally you could be interested in [https://clojuredocs.org/core-library](https://clojuredocs.org/core-library) where all functions are documentated with examples.

And finally (for now) at [http://www.clojure-toolbox.com/](http://www.clojure-toolbox.com/) you can find many libraries you can find usefull to use during development of clojure.