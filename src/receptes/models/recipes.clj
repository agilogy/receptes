(ns receptes.models.recipes
  (:use somnium.congomongo))

;ToDo: Estudiar la posibilidad de usar defrecord
;(defrecord Recipe [name ingredients instructions owner])

(def conn (make-connection "receptes"
                            :host "dbh76.mongolab.com"
                            :port 27767))

(authenticate conn ZZZZ ZZZZ)

(defn add-recipe [name ingredients instructions owner]
	(with-mongo conn
    	(insert! :recipes {:name name, :ingredients ingredients, :instructions instructions, :owner owner})))

(defn find-by-owner [owner]
	(with-mongo conn
		(fetch :recipes 
			:where {:owner owner})))

(defn delete-recipe [id]
	(with-mongo conn
		(println id)
		(destroy! :recipes {:_id (org.bson.types.ObjectId. id)})))