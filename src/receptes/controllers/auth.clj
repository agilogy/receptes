(ns receptes.controllers.auth
  (:use [compojure.core :only [defroutes GET POST]])
  (:require [clojure.string :as str]
            [ring.util.response :as ring]
            [receptes.controllers.util :as util]))

(defn login [username password]
	(if (= username password)
		(util/json-response {:token username})
		(util/json-response {} 403)))


(defroutes routes
  (POST  "/api/0.1/auth/login" {params :params} (login (:username params) (:password params))))

