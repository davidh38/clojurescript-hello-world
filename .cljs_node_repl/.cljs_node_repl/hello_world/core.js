// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('hello_world.core');
goog.require('cljs.core');
hello_world.core.eval_question = (function hello_world$core$eval_question(id){
hello_world.core.myx = "Hello world!2";

console.log(hello_world.core.myx);

document.getElementById("app");


return document.getElementById("app").innerHTML;
});
hello_world.core.create_heading_element = (function hello_world$core$create_heading_element(type,text){
return document.getElementById("app").appendChild(document.createElement(type).appendChild(document.createTextNode(text)));
});
