(ns testapp.script.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [goog.events :as events]
            [goog.dom :as dom]))

(defn set-html! [el content]
  (set! (.-innerHTML el) content))

;; ############################################## Socket Logic ###############################################

(defonce socket (atom nil))

(defn receive-msg!
  "receive messages of socket and apply them to handler"
  [handler]
  (fn [msg]
    (handler (.-data msg))))

(defn send-msg!
  "sends a message over socket"
  [msg]
  (if @socket
    (if (or (= (.-readyState @socket) (.-OPEN js/WebSocket)) (= (.-readyState @socket) 1))
      (.send @socket msg)
      (js/alert "The WebSocket is not open!"))
    (throw (js/Error. "Websocket is not available!"))))

(defn createWebSocket
  "creates a new socket with the given url and the handler to handle all incomming messages"
  [url handler]
  (println "attempting to connect websocket")
  (if (.-WebSocket js/window)
    (if-let [chan (js/WebSocket. url)]
      (do
        (set! (.-onopen chan) (fn [event] (js/alert "WebSocket open!")))
        (set! (.-onclose chan) (fn [event] (js/alert "WebSocket closed")))
        (set! (.-onmessage chan) (receive-msg! handler))
        (reset! socket chan)
        (println "Websocket connection established with: " url))
      (throw (js/Error. "Websocket connection failed!")))
    (js/alert "Your browser does not support WebSockets yet.")))

(defn closeSocket
  "closes the Socket"
  []
  (when @socket
    (println "Closing the socket")
    (.close @socket)
    (reset! socket nil)))

(defn parser
  "attaches the response to the html element with id response"
  [response]
  (set-html! (dom/getElement "response") response))

;; ############################################## Page Logic ###############################################

(defn main
  []
  (let [content (html [:hr]
                      [:label {:for "to_socket"} "Socket input"]
                      [:input {:type "text" :pattern "[a-zA-Z0-9 \\?]{3,}" :id "to_socket"}]
                      [:button {:id "button_socket" :type "submit" :class "btnSubmit"} "Submit"]
                      [:section
                       [:span "Response: "]
                       [:span {:id "response"}]])
        element (aget (js/document.getElementsByTagName "main") 0)]
    (set-html! element content)))

(defn socketbinding
  "create the sockets and bind the function to the button with id button_socket"
  []
  (let [button  (dom/getElement "button_socket")
        input   (dom/getElement "to_socket")]

    ;; create the socket
    (createWebSocket "ws://127.0.0.1:8080/echo" parser)

    ;; Assign event listener
    (events/listen button "click"
                   (fn [event]
                     ;; Send message of to_socket through socket
                     (send-msg! (.-value input))))))

(enable-console-print!)

(main)

(socketbinding)
