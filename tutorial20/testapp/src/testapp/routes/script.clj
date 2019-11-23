(ns testapp.routes.script
  (:require [compojure.core :refer :all]
            [testapp.views.layout :as layout]
            [aleph.http :as http]
            [manifold.stream :as s]
            [manifold.deferred :as d]
            [manifold.bus :as bus]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.aleph :refer (get-sch-adapter)]   
            [hiccup.form :refer [hidden-field]]         
            [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]
            [noir.session :as session]))

(defonce router_ (atom nil))

(defn scriptbase []
  (session/put! :uid 1)
  (layout/common
    [:div#viewport
      [:div#main_alt
       [:h1 "Scripted"]
       [:hr]
       [:main]
       [:br]
       [:lable "Console:"]
       [:textarea#output {:style "width: 100%; height: 200px;"}]
       (let [csrf-token
          ;; (:anti-forgery-token ring-req) ; Also an option
            (force *anti-forgery-token*)]

          [:div#sente-csrf-token {:data-csrf-token csrf-token}])
       [:script {:src "/js/app.js"}]]]))



;; Sente event handlers
(defmulti -event-msg-handler
  "Multimethod to handle Sente event-msgs"
  :id ; Dispatch on event-id
  )
(defmulti -internal-event-msg-handler
  "Multimethod to handle Sente event-msgs available only to users with user ID"
  :id ; Dispatch on event-id
  )
(defn event-msg-handler [{:as ev-msg :keys [uid]}]
  "Wraps -event-msg-handler with whatever you want to
   we will check the uid here to do see which handler has to be called"
  (if (= uid ::nil-uid)
    (-event-msg-handler ev-msg) ; Handle event-msgs on a single thread
    ;; (future (-event-msg-handler ev-msg)) ; Handle event-msgs on a thread pool

    ;; Here you could group by user groups too! I would suggest not to do this checks in every single function! Else do it here!
    (-internal-event-msg-handler ev-msg)
    ;; (future (-internal-event-msg-handler ev-msg)) ; Handle internal-event-msgs on a thread pool
))



;; Define our Sente channel socket (chsk) server
(let [user-fn (fn [ring-req] (session/get :uid))
      chsk-server
        (sente/make-channel-socket-server! (get-sch-adapter) {:user-id-fn user-fn})
      {:keys [ch-recv send-fn connected-uids ajax-post-fn ajax-get-or-ws-handshake-fn]}
        chsk-server]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  ;; Sente event router (event-msg-handler loop)
  (defn  stop-router! [] (when-let [stop-fn @router_] (stop-fn)))
  (defn start-router! []
    (stop-router!)
    (reset! router_
      (sente/start-server-chsk-router! ch-chsk event-msg-handler)))
  (start-router!)
)



;; Catch all else of events without UID (::nil-uid)
(defmethod -event-msg-handler :default
  [{:as ev-msg :keys [event ?reply-fn]}]
  "Default/fallback case (no other matching handler)"
    (println "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-server event})))




(defmethod -internal-event-msg-handler :default
  [{:as ev-msg :keys [event ?reply-fn]}]
  "Default/fallback case (no other matching handler)"
    (println "Unhandled internal event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-server event})))

(defmethod -internal-event-msg-handler :chsk/uidport-open
  [{:as ev-msg :keys [?data uid]}]
    ;; this is message of new connection (port opened)
  )

(defmethod -internal-event-msg-handler :chsk/uidport-close
  [{:as ev-msg :keys [?data uid]}]
    ;; this is message of new connection (port closed)
  )


(defmethod -internal-event-msg-handler :script/echo
  [{:as ev-msg :keys [?data uid]}]
    "This is our echo service"
    (println ?data " - " uid)
    (chsk-send! uid [:script/echo {:echo (?data :echo)}]))

(defroutes script-routes
  (GET   "/"      []       (scriptbase))
  (GET   "/chsk"  ring-req (ring-ajax-get-or-ws-handshake ring-req))
  (POST  "/chsk"  ring-req (ring-ajax-post ring-req)))
