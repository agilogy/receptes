 (ns receptes.controllers.recipes
  (:use [compojure.core :only [defroutes GET POST DELETE]]
	  	[receptes.controllers.util]
	  	[ring.util.response :only [response status]])
  (:require [clojure.string :as str]
            [receptes.controllers.auth :as auth]
            [receptes.models.recipes :as db]))

(defn find-recipes [request]
	(let [{owner :user} request]
		(response (db/find-by-owner owner))))

(defn add-recipe [request]
	(let [	{owner :user
			{name :name, ingredients :ingredients, instructions :instructions} :params} request]
			(do
				(db/add-recipe name ingredients instructions owner)
				{:ok true, :owner owner})))

(defn delete-recipe [id]
	(db/delete-recipe id)
	(response {:ok true}))

(defroutes routes
  (GET   "/recipes/" [request] find-recipes)
  (POST  "/recipes/" [request] add-recipe)
  (DELETE  "/recipes/:id" [id] (delete-recipe id)))
