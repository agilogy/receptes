(ns receptes.controllers.auth
  (:use [compojure.core :only [defroutes GET POST]]
	  	[receptes.controllers.util]
	  	[ring.util.response :only [response status]])
  (:require [clojure.string :as str]))

(defn- remote-username [request]
	(get (:headers request) "authorization"))

(defn authorization-handling-middleware [app]
  (fn [req]
  	(let [username (remote-username req)]
  		(app (assoc req :user username)))))

(defn login [username password]
	(if (= username password)
		(response {:token username})
		(status (response "") 403)))

(defroutes routes
  (POST  "/auth/token" {params :params} (login (:username params) (:password params))))

