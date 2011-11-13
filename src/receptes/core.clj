(ns receptes.core
  (:use compojure.core
        ring.adapter.jetty, ring.middleware.params, ring.middleware.session)
    (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.adapter.jetty :as ring]))
(defroutes main-routes
  (route/resources "/"))

(def app
  (handler/site main-routes))

(defn -main []
  ;;(let [port (Integer/parseInt (System/getenv "PORT"))]
  (let [port 9999]
    (run-jetty app {:port port})))
