// Compiled by ClojureScript 1.8.51 {}
goog.provide('testapp.script.core');
goog.require('cljs.core');
testapp.script.core.set_html_BANG_ = (function testapp$script$core$set_html_BANG_(el,content){
return el.innerHTML = content;
});
if(typeof testapp.script.core.ts !== 'undefined'){
} else {
testapp.script.core.ts = (new Date()).getTime();
}
testapp.script.core.main = (function testapp$script$core$main(){
var content = [cljs.core.str("Hello World from ClojureScript "),cljs.core.str(testapp.script.core.ts)].join('');
var element = (document.getElementsByTagName("main")[(0)]);
return testapp.script.core.set_html_BANG_.call(null,element,content);
});
testapp.script.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1464474699452