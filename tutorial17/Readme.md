# Tutorial 17  - Include Figwheel
Figwheel is a nice tool which will allow us to push new functions without loosing application state by reloading the page. This will require a little re-wrinting out code to be reloadable.

- [Preparing the project](#preparing-the-project)
- [What all is possible](#what-all-is-possible)
- [Start using figwheel](#start-using-figwheel)
    - [Test how it works](#test-how-it-works)
    - [Reloadable code](#reloadable-code)

## Preparing the project
As usual we will start add the plugin to the project: `testapp\ project.clj `.

```clojure
;; add to :plugins
[lein-figwheel "0.5.3-2"]

;; and after source paths of :cljsbuild add :figwheel true
  :cljsbuild {:builds
              [{:id "app"
                :source-paths ["scripts"]  ;; changed (see below)
                :figwheel true  ;; new

```

The important part here is that you have to have at least one build that has :optimizations set to :none or nil.

You can configure figwheel to call a function on each reaload too:

```clojure
;; use this
  :figwheel { :websocket-host "localhost"
    :on-jsload "example.core/fig-reload"}

;; instead of
  :figwheel true

```

This will call the function "example.core/fig-reload" each time the code was realoaded.
More about configuration can be found at [figwheel - client side](https://github.com/bhauman/lein-figwheel#client-side-configuration-options) and [- server side](https://github.com/bhauman/lein-figwheel#figwheel-server-side-configuration).

Until now we were using `wrap-reload ` to load all of our code. Here we will have to tune the wrapper a little bit `testapp\ src\ testapp\ handler.clj ` :

```clojure
;; remove "ressources" of
  (wrap-refresh ["src"])

```

The change of `:source-paths ` we did to stay able to reload content of scr folder.
And not reload the script pages. We wil move the folder `testapp\ src\ testapp\ script\ ` to `testapp\ scripts\ `.

## What all is possible?
Now with figwheel you get not just only reloading of javascript files. It will support live development of Node.js (see [figwheel wiki](https://github.com/bhauman/lein-figwheel/wiki/Node.js-development-with-figwheel)). Another function will be the reload of css files on change.

But this is not all. It comes with boradcast of changes, imagine you develop with computer, tablet and 2-3 cellphones. The changes you do are pushed to all of them in same time!

More than this it not will publish all code. Only the delta of changed functions will be transported.

In case you want to start a fesh project there are 3 templates you can use:

```bat
    lein new figwheel hello-world               ;; figwheel included project
    lein new figwheel hello-world -- --om       ;; for an om based project
    lein new figwheel hello-world -- --reagent  ;; for a reagent based project

```

You can tag files to be not loaded by figwheel by extending the namespace like `(ns ^:figwheel-no-load example.core) ` .
Figwheel will only load files really used if you want to change it you can tag the namespace like `(ns ^:figwheel-load example.core)`

If there are files you want to reload on every change (like files containing client side tests) you can tag the namespace like `(ns ^:figwheel-always example.test-runner)` .

## Start using figwheel
To start figwheel open a cmd box and go to project path and type:

```bat
lein figwheel

```

### Test how it works
We will continue work in the file of the last tutorial `testapp\ scripts\ core.cljs ` and change it to:

```clojure
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


```

This is not a real reloadable code but good in case of testing if wrap-reload is disabled to scrits in a correct way.
`(defonce ts ... ) ` will be evaluated only on real page refreshs. So if you configured all correct you can publish changes to the page and the timestamp will not change. Try changing now "Hello ... " to "Ello ... " and save the file. The updates will be pushed to the browser without reloading the code and getting a new timestamp.

Do not forget to change it back after testing.

If you want messages to be written to the console of the browser you can enable and test it by:

```clojure
;; enables console printing in your browser
(enable-console-print!)

;; Prints a message to the browsers console
(println "Hello console!")

```

### Reloadable code
Why and how to write reloadable code is very well explained at [the figwheel authors github](https://github.com/bhauman/lein-figwheel#writing-reloadable-code).
