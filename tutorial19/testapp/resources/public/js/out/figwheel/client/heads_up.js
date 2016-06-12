// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19816__auto__ = [];
var len__19809__auto___40220 = arguments.length;
var i__19810__auto___40221 = (0);
while(true){
if((i__19810__auto___40221 < len__19809__auto___40220)){
args__19816__auto__.push((arguments[i__19810__auto___40221]));

var G__40222 = (i__19810__auto___40221 + (1));
i__19810__auto___40221 = G__40222;
continue;
} else {
}
break;
}

var argseq__19817__auto__ = ((((2) < args__19816__auto__.length))?(new cljs.core.IndexedSeq(args__19816__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19817__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__40212_40223 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__40213_40224 = null;
var count__40214_40225 = (0);
var i__40215_40226 = (0);
while(true){
if((i__40215_40226 < count__40214_40225)){
var k_40227 = cljs.core._nth.call(null,chunk__40213_40224,i__40215_40226);
e.setAttribute(cljs.core.name.call(null,k_40227),cljs.core.get.call(null,attrs,k_40227));

var G__40228 = seq__40212_40223;
var G__40229 = chunk__40213_40224;
var G__40230 = count__40214_40225;
var G__40231 = (i__40215_40226 + (1));
seq__40212_40223 = G__40228;
chunk__40213_40224 = G__40229;
count__40214_40225 = G__40230;
i__40215_40226 = G__40231;
continue;
} else {
var temp__4657__auto___40232 = cljs.core.seq.call(null,seq__40212_40223);
if(temp__4657__auto___40232){
var seq__40212_40233__$1 = temp__4657__auto___40232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40212_40233__$1)){
var c__19550__auto___40234 = cljs.core.chunk_first.call(null,seq__40212_40233__$1);
var G__40235 = cljs.core.chunk_rest.call(null,seq__40212_40233__$1);
var G__40236 = c__19550__auto___40234;
var G__40237 = cljs.core.count.call(null,c__19550__auto___40234);
var G__40238 = (0);
seq__40212_40223 = G__40235;
chunk__40213_40224 = G__40236;
count__40214_40225 = G__40237;
i__40215_40226 = G__40238;
continue;
} else {
var k_40239 = cljs.core.first.call(null,seq__40212_40233__$1);
e.setAttribute(cljs.core.name.call(null,k_40239),cljs.core.get.call(null,attrs,k_40239));

var G__40240 = cljs.core.next.call(null,seq__40212_40233__$1);
var G__40241 = null;
var G__40242 = (0);
var G__40243 = (0);
seq__40212_40223 = G__40240;
chunk__40213_40224 = G__40241;
count__40214_40225 = G__40242;
i__40215_40226 = G__40243;
continue;
}
} else {
}
}
break;
}

var seq__40216_40244 = cljs.core.seq.call(null,children);
var chunk__40217_40245 = null;
var count__40218_40246 = (0);
var i__40219_40247 = (0);
while(true){
if((i__40219_40247 < count__40218_40246)){
var ch_40248 = cljs.core._nth.call(null,chunk__40217_40245,i__40219_40247);
e.appendChild(ch_40248);

var G__40249 = seq__40216_40244;
var G__40250 = chunk__40217_40245;
var G__40251 = count__40218_40246;
var G__40252 = (i__40219_40247 + (1));
seq__40216_40244 = G__40249;
chunk__40217_40245 = G__40250;
count__40218_40246 = G__40251;
i__40219_40247 = G__40252;
continue;
} else {
var temp__4657__auto___40253 = cljs.core.seq.call(null,seq__40216_40244);
if(temp__4657__auto___40253){
var seq__40216_40254__$1 = temp__4657__auto___40253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40216_40254__$1)){
var c__19550__auto___40255 = cljs.core.chunk_first.call(null,seq__40216_40254__$1);
var G__40256 = cljs.core.chunk_rest.call(null,seq__40216_40254__$1);
var G__40257 = c__19550__auto___40255;
var G__40258 = cljs.core.count.call(null,c__19550__auto___40255);
var G__40259 = (0);
seq__40216_40244 = G__40256;
chunk__40217_40245 = G__40257;
count__40218_40246 = G__40258;
i__40219_40247 = G__40259;
continue;
} else {
var ch_40260 = cljs.core.first.call(null,seq__40216_40254__$1);
e.appendChild(ch_40260);

var G__40261 = cljs.core.next.call(null,seq__40216_40254__$1);
var G__40262 = null;
var G__40263 = (0);
var G__40264 = (0);
seq__40216_40244 = G__40261;
chunk__40217_40245 = G__40262;
count__40218_40246 = G__40263;
i__40219_40247 = G__40264;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq40209){
var G__40210 = cljs.core.first.call(null,seq40209);
var seq40209__$1 = cljs.core.next.call(null,seq40209);
var G__40211 = cljs.core.first.call(null,seq40209__$1);
var seq40209__$2 = cljs.core.next.call(null,seq40209__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__40210,G__40211,seq40209__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19665__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19666__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19667__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19668__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19664__auto__,prefer_table__19665__auto__,method_cache__19666__auto__,cached_hierarchy__19667__auto__,hierarchy__19668__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19664__auto__,prefer_table__19665__auto__,method_cache__19666__auto__,cached_hierarchy__19667__auto__,hierarchy__19668__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19668__auto__,method_table__19664__auto__,prefer_table__19665__auto__,method_cache__19666__auto__,cached_hierarchy__19667__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_40265 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_40265.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_40265.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_40265.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_40265);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__40266,st_map){
var map__40271 = p__40266;
var map__40271__$1 = ((((!((map__40271 == null)))?((((map__40271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40271):map__40271);
var container_el = cljs.core.get.call(null,map__40271__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__40271,map__40271__$1,container_el){
return (function (p__40273){
var vec__40274 = p__40273;
var k = cljs.core.nth.call(null,vec__40274,(0),null);
var v = cljs.core.nth.call(null,vec__40274,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__40271,map__40271__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__40275,dom_str){
var map__40278 = p__40275;
var map__40278__$1 = ((((!((map__40278 == null)))?((((map__40278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40278):map__40278);
var c = map__40278__$1;
var content_area_el = cljs.core.get.call(null,map__40278__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__40280){
var map__40283 = p__40280;
var map__40283__$1 = ((((!((map__40283 == null)))?((((map__40283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40283):map__40283);
var content_area_el = cljs.core.get.call(null,map__40283__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto__){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto__){
return (function (state_40326){
var state_val_40327 = (state_40326[(1)]);
if((state_val_40327 === (1))){
var inst_40311 = (state_40326[(7)]);
var inst_40311__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_40312 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_40313 = ["10px","10px","100%","68px","1.0"];
var inst_40314 = cljs.core.PersistentHashMap.fromArrays(inst_40312,inst_40313);
var inst_40315 = cljs.core.merge.call(null,inst_40314,style);
var inst_40316 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40311__$1,inst_40315);
var inst_40317 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_40311__$1,msg);
var inst_40318 = cljs.core.async.timeout.call(null,(300));
var state_40326__$1 = (function (){var statearr_40328 = state_40326;
(statearr_40328[(7)] = inst_40311__$1);

(statearr_40328[(8)] = inst_40316);

(statearr_40328[(9)] = inst_40317);

return statearr_40328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40326__$1,(2),inst_40318);
} else {
if((state_val_40327 === (2))){
var inst_40311 = (state_40326[(7)]);
var inst_40320 = (state_40326[(2)]);
var inst_40321 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_40322 = ["auto"];
var inst_40323 = cljs.core.PersistentHashMap.fromArrays(inst_40321,inst_40322);
var inst_40324 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40311,inst_40323);
var state_40326__$1 = (function (){var statearr_40329 = state_40326;
(statearr_40329[(10)] = inst_40320);

return statearr_40329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40326__$1,inst_40324);
} else {
return null;
}
}
});})(c__20906__auto__))
;
return ((function (switch__20794__auto__,c__20906__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto____0 = (function (){
var statearr_40333 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40333[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto__);

(statearr_40333[(1)] = (1));

return statearr_40333;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto____1 = (function (state_40326){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_40326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e40334){if((e40334 instanceof Object)){
var ex__20798__auto__ = e40334;
var statearr_40335_40337 = state_40326;
(statearr_40335_40337[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40338 = state_40326;
state_40326 = G__40338;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto__ = function(state_40326){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto____1.call(this,state_40326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto__))
})();
var state__20908__auto__ = (function (){var statearr_40336 = f__20907__auto__.call(null);
(statearr_40336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto__);

return statearr_40336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto__))
);

return c__20906__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args40339 = [];
var len__19809__auto___40342 = arguments.length;
var i__19810__auto___40343 = (0);
while(true){
if((i__19810__auto___40343 < len__19809__auto___40342)){
args40339.push((arguments[i__19810__auto___40343]));

var G__40344 = (i__19810__auto___40343 + (1));
i__19810__auto___40343 = G__40344;
continue;
} else {
}
break;
}

var G__40341 = args40339.length;
switch (G__40341) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40339.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__40347 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__40347,(0),null);
var ln = cljs.core.nth.call(null,vec__40347,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__40350 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__40350,(0),null);
var file_line = cljs.core.nth.call(null,vec__40350,(1),null);
var file_column = cljs.core.nth.call(null,vec__40350,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__40350,file_name,file_line,file_column){
return (function (p1__40348_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__40348_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__40350,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18739__auto__ = file_line;
if(cljs.core.truth_(or__18739__auto__)){
return or__18739__auto__;
} else {
var and__18727__auto__ = cause;
if(cljs.core.truth_(and__18727__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18727__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(ex){
return cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),ex));
});
figwheel.client.heads_up.exception_info_QMARK_ = (function figwheel$client$heads_up$exception_info_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.Symbol(null,"clojure.lang.ExceptionInfo","clojure.lang.ExceptionInfo",-550564927,null));
});
figwheel.client.heads_up.parse_failed_compile = (function figwheel$client$heads_up$parse_failed_compile(p__40351){
var map__40354 = p__40351;
var map__40354__$1 = ((((!((map__40354 == null)))?((((map__40354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40354):map__40354);
var ex = map__40354__$1;
var exception_data = cljs.core.get.call(null,map__40354__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var exception = cljs.core.first.call(null,exception_data);
if(cljs.core.truth_((function (){var and__18727__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exception);
if(cljs.core.truth_(and__18727__auto__)){
return cljs.core.re_matches.call(null,/failed compiling.*/,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception));
} else {
return and__18727__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503),true,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.get_in.call(null,exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_analysis_error = (function figwheel$client$heads_up$parse_analysis_error(p__40356){
var map__40362 = p__40356;
var map__40362__$1 = ((((!((map__40362 == null)))?((((map__40362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40362):map__40362);
var ex = map__40362__$1;
var exception_data = cljs.core.get.call(null,map__40362__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__40362,map__40362__$1,ex,exception_data){
return (function (p__40364){
var map__40365 = p__40364;
var map__40365__$1 = ((((!((map__40365 == null)))?((((map__40365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40365):map__40365);
var exc = map__40365__$1;
var data = cljs.core.get.call(null,map__40365__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__18727__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__18727__auto__)){
return data;
} else {
return and__18727__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349));
} else {
return null;
}
});})(map__40362,map__40362__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var analysis_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285),analysis_exception,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"class","class",-2030961996)], null))], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(analysis_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__18739__auto__ = cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__18739__auto__)){
return or__18739__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(analysis_exception);
}
})()], null));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_reader_error = (function figwheel$client$heads_up$parse_reader_error(p__40367){
var map__40373 = p__40367;
var map__40373__$1 = ((((!((map__40373 == null)))?((((map__40373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40373):map__40373);
var ex = map__40373__$1;
var exception_data = cljs.core.get.call(null,map__40373__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__40373,map__40373__$1,ex,exception_data){
return (function (p__40375){
var map__40376 = p__40375;
var map__40376__$1 = ((((!((map__40376 == null)))?((((map__40376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40376):map__40376);
var exc = map__40376__$1;
var data = cljs.core.get.call(null,map__40376__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__18727__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__18727__auto__)){
return data;
} else {
return and__18727__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
} else {
return null;
}
});})(map__40373,map__40373__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var reader_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),reader_exception], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reader_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(reader_exception)], null));
} else {
return ex;
}
});
figwheel.client.heads_up.patch_eof_reader_exception = (function figwheel$client$heads_up$patch_eof_reader_exception(p__40378){
var map__40382 = p__40378;
var map__40382__$1 = ((((!((map__40382 == null)))?((((map__40382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40382):map__40382);
var ex = map__40382__$1;
var reader_exception = cljs.core.get.call(null,map__40382__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var message = cljs.core.get.call(null,map__40382__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__18727__auto__ = reader_exception;
if(cljs.core.truth_(and__18727__auto__)){
return cljs.core.re_matches.call(null,/EOF while reading, starting.*/,message);
} else {
return and__18727__auto__;
}
})())){
var temp__4657__auto__ = cljs.core.re_matches.call(null,/.*line\s(\d*)\sand\scolumn\s(\d*).*/,message);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__40384 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__40384,(0),null);
var line = cljs.core.nth.call(null,vec__40384,(1),null);
var column = cljs.core.nth.call(null,vec__40384,(2),null);
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),(line | (0)),new cljs.core.Keyword(null,"column","column",2078222095),(column | (0)));
} else {
return null;
}
} else {
return ex;
}
});
figwheel.client.heads_up.ensure_file_line = (function figwheel$client$heads_up$ensure_file_line(p__40385){
var map__40391 = p__40385;
var map__40391__$1 = ((((!((map__40391 == null)))?((((map__40391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40391):map__40391);
var ex = map__40391__$1;
var exception_data = cljs.core.get.call(null,map__40391__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var map__40393 = cljs.core.apply.call(null,cljs.core.merge,cljs.core.keep.call(null,new cljs.core.Keyword(null,"data","data",-232669377),exception_data));
var map__40393__$1 = ((((!((map__40393 == null)))?((((map__40393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40393):map__40393);
var file = cljs.core.get.call(null,map__40393__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40393__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__40395 = ex;
var G__40395__$1 = (((new cljs.core.Keyword(null,"file","file",-1269645878) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"file","file",-1269645878),file,G__40395):G__40395);
var G__40395__$2 = (((new cljs.core.Keyword(null,"line","line",212345235) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),line,G__40395__$1):G__40395__$1);
if((new cljs.core.Keyword(null,"message","message",-406056002) == null)){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.last.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"message","message",-406056002),exception_data)),G__40395__$2);
} else {
return G__40395__$2;
}
});
figwheel.client.heads_up.remove_file_from_message = (function figwheel$client$heads_up$remove_file_from_message(p__40396){
var map__40399 = p__40396;
var map__40399__$1 = ((((!((map__40399 == null)))?((((map__40399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40399):map__40399);
var ex = map__40399__$1;
var message = cljs.core.get.call(null,map__40399__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__40399__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18727__auto__ = file;
if(cljs.core.truth_(and__18727__auto__)){
return cljs.core.re_matches.call(null,/.*in file.*/,message);
} else {
return and__18727__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.first.call(null,clojure.string.split.call(null,message,"in file")));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_exception = (function figwheel$client$heads_up$parse_exception(exception_data){
return figwheel.client.heads_up.remove_file_from_message.call(null,figwheel.client.heads_up.patch_eof_reader_exception.call(null,figwheel.client.heads_up.parse_reader_error.call(null,figwheel.client.heads_up.parse_analysis_error.call(null,figwheel.client.heads_up.parse_failed_compile.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886),exception_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886)], null),figwheel.client.heads_up.flatten_exception))))));
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__40403){
var map__40406 = p__40403;
var map__40406__$1 = ((((!((map__40406 == null)))?((((map__40406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40406):map__40406);
var exception = map__40406__$1;
var failed_compiling = cljs.core.get.call(null,map__40406__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__40406__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__40406__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__40406__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__40406__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40406__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40406__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__40406__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var last_message = (cljs.core.truth_((function (){var and__18727__auto__ = file;
if(cljs.core.truth_(and__18727__auto__)){
return line;
} else {
return and__18727__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__40406,map__40406__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__40401_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__40401_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__40406,map__40406__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join('')], null):cljs.core.map.call(null,((function (last_message,map__40406,map__40406__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__40402_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__40402_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__40402_SHARP_)))].join('');
});})(last_message,map__40406,map__40406__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__40411 = figwheel.client.heads_up.exception__GT_display_data.call(null,figwheel.client.heads_up.parse_exception.call(null,exception_data));
var map__40411__$1 = ((((!((map__40411 == null)))?((((map__40411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40411):map__40411);
var head = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40411__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__40415 = figwheel.client.heads_up.ensure_container.call(null);
var map__40415__$1 = ((((!((map__40415 == null)))?((((map__40415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40415):map__40415);
var content_area_el = cljs.core.get.call(null,map__40415__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto__){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto__){
return (function (state_40463){
var state_val_40464 = (state_40463[(1)]);
if((state_val_40464 === (1))){
var inst_40446 = (state_40463[(7)]);
var inst_40446__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_40447 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_40448 = ["0.0"];
var inst_40449 = cljs.core.PersistentHashMap.fromArrays(inst_40447,inst_40448);
var inst_40450 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40446__$1,inst_40449);
var inst_40451 = cljs.core.async.timeout.call(null,(300));
var state_40463__$1 = (function (){var statearr_40465 = state_40463;
(statearr_40465[(7)] = inst_40446__$1);

(statearr_40465[(8)] = inst_40450);

return statearr_40465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40463__$1,(2),inst_40451);
} else {
if((state_val_40464 === (2))){
var inst_40446 = (state_40463[(7)]);
var inst_40453 = (state_40463[(2)]);
var inst_40454 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_40455 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_40456 = cljs.core.PersistentHashMap.fromArrays(inst_40454,inst_40455);
var inst_40457 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_40446,inst_40456);
var inst_40458 = cljs.core.async.timeout.call(null,(200));
var state_40463__$1 = (function (){var statearr_40466 = state_40463;
(statearr_40466[(9)] = inst_40457);

(statearr_40466[(10)] = inst_40453);

return statearr_40466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40463__$1,(3),inst_40458);
} else {
if((state_val_40464 === (3))){
var inst_40446 = (state_40463[(7)]);
var inst_40460 = (state_40463[(2)]);
var inst_40461 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_40446,"");
var state_40463__$1 = (function (){var statearr_40467 = state_40463;
(statearr_40467[(11)] = inst_40460);

return statearr_40467;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40463__$1,inst_40461);
} else {
return null;
}
}
}
});})(c__20906__auto__))
;
return ((function (switch__20794__auto__,c__20906__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20795__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20795__auto____0 = (function (){
var statearr_40471 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40471[(0)] = figwheel$client$heads_up$clear_$_state_machine__20795__auto__);

(statearr_40471[(1)] = (1));

return statearr_40471;
});
var figwheel$client$heads_up$clear_$_state_machine__20795__auto____1 = (function (state_40463){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_40463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e40472){if((e40472 instanceof Object)){
var ex__20798__auto__ = e40472;
var statearr_40473_40475 = state_40463;
(statearr_40473_40475[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40476 = state_40463;
state_40463 = G__40476;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20795__auto__ = function(state_40463){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20795__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20795__auto____1.call(this,state_40463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20795__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20795__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto__))
})();
var state__20908__auto__ = (function (){var statearr_40474 = f__20907__auto__.call(null);
(statearr_40474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto__);

return statearr_40474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto__))
);

return c__20906__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto__){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto__){
return (function (state_40508){
var state_val_40509 = (state_40508[(1)]);
if((state_val_40509 === (1))){
var inst_40498 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_40508__$1 = state_40508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40508__$1,(2),inst_40498);
} else {
if((state_val_40509 === (2))){
var inst_40500 = (state_40508[(2)]);
var inst_40501 = cljs.core.async.timeout.call(null,(400));
var state_40508__$1 = (function (){var statearr_40510 = state_40508;
(statearr_40510[(7)] = inst_40500);

return statearr_40510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40508__$1,(3),inst_40501);
} else {
if((state_val_40509 === (3))){
var inst_40503 = (state_40508[(2)]);
var inst_40504 = figwheel.client.heads_up.clear.call(null);
var state_40508__$1 = (function (){var statearr_40511 = state_40508;
(statearr_40511[(8)] = inst_40503);

return statearr_40511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40508__$1,(4),inst_40504);
} else {
if((state_val_40509 === (4))){
var inst_40506 = (state_40508[(2)]);
var state_40508__$1 = state_40508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40508__$1,inst_40506);
} else {
return null;
}
}
}
}
});})(c__20906__auto__))
;
return ((function (switch__20794__auto__,c__20906__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto____0 = (function (){
var statearr_40515 = [null,null,null,null,null,null,null,null,null];
(statearr_40515[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto__);

(statearr_40515[(1)] = (1));

return statearr_40515;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto____1 = (function (state_40508){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_40508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e40516){if((e40516 instanceof Object)){
var ex__20798__auto__ = e40516;
var statearr_40517_40519 = state_40508;
(statearr_40517_40519[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40520 = state_40508;
state_40508 = G__40520;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto__ = function(state_40508){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto____1.call(this,state_40508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto__))
})();
var state__20908__auto__ = (function (){var statearr_40518 = f__20907__auto__.call(null);
(statearr_40518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto__);

return statearr_40518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto__))
);

return c__20906__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1465694406470