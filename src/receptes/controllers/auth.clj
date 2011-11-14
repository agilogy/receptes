(ns receptes.controllers.auth
  (:use [compojure.core :only [defroutes GET POST]])
  (:require [clojure.string :as str]
            [ring.util.response :as ring]
            [receptes.controllers.util :as util]))

(defn login [username password]
	(= username password))


(defroutes routes
  (POST  "/login" {params :params} (util/json-response (login (:username params) (:password params)))))

