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
                 [try-let "1.1.0"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-garden "0.2.6"]
            [quickie "0.4.2"]]
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
