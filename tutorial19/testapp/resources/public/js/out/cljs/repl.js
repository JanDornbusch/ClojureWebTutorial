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
var seq__24873_24887 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24874_24888 = null;
var count__24875_24889 = (0);
var i__24876_24890 = (0);
while(true){
if((i__24876_24890 < count__24875_24889)){
var f_24891 = cljs.core._nth.call(null,chunk__24874_24888,i__24876_24890);
cljs.core.println.call(null,"  ",f_24891);

var G__24892 = seq__24873_24887;
var G__24893 = chunk__24874_24888;
var G__24894 = count__24875_24889;
var G__24895 = (i__24876_24890 + (1));
seq__24873_24887 = G__24892;
chunk__24874_24888 = G__24893;
count__24875_24889 = G__24894;
i__24876_24890 = G__24895;
continue;
} else {
var temp__4657__auto___24896 = cljs.core.seq.call(null,seq__24873_24887);
if(temp__4657__auto___24896){
var seq__24873_24897__$1 = temp__4657__auto___24896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24873_24897__$1)){
var c__19550__auto___24898 = cljs.core.chunk_first.call(null,seq__24873_24897__$1);
var G__24899 = cljs.core.chunk_rest.call(null,seq__24873_24897__$1);
var G__24900 = c__19550__auto___24898;
var G__24901 = cljs.core.count.call(null,c__19550__auto___24898);
var G__24902 = (0);
seq__24873_24887 = G__24899;
chunk__24874_24888 = G__24900;
count__24875_24889 = G__24901;
i__24876_24890 = G__24902;
continue;
} else {
var f_24903 = cljs.core.first.call(null,seq__24873_24897__$1);
cljs.core.println.call(null,"  ",f_24903);

var G__24904 = cljs.core.next.call(null,seq__24873_24897__$1);
var G__24905 = null;
var G__24906 = (0);
var G__24907 = (0);
seq__24873_24887 = G__24904;
chunk__24874_24888 = G__24905;
count__24875_24889 = G__24906;
i__24876_24890 = G__24907;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24908 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18739__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18739__auto__)){
return or__18739__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24908);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24908)))?cljs.core.second.call(null,arglists_24908):arglists_24908));
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
var seq__24877 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24878 = null;
var count__24879 = (0);
var i__24880 = (0);
while(true){
if((i__24880 < count__24879)){
var vec__24881 = cljs.core._nth.call(null,chunk__24878,i__24880);
var name = cljs.core.nth.call(null,vec__24881,(0),null);
var map__24882 = cljs.core.nth.call(null,vec__24881,(1),null);
var map__24882__$1 = ((((!((map__24882 == null)))?((((map__24882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24882):map__24882);
var doc = cljs.core.get.call(null,map__24882__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24882__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24909 = seq__24877;
var G__24910 = chunk__24878;
var G__24911 = count__24879;
var G__24912 = (i__24880 + (1));
seq__24877 = G__24909;
chunk__24878 = G__24910;
count__24879 = G__24911;
i__24880 = G__24912;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24877);
if(temp__4657__auto__){
var seq__24877__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24877__$1)){
var c__19550__auto__ = cljs.core.chunk_first.call(null,seq__24877__$1);
var G__24913 = cljs.core.chunk_rest.call(null,seq__24877__$1);
var G__24914 = c__19550__auto__;
var G__24915 = cljs.core.count.call(null,c__19550__auto__);
var G__24916 = (0);
seq__24877 = G__24913;
chunk__24878 = G__24914;
count__24879 = G__24915;
i__24880 = G__24916;
continue;
} else {
var vec__24884 = cljs.core.first.call(null,seq__24877__$1);
var name = cljs.core.nth.call(null,vec__24884,(0),null);
var map__24885 = cljs.core.nth.call(null,vec__24884,(1),null);
var map__24885__$1 = ((((!((map__24885 == null)))?((((map__24885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24885):map__24885);
var doc = cljs.core.get.call(null,map__24885__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24885__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24917 = cljs.core.next.call(null,seq__24877__$1);
var G__24918 = null;
var G__24919 = (0);
var G__24920 = (0);
seq__24877 = G__24917;
chunk__24878 = G__24918;
count__24879 = G__24919;
i__24880 = G__24920;
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

//# sourceMappingURL=repl.js.map?rel=1465693887031