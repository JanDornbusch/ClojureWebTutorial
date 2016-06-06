// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26951_26965 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26952_26966 = null;
var count__26953_26967 = (0);
var i__26954_26968 = (0);
while(true){
if((i__26954_26968 < count__26953_26967)){
var f_26969 = cljs.core._nth.call(null,chunk__26952_26966,i__26954_26968);
cljs.core.println.call(null,"  ",f_26969);

var G__26970 = seq__26951_26965;
var G__26971 = chunk__26952_26966;
var G__26972 = count__26953_26967;
var G__26973 = (i__26954_26968 + (1));
seq__26951_26965 = G__26970;
chunk__26952_26966 = G__26971;
count__26953_26967 = G__26972;
i__26954_26968 = G__26973;
continue;
} else {
var temp__4657__auto___26974 = cljs.core.seq.call(null,seq__26951_26965);
if(temp__4657__auto___26974){
var seq__26951_26975__$1 = temp__4657__auto___26974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26951_26975__$1)){
var c__19253__auto___26976 = cljs.core.chunk_first.call(null,seq__26951_26975__$1);
var G__26977 = cljs.core.chunk_rest.call(null,seq__26951_26975__$1);
var G__26978 = c__19253__auto___26976;
var G__26979 = cljs.core.count.call(null,c__19253__auto___26976);
var G__26980 = (0);
seq__26951_26965 = G__26977;
chunk__26952_26966 = G__26978;
count__26953_26967 = G__26979;
i__26954_26968 = G__26980;
continue;
} else {
var f_26981 = cljs.core.first.call(null,seq__26951_26975__$1);
cljs.core.println.call(null,"  ",f_26981);

var G__26982 = cljs.core.next.call(null,seq__26951_26975__$1);
var G__26983 = null;
var G__26984 = (0);
var G__26985 = (0);
seq__26951_26965 = G__26982;
chunk__26952_26966 = G__26983;
count__26953_26967 = G__26984;
i__26954_26968 = G__26985;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26986 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18442__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26986);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26986)))?cljs.core.second.call(null,arglists_26986):arglists_26986));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26955 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26956 = null;
var count__26957 = (0);
var i__26958 = (0);
while(true){
if((i__26958 < count__26957)){
var vec__26959 = cljs.core._nth.call(null,chunk__26956,i__26958);
var name = cljs.core.nth.call(null,vec__26959,(0),null);
var map__26960 = cljs.core.nth.call(null,vec__26959,(1),null);
var map__26960__$1 = ((((!((map__26960 == null)))?((((map__26960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26960):map__26960);
var doc = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26987 = seq__26955;
var G__26988 = chunk__26956;
var G__26989 = count__26957;
var G__26990 = (i__26958 + (1));
seq__26955 = G__26987;
chunk__26956 = G__26988;
count__26957 = G__26989;
i__26958 = G__26990;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26955);
if(temp__4657__auto__){
var seq__26955__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26955__$1)){
var c__19253__auto__ = cljs.core.chunk_first.call(null,seq__26955__$1);
var G__26991 = cljs.core.chunk_rest.call(null,seq__26955__$1);
var G__26992 = c__19253__auto__;
var G__26993 = cljs.core.count.call(null,c__19253__auto__);
var G__26994 = (0);
seq__26955 = G__26991;
chunk__26956 = G__26992;
count__26957 = G__26993;
i__26958 = G__26994;
continue;
} else {
var vec__26962 = cljs.core.first.call(null,seq__26955__$1);
var name = cljs.core.nth.call(null,vec__26962,(0),null);
var map__26963 = cljs.core.nth.call(null,vec__26962,(1),null);
var map__26963__$1 = ((((!((map__26963 == null)))?((((map__26963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26963):map__26963);
var doc = cljs.core.get.call(null,map__26963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26995 = cljs.core.next.call(null,seq__26955__$1);
var G__26996 = null;
var G__26997 = (0);
var G__26998 = (0);
seq__26955 = G__26995;
chunk__26956 = G__26996;
count__26957 = G__26997;
i__26958 = G__26998;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1465243879703