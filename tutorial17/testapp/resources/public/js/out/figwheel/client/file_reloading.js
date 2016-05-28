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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35793_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35793_SHARP_));
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
var seq__35798 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35799 = null;
var count__35800 = (0);
var i__35801 = (0);
while(true){
if((i__35801 < count__35800)){
var n = cljs.core._nth.call(null,chunk__35799,i__35801);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35802 = seq__35798;
var G__35803 = chunk__35799;
var G__35804 = count__35800;
var G__35805 = (i__35801 + (1));
seq__35798 = G__35802;
chunk__35799 = G__35803;
count__35800 = G__35804;
i__35801 = G__35805;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35798);
if(temp__4657__auto__){
var seq__35798__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35798__$1)){
var c__19253__auto__ = cljs.core.chunk_first.call(null,seq__35798__$1);
var G__35806 = cljs.core.chunk_rest.call(null,seq__35798__$1);
var G__35807 = c__19253__auto__;
var G__35808 = cljs.core.count.call(null,c__19253__auto__);
var G__35809 = (0);
seq__35798 = G__35806;
chunk__35799 = G__35807;
count__35800 = G__35808;
i__35801 = G__35809;
continue;
} else {
var n = cljs.core.first.call(null,seq__35798__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35810 = cljs.core.next.call(null,seq__35798__$1);
var G__35811 = null;
var G__35812 = (0);
var G__35813 = (0);
seq__35798 = G__35810;
chunk__35799 = G__35811;
count__35800 = G__35812;
i__35801 = G__35813;
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

var seq__35852_35859 = cljs.core.seq.call(null,deps);
var chunk__35853_35860 = null;
var count__35854_35861 = (0);
var i__35855_35862 = (0);
while(true){
if((i__35855_35862 < count__35854_35861)){
var dep_35863 = cljs.core._nth.call(null,chunk__35853_35860,i__35855_35862);
topo_sort_helper_STAR_.call(null,dep_35863,(depth + (1)),state);

var G__35864 = seq__35852_35859;
var G__35865 = chunk__35853_35860;
var G__35866 = count__35854_35861;
var G__35867 = (i__35855_35862 + (1));
seq__35852_35859 = G__35864;
chunk__35853_35860 = G__35865;
count__35854_35861 = G__35866;
i__35855_35862 = G__35867;
continue;
} else {
var temp__4657__auto___35868 = cljs.core.seq.call(null,seq__35852_35859);
if(temp__4657__auto___35868){
var seq__35852_35869__$1 = temp__4657__auto___35868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35852_35869__$1)){
var c__19253__auto___35870 = cljs.core.chunk_first.call(null,seq__35852_35869__$1);
var G__35871 = cljs.core.chunk_rest.call(null,seq__35852_35869__$1);
var G__35872 = c__19253__auto___35870;
var G__35873 = cljs.core.count.call(null,c__19253__auto___35870);
var G__35874 = (0);
seq__35852_35859 = G__35871;
chunk__35853_35860 = G__35872;
count__35854_35861 = G__35873;
i__35855_35862 = G__35874;
continue;
} else {
var dep_35875 = cljs.core.first.call(null,seq__35852_35869__$1);
topo_sort_helper_STAR_.call(null,dep_35875,(depth + (1)),state);

var G__35876 = cljs.core.next.call(null,seq__35852_35869__$1);
var G__35877 = null;
var G__35878 = (0);
var G__35879 = (0);
seq__35852_35859 = G__35876;
chunk__35853_35860 = G__35877;
count__35854_35861 = G__35878;
i__35855_35862 = G__35879;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35856){
var vec__35858 = p__35856;
var x = cljs.core.nth.call(null,vec__35858,(0),null);
var xs = cljs.core.nthnext.call(null,vec__35858,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35858,x,xs,get_deps__$1){
return (function (p1__35814_SHARP_){
return clojure.set.difference.call(null,p1__35814_SHARP_,x);
});})(vec__35858,x,xs,get_deps__$1))
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
var seq__35892 = cljs.core.seq.call(null,provides);
var chunk__35893 = null;
var count__35894 = (0);
var i__35895 = (0);
while(true){
if((i__35895 < count__35894)){
var prov = cljs.core._nth.call(null,chunk__35893,i__35895);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35896_35904 = cljs.core.seq.call(null,requires);
var chunk__35897_35905 = null;
var count__35898_35906 = (0);
var i__35899_35907 = (0);
while(true){
if((i__35899_35907 < count__35898_35906)){
var req_35908 = cljs.core._nth.call(null,chunk__35897_35905,i__35899_35907);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35908,prov);

var G__35909 = seq__35896_35904;
var G__35910 = chunk__35897_35905;
var G__35911 = count__35898_35906;
var G__35912 = (i__35899_35907 + (1));
seq__35896_35904 = G__35909;
chunk__35897_35905 = G__35910;
count__35898_35906 = G__35911;
i__35899_35907 = G__35912;
continue;
} else {
var temp__4657__auto___35913 = cljs.core.seq.call(null,seq__35896_35904);
if(temp__4657__auto___35913){
var seq__35896_35914__$1 = temp__4657__auto___35913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35896_35914__$1)){
var c__19253__auto___35915 = cljs.core.chunk_first.call(null,seq__35896_35914__$1);
var G__35916 = cljs.core.chunk_rest.call(null,seq__35896_35914__$1);
var G__35917 = c__19253__auto___35915;
var G__35918 = cljs.core.count.call(null,c__19253__auto___35915);
var G__35919 = (0);
seq__35896_35904 = G__35916;
chunk__35897_35905 = G__35917;
count__35898_35906 = G__35918;
i__35899_35907 = G__35919;
continue;
} else {
var req_35920 = cljs.core.first.call(null,seq__35896_35914__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35920,prov);

var G__35921 = cljs.core.next.call(null,seq__35896_35914__$1);
var G__35922 = null;
var G__35923 = (0);
var G__35924 = (0);
seq__35896_35904 = G__35921;
chunk__35897_35905 = G__35922;
count__35898_35906 = G__35923;
i__35899_35907 = G__35924;
continue;
}
} else {
}
}
break;
}

var G__35925 = seq__35892;
var G__35926 = chunk__35893;
var G__35927 = count__35894;
var G__35928 = (i__35895 + (1));
seq__35892 = G__35925;
chunk__35893 = G__35926;
count__35894 = G__35927;
i__35895 = G__35928;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35892);
if(temp__4657__auto__){
var seq__35892__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35892__$1)){
var c__19253__auto__ = cljs.core.chunk_first.call(null,seq__35892__$1);
var G__35929 = cljs.core.chunk_rest.call(null,seq__35892__$1);
var G__35930 = c__19253__auto__;
var G__35931 = cljs.core.count.call(null,c__19253__auto__);
var G__35932 = (0);
seq__35892 = G__35929;
chunk__35893 = G__35930;
count__35894 = G__35931;
i__35895 = G__35932;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35892__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35900_35933 = cljs.core.seq.call(null,requires);
var chunk__35901_35934 = null;
var count__35902_35935 = (0);
var i__35903_35936 = (0);
while(true){
if((i__35903_35936 < count__35902_35935)){
var req_35937 = cljs.core._nth.call(null,chunk__35901_35934,i__35903_35936);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35937,prov);

var G__35938 = seq__35900_35933;
var G__35939 = chunk__35901_35934;
var G__35940 = count__35902_35935;
var G__35941 = (i__35903_35936 + (1));
seq__35900_35933 = G__35938;
chunk__35901_35934 = G__35939;
count__35902_35935 = G__35940;
i__35903_35936 = G__35941;
continue;
} else {
var temp__4657__auto___35942__$1 = cljs.core.seq.call(null,seq__35900_35933);
if(temp__4657__auto___35942__$1){
var seq__35900_35943__$1 = temp__4657__auto___35942__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35900_35943__$1)){
var c__19253__auto___35944 = cljs.core.chunk_first.call(null,seq__35900_35943__$1);
var G__35945 = cljs.core.chunk_rest.call(null,seq__35900_35943__$1);
var G__35946 = c__19253__auto___35944;
var G__35947 = cljs.core.count.call(null,c__19253__auto___35944);
var G__35948 = (0);
seq__35900_35933 = G__35945;
chunk__35901_35934 = G__35946;
count__35902_35935 = G__35947;
i__35903_35936 = G__35948;
continue;
} else {
var req_35949 = cljs.core.first.call(null,seq__35900_35943__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35949,prov);

var G__35950 = cljs.core.next.call(null,seq__35900_35943__$1);
var G__35951 = null;
var G__35952 = (0);
var G__35953 = (0);
seq__35900_35933 = G__35950;
chunk__35901_35934 = G__35951;
count__35902_35935 = G__35952;
i__35903_35936 = G__35953;
continue;
}
} else {
}
}
break;
}

