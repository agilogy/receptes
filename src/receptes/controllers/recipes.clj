 (ns receptes.controllers.recipes
  (:use [compojure.core :only [defroutes GET POST]]
	  	[receptes.controllers.util]
	  	[ring.util.response :only [response status]])
  (:require [clojure.string :as str]
            [receptes.controllers.auth :as auth]
            [receptes.models.recipes :as db]))

(defn find-recipes [request]
	(response 
	[{:name "Pollastre", :ingredients "Pollastre", :instructions "Posar-hi curry"},
	 {:name "Amanida de tomaquet", :ingredients "Tomaquet", :instructions "Posar-hi tomàquet"}]))

(defn add-recipe [request]
	(let [	{owner :user
			{name :name, ingredients :ingredients, instructions :instructions} :params} request]
			(do
				(db/add-recipe name ingredients instructions owner)
				{:ok true, :owner owner})))

(defroutes routes
  (GET   "/recipes/" [request] find-recipes)
  (POST  "/recipes/" [request] add-recipe))
