(ns receptes.models.recipes
  (:use somnium.congomongo))

;ToDo: Estudiar la posibilidad de usar defrecord
;(defrecord Recipe [name ingredients instructions owner])

;;(let [[all user password host port database ] 
;;		(re-matches #"mongodb://(.*):(.*)@(.*):(.*)/(.*)" (System/getenv "MONGOLAB_URI") )]
;;	(def conn (make-connection database :host host :port port ))
;;	(authenticate conn user password))

(let [uri (java.net.URI. (System/getenv "MONGOLAB_URI"))
    host (.getHost uri)
    port (if (pos? (.getPort uri)) (.getPort uri) 27000)
    database (.substring (.getPath uri) 1)
    [userinfo username password] (re-matches #"(.*):(.*)" (.getUserInfo uri))]
		(def conn (make-connection database :host host :port port ))
		(authenticate conn username password))


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