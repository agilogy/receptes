(ns receptes.controllers.auth
  (:use [compojure.core :only [defroutes GET POST]]
	  	[receptes.controllers.util])
  (:require [clojure.string :as str]
            [ring.util.response :as ring]))

(defn login [username password]
	(if (= username password)
		(json-response {:token username})
		(json-response {} 403)))


(defroutes routes
  (POST  "/auth/token" {params :params} (login (:username params) (:password params))))

