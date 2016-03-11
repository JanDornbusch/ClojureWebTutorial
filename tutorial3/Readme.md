# Tutorial 3 - Folder structure, play with **compojure** and **hiccup**
In this tutorial we will have a look at compojure as routing library and hiccup as html generator.

[TOC]

## Folder structure
What does the newly created folder structure looks like? And what is the logic behind?

```
testapp\
├── resources\
│   └── public\
│       ├── css\
│       │   └── screen.css
│       ├── img\
│       └── js\
├── src\
│   └── testapp\
│       ├── models\
│       ├── routes\
│       │   └── home.clj
│       ├── views\
│       │   └── layout.clj
│       ├── handler.clj
│       └── repl.clj
├── test\
│   └── testapp\
│       └── test\
│           └── handler.clj
├── project.clj
└── README.md
```

We are going top down:

| Folder/File | Reason/Content |
|---|---|
| testapp | The Project main folder |
| ressources | Containing all static content |
| public | The content by default is accessible via WEB |
| css | All stylesheets to the page |
| screen.css | A default CSS File used in the Page we just generated - currently static |
| img | All images used static |
| js | All JS scripts to be used at server |
| **src** | Here goes all Clojure source |
| testapp | A grouping folder |
| models | Database logic goes here |
| **routes** | The page generating logic when you follow a route like http://localhost/ |
| home.clj | The file contains the logic of the home routes "/" |
| views | Code based layouts which are reused often are here |
| layout.clj | Default structure of HTML file with css includes and header |
| handler.clj | The con- and de- structure methode of the web APP, routes configuration and wrapper logic is in this file |
| repl.clj | Server **startup** and **shutdown** functions we use to start the server |
| test | You hear of test driven development? Here are the automatic tests to your code! |
| testapp | Just another grouping folder |
| test | And finally the folder containing the tests |
| handler.clj | Here are some tests to check the project works correct |
| project.clj | Contains all build configuration - lein or boot will manage all dependencies retrival for you! |
| README.md | Template for documentation creation at GIT or other repositories ;) |

## Compojure
Compojure is a routing library for web applications using Ring. You might ask yourself how to switch case the function to generate the page you want to deliver to the user. Or you just want to know more about URL-Parameters like mod_reqrite in PHP does? Then compojure is the point to look at.

Let's have a look into `src\ testapp\ handler.clj line:16-21`

```clojure
(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (routes home-routes app-routes)
```

and into `src\ testapp\ routes\ home.clj line:8-9`

```clojure
(defroutes home-routes
  (GET "/" [] (home)))
```

