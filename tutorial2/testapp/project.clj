(defproject testapp "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [compojure "1.6.1"]
                 [hiccup "1.0.5"]
                 [ring-server "0.5.0"]]
  :plugins [[lein-ring "0.8.12"]]
  :ring {:handler testapp.handler/app
         :init testapp.handler/init
         :destroy testapp.handler/destroy}
  :profiles
  {:uberjar {:aot :all}
   :production
   {:ring
    {:open-browser? false, :stacktraces? false, :auto-reload? false}}
   :dev
   {:dependencies [[ring-mock "0.1.5"] [ring/ring-devel "1.8.0"]]}})

;; Commands to startup the Server:
;; ctrl+alt+c ctrl+alt+j lein (in vscode with calva)
;; the REPL will open and you can start the server by copy and paste:
;; (use 'testapp.repl)
;; (start-server)
;; In case there is a bind problem try netstat -abn to find out which
;; programm uses the port 8080 or start with custom port 
;; (start-server "18080")