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
var or__18739__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18739__auto__){
return or__18739__auto__;
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
var or__18739__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18739__auto__)){
return or__18739__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39075_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39075_SHARP_));
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
var seq__39080 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39081 = null;
var count__39082 = (0);
var i__39083 = (0);
while(true){
if((i__39083 < count__39082)){
var n = cljs.core._nth.call(null,chunk__39081,i__39083);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39084 = seq__39080;
var G__39085 = chunk__39081;
var G__39086 = count__39082;
var G__39087 = (i__39083 + (1));
seq__39080 = G__39084;
chunk__39081 = G__39085;
count__39082 = G__39086;
i__39083 = G__39087;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39080);
if(temp__4657__auto__){
var seq__39080__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39080__$1)){
var c__19550__auto__ = cljs.core.chunk_first.call(null,seq__39080__$1);
var G__39088 = cljs.core.chunk_rest.call(null,seq__39080__$1);
var G__39089 = c__19550__auto__;
var G__39090 = cljs.core.count.call(null,c__19550__auto__);
var G__39091 = (0);
seq__39080 = G__39088;
chunk__39081 = G__39089;
count__39082 = G__39090;
i__39083 = G__39091;
continue;
} else {
var n = cljs.core.first.call(null,seq__39080__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39092 = cljs.core.next.call(null,seq__39080__$1);
var G__39093 = null;
var G__39094 = (0);
var G__39095 = (0);
seq__39080 = G__39092;
chunk__39081 = G__39093;
count__39082 = G__39094;
i__39083 = G__39095;
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

var seq__39134_39141 = cljs.core.seq.call(null,deps);
var chunk__39135_39142 = null;
var count__39136_39143 = (0);
var i__39137_39144 = (0);
while(true){
if((i__39137_39144 < count__39136_39143)){
var dep_39145 = cljs.core._nth.call(null,chunk__39135_39142,i__39137_39144);
topo_sort_helper_STAR_.call(null,dep_39145,(depth + (1)),state);

var G__39146 = seq__39134_39141;
var G__39147 = chunk__39135_39142;
var G__39148 = count__39136_39143;
var G__39149 = (i__39137_39144 + (1));
seq__39134_39141 = G__39146;
chunk__39135_39142 = G__39147;
count__39136_39143 = G__39148;
i__39137_39144 = G__39149;
continue;
} else {
var temp__4657__auto___39150 = cljs.core.seq.call(null,seq__39134_39141);
if(temp__4657__auto___39150){
var seq__39134_39151__$1 = temp__4657__auto___39150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39134_39151__$1)){
var c__19550__auto___39152 = cljs.core.chunk_first.call(null,seq__39134_39151__$1);
var G__39153 = cljs.core.chunk_rest.call(null,seq__39134_39151__$1);
var G__39154 = c__19550__auto___39152;
var G__39155 = cljs.core.count.call(null,c__19550__auto___39152);
var G__39156 = (0);
seq__39134_39141 = G__39153;
chunk__39135_39142 = G__39154;
count__39136_39143 = G__39155;
i__39137_39144 = G__39156;
continue;
} else {
var dep_39157 = cljs.core.first.call(null,seq__39134_39151__$1);
topo_sort_helper_STAR_.call(null,dep_39157,(depth + (1)),state);

var G__39158 = cljs.core.next.call(null,seq__39134_39151__$1);
var G__39159 = null;
var G__39160 = (0);
var G__39161 = (0);
seq__39134_39141 = G__39158;
chunk__39135_39142 = G__39159;
count__39136_39143 = G__39160;
i__39137_39144 = G__39161;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39138){
var vec__39140 = p__39138;
var x = cljs.core.nth.call(null,vec__39140,(0),null);
var xs = cljs.core.nthnext.call(null,vec__39140,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39140,x,xs,get_deps__$1){
return (function (p1__39096_SHARP_){
return clojure.set.difference.call(null,p1__39096_SHARP_,x);
});})(vec__39140,x,xs,get_deps__$1))
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
var seq__39174 = cljs.core.seq.call(null,provides);
var chunk__39175 = null;
var count__39176 = (0);
var i__39177 = (0);
while(true){
if((i__39177 < count__39176)){
var prov = cljs.core._nth.call(null,chunk__39175,i__39177);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39178_39186 = cljs.core.seq.call(null,requires);
var chunk__39179_39187 = null;
var count__39180_39188 = (0);
var i__39181_39189 = (0);
while(true){
if((i__39181_39189 < count__39180_39188)){
var req_39190 = cljs.core._nth.call(null,chunk__39179_39187,i__39181_39189);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39190,prov);

var G__39191 = seq__39178_39186;
var G__39192 = chunk__39179_39187;
var G__39193 = count__39180_39188;
var G__39194 = (i__39181_39189 + (1));
seq__39178_39186 = G__39191;
chunk__39179_39187 = G__39192;
count__39180_39188 = G__39193;
i__39181_39189 = G__39194;
continue;
} else {
var temp__4657__auto___39195 = cljs.core.seq.call(null,seq__39178_39186);
if(temp__4657__auto___39195){
var seq__39178_39196__$1 = temp__4657__auto___39195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39178_39196__$1)){
var c__19550__auto___39197 = cljs.core.chunk_first.call(null,seq__39178_39196__$1);
var G__39198 = cljs.core.chunk_rest.call(null,seq__39178_39196__$1);
var G__39199 = c__19550__auto___39197;
var G__39200 = cljs.core.count.call(null,c__19550__auto___39197);
var G__39201 = (0);
seq__39178_39186 = G__39198;
chunk__39179_39187 = G__39199;
count__39180_39188 = G__39200;
i__39181_39189 = G__39201;
continue;
} else {
var req_39202 = cljs.core.first.call(null,seq__39178_39196__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39202,prov);

var G__39203 = cljs.core.next.call(null,seq__39178_39196__$1);
var G__39204 = null;
var G__39205 = (0);
var G__39206 = (0);
seq__39178_39186 = G__39203;
chunk__39179_39187 = G__39204;
count__39180_39188 = G__39205;
i__39181_39189 = G__39206;
continue;
}
} else {
}
}
break;
}

var G__39207 = seq__39174;
var G__39208 = chunk__39175;
var G__39209 = count__39176;
var G__39210 = (i__39177 + (1));
seq__39174 = G__39207;
chunk__39175 = G__39208;
count__39176 = G__39209;
i__39177 = G__39210;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39174);
if(temp__4657__auto__){
var seq__39174__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39174__$1)){
var c__19550__auto__ = cljs.core.chunk_first.call(null,seq__39174__$1);
var G__39211 = cljs.core.chunk_rest.call(null,seq__39174__$1);
var G__39212 = c__19550__auto__;
var G__39213 = cljs.core.count.call(null,c__19550__auto__);
var G__39214 = (0);
seq__39174 = G__39211;
chunk__39175 = G__39212;
count__39176 = G__39213;
i__39177 = G__39214;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39174__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39182_39215 = cljs.core.seq.call(null,requires);
var chunk__39183_39216 = null;
var count__39184_39217 = (0);
var i__39185_39218 = (0);
while(true){
if((i__39185_39218 < count__39184_39217)){
var req_39219 = cljs.core._nth.call(null,chunk__39183_39216,i__39185_39218);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39219,prov);

var G__39220 = seq__39182_39215;
var G__39221 = chunk__39183_39216;
var G__39222 = count__39184_39217;
var G__39223 = (i__39185_39218 + (1));
seq__39182_39215 = G__39220;
chunk__39183_39216 = G__39221;
count__39184_39217 = G__39222;
i__39185_39218 = G__39223;
continue;
} else {
var temp__4657__auto___39224__$1 = cljs.core.seq.call(null,seq__39182_39215);
if(temp__4657__auto___39224__$1){
var seq__39182_39225__$1 = temp__4657__auto___39224__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39182_39225__$1)){
var c__19550__auto___39226 = cljs.core.chunk_first.call(null,seq__39182_39225__$1);
var G__39227 = cljs.core.chunk_rest.call(null,seq__39182_39225__$1);
var G__39228 = c__19550__auto___39226;
var G__39229 = cljs.core.count.call(null,c__19550__auto___39226);
var G__39230 = (0);
seq__39182_39215 = G__39227;
chunk__39183_39216 = G__39228;
count__39184_39217 = G__39229;
i__39185_39218 = G__39230;
continue;
} else {
var req_39231 = cljs.core.first.call(null,seq__39182_39225__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39231,prov);

var G__39232 = cljs.core.next.call(null,seq__39182_39225__$1);
var G__39233 = null;
var G__39234 = (0);
var G__39235 = (0);
seq__39182_39215 = G__39232;
chunk__39183_39216 = G__39233;
count__39184_39217 = G__39234;
i__39185_39218 = G__39235;
continue;
}
} else {
}
}
break;
}

