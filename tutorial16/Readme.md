# Tutorial 16 - Extending the project by ClojureScript hello world
With this tutorial I will introduce ClojureScript and show how easy it is to include within our project.

- [What is ClojureScript](#what-is-clojurescript)
- [But why use it](#but-why-use-it)
- [Lets include it into our project](#lets-include-it-into-our-project)
    - [Colors in Windows cmd](#colors-in-windows-cmd)
    - [Preparing first scriptfile](#preparing-first-scriptfile)
    - [Adding a new route](#adding-a-new-route)
    - [Accessing Javascript and fields](#accessing-javascript-and-fields)
    - [Compiling ClojureScript](#compiling-clojurescript)

## What is ClojureScript?
Instead of Java Bytecode ClojureScript will compile down to JavaScript.
This mean we are writing nearly the same language but deliver it to the Browser as JavaScript.
You might ask now why nearly the same language? Well JavaScript is not as powerfull as Java, looking to core async of Java we do not really have threads within browsers now.
As result of this you are not able to use Refs nor STM, def will produce JS variables and agents are currently not implemented. And you can optionally use Googles Closure Tools for minification of code.
[The full list of sameness/differences can be found at github](https://github.com/clojure/clojurescript/wiki/Differences-from-Clojure).

## But why use it?
First of all you will have nearly one language for all you project.
Second reason is that you wont deliver MB of scripts if not required! We are still talking of mobile internet with limits of 30 to 2000 MB a month.
You can now imagine how much a user will use your APP if it eats his traffic limit only by startup.
The Closure compliler will remove all dead code of your project and minify it as much as possible.
You are per default immutable which else cost you additional libraries.
[Facebook names immutable-js to the rescue](https://facebook.github.io/react/docs/advanced-performance.html#immutable-js-to-the-rescue) in its advanced-performance guides.

## Lets include it into our project
As we learned of the past steps we will start to extend the project by new dependencies and as this is a compiling kind of library we also will have to add a plugin in `testapp\ project.clj `.

```clojure
;; :dependencies are extended by:
[org.clojure/clojurescript "1.8.51"]

;; :plugins will be extended by:
[lein-cljsbuild "1.1.3"]

;; The Plugin requires a configuration
  :cljsbuild {:builds
            [{:id "app"
              :source-paths ["src/testapp/script"]
              :compiler {:output-to "resources/public/js/app.js"
                         :output-dir "resources/public/js/out"
                         :source-map true
                         ; The optimization level.
                         ; May be :none :whitespace :simple or :advanced.
                         ; Only :none and :simple are supported for bootstrapped ClojureScript.
                         ; https://developers.google.com/closure/compiler/docs/compilation_levels
                         :optimizations :none
                         ; match to ressource path in handler.clj pointing to :output-dir
                         :asset-path "/js/out"
                         :main "testapp.script.core"
                         ; Human readable output true false
                         :pretty-print true}}]}

```

### Colors in Windows cmd
If you are using Windows < version 10 you will have to tweak your console:
[The HowTo you can find at emezeskes github](https://github.com/emezeske/lein-cljsbuild#color-coded-output-on-windows).

### Preparing first scriptfile
The scripts we will write will be stored in a separate folder which you will create now `testapp\ src\ testapp\ script\ ` and in it the first codefile `core.cljs `.

```clojure
(ns testapp.script.core)

(defn set-html! [el content]
  (set! (.-innerHTML el) content))

(defn main
  []
  (let [content "Hello World from ClojureScript"
        element (aget (js/document.getElementsByTagName "main") 0)]
    (set-html! element content)))

(main)

```

Until now I found this script 3 times and it looks similar each time, seems to be a good example ;-)

If you want to use `println ` to send messages to the console of the browser you will have to add `(enable-console-print!) ` before calling functions which try to print to console!

### Adding a new route
Now, we have to add a route where this file is included to the page.
Create a new file `testapp\ src\ testapp\ routes\ script.clj ` to prepare the the page.

```clojure
(ns testapp.routes.script
  (:require [compojure.core :refer :all]
            [testapp.views.layout :as layout]))

(defn scriptbase []
  (layout/common
    [:div#viewport
      [:div#main_alt
       [:h1 "Scripted"]
       [:hr]
       [:main]
       [:script {:src "/js/app.js"}]]]))

(defroutes script-routes
  (GET "/script" [] (scriptbase)))

```

and as usual extending the handler `testapp\ src\ testapp\ handler.clj `.

```clojure
;; Extending the :require in namespace by:
[testapp.routes.script :refer [script-routes]]

;; and add to the app routes:
script-routes

```

### Accessing Javascript and fields
There is an interopability with Javascript. You can access all Javascript by using `(js/function_or_class param) ` here is an example:

```Clojure
(throw (js/Error. "Websocket is not available!")))

```

If you want to access fields like given in events or in elements you will use a leading `- ` on them:

```Clojure
(.-author elemet)
(.-data event)
(.-value (dom/getElement "button_socket"))
(set! (.-onopen chan) (fn [event] (js/alert "WebSocket open!")))
(or (= (.-readyState @socket) (.-OPEN js/WebSocket)) (= (.-readyState @socket) 1))

```

### Compiling ClojureScript
Similar to Garden you have to open a new `cmd `-box (win+r) and navigate to the folder containing our project definition.
To build it once enter `lein cljsbuild once `. If you are actively developing you can use `lein cljsbuild auto ` to automatic rebuild on changes.

You can now access the demo page by [http://localhost:8080/script](http://localhost:8080/script).