var G__35954 = cljs.core.next.call(null,seq__35892__$1);
var G__35955 = null;
var G__35956 = (0);
var G__35957 = (0);
seq__35892 = G__35954;
chunk__35893 = G__35955;
count__35894 = G__35956;
i__35895 = G__35957;
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
var seq__35962_35966 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35963_35967 = null;
var count__35964_35968 = (0);
var i__35965_35969 = (0);
while(true){
if((i__35965_35969 < count__35964_35968)){
var ns_35970 = cljs.core._nth.call(null,chunk__35963_35967,i__35965_35969);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35970);

var G__35971 = seq__35962_35966;
var G__35972 = chunk__35963_35967;
var G__35973 = count__35964_35968;
var G__35974 = (i__35965_35969 + (1));
seq__35962_35966 = G__35971;
chunk__35963_35967 = G__35972;
count__35964_35968 = G__35973;
i__35965_35969 = G__35974;
continue;
} else {
var temp__4657__auto___35975 = cljs.core.seq.call(null,seq__35962_35966);
if(temp__4657__auto___35975){
var seq__35962_35976__$1 = temp__4657__auto___35975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35962_35976__$1)){
var c__19253__auto___35977 = cljs.core.chunk_first.call(null,seq__35962_35976__$1);
var G__35978 = cljs.core.chunk_rest.call(null,seq__35962_35976__$1);
var G__35979 = c__19253__auto___35977;
var G__35980 = cljs.core.count.call(null,c__19253__auto___35977);
var G__35981 = (0);
seq__35962_35966 = G__35978;
chunk__35963_35967 = G__35979;
count__35964_35968 = G__35980;
i__35965_35969 = G__35981;
continue;
} else {
var ns_35982 = cljs.core.first.call(null,seq__35962_35976__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35982);

var G__35983 = cljs.core.next.call(null,seq__35962_35976__$1);
var G__35984 = null;
var G__35985 = (0);
var G__35986 = (0);
seq__35962_35966 = G__35983;
chunk__35963_35967 = G__35984;
count__35964_35968 = G__35985;
i__35965_35969 = G__35986;
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
var G__35987__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35988__i = 0, G__35988__a = new Array(arguments.length -  0);
while (G__35988__i < G__35988__a.length) {G__35988__a[G__35988__i] = arguments[G__35988__i + 0]; ++G__35988__i;}
  args = new cljs.core.IndexedSeq(G__35988__a,0);
} 
return G__35987__delegate.call(this,args);};
G__35987.cljs$lang$maxFixedArity = 0;
G__35987.cljs$lang$applyTo = (function (arglist__35989){
var args = cljs.core.seq(arglist__35989);
return G__35987__delegate(args);
});
G__35987.cljs$core$IFn$_invoke$arity$variadic = G__35987__delegate;
return G__35987;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35991 = cljs.core._EQ_;
var expr__35992 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35991.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35992))){
var path_parts = ((function (pred__35991,expr__35992){
return (function (p1__35990_SHARP_){
return clojure.string.split.call(null,p1__35990_SHARP_,/[\/\\]/);
});})(pred__35991,expr__35992))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35991,expr__35992){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35994){if((e35994 instanceof Error)){
var e = e35994;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35994;

}
}})());
});
;})(path_parts,sep,root,pred__35991,expr__35992))
} else {
if(cljs.core.truth_(pred__35991.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35992))){
return ((function (pred__35991,expr__35992){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__35991,expr__35992){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35991,expr__35992))
);

return deferred.addErrback(((function (deferred,pred__35991,expr__35992){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35991,expr__35992))
);
});
;})(pred__35991,expr__35992))
} else {
return ((function (pred__35991,expr__35992){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35991,expr__35992))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35995,callback){
var map__35998 = p__35995;
var map__35998__$1 = ((((!((map__35998 == null)))?((((map__35998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35998):map__35998);
var file_msg = map__35998__$1;
var request_url = cljs.core.get.call(null,map__35998__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35998,map__35998__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35998,map__35998__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto__){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto__){
return (function (state_36022){
var state_val_36023 = (state_36022[(1)]);
if((state_val_36023 === (7))){
var inst_36018 = (state_36022[(2)]);
var state_36022__$1 = state_36022;
var statearr_36024_36044 = state_36022__$1;
(statearr_36024_36044[(2)] = inst_36018);

(statearr_36024_36044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (1))){
var state_36022__$1 = state_36022;
var statearr_36025_36045 = state_36022__$1;
(statearr_36025_36045[(2)] = null);

(statearr_36025_36045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (4))){
var inst_36002 = (state_36022[(7)]);
var inst_36002__$1 = (state_36022[(2)]);
var state_36022__$1 = (function (){var statearr_36026 = state_36022;
(statearr_36026[(7)] = inst_36002__$1);

return statearr_36026;
})();
if(cljs.core.truth_(inst_36002__$1)){
var statearr_36027_36046 = state_36022__$1;
(statearr_36027_36046[(1)] = (5));

} else {
var statearr_36028_36047 = state_36022__$1;
(statearr_36028_36047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (6))){
var state_36022__$1 = state_36022;
var statearr_36029_36048 = state_36022__$1;
(statearr_36029_36048[(2)] = null);

(statearr_36029_36048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (3))){
var inst_36020 = (state_36022[(2)]);
var state_36022__$1 = state_36022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36022__$1,inst_36020);
} else {
if((state_val_36023 === (2))){
var state_36022__$1 = state_36022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36022__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36023 === (11))){
var inst_36014 = (state_36022[(2)]);
var state_36022__$1 = (function (){var statearr_36030 = state_36022;
(statearr_36030[(8)] = inst_36014);

return statearr_36030;
})();
var statearr_36031_36049 = state_36022__$1;
(statearr_36031_36049[(2)] = null);

(statearr_36031_36049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (9))){
var inst_36008 = (state_36022[(9)]);
var inst_36006 = (state_36022[(10)]);
var inst_36010 = inst_36008.call(null,inst_36006);
var state_36022__$1 = state_36022;
var statearr_36032_36050 = state_36022__$1;
(statearr_36032_36050[(2)] = inst_36010);

(statearr_36032_36050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (5))){
var inst_36002 = (state_36022[(7)]);
var inst_36004 = figwheel.client.file_reloading.blocking_load.call(null,inst_36002);
var state_36022__$1 = state_36022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36022__$1,(8),inst_36004);
} else {
if((state_val_36023 === (10))){
var inst_36006 = (state_36022[(10)]);
var inst_36012 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36006);
var state_36022__$1 = state_36022;
var statearr_36033_36051 = state_36022__$1;
(statearr_36033_36051[(2)] = inst_36012);

(statearr_36033_36051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (8))){
var inst_36008 = (state_36022[(9)]);
var inst_36002 = (state_36022[(7)]);
var inst_36006 = (state_36022[(2)]);
var inst_36007 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36008__$1 = cljs.core.get.call(null,inst_36007,inst_36002);
var state_36022__$1 = (function (){var statearr_36034 = state_36022;
(statearr_36034[(9)] = inst_36008__$1);

(statearr_36034[(10)] = inst_36006);

return statearr_36034;
})();
if(cljs.core.truth_(inst_36008__$1)){
var statearr_36035_36052 = state_36022__$1;
(statearr_36035_36052[(1)] = (9));

} else {
var statearr_36036_36053 = state_36022__$1;
(statearr_36036_36053[(1)] = (10));

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
});})(c__20609__auto__))
;
return ((function (switch__20497__auto__,c__20609__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20498__auto__ = null;
var figwheel$client$file_reloading$state_machine__20498__auto____0 = (function (){
var statearr_36040 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36040[(0)] = figwheel$client$file_reloading$state_machine__20498__auto__);

(statearr_36040[(1)] = (1));

return statearr_36040;
});
var figwheel$client$file_reloading$state_machine__20498__auto____1 = (function (state_36022){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_36022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e36041){if((e36041 instanceof Object)){
var ex__20501__auto__ = e36041;
var statearr_36042_36054 = state_36022;
(statearr_36042_36054[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36055 = state_36022;
state_36022 = G__36055;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20498__auto__ = function(state_36022){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20498__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20498__auto____1.call(this,state_36022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20498__auto____0;
figwheel$client$file_reloading$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20498__auto____1;
return figwheel$client$file_reloading$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto__))
})();
var state__20611__auto__ = (function (){var statearr_36043 = f__20610__auto__.call(null);
(statearr_36043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto__);

return statearr_36043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto__))
);

return c__20609__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36056,callback){
var map__36059 = p__36056;
var map__36059__$1 = ((((!((map__36059 == null)))?((((map__36059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36059):map__36059);
var file_msg = map__36059__$1;
var namespace = cljs.core.get.call(null,map__36059__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36059,map__36059__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36059,map__36059__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36061){
var map__36064 = p__36061;
var map__36064__$1 = ((((!((map__36064 == null)))?((((map__36064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36064):map__36064);
var file_msg = map__36064__$1;
var namespace = cljs.core.get.call(null,map__36064__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36066,callback){
var map__36069 = p__36066;
var map__36069__$1 = ((((!((map__36069 == null)))?((((map__36069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36069):map__36069);
var file_msg = map__36069__$1;
var request_url = cljs.core.get.call(null,map__36069__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36069__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20609__auto___36157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___36157,out){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___36157,out){
return (function (state_36139){
var state_val_36140 = (state_36139[(1)]);
if((state_val_36140 === (1))){
var inst_36117 = cljs.core.nth.call(null,files,(0),null);
var inst_36118 = cljs.core.nthnext.call(null,files,(1));
var inst_36119 = files;
var state_36139__$1 = (function (){var statearr_36141 = state_36139;
(statearr_36141[(7)] = inst_36119);

(statearr_36141[(8)] = inst_36117);

(statearr_36141[(9)] = inst_36118);

return statearr_36141;
})();
var statearr_36142_36158 = state_36139__$1;
(statearr_36142_36158[(2)] = null);

(statearr_36142_36158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36140 === (2))){
var inst_36122 = (state_36139[(10)]);
var inst_36119 = (state_36139[(7)]);
var inst_36122__$1 = cljs.core.nth.call(null,inst_36119,(0),null);
var inst_36123 = cljs.core.nthnext.call(null,inst_36119,(1));
var inst_36124 = (inst_36122__$1 == null);
var inst_36125 = cljs.core.not.call(null,inst_36124);
var state_36139__$1 = (function (){var statearr_36143 = state_36139;
(statearr_36143[(10)] = inst_36122__$1);

(statearr_36143[(11)] = inst_36123);

return statearr_36143;
})();
if(inst_36125){
var statearr_36144_36159 = state_36139__$1;
(statearr_36144_36159[(1)] = (4));

} else {
var statearr_36145_36160 = state_36139__$1;
(statearr_36145_36160[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36140 === (3))){
var inst_36137 = (state_36139[(2)]);
var state_36139__$1 = state_36139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36139__$1,inst_36137);
} else {
if((state_val_36140 === (4))){
var inst_36122 = (state_36139[(10)]);
var inst_36127 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36122);
var state_36139__$1 = state_36139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36139__$1,(7),inst_36127);
} else {
if((state_val_36140 === (5))){
var inst_36133 = cljs.core.async.close_BANG_.call(null,out);
var state_36139__$1 = state_36139;
var statearr_36146_36161 = state_36139__$1;
(statearr_36146_36161[(2)] = inst_36133);

(statearr_36146_36161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36140 === (6))){
var inst_36135 = (state_36139[(2)]);
var state_36139__$1 = state_36139;
var statearr_36147_36162 = state_36139__$1;
(statearr_36147_36162[(2)] = inst_36135);

(statearr_36147_36162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36140 === (7))){
var inst_36123 = (state_36139[(11)]);
var inst_36129 = (state_36139[(2)]);
var inst_36130 = cljs.core.async.put_BANG_.call(null,out,inst_36129);
var inst_36119 = inst_36123;
var state_36139__$1 = (function (){var statearr_36148 = state_36139;
(statearr_36148[(7)] = inst_36119);

(statearr_36148[(12)] = inst_36130);

return statearr_36148;
})();
var statearr_36149_36163 = state_36139__$1;
(statearr_36149_36163[(2)] = null);

(statearr_36149_36163[(1)] = (2));


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
});})(c__20609__auto___36157,out))
;
return ((function (switch__20497__auto__,c__20609__auto___36157,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto____0 = (function (){
var statearr_36153 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36153[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto__);

(statearr_36153[(1)] = (1));

return statearr_36153;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto____1 = (function (state_36139){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_36139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e36154){if((e36154 instanceof Object)){
var ex__20501__auto__ = e36154;
var statearr_36155_36164 = state_36139;
(statearr_36155_36164[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36165 = state_36139;
state_36139 = G__36165;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto__ = function(state_36139){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto____1.call(this,state_36139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___36157,out))
})();
var state__20611__auto__ = (function (){var statearr_36156 = f__20610__auto__.call(null);
(statearr_36156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___36157);

return statearr_36156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___36157,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36166,opts){
var map__36170 = p__36166;
var map__36170__$1 = ((((!((map__36170 == null)))?((((map__36170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36170):map__36170);
var eval_body__$1 = cljs.core.get.call(null,map__36170__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36170__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36172){var e = e36172;
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
return (function (p1__36173_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36173_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36178){
var vec__36179 = p__36178;
var k = cljs.core.nth.call(null,vec__36179,(0),null);
var v = cljs.core.nth.call(null,vec__36179,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36180){
var vec__36181 = p__36180;
var k = cljs.core.nth.call(null,vec__36181,(0),null);
var v = cljs.core.nth.call(null,vec__36181,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36185,p__36186){
var map__36433 = p__36185;
var map__36433__$1 = ((((!((map__36433 == null)))?((((map__36433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36433):map__36433);
var opts = map__36433__$1;
var before_jsload = cljs.core.get.call(null,map__36433__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36433__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36433__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36434 = p__36186;
var map__36434__$1 = ((((!((map__36434 == null)))?((((map__36434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36434):map__36434);
var msg = map__36434__$1;
var files = cljs.core.get.call(null,map__36434__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36434__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36434__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36587){
var state_val_36588 = (state_36587[(1)]);
if((state_val_36588 === (7))){
var inst_36451 = (state_36587[(7)]);
var inst_36448 = (state_36587[(8)]);
var inst_36449 = (state_36587[(9)]);
var inst_36450 = (state_36587[(10)]);
var inst_36456 = cljs.core._nth.call(null,inst_36449,inst_36451);
var inst_36457 = figwheel.client.file_reloading.eval_body.call(null,inst_36456,opts);
var inst_36458 = (inst_36451 + (1));
var tmp36589 = inst_36448;
var tmp36590 = inst_36449;
var tmp36591 = inst_36450;
var inst_36448__$1 = tmp36589;
var inst_36449__$1 = tmp36590;
var inst_36450__$1 = tmp36591;
var inst_36451__$1 = inst_36458;
var state_36587__$1 = (function (){var statearr_36592 = state_36587;
(statearr_36592[(7)] = inst_36451__$1);

(statearr_36592[(8)] = inst_36448__$1);

(statearr_36592[(9)] = inst_36449__$1);

(statearr_36592[(10)] = inst_36450__$1);

(statearr_36592[(11)] = inst_36457);

return statearr_36592;
})();
var statearr_36593_36679 = state_36587__$1;
(statearr_36593_36679[(2)] = null);

(statearr_36593_36679[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (20))){
var inst_36491 = (state_36587[(12)]);
var inst_36499 = figwheel.client.file_reloading.sort_files.call(null,inst_36491);
var state_36587__$1 = state_36587;
var statearr_36594_36680 = state_36587__$1;
(statearr_36594_36680[(2)] = inst_36499);

(statearr_36594_36680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (27))){
var state_36587__$1 = state_36587;
var statearr_36595_36681 = state_36587__$1;
(statearr_36595_36681[(2)] = null);

(statearr_36595_36681[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (1))){
var inst_36440 = (state_36587[(13)]);
var inst_36437 = before_jsload.call(null,files);
var inst_36438 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36439 = (function (){return ((function (inst_36440,inst_36437,inst_36438,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36182_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36182_SHARP_);
});
;})(inst_36440,inst_36437,inst_36438,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36440__$1 = cljs.core.filter.call(null,inst_36439,files);
var inst_36441 = cljs.core.not_empty.call(null,inst_36440__$1);
var state_36587__$1 = (function (){var statearr_36596 = state_36587;
(statearr_36596[(13)] = inst_36440__$1);

(statearr_36596[(14)] = inst_36438);

(statearr_36596[(15)] = inst_36437);

return statearr_36596;
})();
if(cljs.core.truth_(inst_36441)){
var statearr_36597_36682 = state_36587__$1;
(statearr_36597_36682[(1)] = (2));

} else {
var statearr_36598_36683 = state_36587__$1;
(statearr_36598_36683[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (24))){
var state_36587__$1 = state_36587;
var statearr_36599_36684 = state_36587__$1;
(statearr_36599_36684[(2)] = null);

(statearr_36599_36684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (39))){
var inst_36541 = (state_36587[(16)]);
var state_36587__$1 = state_36587;
var statearr_36600_36685 = state_36587__$1;
(statearr_36600_36685[(2)] = inst_36541);

(statearr_36600_36685[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (46))){
var inst_36582 = (state_36587[(2)]);
var state_36587__$1 = state_36587;
var statearr_36601_36686 = state_36587__$1;
(statearr_36601_36686[(2)] = inst_36582);

(statearr_36601_36686[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (4))){
var inst_36485 = (state_36587[(2)]);
var inst_36486 = cljs.core.List.EMPTY;
var inst_36487 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36486);
var inst_36488 = (function (){return ((function (inst_36485,inst_36486,inst_36487,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36183_SHARP_){
var and__18430__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36183_SHARP_);
if(cljs.core.truth_(and__18430__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36183_SHARP_));
} else {
return and__18430__auto__;
}
});
;})(inst_36485,inst_36486,inst_36487,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36489 = cljs.core.filter.call(null,inst_36488,files);
var inst_36490 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36491 = cljs.core.concat.call(null,inst_36489,inst_36490);
var state_36587__$1 = (function (){var statearr_36602 = state_36587;
(statearr_36602[(17)] = inst_36485);

(statearr_36602[(12)] = inst_36491);

(statearr_36602[(18)] = inst_36487);

return statearr_36602;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36603_36687 = state_36587__$1;
(statearr_36603_36687[(1)] = (16));

} else {
var statearr_36604_36688 = state_36587__$1;
(statearr_36604_36688[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (15))){
var inst_36475 = (state_36587[(2)]);
var state_36587__$1 = state_36587;
var statearr_36605_36689 = state_36587__$1;
(statearr_36605_36689[(2)] = inst_36475);

(statearr_36605_36689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (21))){
var inst_36501 = (state_36587[(19)]);
var inst_36501__$1 = (state_36587[(2)]);
var inst_36502 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36501__$1);
var state_36587__$1 = (function (){var statearr_36606 = state_36587;
(statearr_36606[(19)] = inst_36501__$1);

return statearr_36606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36587__$1,(22),inst_36502);
} else {
if((state_val_36588 === (31))){
var inst_36585 = (state_36587[(2)]);
var state_36587__$1 = state_36587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36587__$1,inst_36585);
} else {
if((state_val_36588 === (32))){
var inst_36541 = (state_36587[(16)]);
var inst_36546 = inst_36541.cljs$lang$protocol_mask$partition0$;
var inst_36547 = (inst_36546 & (64));
var inst_36548 = inst_36541.cljs$core$ISeq$;
var inst_36549 = (inst_36547) || (inst_36548);
var state_36587__$1 = state_36587;
if(cljs.core.truth_(inst_36549)){
var statearr_36607_36690 = state_36587__$1;
(statearr_36607_36690[(1)] = (35));

} else {
var statearr_36608_36691 = state_36587__$1;
(statearr_36608_36691[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (40))){
var inst_36562 = (state_36587[(20)]);
var inst_36561 = (state_36587[(2)]);
var inst_36562__$1 = cljs.core.get.call(null,inst_36561,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36563 = cljs.core.get.call(null,inst_36561,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36564 = cljs.core.not_empty.call(null,inst_36562__$1);
var state_36587__$1 = (function (){var statearr_36609 = state_36587;
(statearr_36609[(20)] = inst_36562__$1);

(statearr_36609[(21)] = inst_36563);

return statearr_36609;
})();
if(cljs.core.truth_(inst_36564)){
var statearr_36610_36692 = state_36587__$1;
(statearr_36610_36692[(1)] = (41));

} else {
var statearr_36611_36693 = state_36587__$1;
(statearr_36611_36693[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (33))){
var state_36587__$1 = state_36587;
var statearr_36612_36694 = state_36587__$1;
(statearr_36612_36694[(2)] = false);

(statearr_36612_36694[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (13))){
var inst_36461 = (state_36587[(22)]);
var inst_36465 = cljs.core.chunk_first.call(null,inst_36461);
var inst_36466 = cljs.core.chunk_rest.call(null,inst_36461);
var inst_36467 = cljs.core.count.call(null,inst_36465);
var inst_36448 = inst_36466;
var inst_36449 = inst_36465;
var inst_36450 = inst_36467;
var inst_36451 = (0);
var state_36587__$1 = (function (){var statearr_36613 = state_36587;
(statearr_36613[(7)] = inst_36451);

(statearr_36613[(8)] = inst_36448);

(statearr_36613[(9)] = inst_36449);

(statearr_36613[(10)] = inst_36450);

return statearr_36613;
})();
var statearr_36614_36695 = state_36587__$1;
(statearr_36614_36695[(2)] = null);

(statearr_36614_36695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (22))){
var inst_36509 = (state_36587[(23)]);
var inst_36501 = (state_36587[(19)]);
var inst_36505 = (state_36587[(24)]);
var inst_36504 = (state_36587[(25)]);
var inst_36504__$1 = (state_36587[(2)]);
var inst_36505__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36504__$1);
var inst_36506 = (function (){var all_files = inst_36501;
var res_SINGLEQUOTE_ = inst_36504__$1;
var res = inst_36505__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36509,inst_36501,inst_36505,inst_36504,inst_36504__$1,inst_36505__$1,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36184_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36184_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36509,inst_36501,inst_36505,inst_36504,inst_36504__$1,inst_36505__$1,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36507 = cljs.core.filter.call(null,inst_36506,inst_36504__$1);
var inst_36508 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36509__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36508);
var inst_36510 = cljs.core.not_empty.call(null,inst_36509__$1);
var state_36587__$1 = (function (){var statearr_36615 = state_36587;
(statearr_36615[(23)] = inst_36509__$1);

(statearr_36615[(26)] = inst_36507);

(statearr_36615[(24)] = inst_36505__$1);

(statearr_36615[(25)] = inst_36504__$1);

return statearr_36615;
})();
if(cljs.core.truth_(inst_36510)){
var statearr_36616_36696 = state_36587__$1;
(statearr_36616_36696[(1)] = (23));

} else {
var statearr_36617_36697 = state_36587__$1;
(statearr_36617_36697[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (36))){
var state_36587__$1 = state_36587;
var statearr_36618_36698 = state_36587__$1;
(statearr_36618_36698[(2)] = false);

(statearr_36618_36698[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (41))){
var inst_36562 = (state_36587[(20)]);
var inst_36566 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36567 = cljs.core.map.call(null,inst_36566,inst_36562);
var inst_36568 = cljs.core.pr_str.call(null,inst_36567);
var inst_36569 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36568)].join('');
var inst_36570 = figwheel.client.utils.log.call(null,inst_36569);
var state_36587__$1 = state_36587;
var statearr_36619_36699 = state_36587__$1;
(statearr_36619_36699[(2)] = inst_36570);

(statearr_36619_36699[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (43))){
var inst_36563 = (state_36587[(21)]);
var inst_36573 = (state_36587[(2)]);
var inst_36574 = cljs.core.not_empty.call(null,inst_36563);
var state_36587__$1 = (function (){var statearr_36620 = state_36587;
(statearr_36620[(27)] = inst_36573);

return statearr_36620;
})();
if(cljs.core.truth_(inst_36574)){
var statearr_36621_36700 = state_36587__$1;
(statearr_36621_36700[(1)] = (44));

} else {
var statearr_36622_36701 = state_36587__$1;
(statearr_36622_36701[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (29))){
var inst_36509 = (state_36587[(23)]);
var inst_36501 = (state_36587[(19)]);
var inst_36507 = (state_36587[(26)]);
var inst_36505 = (state_36587[(24)]);
var inst_36504 = (state_36587[(25)]);
var inst_36541 = (state_36587[(16)]);
var inst_36537 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36540 = (function (){var all_files = inst_36501;
var res_SINGLEQUOTE_ = inst_36504;
var res = inst_36505;
var files_not_loaded = inst_36507;
var dependencies_that_loaded = inst_36509;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36509,inst_36501,inst_36507,inst_36505,inst_36504,inst_36541,inst_36537,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36539){
var map__36623 = p__36539;
var map__36623__$1 = ((((!((map__36623 == null)))?((((map__36623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36623):map__36623);
var namespace = cljs.core.get.call(null,map__36623__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36509,inst_36501,inst_36507,inst_36505,inst_36504,inst_36541,inst_36537,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36541__$1 = cljs.core.group_by.call(null,inst_36540,inst_36507);
var inst_36543 = (inst_36541__$1 == null);
var inst_36544 = cljs.core.not.call(null,inst_36543);
var state_36587__$1 = (function (){var statearr_36625 = state_36587;
(statearr_36625[(28)] = inst_36537);

(statearr_36625[(16)] = inst_36541__$1);

return statearr_36625;
})();
if(inst_36544){
var statearr_36626_36702 = state_36587__$1;
(statearr_36626_36702[(1)] = (32));

} else {
var statearr_36627_36703 = state_36587__$1;
(statearr_36627_36703[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (44))){
var inst_36563 = (state_36587[(21)]);
var inst_36576 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36563);
var inst_36577 = cljs.core.pr_str.call(null,inst_36576);
var inst_36578 = [cljs.core.str("not required: "),cljs.core.str(inst_36577)].join('');
var inst_36579 = figwheel.client.utils.log.call(null,inst_36578);
var state_36587__$1 = state_36587;
var statearr_36628_36704 = state_36587__$1;
(statearr_36628_36704[(2)] = inst_36579);

(statearr_36628_36704[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (6))){
var inst_36482 = (state_36587[(2)]);
var state_36587__$1 = state_36587;
var statearr_36629_36705 = state_36587__$1;
(statearr_36629_36705[(2)] = inst_36482);

(statearr_36629_36705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (28))){
var inst_36507 = (state_36587[(26)]);
var inst_36534 = (state_36587[(2)]);
var inst_36535 = cljs.core.not_empty.call(null,inst_36507);
var state_36587__$1 = (function (){var statearr_36630 = state_36587;
(statearr_36630[(29)] = inst_36534);

return statearr_36630;
})();
if(cljs.core.truth_(inst_36535)){
var statearr_36631_36706 = state_36587__$1;
(statearr_36631_36706[(1)] = (29));

} else {
var statearr_36632_36707 = state_36587__$1;
(statearr_36632_36707[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (25))){
var inst_36505 = (state_36587[(24)]);
var inst_36521 = (state_36587[(2)]);
var inst_36522 = cljs.core.not_empty.call(null,inst_36505);
var state_36587__$1 = (function (){var statearr_36633 = state_36587;
(statearr_36633[(30)] = inst_36521);

return statearr_36633;
})();
if(cljs.core.truth_(inst_36522)){
var statearr_36634_36708 = state_36587__$1;
(statearr_36634_36708[(1)] = (26));

} else {
var statearr_36635_36709 = state_36587__$1;
(statearr_36635_36709[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (34))){
var inst_36556 = (state_36587[(2)]);
var state_36587__$1 = state_36587;
if(cljs.core.truth_(inst_36556)){
var statearr_36636_36710 = state_36587__$1;
(statearr_36636_36710[(1)] = (38));

} else {
var statearr_36637_36711 = state_36587__$1;
(statearr_36637_36711[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (17))){
var state_36587__$1 = state_36587;
var statearr_36638_36712 = state_36587__$1;
(statearr_36638_36712[(2)] = recompile_dependents);

(statearr_36638_36712[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (3))){
var state_36587__$1 = state_36587;
var statearr_36639_36713 = state_36587__$1;
(statearr_36639_36713[(2)] = null);

(statearr_36639_36713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (12))){
var inst_36478 = (state_36587[(2)]);
var state_36587__$1 = state_36587;
var statearr_36640_36714 = state_36587__$1;
(statearr_36640_36714[(2)] = inst_36478);

(statearr_36640_36714[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (2))){
var inst_36440 = (state_36587[(13)]);
var inst_36447 = cljs.core.seq.call(null,inst_36440);
var inst_36448 = inst_36447;
var inst_36449 = null;
var inst_36450 = (0);
var inst_36451 = (0);
var state_36587__$1 = (function (){var statearr_36641 = state_36587;
(statearr_36641[(7)] = inst_36451);

(statearr_36641[(8)] = inst_36448);

(statearr_36641[(9)] = inst_36449);

(statearr_36641[(10)] = inst_36450);

return statearr_36641;
})();
var statearr_36642_36715 = state_36587__$1;
(statearr_36642_36715[(2)] = null);

(statearr_36642_36715[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (23))){
var inst_36509 = (state_36587[(23)]);
var inst_36501 = (state_36587[(19)]);
var inst_36507 = (state_36587[(26)]);
var inst_36505 = (state_36587[(24)]);
var inst_36504 = (state_36587[(25)]);
var inst_36512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36514 = (function (){var all_files = inst_36501;
var res_SINGLEQUOTE_ = inst_36504;
var res = inst_36505;
var files_not_loaded = inst_36507;
var dependencies_that_loaded = inst_36509;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36509,inst_36501,inst_36507,inst_36505,inst_36504,inst_36512,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36513){
var map__36643 = p__36513;
var map__36643__$1 = ((((!((map__36643 == null)))?((((map__36643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36643):map__36643);
var request_url = cljs.core.get.call(null,map__36643__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36509,inst_36501,inst_36507,inst_36505,inst_36504,inst_36512,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36515 = cljs.core.reverse.call(null,inst_36509);
var inst_36516 = cljs.core.map.call(null,inst_36514,inst_36515);
var inst_36517 = cljs.core.pr_str.call(null,inst_36516);
var inst_36518 = figwheel.client.utils.log.call(null,inst_36517);
var state_36587__$1 = (function (){var statearr_36645 = state_36587;
(statearr_36645[(31)] = inst_36512);

return statearr_36645;
})();
var statearr_36646_36716 = state_36587__$1;
(statearr_36646_36716[(2)] = inst_36518);

(statearr_36646_36716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (35))){
var state_36587__$1 = state_36587;
var statearr_36647_36717 = state_36587__$1;
(statearr_36647_36717[(2)] = true);

(statearr_36647_36717[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (19))){
var inst_36491 = (state_36587[(12)]);
var inst_36497 = figwheel.client.file_reloading.expand_files.call(null,inst_36491);
var state_36587__$1 = state_36587;
var statearr_36648_36718 = state_36587__$1;
(statearr_36648_36718[(2)] = inst_36497);

(statearr_36648_36718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (11))){
var state_36587__$1 = state_36587;
var statearr_36649_36719 = state_36587__$1;
(statearr_36649_36719[(2)] = null);

(statearr_36649_36719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (9))){
var inst_36480 = (state_36587[(2)]);
var state_36587__$1 = state_36587;
var statearr_36650_36720 = state_36587__$1;
(statearr_36650_36720[(2)] = inst_36480);

(statearr_36650_36720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (5))){
var inst_36451 = (state_36587[(7)]);
var inst_36450 = (state_36587[(10)]);
var inst_36453 = (inst_36451 < inst_36450);
var inst_36454 = inst_36453;
var state_36587__$1 = state_36587;
if(cljs.core.truth_(inst_36454)){
var statearr_36651_36721 = state_36587__$1;
(statearr_36651_36721[(1)] = (7));

} else {
var statearr_36652_36722 = state_36587__$1;
(statearr_36652_36722[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (14))){
var inst_36461 = (state_36587[(22)]);
var inst_36470 = cljs.core.first.call(null,inst_36461);
var inst_36471 = figwheel.client.file_reloading.eval_body.call(null,inst_36470,opts);
var inst_36472 = cljs.core.next.call(null,inst_36461);
var inst_36448 = inst_36472;
var inst_36449 = null;
var inst_36450 = (0);
var inst_36451 = (0);
var state_36587__$1 = (function (){var statearr_36653 = state_36587;
(statearr_36653[(32)] = inst_36471);

(statearr_36653[(7)] = inst_36451);

(statearr_36653[(8)] = inst_36448);

(statearr_36653[(9)] = inst_36449);

(statearr_36653[(10)] = inst_36450);

return statearr_36653;
})();
var statearr_36654_36723 = state_36587__$1;
(statearr_36654_36723[(2)] = null);

(statearr_36654_36723[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (45))){
var state_36587__$1 = state_36587;
var statearr_36655_36724 = state_36587__$1;
(statearr_36655_36724[(2)] = null);

(statearr_36655_36724[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (26))){
var inst_36509 = (state_36587[(23)]);
var inst_36501 = (state_36587[(19)]);
var inst_36507 = (state_36587[(26)]);
var inst_36505 = (state_36587[(24)]);
var inst_36504 = (state_36587[(25)]);
var inst_36524 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36526 = (function (){var all_files = inst_36501;
var res_SINGLEQUOTE_ = inst_36504;
var res = inst_36505;
var files_not_loaded = inst_36507;
var dependencies_that_loaded = inst_36509;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36509,inst_36501,inst_36507,inst_36505,inst_36504,inst_36524,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36525){
var map__36656 = p__36525;
var map__36656__$1 = ((((!((map__36656 == null)))?((((map__36656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36656):map__36656);
var namespace = cljs.core.get.call(null,map__36656__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36509,inst_36501,inst_36507,inst_36505,inst_36504,inst_36524,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36527 = cljs.core.map.call(null,inst_36526,inst_36505);
var inst_36528 = cljs.core.pr_str.call(null,inst_36527);
var inst_36529 = figwheel.client.utils.log.call(null,inst_36528);
var inst_36530 = (function (){var all_files = inst_36501;
var res_SINGLEQUOTE_ = inst_36504;
var res = inst_36505;
var files_not_loaded = inst_36507;
var dependencies_that_loaded = inst_36509;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36509,inst_36501,inst_36507,inst_36505,inst_36504,inst_36524,inst_36526,inst_36527,inst_36528,inst_36529,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36509,inst_36501,inst_36507,inst_36505,inst_36504,inst_36524,inst_36526,inst_36527,inst_36528,inst_36529,state_val_36588,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36531 = setTimeout(inst_36530,(10));
var state_36587__$1 = (function (){var statearr_36658 = state_36587;
(statearr_36658[(33)] = inst_36524);

(statearr_36658[(34)] = inst_36529);

return statearr_36658;
})();
var statearr_36659_36725 = state_36587__$1;
(statearr_36659_36725[(2)] = inst_36531);

(statearr_36659_36725[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (16))){
var state_36587__$1 = state_36587;
var statearr_36660_36726 = state_36587__$1;
(statearr_36660_36726[(2)] = reload_dependents);

(statearr_36660_36726[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (38))){
var inst_36541 = (state_36587[(16)]);
var inst_36558 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36541);
var state_36587__$1 = state_36587;
var statearr_36661_36727 = state_36587__$1;
(statearr_36661_36727[(2)] = inst_36558);

(statearr_36661_36727[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (30))){
var state_36587__$1 = state_36587;
var statearr_36662_36728 = state_36587__$1;
(statearr_36662_36728[(2)] = null);

(statearr_36662_36728[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (10))){
var inst_36461 = (state_36587[(22)]);
var inst_36463 = cljs.core.chunked_seq_QMARK_.call(null,inst_36461);
var state_36587__$1 = state_36587;
if(inst_36463){
var statearr_36663_36729 = state_36587__$1;
(statearr_36663_36729[(1)] = (13));

} else {
var statearr_36664_36730 = state_36587__$1;
(statearr_36664_36730[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (18))){
var inst_36495 = (state_36587[(2)]);
var state_36587__$1 = state_36587;
if(cljs.core.truth_(inst_36495)){
var statearr_36665_36731 = state_36587__$1;
(statearr_36665_36731[(1)] = (19));

} else {
var statearr_36666_36732 = state_36587__$1;
(statearr_36666_36732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (42))){
var state_36587__$1 = state_36587;
var statearr_36667_36733 = state_36587__$1;
(statearr_36667_36733[(2)] = null);

(statearr_36667_36733[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (37))){
var inst_36553 = (state_36587[(2)]);
var state_36587__$1 = state_36587;
var statearr_36668_36734 = state_36587__$1;
(statearr_36668_36734[(2)] = inst_36553);

(statearr_36668_36734[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36588 === (8))){
var inst_36461 = (state_36587[(22)]);
var inst_36448 = (state_36587[(8)]);
var inst_36461__$1 = cljs.core.seq.call(null,inst_36448);
var state_36587__$1 = (function (){var statearr_36669 = state_36587;
(statearr_36669[(22)] = inst_36461__$1);

return statearr_36669;
})();
if(inst_36461__$1){
var statearr_36670_36735 = state_36587__$1;
(statearr_36670_36735[(1)] = (10));

} else {
var statearr_36671_36736 = state_36587__$1;
(statearr_36671_36736[(1)] = (11));

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
});})(c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20497__auto__,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto____0 = (function (){
var statearr_36675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36675[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto__);

(statearr_36675[(1)] = (1));

return statearr_36675;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto____1 = (function (state_36587){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_36587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e36676){if((e36676 instanceof Object)){
var ex__20501__auto__ = e36676;
var statearr_36677_36737 = state_36587;
(statearr_36677_36737[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36738 = state_36587;
state_36587 = G__36738;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto__ = function(state_36587){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto____1.call(this,state_36587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20611__auto__ = (function (){var statearr_36678 = f__20610__auto__.call(null);
(statearr_36678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto__);

return statearr_36678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto__,map__36433,map__36433__$1,opts,before_jsload,on_jsload,reload_dependents,map__36434,map__36434__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20609__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36741,link){
var map__36744 = p__36741;
var map__36744__$1 = ((((!((map__36744 == null)))?((((map__36744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36744):map__36744);
var file = cljs.core.get.call(null,map__36744__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36744,map__36744__$1,file){
return (function (p1__36739_SHARP_,p2__36740_SHARP_){
if(cljs.core._EQ_.call(null,p1__36739_SHARP_,p2__36740_SHARP_)){
return p1__36739_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36744,map__36744__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36750){
var map__36751 = p__36750;
var map__36751__$1 = ((((!((map__36751 == null)))?((((map__36751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36751):map__36751);
var match_length = cljs.core.get.call(null,map__36751__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36751__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36746_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36746_SHARP_);
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
var args36753 = [];
var len__19512__auto___36756 = arguments.length;
var i__19513__auto___36757 = (0);
while(true){
if((i__19513__auto___36757 < len__19512__auto___36756)){
args36753.push((arguments[i__19513__auto___36757]));

var G__36758 = (i__19513__auto___36757 + (1));
i__19513__auto___36757 = G__36758;
continue;
} else {
}
break;
}

var G__36755 = args36753.length;
switch (G__36755) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36753.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36760_SHARP_,p2__36761_SHARP_){
return cljs.core.assoc.call(null,p1__36760_SHARP_,cljs.core.get.call(null,p2__36761_SHARP_,key),p2__36761_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36762){
var map__36765 = p__36762;
var map__36765__$1 = ((((!((map__36765 == null)))?((((map__36765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36765):map__36765);
var f_data = map__36765__$1;
var file = cljs.core.get.call(null,map__36765__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36767,files_msg){
var map__36774 = p__36767;
var map__36774__$1 = ((((!((map__36774 == null)))?((((map__36774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36774):map__36774);
var opts = map__36774__$1;
var on_cssload = cljs.core.get.call(null,map__36774__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36776_36780 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36777_36781 = null;
var count__36778_36782 = (0);
var i__36779_36783 = (0);
while(true){
if((i__36779_36783 < count__36778_36782)){
var f_36784 = cljs.core._nth.call(null,chunk__36777_36781,i__36779_36783);
figwheel.client.file_reloading.reload_css_file.call(null,f_36784);

var G__36785 = seq__36776_36780;
var G__36786 = chunk__36777_36781;
var G__36787 = count__36778_36782;
var G__36788 = (i__36779_36783 + (1));
seq__36776_36780 = G__36785;
chunk__36777_36781 = G__36786;
count__36778_36782 = G__36787;
i__36779_36783 = G__36788;
continue;
} else {
var temp__4657__auto___36789 = cljs.core.seq.call(null,seq__36776_36780);
if(temp__4657__auto___36789){
var seq__36776_36790__$1 = temp__4657__auto___36789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36776_36790__$1)){
var c__19253__auto___36791 = cljs.core.chunk_first.call(null,seq__36776_36790__$1);
var G__36792 = cljs.core.chunk_rest.call(null,seq__36776_36790__$1);
var G__36793 = c__19253__auto___36791;
var G__36794 = cljs.core.count.call(null,c__19253__auto___36791);
var G__36795 = (0);
seq__36776_36780 = G__36792;
chunk__36777_36781 = G__36793;
count__36778_36782 = G__36794;
i__36779_36783 = G__36795;
continue;
} else {
var f_36796 = cljs.core.first.call(null,seq__36776_36790__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36796);

var G__36797 = cljs.core.next.call(null,seq__36776_36790__$1);
var G__36798 = null;
var G__36799 = (0);
var G__36800 = (0);
seq__36776_36780 = G__36797;
chunk__36777_36781 = G__36798;
count__36778_36782 = G__36799;
i__36779_36783 = G__36800;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36774,map__36774__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__36774,map__36774__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1464472749693