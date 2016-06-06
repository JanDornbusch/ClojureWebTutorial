// Compiled by ClojureScript 1.8.51 {}
goog.provide('testapp.script.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
testapp.script.core.set_html_BANG_ = (function testapp$script$core$set_html_BANG_(el,content){
return el.innerHTML = content;
});
testapp.script.core.main = (function testapp$script$core$main(){
var content = [cljs.core.str("Hello World from ClojureScript!"),cljs.core.str("<section><span>Clicks: </span><span id=\"clicksnumber\"></span></section>"),cljs.core.str("<button id=\"button\">Click me</button>")].join('');
var element = (document.getElementsByTagName("main")[(0)]);
return testapp.script.core.set_html_BANG_.call(null,element,content);
});
testapp.script.core.counter = (function testapp$script$core$counter(){
var counter__$1 = cljs.core.atom.call(null,(0));
var button = goog.dom.getElement("button");
var display = goog.dom.getElement("clicksnumber");
display.innerHTML = cljs.core.deref.call(null,counter__$1);

return goog.events.listen(button,"click",((function (counter__$1,button,display){
return (function (event){
cljs.core.swap_BANG_.call(null,counter__$1,cljs.core.inc);

return display.innerHTML = cljs.core.deref.call(null,counter__$1);
});})(counter__$1,button,display))
);
});
testapp.script.core.main.call(null);
testapp.script.core.counter.call(null);

//# sourceMappingURL=core.js.map?rel=1465246409872