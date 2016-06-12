(ns testapp.routes.script
  (:require [compojure.core :refer :all]
            [testapp.views.layout :as layout]
            [aleph.http :as http]
            [manifold.stream :as s]
            [manifold.deferred :as d]
            [manifold.bus :as bus]))

(defn scriptbase []
  (layout/common
    [:div#viewport
      [:div#main_alt
       [:h1 "Scripted"]
       [:hr]
       [:main]
       [:script {:src "/js/app.js"}]]]))

(def non-websocket-request
  {:status 400
   :headers {"content-type" "application/text"}
   :body "Expected a websocket request."})

(defn echo-handler
  "This handler sets up a websocket connection, and then proceeds to echo back every message
   it receives from the client.  The value yielded by `websocket-connection` is a **duplex
   stream**, which represents communication to and from the client.  Therefore, all we need to
   do in order to echo the messages is connect the stream to itself.
   Since any request it gets may not be a valid handshake for a websocket request, we need to
   handle that case appropriately."
  [req]
  (-> (http/websocket-connection req)
    (d/chain
      (fn [socket]
        (s/connect socket socket)))
    (d/catch
      (fn [_]
        non-websocket-request))))

(defroutes script-routes
  (GET "/" [] (scriptbase))
  (GET "/echo" [] echo-handler))
