(ns hello-world.core)

;;(defn eval_question [id]
;;  (def myx "Hello world!2")
;;  (js/console.log myx)
;;  (js/document.getElementById "app").innerHTML
;;  (.-innerHTML (.getElementById js/document "app"))
;;)

(defn create-heading-element [type text]
  (->>
   (.createTextNode js/document text)
   (.appendChild (.createElement js/document type))
   (.appendChild (.getElementById js/document "app"))
))


;;(defn create-element
;;;  ([type]
;;;  (->>
;;;   (.createElement js/document type)
;;;   (.appendChild (.getElementById js/document "app"))
;;;   ))
;;(
;;  [type text]
;;  (let [x (.createElement js/document type)]
;;   (.-innerHTML "test" x)
;;  (->>
;;   x
;;   (.appendChild (.getElementById js/document "app"))
;;   ))))


(defn init []
     (create-heading-element "h1" "Loginseite")
;:     (create-element "br")
;     (create-element "input" "test")
;     (create-heading-element "h5" "Password")
;     (create-element "input")
;     (create-element "button")
;    (create-heading-element "h1" "Logical Fallacies and Biases")
;    (create-heading-element "" "test")
)

 ;  (def tag2 (.createElement js/document "button" ))
 ;  (def text2 (.createTextNode js/document "Tutorix is the best e-learning platform"))
 ;  (.appendChild tag2 text2)
 ;  (.appendChild el tag2)
 ;  )

(init)
