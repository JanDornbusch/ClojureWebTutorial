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
var pred__40523 = cljs.core._EQ_;
var expr__40524 = (function (){var or__18739__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e40527){if((e40527 instanceof Error)){
var e = e40527;
return false;
} else {
throw e40527;

}
}})();
if(cljs.core.truth_(or__18739__auto__)){
return or__18739__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__40523.call(null,"true",expr__40524))){
return true;
} else {
if(cljs.core.truth_(pred__40523.call(null,"false",expr__40524))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__40524)].join('')));
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
}catch (e40529){if((e40529 instanceof Error)){
var e = e40529;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e40529;

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
var args__19816__auto__ = [];
var len__19809__auto___40531 = arguments.length;
var i__19810__auto___40532 = (0);
while(true){
if((i__19810__auto___40532 < len__19809__auto___40531)){
args__19816__auto__.push((arguments[i__19810__auto___40532]));

var G__40533 = (i__19810__auto___40532 + (1));
i__19810__auto___40532 = G__40533;
continue;
} else {
}
break;
}

var argseq__19817__auto__ = ((((0) < args__19816__auto__.length))?(new cljs.core.IndexedSeq(args__19816__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19817__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq40530){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40530));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40534){
var map__40537 = p__40534;
var map__40537__$1 = ((((!((map__40537 == null)))?((((map__40537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40537):map__40537);
var message = cljs.core.get.call(null,map__40537__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40537__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18739__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18739__auto__)){
return or__18739__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18727__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18727__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18727__auto__;
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
var c__20906__auto___40699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___40699,ch){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___40699,ch){
return (function (state_40668){
var state_val_40669 = (state_40668[(1)]);
if((state_val_40669 === (7))){
var inst_40664 = (state_40668[(2)]);
var state_40668__$1 = state_40668;
var statearr_40670_40700 = state_40668__$1;
(statearr_40670_40700[(2)] = inst_40664);

(statearr_40670_40700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (1))){
var state_40668__$1 = state_40668;
var statearr_40671_40701 = state_40668__$1;
(statearr_40671_40701[(2)] = null);

(statearr_40671_40701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (4))){
var inst_40621 = (state_40668[(7)]);
var inst_40621__$1 = (state_40668[(2)]);
var state_40668__$1 = (function (){var statearr_40672 = state_40668;
(statearr_40672[(7)] = inst_40621__$1);

return statearr_40672;
})();
if(cljs.core.truth_(inst_40621__$1)){
var statearr_40673_40702 = state_40668__$1;
(statearr_40673_40702[(1)] = (5));

} else {
var statearr_40674_40703 = state_40668__$1;
(statearr_40674_40703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (15))){
var inst_40628 = (state_40668[(8)]);
var inst_40643 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40628);
var inst_40644 = cljs.core.first.call(null,inst_40643);
var inst_40645 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40644);
var inst_40646 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_40645)].join('');
var inst_40647 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40646);
var state_40668__$1 = state_40668;
var statearr_40675_40704 = state_40668__$1;
(statearr_40675_40704[(2)] = inst_40647);

(statearr_40675_40704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (13))){
var inst_40652 = (state_40668[(2)]);
var state_40668__$1 = state_40668;
var statearr_40676_40705 = state_40668__$1;
(statearr_40676_40705[(2)] = inst_40652);

(statearr_40676_40705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (6))){
var state_40668__$1 = state_40668;
var statearr_40677_40706 = state_40668__$1;
(statearr_40677_40706[(2)] = null);

(statearr_40677_40706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (17))){
var inst_40650 = (state_40668[(2)]);
var state_40668__$1 = state_40668;
var statearr_40678_40707 = state_40668__$1;
(statearr_40678_40707[(2)] = inst_40650);

(statearr_40678_40707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (3))){
var inst_40666 = (state_40668[(2)]);
var state_40668__$1 = state_40668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40668__$1,inst_40666);
} else {
if((state_val_40669 === (12))){
var inst_40627 = (state_40668[(9)]);
var inst_40641 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40627,opts);
var state_40668__$1 = state_40668;
if(cljs.core.truth_(inst_40641)){
var statearr_40679_40708 = state_40668__$1;
(statearr_40679_40708[(1)] = (15));

} else {
var statearr_40680_40709 = state_40668__$1;
(statearr_40680_40709[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (2))){
var state_40668__$1 = state_40668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40668__$1,(4),ch);
} else {
if((state_val_40669 === (11))){
var inst_40628 = (state_40668[(8)]);
var inst_40633 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40634 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40628);
var inst_40635 = cljs.core.async.timeout.call(null,(1000));
var inst_40636 = [inst_40634,inst_40635];
var inst_40637 = (new cljs.core.PersistentVector(null,2,(5),inst_40633,inst_40636,null));
var state_40668__$1 = state_40668;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40668__$1,(14),inst_40637);
} else {
if((state_val_40669 === (9))){
var inst_40628 = (state_40668[(8)]);
var inst_40654 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40655 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40628);
var inst_40656 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40655);
var inst_40657 = [cljs.core.str("Not loading: "),cljs.core.str(inst_40656)].join('');
var inst_40658 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40657);
var state_40668__$1 = (function (){var statearr_40681 = state_40668;
(statearr_40681[(10)] = inst_40654);

return statearr_40681;
})();
var statearr_40682_40710 = state_40668__$1;
(statearr_40682_40710[(2)] = inst_40658);

(statearr_40682_40710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (5))){
var inst_40621 = (state_40668[(7)]);
var inst_40623 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40624 = (new cljs.core.PersistentArrayMap(null,2,inst_40623,null));
var inst_40625 = (new cljs.core.PersistentHashSet(null,inst_40624,null));
var inst_40626 = figwheel.client.focus_msgs.call(null,inst_40625,inst_40621);
var inst_40627 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40626);
var inst_40628 = cljs.core.first.call(null,inst_40626);
var inst_40629 = figwheel.client.autoload_QMARK_.call(null);
var state_40668__$1 = (function (){var statearr_40683 = state_40668;
(statearr_40683[(8)] = inst_40628);

(statearr_40683[(9)] = inst_40627);

return statearr_40683;
})();
if(cljs.core.truth_(inst_40629)){
var statearr_40684_40711 = state_40668__$1;
(statearr_40684_40711[(1)] = (8));

} else {
var statearr_40685_40712 = state_40668__$1;
(statearr_40685_40712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (14))){
var inst_40639 = (state_40668[(2)]);
var state_40668__$1 = state_40668;
var statearr_40686_40713 = state_40668__$1;
(statearr_40686_40713[(2)] = inst_40639);

(statearr_40686_40713[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (16))){
var state_40668__$1 = state_40668;
var statearr_40687_40714 = state_40668__$1;
(statearr_40687_40714[(2)] = null);

(statearr_40687_40714[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (10))){
var inst_40660 = (state_40668[(2)]);
var state_40668__$1 = (function (){var statearr_40688 = state_40668;
(statearr_40688[(11)] = inst_40660);

return statearr_40688;
})();
var statearr_40689_40715 = state_40668__$1;
(statearr_40689_40715[(2)] = null);

(statearr_40689_40715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (8))){
var inst_40627 = (state_40668[(9)]);
var inst_40631 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40627,opts);
var state_40668__$1 = state_40668;
if(cljs.core.truth_(inst_40631)){
var statearr_40690_40716 = state_40668__$1;
(statearr_40690_40716[(1)] = (11));

} else {
var statearr_40691_40717 = state_40668__$1;
(statearr_40691_40717[(1)] = (12));

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
});})(c__20906__auto___40699,ch))
;
return ((function (switch__20794__auto__,c__20906__auto___40699,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20795__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20795__auto____0 = (function (){
var statearr_40695 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40695[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20795__auto__);

(statearr_40695[(1)] = (1));

return statearr_40695;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20795__auto____1 = (function (state_40668){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_40668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e40696){if((e40696 instanceof Object)){
var ex__20798__auto__ = e40696;
var statearr_40697_40718 = state_40668;
(statearr_40697_40718[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40719 = state_40668;
state_40668 = G__40719;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20795__auto__ = function(state_40668){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20795__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20795__auto____1.call(this,state_40668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20795__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20795__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___40699,ch))
})();
var state__20908__auto__ = (function (){var statearr_40698 = f__20907__auto__.call(null);
(statearr_40698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___40699);

return statearr_40698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___40699,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40720_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40720_SHARP_));
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
var base_path_40727 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40727){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_40725 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40726 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40726;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40725;
}}catch (e40724){if((e40724 instanceof Error)){
var e = e40724;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40727], null));
} else {
var e = e40724;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40727))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40728){
var map__40735 = p__40728;
var map__40735__$1 = ((((!((map__40735 == null)))?((((map__40735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40735):map__40735);
var opts = map__40735__$1;
var build_id = cljs.core.get.call(null,map__40735__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40735,map__40735__$1,opts,build_id){
return (function (p__40737){
var vec__40738 = p__40737;
var map__40739 = cljs.core.nth.call(null,vec__40738,(0),null);
var map__40739__$1 = ((((!((map__40739 == null)))?((((map__40739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40739):map__40739);
var msg = map__40739__$1;
var msg_name = cljs.core.get.call(null,map__40739__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40738,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40738,map__40739,map__40739__$1,msg,msg_name,_,map__40735,map__40735__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40738,map__40739,map__40739__$1,msg,msg_name,_,map__40735,map__40735__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40735,map__40735__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40745){
var vec__40746 = p__40745;
var map__40747 = cljs.core.nth.call(null,vec__40746,(0),null);
var map__40747__$1 = ((((!((map__40747 == null)))?((((map__40747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40747):map__40747);
var msg = map__40747__$1;
var msg_name = cljs.core.get.call(null,map__40747__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40746,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40749){
var map__40759 = p__40749;
var map__40759__$1 = ((((!((map__40759 == null)))?((((map__40759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40759):map__40759);
var on_compile_warning = cljs.core.get.call(null,map__40759__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40759__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40759,map__40759__$1,on_compile_warning,on_compile_fail){
return (function (p__40761){
var vec__40762 = p__40761;
var map__40763 = cljs.core.nth.call(null,vec__40762,(0),null);
var map__40763__$1 = ((((!((map__40763 == null)))?((((map__40763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40763):map__40763);
var msg = map__40763__$1;
var msg_name = cljs.core.get.call(null,map__40763__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40762,(1));
var pred__40765 = cljs.core._EQ_;
var expr__40766 = msg_name;
if(cljs.core.truth_(pred__40765.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40766))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40765.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40766))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40759,map__40759__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto__,msg_hist,msg_names,msg){
return (function (state_40974){
var state_val_40975 = (state_40974[(1)]);
if((state_val_40975 === (7))){
var inst_40902 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
if(cljs.core.truth_(inst_40902)){
var statearr_40976_41022 = state_40974__$1;
(statearr_40976_41022[(1)] = (8));

} else {
var statearr_40977_41023 = state_40974__$1;
(statearr_40977_41023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (20))){
var inst_40968 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40978_41024 = state_40974__$1;
(statearr_40978_41024[(2)] = inst_40968);

(statearr_40978_41024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (27))){
var inst_40964 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40979_41025 = state_40974__$1;
(statearr_40979_41025[(2)] = inst_40964);

(statearr_40979_41025[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (1))){
var inst_40895 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40974__$1 = state_40974;
if(cljs.core.truth_(inst_40895)){
var statearr_40980_41026 = state_40974__$1;
(statearr_40980_41026[(1)] = (2));

} else {
var statearr_40981_41027 = state_40974__$1;
(statearr_40981_41027[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (24))){
var inst_40966 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40982_41028 = state_40974__$1;
(statearr_40982_41028[(2)] = inst_40966);

(statearr_40982_41028[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (4))){
var inst_40972 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40974__$1,inst_40972);
} else {
if((state_val_40975 === (15))){
var inst_40970 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40983_41029 = state_40974__$1;
(statearr_40983_41029[(2)] = inst_40970);

(statearr_40983_41029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (21))){
var inst_40929 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40984_41030 = state_40974__$1;
(statearr_40984_41030[(2)] = inst_40929);

(statearr_40984_41030[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (31))){
var inst_40953 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40974__$1 = state_40974;
if(cljs.core.truth_(inst_40953)){
var statearr_40985_41031 = state_40974__$1;
(statearr_40985_41031[(1)] = (34));

} else {
var statearr_40986_41032 = state_40974__$1;
(statearr_40986_41032[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (32))){
var inst_40962 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40987_41033 = state_40974__$1;
(statearr_40987_41033[(2)] = inst_40962);

(statearr_40987_41033[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (33))){
var inst_40951 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40988_41034 = state_40974__$1;
(statearr_40988_41034[(2)] = inst_40951);

(statearr_40988_41034[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (13))){
var inst_40916 = figwheel.client.heads_up.clear.call(null);
var state_40974__$1 = state_40974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40974__$1,(16),inst_40916);
} else {
if((state_val_40975 === (22))){
var inst_40933 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40934 = figwheel.client.heads_up.append_message.call(null,inst_40933);
var state_40974__$1 = state_40974;
var statearr_40989_41035 = state_40974__$1;
(statearr_40989_41035[(2)] = inst_40934);

(statearr_40989_41035[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (36))){
var inst_40960 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40990_41036 = state_40974__$1;
(statearr_40990_41036[(2)] = inst_40960);

(statearr_40990_41036[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (29))){
var inst_40944 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40991_41037 = state_40974__$1;
(statearr_40991_41037[(2)] = inst_40944);

(statearr_40991_41037[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (6))){
var inst_40897 = (state_40974[(7)]);
var state_40974__$1 = state_40974;
var statearr_40992_41038 = state_40974__$1;
(statearr_40992_41038[(2)] = inst_40897);

(statearr_40992_41038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (28))){
var inst_40940 = (state_40974[(2)]);
var inst_40941 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40942 = figwheel.client.heads_up.display_warning.call(null,inst_40941);
var state_40974__$1 = (function (){var statearr_40993 = state_40974;
(statearr_40993[(8)] = inst_40940);

return statearr_40993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40974__$1,(29),inst_40942);
} else {
if((state_val_40975 === (25))){
var inst_40938 = figwheel.client.heads_up.clear.call(null);
var state_40974__$1 = state_40974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40974__$1,(28),inst_40938);
} else {
if((state_val_40975 === (34))){
var inst_40955 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40974__$1 = state_40974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40974__$1,(37),inst_40955);
} else {
if((state_val_40975 === (17))){
var inst_40922 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40994_41039 = state_40974__$1;
(statearr_40994_41039[(2)] = inst_40922);

(statearr_40994_41039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (3))){
var inst_40914 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40974__$1 = state_40974;
if(cljs.core.truth_(inst_40914)){
var statearr_40995_41040 = state_40974__$1;
(statearr_40995_41040[(1)] = (13));

} else {
var statearr_40996_41041 = state_40974__$1;
(statearr_40996_41041[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (12))){
var inst_40910 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_40997_41042 = state_40974__$1;
(statearr_40997_41042[(2)] = inst_40910);

(statearr_40997_41042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (2))){
var inst_40897 = (state_40974[(7)]);
var inst_40897__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40974__$1 = (function (){var statearr_40998 = state_40974;
(statearr_40998[(7)] = inst_40897__$1);

return statearr_40998;
})();
if(cljs.core.truth_(inst_40897__$1)){
var statearr_40999_41043 = state_40974__$1;
(statearr_40999_41043[(1)] = (5));

} else {
var statearr_41000_41044 = state_40974__$1;
(statearr_41000_41044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (23))){
var inst_40936 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40974__$1 = state_40974;
if(cljs.core.truth_(inst_40936)){
var statearr_41001_41045 = state_40974__$1;
(statearr_41001_41045[(1)] = (25));

} else {
var statearr_41002_41046 = state_40974__$1;
(statearr_41002_41046[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (35))){
var state_40974__$1 = state_40974;
var statearr_41003_41047 = state_40974__$1;
(statearr_41003_41047[(2)] = null);

(statearr_41003_41047[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (19))){
var inst_40931 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40974__$1 = state_40974;
if(cljs.core.truth_(inst_40931)){
var statearr_41004_41048 = state_40974__$1;
(statearr_41004_41048[(1)] = (22));

} else {
var statearr_41005_41049 = state_40974__$1;
(statearr_41005_41049[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (11))){
var inst_40906 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_41006_41050 = state_40974__$1;
(statearr_41006_41050[(2)] = inst_40906);

(statearr_41006_41050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (9))){
var inst_40908 = figwheel.client.heads_up.clear.call(null);
var state_40974__$1 = state_40974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40974__$1,(12),inst_40908);
} else {
if((state_val_40975 === (5))){
var inst_40899 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40974__$1 = state_40974;
var statearr_41007_41051 = state_40974__$1;
(statearr_41007_41051[(2)] = inst_40899);

(statearr_41007_41051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (14))){
var inst_40924 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40974__$1 = state_40974;
if(cljs.core.truth_(inst_40924)){
var statearr_41008_41052 = state_40974__$1;
(statearr_41008_41052[(1)] = (18));

} else {
var statearr_41009_41053 = state_40974__$1;
(statearr_41009_41053[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (26))){
var inst_40946 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40974__$1 = state_40974;
if(cljs.core.truth_(inst_40946)){
var statearr_41010_41054 = state_40974__$1;
(statearr_41010_41054[(1)] = (30));

} else {
var statearr_41011_41055 = state_40974__$1;
(statearr_41011_41055[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (16))){
var inst_40918 = (state_40974[(2)]);
var inst_40919 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40920 = figwheel.client.heads_up.display_exception.call(null,inst_40919);
var state_40974__$1 = (function (){var statearr_41012 = state_40974;
(statearr_41012[(9)] = inst_40918);

return statearr_41012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40974__$1,(17),inst_40920);
} else {
if((state_val_40975 === (30))){
var inst_40948 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40949 = figwheel.client.heads_up.display_warning.call(null,inst_40948);
var state_40974__$1 = state_40974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40974__$1,(33),inst_40949);
} else {
if((state_val_40975 === (10))){
var inst_40912 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_41013_41056 = state_40974__$1;
(statearr_41013_41056[(2)] = inst_40912);

(statearr_41013_41056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (18))){
var inst_40926 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40927 = figwheel.client.heads_up.display_exception.call(null,inst_40926);
var state_40974__$1 = state_40974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40974__$1,(21),inst_40927);
} else {
if((state_val_40975 === (37))){
var inst_40957 = (state_40974[(2)]);
var state_40974__$1 = state_40974;
var statearr_41014_41057 = state_40974__$1;
(statearr_41014_41057[(2)] = inst_40957);

(statearr_41014_41057[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40975 === (8))){
var inst_40904 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40974__$1 = state_40974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40974__$1,(11),inst_40904);
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
});})(c__20906__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20794__auto__,c__20906__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto____0 = (function (){
var statearr_41018 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41018[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto__);

(statearr_41018[(1)] = (1));

return statearr_41018;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto____1 = (function (state_40974){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_40974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e41019){if((e41019 instanceof Object)){
var ex__20798__auto__ = e41019;
var statearr_41020_41058 = state_40974;
(statearr_41020_41058[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41059 = state_40974;
state_40974 = G__41059;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto__ = function(state_40974){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto____1.call(this,state_40974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto__,msg_hist,msg_names,msg))
})();
var state__20908__auto__ = (function (){var statearr_41021 = f__20907__auto__.call(null);
(statearr_41021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto__);

return statearr_41021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto__,msg_hist,msg_names,msg))
);

return c__20906__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20906__auto___41122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___41122,ch){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___41122,ch){
return (function (state_41105){
var state_val_41106 = (state_41105[(1)]);
if((state_val_41106 === (1))){
var state_41105__$1 = state_41105;
var statearr_41107_41123 = state_41105__$1;
(statearr_41107_41123[(2)] = null);

(statearr_41107_41123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (2))){
var state_41105__$1 = state_41105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41105__$1,(4),ch);
} else {
if((state_val_41106 === (3))){
var inst_41103 = (state_41105[(2)]);
var state_41105__$1 = state_41105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41105__$1,inst_41103);
} else {
if((state_val_41106 === (4))){
var inst_41093 = (state_41105[(7)]);
var inst_41093__$1 = (state_41105[(2)]);
var state_41105__$1 = (function (){var statearr_41108 = state_41105;
(statearr_41108[(7)] = inst_41093__$1);

return statearr_41108;
})();
if(cljs.core.truth_(inst_41093__$1)){
var statearr_41109_41124 = state_41105__$1;
(statearr_41109_41124[(1)] = (5));

} else {
var statearr_41110_41125 = state_41105__$1;
(statearr_41110_41125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (5))){
var inst_41093 = (state_41105[(7)]);
var inst_41095 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41093);
var state_41105__$1 = state_41105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41105__$1,(8),inst_41095);
} else {
if((state_val_41106 === (6))){
var state_41105__$1 = state_41105;
var statearr_41111_41126 = state_41105__$1;
(statearr_41111_41126[(2)] = null);

(statearr_41111_41126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (7))){
var inst_41101 = (state_41105[(2)]);
var state_41105__$1 = state_41105;
var statearr_41112_41127 = state_41105__$1;
(statearr_41112_41127[(2)] = inst_41101);

(statearr_41112_41127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (8))){
var inst_41097 = (state_41105[(2)]);
var state_41105__$1 = (function (){var statearr_41113 = state_41105;
(statearr_41113[(8)] = inst_41097);

return statearr_41113;
})();
var statearr_41114_41128 = state_41105__$1;
(statearr_41114_41128[(2)] = null);

(statearr_41114_41128[(1)] = (2));


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
});})(c__20906__auto___41122,ch))
;
return ((function (switch__20794__auto__,c__20906__auto___41122,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20795__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20795__auto____0 = (function (){
var statearr_41118 = [null,null,null,null,null,null,null,null,null];
(statearr_41118[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20795__auto__);

(statearr_41118[(1)] = (1));

return statearr_41118;
});
var figwheel$client$heads_up_plugin_$_state_machine__20795__auto____1 = (function (state_41105){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_41105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e41119){if((e41119 instanceof Object)){
var ex__20798__auto__ = e41119;
var statearr_41120_41129 = state_41105;
(statearr_41120_41129[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41130 = state_41105;
state_41105 = G__41130;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20795__auto__ = function(state_41105){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20795__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20795__auto____1.call(this,state_41105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20795__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20795__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___41122,ch))
})();
var state__20908__auto__ = (function (){var statearr_41121 = f__20907__auto__.call(null);
(statearr_41121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___41122);

return statearr_41121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___41122,ch))
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
var c__20906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto__){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto__){
return (function (state_41151){
var state_val_41152 = (state_41151[(1)]);
if((state_val_41152 === (1))){
var inst_41146 = cljs.core.async.timeout.call(null,(3000));
var state_41151__$1 = state_41151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41151__$1,(2),inst_41146);
} else {
if((state_val_41152 === (2))){
var inst_41148 = (state_41151[(2)]);
var inst_41149 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41151__$1 = (function (){var statearr_41153 = state_41151;
(statearr_41153[(7)] = inst_41148);

return statearr_41153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41151__$1,inst_41149);
} else {
return null;
}
}
});})(c__20906__auto__))
;
return ((function (switch__20794__auto__,c__20906__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20795__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20795__auto____0 = (function (){
var statearr_41157 = [null,null,null,null,null,null,null,null];
(statearr_41157[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20795__auto__);

(statearr_41157[(1)] = (1));

return statearr_41157;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20795__auto____1 = (function (state_41151){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_41151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e41158){if((e41158 instanceof Object)){
var ex__20798__auto__ = e41158;
var statearr_41159_41161 = state_41151;
(statearr_41159_41161[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41162 = state_41151;
state_41151 = G__41162;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20795__auto__ = function(state_41151){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20795__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20795__auto____1.call(this,state_41151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20795__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20795__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto__))
})();
var state__20908__auto__ = (function (){var statearr_41160 = f__20907__auto__.call(null);
(statearr_41160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto__);

return statearr_41160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto__))
);

return c__20906__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41163){
var map__41170 = p__41163;
var map__41170__$1 = ((((!((map__41170 == null)))?((((map__41170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41170):map__41170);
var ed = map__41170__$1;
var formatted_exception = cljs.core.get.call(null,map__41170__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41170__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41170__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41172_41176 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41173_41177 = null;
var count__41174_41178 = (0);
var i__41175_41179 = (0);
while(true){
if((i__41175_41179 < count__41174_41178)){
var msg_41180 = cljs.core._nth.call(null,chunk__41173_41177,i__41175_41179);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41180);

var G__41181 = seq__41172_41176;
var G__41182 = chunk__41173_41177;
var G__41183 = count__41174_41178;
var G__41184 = (i__41175_41179 + (1));
seq__41172_41176 = G__41181;
chunk__41173_41177 = G__41182;
count__41174_41178 = G__41183;
i__41175_41179 = G__41184;
continue;
} else {
var temp__4657__auto___41185 = cljs.core.seq.call(null,seq__41172_41176);
if(temp__4657__auto___41185){
var seq__41172_41186__$1 = temp__4657__auto___41185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41172_41186__$1)){
var c__19550__auto___41187 = cljs.core.chunk_first.call(null,seq__41172_41186__$1);
var G__41188 = cljs.core.chunk_rest.call(null,seq__41172_41186__$1);
var G__41189 = c__19550__auto___41187;
var G__41190 = cljs.core.count.call(null,c__19550__auto___41187);
var G__41191 = (0);
seq__41172_41176 = G__41188;
chunk__41173_41177 = G__41189;
count__41174_41178 = G__41190;
i__41175_41179 = G__41191;
continue;
} else {
var msg_41192 = cljs.core.first.call(null,seq__41172_41186__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41192);

var G__41193 = cljs.core.next.call(null,seq__41172_41186__$1);
var G__41194 = null;
var G__41195 = (0);
var G__41196 = (0);
seq__41172_41176 = G__41193;
chunk__41173_41177 = G__41194;
count__41174_41178 = G__41195;
i__41175_41179 = G__41196;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41197){
var map__41200 = p__41197;
var map__41200__$1 = ((((!((map__41200 == null)))?((((map__41200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41200):map__41200);
var w = map__41200__$1;
var message = cljs.core.get.call(null,map__41200__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18727__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18727__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18727__auto__;
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
var seq__41208 = cljs.core.seq.call(null,plugins);
var chunk__41209 = null;
var count__41210 = (0);
var i__41211 = (0);
while(true){
if((i__41211 < count__41210)){
var vec__41212 = cljs.core._nth.call(null,chunk__41209,i__41211);
var k = cljs.core.nth.call(null,vec__41212,(0),null);
var plugin = cljs.core.nth.call(null,vec__41212,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41214 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41208,chunk__41209,count__41210,i__41211,pl_41214,vec__41212,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41214.call(null,msg_hist);
});})(seq__41208,chunk__41209,count__41210,i__41211,pl_41214,vec__41212,k,plugin))
);
} else {
}

var G__41215 = seq__41208;
var G__41216 = chunk__41209;
var G__41217 = count__41210;
var G__41218 = (i__41211 + (1));
seq__41208 = G__41215;
chunk__41209 = G__41216;
count__41210 = G__41217;
i__41211 = G__41218;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41208);
if(temp__4657__auto__){
var seq__41208__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41208__$1)){
var c__19550__auto__ = cljs.core.chunk_first.call(null,seq__41208__$1);
var G__41219 = cljs.core.chunk_rest.call(null,seq__41208__$1);
var G__41220 = c__19550__auto__;
var G__41221 = cljs.core.count.call(null,c__19550__auto__);
var G__41222 = (0);
seq__41208 = G__41219;
chunk__41209 = G__41220;
count__41210 = G__41221;
i__41211 = G__41222;
continue;
} else {
var vec__41213 = cljs.core.first.call(null,seq__41208__$1);
var k = cljs.core.nth.call(null,vec__41213,(0),null);
var plugin = cljs.core.nth.call(null,vec__41213,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41223 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41208,chunk__41209,count__41210,i__41211,pl_41223,vec__41213,k,plugin,seq__41208__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41223.call(null,msg_hist);
});})(seq__41208,chunk__41209,count__41210,i__41211,pl_41223,vec__41213,k,plugin,seq__41208__$1,temp__4657__auto__))
);
} else {
}

var G__41224 = cljs.core.next.call(null,seq__41208__$1);
var G__41225 = null;
var G__41226 = (0);
var G__41227 = (0);
seq__41208 = G__41224;
chunk__41209 = G__41225;
count__41210 = G__41226;
i__41211 = G__41227;
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
var args41228 = [];
var len__19809__auto___41231 = arguments.length;
var i__19810__auto___41232 = (0);
while(true){
if((i__19810__auto___41232 < len__19809__auto___41231)){
args41228.push((arguments[i__19810__auto___41232]));

var G__41233 = (i__19810__auto___41232 + (1));
i__19810__auto___41232 = G__41233;
continue;
} else {
}
break;
}

var G__41230 = args41228.length;
switch (G__41230) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41228.length)].join('')));

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
var args__19816__auto__ = [];
var len__19809__auto___41239 = arguments.length;
var i__19810__auto___41240 = (0);
while(true){
if((i__19810__auto___41240 < len__19809__auto___41239)){
args__19816__auto__.push((arguments[i__19810__auto___41240]));

var G__41241 = (i__19810__auto___41240 + (1));
i__19810__auto___41240 = G__41241;
continue;
} else {
}
break;
}

var argseq__19817__auto__ = ((((0) < args__19816__auto__.length))?(new cljs.core.IndexedSeq(args__19816__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41236){
var map__41237 = p__41236;
var map__41237__$1 = ((((!((map__41237 == null)))?((((map__41237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41237):map__41237);
var opts = map__41237__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41235){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41235));
});

//# sourceMappingURL=client.js.map?rel=1465694406707