To simplify the creation of routes compojure offers a defroutes macro. As you can see inside the first code block it makes it much easy to define more than one path.
Within the app-routes are 2 special path defined. One is the resources path with will let you access all content of the `resources\ public\ ` folder and the not-found path wich will give always a 404 “Not Found” response. You can customize the body of this response by changing the "Not Found" string to [any renderable context](https://weavejester.github.io/compojure/compojure.response.html#var-render).
If you want to deliver some content you can see an example in the 2nd box where you can see an example to handle GET requests of `/ ` paths. When you access `http://localhost:<port>/ ` the function home without parameters will be called to generate content. (You can check the startup port within `src\ testapp\ repl.clj line:22 ` or by call the `start-server ` function with an explicite given port to start the server at; Default is 8080).
Now we have defined routes in different files and have to merge them. This is done by the `routes ` function within the `app ` function as you can see in the first box. Take care when merge routes to merge the not-found route at last, otherwise all routes comming after this will be handled as not-found! Only to mention it you will have to add the routes to the `:require ` vector of the handler file (`[testapp.routes.home :refer [home-routes]] `).

We already had a look at URL-Parameters in tutorial 1 request maps. When you want to use them you have 2 ways to do so.
Let's say you want to access some kind of idx `/1234567890 ` and give back some related content? See below to learn how this works.

### Clojure Destructuring
How to destructure the parameters in a clojure way?

```clojure
(GET "/:idx" {{idx :idx} :params}
  (fn idx))
```

This route will consume all routes starting with `/ ` followed by any chars, numbers and whatever. We will take the `:params ` map and take the `:idx ` out of it. Similar to `let ` the value will be stored within the `idx ` variable and be used by your function `fn `.

### Compojure Destructuring
How to destructure the parameters in a compojure way?

```clojure
(GET "/:idx" [idx]
  (fn idx))
```

This route will consume all routes starting with `/ ` followed by any chars, numbers and whatever. It will take the `:idx ` out of the `:params ` map and you can hand it over into your function `fn `.

But what if there are more Parameters you want to access? This is easy, you can use `[a b c] ` or `[a b & x] ` as you can do with clojure functions.

Compojure 1.4.0 defines a new keyword `:<< ` to pass values through (coerce) a function before assigning it to the var. (`[x :<< as-int]`)

Compojure itself defines two coercions within the [compojure.coercions](https://weavejester.github.io/compojure/compojure.coercions.html) namespace.
**as-int** Parse a string into an integer, or nil if the string cannot be parsed.
**as-uuid** Parse a string into a UUID, or nil if the string cannot be parsed.

#### Subroutes
What if you want now access 2 different functions within our former defined route?
Therefor a macro named `context ` exists. This will help to define `show ` and `edit ` routs to our example.

```clojure
(defroutes user-routes
  (context "/:idx" [idx]
    (GET "/" [] ...) ;the route that exists at "/1234567890"
    (GET "/show" [] ...)
    (GET "/edit" [] ...)))
```

In case you define the context routes external (maybe within another file) you will have to pass the parameters over.

```clojure
(defn external-routes [idx]
  (routes
   (GET "/show" [] ...)
   (GET "/edit" [] ...)))

(defroutes user-routes
  (context "/:idx" [idx]
    (external-routes idx)))
```

#### Matching request methods

Until now we only handled `GET ` requests. Compojure allows us to use `POST `, `PUT `, `DELETE `, `OPTIONS `, `PATCH ` and `HEAD` to match pathes too. In case you want to handle all of this request methods there also exists `ANY `.

#### RegEx

Before look into RegEx one more word about matching to parameters. When matching to something like `(GET "/:idx" [idx] ` the :idx match will take all until next `/ ` or `. ` within the URI and put it inside the idx parameter.

Now you can see a problem we possible encounter when searching for numbers. What if the user tries to access something like /DROP%20DATABASE;12345...

One solution is to do it by explicit expressions:
```clojure
["/:idx", :idx #"[0-9]+"]
```

which only allows numbers `0123456789 ` to be valid in this position.
As of compojure 1.3.0. you can use inline expressions surrounded by braces too:

```clojure
"/:idx{[0-9]+}"
```

## Hiccup
Hiccup is a library which will help us representing HTML in a clojure style. It will use maps and vectors. A first look we will have into `src\ testapp\ views\ layout.clj line:0-9`.

```clojure
(ns testapp.views.layout
  (:require [hiccup.page :refer [html5 include-css]]))

(defn common [& body]
  (html5
    [:head
     [:title "Welcome to testapp"]
     (include-css "/css/screen.css")]
    [:body body]))
```

First of all we require some functions of hiccup. The `html5 ` and the `include-css ` function. There are more functions in this library like `include-js `, `xhtml `, `html4` and [much more](http://weavejester.github.io/hiccup/hiccup.page.html) to mention the most important ones.

Then there is the definition of our common page layout which we will use to our pages. The head of our pages will use this layout and will be supplemented by a given body.

If you know a little about HTML this part not need much further explanations at this point. Otherwise you see the creation of a html5 document containing a head with title and included css file, concluding with an body which content will be set by the given body variable.

Let us change the name of the page to `[:title "Welcome to my ClojureWebTutorial"] `. This will now be the title for all pages using this common function to generate the HTML.

To play more go to `src\ testapp\ routes\ home.clj line:6`

```clojure
  (layout/common [:h1 "Hello" "World" "!"]))
```

You can use this example or just play a little at this point.

#### Start the server
To see results of your changes you need to start the server `src\ testapp\  repl.clj` and add `(start-server) ` at the end of this file. (Remove it after testing, we will place it in another file later). Place the cursor behin the last `) ` of start-server call and hit `ctrl+enter` to evaluate the expression. It now will take a moment to retrieve all dependencies and start the repl. Then your browser will open and show this page.

### Syntax
#### Simple elements

The syntax of Hiccup is really simple.

```clojure
[:element {:attribute "AttributeValue"} "ElementValue"]
```

this will create an equivalent of:

```xml
<element attribute="AttributeValue">ElementValue</element>
```

#### CSS
In case of CSS there is syntactical suggar, instead of writing all time

```clojure
[:div {:id "id" :class "class subclass"} "..."]
```

you can write a much shorter way hiccup supports:

```clojure
[:div#id.class.subclass "..."]
```

this is result of a simple rule:
"#" denotes the element's ID.
"." denotes the element's classes (every word after each ".").

So it it possible to give elements only IDs or classes or classes with subclasses.

```clojure
[:div#id "..."]
[:div.class "..."]
[:div.class.subclass "..."]
```

#### Seqs

In case of seq's like:

```clojure
[:div (list "Hello" "World" "!")]
```
you can use an equivalent of:

```clojure
[:div "Hello" "World" "!"] ; -> <div>HelloWorld!</div>
```

this can be helpful for macros like `for `:

```clojure
[:ul (for [x coll] [:li x])]
```

A note of hiccup developer: "Note that while lists are considered to be seqs by Clojure, vectors and sets are not."

For more information see [weavejesters hiccup wiki](https://github.com/weavejester/hiccup/wiki).

### Optimisation

A word about optimisation at this point. You possible say templates are good, but keep in mind every time you have to search text for matches it is an intensive calculation power consuming operation! Even if your designers want use and write only templates it can be a much better idea to prepare functions as templates. Even with this way of using functions you can split hiccup and code a little. But I have to confess I have not seen benchmarks about performance in case of template engines vs. codetemplates yet.

### Conversion HTML to Hiccup

In case you have HTML and want to convert it to hiccup see [hiccup converter list](https://github.com/weavejester/hiccup/wiki/Converting-html-to-hiccup).