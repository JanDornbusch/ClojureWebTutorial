(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [testapp.script.core]))
(figwheel.client/start {:build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

