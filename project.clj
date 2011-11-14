(defproject receptes "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.2.1"]
  				[compojure "0.6.4"]
                [ring/ring-jetty-adapter "0.3.9"]
                [ring-json-params "0.1.0"]
                [clj-json "0.2.0"]]
   :dev-dependencies [[lein-ring "0.4.6"]]
   :ring {:handler receptes.core/app}
   :main receptes.core)