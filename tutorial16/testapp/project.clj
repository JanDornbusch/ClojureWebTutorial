(defproject testapp "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.4.0"]
                 [hiccup "1.0.5"]
                 [ring-server "0.4.0"]
                 ;; JDBC dependencies
                 [org.clojure/java.jdbc "0.4.2"]
                 [org.xerial/sqlite-jdbc "3.8.11.2"]
                 ;; CSS
                 [garden "1.3.2"]
                 ;; let-try ... catch
                 [try-let "1.1.0"]
                 ;; CSRF
                 [ring/ring-defaults "0.2.0"]
                 [ring/ring-anti-forgery "1.0.1"]
                 ;; Sessions
                 [lib-noir "0.9.9"]
                 ;; ClojureScript
                 [org.clojure/clojurescript "1.8.51"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-garden "0.2.6"]
            [quickie "0.4.2"]
            [lein-cljsbuild "1.1.3"]]
  :cljsbuild {:builds
              [{:id "app"
                :source-paths ["src/testapp/script"]
                :compiler {:output-to "resources/public/js/app.js"
                           :output-dir "resources/public/js/out"
                           :source-map true
                           ; The optimization level.
                           ; May be :none :whitespace :simple or :advanced.
                           ; Only :none and :simple are supported for bootstrapped ClojureScript.
                           ; https://developers.google.com/closure/compiler/docs/compilation_levels
                           :optimizations :none
                           ; match to ressource path in handler.clj pointing to :output-dir
                           :asset-path "/js/out"
                           :main "testapp.script.core"
                           ; Human readable output true false
                           :pretty-print true}}]}
  :ring {:handler testapp.handler/app
         :init testapp.handler/init
         :destroy testapp.handler/destroy}
  :garden {:builds
           [{:id "main-style"
             :source-paths ["src/testapp/css"]
             :stylesheet testapp.css.screen/screen
             :compiler {:output-to "resources/public/css/screen.css"
                        :vendors ["webkit" "moz" "o"]
                        :auto-prefix #{:box-shadow}
                        :pretty-print? true}},
            {:id "error-style"
             :source-paths ["src/testapp/css"]
             :stylesheet testapp.css.errors/errors
             :compiler {:output-to "resources/public/css/errors.css"
                        :vendors ["webkit" "moz" "o"]
                        :auto-prefix #{:box-shadow}
                        :pretty-print? true}}]}
  :test-matcher #"testapp.*\.test\..*"
  :profiles
  {:uberjar {:aot :all}
   :production
   {:ring
    {:open-browser? false, :stacktraces? false, :auto-reload? false}}
   :dev
   {:dependencies [[ring/ring-mock "0.3.0"]
                   [ring/ring-devel "1.4.0"]
                   [ring-refresh "0.1.2"]]}})
