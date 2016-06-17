(ns testapp.script.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [taoensso.encore :as encore :refer ()]
            [taoensso.sente :as sente :refer (cb-success?)]))

(defn set-html! [el content]
  (set! (.-innerHTML el) content))


(def output-element (.getElementById js/document "output"))
(defn ->output! [fmt & args]
  (let [msg (apply encore/format fmt args)]
    (aset output-element "value" (str (.-value output-element) "• " msg "\n"))
    (aset output-element "scrollTop" (.-scrollHeight output-element))))

;; ############################################## Socket Logic ###############################################

(let [{:keys [chsk ch-recv send-fn state]}
        (sente/make-channel-socket-client! "/chsk" ; Must match server Ring routing URL
        {})]

  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
)

(defn send-echo-msg!
  "sends a message over socket with event echo"
  [msg]
  (chsk-send! [:script/echo {:echo msg}]))

(defn parser
  "attaches the response to the html element with id response"
  [response]
  (set-html! (.getElementById js/document "response") response))

;; Sente event handlers

(defmulti -event-msg-handler
  "Multimethod to handle Sente event-msgs"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps -event-msg-handler with whatever you want to"
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event]}]
  (->output! "Unhandled event: %s" event))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (:first-open? ?data)
    (->output! "Channel socket successfully established!: %s" ?data)
    (->output! "Channel socket state change: %s" ?data)))

(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data event id]}]
  (let [[internal-event args] ?data]
    (->output! "Push event from server: %s" ?data)
    ;; Callback with internal-event and rest as args
    (-event-msg-handler {:id internal-event, :data args})))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (->output! "Handshake: %s" ?data)))

(defmethod -event-msg-handler :script/echo
  [{:as ev-msg :keys [data]}]
  (let [echo (data :echo)]
    (->output! "Echo called with: %s" ev-msg)
    (parser echo)))

;; Sente event router (event-msg-handler loop)

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-client-chsk-router! ch-chsk event-msg-handler)))

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
  (let [button  (.getElementById js/document "button_socket")
        input   (.getElementById js/document "to_socket")]

    ;; Assign event listener
    (set! (.-onclick button) (fn [event]
                               ;; Send message of to_socket through socket
                               (send-echo-msg! (.-value input))))))

(enable-console-print!)

(main)

(defn start! [] (start-router!))
(defonce _start-once (start!))

(socketbinding)
