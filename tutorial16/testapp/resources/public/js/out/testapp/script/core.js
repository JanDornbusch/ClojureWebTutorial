// Compiled by ClojureScript 1.8.51 {}
goog.provide('testapp.script.core');
goog.require('cljs.core');
testapp.script.core.set_html_BANG_ = (function testapp$script$core$set_html_BANG_(el,content){
return el.innerHTML = content;
});
testapp.script.core.main = (function testapp$script$core$main(){
var content = "Hello World from ClojureScript";
var element = (document.getElementsByTagName("main")[(0)]);
return testapp.script.core.set_html_BANG_.call(null,element,content);
});
testapp.script.core.main.call(null);

//# sourceMappingURL=core.js.map