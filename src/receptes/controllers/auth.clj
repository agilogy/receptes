(ns receptes.controllers.auth
  (:use [compojure.core :only [defroutes GET POST]]
	  	[receptes.controllers.util])
  (:require [clojure.string :as str]
            [ring.util.response :as ring]))

(defn- remote-username [request]
	(get (:headers request) "authorization"))

(defn authorization-handling-middleware [app]
  (fn [req]
  	(let [username (remote-username req)]
  		(app (assoc req :user username)))))

(defn login [username password]
	(if (= username password)
		(json-response {:token username})
		(json-response {} 403)))


(defroutes routes
  (POST  "/auth/token" {params :params} (login (:username params) (:password params))))

