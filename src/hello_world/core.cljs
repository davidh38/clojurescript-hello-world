(ns hello-world.core)


(println "Hello world!")


(defn eval_question [id]
  (js/console.log id)
  (js/document.getElementById "app").innerHTML
  (.-innerHTML (.getElementById js/document "app"))
)
