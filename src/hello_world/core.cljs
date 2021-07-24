(ns hello-world.core)

(defn eval_question [id]
  (def myx "Hello world!2")
  (js/console.log myx)
  (js/document.getElementById "app").innerHTML
  (.-innerHTML (.getElementById js/document "app"))
)

(defn create-heading-element [type text]
  (->>
   (.createTextNode js/document text)
   (.appendChild (.createElement js/document tag type ) )
   (.appendChild (.getElementById js/document "app"))
))

(defn init []
(create-heading-element "h1" "Logical Fallacies and Biases")
(create-heading-element "h2" "Logical Fallacies and Biases")
)

 ;  (def tag2 (.createElement js/document "button" ))
 ;  (def text2 (.createTextNode js/document "Tutorix is the best e-learning platform"))
 ;  (.appendChild tag2 text2)
 ;  (.appendChild el tag2)
 ;  )

(init)
