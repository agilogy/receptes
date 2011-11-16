 (ns receptes.controllers.recipes
  (:use [compojure.core :only [defroutes GET POST]]
	  	[receptes.controllers.util])
  (:require [clojure.string :as str]
            [ring.util.response :as ring]
            [receptes.controllers.auth :as auth]
            [receptes.models.recipes :as db]))

(defn find-recipes [request]
	(json-response [{:name "Pollastre", :ingredients "Pollastre", :instructions "Posar-hi curry"},
	 {:name "Amanida de tomaquet", :ingredients "Tomaquet", :instructions "Posar-hi tomàquet"}]))

(defn add-recipe [request]
	(let [{name :name, ingredients :ingredients, instructions :instructions} (parameters request)
			owner (auth-user request)]
			(do
				(db/add-recipe name ingredients instructions owner)
				(json-response {:ok true}))))

(defroutes routes
  (GET   "/recipes/" [request] find-recipes)
  (POST  "/recipes/" [request] add-recipe))
