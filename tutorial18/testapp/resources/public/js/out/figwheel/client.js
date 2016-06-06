// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24832 = cljs.core._EQ_;
var expr__24833 = (function (){var or__18442__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e24836){if((e24836 instanceof Error)){
var e = e24836;
return false;
} else {
throw e24836;

}
}})();
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24832.call(null,"true",expr__24833))){
return true;
} else {
if(cljs.core.truth_(pred__24832.call(null,"false",expr__24833))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24833)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24838){if((e24838 instanceof Error)){
var e = e24838;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e24838;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19519__auto__ = [];
var len__19512__auto___24840 = arguments.length;
var i__19513__auto___24841 = (0);
while(true){
if((i__19513__auto___24841 < len__19512__auto___24840)){
args__19519__auto__.push((arguments[i__19513__auto___24841]));

var G__24842 = (i__19513__auto___24841 + (1));
i__19513__auto___24841 = G__24842;
continue;
} else {
}
break;
}

var argseq__19520__auto__ = ((((0) < args__19519__auto__.length))?(new cljs.core.IndexedSeq(args__19519__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19520__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24839){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24839));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24843){
var map__24846 = p__24843;
var map__24846__$1 = ((((!((map__24846 == null)))?((((map__24846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24846):map__24846);
var message = cljs.core.get.call(null,map__24846__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24846__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18442__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18430__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18430__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18430__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20515__auto___25008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___25008,ch){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___25008,ch){
return (function (state_24977){
var state_val_24978 = (state_24977[(1)]);
if((state_val_24978 === (7))){
var inst_24973 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24979_25009 = state_24977__$1;
(statearr_24979_25009[(2)] = inst_24973);

(statearr_24979_25009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (1))){
var state_24977__$1 = state_24977;
var statearr_24980_25010 = state_24977__$1;
(statearr_24980_25010[(2)] = null);

(statearr_24980_25010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (4))){
var inst_24930 = (state_24977[(7)]);
var inst_24930__$1 = (state_24977[(2)]);
var state_24977__$1 = (function (){var statearr_24981 = state_24977;
(statearr_24981[(7)] = inst_24930__$1);

return statearr_24981;
})();
if(cljs.core.truth_(inst_24930__$1)){
var statearr_24982_25011 = state_24977__$1;
(statearr_24982_25011[(1)] = (5));

} else {
var statearr_24983_25012 = state_24977__$1;
(statearr_24983_25012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (15))){
var inst_24937 = (state_24977[(8)]);
var inst_24952 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24937);
var inst_24953 = cljs.core.first.call(null,inst_24952);
var inst_24954 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24953);
var inst_24955 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24954)].join('');
var inst_24956 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24955);
var state_24977__$1 = state_24977;
var statearr_24984_25013 = state_24977__$1;
(statearr_24984_25013[(2)] = inst_24956);

(statearr_24984_25013[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (13))){
var inst_24961 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24985_25014 = state_24977__$1;
(statearr_24985_25014[(2)] = inst_24961);

(statearr_24985_25014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (6))){
var state_24977__$1 = state_24977;
var statearr_24986_25015 = state_24977__$1;
(statearr_24986_25015[(2)] = null);

(statearr_24986_25015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (17))){
var inst_24959 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24987_25016 = state_24977__$1;
(statearr_24987_25016[(2)] = inst_24959);

(statearr_24987_25016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (3))){
var inst_24975 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24977__$1,inst_24975);
} else {
if((state_val_24978 === (12))){
var inst_24936 = (state_24977[(9)]);
var inst_24950 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24936,opts);
var state_24977__$1 = state_24977;
if(cljs.core.truth_(inst_24950)){
var statearr_24988_25017 = state_24977__$1;
(statearr_24988_25017[(1)] = (15));

} else {
var statearr_24989_25018 = state_24977__$1;
(statearr_24989_25018[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (2))){
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24977__$1,(4),ch);
} else {
if((state_val_24978 === (11))){
var inst_24937 = (state_24977[(8)]);
var inst_24942 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24943 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24937);
var inst_24944 = cljs.core.async.timeout.call(null,(1000));
var inst_24945 = [inst_24943,inst_24944];
var inst_24946 = (new cljs.core.PersistentVector(null,2,(5),inst_24942,inst_24945,null));
var state_24977__$1 = state_24977;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24977__$1,(14),inst_24946);
} else {
if((state_val_24978 === (9))){
var inst_24937 = (state_24977[(8)]);
var inst_24963 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24964 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24937);
var inst_24965 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24964);
var inst_24966 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24965)].join('');
var inst_24967 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24966);
var state_24977__$1 = (function (){var statearr_24990 = state_24977;
(statearr_24990[(10)] = inst_24963);

return statearr_24990;
})();
var statearr_24991_25019 = state_24977__$1;
(statearr_24991_25019[(2)] = inst_24967);

(statearr_24991_25019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (5))){
var inst_24930 = (state_24977[(7)]);
var inst_24932 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24933 = (new cljs.core.PersistentArrayMap(null,2,inst_24932,null));
var inst_24934 = (new cljs.core.PersistentHashSet(null,inst_24933,null));
var inst_24935 = figwheel.client.focus_msgs.call(null,inst_24934,inst_24930);
var inst_24936 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24935);
var inst_24937 = cljs.core.first.call(null,inst_24935);
var inst_24938 = figwheel.client.autoload_QMARK_.call(null);
var state_24977__$1 = (function (){var statearr_24992 = state_24977;
(statearr_24992[(9)] = inst_24936);

(statearr_24992[(8)] = inst_24937);

return statearr_24992;
})();
if(cljs.core.truth_(inst_24938)){
var statearr_24993_25020 = state_24977__$1;
(statearr_24993_25020[(1)] = (8));

} else {
var statearr_24994_25021 = state_24977__$1;
(statearr_24994_25021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (14))){
var inst_24948 = (state_24977[(2)]);
var state_24977__$1 = state_24977;
var statearr_24995_25022 = state_24977__$1;
(statearr_24995_25022[(2)] = inst_24948);

(statearr_24995_25022[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (16))){
var state_24977__$1 = state_24977;
var statearr_24996_25023 = state_24977__$1;
(statearr_24996_25023[(2)] = null);

(statearr_24996_25023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (10))){
var inst_24969 = (state_24977[(2)]);
var state_24977__$1 = (function (){var statearr_24997 = state_24977;
(statearr_24997[(11)] = inst_24969);

return statearr_24997;
})();
var statearr_24998_25024 = state_24977__$1;
(statearr_24998_25024[(2)] = null);

(statearr_24998_25024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24978 === (8))){
var inst_24936 = (state_24977[(9)]);
var inst_24940 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24936,opts);
var state_24977__$1 = state_24977;
if(cljs.core.truth_(inst_24940)){
var statearr_24999_25025 = state_24977__$1;
(statearr_24999_25025[(1)] = (11));

} else {
var statearr_25000_25026 = state_24977__$1;
(statearr_25000_25026[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20515__auto___25008,ch))
;
return ((function (switch__20494__auto__,c__20515__auto___25008,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20495__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20495__auto____0 = (function (){
var statearr_25004 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25004[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20495__auto__);

(statearr_25004[(1)] = (1));

return statearr_25004;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20495__auto____1 = (function (state_24977){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_24977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e25005){if((e25005 instanceof Object)){
var ex__20498__auto__ = e25005;
var statearr_25006_25027 = state_24977;
(statearr_25006_25027[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25028 = state_24977;
state_24977 = G__25028;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20495__auto__ = function(state_24977){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20495__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20495__auto____1.call(this,state_24977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20495__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20495__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___25008,ch))
})();
var state__20517__auto__ = (function (){var statearr_25007 = f__20516__auto__.call(null);
(statearr_25007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___25008);

return statearr_25007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___25008,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25029_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25029_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25036 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25036){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25034 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25035 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25035;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25034;
}}catch (e25033){if((e25033 instanceof Error)){
var e = e25033;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25036], null));
} else {
var e = e25033;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25036))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25037){
var map__25044 = p__25037;
var map__25044__$1 = ((((!((map__25044 == null)))?((((map__25044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25044):map__25044);
var opts = map__25044__$1;
var build_id = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25044,map__25044__$1,opts,build_id){
return (function (p__25046){
var vec__25047 = p__25046;
var map__25048 = cljs.core.nth.call(null,vec__25047,(0),null);
var map__25048__$1 = ((((!((map__25048 == null)))?((((map__25048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25048):map__25048);
var msg = map__25048__$1;
var msg_name = cljs.core.get.call(null,map__25048__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25047,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25047,map__25048,map__25048__$1,msg,msg_name,_,map__25044,map__25044__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25047,map__25048,map__25048__$1,msg,msg_name,_,map__25044,map__25044__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25044,map__25044__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25054){
var vec__25055 = p__25054;
var map__25056 = cljs.core.nth.call(null,vec__25055,(0),null);
var map__25056__$1 = ((((!((map__25056 == null)))?((((map__25056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25056):map__25056);
var msg = map__25056__$1;
var msg_name = cljs.core.get.call(null,map__25056__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25055,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25058){
var map__25068 = p__25058;
var map__25068__$1 = ((((!((map__25068 == null)))?((((map__25068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25068):map__25068);
var on_compile_warning = cljs.core.get.call(null,map__25068__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25068__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25068,map__25068__$1,on_compile_warning,on_compile_fail){
return (function (p__25070){
var vec__25071 = p__25070;
var map__25072 = cljs.core.nth.call(null,vec__25071,(0),null);
var map__25072__$1 = ((((!((map__25072 == null)))?((((map__25072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25072):map__25072);
var msg = map__25072__$1;
var msg_name = cljs.core.get.call(null,map__25072__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25071,(1));
var pred__25074 = cljs.core._EQ_;
var expr__25075 = msg_name;
if(cljs.core.truth_(pred__25074.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25075))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25074.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25075))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25068,map__25068__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto__,msg_hist,msg_names,msg){
return (function (state_25283){
var state_val_25284 = (state_25283[(1)]);
if((state_val_25284 === (7))){
var inst_25211 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
if(cljs.core.truth_(inst_25211)){
var statearr_25285_25331 = state_25283__$1;
(statearr_25285_25331[(1)] = (8));

} else {
var statearr_25286_25332 = state_25283__$1;
(statearr_25286_25332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (20))){
var inst_25277 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25287_25333 = state_25283__$1;
(statearr_25287_25333[(2)] = inst_25277);

(statearr_25287_25333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (27))){
var inst_25273 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25288_25334 = state_25283__$1;
(statearr_25288_25334[(2)] = inst_25273);

(statearr_25288_25334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (1))){
var inst_25204 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25283__$1 = state_25283;
if(cljs.core.truth_(inst_25204)){
var statearr_25289_25335 = state_25283__$1;
(statearr_25289_25335[(1)] = (2));

} else {
var statearr_25290_25336 = state_25283__$1;
(statearr_25290_25336[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (24))){
var inst_25275 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25291_25337 = state_25283__$1;
(statearr_25291_25337[(2)] = inst_25275);

(statearr_25291_25337[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (4))){
var inst_25281 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25283__$1,inst_25281);
} else {
if((state_val_25284 === (15))){
var inst_25279 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25292_25338 = state_25283__$1;
(statearr_25292_25338[(2)] = inst_25279);

(statearr_25292_25338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (21))){
var inst_25238 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25293_25339 = state_25283__$1;
(statearr_25293_25339[(2)] = inst_25238);

(statearr_25293_25339[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (31))){
var inst_25262 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25283__$1 = state_25283;
if(cljs.core.truth_(inst_25262)){
var statearr_25294_25340 = state_25283__$1;
(statearr_25294_25340[(1)] = (34));

} else {
var statearr_25295_25341 = state_25283__$1;
(statearr_25295_25341[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (32))){
var inst_25271 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25296_25342 = state_25283__$1;
(statearr_25296_25342[(2)] = inst_25271);

(statearr_25296_25342[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (33))){
var inst_25260 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25297_25343 = state_25283__$1;
(statearr_25297_25343[(2)] = inst_25260);

(statearr_25297_25343[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (13))){
var inst_25225 = figwheel.client.heads_up.clear.call(null);
var state_25283__$1 = state_25283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(16),inst_25225);
} else {
if((state_val_25284 === (22))){
var inst_25242 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25243 = figwheel.client.heads_up.append_message.call(null,inst_25242);
var state_25283__$1 = state_25283;
var statearr_25298_25344 = state_25283__$1;
(statearr_25298_25344[(2)] = inst_25243);

(statearr_25298_25344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (36))){
var inst_25269 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25299_25345 = state_25283__$1;
(statearr_25299_25345[(2)] = inst_25269);

(statearr_25299_25345[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (29))){
var inst_25253 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25300_25346 = state_25283__$1;
(statearr_25300_25346[(2)] = inst_25253);

(statearr_25300_25346[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (6))){
var inst_25206 = (state_25283[(7)]);
var state_25283__$1 = state_25283;
var statearr_25301_25347 = state_25283__$1;
(statearr_25301_25347[(2)] = inst_25206);

(statearr_25301_25347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (28))){
var inst_25249 = (state_25283[(2)]);
var inst_25250 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25251 = figwheel.client.heads_up.display_warning.call(null,inst_25250);
var state_25283__$1 = (function (){var statearr_25302 = state_25283;
(statearr_25302[(8)] = inst_25249);

return statearr_25302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(29),inst_25251);
} else {
if((state_val_25284 === (25))){
var inst_25247 = figwheel.client.heads_up.clear.call(null);
var state_25283__$1 = state_25283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(28),inst_25247);
} else {
if((state_val_25284 === (34))){
var inst_25264 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25283__$1 = state_25283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(37),inst_25264);
} else {
if((state_val_25284 === (17))){
var inst_25231 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25303_25348 = state_25283__$1;
(statearr_25303_25348[(2)] = inst_25231);

(statearr_25303_25348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (3))){
var inst_25223 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25283__$1 = state_25283;
if(cljs.core.truth_(inst_25223)){
var statearr_25304_25349 = state_25283__$1;
(statearr_25304_25349[(1)] = (13));

} else {
var statearr_25305_25350 = state_25283__$1;
(statearr_25305_25350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (12))){
var inst_25219 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25306_25351 = state_25283__$1;
(statearr_25306_25351[(2)] = inst_25219);

(statearr_25306_25351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (2))){
var inst_25206 = (state_25283[(7)]);
var inst_25206__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25283__$1 = (function (){var statearr_25307 = state_25283;
(statearr_25307[(7)] = inst_25206__$1);

return statearr_25307;
})();
if(cljs.core.truth_(inst_25206__$1)){
var statearr_25308_25352 = state_25283__$1;
(statearr_25308_25352[(1)] = (5));

} else {
var statearr_25309_25353 = state_25283__$1;
(statearr_25309_25353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (23))){
var inst_25245 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25283__$1 = state_25283;
if(cljs.core.truth_(inst_25245)){
var statearr_25310_25354 = state_25283__$1;
(statearr_25310_25354[(1)] = (25));

} else {
var statearr_25311_25355 = state_25283__$1;
(statearr_25311_25355[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (35))){
var state_25283__$1 = state_25283;
var statearr_25312_25356 = state_25283__$1;
(statearr_25312_25356[(2)] = null);

(statearr_25312_25356[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (19))){
var inst_25240 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25283__$1 = state_25283;
if(cljs.core.truth_(inst_25240)){
var statearr_25313_25357 = state_25283__$1;
(statearr_25313_25357[(1)] = (22));

} else {
var statearr_25314_25358 = state_25283__$1;
(statearr_25314_25358[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (11))){
var inst_25215 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25315_25359 = state_25283__$1;
(statearr_25315_25359[(2)] = inst_25215);

(statearr_25315_25359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (9))){
var inst_25217 = figwheel.client.heads_up.clear.call(null);
var state_25283__$1 = state_25283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(12),inst_25217);
} else {
if((state_val_25284 === (5))){
var inst_25208 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25283__$1 = state_25283;
var statearr_25316_25360 = state_25283__$1;
(statearr_25316_25360[(2)] = inst_25208);

(statearr_25316_25360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (14))){
var inst_25233 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25283__$1 = state_25283;
if(cljs.core.truth_(inst_25233)){
var statearr_25317_25361 = state_25283__$1;
(statearr_25317_25361[(1)] = (18));

} else {
var statearr_25318_25362 = state_25283__$1;
(statearr_25318_25362[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (26))){
var inst_25255 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25283__$1 = state_25283;
if(cljs.core.truth_(inst_25255)){
var statearr_25319_25363 = state_25283__$1;
(statearr_25319_25363[(1)] = (30));

} else {
var statearr_25320_25364 = state_25283__$1;
(statearr_25320_25364[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (16))){
var inst_25227 = (state_25283[(2)]);
var inst_25228 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25229 = figwheel.client.heads_up.display_exception.call(null,inst_25228);
var state_25283__$1 = (function (){var statearr_25321 = state_25283;
(statearr_25321[(9)] = inst_25227);

return statearr_25321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(17),inst_25229);
} else {
if((state_val_25284 === (30))){
var inst_25257 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25258 = figwheel.client.heads_up.display_warning.call(null,inst_25257);
var state_25283__$1 = state_25283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(33),inst_25258);
} else {
if((state_val_25284 === (10))){
var inst_25221 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25322_25365 = state_25283__$1;
(statearr_25322_25365[(2)] = inst_25221);

(statearr_25322_25365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (18))){
var inst_25235 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25236 = figwheel.client.heads_up.display_exception.call(null,inst_25235);
var state_25283__$1 = state_25283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(21),inst_25236);
} else {
if((state_val_25284 === (37))){
var inst_25266 = (state_25283[(2)]);
var state_25283__$1 = state_25283;
var statearr_25323_25366 = state_25283__$1;
(statearr_25323_25366[(2)] = inst_25266);

(statearr_25323_25366[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25284 === (8))){
var inst_25213 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25283__$1 = state_25283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25283__$1,(11),inst_25213);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20515__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20494__auto__,c__20515__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto____0 = (function (){
var statearr_25327 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25327[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto__);

(statearr_25327[(1)] = (1));

return statearr_25327;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto____1 = (function (state_25283){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_25283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e25328){if((e25328 instanceof Object)){
var ex__20498__auto__ = e25328;
var statearr_25329_25367 = state_25283;
(statearr_25329_25367[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25368 = state_25283;
state_25283 = G__25368;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto__ = function(state_25283){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto____1.call(this,state_25283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto__,msg_hist,msg_names,msg))
})();
var state__20517__auto__ = (function (){var statearr_25330 = f__20516__auto__.call(null);
(statearr_25330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto__);

return statearr_25330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto__,msg_hist,msg_names,msg))
);

return c__20515__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20515__auto___25431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___25431,ch){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___25431,ch){
return (function (state_25414){
var state_val_25415 = (state_25414[(1)]);
if((state_val_25415 === (1))){
var state_25414__$1 = state_25414;
var statearr_25416_25432 = state_25414__$1;
(statearr_25416_25432[(2)] = null);

(statearr_25416_25432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (2))){
var state_25414__$1 = state_25414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25414__$1,(4),ch);
} else {
if((state_val_25415 === (3))){
var inst_25412 = (state_25414[(2)]);
var state_25414__$1 = state_25414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25414__$1,inst_25412);
} else {
if((state_val_25415 === (4))){
var inst_25402 = (state_25414[(7)]);
var inst_25402__$1 = (state_25414[(2)]);
var state_25414__$1 = (function (){var statearr_25417 = state_25414;
(statearr_25417[(7)] = inst_25402__$1);

return statearr_25417;
})();
if(cljs.core.truth_(inst_25402__$1)){
var statearr_25418_25433 = state_25414__$1;
(statearr_25418_25433[(1)] = (5));

} else {
var statearr_25419_25434 = state_25414__$1;
(statearr_25419_25434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (5))){
var inst_25402 = (state_25414[(7)]);
var inst_25404 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25402);
var state_25414__$1 = state_25414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25414__$1,(8),inst_25404);
} else {
if((state_val_25415 === (6))){
var state_25414__$1 = state_25414;
var statearr_25420_25435 = state_25414__$1;
(statearr_25420_25435[(2)] = null);

(statearr_25420_25435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (7))){
var inst_25410 = (state_25414[(2)]);
var state_25414__$1 = state_25414;
var statearr_25421_25436 = state_25414__$1;
(statearr_25421_25436[(2)] = inst_25410);

(statearr_25421_25436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25415 === (8))){
var inst_25406 = (state_25414[(2)]);
var state_25414__$1 = (function (){var statearr_25422 = state_25414;
(statearr_25422[(8)] = inst_25406);

return statearr_25422;
})();
var statearr_25423_25437 = state_25414__$1;
(statearr_25423_25437[(2)] = null);

(statearr_25423_25437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20515__auto___25431,ch))
;
return ((function (switch__20494__auto__,c__20515__auto___25431,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20495__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20495__auto____0 = (function (){
var statearr_25427 = [null,null,null,null,null,null,null,null,null];
(statearr_25427[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20495__auto__);

(statearr_25427[(1)] = (1));

return statearr_25427;
});
var figwheel$client$heads_up_plugin_$_state_machine__20495__auto____1 = (function (state_25414){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_25414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e25428){if((e25428 instanceof Object)){
var ex__20498__auto__ = e25428;
var statearr_25429_25438 = state_25414;
(statearr_25429_25438[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25439 = state_25414;
state_25414 = G__25439;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20495__auto__ = function(state_25414){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20495__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20495__auto____1.call(this,state_25414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20495__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20495__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___25431,ch))
})();
var state__20517__auto__ = (function (){var statearr_25430 = f__20516__auto__.call(null);
(statearr_25430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___25431);

return statearr_25430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___25431,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto__){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto__){
return (function (state_25460){
var state_val_25461 = (state_25460[(1)]);
if((state_val_25461 === (1))){
var inst_25455 = cljs.core.async.timeout.call(null,(3000));
var state_25460__$1 = state_25460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25460__$1,(2),inst_25455);
} else {
if((state_val_25461 === (2))){
var inst_25457 = (state_25460[(2)]);
var inst_25458 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25460__$1 = (function (){var statearr_25462 = state_25460;
(statearr_25462[(7)] = inst_25457);

return statearr_25462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25460__$1,inst_25458);
} else {
return null;
}
}
});})(c__20515__auto__))
;
return ((function (switch__20494__auto__,c__20515__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20495__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20495__auto____0 = (function (){
var statearr_25466 = [null,null,null,null,null,null,null,null];
(statearr_25466[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20495__auto__);

(statearr_25466[(1)] = (1));

return statearr_25466;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20495__auto____1 = (function (state_25460){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_25460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e25467){if((e25467 instanceof Object)){
var ex__20498__auto__ = e25467;
var statearr_25468_25470 = state_25460;
(statearr_25468_25470[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25471 = state_25460;
state_25460 = G__25471;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20495__auto__ = function(state_25460){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20495__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20495__auto____1.call(this,state_25460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20495__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20495__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto__))
})();
var state__20517__auto__ = (function (){var statearr_25469 = f__20516__auto__.call(null);
(statearr_25469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto__);

return statearr_25469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto__))
);

return c__20515__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25472){
var map__25479 = p__25472;
var map__25479__$1 = ((((!((map__25479 == null)))?((((map__25479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25479):map__25479);
var ed = map__25479__$1;
var formatted_exception = cljs.core.get.call(null,map__25479__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25479__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25479__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25481_25485 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25482_25486 = null;
var count__25483_25487 = (0);
var i__25484_25488 = (0);
while(true){
if((i__25484_25488 < count__25483_25487)){
var msg_25489 = cljs.core._nth.call(null,chunk__25482_25486,i__25484_25488);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25489);

var G__25490 = seq__25481_25485;
var G__25491 = chunk__25482_25486;
var G__25492 = count__25483_25487;
var G__25493 = (i__25484_25488 + (1));
seq__25481_25485 = G__25490;
chunk__25482_25486 = G__25491;
count__25483_25487 = G__25492;
i__25484_25488 = G__25493;
continue;
} else {
var temp__4657__auto___25494 = cljs.core.seq.call(null,seq__25481_25485);
if(temp__4657__auto___25494){
var seq__25481_25495__$1 = temp__4657__auto___25494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25481_25495__$1)){
var c__19253__auto___25496 = cljs.core.chunk_first.call(null,seq__25481_25495__$1);
var G__25497 = cljs.core.chunk_rest.call(null,seq__25481_25495__$1);
var G__25498 = c__19253__auto___25496;
var G__25499 = cljs.core.count.call(null,c__19253__auto___25496);
var G__25500 = (0);
seq__25481_25485 = G__25497;
chunk__25482_25486 = G__25498;
count__25483_25487 = G__25499;
i__25484_25488 = G__25500;
continue;
} else {
var msg_25501 = cljs.core.first.call(null,seq__25481_25495__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25501);

var G__25502 = cljs.core.next.call(null,seq__25481_25495__$1);
var G__25503 = null;
var G__25504 = (0);
var G__25505 = (0);
seq__25481_25485 = G__25502;
chunk__25482_25486 = G__25503;
count__25483_25487 = G__25504;
i__25484_25488 = G__25505;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25506){
var map__25509 = p__25506;
var map__25509__$1 = ((((!((map__25509 == null)))?((((map__25509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25509):map__25509);
var w = map__25509__$1;
var message = cljs.core.get.call(null,map__25509__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18430__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18430__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18430__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25517 = cljs.core.seq.call(null,plugins);
var chunk__25518 = null;
var count__25519 = (0);
var i__25520 = (0);
while(true){
if((i__25520 < count__25519)){
var vec__25521 = cljs.core._nth.call(null,chunk__25518,i__25520);
var k = cljs.core.nth.call(null,vec__25521,(0),null);
var plugin = cljs.core.nth.call(null,vec__25521,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25523 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25517,chunk__25518,count__25519,i__25520,pl_25523,vec__25521,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25523.call(null,msg_hist);
});})(seq__25517,chunk__25518,count__25519,i__25520,pl_25523,vec__25521,k,plugin))
);
} else {
}

var G__25524 = seq__25517;
var G__25525 = chunk__25518;
var G__25526 = count__25519;
var G__25527 = (i__25520 + (1));
seq__25517 = G__25524;
chunk__25518 = G__25525;
count__25519 = G__25526;
i__25520 = G__25527;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25517);
if(temp__4657__auto__){
var seq__25517__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25517__$1)){
var c__19253__auto__ = cljs.core.chunk_first.call(null,seq__25517__$1);
var G__25528 = cljs.core.chunk_rest.call(null,seq__25517__$1);
var G__25529 = c__19253__auto__;
var G__25530 = cljs.core.count.call(null,c__19253__auto__);
var G__25531 = (0);
seq__25517 = G__25528;
chunk__25518 = G__25529;
count__25519 = G__25530;
i__25520 = G__25531;
continue;
} else {
var vec__25522 = cljs.core.first.call(null,seq__25517__$1);
var k = cljs.core.nth.call(null,vec__25522,(0),null);
var plugin = cljs.core.nth.call(null,vec__25522,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25532 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25517,chunk__25518,count__25519,i__25520,pl_25532,vec__25522,k,plugin,seq__25517__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25532.call(null,msg_hist);
});})(seq__25517,chunk__25518,count__25519,i__25520,pl_25532,vec__25522,k,plugin,seq__25517__$1,temp__4657__auto__))
);
} else {
}

var G__25533 = cljs.core.next.call(null,seq__25517__$1);
var G__25534 = null;
var G__25535 = (0);
var G__25536 = (0);
seq__25517 = G__25533;
chunk__25518 = G__25534;
count__25519 = G__25535;
i__25520 = G__25536;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25537 = [];
var len__19512__auto___25540 = arguments.length;
var i__19513__auto___25541 = (0);
while(true){
if((i__19513__auto___25541 < len__19512__auto___25540)){
args25537.push((arguments[i__19513__auto___25541]));

var G__25542 = (i__19513__auto___25541 + (1));
i__19513__auto___25541 = G__25542;
continue;
} else {
}
break;
}

var G__25539 = args25537.length;
switch (G__25539) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25537.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19519__auto__ = [];
var len__19512__auto___25548 = arguments.length;
var i__19513__auto___25549 = (0);
while(true){
if((i__19513__auto___25549 < len__19512__auto___25548)){
args__19519__auto__.push((arguments[i__19513__auto___25549]));

var G__25550 = (i__19513__auto___25549 + (1));
i__19513__auto___25549 = G__25550;
continue;
} else {
}
break;
}

var argseq__19520__auto__ = ((((0) < args__19519__auto__.length))?(new cljs.core.IndexedSeq(args__19519__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19520__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25545){
var map__25546 = p__25545;
var map__25546__$1 = ((((!((map__25546 == null)))?((((map__25546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25546):map__25546);
var opts = map__25546__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25544){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25544));
});

//# sourceMappingURL=client.js.map?rel=1465245606785