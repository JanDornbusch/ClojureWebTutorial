#Tutorial 8 - HTML and CSS client side validation
This tutorial will show you how to create a CSS client side check of form elements. Remember you can send fake inputs without using our form by use of tools, so do not trust inputs and double validate.

- [Changes to CSS](#changes-to-css)
- [Changing our text-field](#changing-our text-field)
- [Adding hints](#adding-hints)

## Changes to CSS
We will change and add some styles to our input styles.
Changing file: `testapp\ src\ testapp\ css\ screen.clj `.

```clojure
  [:input:focus:invalid :input:required:invalid {
      :background [[warn-background (url "/img/exclamation_mark.png") "no-repeat" "98% center/15px 15px"]]
      :border-color text-error-color
      :box-shadow [[0 0 (px 5) background-error-color]]
                      }]

  [:textarea:focus:invalid :textarea:required:invalid {
      :background [[warn-background (url "/img/exclamation_mark.png") "no-repeat" "98% 2%/15px 15px"]]
      :border-color text-error-color
      :box-shadow [[0 0 (px 5) background-error-color]]
                      }]

  [:input:focus:valid :input:required:valid {
      :background [[warn-background (url "/img/tick.png") "no-repeat" "98% center/15px 15px"]]
      :border [[(px 1) "solid" guestbook-correct]]
      :background-color guestbook-correct-background
                      }]

  [:textarea:focus:valid :textarea:required:valid {
      :background [[warn-background (url "/img/tick.png") "no-repeat" "98% 2%/15px 15px"]]
      :border [[(px 1) "solid" guestbook-correct]]
      :background-color guestbook-correct-background
                      }]
;; unchanged
  [:textarea {
               :height (px 100)}]
;; extended
  [:input:active :input:active:invalid :input:active:valid
   :input:hover  :input:hover:invalid  :input:hover:valid
   :input:focus  :input:focus:invalid  :input:focus:valid
   :textarea:active :textarea:active:invalid :textarea:active:valid
   :textarea:hover  :textarea:hover:invalid  :textarea:hover:valid
   :textarea:focus  :textarea:focus:invalid  :textarea:focus:valid
   {
       :border-color guestbook-active-color
       :background-color guestbook-active-background-color
       :box-shadow "none"}]
```

This will add new behaviour on correct or wrong inputs of the user.

##Changing our text-field
Here we will use a pattern which is simple regex `:pattern "[a-zA-Z0-9]{3,10}" ` to allow only names with a length of 3-10 (bad idea they can be longer) and only allow them to contain only alphabet chars and numbers.

```clojure
(text-field {:required true :pattern "[a-zA-Z0-9]{3,10}" :id "firstname" :aria-required "true"} "firstname" firstname)]
```

If you want to learn regex see [regex howto of proftpd.org](http://www.proftpd.org/docs/howto/Regex.html).

##Adding hints
Within file: `testapp\ src\ testapp\ routes\ home.clj ` we add a span to hold the hint.

```clojure
[:span.form_hint "3 to 10 letters and/or numbers"]
```

Now we have to extend our styles `testapp\ src\ testapp\ css\ screen.clj `:

```clojure
;; this is the general style of the hint
  [:.form_hint {
       :background guestbook-active-background-color
       :color text-color
       :margin-left (px 15)
       :padding [[(px 1) (px 8)]]
       :z-index 999
       :position "absolute"
       :display "none"}]
;; we will add an arrow(triangle) connected to the box to point out the field when grow multiline
  [".form_hint::before" {
       :content "\"\\25C0\""
       :color guestbook-active-background-color
       :position "absolute"
       :top (px 1)
       :left (px -10)}]
;; when correct change field and arrow to correct color
  [:input:required:valid+.form_hint {
       :background-color guestbook-correct-background}]

  ["input:required:valid+.form_hint::before" {
       :color guestbook-correct-background}]
;; display the hint when in correct field
  [:input:active+.form_hint
   :input:hover+.form_hint
   :input:focus+.form_hint {
       :display "inline"}]

```
