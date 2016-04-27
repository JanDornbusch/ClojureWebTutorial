# Tutorial 12 - Security part 2 (CSRF) cross-site-request-forgery
In the last tutorial we secured our page against attacs from the inside. Now it is time to look at attacks from the outside.


- [Introduction](#introduction)
- [Updating the project](#updating-the-project)
- [Changing the handler](#changing-the-handler)
- [Altering the routes](#altering-the-routes)
- [Tests to security paths](#tests-to-security-paths)
- [Looking inside the browsers source code](#looking-inside-the-browsers-source-code)


## Introduction
Imagine your logged into your bank account of `www.myBank.com ` and a friend sends you an email with an interesting title "Kittens play with a dog" which you cant wait to click.
Now this is a page prepared to open an invisible frame in background calling the URL `www.myBank.com?action=sendMoney&to=1234567890&amount=9999&cents=99 `.
Now, if you are lucky, the bank will request a TAN to proceed. But what if it is not a bank and if it does not check it back? How to avoid other pages to send possible valid data?
If you remember correct the URL will become a GET not a POST which will be processed. But ther are tools can do this as well so we will need another way to defend us!

The most easy way is to create a random number and add it to the form as hiddend field. This token will be checked each time data or a form is send to the server.
Only if this tokens match the request will be processed.
In case they do not match it can produce an error.
Remember to log the mistakes and build in a growing or fixed delay, each time a request fails.
Maybe you have seen the use of googles recaptcha already somewhere they show short text no OCR can read and most humans not too.
Remember the attacker is within the clients browser just a few tabs or windows beside your page. And the way of attacking would be to guess the secret!

## Updating the project
Before we are changing our project file `testapp\ project.clj ` you have to know there are more than one way to add security token functionality to our project.
1. You can use ring-defaults wich provides the most common functionality all sides may need.
	- cookies
	- params
	- proxy (load balancer or reverse proxy)
	- anti-forgery
	- media-type-confusion prevention
	- preventing open the page in frames
	- HTTP Strict Transport Security
	- SSL Redirect to all HTTP
	- xxs-protection header
	- sessions
	- and more
2. Or you use only the ring-anti-forgery lib which will require sessions too.

We will remove the handler/site here too. It is deprecated since 1.2. But this will result in loosing the following wrappers:
  - wrap-session
  - wrap-flash
  - wrap-cookies
  - wrap-multipart-params
  - wrap-params
  - wrap-nested-params
  - wrap-keyword-params
which have been included within this handler.

Comparing both lists above it will be a good idea to use the full library instead of pull all the defaults given inside it up to our handler.
We will have to add this lines to the dependencies of our project:

```clojure
[ring/ring-defaults "0.2.0"]
[ring/ring-anti-forgery "1.0.1"]

```

The ring-defaults only `:use ` the wrapers, if we want to access library functions we have to include them here too.

## Changing the handler
Within the file `testapp\ src\ testapp\ handler.clj ` we will change a little bit:

```clojure
;; adding to the requires
[ring.middleware.defaults :refer [wrap-defaults site-defaults]]

;; within the app remove handler/site (you can remove it withing the requires too) and add:
(wrap-defaults (-> site-defaults
                   (assoc-in [:session :cookie-name] "name_the_cookie")))

```

By security reason a session cookie should not leak more information than required to the outside by its name.
You could name it "id", "cookie" or any other name you want.
If you want to prevent the exchange of this cookie by normal HTTP you can force it to HTTPS by adding:

```clojure
(assoc-in [:session :cookie-attrs :secure] true)
```

Do not add it now, we are not using HTTP and if you secure it now the client will not more return the cookie and no sessions are started!

At this point you can try to fill the guestbook form and send it to the server. It will return 403 forbidden now.
Only HEAD and GET do not require the token to be included withing header or forms.

## Altering the routes
Now we have to add the token to our form in file `testapp\ src\ testapp\ routes\ home.clj `.

```clojure
;; as normal we will add a new require
[ring.util.anti-forgery :refer [anti-forgery-field]]

;; and add a field within the form
(anti-forgery-field)
```

## Tests to security paths
If you want to test if the paths are secured correctly you can use one of the following tests (they are equal only to show code simplification) `testapp\ rest\ testapp\ test\ handler.clj `.


```clojure
(deftest request-method-test
  (testing "HEAD"
    (let [response (app (request :head "/"))]
      (is (= (:status response) 200))))
  (testing "GET"
    (let [response (app (request :get "/"))]
      (is (= (:status response) 200))))
  (testing "OPTIONS"
    (let [response (app (request :options "/"))]
      (is (= (:status response) 200))))
  (testing "POST"
    (let [response (app (request :post "/"))]
      (is (= (:status response) 403))))
  (testing "PUT"
    (let [response (app (request :put "/"))]
      (is (= (:status response) 403))))
  (testing "PATCH"
    (let [response (app (request :patch "/"))]
      (is (= (:status response) 403))))
  (testing "DELETE"
    (let [response (app (request :delete "/"))]
      (is (= (:status response) 403))))
  )

```

or

```clojure
(deftest request-method-test
  (let [response {:status 200, :headers {}, :body "Foo"}
        handler  (wrap-anti-forgery (constantly response))]
    (are [status req] (= (:status (handler req)) status)
      200 (request :head "/")
      200 (request :get "/")
      200 (request :options "/")
      403 (request :post "/")
      403 (request :put "/")
      403 (request :patch "/")
      403 (request :delete "/"))))
```

Attention the github page of ring-anti-forgery states only HEAD and GET do not need a token. But OPTIONS does not need it too!

## Looking inside the browsers source code
Within the source delivered to the browser you will now see the token:

```HTML
<!DOCTYPE html>
<html><head><script type="text/javascript">var pageLoadTime = new Date().getTime()

function reloadIfSourceChanged() {
    var request = new XMLHttpRequest()
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.responseText == 'true') {
                window.location.reload()
            }
            else {
                setTimeout(reloadIfSourceChanged, 200)
            }
        }
    }
    request.open('GET', '/__source_changed?since=' + pageLoadTime, true)
    request.send()
}

window.onload = reloadIfSourceChanged
</script><title>Welcome to my Clojure Web Tutorial</title><link href="/css/screen.css" rel="stylesheet" type="text/css"></head><body><div id="viewport"><div id="main"><form action="/" method="POST">

<input
  id="__anti-forgery-token"
  name="__anti-forgery-token"
  type="hidden"
  value="IIsAXlBsBt8w/IAGpDpyOEtY4otxeBAs5Lm+Hu5AQ92cgEMoSrYMvVu4ckQ1fqrc8emvuY+Qdk6gcX3s" />

     <fieldset id="guestbookForm"><legend>Guestbook</legend><ul><li>Form fields marked with <em title="mandatory">*</em> are mandatory and must be completed.</li><li><label for="firstname" title="mandatory">First name</label><input aria-required="true" id="firstname" name="firstname" pattern="[a-zA-Z0-9]{3,10}" required type="text"><span class="form_hint">3 to 10 letters and/or numbers</span></li><li><label for="message" title="mandatory">Message</label><textarea aria-required="true" cols="40" id="message" name="message" placeholder="Remember, be friendly!" required rows="10"></textarea></li><li><input class="btnReset" type="reset" value="Reset"><input class="btnSubmit" type="submit" value="Submit"></li></ul></fieldset></form></div><div id="space"></div></div><div id="footer">...</div></body></html>
```
