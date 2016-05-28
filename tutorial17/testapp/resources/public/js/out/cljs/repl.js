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
var seq__27650_27664 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27651_27665 = null;
var count__27652_27666 = (0);
var i__27653_27667 = (0);
while(true){
if((i__27653_27667 < count__27652_27666)){
var f_27668 = cljs.core._nth.call(null,chunk__27651_27665,i__27653_27667);
cljs.core.println.call(null,"  ",f_27668);

var G__27669 = seq__27650_27664;
var G__27670 = chunk__27651_27665;
var G__27671 = count__27652_27666;
var G__27672 = (i__27653_27667 + (1));
seq__27650_27664 = G__27669;
chunk__27651_27665 = G__27670;
count__27652_27666 = G__27671;
i__27653_27667 = G__27672;
continue;
} else {
var temp__4657__auto___27673 = cljs.core.seq.call(null,seq__27650_27664);
if(temp__4657__auto___27673){
var seq__27650_27674__$1 = temp__4657__auto___27673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27650_27674__$1)){
var c__19253__auto___27675 = cljs.core.chunk_first.call(null,seq__27650_27674__$1);
var G__27676 = cljs.core.chunk_rest.call(null,seq__27650_27674__$1);
var G__27677 = c__19253__auto___27675;
var G__27678 = cljs.core.count.call(null,c__19253__auto___27675);
var G__27679 = (0);
seq__27650_27664 = G__27676;
chunk__27651_27665 = G__27677;
count__27652_27666 = G__27678;
i__27653_27667 = G__27679;
continue;
} else {
var f_27680 = cljs.core.first.call(null,seq__27650_27674__$1);
cljs.core.println.call(null,"  ",f_27680);

var G__27681 = cljs.core.next.call(null,seq__27650_27674__$1);
var G__27682 = null;
var G__27683 = (0);
var G__27684 = (0);
seq__27650_27664 = G__27681;
chunk__27651_27665 = G__27682;
count__27652_27666 = G__27683;
i__27653_27667 = G__27684;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27685 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18442__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27685);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27685)))?cljs.core.second.call(null,arglists_27685):arglists_27685));
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
var seq__27654 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27655 = null;
var count__27656 = (0);
var i__27657 = (0);
while(true){
if((i__27657 < count__27656)){
var vec__27658 = cljs.core._nth.call(null,chunk__27655,i__27657);
var name = cljs.core.nth.call(null,vec__27658,(0),null);
var map__27659 = cljs.core.nth.call(null,vec__27658,(1),null);
var map__27659__$1 = ((((!((map__27659 == null)))?((((map__27659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27659):map__27659);
var doc = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27686 = seq__27654;
var G__27687 = chunk__27655;
var G__27688 = count__27656;
var G__27689 = (i__27657 + (1));
seq__27654 = G__27686;
chunk__27655 = G__27687;
count__27656 = G__27688;
i__27657 = G__27689;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27654);
if(temp__4657__auto__){
var seq__27654__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27654__$1)){
var c__19253__auto__ = cljs.core.chunk_first.call(null,seq__27654__$1);
var G__27690 = cljs.core.chunk_rest.call(null,seq__27654__$1);
var G__27691 = c__19253__auto__;
var G__27692 = cljs.core.count.call(null,c__19253__auto__);
var G__27693 = (0);
seq__27654 = G__27690;
chunk__27655 = G__27691;
count__27656 = G__27692;
i__27657 = G__27693;
continue;
} else {
var vec__27661 = cljs.core.first.call(null,seq__27654__$1);
var name = cljs.core.nth.call(null,vec__27661,(0),null);
var map__27662 = cljs.core.nth.call(null,vec__27661,(1),null);
var map__27662__$1 = ((((!((map__27662 == null)))?((((map__27662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27662):map__27662);
var doc = cljs.core.get.call(null,map__27662__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27662__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27694 = cljs.core.next.call(null,seq__27654__$1);
var G__27695 = null;
var G__27696 = (0);
var G__27697 = (0);
seq__27654 = G__27694;
chunk__27655 = G__27695;
count__27656 = G__27696;
i__27657 = G__27697;
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

//# sourceMappingURL=repl.js.map?rel=1464472608749