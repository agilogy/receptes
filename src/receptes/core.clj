(ns receptes.core
  (:use compojure.core
        ring.adapter.jetty, ring.middleware.params, ring.middleware.session,
        )
    (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.adapter.jetty :as ring]
            [ring.util.response :as resp]
            [receptes.controllers.auth :as auth]
            [receptes.controllers.json :as json]
            [receptes.controllers.recipes :as recipes]))

(def root {:root "jqm"} )

(defroutes main-routes
  (GET "/" [] (resp/resource-response "index.html" root))
  (route/resources "/" root)
   auth/routes
   recipes/routes
  )


(def app
  (-> (handler/site main-routes)
      (auth/authorization-handling-middleware)
      (json/json-converter-middleware)))

(defn -main []
  ;;(let [port (Integer/parseInt (System/getenv "PORT"))]
  (let [port 9999]
    (run-jetty app {:port port})))