var G__39236 = cljs.core.next.call(null,seq__39174__$1);
var G__39237 = null;
var G__39238 = (0);
var G__39239 = (0);
seq__39174 = G__39236;
chunk__39175 = G__39237;
count__39176 = G__39238;
i__39177 = G__39239;
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
var seq__39244_39248 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39245_39249 = null;
var count__39246_39250 = (0);
var i__39247_39251 = (0);
while(true){
if((i__39247_39251 < count__39246_39250)){
var ns_39252 = cljs.core._nth.call(null,chunk__39245_39249,i__39247_39251);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39252);

var G__39253 = seq__39244_39248;
var G__39254 = chunk__39245_39249;
var G__39255 = count__39246_39250;
var G__39256 = (i__39247_39251 + (1));
seq__39244_39248 = G__39253;
chunk__39245_39249 = G__39254;
count__39246_39250 = G__39255;
i__39247_39251 = G__39256;
continue;
} else {
var temp__4657__auto___39257 = cljs.core.seq.call(null,seq__39244_39248);
if(temp__4657__auto___39257){
var seq__39244_39258__$1 = temp__4657__auto___39257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39244_39258__$1)){
var c__19550__auto___39259 = cljs.core.chunk_first.call(null,seq__39244_39258__$1);
var G__39260 = cljs.core.chunk_rest.call(null,seq__39244_39258__$1);
var G__39261 = c__19550__auto___39259;
var G__39262 = cljs.core.count.call(null,c__19550__auto___39259);
var G__39263 = (0);
seq__39244_39248 = G__39260;
chunk__39245_39249 = G__39261;
count__39246_39250 = G__39262;
i__39247_39251 = G__39263;
continue;
} else {
var ns_39264 = cljs.core.first.call(null,seq__39244_39258__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39264);

var G__39265 = cljs.core.next.call(null,seq__39244_39258__$1);
var G__39266 = null;
var G__39267 = (0);
var G__39268 = (0);
seq__39244_39248 = G__39265;
chunk__39245_39249 = G__39266;
count__39246_39250 = G__39267;
i__39247_39251 = G__39268;
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
goog.require_figwheel_backup_ = (function (){var or__18739__auto__ = goog.require__;
if(cljs.core.truth_(or__18739__auto__)){
return or__18739__auto__;
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
var G__39269__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39270__i = 0, G__39270__a = new Array(arguments.length -  0);
while (G__39270__i < G__39270__a.length) {G__39270__a[G__39270__i] = arguments[G__39270__i + 0]; ++G__39270__i;}
  args = new cljs.core.IndexedSeq(G__39270__a,0);
} 
return G__39269__delegate.call(this,args);};
G__39269.cljs$lang$maxFixedArity = 0;
G__39269.cljs$lang$applyTo = (function (arglist__39271){
var args = cljs.core.seq(arglist__39271);
return G__39269__delegate(args);
});
G__39269.cljs$core$IFn$_invoke$arity$variadic = G__39269__delegate;
return G__39269;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39273 = cljs.core._EQ_;
var expr__39274 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39273.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39274))){
var path_parts = ((function (pred__39273,expr__39274){
return (function (p1__39272_SHARP_){
return clojure.string.split.call(null,p1__39272_SHARP_,/[\/\\]/);
});})(pred__39273,expr__39274))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__39273,expr__39274){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39276){if((e39276 instanceof Error)){
var e = e39276;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39276;

}
}})());
});
;})(path_parts,sep,root,pred__39273,expr__39274))
} else {
if(cljs.core.truth_(pred__39273.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39274))){
return ((function (pred__39273,expr__39274){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39273,expr__39274){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39273,expr__39274))
);

return deferred.addErrback(((function (deferred,pred__39273,expr__39274){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39273,expr__39274))
);
});
;})(pred__39273,expr__39274))
} else {
return ((function (pred__39273,expr__39274){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39273,expr__39274))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39277,callback){
var map__39280 = p__39277;
var map__39280__$1 = ((((!((map__39280 == null)))?((((map__39280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39280):map__39280);
var file_msg = map__39280__$1;
var request_url = cljs.core.get.call(null,map__39280__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39280,map__39280__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39280,map__39280__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto__){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto__){
return (function (state_39304){
var state_val_39305 = (state_39304[(1)]);
if((state_val_39305 === (7))){
var inst_39300 = (state_39304[(2)]);
var state_39304__$1 = state_39304;
var statearr_39306_39326 = state_39304__$1;
(statearr_39306_39326[(2)] = inst_39300);

(statearr_39306_39326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (1))){
var state_39304__$1 = state_39304;
var statearr_39307_39327 = state_39304__$1;
(statearr_39307_39327[(2)] = null);

(statearr_39307_39327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (4))){
var inst_39284 = (state_39304[(7)]);
var inst_39284__$1 = (state_39304[(2)]);
var state_39304__$1 = (function (){var statearr_39308 = state_39304;
(statearr_39308[(7)] = inst_39284__$1);

return statearr_39308;
})();
if(cljs.core.truth_(inst_39284__$1)){
var statearr_39309_39328 = state_39304__$1;
(statearr_39309_39328[(1)] = (5));

} else {
var statearr_39310_39329 = state_39304__$1;
(statearr_39310_39329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (6))){
var state_39304__$1 = state_39304;
var statearr_39311_39330 = state_39304__$1;
(statearr_39311_39330[(2)] = null);

(statearr_39311_39330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (3))){
var inst_39302 = (state_39304[(2)]);
var state_39304__$1 = state_39304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39304__$1,inst_39302);
} else {
if((state_val_39305 === (2))){
var state_39304__$1 = state_39304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39304__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39305 === (11))){
var inst_39296 = (state_39304[(2)]);
var state_39304__$1 = (function (){var statearr_39312 = state_39304;
(statearr_39312[(8)] = inst_39296);

return statearr_39312;
})();
var statearr_39313_39331 = state_39304__$1;
(statearr_39313_39331[(2)] = null);

(statearr_39313_39331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (9))){
var inst_39290 = (state_39304[(9)]);
var inst_39288 = (state_39304[(10)]);
var inst_39292 = inst_39290.call(null,inst_39288);
var state_39304__$1 = state_39304;
var statearr_39314_39332 = state_39304__$1;
(statearr_39314_39332[(2)] = inst_39292);

(statearr_39314_39332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (5))){
var inst_39284 = (state_39304[(7)]);
var inst_39286 = figwheel.client.file_reloading.blocking_load.call(null,inst_39284);
var state_39304__$1 = state_39304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39304__$1,(8),inst_39286);
} else {
if((state_val_39305 === (10))){
var inst_39288 = (state_39304[(10)]);
var inst_39294 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39288);
var state_39304__$1 = state_39304;
var statearr_39315_39333 = state_39304__$1;
(statearr_39315_39333[(2)] = inst_39294);

(statearr_39315_39333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39305 === (8))){
var inst_39290 = (state_39304[(9)]);
var inst_39284 = (state_39304[(7)]);
var inst_39288 = (state_39304[(2)]);
var inst_39289 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39290__$1 = cljs.core.get.call(null,inst_39289,inst_39284);
var state_39304__$1 = (function (){var statearr_39316 = state_39304;
(statearr_39316[(9)] = inst_39290__$1);

(statearr_39316[(10)] = inst_39288);

return statearr_39316;
})();
if(cljs.core.truth_(inst_39290__$1)){
var statearr_39317_39334 = state_39304__$1;
(statearr_39317_39334[(1)] = (9));

} else {
var statearr_39318_39335 = state_39304__$1;
(statearr_39318_39335[(1)] = (10));

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
});})(c__20906__auto__))
;
return ((function (switch__20794__auto__,c__20906__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20795__auto__ = null;
var figwheel$client$file_reloading$state_machine__20795__auto____0 = (function (){
var statearr_39322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39322[(0)] = figwheel$client$file_reloading$state_machine__20795__auto__);

(statearr_39322[(1)] = (1));

return statearr_39322;
});
var figwheel$client$file_reloading$state_machine__20795__auto____1 = (function (state_39304){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_39304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e39323){if((e39323 instanceof Object)){
var ex__20798__auto__ = e39323;
var statearr_39324_39336 = state_39304;
(statearr_39324_39336[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39337 = state_39304;
state_39304 = G__39337;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20795__auto__ = function(state_39304){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20795__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20795__auto____1.call(this,state_39304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20795__auto____0;
figwheel$client$file_reloading$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20795__auto____1;
return figwheel$client$file_reloading$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto__))
})();
var state__20908__auto__ = (function (){var statearr_39325 = f__20907__auto__.call(null);
(statearr_39325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto__);

return statearr_39325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto__))
);

return c__20906__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39338,callback){
var map__39341 = p__39338;
var map__39341__$1 = ((((!((map__39341 == null)))?((((map__39341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39341):map__39341);
var file_msg = map__39341__$1;
var namespace = cljs.core.get.call(null,map__39341__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39341,map__39341__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39341,map__39341__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39343){
var map__39346 = p__39343;
var map__39346__$1 = ((((!((map__39346 == null)))?((((map__39346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39346):map__39346);
var file_msg = map__39346__$1;
var namespace = cljs.core.get.call(null,map__39346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18727__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18727__auto__){
var or__18739__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18739__auto__)){
return or__18739__auto__;
} else {
var or__18739__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18739__auto____$1)){
return or__18739__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18727__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39348,callback){
var map__39351 = p__39348;
var map__39351__$1 = ((((!((map__39351 == null)))?((((map__39351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39351):map__39351);
var file_msg = map__39351__$1;
var request_url = cljs.core.get.call(null,map__39351__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39351__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20906__auto___39439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___39439,out){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___39439,out){
return (function (state_39421){
var state_val_39422 = (state_39421[(1)]);
if((state_val_39422 === (1))){
var inst_39399 = cljs.core.nth.call(null,files,(0),null);
var inst_39400 = cljs.core.nthnext.call(null,files,(1));
var inst_39401 = files;
var state_39421__$1 = (function (){var statearr_39423 = state_39421;
(statearr_39423[(7)] = inst_39401);

(statearr_39423[(8)] = inst_39400);

(statearr_39423[(9)] = inst_39399);

return statearr_39423;
})();
var statearr_39424_39440 = state_39421__$1;
(statearr_39424_39440[(2)] = null);

(statearr_39424_39440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39422 === (2))){
var inst_39401 = (state_39421[(7)]);
var inst_39404 = (state_39421[(10)]);
var inst_39404__$1 = cljs.core.nth.call(null,inst_39401,(0),null);
var inst_39405 = cljs.core.nthnext.call(null,inst_39401,(1));
var inst_39406 = (inst_39404__$1 == null);
var inst_39407 = cljs.core.not.call(null,inst_39406);
var state_39421__$1 = (function (){var statearr_39425 = state_39421;
(statearr_39425[(10)] = inst_39404__$1);

(statearr_39425[(11)] = inst_39405);

return statearr_39425;
})();
if(inst_39407){
var statearr_39426_39441 = state_39421__$1;
(statearr_39426_39441[(1)] = (4));

} else {
var statearr_39427_39442 = state_39421__$1;
(statearr_39427_39442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39422 === (3))){
var inst_39419 = (state_39421[(2)]);
var state_39421__$1 = state_39421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39421__$1,inst_39419);
} else {
if((state_val_39422 === (4))){
var inst_39404 = (state_39421[(10)]);
var inst_39409 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39404);
var state_39421__$1 = state_39421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39421__$1,(7),inst_39409);
} else {
if((state_val_39422 === (5))){
var inst_39415 = cljs.core.async.close_BANG_.call(null,out);
var state_39421__$1 = state_39421;
var statearr_39428_39443 = state_39421__$1;
(statearr_39428_39443[(2)] = inst_39415);

(statearr_39428_39443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39422 === (6))){
var inst_39417 = (state_39421[(2)]);
var state_39421__$1 = state_39421;
var statearr_39429_39444 = state_39421__$1;
(statearr_39429_39444[(2)] = inst_39417);

(statearr_39429_39444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39422 === (7))){
var inst_39405 = (state_39421[(11)]);
var inst_39411 = (state_39421[(2)]);
var inst_39412 = cljs.core.async.put_BANG_.call(null,out,inst_39411);
var inst_39401 = inst_39405;
var state_39421__$1 = (function (){var statearr_39430 = state_39421;
(statearr_39430[(7)] = inst_39401);

(statearr_39430[(12)] = inst_39412);

return statearr_39430;
})();
var statearr_39431_39445 = state_39421__$1;
(statearr_39431_39445[(2)] = null);

(statearr_39431_39445[(1)] = (2));


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
});})(c__20906__auto___39439,out))
;
return ((function (switch__20794__auto__,c__20906__auto___39439,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto____0 = (function (){
var statearr_39435 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39435[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto__);

(statearr_39435[(1)] = (1));

return statearr_39435;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto____1 = (function (state_39421){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_39421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e39436){if((e39436 instanceof Object)){
var ex__20798__auto__ = e39436;
var statearr_39437_39446 = state_39421;
(statearr_39437_39446[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39447 = state_39421;
state_39421 = G__39447;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto__ = function(state_39421){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto____1.call(this,state_39421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___39439,out))
})();
var state__20908__auto__ = (function (){var statearr_39438 = f__20907__auto__.call(null);
(statearr_39438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___39439);

return statearr_39438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___39439,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39448,opts){
var map__39452 = p__39448;
var map__39452__$1 = ((((!((map__39452 == null)))?((((map__39452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39452):map__39452);
var eval_body__$1 = cljs.core.get.call(null,map__39452__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39452__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18727__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18727__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18727__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39454){var e = e39454;
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
return (function (p1__39455_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39455_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__39460){
var vec__39461 = p__39460;
var k = cljs.core.nth.call(null,vec__39461,(0),null);
var v = cljs.core.nth.call(null,vec__39461,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39462){
var vec__39463 = p__39462;
var k = cljs.core.nth.call(null,vec__39463,(0),null);
var v = cljs.core.nth.call(null,vec__39463,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39467,p__39468){
var map__39715 = p__39467;
var map__39715__$1 = ((((!((map__39715 == null)))?((((map__39715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39715):map__39715);
var opts = map__39715__$1;
var before_jsload = cljs.core.get.call(null,map__39715__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39715__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39715__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39716 = p__39468;
var map__39716__$1 = ((((!((map__39716 == null)))?((((map__39716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39716):map__39716);
var msg = map__39716__$1;
var files = cljs.core.get.call(null,map__39716__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39716__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39716__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39869){
var state_val_39870 = (state_39869[(1)]);
if((state_val_39870 === (7))){
var inst_39730 = (state_39869[(7)]);
var inst_39733 = (state_39869[(8)]);
var inst_39732 = (state_39869[(9)]);
var inst_39731 = (state_39869[(10)]);
var inst_39738 = cljs.core._nth.call(null,inst_39731,inst_39733);
var inst_39739 = figwheel.client.file_reloading.eval_body.call(null,inst_39738,opts);
var inst_39740 = (inst_39733 + (1));
var tmp39871 = inst_39730;
var tmp39872 = inst_39732;
var tmp39873 = inst_39731;
var inst_39730__$1 = tmp39871;
var inst_39731__$1 = tmp39873;
var inst_39732__$1 = tmp39872;
var inst_39733__$1 = inst_39740;
var state_39869__$1 = (function (){var statearr_39874 = state_39869;
(statearr_39874[(7)] = inst_39730__$1);

(statearr_39874[(8)] = inst_39733__$1);

(statearr_39874[(9)] = inst_39732__$1);

(statearr_39874[(10)] = inst_39731__$1);

(statearr_39874[(11)] = inst_39739);

return statearr_39874;
})();
var statearr_39875_39961 = state_39869__$1;
(statearr_39875_39961[(2)] = null);

(statearr_39875_39961[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (20))){
var inst_39773 = (state_39869[(12)]);
var inst_39781 = figwheel.client.file_reloading.sort_files.call(null,inst_39773);
var state_39869__$1 = state_39869;
var statearr_39876_39962 = state_39869__$1;
(statearr_39876_39962[(2)] = inst_39781);

(statearr_39876_39962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (27))){
var state_39869__$1 = state_39869;
var statearr_39877_39963 = state_39869__$1;
(statearr_39877_39963[(2)] = null);

(statearr_39877_39963[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (1))){
var inst_39722 = (state_39869[(13)]);
var inst_39719 = before_jsload.call(null,files);
var inst_39720 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39721 = (function (){return ((function (inst_39722,inst_39719,inst_39720,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39464_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39464_SHARP_);
});
;})(inst_39722,inst_39719,inst_39720,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39722__$1 = cljs.core.filter.call(null,inst_39721,files);
var inst_39723 = cljs.core.not_empty.call(null,inst_39722__$1);
var state_39869__$1 = (function (){var statearr_39878 = state_39869;
(statearr_39878[(13)] = inst_39722__$1);

(statearr_39878[(14)] = inst_39720);

(statearr_39878[(15)] = inst_39719);

return statearr_39878;
})();
if(cljs.core.truth_(inst_39723)){
var statearr_39879_39964 = state_39869__$1;
(statearr_39879_39964[(1)] = (2));

} else {
var statearr_39880_39965 = state_39869__$1;
(statearr_39880_39965[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (24))){
var state_39869__$1 = state_39869;
var statearr_39881_39966 = state_39869__$1;
(statearr_39881_39966[(2)] = null);

(statearr_39881_39966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (39))){
var inst_39823 = (state_39869[(16)]);
var state_39869__$1 = state_39869;
var statearr_39882_39967 = state_39869__$1;
(statearr_39882_39967[(2)] = inst_39823);

(statearr_39882_39967[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (46))){
var inst_39864 = (state_39869[(2)]);
var state_39869__$1 = state_39869;
var statearr_39883_39968 = state_39869__$1;
(statearr_39883_39968[(2)] = inst_39864);

(statearr_39883_39968[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (4))){
var inst_39767 = (state_39869[(2)]);
var inst_39768 = cljs.core.List.EMPTY;
var inst_39769 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39768);
var inst_39770 = (function (){return ((function (inst_39767,inst_39768,inst_39769,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39465_SHARP_){
var and__18727__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39465_SHARP_);
if(cljs.core.truth_(and__18727__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39465_SHARP_));
} else {
return and__18727__auto__;
}
});
;})(inst_39767,inst_39768,inst_39769,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39771 = cljs.core.filter.call(null,inst_39770,files);
var inst_39772 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39773 = cljs.core.concat.call(null,inst_39771,inst_39772);
var state_39869__$1 = (function (){var statearr_39884 = state_39869;
(statearr_39884[(17)] = inst_39769);

(statearr_39884[(18)] = inst_39767);

(statearr_39884[(12)] = inst_39773);

return statearr_39884;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39885_39969 = state_39869__$1;
(statearr_39885_39969[(1)] = (16));

} else {
var statearr_39886_39970 = state_39869__$1;
(statearr_39886_39970[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (15))){
var inst_39757 = (state_39869[(2)]);
var state_39869__$1 = state_39869;
var statearr_39887_39971 = state_39869__$1;
(statearr_39887_39971[(2)] = inst_39757);

(statearr_39887_39971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (21))){
var inst_39783 = (state_39869[(19)]);
var inst_39783__$1 = (state_39869[(2)]);
var inst_39784 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39783__$1);
var state_39869__$1 = (function (){var statearr_39888 = state_39869;
(statearr_39888[(19)] = inst_39783__$1);

return statearr_39888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39869__$1,(22),inst_39784);
} else {
if((state_val_39870 === (31))){
var inst_39867 = (state_39869[(2)]);
var state_39869__$1 = state_39869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39869__$1,inst_39867);
} else {
if((state_val_39870 === (32))){
var inst_39823 = (state_39869[(16)]);
var inst_39828 = inst_39823.cljs$lang$protocol_mask$partition0$;
var inst_39829 = (inst_39828 & (64));
var inst_39830 = inst_39823.cljs$core$ISeq$;
var inst_39831 = (inst_39829) || (inst_39830);
var state_39869__$1 = state_39869;
if(cljs.core.truth_(inst_39831)){
var statearr_39889_39972 = state_39869__$1;
(statearr_39889_39972[(1)] = (35));

} else {
var statearr_39890_39973 = state_39869__$1;
(statearr_39890_39973[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (40))){
var inst_39844 = (state_39869[(20)]);
var inst_39843 = (state_39869[(2)]);
var inst_39844__$1 = cljs.core.get.call(null,inst_39843,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39845 = cljs.core.get.call(null,inst_39843,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39846 = cljs.core.not_empty.call(null,inst_39844__$1);
var state_39869__$1 = (function (){var statearr_39891 = state_39869;
(statearr_39891[(21)] = inst_39845);

(statearr_39891[(20)] = inst_39844__$1);

return statearr_39891;
})();
if(cljs.core.truth_(inst_39846)){
var statearr_39892_39974 = state_39869__$1;
(statearr_39892_39974[(1)] = (41));

} else {
var statearr_39893_39975 = state_39869__$1;
(statearr_39893_39975[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (33))){
var state_39869__$1 = state_39869;
var statearr_39894_39976 = state_39869__$1;
(statearr_39894_39976[(2)] = false);

(statearr_39894_39976[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (13))){
var inst_39743 = (state_39869[(22)]);
var inst_39747 = cljs.core.chunk_first.call(null,inst_39743);
var inst_39748 = cljs.core.chunk_rest.call(null,inst_39743);
var inst_39749 = cljs.core.count.call(null,inst_39747);
var inst_39730 = inst_39748;
var inst_39731 = inst_39747;
var inst_39732 = inst_39749;
var inst_39733 = (0);
var state_39869__$1 = (function (){var statearr_39895 = state_39869;
(statearr_39895[(7)] = inst_39730);

(statearr_39895[(8)] = inst_39733);

(statearr_39895[(9)] = inst_39732);

(statearr_39895[(10)] = inst_39731);

return statearr_39895;
})();
var statearr_39896_39977 = state_39869__$1;
(statearr_39896_39977[(2)] = null);

(statearr_39896_39977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (22))){
var inst_39791 = (state_39869[(23)]);
var inst_39786 = (state_39869[(24)]);
var inst_39787 = (state_39869[(25)]);
var inst_39783 = (state_39869[(19)]);
var inst_39786__$1 = (state_39869[(2)]);
var inst_39787__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39786__$1);
var inst_39788 = (function (){var all_files = inst_39783;
var res_SINGLEQUOTE_ = inst_39786__$1;
var res = inst_39787__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39791,inst_39786,inst_39787,inst_39783,inst_39786__$1,inst_39787__$1,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39466_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39466_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39791,inst_39786,inst_39787,inst_39783,inst_39786__$1,inst_39787__$1,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39789 = cljs.core.filter.call(null,inst_39788,inst_39786__$1);
var inst_39790 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39791__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39790);
var inst_39792 = cljs.core.not_empty.call(null,inst_39791__$1);
var state_39869__$1 = (function (){var statearr_39897 = state_39869;
(statearr_39897[(23)] = inst_39791__$1);

(statearr_39897[(24)] = inst_39786__$1);

(statearr_39897[(25)] = inst_39787__$1);

(statearr_39897[(26)] = inst_39789);

return statearr_39897;
})();
if(cljs.core.truth_(inst_39792)){
var statearr_39898_39978 = state_39869__$1;
(statearr_39898_39978[(1)] = (23));

} else {
var statearr_39899_39979 = state_39869__$1;
(statearr_39899_39979[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (36))){
var state_39869__$1 = state_39869;
var statearr_39900_39980 = state_39869__$1;
(statearr_39900_39980[(2)] = false);

(statearr_39900_39980[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (41))){
var inst_39844 = (state_39869[(20)]);
var inst_39848 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39849 = cljs.core.map.call(null,inst_39848,inst_39844);
var inst_39850 = cljs.core.pr_str.call(null,inst_39849);
var inst_39851 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39850)].join('');
var inst_39852 = figwheel.client.utils.log.call(null,inst_39851);
var state_39869__$1 = state_39869;
var statearr_39901_39981 = state_39869__$1;
(statearr_39901_39981[(2)] = inst_39852);

(statearr_39901_39981[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (43))){
var inst_39845 = (state_39869[(21)]);
var inst_39855 = (state_39869[(2)]);
var inst_39856 = cljs.core.not_empty.call(null,inst_39845);
var state_39869__$1 = (function (){var statearr_39902 = state_39869;
(statearr_39902[(27)] = inst_39855);

return statearr_39902;
})();
if(cljs.core.truth_(inst_39856)){
var statearr_39903_39982 = state_39869__$1;
(statearr_39903_39982[(1)] = (44));

} else {
var statearr_39904_39983 = state_39869__$1;
(statearr_39904_39983[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (29))){
var inst_39791 = (state_39869[(23)]);
var inst_39786 = (state_39869[(24)]);
var inst_39787 = (state_39869[(25)]);
var inst_39789 = (state_39869[(26)]);
var inst_39823 = (state_39869[(16)]);
var inst_39783 = (state_39869[(19)]);
var inst_39819 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39822 = (function (){var all_files = inst_39783;
var res_SINGLEQUOTE_ = inst_39786;
var res = inst_39787;
var files_not_loaded = inst_39789;
var dependencies_that_loaded = inst_39791;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39791,inst_39786,inst_39787,inst_39789,inst_39823,inst_39783,inst_39819,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39821){
var map__39905 = p__39821;
var map__39905__$1 = ((((!((map__39905 == null)))?((((map__39905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39905):map__39905);
var namespace = cljs.core.get.call(null,map__39905__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39791,inst_39786,inst_39787,inst_39789,inst_39823,inst_39783,inst_39819,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39823__$1 = cljs.core.group_by.call(null,inst_39822,inst_39789);
var inst_39825 = (inst_39823__$1 == null);
var inst_39826 = cljs.core.not.call(null,inst_39825);
var state_39869__$1 = (function (){var statearr_39907 = state_39869;
(statearr_39907[(28)] = inst_39819);

(statearr_39907[(16)] = inst_39823__$1);

return statearr_39907;
})();
if(inst_39826){
var statearr_39908_39984 = state_39869__$1;
(statearr_39908_39984[(1)] = (32));

} else {
var statearr_39909_39985 = state_39869__$1;
(statearr_39909_39985[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (44))){
var inst_39845 = (state_39869[(21)]);
var inst_39858 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39845);
var inst_39859 = cljs.core.pr_str.call(null,inst_39858);
var inst_39860 = [cljs.core.str("not required: "),cljs.core.str(inst_39859)].join('');
var inst_39861 = figwheel.client.utils.log.call(null,inst_39860);
var state_39869__$1 = state_39869;
var statearr_39910_39986 = state_39869__$1;
(statearr_39910_39986[(2)] = inst_39861);

(statearr_39910_39986[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (6))){
var inst_39764 = (state_39869[(2)]);
var state_39869__$1 = state_39869;
var statearr_39911_39987 = state_39869__$1;
(statearr_39911_39987[(2)] = inst_39764);

(statearr_39911_39987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (28))){
var inst_39789 = (state_39869[(26)]);
var inst_39816 = (state_39869[(2)]);
var inst_39817 = cljs.core.not_empty.call(null,inst_39789);
var state_39869__$1 = (function (){var statearr_39912 = state_39869;
(statearr_39912[(29)] = inst_39816);

return statearr_39912;
})();
if(cljs.core.truth_(inst_39817)){
var statearr_39913_39988 = state_39869__$1;
(statearr_39913_39988[(1)] = (29));

} else {
var statearr_39914_39989 = state_39869__$1;
(statearr_39914_39989[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (25))){
var inst_39787 = (state_39869[(25)]);
var inst_39803 = (state_39869[(2)]);
var inst_39804 = cljs.core.not_empty.call(null,inst_39787);
var state_39869__$1 = (function (){var statearr_39915 = state_39869;
(statearr_39915[(30)] = inst_39803);

return statearr_39915;
})();
if(cljs.core.truth_(inst_39804)){
var statearr_39916_39990 = state_39869__$1;
(statearr_39916_39990[(1)] = (26));

} else {
var statearr_39917_39991 = state_39869__$1;
(statearr_39917_39991[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (34))){
var inst_39838 = (state_39869[(2)]);
var state_39869__$1 = state_39869;
if(cljs.core.truth_(inst_39838)){
var statearr_39918_39992 = state_39869__$1;
(statearr_39918_39992[(1)] = (38));

} else {
var statearr_39919_39993 = state_39869__$1;
(statearr_39919_39993[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (17))){
var state_39869__$1 = state_39869;
var statearr_39920_39994 = state_39869__$1;
(statearr_39920_39994[(2)] = recompile_dependents);

(statearr_39920_39994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (3))){
var state_39869__$1 = state_39869;
var statearr_39921_39995 = state_39869__$1;
(statearr_39921_39995[(2)] = null);

(statearr_39921_39995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (12))){
var inst_39760 = (state_39869[(2)]);
var state_39869__$1 = state_39869;
var statearr_39922_39996 = state_39869__$1;
(statearr_39922_39996[(2)] = inst_39760);

(statearr_39922_39996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (2))){
var inst_39722 = (state_39869[(13)]);
var inst_39729 = cljs.core.seq.call(null,inst_39722);
var inst_39730 = inst_39729;
var inst_39731 = null;
var inst_39732 = (0);
var inst_39733 = (0);
var state_39869__$1 = (function (){var statearr_39923 = state_39869;
(statearr_39923[(7)] = inst_39730);

(statearr_39923[(8)] = inst_39733);

(statearr_39923[(9)] = inst_39732);

(statearr_39923[(10)] = inst_39731);

return statearr_39923;
})();
var statearr_39924_39997 = state_39869__$1;
(statearr_39924_39997[(2)] = null);

(statearr_39924_39997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (23))){
var inst_39791 = (state_39869[(23)]);
var inst_39786 = (state_39869[(24)]);
var inst_39787 = (state_39869[(25)]);
var inst_39789 = (state_39869[(26)]);
var inst_39783 = (state_39869[(19)]);
var inst_39794 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39796 = (function (){var all_files = inst_39783;
var res_SINGLEQUOTE_ = inst_39786;
var res = inst_39787;
var files_not_loaded = inst_39789;
var dependencies_that_loaded = inst_39791;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39791,inst_39786,inst_39787,inst_39789,inst_39783,inst_39794,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39795){
var map__39925 = p__39795;
var map__39925__$1 = ((((!((map__39925 == null)))?((((map__39925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39925):map__39925);
var request_url = cljs.core.get.call(null,map__39925__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39791,inst_39786,inst_39787,inst_39789,inst_39783,inst_39794,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39797 = cljs.core.reverse.call(null,inst_39791);
var inst_39798 = cljs.core.map.call(null,inst_39796,inst_39797);
var inst_39799 = cljs.core.pr_str.call(null,inst_39798);
var inst_39800 = figwheel.client.utils.log.call(null,inst_39799);
var state_39869__$1 = (function (){var statearr_39927 = state_39869;
(statearr_39927[(31)] = inst_39794);

return statearr_39927;
})();
var statearr_39928_39998 = state_39869__$1;
(statearr_39928_39998[(2)] = inst_39800);

(statearr_39928_39998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (35))){
var state_39869__$1 = state_39869;
var statearr_39929_39999 = state_39869__$1;
(statearr_39929_39999[(2)] = true);

(statearr_39929_39999[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (19))){
var inst_39773 = (state_39869[(12)]);
var inst_39779 = figwheel.client.file_reloading.expand_files.call(null,inst_39773);
var state_39869__$1 = state_39869;
var statearr_39930_40000 = state_39869__$1;
(statearr_39930_40000[(2)] = inst_39779);

(statearr_39930_40000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (11))){
var state_39869__$1 = state_39869;
var statearr_39931_40001 = state_39869__$1;
(statearr_39931_40001[(2)] = null);

(statearr_39931_40001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (9))){
var inst_39762 = (state_39869[(2)]);
var state_39869__$1 = state_39869;
var statearr_39932_40002 = state_39869__$1;
(statearr_39932_40002[(2)] = inst_39762);

(statearr_39932_40002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (5))){
var inst_39733 = (state_39869[(8)]);
var inst_39732 = (state_39869[(9)]);
var inst_39735 = (inst_39733 < inst_39732);
var inst_39736 = inst_39735;
var state_39869__$1 = state_39869;
if(cljs.core.truth_(inst_39736)){
var statearr_39933_40003 = state_39869__$1;
(statearr_39933_40003[(1)] = (7));

} else {
var statearr_39934_40004 = state_39869__$1;
(statearr_39934_40004[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (14))){
var inst_39743 = (state_39869[(22)]);
var inst_39752 = cljs.core.first.call(null,inst_39743);
var inst_39753 = figwheel.client.file_reloading.eval_body.call(null,inst_39752,opts);
var inst_39754 = cljs.core.next.call(null,inst_39743);
var inst_39730 = inst_39754;
var inst_39731 = null;
var inst_39732 = (0);
var inst_39733 = (0);
var state_39869__$1 = (function (){var statearr_39935 = state_39869;
(statearr_39935[(7)] = inst_39730);

(statearr_39935[(8)] = inst_39733);

(statearr_39935[(9)] = inst_39732);

(statearr_39935[(10)] = inst_39731);

(statearr_39935[(32)] = inst_39753);

return statearr_39935;
})();
var statearr_39936_40005 = state_39869__$1;
(statearr_39936_40005[(2)] = null);

(statearr_39936_40005[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (45))){
var state_39869__$1 = state_39869;
var statearr_39937_40006 = state_39869__$1;
(statearr_39937_40006[(2)] = null);

(statearr_39937_40006[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (26))){
var inst_39791 = (state_39869[(23)]);
var inst_39786 = (state_39869[(24)]);
var inst_39787 = (state_39869[(25)]);
var inst_39789 = (state_39869[(26)]);
var inst_39783 = (state_39869[(19)]);
var inst_39806 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39808 = (function (){var all_files = inst_39783;
var res_SINGLEQUOTE_ = inst_39786;
var res = inst_39787;
var files_not_loaded = inst_39789;
var dependencies_that_loaded = inst_39791;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39791,inst_39786,inst_39787,inst_39789,inst_39783,inst_39806,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39807){
var map__39938 = p__39807;
var map__39938__$1 = ((((!((map__39938 == null)))?((((map__39938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39938):map__39938);
var namespace = cljs.core.get.call(null,map__39938__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39938__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39791,inst_39786,inst_39787,inst_39789,inst_39783,inst_39806,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39809 = cljs.core.map.call(null,inst_39808,inst_39787);
var inst_39810 = cljs.core.pr_str.call(null,inst_39809);
var inst_39811 = figwheel.client.utils.log.call(null,inst_39810);
var inst_39812 = (function (){var all_files = inst_39783;
var res_SINGLEQUOTE_ = inst_39786;
var res = inst_39787;
var files_not_loaded = inst_39789;
var dependencies_that_loaded = inst_39791;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39791,inst_39786,inst_39787,inst_39789,inst_39783,inst_39806,inst_39808,inst_39809,inst_39810,inst_39811,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39791,inst_39786,inst_39787,inst_39789,inst_39783,inst_39806,inst_39808,inst_39809,inst_39810,inst_39811,state_val_39870,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39813 = setTimeout(inst_39812,(10));
var state_39869__$1 = (function (){var statearr_39940 = state_39869;
(statearr_39940[(33)] = inst_39806);

(statearr_39940[(34)] = inst_39811);

return statearr_39940;
})();
var statearr_39941_40007 = state_39869__$1;
(statearr_39941_40007[(2)] = inst_39813);

(statearr_39941_40007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (16))){
var state_39869__$1 = state_39869;
var statearr_39942_40008 = state_39869__$1;
(statearr_39942_40008[(2)] = reload_dependents);

(statearr_39942_40008[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (38))){
var inst_39823 = (state_39869[(16)]);
var inst_39840 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39823);
var state_39869__$1 = state_39869;
var statearr_39943_40009 = state_39869__$1;
(statearr_39943_40009[(2)] = inst_39840);

(statearr_39943_40009[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (30))){
var state_39869__$1 = state_39869;
var statearr_39944_40010 = state_39869__$1;
(statearr_39944_40010[(2)] = null);

(statearr_39944_40010[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (10))){
var inst_39743 = (state_39869[(22)]);
var inst_39745 = cljs.core.chunked_seq_QMARK_.call(null,inst_39743);
var state_39869__$1 = state_39869;
if(inst_39745){
var statearr_39945_40011 = state_39869__$1;
(statearr_39945_40011[(1)] = (13));

} else {
var statearr_39946_40012 = state_39869__$1;
(statearr_39946_40012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (18))){
var inst_39777 = (state_39869[(2)]);
var state_39869__$1 = state_39869;
if(cljs.core.truth_(inst_39777)){
var statearr_39947_40013 = state_39869__$1;
(statearr_39947_40013[(1)] = (19));

} else {
var statearr_39948_40014 = state_39869__$1;
(statearr_39948_40014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (42))){
var state_39869__$1 = state_39869;
var statearr_39949_40015 = state_39869__$1;
(statearr_39949_40015[(2)] = null);

(statearr_39949_40015[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (37))){
var inst_39835 = (state_39869[(2)]);
var state_39869__$1 = state_39869;
var statearr_39950_40016 = state_39869__$1;
(statearr_39950_40016[(2)] = inst_39835);

(statearr_39950_40016[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (8))){
var inst_39743 = (state_39869[(22)]);
var inst_39730 = (state_39869[(7)]);
var inst_39743__$1 = cljs.core.seq.call(null,inst_39730);
var state_39869__$1 = (function (){var statearr_39951 = state_39869;
(statearr_39951[(22)] = inst_39743__$1);

return statearr_39951;
})();
if(inst_39743__$1){
var statearr_39952_40017 = state_39869__$1;
(statearr_39952_40017[(1)] = (10));

} else {
var statearr_39953_40018 = state_39869__$1;
(statearr_39953_40018[(1)] = (11));

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
});})(c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20794__auto__,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto____0 = (function (){
var statearr_39957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39957[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto__);

(statearr_39957[(1)] = (1));

return statearr_39957;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto____1 = (function (state_39869){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_39869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e39958){if((e39958 instanceof Object)){
var ex__20798__auto__ = e39958;
var statearr_39959_40019 = state_39869;
(statearr_39959_40019[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40020 = state_39869;
state_39869 = G__40020;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto__ = function(state_39869){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto____1.call(this,state_39869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20908__auto__ = (function (){var statearr_39960 = f__20907__auto__.call(null);
(statearr_39960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto__);

return statearr_39960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto__,map__39715,map__39715__$1,opts,before_jsload,on_jsload,reload_dependents,map__39716,map__39716__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20906__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40023,link){
var map__40026 = p__40023;
var map__40026__$1 = ((((!((map__40026 == null)))?((((map__40026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40026):map__40026);
var file = cljs.core.get.call(null,map__40026__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__40026,map__40026__$1,file){
return (function (p1__40021_SHARP_,p2__40022_SHARP_){
if(cljs.core._EQ_.call(null,p1__40021_SHARP_,p2__40022_SHARP_)){
return p1__40021_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__40026,map__40026__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40032){
var map__40033 = p__40032;
var map__40033__$1 = ((((!((map__40033 == null)))?((((map__40033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40033):map__40033);
var match_length = cljs.core.get.call(null,map__40033__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40033__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40028_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40028_SHARP_);
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
var args40035 = [];
var len__19809__auto___40038 = arguments.length;
var i__19810__auto___40039 = (0);
while(true){
if((i__19810__auto___40039 < len__19809__auto___40038)){
args40035.push((arguments[i__19810__auto___40039]));

var G__40040 = (i__19810__auto___40039 + (1));
i__19810__auto___40039 = G__40040;
continue;
} else {
}
break;
}

var G__40037 = args40035.length;
switch (G__40037) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40035.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40042_SHARP_,p2__40043_SHARP_){
return cljs.core.assoc.call(null,p1__40042_SHARP_,cljs.core.get.call(null,p2__40043_SHARP_,key),p2__40043_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40044){
var map__40047 = p__40044;
var map__40047__$1 = ((((!((map__40047 == null)))?((((map__40047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40047):map__40047);
var f_data = map__40047__$1;
var file = cljs.core.get.call(null,map__40047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40049,files_msg){
var map__40056 = p__40049;
var map__40056__$1 = ((((!((map__40056 == null)))?((((map__40056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40056):map__40056);
var opts = map__40056__$1;
var on_cssload = cljs.core.get.call(null,map__40056__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40058_40062 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__40059_40063 = null;
var count__40060_40064 = (0);
var i__40061_40065 = (0);
while(true){
if((i__40061_40065 < count__40060_40064)){
var f_40066 = cljs.core._nth.call(null,chunk__40059_40063,i__40061_40065);
figwheel.client.file_reloading.reload_css_file.call(null,f_40066);

var G__40067 = seq__40058_40062;
var G__40068 = chunk__40059_40063;
var G__40069 = count__40060_40064;
var G__40070 = (i__40061_40065 + (1));
seq__40058_40062 = G__40067;
chunk__40059_40063 = G__40068;
count__40060_40064 = G__40069;
i__40061_40065 = G__40070;
continue;
} else {
var temp__4657__auto___40071 = cljs.core.seq.call(null,seq__40058_40062);
if(temp__4657__auto___40071){
var seq__40058_40072__$1 = temp__4657__auto___40071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40058_40072__$1)){
var c__19550__auto___40073 = cljs.core.chunk_first.call(null,seq__40058_40072__$1);
var G__40074 = cljs.core.chunk_rest.call(null,seq__40058_40072__$1);
var G__40075 = c__19550__auto___40073;
var G__40076 = cljs.core.count.call(null,c__19550__auto___40073);
var G__40077 = (0);
seq__40058_40062 = G__40074;
chunk__40059_40063 = G__40075;
count__40060_40064 = G__40076;
i__40061_40065 = G__40077;
continue;
} else {
var f_40078 = cljs.core.first.call(null,seq__40058_40072__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_40078);

var G__40079 = cljs.core.next.call(null,seq__40058_40072__$1);
var G__40080 = null;
var G__40081 = (0);
var G__40082 = (0);
seq__40058_40062 = G__40079;
chunk__40059_40063 = G__40080;
count__40060_40064 = G__40081;
i__40061_40065 = G__40082;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40056,map__40056__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__40056,map__40056__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1465694406066