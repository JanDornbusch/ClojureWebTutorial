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
var pred__37241 = cljs.core._EQ_;
var expr__37242 = (function (){var or__18442__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e37245){if((e37245 instanceof Error)){
var e = e37245;
return false;
} else {
throw e37245;

}
}})();
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37241.call(null,"true",expr__37242))){
return true;
} else {
if(cljs.core.truth_(pred__37241.call(null,"false",expr__37242))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37242)].join('')));
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
}catch (e37247){if((e37247 instanceof Error)){
var e = e37247;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37247;

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
var len__19512__auto___37249 = arguments.length;
var i__19513__auto___37250 = (0);
while(true){
if((i__19513__auto___37250 < len__19512__auto___37249)){
args__19519__auto__.push((arguments[i__19513__auto___37250]));

var G__37251 = (i__19513__auto___37250 + (1));
i__19513__auto___37250 = G__37251;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq37248){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37248));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37252){
var map__37255 = p__37252;
var map__37255__$1 = ((((!((map__37255 == null)))?((((map__37255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37255):map__37255);
var message = cljs.core.get.call(null,map__37255__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37255__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20609__auto___37417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___37417,ch){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___37417,ch){
return (function (state_37386){
var state_val_37387 = (state_37386[(1)]);
if((state_val_37387 === (7))){
var inst_37382 = (state_37386[(2)]);
var state_37386__$1 = state_37386;
var statearr_37388_37418 = state_37386__$1;
(statearr_37388_37418[(2)] = inst_37382);

(statearr_37388_37418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (1))){
var state_37386__$1 = state_37386;
var statearr_37389_37419 = state_37386__$1;
(statearr_37389_37419[(2)] = null);

(statearr_37389_37419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (4))){
var inst_37339 = (state_37386[(7)]);
var inst_37339__$1 = (state_37386[(2)]);
var state_37386__$1 = (function (){var statearr_37390 = state_37386;
(statearr_37390[(7)] = inst_37339__$1);

return statearr_37390;
})();
if(cljs.core.truth_(inst_37339__$1)){
var statearr_37391_37420 = state_37386__$1;
(statearr_37391_37420[(1)] = (5));

} else {
var statearr_37392_37421 = state_37386__$1;
(statearr_37392_37421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (15))){
var inst_37346 = (state_37386[(8)]);
var inst_37361 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37346);
var inst_37362 = cljs.core.first.call(null,inst_37361);
var inst_37363 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37362);
var inst_37364 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37363)].join('');
var inst_37365 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37364);
var state_37386__$1 = state_37386;
var statearr_37393_37422 = state_37386__$1;
(statearr_37393_37422[(2)] = inst_37365);

(statearr_37393_37422[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (13))){
var inst_37370 = (state_37386[(2)]);
var state_37386__$1 = state_37386;
var statearr_37394_37423 = state_37386__$1;
(statearr_37394_37423[(2)] = inst_37370);

(statearr_37394_37423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (6))){
var state_37386__$1 = state_37386;
var statearr_37395_37424 = state_37386__$1;
(statearr_37395_37424[(2)] = null);

(statearr_37395_37424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (17))){
var inst_37368 = (state_37386[(2)]);
var state_37386__$1 = state_37386;
var statearr_37396_37425 = state_37386__$1;
(statearr_37396_37425[(2)] = inst_37368);

(statearr_37396_37425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (3))){
var inst_37384 = (state_37386[(2)]);
var state_37386__$1 = state_37386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37386__$1,inst_37384);
} else {
if((state_val_37387 === (12))){
var inst_37345 = (state_37386[(9)]);
var inst_37359 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37345,opts);
var state_37386__$1 = state_37386;
if(cljs.core.truth_(inst_37359)){
var statearr_37397_37426 = state_37386__$1;
(statearr_37397_37426[(1)] = (15));

} else {
var statearr_37398_37427 = state_37386__$1;
(statearr_37398_37427[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (2))){
var state_37386__$1 = state_37386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37386__$1,(4),ch);
} else {
if((state_val_37387 === (11))){
var inst_37346 = (state_37386[(8)]);
var inst_37351 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37352 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37346);
var inst_37353 = cljs.core.async.timeout.call(null,(1000));
var inst_37354 = [inst_37352,inst_37353];
var inst_37355 = (new cljs.core.PersistentVector(null,2,(5),inst_37351,inst_37354,null));
var state_37386__$1 = state_37386;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37386__$1,(14),inst_37355);
} else {
if((state_val_37387 === (9))){
var inst_37346 = (state_37386[(8)]);
var inst_37372 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37373 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37346);
var inst_37374 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37373);
var inst_37375 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37374)].join('');
var inst_37376 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37375);
var state_37386__$1 = (function (){var statearr_37399 = state_37386;
(statearr_37399[(10)] = inst_37372);

return statearr_37399;
})();
var statearr_37400_37428 = state_37386__$1;
(statearr_37400_37428[(2)] = inst_37376);

(statearr_37400_37428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (5))){
var inst_37339 = (state_37386[(7)]);
var inst_37341 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37342 = (new cljs.core.PersistentArrayMap(null,2,inst_37341,null));
var inst_37343 = (new cljs.core.PersistentHashSet(null,inst_37342,null));
var inst_37344 = figwheel.client.focus_msgs.call(null,inst_37343,inst_37339);
var inst_37345 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37344);
var inst_37346 = cljs.core.first.call(null,inst_37344);
var inst_37347 = figwheel.client.autoload_QMARK_.call(null);
var state_37386__$1 = (function (){var statearr_37401 = state_37386;
(statearr_37401[(8)] = inst_37346);

(statearr_37401[(9)] = inst_37345);

return statearr_37401;
})();
if(cljs.core.truth_(inst_37347)){
var statearr_37402_37429 = state_37386__$1;
(statearr_37402_37429[(1)] = (8));

} else {
var statearr_37403_37430 = state_37386__$1;
(statearr_37403_37430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (14))){
var inst_37357 = (state_37386[(2)]);
var state_37386__$1 = state_37386;
var statearr_37404_37431 = state_37386__$1;
(statearr_37404_37431[(2)] = inst_37357);

(statearr_37404_37431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (16))){
var state_37386__$1 = state_37386;
var statearr_37405_37432 = state_37386__$1;
(statearr_37405_37432[(2)] = null);

(statearr_37405_37432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (10))){
var inst_37378 = (state_37386[(2)]);
var state_37386__$1 = (function (){var statearr_37406 = state_37386;
(statearr_37406[(11)] = inst_37378);

return statearr_37406;
})();
var statearr_37407_37433 = state_37386__$1;
(statearr_37407_37433[(2)] = null);

(statearr_37407_37433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37387 === (8))){
var inst_37345 = (state_37386[(9)]);
var inst_37349 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37345,opts);
var state_37386__$1 = state_37386;
if(cljs.core.truth_(inst_37349)){
var statearr_37408_37434 = state_37386__$1;
(statearr_37408_37434[(1)] = (11));

} else {
var statearr_37409_37435 = state_37386__$1;
(statearr_37409_37435[(1)] = (12));

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
});})(c__20609__auto___37417,ch))
;
return ((function (switch__20497__auto__,c__20609__auto___37417,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20498__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20498__auto____0 = (function (){
var statearr_37413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37413[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20498__auto__);

(statearr_37413[(1)] = (1));

return statearr_37413;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20498__auto____1 = (function (state_37386){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_37386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e37414){if((e37414 instanceof Object)){
var ex__20501__auto__ = e37414;
var statearr_37415_37436 = state_37386;
(statearr_37415_37436[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37437 = state_37386;
state_37386 = G__37437;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20498__auto__ = function(state_37386){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20498__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20498__auto____1.call(this,state_37386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20498__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20498__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___37417,ch))
})();
var state__20611__auto__ = (function (){var statearr_37416 = f__20610__auto__.call(null);
(statearr_37416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___37417);

return statearr_37416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___37417,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37438_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37438_SHARP_));
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
var base_path_37445 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37445){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_37443 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_37444 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37444;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37443;
}}catch (e37442){if((e37442 instanceof Error)){
var e = e37442;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37445], null));
} else {
var e = e37442;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37445))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37446){
var map__37453 = p__37446;
var map__37453__$1 = ((((!((map__37453 == null)))?((((map__37453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37453):map__37453);
var opts = map__37453__$1;
var build_id = cljs.core.get.call(null,map__37453__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37453,map__37453__$1,opts,build_id){
return (function (p__37455){
var vec__37456 = p__37455;
var map__37457 = cljs.core.nth.call(null,vec__37456,(0),null);
var map__37457__$1 = ((((!((map__37457 == null)))?((((map__37457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37457):map__37457);
var msg = map__37457__$1;
var msg_name = cljs.core.get.call(null,map__37457__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37456,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37456,map__37457,map__37457__$1,msg,msg_name,_,map__37453,map__37453__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37456,map__37457,map__37457__$1,msg,msg_name,_,map__37453,map__37453__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37453,map__37453__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37463){
var vec__37464 = p__37463;
var map__37465 = cljs.core.nth.call(null,vec__37464,(0),null);
var map__37465__$1 = ((((!((map__37465 == null)))?((((map__37465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37465):map__37465);
var msg = map__37465__$1;
var msg_name = cljs.core.get.call(null,map__37465__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37464,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37467){
var map__37477 = p__37467;
var map__37477__$1 = ((((!((map__37477 == null)))?((((map__37477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37477):map__37477);
var on_compile_warning = cljs.core.get.call(null,map__37477__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37477__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37477,map__37477__$1,on_compile_warning,on_compile_fail){
return (function (p__37479){
var vec__37480 = p__37479;
var map__37481 = cljs.core.nth.call(null,vec__37480,(0),null);
var map__37481__$1 = ((((!((map__37481 == null)))?((((map__37481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37481):map__37481);
var msg = map__37481__$1;
var msg_name = cljs.core.get.call(null,map__37481__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37480,(1));
var pred__37483 = cljs.core._EQ_;
var expr__37484 = msg_name;
if(cljs.core.truth_(pred__37483.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37484))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37483.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37484))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37477,map__37477__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto__,msg_hist,msg_names,msg){
return (function (state_37692){
var state_val_37693 = (state_37692[(1)]);
if((state_val_37693 === (7))){
var inst_37620 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37620)){
var statearr_37694_37740 = state_37692__$1;
(statearr_37694_37740[(1)] = (8));

} else {
var statearr_37695_37741 = state_37692__$1;
(statearr_37695_37741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (20))){
var inst_37686 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37696_37742 = state_37692__$1;
(statearr_37696_37742[(2)] = inst_37686);

(statearr_37696_37742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (27))){
var inst_37682 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37697_37743 = state_37692__$1;
(statearr_37697_37743[(2)] = inst_37682);

(statearr_37697_37743[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (1))){
var inst_37613 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37613)){
var statearr_37698_37744 = state_37692__$1;
(statearr_37698_37744[(1)] = (2));

} else {
var statearr_37699_37745 = state_37692__$1;
(statearr_37699_37745[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (24))){
var inst_37684 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37700_37746 = state_37692__$1;
(statearr_37700_37746[(2)] = inst_37684);

(statearr_37700_37746[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (4))){
var inst_37690 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37692__$1,inst_37690);
} else {
if((state_val_37693 === (15))){
var inst_37688 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37701_37747 = state_37692__$1;
(statearr_37701_37747[(2)] = inst_37688);

(statearr_37701_37747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (21))){
var inst_37647 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37702_37748 = state_37692__$1;
(statearr_37702_37748[(2)] = inst_37647);

(statearr_37702_37748[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (31))){
var inst_37671 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37671)){
var statearr_37703_37749 = state_37692__$1;
(statearr_37703_37749[(1)] = (34));

} else {
var statearr_37704_37750 = state_37692__$1;
(statearr_37704_37750[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (32))){
var inst_37680 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37705_37751 = state_37692__$1;
(statearr_37705_37751[(2)] = inst_37680);

(statearr_37705_37751[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (33))){
var inst_37669 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37706_37752 = state_37692__$1;
(statearr_37706_37752[(2)] = inst_37669);

(statearr_37706_37752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (13))){
var inst_37634 = figwheel.client.heads_up.clear.call(null);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(16),inst_37634);
} else {
if((state_val_37693 === (22))){
var inst_37651 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37652 = figwheel.client.heads_up.append_message.call(null,inst_37651);
var state_37692__$1 = state_37692;
var statearr_37707_37753 = state_37692__$1;
(statearr_37707_37753[(2)] = inst_37652);

(statearr_37707_37753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (36))){
var inst_37678 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37708_37754 = state_37692__$1;
(statearr_37708_37754[(2)] = inst_37678);

(statearr_37708_37754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (29))){
var inst_37662 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37709_37755 = state_37692__$1;
(statearr_37709_37755[(2)] = inst_37662);

(statearr_37709_37755[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (6))){
var inst_37615 = (state_37692[(7)]);
var state_37692__$1 = state_37692;
var statearr_37710_37756 = state_37692__$1;
(statearr_37710_37756[(2)] = inst_37615);

(statearr_37710_37756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (28))){
var inst_37658 = (state_37692[(2)]);
var inst_37659 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37660 = figwheel.client.heads_up.display_warning.call(null,inst_37659);
var state_37692__$1 = (function (){var statearr_37711 = state_37692;
(statearr_37711[(8)] = inst_37658);

return statearr_37711;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(29),inst_37660);
} else {
if((state_val_37693 === (25))){
var inst_37656 = figwheel.client.heads_up.clear.call(null);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(28),inst_37656);
} else {
if((state_val_37693 === (34))){
var inst_37673 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(37),inst_37673);
} else {
if((state_val_37693 === (17))){
var inst_37640 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37712_37757 = state_37692__$1;
(statearr_37712_37757[(2)] = inst_37640);

(statearr_37712_37757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (3))){
var inst_37632 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37632)){
var statearr_37713_37758 = state_37692__$1;
(statearr_37713_37758[(1)] = (13));

} else {
var statearr_37714_37759 = state_37692__$1;
(statearr_37714_37759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (12))){
var inst_37628 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37715_37760 = state_37692__$1;
(statearr_37715_37760[(2)] = inst_37628);

(statearr_37715_37760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (2))){
var inst_37615 = (state_37692[(7)]);
var inst_37615__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37692__$1 = (function (){var statearr_37716 = state_37692;
(statearr_37716[(7)] = inst_37615__$1);

return statearr_37716;
})();
if(cljs.core.truth_(inst_37615__$1)){
var statearr_37717_37761 = state_37692__$1;
(statearr_37717_37761[(1)] = (5));

} else {
var statearr_37718_37762 = state_37692__$1;
(statearr_37718_37762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (23))){
var inst_37654 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37654)){
var statearr_37719_37763 = state_37692__$1;
(statearr_37719_37763[(1)] = (25));

} else {
var statearr_37720_37764 = state_37692__$1;
(statearr_37720_37764[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (35))){
var state_37692__$1 = state_37692;
var statearr_37721_37765 = state_37692__$1;
(statearr_37721_37765[(2)] = null);

(statearr_37721_37765[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (19))){
var inst_37649 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37649)){
var statearr_37722_37766 = state_37692__$1;
(statearr_37722_37766[(1)] = (22));

} else {
var statearr_37723_37767 = state_37692__$1;
(statearr_37723_37767[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (11))){
var inst_37624 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37724_37768 = state_37692__$1;
(statearr_37724_37768[(2)] = inst_37624);

(statearr_37724_37768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (9))){
var inst_37626 = figwheel.client.heads_up.clear.call(null);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(12),inst_37626);
} else {
if((state_val_37693 === (5))){
var inst_37617 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37692__$1 = state_37692;
var statearr_37725_37769 = state_37692__$1;
(statearr_37725_37769[(2)] = inst_37617);

(statearr_37725_37769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (14))){
var inst_37642 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37642)){
var statearr_37726_37770 = state_37692__$1;
(statearr_37726_37770[(1)] = (18));

} else {
var statearr_37727_37771 = state_37692__$1;
(statearr_37727_37771[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (26))){
var inst_37664 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37664)){
var statearr_37728_37772 = state_37692__$1;
(statearr_37728_37772[(1)] = (30));

} else {
var statearr_37729_37773 = state_37692__$1;
(statearr_37729_37773[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (16))){
var inst_37636 = (state_37692[(2)]);
var inst_37637 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37638 = figwheel.client.heads_up.display_exception.call(null,inst_37637);
var state_37692__$1 = (function (){var statearr_37730 = state_37692;
(statearr_37730[(9)] = inst_37636);

return statearr_37730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(17),inst_37638);
} else {
if((state_val_37693 === (30))){
var inst_37666 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37667 = figwheel.client.heads_up.display_warning.call(null,inst_37666);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(33),inst_37667);
} else {
if((state_val_37693 === (10))){
var inst_37630 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37731_37774 = state_37692__$1;
(statearr_37731_37774[(2)] = inst_37630);

(statearr_37731_37774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (18))){
var inst_37644 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37645 = figwheel.client.heads_up.display_exception.call(null,inst_37644);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(21),inst_37645);
} else {
if((state_val_37693 === (37))){
var inst_37675 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37732_37775 = state_37692__$1;
(statearr_37732_37775[(2)] = inst_37675);

(statearr_37732_37775[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (8))){
var inst_37622 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(11),inst_37622);
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
});})(c__20609__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20497__auto__,c__20609__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto____0 = (function (){
var statearr_37736 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37736[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto__);

(statearr_37736[(1)] = (1));

return statearr_37736;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto____1 = (function (state_37692){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_37692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e37737){if((e37737 instanceof Object)){
var ex__20501__auto__ = e37737;
var statearr_37738_37776 = state_37692;
(statearr_37738_37776[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37777 = state_37692;
state_37692 = G__37777;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto__ = function(state_37692){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto____1.call(this,state_37692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto__,msg_hist,msg_names,msg))
})();
var state__20611__auto__ = (function (){var statearr_37739 = f__20610__auto__.call(null);
(statearr_37739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto__);

return statearr_37739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto__,msg_hist,msg_names,msg))
);

return c__20609__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20609__auto___37840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___37840,ch){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___37840,ch){
return (function (state_37823){
var state_val_37824 = (state_37823[(1)]);
if((state_val_37824 === (1))){
var state_37823__$1 = state_37823;
var statearr_37825_37841 = state_37823__$1;
(statearr_37825_37841[(2)] = null);

(statearr_37825_37841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (2))){
var state_37823__$1 = state_37823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37823__$1,(4),ch);
} else {
if((state_val_37824 === (3))){
var inst_37821 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37823__$1,inst_37821);
} else {
if((state_val_37824 === (4))){
var inst_37811 = (state_37823[(7)]);
var inst_37811__$1 = (state_37823[(2)]);
var state_37823__$1 = (function (){var statearr_37826 = state_37823;
(statearr_37826[(7)] = inst_37811__$1);

return statearr_37826;
})();
if(cljs.core.truth_(inst_37811__$1)){
var statearr_37827_37842 = state_37823__$1;
(statearr_37827_37842[(1)] = (5));

} else {
var statearr_37828_37843 = state_37823__$1;
(statearr_37828_37843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (5))){
var inst_37811 = (state_37823[(7)]);
var inst_37813 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37811);
var state_37823__$1 = state_37823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37823__$1,(8),inst_37813);
} else {
if((state_val_37824 === (6))){
var state_37823__$1 = state_37823;
var statearr_37829_37844 = state_37823__$1;
(statearr_37829_37844[(2)] = null);

(statearr_37829_37844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (7))){
var inst_37819 = (state_37823[(2)]);
var state_37823__$1 = state_37823;
var statearr_37830_37845 = state_37823__$1;
(statearr_37830_37845[(2)] = inst_37819);

(statearr_37830_37845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37824 === (8))){
var inst_37815 = (state_37823[(2)]);
var state_37823__$1 = (function (){var statearr_37831 = state_37823;
(statearr_37831[(8)] = inst_37815);

return statearr_37831;
})();
var statearr_37832_37846 = state_37823__$1;
(statearr_37832_37846[(2)] = null);

(statearr_37832_37846[(1)] = (2));


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
});})(c__20609__auto___37840,ch))
;
return ((function (switch__20497__auto__,c__20609__auto___37840,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20498__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20498__auto____0 = (function (){
var statearr_37836 = [null,null,null,null,null,null,null,null,null];
(statearr_37836[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20498__auto__);

(statearr_37836[(1)] = (1));

return statearr_37836;
});
var figwheel$client$heads_up_plugin_$_state_machine__20498__auto____1 = (function (state_37823){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_37823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e37837){if((e37837 instanceof Object)){
var ex__20501__auto__ = e37837;
var statearr_37838_37847 = state_37823;
(statearr_37838_37847[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37848 = state_37823;
state_37823 = G__37848;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20498__auto__ = function(state_37823){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20498__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20498__auto____1.call(this,state_37823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20498__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20498__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___37840,ch))
})();
var state__20611__auto__ = (function (){var statearr_37839 = f__20610__auto__.call(null);
(statearr_37839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___37840);

return statearr_37839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___37840,ch))
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
var c__20609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto__){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto__){
return (function (state_37869){
var state_val_37870 = (state_37869[(1)]);
if((state_val_37870 === (1))){
var inst_37864 = cljs.core.async.timeout.call(null,(3000));
var state_37869__$1 = state_37869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37869__$1,(2),inst_37864);
} else {
if((state_val_37870 === (2))){
var inst_37866 = (state_37869[(2)]);
var inst_37867 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37869__$1 = (function (){var statearr_37871 = state_37869;
(statearr_37871[(7)] = inst_37866);

return statearr_37871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37869__$1,inst_37867);
} else {
return null;
}
}
});})(c__20609__auto__))
;
return ((function (switch__20497__auto__,c__20609__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20498__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20498__auto____0 = (function (){
var statearr_37875 = [null,null,null,null,null,null,null,null];
(statearr_37875[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20498__auto__);

(statearr_37875[(1)] = (1));

return statearr_37875;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20498__auto____1 = (function (state_37869){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_37869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e37876){if((e37876 instanceof Object)){
var ex__20501__auto__ = e37876;
var statearr_37877_37879 = state_37869;
(statearr_37877_37879[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37880 = state_37869;
state_37869 = G__37880;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20498__auto__ = function(state_37869){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20498__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20498__auto____1.call(this,state_37869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20498__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20498__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto__))
})();
var state__20611__auto__ = (function (){var statearr_37878 = f__20610__auto__.call(null);
(statearr_37878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto__);

return statearr_37878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto__))
);

return c__20609__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37881){
var map__37888 = p__37881;
var map__37888__$1 = ((((!((map__37888 == null)))?((((map__37888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37888):map__37888);
var ed = map__37888__$1;
var formatted_exception = cljs.core.get.call(null,map__37888__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37888__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37888__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37890_37894 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37891_37895 = null;
var count__37892_37896 = (0);
var i__37893_37897 = (0);
while(true){
if((i__37893_37897 < count__37892_37896)){
var msg_37898 = cljs.core._nth.call(null,chunk__37891_37895,i__37893_37897);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37898);

var G__37899 = seq__37890_37894;
var G__37900 = chunk__37891_37895;
var G__37901 = count__37892_37896;
var G__37902 = (i__37893_37897 + (1));
seq__37890_37894 = G__37899;
chunk__37891_37895 = G__37900;
count__37892_37896 = G__37901;
i__37893_37897 = G__37902;
continue;
} else {
var temp__4657__auto___37903 = cljs.core.seq.call(null,seq__37890_37894);
if(temp__4657__auto___37903){
var seq__37890_37904__$1 = temp__4657__auto___37903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37890_37904__$1)){
var c__19253__auto___37905 = cljs.core.chunk_first.call(null,seq__37890_37904__$1);
var G__37906 = cljs.core.chunk_rest.call(null,seq__37890_37904__$1);
var G__37907 = c__19253__auto___37905;
var G__37908 = cljs.core.count.call(null,c__19253__auto___37905);
var G__37909 = (0);
seq__37890_37894 = G__37906;
chunk__37891_37895 = G__37907;
count__37892_37896 = G__37908;
i__37893_37897 = G__37909;
continue;
} else {
var msg_37910 = cljs.core.first.call(null,seq__37890_37904__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37910);

var G__37911 = cljs.core.next.call(null,seq__37890_37904__$1);
var G__37912 = null;
var G__37913 = (0);
var G__37914 = (0);
seq__37890_37894 = G__37911;
chunk__37891_37895 = G__37912;
count__37892_37896 = G__37913;
i__37893_37897 = G__37914;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37915){
var map__37918 = p__37915;
var map__37918__$1 = ((((!((map__37918 == null)))?((((map__37918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37918):map__37918);
var w = map__37918__$1;
var message = cljs.core.get.call(null,map__37918__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37926 = cljs.core.seq.call(null,plugins);
var chunk__37927 = null;
var count__37928 = (0);
var i__37929 = (0);
while(true){
if((i__37929 < count__37928)){
var vec__37930 = cljs.core._nth.call(null,chunk__37927,i__37929);
var k = cljs.core.nth.call(null,vec__37930,(0),null);
var plugin = cljs.core.nth.call(null,vec__37930,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37932 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37926,chunk__37927,count__37928,i__37929,pl_37932,vec__37930,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37932.call(null,msg_hist);
});})(seq__37926,chunk__37927,count__37928,i__37929,pl_37932,vec__37930,k,plugin))
);
} else {
}

var G__37933 = seq__37926;
var G__37934 = chunk__37927;
var G__37935 = count__37928;
var G__37936 = (i__37929 + (1));
seq__37926 = G__37933;
chunk__37927 = G__37934;
count__37928 = G__37935;
i__37929 = G__37936;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37926);
if(temp__4657__auto__){
var seq__37926__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37926__$1)){
var c__19253__auto__ = cljs.core.chunk_first.call(null,seq__37926__$1);
var G__37937 = cljs.core.chunk_rest.call(null,seq__37926__$1);
var G__37938 = c__19253__auto__;
var G__37939 = cljs.core.count.call(null,c__19253__auto__);
var G__37940 = (0);
seq__37926 = G__37937;
chunk__37927 = G__37938;
count__37928 = G__37939;
i__37929 = G__37940;
continue;
} else {
var vec__37931 = cljs.core.first.call(null,seq__37926__$1);
var k = cljs.core.nth.call(null,vec__37931,(0),null);
var plugin = cljs.core.nth.call(null,vec__37931,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37941 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37926,chunk__37927,count__37928,i__37929,pl_37941,vec__37931,k,plugin,seq__37926__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37941.call(null,msg_hist);
});})(seq__37926,chunk__37927,count__37928,i__37929,pl_37941,vec__37931,k,plugin,seq__37926__$1,temp__4657__auto__))
);
} else {
}

var G__37942 = cljs.core.next.call(null,seq__37926__$1);
var G__37943 = null;
var G__37944 = (0);
var G__37945 = (0);
seq__37926 = G__37942;
chunk__37927 = G__37943;
count__37928 = G__37944;
i__37929 = G__37945;
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
var args37946 = [];
var len__19512__auto___37949 = arguments.length;
var i__19513__auto___37950 = (0);
while(true){
if((i__19513__auto___37950 < len__19512__auto___37949)){
args37946.push((arguments[i__19513__auto___37950]));

var G__37951 = (i__19513__auto___37950 + (1));
i__19513__auto___37950 = G__37951;
continue;
} else {
}
break;
}

var G__37948 = args37946.length;
switch (G__37948) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37946.length)].join('')));

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
var len__19512__auto___37957 = arguments.length;
var i__19513__auto___37958 = (0);
while(true){
if((i__19513__auto___37958 < len__19512__auto___37957)){
args__19519__auto__.push((arguments[i__19513__auto___37958]));

var G__37959 = (i__19513__auto___37958 + (1));
i__19513__auto___37958 = G__37959;
continue;
} else {
}
break;
}

var argseq__19520__auto__ = ((((0) < args__19519__auto__.length))?(new cljs.core.IndexedSeq(args__19519__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19520__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37954){
var map__37955 = p__37954;
var map__37955__$1 = ((((!((map__37955 == null)))?((((map__37955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37955):map__37955);
var opts = map__37955__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37953){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37953));
});

//# sourceMappingURL=client.js.map?rel=1464472750762