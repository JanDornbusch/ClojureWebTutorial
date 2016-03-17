#Tutorial 6 - Programming **CSS**, a few words about **optimisation**, **Wrap-Reload** and **Wrap-Refresh**
Next on our list is to start with CSS. But we will first have a little look on optimisation which we should have in mind when start using CSS.

[TOC]

## Optimisation

Why do we talk about this topic here? There are many pages outside in the web, where no one ever used a single second braintime in this topic.
Why is it important to optimise your website? Just imagine you access amazon and every single click you are promted to solve some kind of captcha to access a product?
What if you have to wait 5 or 10 seconds when you click? The most users would be annoyed really fast if they have to wait 2+ seconds. Long load times maybe can influence your pagerank too.
See this [stack exchange article about acceptable page load times](http://webmasters.stackexchange.com/questions/28220/whats-an-acceptable-avg-page-load-time) for more information.

But this does not answer why we start talk here about this? The answer is easy when you stop to write css manually and start to let your REPL or complier to generate it you can get the first significant improvements.
Why this? Automatic generated CSS files will be more small than good human readable and commented files you write manually. Every single space or linebreak we not require and reused code blocks we identify and reuse correct saves us bytes.
Imagine you can shrink a 100KB CSS file by 5% this is a saving of 5KB each time requested. Normally browser cache this files but limitations of space can let browsers forget them too.
Let us say you have 1.000.000 accesses a day with 10% loading this file it is 5KB * 100.000 a total saving of 500MB which is not much to modern servers. But what if the 5KB are the reducement to a user connected by GSM? (Please never try to deliver mobile pages with 10-20MB until cellphones use fibre channels!)

Further ways of optimisation are to keep the amount of files requested low. Try to reduce the CSS files, create sprite pictures when you have no way to do styling with CSS and check what you have done.

### Useful links
Here are a few links:
- [YSlow helps you to test the speed of your page](http://yslow.org/)
- [Image Optimizer to reduce pictures size](http://imageoptimizer.net/Pages/Home.aspx)
- [Test the Performance of a Webpage](http://www.website-performance.org/)
- [CSS Sprite Generator](http://spritegen.website-performance.org/)
- [CSS Minifier if you write css manually](http://www.cleancss.com/css-minify/)

### Accessibility and Usability
When you create websites you will have to think users who are not able to access your page as you can. They could be handicapped and have problems if you not support their screen readers.
More about this you can read at [Web Content Accessibility Guidelines (WCAG) 2.0](http://www.w3.org/TR/WCAG20/) and [WAI-ARIA, the Accessible Rich Internet Applications Suite](https://www.w3.org/WAI/intro/aria).

You possible have to think about browsers you want to support. In my oppinion it is okay to tell users of old browser they better switch to newer more secure versions before access a page.
Having a look at [browser statistics and trends](http://www.w3schools.com/browsers/browsers_stats.asp):

|2016|Edge 13|Edge 12|IE 11|IE 10|IE 9|Older|
|---|---|---|---|---|---|---|
|February|0.9%|0.2%|4.1%|0.4%|0.3%|0.3%|

Which tells you currently it might be a waste of time and money to support IE older than V.11. But you should log the versions used by your visitors and eventually provide older styles in case you have users frequently use older versions.
And the prefixes you have to use accross modern browsers is something you should always have a look at. If you are not much familar to them you can try [pleeease a tool which prefixes for you](http://pleeease.io/play/).
Their example:

```css
.a {
  display: flex;
  background: linear-gradient(red, green);
}
```

is prefixed to

```css
.a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  background: -webkit-linear-gradient(red, green);
  background: linear-gradient(red, green);
}
```

similar to this garden (our css library) will do nearly the same (here their example, we will look deeper into it later)

```clojure
user=> (css
        {:vendors ["webkit"]
         :auto-prefix #{:border-radius}}
        [:.foo {:border-radius (px 3)}])
".foo{border-radius:3px;-webkit-border-radius:3px;}"
```


## Wrap-Reload
Starting soon to change our files every now and then, we will include this tool now to speed up changing code. It will inspect our src folder and reloads our files automatically to the REPL when we change (save) it.
So we only have to reload the page in browser to get the changes visible. This only belongs to 'hard' roundtrips. Later with ClojureScript/JavaScript we will use a much better solution.
The library which contains the required function we already have in our development dependencies (`[ring/ring-devel "1.4.0"]`).

Within the File `testapp\ src\ testapp\ handler.clj` we will add

```clojure
[ring.middleware.reload :refer [wrap-reload]]
```

to the `:require ` block and add
 
```clojure
(wrap-reload)
```

To the app handler behind the routes.
So the file will look like:

```clojure
(ns testapp.handler
  (:require [compojure.core :refer [defroutes routes]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]
            [hiccup.middleware :refer [wrap-base-url]]
            [ring.middleware.reload :refer [wrap-reload]]	;; This is new
            [compojure.handler :as handler]
            [compojure.route :as route]
            [testapp.routes.home :refer [home-routes]]
            [testapp.models.guestbook :as db]))

... ;; see code for functions missing here

(def app
  (-> (routes home-routes app-routes)
      (wrap-reload)		;; This is new
      (handler/site)
      (wrap-base-url)))

```

## Wrap-Refresh
To hand the changes over to the browser we will use one more tool.
Within `testapp\ project.clj ` we add the following line to the `:dev {:dependencies `:

```clojure
[ring-refresh "0.1.2"]
```

so it will look like:

```clojure
   {:dependencies [[ring/ring-mock "0.3.0"]
                   [ring/ring-devel "1.4.0"]
                   [ring-refresh "0.1.2"]]}})
```

Within the File `testapp\ src\ testapp\ handler.clj` we will add

```clojure
(use 'ring.middleware.refresh)
```

to the namespace definition and add

```clojure
(wrap-refresh ["src" "resources"])
```

behind the wrap-reload.
So the file will look like:

```clojure
(ns testapp.handler
  (:require [compojure.core :refer [defroutes routes]]
            ...
            [testapp.models.guestbook :as db])
  (:use [ring.middleware.refresh]))			;; This is new

...

(def app
  (-> (routes home-routes app-routes)
      (wrap-reload)
      (wrap-refresh ["src" "resources"])	;; This is new
      (handler/site)
      (wrap-base-url)))
```

The refresher will inspect our src and ressources directory now.

## CSS Garden
Comming to Garden as CSS generator. This tool generates CSS files to us nearly automatical. But take care! It does not check your syntax yet?!
Within `testapp\ project.clj ` we have to do a few more changes.

```clojure
;; add at dependencies
[garden "1.3.0"]

;; add at plugins
[lein-garden "0.2.6"]

;; add configuration
:garden {:builds
           [{:id "main-style"
             :source-paths ["src/testapp/css"]							;; the folder we will add CSS code to
             :stylesheet testapp.css.screen/screen						;; namespace and defstyle name of our style
             :compiler {:output-to "resources/public/css/screen.css"	;; where to create the output and how to name it
                        :pretty-print? true}}]}							;; create readable non optimised output
```

Now we add the folder just declared to hold our styles `testapp\ src\ testapp\ css\ `.
And the file `testapp\ src\ testapp\ css\ screen.clj `.
First of all we will recreate the content of the original css file. 
Which is found here: `resources\ public\ css\ screen.css `.

```css
body {
    color: #555;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 13px;
}

h1 {
    text-align: center;
}
```

will become to:

```clojure
(ns testapp.css.screen
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px]]))

(defstyles screen
  [:body
   {:color "#555"
    :font-family "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    :font-size (px 13)}]
  [:h1
   {:text-align "center"}])
```

### Compiling CSS

Within our new file `testapp\ src\ testapp\ css\ screen.clj `.
Start a command box now (`Windows key + r `, enter `cmd ` and hit enter) and go to your projects directory (in my case `d:/dev/tutorial6 ` => `d: `,`cd dev `, `cd tutorial6 `, ..).
With `tab ` you have autocompletion (or cycle through files) and `dir ` lists the content of the directory. `cd ` (change directory) is used to change directories, with `.. (cd ..) ` you navigate a folder up.
Now within the testapp folder you enter `lein garden auto ` and hit enter.
If you get an error like `'garden' is not a task. See 'lein help'. ` you possible added lein only to dependencies and not to plugins!
If there are no errors let the window open to complie automatic on changes.

```
Compiling Garden...
Compiling "resources/public/css/screen.css"...
Wrote: resources/public/css/screen.css
Successful
```

More information about lein-garden you can get at their [git page](https://github.com/noprompt/lein-garden).

### Test it!
Start the server and make sure the auto compile is running!
Open
1: `testapp\ src\ testapp\ css\ screen.clj `
2: `testapp\ resources\ public\ css\ screen.css `

Modify the `:color "#555" ` to `:color "#505" ` within file 1 and save the file!
Now you will see the compiling within the console again. When it is done have a look inside file 2 (the output).
You will see the css identically to the one of project creation. Having a look to the browser you will see the text color changed to something in lavender color.
I will change it back now to proceed to the next tutorial.

### Anti cache work around
!!!Use this only if you not use Wrap-Refresh or encounter problems!!!
In order to avoid the browsers caching of the css file we will use a little trick here. It is not required later in ClojureScript/JavaScript pages, as there will be Figwheel doing this job to us!
You simply have to add a simple trick within `testapp\ src\ testapp\ views\ layout.clj `.
Changing the `(css-include ...) ` to:

```clojure
(include-css (str "/css/screen.css?" (System/currentTimeMillis)))]
```

This will make the browser think your file is different to the last time and it will not cache it!

### Stop the compiler
Within the commandbox you can hit `ctrl + c ` to signal the batch to stop. It will ask you to confirm it by pressing "J" or "Y" (depending on your language settings).