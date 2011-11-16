 (ns receptes.controllers.recipes
  (:use [compojure.core :only [defroutes GET POST]]
	  	[receptes.controllers.util])
  (:require [clojure.string :as str]
            [ring.util.response :as ring]
            [receptes.controllers.auth :as auth]))

(defn find-recipes [auth-token]
	(json-response [{:name "Pollastre", :ingredients "Pollastre", :instructions "Posar-hi curry"},
	 {:name "Amanida de tomaquet", :ingredients "Tomaquet", :instructions "Posar-hi tomàquet"}]))


(defroutes routes
  (GET  "/recipes/" {{token "authorization"} :headers} (find-recipes token)))
