(ns receptes.controllers.util
	)


(defn get-header [header-name request]
	(get (:headers request) header-name))

(defn parameters [request]
	(:params request))