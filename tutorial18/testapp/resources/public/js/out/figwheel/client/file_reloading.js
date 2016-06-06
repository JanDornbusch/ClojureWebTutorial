// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18442__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18442__auto__){
return or__18442__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18442__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23384_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23384_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23389 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23390 = null;
var count__23391 = (0);
var i__23392 = (0);
while(true){
if((i__23392 < count__23391)){
var n = cljs.core._nth.call(null,chunk__23390,i__23392);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23393 = seq__23389;
var G__23394 = chunk__23390;
var G__23395 = count__23391;
var G__23396 = (i__23392 + (1));
seq__23389 = G__23393;
chunk__23390 = G__23394;
count__23391 = G__23395;
i__23392 = G__23396;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23389);
if(temp__4657__auto__){
var seq__23389__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23389__$1)){
var c__19253__auto__ = cljs.core.chunk_first.call(null,seq__23389__$1);
var G__23397 = cljs.core.chunk_rest.call(null,seq__23389__$1);
var G__23398 = c__19253__auto__;
var G__23399 = cljs.core.count.call(null,c__19253__auto__);
var G__23400 = (0);
seq__23389 = G__23397;
chunk__23390 = G__23398;
count__23391 = G__23399;
i__23392 = G__23400;
continue;
} else {
var n = cljs.core.first.call(null,seq__23389__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23401 = cljs.core.next.call(null,seq__23389__$1);
var G__23402 = null;
var G__23403 = (0);
var G__23404 = (0);
seq__23389 = G__23401;
chunk__23390 = G__23402;
count__23391 = G__23403;
i__23392 = G__23404;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23443_23450 = cljs.core.seq.call(null,deps);
var chunk__23444_23451 = null;
var count__23445_23452 = (0);
var i__23446_23453 = (0);
while(true){
if((i__23446_23453 < count__23445_23452)){
var dep_23454 = cljs.core._nth.call(null,chunk__23444_23451,i__23446_23453);
topo_sort_helper_STAR_.call(null,dep_23454,(depth + (1)),state);

var G__23455 = seq__23443_23450;
var G__23456 = chunk__23444_23451;
var G__23457 = count__23445_23452;
var G__23458 = (i__23446_23453 + (1));
seq__23443_23450 = G__23455;
chunk__23444_23451 = G__23456;
count__23445_23452 = G__23457;
i__23446_23453 = G__23458;
continue;
} else {
var temp__4657__auto___23459 = cljs.core.seq.call(null,seq__23443_23450);
if(temp__4657__auto___23459){
var seq__23443_23460__$1 = temp__4657__auto___23459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23443_23460__$1)){
var c__19253__auto___23461 = cljs.core.chunk_first.call(null,seq__23443_23460__$1);
var G__23462 = cljs.core.chunk_rest.call(null,seq__23443_23460__$1);
var G__23463 = c__19253__auto___23461;
var G__23464 = cljs.core.count.call(null,c__19253__auto___23461);
var G__23465 = (0);
seq__23443_23450 = G__23462;
chunk__23444_23451 = G__23463;
count__23445_23452 = G__23464;
i__23446_23453 = G__23465;
continue;
} else {
var dep_23466 = cljs.core.first.call(null,seq__23443_23460__$1);
topo_sort_helper_STAR_.call(null,dep_23466,(depth + (1)),state);

var G__23467 = cljs.core.next.call(null,seq__23443_23460__$1);
var G__23468 = null;
var G__23469 = (0);
var G__23470 = (0);
seq__23443_23450 = G__23467;
chunk__23444_23451 = G__23468;
count__23445_23452 = G__23469;
i__23446_23453 = G__23470;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23447){
var vec__23449 = p__23447;
var x = cljs.core.nth.call(null,vec__23449,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23449,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23449,x,xs,get_deps__$1){
return (function (p1__23405_SHARP_){
return clojure.set.difference.call(null,p1__23405_SHARP_,x);
});})(vec__23449,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23483 = cljs.core.seq.call(null,provides);
var chunk__23484 = null;
var count__23485 = (0);
var i__23486 = (0);
while(true){
if((i__23486 < count__23485)){
var prov = cljs.core._nth.call(null,chunk__23484,i__23486);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23487_23495 = cljs.core.seq.call(null,requires);
var chunk__23488_23496 = null;
var count__23489_23497 = (0);
var i__23490_23498 = (0);
while(true){
if((i__23490_23498 < count__23489_23497)){
var req_23499 = cljs.core._nth.call(null,chunk__23488_23496,i__23490_23498);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23499,prov);

var G__23500 = seq__23487_23495;
var G__23501 = chunk__23488_23496;
var G__23502 = count__23489_23497;
var G__23503 = (i__23490_23498 + (1));
seq__23487_23495 = G__23500;
chunk__23488_23496 = G__23501;
count__23489_23497 = G__23502;
i__23490_23498 = G__23503;
continue;
} else {
var temp__4657__auto___23504 = cljs.core.seq.call(null,seq__23487_23495);
if(temp__4657__auto___23504){
var seq__23487_23505__$1 = temp__4657__auto___23504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23487_23505__$1)){
var c__19253__auto___23506 = cljs.core.chunk_first.call(null,seq__23487_23505__$1);
var G__23507 = cljs.core.chunk_rest.call(null,seq__23487_23505__$1);
var G__23508 = c__19253__auto___23506;
var G__23509 = cljs.core.count.call(null,c__19253__auto___23506);
var G__23510 = (0);
seq__23487_23495 = G__23507;
chunk__23488_23496 = G__23508;
count__23489_23497 = G__23509;
i__23490_23498 = G__23510;
continue;
} else {
var req_23511 = cljs.core.first.call(null,seq__23487_23505__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23511,prov);

var G__23512 = cljs.core.next.call(null,seq__23487_23505__$1);
var G__23513 = null;
var G__23514 = (0);
var G__23515 = (0);
seq__23487_23495 = G__23512;
chunk__23488_23496 = G__23513;
count__23489_23497 = G__23514;
i__23490_23498 = G__23515;
continue;
}
} else {
}
}
break;
}

var G__23516 = seq__23483;
var G__23517 = chunk__23484;
var G__23518 = count__23485;
var G__23519 = (i__23486 + (1));
seq__23483 = G__23516;
chunk__23484 = G__23517;
count__23485 = G__23518;
i__23486 = G__23519;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23483);
if(temp__4657__auto__){
var seq__23483__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23483__$1)){
var c__19253__auto__ = cljs.core.chunk_first.call(null,seq__23483__$1);
var G__23520 = cljs.core.chunk_rest.call(null,seq__23483__$1);
var G__23521 = c__19253__auto__;
var G__23522 = cljs.core.count.call(null,c__19253__auto__);
var G__23523 = (0);
seq__23483 = G__23520;
chunk__23484 = G__23521;
count__23485 = G__23522;
i__23486 = G__23523;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23483__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23491_23524 = cljs.core.seq.call(null,requires);
var chunk__23492_23525 = null;
var count__23493_23526 = (0);
var i__23494_23527 = (0);
while(true){
if((i__23494_23527 < count__23493_23526)){
var req_23528 = cljs.core._nth.call(null,chunk__23492_23525,i__23494_23527);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23528,prov);

var G__23529 = seq__23491_23524;
var G__23530 = chunk__23492_23525;
var G__23531 = count__23493_23526;
var G__23532 = (i__23494_23527 + (1));
seq__23491_23524 = G__23529;
chunk__23492_23525 = G__23530;
count__23493_23526 = G__23531;
i__23494_23527 = G__23532;
continue;
} else {
var temp__4657__auto___23533__$1 = cljs.core.seq.call(null,seq__23491_23524);
if(temp__4657__auto___23533__$1){
var seq__23491_23534__$1 = temp__4657__auto___23533__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23491_23534__$1)){
var c__19253__auto___23535 = cljs.core.chunk_first.call(null,seq__23491_23534__$1);
var G__23536 = cljs.core.chunk_rest.call(null,seq__23491_23534__$1);
var G__23537 = c__19253__auto___23535;
var G__23538 = cljs.core.count.call(null,c__19253__auto___23535);
var G__23539 = (0);
seq__23491_23524 = G__23536;
chunk__23492_23525 = G__23537;
count__23493_23526 = G__23538;
i__23494_23527 = G__23539;
continue;
} else {
var req_23540 = cljs.core.first.call(null,seq__23491_23534__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23540,prov);

var G__23541 = cljs.core.next.call(null,seq__23491_23534__$1);
var G__23542 = null;
var G__23543 = (0);
var G__23544 = (0);
seq__23491_23524 = G__23541;
chunk__23492_23525 = G__23542;
count__23493_23526 = G__23543;
i__23494_23527 = G__23544;
continue;
}
} else {
}
}
break;
}

