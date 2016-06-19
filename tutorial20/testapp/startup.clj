(use 'testapp.repl :reload)

(startup-server)
(stop-server)

;; only if required
(start-router!)
(stop-router!)
