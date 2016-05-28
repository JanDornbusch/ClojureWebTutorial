// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.userAgent.product');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.create_custom_event = (function figwheel$client$utils$create_custom_event(event_name,data){
if(cljs.core.not.call(null,goog.userAgent.product.IE)){
return (new CustomEvent(event_name,(function (){var obj35769 = {"detail":data};
return obj35769;
})()));
} else {
var event = document.createEvent("CustomEvent");
event.initCustomEvent(event_name,false,false,data);

return event;
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__18430__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18430__auto__)){
var and__18430__auto____$1 = (window["CustomEvent"]);
if(cljs.core.truth_(and__18430__auto____$1)){
return typeof document !== 'undefined';
} else {
return and__18430__auto____$1;
}
} else {
return and__18430__auto__;
}
})())){
return document.body.dispatchEvent(figwheel.client.utils.create_custom_event.call(null,event_name,data));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args35774 = [];
var len__19512__auto___35780 = arguments.length;
var i__19513__auto___35781 = (0);
while(true){
if((i__19513__auto___35781 < len__19512__auto___35780)){
args35774.push((arguments[i__19513__auto___35781]));

var G__35782 = (i__19513__auto___35781 + (1));
i__19513__auto___35781 = G__35782;
continue;
} else {
}
break;
}

var G__35776 = args35774.length;
switch (G__35776) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35774.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__35777 = cljs.core._EQ_;
var expr__35778 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__35777.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__35778))){
return ((function (pred__35777,expr__35778){
return (function (p1__35770_SHARP_){
return console.warn(p1__35770_SHARP_);
});
;})(pred__35777,expr__35778))
} else {
if(cljs.core.truth_(pred__35777.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__35778))){
return ((function (pred__35777,expr__35778){
return (function (p1__35771_SHARP_){
return console.debug(p1__35771_SHARP_);
});
;})(pred__35777,expr__35778))
} else {
if(cljs.core.truth_(pred__35777.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__35778))){
return ((function (pred__35777,expr__35778){
return (function (p1__35772_SHARP_){
return console.error(p1__35772_SHARP_);
});
;})(pred__35777,expr__35778))
} else {
return ((function (pred__35777,expr__35778){
return (function (p1__35773_SHARP_){
return console.log(p1__35773_SHARP_);
});
;})(pred__35777,expr__35778))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__35784){
var map__35787 = p__35784;
var map__35787__$1 = ((((!((map__35787 == null)))?((((map__35787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35787):map__35787);
var opts = map__35787__$1;
var eval_fn = cljs.core.get.call(null,map__35787__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map?rel=1464472749345