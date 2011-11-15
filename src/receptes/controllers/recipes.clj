 (ns receptes.controllers.recipes
  (:use [compojure.core :only [defroutes GET POST]])
  (:require [clojure.string :as str]
            [ring.util.response :as ring]
            [receptes.controllers.util :as util]))

(defn find-recipes []
	(util/json-response [{:name "Pollastre al curry", :ingredients "Pollastre", :instructions "Posar-hi curry"},
	 {:name "Amanida de tomaquet", :ingredients "Tomaquet", :instructions "Posar-hi tomàquet"}]))


(defroutes routes
  (GET  "/api/0.1/recipes/find" {params :params} (find-recipes)))