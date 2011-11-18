(ns receptes.controllers.json
  (:use [compojure.core :only [defroutes GET POST]]
	  	[receptes.controllers.util])
  (:require [clojure.string :as str]
            [ring.util.response :as ring]
            [clj-json.core :as json]))

(defn- response-body-to-json [response]
  (binding [clj-json.core/*coercions* {org.bson.types.ObjectId (fn [x] (str x))}] 
	 (assoc response :body (json/generate-string (:body response)))))

(defn json-converter-middleware [app]
  (fn [req]
    (if (= "application/json" (get (:headers req) "accept"))
        (response-body-to-json (app req))
        (app req))))
     
(defn response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})
