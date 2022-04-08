// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
hello_world.core.create_heading_element = (function hello_world$core$create_heading_element(type,text){
return document.getElementById("app").appendChild(document.createElement(type).appendChild(document.createTextNode(text)));
});
hello_world.core.init = (function hello_world$core$init(){
return hello_world.core.create_heading_element.call(null,"h1","Loginseite");
});
hello_world.core.init.call(null);

//# sourceMappingURL=core.js.map
