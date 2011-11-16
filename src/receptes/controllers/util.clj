(ns receptes.controllers.util
	(:require [clj-json.core :as json]))

(defn json-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})

(defn get-header [header-name request]
	(get (:headers request) header-name))

(defn auth-user [request]
	(get-header "authorization" request))

(defn parameters [request]
	(:params request))