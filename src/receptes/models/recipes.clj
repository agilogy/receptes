(ns receptes.models.recipes
  (:use somnium.congomongo))

;ToDo: Estudiar la posibilidad de usar defrecord
;(defrecord Recipe [name ingredients instructions owner])

(def conn (make-connection "receptes"
                            :host "dbh76.mongolab.com"
                            :port 27767))

(authenticate conn XXXXXX XXXXXXX)

(defn add-recipe [name ingredients instructions owner]
	(with-mongo conn
    	(insert! :recipes {:name name, :ingredients ingredients, :instructions instructions, :owner owner})))
