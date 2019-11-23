(ns testapp.test.handler
  (:require [ring.middleware.anti-forgery :refer [wrap-anti-forgery]])
  (:use clojure.test
        ring.mock.request
        testapp.handler))

(deftest test-app
  (testing "main route"
    (let [response (app (request :get "/guestbook"))]
      (is (= (:status response) 200))
      (is (.contains (:body response) "Guestbook"))))

  (testing "not-found route"
    (let [response (app (request :get "/invalid"))]
      (is (= (:status response) 404)))))

(deftest request-method-test
  (let [response {:status 200, :headers {}, :body "Foo"}
        handler  (wrap-anti-forgery (constantly response))]
    (are [status req] (= (:status (handler req)) status)
      200 (request :head "/")
      200 (request :get "/")
      200 (request :options "/")
      403 (request :post "/")
      403 (request :put "/")
      403 (request :patch "/")
      403 (request :delete "/"))))
