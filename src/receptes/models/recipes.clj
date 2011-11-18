(ns receptes.models.recipes
  (:use somnium.congomongo))

;ToDo: Estudiar la posibilidad de usar defrecord
;(defrecord Recipe [name ingredients instructions owner])

(def conn (make-connection "receptes"
                            :host "dbh76.mongolab.com"
                            :port 27767))

(authenticate conn "receptes" "r3c3p1es")

(defn add-recipe [name ingredients instructions owner]
	(with-mongo conn
    	(insert! :recipes {:name name, :ingredients ingredients, :instructions instructions, :owner owner})))
(defn find-by-owner [owner]
	(with-mongo conn
		(fetch :recipes 
			:where {:owner owner})))