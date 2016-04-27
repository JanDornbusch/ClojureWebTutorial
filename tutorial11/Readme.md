#Tutorial 11 - Basic security (**XSS**) cross-site-scripting for inputs and commenting functions
As already mentioned in [tutorial 5](../tutorial5/) there are possible attacs to our guestbook. In this tutorial we will fix some of them.

- [Introduction](#introduction)
- [Securing HTML inputs](#securing-html-inputs)
- [Testing the protection](#testing-the-protection)
- [Additional info about errors thrown](#additional-info-about-errors-thrown)
- [Commenting functions](#commenting-functions)


## Introduction
How does this attack work? The attacker tries so sneak an script inside your page which will be shown to other users and steals their cookies, form inputs or anything else shown on page. As shown in [tutorial 5](../tutorial5/) you can send all kind of HTML or JavaScript to our guestbook and it will be included into the page. If plain HTML did not work it is possible to try encoding the script with base64, decimal or hexadecimal HTML character references.

`%3c%73%63%72%69%70%74%3e%20%61%6c%65%72%74%28%5c%22%48%65%6c%6c%6f%21%20%49%20%61%6d%20%61%6e%20%65%76%69%6c%20%61%6c%65%72%74%20%62%6f%78%21%5c%22%29%3b%20%3c%2f%73%63%72%69%70%74%3e `

This is the url ready encoding of the attack of tutorial 5. For a good list of attack vectors see [OWASP XSS_Filter_Evasion_Cheat_Sheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet).


## Securing HTML inputs
We will use hiccups html-escaper to secure our inputs. Changing the model file `testapp\ src\ testapp\ models\ guestbook.clj ` now.

The changes are minor:

```clojure
;; add to :require
...
[hiccup.util :refer [escape-html]]
...

;; and change
      [guest_name message (new java.util.Date)])) ;; Data
;; to
      [(escape-html guest_name)
       (escape-html message)
       (new java.util.Date)])) ;; Data

```

## Testing the protection
Accessing the URL by enter `http://localhost:8080/?firstname=bad&message=%3c%73%63%72%69%70%74%3e%20%61%6c%65%72%74%28%5c%22%48%65%6c%6c%6f%21%20%49%20%61%6d%20%61%6e%20%65%76%69%6c%20%61%6c%65%72%74%20%62%6f%78%21%5c%22%29%3b%20%3c%2f%73%63%72%69%70%74%3e ` in your browser wll not work. It will just send a GET not the required POST. You will have to use an additional plugin to test this way.

Within firefox HttpRequester is an addon which will do this for you. Copy the URL into the URL field and hit POST button to execute it. You will see the message is added to our guestbook but no script is executed.

In case you want allow some HTML be sure the attack vectors shown above (link OWASP) do not work later!.


## Additional info about errors thrown
When deleting the database and reloading the page you will get a NOT-FOUND error. But a restart did not help!
Looking inside log files you will see there is an info about missing table in database. This is caused by deleting it during runtime and reloading the page. It will try to access the file and create it empty. So the restart did not determine it as missing and also did not recreate it.

Solution: Delete the databasefile when REPL is not running. Start the project and watch inside the console to see a proper message telling you `startup.clj: creating database `.

## Commenting functions
There are two ways to comment functions I know yet.
The first one I would name implicit:

```clojure
(defn read-entries []
"I am a function which reads all guestbookentries of the database!"
  (sql/query db
      ["SELECT * FROM guestbook ORDER BY timestamp DESC"]))


;; or

(defn read-entries []
"
# Mark me down

* to generate better outputs
* to have a good style
"
  (sql/query db
      ["SELECT * FROM guestbook ORDER BY timestamp DESC"]))

```

Infos about creating documentation can be found at [stackoverflow - multiline-clojure-docstrings](http://stackoverflow.com/a/30652408)

And the second way I know is more explicit:

```clojure
(defn read-entries []
^{:doc "I am a function which reads all guestbookentries of the database!"
  :user/comment "This function need improvement to limit the returned results"}
  (sql/query db
      ["SELECT * FROM guestbook ORDER BY timestamp DESC"]))

```

If you are interested in the explicit way you can read about [special forms in clojures reference](http://clojure.org/reference/special_forms).

I will add comments to all functions of the project now. In my oppinion it is not necessary to explain them step by step here now.