var G__23545 = cljs.core.next.call(null,seq__23483__$1);
var G__23546 = null;
var G__23547 = (0);
var G__23548 = (0);
seq__23483 = G__23545;
chunk__23484 = G__23546;
count__23485 = G__23547;
i__23486 = G__23548;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23553_23557 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23554_23558 = null;
var count__23555_23559 = (0);
var i__23556_23560 = (0);
while(true){
if((i__23556_23560 < count__23555_23559)){
var ns_23561 = cljs.core._nth.call(null,chunk__23554_23558,i__23556_23560);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23561);

var G__23562 = seq__23553_23557;
var G__23563 = chunk__23554_23558;
var G__23564 = count__23555_23559;
var G__23565 = (i__23556_23560 + (1));
seq__23553_23557 = G__23562;
chunk__23554_23558 = G__23563;
count__23555_23559 = G__23564;
i__23556_23560 = G__23565;
continue;
} else {
var temp__4657__auto___23566 = cljs.core.seq.call(null,seq__23553_23557);
if(temp__4657__auto___23566){
var seq__23553_23567__$1 = temp__4657__auto___23566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23553_23567__$1)){
var c__19253__auto___23568 = cljs.core.chunk_first.call(null,seq__23553_23567__$1);
var G__23569 = cljs.core.chunk_rest.call(null,seq__23553_23567__$1);
var G__23570 = c__19253__auto___23568;
var G__23571 = cljs.core.count.call(null,c__19253__auto___23568);
var G__23572 = (0);
seq__23553_23557 = G__23569;
chunk__23554_23558 = G__23570;
count__23555_23559 = G__23571;
i__23556_23560 = G__23572;
continue;
} else {
var ns_23573 = cljs.core.first.call(null,seq__23553_23567__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23573);

var G__23574 = cljs.core.next.call(null,seq__23553_23567__$1);
var G__23575 = null;
var G__23576 = (0);
var G__23577 = (0);
seq__23553_23557 = G__23574;
chunk__23554_23558 = G__23575;
count__23555_23559 = G__23576;
i__23556_23560 = G__23577;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18442__auto__ = goog.require__;
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23578__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23579__i = 0, G__23579__a = new Array(arguments.length -  0);
while (G__23579__i < G__23579__a.length) {G__23579__a[G__23579__i] = arguments[G__23579__i + 0]; ++G__23579__i;}
  args = new cljs.core.IndexedSeq(G__23579__a,0);
} 
return G__23578__delegate.call(this,args);};
G__23578.cljs$lang$maxFixedArity = 0;
G__23578.cljs$lang$applyTo = (function (arglist__23580){
var args = cljs.core.seq(arglist__23580);
return G__23578__delegate(args);
});
G__23578.cljs$core$IFn$_invoke$arity$variadic = G__23578__delegate;
return G__23578;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23582 = cljs.core._EQ_;
var expr__23583 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23582.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23583))){
var path_parts = ((function (pred__23582,expr__23583){
return (function (p1__23581_SHARP_){
return clojure.string.split.call(null,p1__23581_SHARP_,/[\/\\]/);
});})(pred__23582,expr__23583))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23582,expr__23583){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23585){if((e23585 instanceof Error)){
var e = e23585;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23585;

}
}})());
});
;})(path_parts,sep,root,pred__23582,expr__23583))
} else {
if(cljs.core.truth_(pred__23582.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23583))){
return ((function (pred__23582,expr__23583){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23582,expr__23583){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23582,expr__23583))
);

return deferred.addErrback(((function (deferred,pred__23582,expr__23583){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23582,expr__23583))
);
});
;})(pred__23582,expr__23583))
} else {
return ((function (pred__23582,expr__23583){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23582,expr__23583))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23586,callback){
var map__23589 = p__23586;
var map__23589__$1 = ((((!((map__23589 == null)))?((((map__23589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23589):map__23589);
var file_msg = map__23589__$1;
var request_url = cljs.core.get.call(null,map__23589__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23589,map__23589__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23589,map__23589__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto__){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto__){
return (function (state_23613){
var state_val_23614 = (state_23613[(1)]);
if((state_val_23614 === (7))){
var inst_23609 = (state_23613[(2)]);
var state_23613__$1 = state_23613;
var statearr_23615_23635 = state_23613__$1;
(statearr_23615_23635[(2)] = inst_23609);

(statearr_23615_23635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (1))){
var state_23613__$1 = state_23613;
var statearr_23616_23636 = state_23613__$1;
(statearr_23616_23636[(2)] = null);

(statearr_23616_23636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (4))){
var inst_23593 = (state_23613[(7)]);
var inst_23593__$1 = (state_23613[(2)]);
var state_23613__$1 = (function (){var statearr_23617 = state_23613;
(statearr_23617[(7)] = inst_23593__$1);

return statearr_23617;
})();
if(cljs.core.truth_(inst_23593__$1)){
var statearr_23618_23637 = state_23613__$1;
(statearr_23618_23637[(1)] = (5));

} else {
var statearr_23619_23638 = state_23613__$1;
(statearr_23619_23638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (6))){
var state_23613__$1 = state_23613;
var statearr_23620_23639 = state_23613__$1;
(statearr_23620_23639[(2)] = null);

(statearr_23620_23639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (3))){
var inst_23611 = (state_23613[(2)]);
var state_23613__$1 = state_23613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23613__$1,inst_23611);
} else {
if((state_val_23614 === (2))){
var state_23613__$1 = state_23613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23613__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23614 === (11))){
var inst_23605 = (state_23613[(2)]);
var state_23613__$1 = (function (){var statearr_23621 = state_23613;
(statearr_23621[(8)] = inst_23605);

return statearr_23621;
})();
var statearr_23622_23640 = state_23613__$1;
(statearr_23622_23640[(2)] = null);

(statearr_23622_23640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (9))){
var inst_23599 = (state_23613[(9)]);
var inst_23597 = (state_23613[(10)]);
var inst_23601 = inst_23599.call(null,inst_23597);
var state_23613__$1 = state_23613;
var statearr_23623_23641 = state_23613__$1;
(statearr_23623_23641[(2)] = inst_23601);

(statearr_23623_23641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (5))){
var inst_23593 = (state_23613[(7)]);
var inst_23595 = figwheel.client.file_reloading.blocking_load.call(null,inst_23593);
var state_23613__$1 = state_23613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23613__$1,(8),inst_23595);
} else {
if((state_val_23614 === (10))){
var inst_23597 = (state_23613[(10)]);
var inst_23603 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23597);
var state_23613__$1 = state_23613;
var statearr_23624_23642 = state_23613__$1;
(statearr_23624_23642[(2)] = inst_23603);

(statearr_23624_23642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (8))){
var inst_23599 = (state_23613[(9)]);
var inst_23593 = (state_23613[(7)]);
var inst_23597 = (state_23613[(2)]);
var inst_23598 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23599__$1 = cljs.core.get.call(null,inst_23598,inst_23593);
var state_23613__$1 = (function (){var statearr_23625 = state_23613;
(statearr_23625[(9)] = inst_23599__$1);

(statearr_23625[(10)] = inst_23597);

return statearr_23625;
})();
if(cljs.core.truth_(inst_23599__$1)){
var statearr_23626_23643 = state_23613__$1;
(statearr_23626_23643[(1)] = (9));

} else {
var statearr_23627_23644 = state_23613__$1;
(statearr_23627_23644[(1)] = (10));

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
});})(c__20515__auto__))
;
return ((function (switch__20494__auto__,c__20515__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20495__auto__ = null;
var figwheel$client$file_reloading$state_machine__20495__auto____0 = (function (){
var statearr_23631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23631[(0)] = figwheel$client$file_reloading$state_machine__20495__auto__);

(statearr_23631[(1)] = (1));

return statearr_23631;
});
var figwheel$client$file_reloading$state_machine__20495__auto____1 = (function (state_23613){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_23613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e23632){if((e23632 instanceof Object)){
var ex__20498__auto__ = e23632;
var statearr_23633_23645 = state_23613;
(statearr_23633_23645[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23646 = state_23613;
state_23613 = G__23646;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20495__auto__ = function(state_23613){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20495__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20495__auto____1.call(this,state_23613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20495__auto____0;
figwheel$client$file_reloading$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20495__auto____1;
return figwheel$client$file_reloading$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto__))
})();
var state__20517__auto__ = (function (){var statearr_23634 = f__20516__auto__.call(null);
(statearr_23634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto__);

return statearr_23634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto__))
);

return c__20515__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23647,callback){
var map__23650 = p__23647;
var map__23650__$1 = ((((!((map__23650 == null)))?((((map__23650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23650):map__23650);
var file_msg = map__23650__$1;
var namespace = cljs.core.get.call(null,map__23650__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23650,map__23650__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23650,map__23650__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23652){
var map__23655 = p__23652;
var map__23655__$1 = ((((!((map__23655 == null)))?((((map__23655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23655):map__23655);
var file_msg = map__23655__$1;
var namespace = cljs.core.get.call(null,map__23655__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18430__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18430__auto__){
var or__18442__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
var or__18442__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18442__auto____$1)){
return or__18442__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18430__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23657,callback){
var map__23660 = p__23657;
var map__23660__$1 = ((((!((map__23660 == null)))?((((map__23660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23660):map__23660);
var file_msg = map__23660__$1;
var request_url = cljs.core.get.call(null,map__23660__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23660__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20515__auto___23748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___23748,out){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___23748,out){
return (function (state_23730){
var state_val_23731 = (state_23730[(1)]);
if((state_val_23731 === (1))){
var inst_23708 = cljs.core.nth.call(null,files,(0),null);
var inst_23709 = cljs.core.nthnext.call(null,files,(1));
var inst_23710 = files;
var state_23730__$1 = (function (){var statearr_23732 = state_23730;
(statearr_23732[(7)] = inst_23710);

(statearr_23732[(8)] = inst_23708);

(statearr_23732[(9)] = inst_23709);

return statearr_23732;
})();
var statearr_23733_23749 = state_23730__$1;
(statearr_23733_23749[(2)] = null);

(statearr_23733_23749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23731 === (2))){
var inst_23710 = (state_23730[(7)]);
var inst_23713 = (state_23730[(10)]);
var inst_23713__$1 = cljs.core.nth.call(null,inst_23710,(0),null);
var inst_23714 = cljs.core.nthnext.call(null,inst_23710,(1));
var inst_23715 = (inst_23713__$1 == null);
var inst_23716 = cljs.core.not.call(null,inst_23715);
var state_23730__$1 = (function (){var statearr_23734 = state_23730;
(statearr_23734[(11)] = inst_23714);

(statearr_23734[(10)] = inst_23713__$1);

return statearr_23734;
})();
if(inst_23716){
var statearr_23735_23750 = state_23730__$1;
(statearr_23735_23750[(1)] = (4));

} else {
var statearr_23736_23751 = state_23730__$1;
(statearr_23736_23751[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23731 === (3))){
var inst_23728 = (state_23730[(2)]);
var state_23730__$1 = state_23730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23730__$1,inst_23728);
} else {
if((state_val_23731 === (4))){
var inst_23713 = (state_23730[(10)]);
var inst_23718 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23713);
var state_23730__$1 = state_23730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23730__$1,(7),inst_23718);
} else {
if((state_val_23731 === (5))){
var inst_23724 = cljs.core.async.close_BANG_.call(null,out);
var state_23730__$1 = state_23730;
var statearr_23737_23752 = state_23730__$1;
(statearr_23737_23752[(2)] = inst_23724);

(statearr_23737_23752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23731 === (6))){
var inst_23726 = (state_23730[(2)]);
var state_23730__$1 = state_23730;
var statearr_23738_23753 = state_23730__$1;
(statearr_23738_23753[(2)] = inst_23726);

(statearr_23738_23753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23731 === (7))){
var inst_23714 = (state_23730[(11)]);
var inst_23720 = (state_23730[(2)]);
var inst_23721 = cljs.core.async.put_BANG_.call(null,out,inst_23720);
var inst_23710 = inst_23714;
var state_23730__$1 = (function (){var statearr_23739 = state_23730;
(statearr_23739[(7)] = inst_23710);

(statearr_23739[(12)] = inst_23721);

return statearr_23739;
})();
var statearr_23740_23754 = state_23730__$1;
(statearr_23740_23754[(2)] = null);

(statearr_23740_23754[(1)] = (2));


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
});})(c__20515__auto___23748,out))
;
return ((function (switch__20494__auto__,c__20515__auto___23748,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto____0 = (function (){
var statearr_23744 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23744[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto__);

(statearr_23744[(1)] = (1));

return statearr_23744;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto____1 = (function (state_23730){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_23730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e23745){if((e23745 instanceof Object)){
var ex__20498__auto__ = e23745;
var statearr_23746_23755 = state_23730;
(statearr_23746_23755[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23756 = state_23730;
state_23730 = G__23756;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto__ = function(state_23730){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto____1.call(this,state_23730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___23748,out))
})();
var state__20517__auto__ = (function (){var statearr_23747 = f__20516__auto__.call(null);
(statearr_23747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___23748);

return statearr_23747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___23748,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23757,opts){
var map__23761 = p__23757;
var map__23761__$1 = ((((!((map__23761 == null)))?((((map__23761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23761):map__23761);
var eval_body__$1 = cljs.core.get.call(null,map__23761__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18430__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18430__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18430__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23763){var e = e23763;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23764_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23764_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23769){
var vec__23770 = p__23769;
var k = cljs.core.nth.call(null,vec__23770,(0),null);
var v = cljs.core.nth.call(null,vec__23770,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23771){
var vec__23772 = p__23771;
var k = cljs.core.nth.call(null,vec__23772,(0),null);
var v = cljs.core.nth.call(null,vec__23772,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23776,p__23777){
var map__24024 = p__23776;
var map__24024__$1 = ((((!((map__24024 == null)))?((((map__24024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24024):map__24024);
var opts = map__24024__$1;
var before_jsload = cljs.core.get.call(null,map__24024__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24024__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24024__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24025 = p__23777;
var map__24025__$1 = ((((!((map__24025 == null)))?((((map__24025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24025):map__24025);
var msg = map__24025__$1;
var files = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24178){
var state_val_24179 = (state_24178[(1)]);
if((state_val_24179 === (7))){
var inst_24040 = (state_24178[(7)]);
var inst_24041 = (state_24178[(8)]);
var inst_24039 = (state_24178[(9)]);
var inst_24042 = (state_24178[(10)]);
var inst_24047 = cljs.core._nth.call(null,inst_24040,inst_24042);
var inst_24048 = figwheel.client.file_reloading.eval_body.call(null,inst_24047,opts);
var inst_24049 = (inst_24042 + (1));
var tmp24180 = inst_24040;
var tmp24181 = inst_24041;
var tmp24182 = inst_24039;
var inst_24039__$1 = tmp24182;
var inst_24040__$1 = tmp24180;
var inst_24041__$1 = tmp24181;
var inst_24042__$1 = inst_24049;
var state_24178__$1 = (function (){var statearr_24183 = state_24178;
(statearr_24183[(7)] = inst_24040__$1);

(statearr_24183[(8)] = inst_24041__$1);

(statearr_24183[(11)] = inst_24048);

(statearr_24183[(9)] = inst_24039__$1);

(statearr_24183[(10)] = inst_24042__$1);

return statearr_24183;
})();
var statearr_24184_24270 = state_24178__$1;
(statearr_24184_24270[(2)] = null);

(statearr_24184_24270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (20))){
var inst_24082 = (state_24178[(12)]);
var inst_24090 = figwheel.client.file_reloading.sort_files.call(null,inst_24082);
var state_24178__$1 = state_24178;
var statearr_24185_24271 = state_24178__$1;
(statearr_24185_24271[(2)] = inst_24090);

(statearr_24185_24271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (27))){
var state_24178__$1 = state_24178;
var statearr_24186_24272 = state_24178__$1;
(statearr_24186_24272[(2)] = null);

(statearr_24186_24272[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (1))){
var inst_24031 = (state_24178[(13)]);
var inst_24028 = before_jsload.call(null,files);
var inst_24029 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24030 = (function (){return ((function (inst_24031,inst_24028,inst_24029,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23773_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23773_SHARP_);
});
;})(inst_24031,inst_24028,inst_24029,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24031__$1 = cljs.core.filter.call(null,inst_24030,files);
var inst_24032 = cljs.core.not_empty.call(null,inst_24031__$1);
var state_24178__$1 = (function (){var statearr_24187 = state_24178;
(statearr_24187[(14)] = inst_24029);

(statearr_24187[(13)] = inst_24031__$1);

(statearr_24187[(15)] = inst_24028);

return statearr_24187;
})();
if(cljs.core.truth_(inst_24032)){
var statearr_24188_24273 = state_24178__$1;
(statearr_24188_24273[(1)] = (2));

} else {
var statearr_24189_24274 = state_24178__$1;
(statearr_24189_24274[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (24))){
var state_24178__$1 = state_24178;
var statearr_24190_24275 = state_24178__$1;
(statearr_24190_24275[(2)] = null);

(statearr_24190_24275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (39))){
var inst_24132 = (state_24178[(16)]);
var state_24178__$1 = state_24178;
var statearr_24191_24276 = state_24178__$1;
(statearr_24191_24276[(2)] = inst_24132);

(statearr_24191_24276[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (46))){
var inst_24173 = (state_24178[(2)]);
var state_24178__$1 = state_24178;
var statearr_24192_24277 = state_24178__$1;
(statearr_24192_24277[(2)] = inst_24173);

(statearr_24192_24277[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (4))){
var inst_24076 = (state_24178[(2)]);
var inst_24077 = cljs.core.List.EMPTY;
var inst_24078 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24077);
var inst_24079 = (function (){return ((function (inst_24076,inst_24077,inst_24078,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23774_SHARP_){
var and__18430__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23774_SHARP_);
if(cljs.core.truth_(and__18430__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23774_SHARP_));
} else {
return and__18430__auto__;
}
});
;})(inst_24076,inst_24077,inst_24078,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24080 = cljs.core.filter.call(null,inst_24079,files);
var inst_24081 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24082 = cljs.core.concat.call(null,inst_24080,inst_24081);
var state_24178__$1 = (function (){var statearr_24193 = state_24178;
(statearr_24193[(17)] = inst_24078);

(statearr_24193[(18)] = inst_24076);

(statearr_24193[(12)] = inst_24082);

return statearr_24193;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24194_24278 = state_24178__$1;
(statearr_24194_24278[(1)] = (16));

} else {
var statearr_24195_24279 = state_24178__$1;
(statearr_24195_24279[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (15))){
var inst_24066 = (state_24178[(2)]);
var state_24178__$1 = state_24178;
var statearr_24196_24280 = state_24178__$1;
(statearr_24196_24280[(2)] = inst_24066);

(statearr_24196_24280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (21))){
var inst_24092 = (state_24178[(19)]);
var inst_24092__$1 = (state_24178[(2)]);
var inst_24093 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24092__$1);
var state_24178__$1 = (function (){var statearr_24197 = state_24178;
(statearr_24197[(19)] = inst_24092__$1);

return statearr_24197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24178__$1,(22),inst_24093);
} else {
if((state_val_24179 === (31))){
var inst_24176 = (state_24178[(2)]);
var state_24178__$1 = state_24178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24178__$1,inst_24176);
} else {
if((state_val_24179 === (32))){
var inst_24132 = (state_24178[(16)]);
var inst_24137 = inst_24132.cljs$lang$protocol_mask$partition0$;
var inst_24138 = (inst_24137 & (64));
var inst_24139 = inst_24132.cljs$core$ISeq$;
var inst_24140 = (inst_24138) || (inst_24139);
var state_24178__$1 = state_24178;
if(cljs.core.truth_(inst_24140)){
var statearr_24198_24281 = state_24178__$1;
(statearr_24198_24281[(1)] = (35));

} else {
var statearr_24199_24282 = state_24178__$1;
(statearr_24199_24282[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (40))){
var inst_24153 = (state_24178[(20)]);
var inst_24152 = (state_24178[(2)]);
var inst_24153__$1 = cljs.core.get.call(null,inst_24152,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24154 = cljs.core.get.call(null,inst_24152,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24155 = cljs.core.not_empty.call(null,inst_24153__$1);
var state_24178__$1 = (function (){var statearr_24200 = state_24178;
(statearr_24200[(20)] = inst_24153__$1);

(statearr_24200[(21)] = inst_24154);

return statearr_24200;
})();
if(cljs.core.truth_(inst_24155)){
var statearr_24201_24283 = state_24178__$1;
(statearr_24201_24283[(1)] = (41));

} else {
var statearr_24202_24284 = state_24178__$1;
(statearr_24202_24284[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (33))){
var state_24178__$1 = state_24178;
var statearr_24203_24285 = state_24178__$1;
(statearr_24203_24285[(2)] = false);

(statearr_24203_24285[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (13))){
var inst_24052 = (state_24178[(22)]);
var inst_24056 = cljs.core.chunk_first.call(null,inst_24052);
var inst_24057 = cljs.core.chunk_rest.call(null,inst_24052);
var inst_24058 = cljs.core.count.call(null,inst_24056);
var inst_24039 = inst_24057;
var inst_24040 = inst_24056;
var inst_24041 = inst_24058;
var inst_24042 = (0);
var state_24178__$1 = (function (){var statearr_24204 = state_24178;
(statearr_24204[(7)] = inst_24040);

(statearr_24204[(8)] = inst_24041);

(statearr_24204[(9)] = inst_24039);

(statearr_24204[(10)] = inst_24042);

return statearr_24204;
})();
var statearr_24205_24286 = state_24178__$1;
(statearr_24205_24286[(2)] = null);

(statearr_24205_24286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (22))){
var inst_24095 = (state_24178[(23)]);
var inst_24096 = (state_24178[(24)]);
var inst_24092 = (state_24178[(19)]);
var inst_24100 = (state_24178[(25)]);
var inst_24095__$1 = (state_24178[(2)]);
var inst_24096__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24095__$1);
var inst_24097 = (function (){var all_files = inst_24092;
var res_SINGLEQUOTE_ = inst_24095__$1;
var res = inst_24096__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24095,inst_24096,inst_24092,inst_24100,inst_24095__$1,inst_24096__$1,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23775_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23775_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24095,inst_24096,inst_24092,inst_24100,inst_24095__$1,inst_24096__$1,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24098 = cljs.core.filter.call(null,inst_24097,inst_24095__$1);
var inst_24099 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24100__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24099);
var inst_24101 = cljs.core.not_empty.call(null,inst_24100__$1);
var state_24178__$1 = (function (){var statearr_24206 = state_24178;
(statearr_24206[(23)] = inst_24095__$1);

(statearr_24206[(24)] = inst_24096__$1);

(statearr_24206[(26)] = inst_24098);

(statearr_24206[(25)] = inst_24100__$1);

return statearr_24206;
})();
if(cljs.core.truth_(inst_24101)){
var statearr_24207_24287 = state_24178__$1;
(statearr_24207_24287[(1)] = (23));

} else {
var statearr_24208_24288 = state_24178__$1;
(statearr_24208_24288[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (36))){
var state_24178__$1 = state_24178;
var statearr_24209_24289 = state_24178__$1;
(statearr_24209_24289[(2)] = false);

(statearr_24209_24289[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (41))){
var inst_24153 = (state_24178[(20)]);
var inst_24157 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24158 = cljs.core.map.call(null,inst_24157,inst_24153);
var inst_24159 = cljs.core.pr_str.call(null,inst_24158);
var inst_24160 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24159)].join('');
var inst_24161 = figwheel.client.utils.log.call(null,inst_24160);
var state_24178__$1 = state_24178;
var statearr_24210_24290 = state_24178__$1;
(statearr_24210_24290[(2)] = inst_24161);

(statearr_24210_24290[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (43))){
var inst_24154 = (state_24178[(21)]);
var inst_24164 = (state_24178[(2)]);
var inst_24165 = cljs.core.not_empty.call(null,inst_24154);
var state_24178__$1 = (function (){var statearr_24211 = state_24178;
(statearr_24211[(27)] = inst_24164);

return statearr_24211;
})();
if(cljs.core.truth_(inst_24165)){
var statearr_24212_24291 = state_24178__$1;
(statearr_24212_24291[(1)] = (44));

} else {
var statearr_24213_24292 = state_24178__$1;
(statearr_24213_24292[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (29))){
var inst_24095 = (state_24178[(23)]);
var inst_24096 = (state_24178[(24)]);
var inst_24092 = (state_24178[(19)]);
var inst_24132 = (state_24178[(16)]);
var inst_24098 = (state_24178[(26)]);
var inst_24100 = (state_24178[(25)]);
var inst_24128 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24131 = (function (){var all_files = inst_24092;
var res_SINGLEQUOTE_ = inst_24095;
var res = inst_24096;
var files_not_loaded = inst_24098;
var dependencies_that_loaded = inst_24100;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24095,inst_24096,inst_24092,inst_24132,inst_24098,inst_24100,inst_24128,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24130){
var map__24214 = p__24130;
var map__24214__$1 = ((((!((map__24214 == null)))?((((map__24214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24214):map__24214);
var namespace = cljs.core.get.call(null,map__24214__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24095,inst_24096,inst_24092,inst_24132,inst_24098,inst_24100,inst_24128,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24132__$1 = cljs.core.group_by.call(null,inst_24131,inst_24098);
var inst_24134 = (inst_24132__$1 == null);
var inst_24135 = cljs.core.not.call(null,inst_24134);
var state_24178__$1 = (function (){var statearr_24216 = state_24178;
(statearr_24216[(28)] = inst_24128);

(statearr_24216[(16)] = inst_24132__$1);

return statearr_24216;
})();
if(inst_24135){
var statearr_24217_24293 = state_24178__$1;
(statearr_24217_24293[(1)] = (32));

} else {
var statearr_24218_24294 = state_24178__$1;
(statearr_24218_24294[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (44))){
var inst_24154 = (state_24178[(21)]);
var inst_24167 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24154);
var inst_24168 = cljs.core.pr_str.call(null,inst_24167);
var inst_24169 = [cljs.core.str("not required: "),cljs.core.str(inst_24168)].join('');
var inst_24170 = figwheel.client.utils.log.call(null,inst_24169);
var state_24178__$1 = state_24178;
var statearr_24219_24295 = state_24178__$1;
(statearr_24219_24295[(2)] = inst_24170);

(statearr_24219_24295[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (6))){
var inst_24073 = (state_24178[(2)]);
var state_24178__$1 = state_24178;
var statearr_24220_24296 = state_24178__$1;
(statearr_24220_24296[(2)] = inst_24073);

(statearr_24220_24296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (28))){
var inst_24098 = (state_24178[(26)]);
var inst_24125 = (state_24178[(2)]);
var inst_24126 = cljs.core.not_empty.call(null,inst_24098);
var state_24178__$1 = (function (){var statearr_24221 = state_24178;
(statearr_24221[(29)] = inst_24125);

return statearr_24221;
})();
if(cljs.core.truth_(inst_24126)){
var statearr_24222_24297 = state_24178__$1;
(statearr_24222_24297[(1)] = (29));

} else {
var statearr_24223_24298 = state_24178__$1;
(statearr_24223_24298[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (25))){
var inst_24096 = (state_24178[(24)]);
var inst_24112 = (state_24178[(2)]);
var inst_24113 = cljs.core.not_empty.call(null,inst_24096);
var state_24178__$1 = (function (){var statearr_24224 = state_24178;
(statearr_24224[(30)] = inst_24112);

return statearr_24224;
})();
if(cljs.core.truth_(inst_24113)){
var statearr_24225_24299 = state_24178__$1;
(statearr_24225_24299[(1)] = (26));

} else {
var statearr_24226_24300 = state_24178__$1;
(statearr_24226_24300[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (34))){
var inst_24147 = (state_24178[(2)]);
var state_24178__$1 = state_24178;
if(cljs.core.truth_(inst_24147)){
var statearr_24227_24301 = state_24178__$1;
(statearr_24227_24301[(1)] = (38));

} else {
var statearr_24228_24302 = state_24178__$1;
(statearr_24228_24302[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (17))){
var state_24178__$1 = state_24178;
var statearr_24229_24303 = state_24178__$1;
(statearr_24229_24303[(2)] = recompile_dependents);

(statearr_24229_24303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (3))){
var state_24178__$1 = state_24178;
var statearr_24230_24304 = state_24178__$1;
(statearr_24230_24304[(2)] = null);

(statearr_24230_24304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (12))){
var inst_24069 = (state_24178[(2)]);
var state_24178__$1 = state_24178;
var statearr_24231_24305 = state_24178__$1;
(statearr_24231_24305[(2)] = inst_24069);

(statearr_24231_24305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (2))){
var inst_24031 = (state_24178[(13)]);
var inst_24038 = cljs.core.seq.call(null,inst_24031);
var inst_24039 = inst_24038;
var inst_24040 = null;
var inst_24041 = (0);
var inst_24042 = (0);
var state_24178__$1 = (function (){var statearr_24232 = state_24178;
(statearr_24232[(7)] = inst_24040);

(statearr_24232[(8)] = inst_24041);

(statearr_24232[(9)] = inst_24039);

(statearr_24232[(10)] = inst_24042);

return statearr_24232;
})();
var statearr_24233_24306 = state_24178__$1;
(statearr_24233_24306[(2)] = null);

(statearr_24233_24306[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (23))){
var inst_24095 = (state_24178[(23)]);
var inst_24096 = (state_24178[(24)]);
var inst_24092 = (state_24178[(19)]);
var inst_24098 = (state_24178[(26)]);
var inst_24100 = (state_24178[(25)]);
var inst_24103 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24105 = (function (){var all_files = inst_24092;
var res_SINGLEQUOTE_ = inst_24095;
var res = inst_24096;
var files_not_loaded = inst_24098;
var dependencies_that_loaded = inst_24100;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24095,inst_24096,inst_24092,inst_24098,inst_24100,inst_24103,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24104){
var map__24234 = p__24104;
var map__24234__$1 = ((((!((map__24234 == null)))?((((map__24234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24234):map__24234);
var request_url = cljs.core.get.call(null,map__24234__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24095,inst_24096,inst_24092,inst_24098,inst_24100,inst_24103,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24106 = cljs.core.reverse.call(null,inst_24100);
var inst_24107 = cljs.core.map.call(null,inst_24105,inst_24106);
var inst_24108 = cljs.core.pr_str.call(null,inst_24107);
var inst_24109 = figwheel.client.utils.log.call(null,inst_24108);
var state_24178__$1 = (function (){var statearr_24236 = state_24178;
(statearr_24236[(31)] = inst_24103);

return statearr_24236;
})();
var statearr_24237_24307 = state_24178__$1;
(statearr_24237_24307[(2)] = inst_24109);

(statearr_24237_24307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (35))){
var state_24178__$1 = state_24178;
var statearr_24238_24308 = state_24178__$1;
(statearr_24238_24308[(2)] = true);

(statearr_24238_24308[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (19))){
var inst_24082 = (state_24178[(12)]);
var inst_24088 = figwheel.client.file_reloading.expand_files.call(null,inst_24082);
var state_24178__$1 = state_24178;
var statearr_24239_24309 = state_24178__$1;
(statearr_24239_24309[(2)] = inst_24088);

(statearr_24239_24309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (11))){
var state_24178__$1 = state_24178;
var statearr_24240_24310 = state_24178__$1;
(statearr_24240_24310[(2)] = null);

(statearr_24240_24310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (9))){
var inst_24071 = (state_24178[(2)]);
var state_24178__$1 = state_24178;
var statearr_24241_24311 = state_24178__$1;
(statearr_24241_24311[(2)] = inst_24071);

(statearr_24241_24311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (5))){
var inst_24041 = (state_24178[(8)]);
var inst_24042 = (state_24178[(10)]);
var inst_24044 = (inst_24042 < inst_24041);
var inst_24045 = inst_24044;
var state_24178__$1 = state_24178;
if(cljs.core.truth_(inst_24045)){
var statearr_24242_24312 = state_24178__$1;
(statearr_24242_24312[(1)] = (7));

} else {
var statearr_24243_24313 = state_24178__$1;
(statearr_24243_24313[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (14))){
var inst_24052 = (state_24178[(22)]);
var inst_24061 = cljs.core.first.call(null,inst_24052);
var inst_24062 = figwheel.client.file_reloading.eval_body.call(null,inst_24061,opts);
var inst_24063 = cljs.core.next.call(null,inst_24052);
var inst_24039 = inst_24063;
var inst_24040 = null;
var inst_24041 = (0);
var inst_24042 = (0);
var state_24178__$1 = (function (){var statearr_24244 = state_24178;
(statearr_24244[(7)] = inst_24040);

(statearr_24244[(8)] = inst_24041);

(statearr_24244[(32)] = inst_24062);

(statearr_24244[(9)] = inst_24039);

(statearr_24244[(10)] = inst_24042);

return statearr_24244;
})();
var statearr_24245_24314 = state_24178__$1;
(statearr_24245_24314[(2)] = null);

(statearr_24245_24314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (45))){
var state_24178__$1 = state_24178;
var statearr_24246_24315 = state_24178__$1;
(statearr_24246_24315[(2)] = null);

(statearr_24246_24315[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (26))){
var inst_24095 = (state_24178[(23)]);
var inst_24096 = (state_24178[(24)]);
var inst_24092 = (state_24178[(19)]);
var inst_24098 = (state_24178[(26)]);
var inst_24100 = (state_24178[(25)]);
var inst_24115 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24117 = (function (){var all_files = inst_24092;
var res_SINGLEQUOTE_ = inst_24095;
var res = inst_24096;
var files_not_loaded = inst_24098;
var dependencies_that_loaded = inst_24100;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24095,inst_24096,inst_24092,inst_24098,inst_24100,inst_24115,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24116){
var map__24247 = p__24116;
var map__24247__$1 = ((((!((map__24247 == null)))?((((map__24247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24247):map__24247);
var namespace = cljs.core.get.call(null,map__24247__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24247__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24095,inst_24096,inst_24092,inst_24098,inst_24100,inst_24115,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24118 = cljs.core.map.call(null,inst_24117,inst_24096);
var inst_24119 = cljs.core.pr_str.call(null,inst_24118);
var inst_24120 = figwheel.client.utils.log.call(null,inst_24119);
var inst_24121 = (function (){var all_files = inst_24092;
var res_SINGLEQUOTE_ = inst_24095;
var res = inst_24096;
var files_not_loaded = inst_24098;
var dependencies_that_loaded = inst_24100;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24095,inst_24096,inst_24092,inst_24098,inst_24100,inst_24115,inst_24117,inst_24118,inst_24119,inst_24120,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24095,inst_24096,inst_24092,inst_24098,inst_24100,inst_24115,inst_24117,inst_24118,inst_24119,inst_24120,state_val_24179,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24122 = setTimeout(inst_24121,(10));
var state_24178__$1 = (function (){var statearr_24249 = state_24178;
(statearr_24249[(33)] = inst_24120);

(statearr_24249[(34)] = inst_24115);

return statearr_24249;
})();
var statearr_24250_24316 = state_24178__$1;
(statearr_24250_24316[(2)] = inst_24122);

(statearr_24250_24316[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (16))){
var state_24178__$1 = state_24178;
var statearr_24251_24317 = state_24178__$1;
(statearr_24251_24317[(2)] = reload_dependents);

(statearr_24251_24317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (38))){
var inst_24132 = (state_24178[(16)]);
var inst_24149 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24132);
var state_24178__$1 = state_24178;
var statearr_24252_24318 = state_24178__$1;
(statearr_24252_24318[(2)] = inst_24149);

(statearr_24252_24318[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (30))){
var state_24178__$1 = state_24178;
var statearr_24253_24319 = state_24178__$1;
(statearr_24253_24319[(2)] = null);

(statearr_24253_24319[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (10))){
var inst_24052 = (state_24178[(22)]);
var inst_24054 = cljs.core.chunked_seq_QMARK_.call(null,inst_24052);
var state_24178__$1 = state_24178;
if(inst_24054){
var statearr_24254_24320 = state_24178__$1;
(statearr_24254_24320[(1)] = (13));

} else {
var statearr_24255_24321 = state_24178__$1;
(statearr_24255_24321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (18))){
var inst_24086 = (state_24178[(2)]);
var state_24178__$1 = state_24178;
if(cljs.core.truth_(inst_24086)){
var statearr_24256_24322 = state_24178__$1;
(statearr_24256_24322[(1)] = (19));

} else {
var statearr_24257_24323 = state_24178__$1;
(statearr_24257_24323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (42))){
var state_24178__$1 = state_24178;
var statearr_24258_24324 = state_24178__$1;
(statearr_24258_24324[(2)] = null);

(statearr_24258_24324[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (37))){
var inst_24144 = (state_24178[(2)]);
var state_24178__$1 = state_24178;
var statearr_24259_24325 = state_24178__$1;
(statearr_24259_24325[(2)] = inst_24144);

(statearr_24259_24325[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24179 === (8))){
var inst_24052 = (state_24178[(22)]);
var inst_24039 = (state_24178[(9)]);
var inst_24052__$1 = cljs.core.seq.call(null,inst_24039);
var state_24178__$1 = (function (){var statearr_24260 = state_24178;
(statearr_24260[(22)] = inst_24052__$1);

return statearr_24260;
})();
if(inst_24052__$1){
var statearr_24261_24326 = state_24178__$1;
(statearr_24261_24326[(1)] = (10));

} else {
var statearr_24262_24327 = state_24178__$1;
(statearr_24262_24327[(1)] = (11));

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
});})(c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20494__auto__,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto____0 = (function (){
var statearr_24266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24266[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto__);

(statearr_24266[(1)] = (1));

return statearr_24266;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto____1 = (function (state_24178){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_24178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e24267){if((e24267 instanceof Object)){
var ex__20498__auto__ = e24267;
var statearr_24268_24328 = state_24178;
(statearr_24268_24328[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24329 = state_24178;
state_24178 = G__24329;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto__ = function(state_24178){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto____1.call(this,state_24178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20517__auto__ = (function (){var statearr_24269 = f__20516__auto__.call(null);
(statearr_24269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto__);

return statearr_24269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto__,map__24024,map__24024__$1,opts,before_jsload,on_jsload,reload_dependents,map__24025,map__24025__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20515__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24332,link){
var map__24335 = p__24332;
var map__24335__$1 = ((((!((map__24335 == null)))?((((map__24335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24335):map__24335);
var file = cljs.core.get.call(null,map__24335__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__24335,map__24335__$1,file){
return (function (p1__24330_SHARP_,p2__24331_SHARP_){
if(cljs.core._EQ_.call(null,p1__24330_SHARP_,p2__24331_SHARP_)){
return p1__24330_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__24335,map__24335__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24341){
var map__24342 = p__24341;
var map__24342__$1 = ((((!((map__24342 == null)))?((((map__24342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24342):map__24342);
var match_length = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24337_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24337_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24344 = [];
var len__19512__auto___24347 = arguments.length;
var i__19513__auto___24348 = (0);
while(true){
if((i__19513__auto___24348 < len__19512__auto___24347)){
args24344.push((arguments[i__19513__auto___24348]));

var G__24349 = (i__19513__auto___24348 + (1));
i__19513__auto___24348 = G__24349;
continue;
} else {
}
break;
}

var G__24346 = args24344.length;
switch (G__24346) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24344.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24351_SHARP_,p2__24352_SHARP_){
return cljs.core.assoc.call(null,p1__24351_SHARP_,cljs.core.get.call(null,p2__24352_SHARP_,key),p2__24352_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24353){
var map__24356 = p__24353;
var map__24356__$1 = ((((!((map__24356 == null)))?((((map__24356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24356):map__24356);
var f_data = map__24356__$1;
var file = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24358,files_msg){
var map__24365 = p__24358;
var map__24365__$1 = ((((!((map__24365 == null)))?((((map__24365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24365):map__24365);
var opts = map__24365__$1;
var on_cssload = cljs.core.get.call(null,map__24365__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24367_24371 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24368_24372 = null;
var count__24369_24373 = (0);
var i__24370_24374 = (0);
while(true){
if((i__24370_24374 < count__24369_24373)){
var f_24375 = cljs.core._nth.call(null,chunk__24368_24372,i__24370_24374);
figwheel.client.file_reloading.reload_css_file.call(null,f_24375);

var G__24376 = seq__24367_24371;
var G__24377 = chunk__24368_24372;
var G__24378 = count__24369_24373;
var G__24379 = (i__24370_24374 + (1));
seq__24367_24371 = G__24376;
chunk__24368_24372 = G__24377;
count__24369_24373 = G__24378;
i__24370_24374 = G__24379;
continue;
} else {
var temp__4657__auto___24380 = cljs.core.seq.call(null,seq__24367_24371);
if(temp__4657__auto___24380){
var seq__24367_24381__$1 = temp__4657__auto___24380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24367_24381__$1)){
var c__19253__auto___24382 = cljs.core.chunk_first.call(null,seq__24367_24381__$1);
var G__24383 = cljs.core.chunk_rest.call(null,seq__24367_24381__$1);
var G__24384 = c__19253__auto___24382;
var G__24385 = cljs.core.count.call(null,c__19253__auto___24382);
var G__24386 = (0);
seq__24367_24371 = G__24383;
chunk__24368_24372 = G__24384;
count__24369_24373 = G__24385;
i__24370_24374 = G__24386;
continue;
} else {
var f_24387 = cljs.core.first.call(null,seq__24367_24381__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24387);

var G__24388 = cljs.core.next.call(null,seq__24367_24381__$1);
var G__24389 = null;
var G__24390 = (0);
var G__24391 = (0);
seq__24367_24371 = G__24388;
chunk__24368_24372 = G__24389;
count__24369_24373 = G__24390;
i__24370_24374 = G__24391;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24365,map__24365__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24365,map__24365__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1465245605973