// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19519__auto__ = [];
var len__19512__auto___24529 = arguments.length;
var i__19513__auto___24530 = (0);
while(true){
if((i__19513__auto___24530 < len__19512__auto___24529)){
args__19519__auto__.push((arguments[i__19513__auto___24530]));

var G__24531 = (i__19513__auto___24530 + (1));
i__19513__auto___24530 = G__24531;
continue;
} else {
}
break;
}

var argseq__19520__auto__ = ((((2) < args__19519__auto__.length))?(new cljs.core.IndexedSeq(args__19519__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19520__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24521_24532 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24522_24533 = null;
var count__24523_24534 = (0);
var i__24524_24535 = (0);
while(true){
if((i__24524_24535 < count__24523_24534)){
var k_24536 = cljs.core._nth.call(null,chunk__24522_24533,i__24524_24535);
e.setAttribute(cljs.core.name.call(null,k_24536),cljs.core.get.call(null,attrs,k_24536));

var G__24537 = seq__24521_24532;
var G__24538 = chunk__24522_24533;
var G__24539 = count__24523_24534;
var G__24540 = (i__24524_24535 + (1));
seq__24521_24532 = G__24537;
chunk__24522_24533 = G__24538;
count__24523_24534 = G__24539;
i__24524_24535 = G__24540;
continue;
} else {
var temp__4657__auto___24541 = cljs.core.seq.call(null,seq__24521_24532);
if(temp__4657__auto___24541){
var seq__24521_24542__$1 = temp__4657__auto___24541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24521_24542__$1)){
var c__19253__auto___24543 = cljs.core.chunk_first.call(null,seq__24521_24542__$1);
var G__24544 = cljs.core.chunk_rest.call(null,seq__24521_24542__$1);
var G__24545 = c__19253__auto___24543;
var G__24546 = cljs.core.count.call(null,c__19253__auto___24543);
var G__24547 = (0);
seq__24521_24532 = G__24544;
chunk__24522_24533 = G__24545;
count__24523_24534 = G__24546;
i__24524_24535 = G__24547;
continue;
} else {
var k_24548 = cljs.core.first.call(null,seq__24521_24542__$1);
e.setAttribute(cljs.core.name.call(null,k_24548),cljs.core.get.call(null,attrs,k_24548));

var G__24549 = cljs.core.next.call(null,seq__24521_24542__$1);
var G__24550 = null;
var G__24551 = (0);
var G__24552 = (0);
seq__24521_24532 = G__24549;
chunk__24522_24533 = G__24550;
count__24523_24534 = G__24551;
i__24524_24535 = G__24552;
continue;
}
} else {
}
}
break;
}

var seq__24525_24553 = cljs.core.seq.call(null,children);
var chunk__24526_24554 = null;
var count__24527_24555 = (0);
var i__24528_24556 = (0);
while(true){
if((i__24528_24556 < count__24527_24555)){
var ch_24557 = cljs.core._nth.call(null,chunk__24526_24554,i__24528_24556);
e.appendChild(ch_24557);

var G__24558 = seq__24525_24553;
var G__24559 = chunk__24526_24554;
var G__24560 = count__24527_24555;
var G__24561 = (i__24528_24556 + (1));
seq__24525_24553 = G__24558;
chunk__24526_24554 = G__24559;
count__24527_24555 = G__24560;
i__24528_24556 = G__24561;
continue;
} else {
var temp__4657__auto___24562 = cljs.core.seq.call(null,seq__24525_24553);
if(temp__4657__auto___24562){
var seq__24525_24563__$1 = temp__4657__auto___24562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24525_24563__$1)){
var c__19253__auto___24564 = cljs.core.chunk_first.call(null,seq__24525_24563__$1);
var G__24565 = cljs.core.chunk_rest.call(null,seq__24525_24563__$1);
var G__24566 = c__19253__auto___24564;
var G__24567 = cljs.core.count.call(null,c__19253__auto___24564);
var G__24568 = (0);
seq__24525_24553 = G__24565;
chunk__24526_24554 = G__24566;
count__24527_24555 = G__24567;
i__24528_24556 = G__24568;
continue;
} else {
var ch_24569 = cljs.core.first.call(null,seq__24525_24563__$1);
e.appendChild(ch_24569);

var G__24570 = cljs.core.next.call(null,seq__24525_24563__$1);
var G__24571 = null;
var G__24572 = (0);
var G__24573 = (0);
seq__24525_24553 = G__24570;
chunk__24526_24554 = G__24571;
count__24527_24555 = G__24572;
i__24528_24556 = G__24573;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24518){
var G__24519 = cljs.core.first.call(null,seq24518);
var seq24518__$1 = cljs.core.next.call(null,seq24518);
var G__24520 = cljs.core.first.call(null,seq24518__$1);
var seq24518__$2 = cljs.core.next.call(null,seq24518__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24519,G__24520,seq24518__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19367__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19370__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19371__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19367__auto__,prefer_table__19368__auto__,method_cache__19369__auto__,cached_hierarchy__19370__auto__,hierarchy__19371__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19367__auto__,prefer_table__19368__auto__,method_cache__19369__auto__,cached_hierarchy__19370__auto__,hierarchy__19371__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19371__auto__,method_table__19367__auto__,prefer_table__19368__auto__,method_cache__19369__auto__,cached_hierarchy__19370__auto__));
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
var el_24574 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24574.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24574.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24574.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24574);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24575,st_map){
var map__24580 = p__24575;
var map__24580__$1 = ((((!((map__24580 == null)))?((((map__24580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24580):map__24580);
var container_el = cljs.core.get.call(null,map__24580__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24580,map__24580__$1,container_el){
return (function (p__24582){
var vec__24583 = p__24582;
var k = cljs.core.nth.call(null,vec__24583,(0),null);
var v = cljs.core.nth.call(null,vec__24583,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24580,map__24580__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24584,dom_str){
var map__24587 = p__24584;
var map__24587__$1 = ((((!((map__24587 == null)))?((((map__24587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24587):map__24587);
var c = map__24587__$1;
var content_area_el = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24589){
var map__24592 = p__24589;
var map__24592__$1 = ((((!((map__24592 == null)))?((((map__24592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24592):map__24592);
var content_area_el = cljs.core.get.call(null,map__24592__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto__){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto__){
return (function (state_24635){
var state_val_24636 = (state_24635[(1)]);
if((state_val_24636 === (1))){
var inst_24620 = (state_24635[(7)]);
var inst_24620__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24621 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24622 = ["10px","10px","100%","68px","1.0"];
var inst_24623 = cljs.core.PersistentHashMap.fromArrays(inst_24621,inst_24622);
var inst_24624 = cljs.core.merge.call(null,inst_24623,style);
var inst_24625 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24620__$1,inst_24624);
var inst_24626 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24620__$1,msg);
var inst_24627 = cljs.core.async.timeout.call(null,(300));
var state_24635__$1 = (function (){var statearr_24637 = state_24635;
(statearr_24637[(8)] = inst_24626);

(statearr_24637[(9)] = inst_24625);

(statearr_24637[(7)] = inst_24620__$1);

return statearr_24637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24635__$1,(2),inst_24627);
} else {
if((state_val_24636 === (2))){
var inst_24620 = (state_24635[(7)]);
var inst_24629 = (state_24635[(2)]);
var inst_24630 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24631 = ["auto"];
var inst_24632 = cljs.core.PersistentHashMap.fromArrays(inst_24630,inst_24631);
var inst_24633 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24620,inst_24632);
var state_24635__$1 = (function (){var statearr_24638 = state_24635;
(statearr_24638[(10)] = inst_24629);

return statearr_24638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24635__$1,inst_24633);
} else {
return null;
}
}
});})(c__20515__auto__))
;
return ((function (switch__20494__auto__,c__20515__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto____0 = (function (){
var statearr_24642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24642[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto__);

(statearr_24642[(1)] = (1));

return statearr_24642;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto____1 = (function (state_24635){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_24635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e24643){if((e24643 instanceof Object)){
var ex__20498__auto__ = e24643;
var statearr_24644_24646 = state_24635;
(statearr_24644_24646[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24647 = state_24635;
state_24635 = G__24647;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto__ = function(state_24635){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto____1.call(this,state_24635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto__))
})();
var state__20517__auto__ = (function (){var statearr_24645 = f__20516__auto__.call(null);
(statearr_24645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto__);

return statearr_24645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto__))
);

return c__20515__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args24648 = [];
var len__19512__auto___24651 = arguments.length;
var i__19513__auto___24652 = (0);
while(true){
if((i__19513__auto___24652 < len__19512__auto___24651)){
args24648.push((arguments[i__19513__auto___24652]));

var G__24653 = (i__19513__auto___24652 + (1));
i__19513__auto___24652 = G__24653;
continue;
} else {
}
break;
}

var G__24650 = args24648.length;
switch (G__24650) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24648.length)].join('')));

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
var vec__24656 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__24656,(0),null);
var ln = cljs.core.nth.call(null,vec__24656,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24659 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24659,(0),null);
var file_line = cljs.core.nth.call(null,vec__24659,(1),null);
var file_column = cljs.core.nth.call(null,vec__24659,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24659,file_name,file_line,file_column){
return (function (p1__24657_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24657_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24659,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18442__auto__ = file_line;
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
var and__18430__auto__ = cause;
if(cljs.core.truth_(and__18430__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18430__auto__;
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
figwheel.client.heads_up.parse_failed_compile = (function figwheel$client$heads_up$parse_failed_compile(p__24660){
var map__24663 = p__24660;
var map__24663__$1 = ((((!((map__24663 == null)))?((((map__24663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24663):map__24663);
var ex = map__24663__$1;
var exception_data = cljs.core.get.call(null,map__24663__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var exception = cljs.core.first.call(null,exception_data);
if(cljs.core.truth_((function (){var and__18430__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exception);
if(cljs.core.truth_(and__18430__auto__)){
return cljs.core.re_matches.call(null,/failed compiling.*/,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception));
} else {
return and__18430__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503),true,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.get_in.call(null,exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_analysis_error = (function figwheel$client$heads_up$parse_analysis_error(p__24665){
var map__24671 = p__24665;
var map__24671__$1 = ((((!((map__24671 == null)))?((((map__24671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24671):map__24671);
var ex = map__24671__$1;
var exception_data = cljs.core.get.call(null,map__24671__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__24671,map__24671__$1,ex,exception_data){
return (function (p__24673){
var map__24674 = p__24673;
var map__24674__$1 = ((((!((map__24674 == null)))?((((map__24674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24674):map__24674);
var exc = map__24674__$1;
var data = cljs.core.get.call(null,map__24674__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__18430__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__18430__auto__)){
return data;
} else {
return and__18430__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349));
} else {
return null;
}
});})(map__24671,map__24671__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var analysis_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285),analysis_exception,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"class","class",-2030961996)], null))], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(analysis_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__18442__auto__ = cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(analysis_exception);
}
})()], null));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_reader_error = (function figwheel$client$heads_up$parse_reader_error(p__24676){
var map__24682 = p__24676;
var map__24682__$1 = ((((!((map__24682 == null)))?((((map__24682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24682):map__24682);
var ex = map__24682__$1;
var exception_data = cljs.core.get.call(null,map__24682__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__24682,map__24682__$1,ex,exception_data){
return (function (p__24684){
var map__24685 = p__24684;
var map__24685__$1 = ((((!((map__24685 == null)))?((((map__24685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24685):map__24685);
var exc = map__24685__$1;
var data = cljs.core.get.call(null,map__24685__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__18430__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__18430__auto__)){
return data;
} else {
return and__18430__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
} else {
return null;
}
});})(map__24682,map__24682__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var reader_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),reader_exception], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reader_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(reader_exception)], null));
} else {
return ex;
}
});
figwheel.client.heads_up.patch_eof_reader_exception = (function figwheel$client$heads_up$patch_eof_reader_exception(p__24687){
var map__24691 = p__24687;
var map__24691__$1 = ((((!((map__24691 == null)))?((((map__24691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24691):map__24691);
var ex = map__24691__$1;
var reader_exception = cljs.core.get.call(null,map__24691__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var message = cljs.core.get.call(null,map__24691__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__18430__auto__ = reader_exception;
if(cljs.core.truth_(and__18430__auto__)){
return cljs.core.re_matches.call(null,/EOF while reading, starting.*/,message);
} else {
return and__18430__auto__;
}
})())){
var temp__4657__auto__ = cljs.core.re_matches.call(null,/.*line\s(\d*)\sand\scolumn\s(\d*).*/,message);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__24693 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__24693,(0),null);
var line = cljs.core.nth.call(null,vec__24693,(1),null);
var column = cljs.core.nth.call(null,vec__24693,(2),null);
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),(line | (0)),new cljs.core.Keyword(null,"column","column",2078222095),(column | (0)));
} else {
return null;
}
} else {
return ex;
}
});
figwheel.client.heads_up.ensure_file_line = (function figwheel$client$heads_up$ensure_file_line(p__24694){
var map__24700 = p__24694;
var map__24700__$1 = ((((!((map__24700 == null)))?((((map__24700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24700):map__24700);
var ex = map__24700__$1;
var exception_data = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var map__24702 = cljs.core.apply.call(null,cljs.core.merge,cljs.core.keep.call(null,new cljs.core.Keyword(null,"data","data",-232669377),exception_data));
var map__24702__$1 = ((((!((map__24702 == null)))?((((map__24702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24702):map__24702);
var file = cljs.core.get.call(null,map__24702__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24702__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__24704 = ex;
var G__24704__$1 = (((new cljs.core.Keyword(null,"file","file",-1269645878) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"file","file",-1269645878),file,G__24704):G__24704);
var G__24704__$2 = (((new cljs.core.Keyword(null,"line","line",212345235) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),line,G__24704__$1):G__24704__$1);
if((new cljs.core.Keyword(null,"message","message",-406056002) == null)){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.last.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"message","message",-406056002),exception_data)),G__24704__$2);
} else {
return G__24704__$2;
}
});
figwheel.client.heads_up.remove_file_from_message = (function figwheel$client$heads_up$remove_file_from_message(p__24705){
var map__24708 = p__24705;
var map__24708__$1 = ((((!((map__24708 == null)))?((((map__24708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24708):map__24708);
var ex = map__24708__$1;
var message = cljs.core.get.call(null,map__24708__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__24708__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18430__auto__ = file;
if(cljs.core.truth_(and__18430__auto__)){
return cljs.core.re_matches.call(null,/.*in file.*/,message);
} else {
return and__18430__auto__;
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
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__24712){
var map__24715 = p__24712;
var map__24715__$1 = ((((!((map__24715 == null)))?((((map__24715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24715):map__24715);
var exception = map__24715__$1;
var failed_compiling = cljs.core.get.call(null,map__24715__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__24715__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__24715__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__24715__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__24715__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24715__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24715__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__24715__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var last_message = (cljs.core.truth_((function (){var and__18430__auto__ = file;
if(cljs.core.truth_(and__18430__auto__)){
return line;
} else {
return and__18430__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__24715,map__24715__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__24710_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__24710_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__24715,map__24715__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join('')], null):cljs.core.map.call(null,((function (last_message,map__24715,map__24715__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__24711_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__24711_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__24711_SHARP_)))].join('');
});})(last_message,map__24715,map__24715__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__24720 = figwheel.client.heads_up.exception__GT_display_data.call(null,figwheel.client.heads_up.parse_exception.call(null,exception_data));
var map__24720__$1 = ((((!((map__24720 == null)))?((((map__24720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24720):map__24720);
var head = cljs.core.get.call(null,map__24720__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__24720__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__24720__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__24720__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__24720__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24720__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24720__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
var map__24724 = figwheel.client.heads_up.ensure_container.call(null);
var map__24724__$1 = ((((!((map__24724 == null)))?((((map__24724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24724):map__24724);
var content_area_el = cljs.core.get.call(null,map__24724__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto__){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto__){
return (function (state_24772){
var state_val_24773 = (state_24772[(1)]);
if((state_val_24773 === (1))){
var inst_24755 = (state_24772[(7)]);
var inst_24755__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24756 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24757 = ["0.0"];
var inst_24758 = cljs.core.PersistentHashMap.fromArrays(inst_24756,inst_24757);
var inst_24759 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24755__$1,inst_24758);
var inst_24760 = cljs.core.async.timeout.call(null,(300));
var state_24772__$1 = (function (){var statearr_24774 = state_24772;
(statearr_24774[(8)] = inst_24759);

(statearr_24774[(7)] = inst_24755__$1);

return statearr_24774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24772__$1,(2),inst_24760);
} else {
if((state_val_24773 === (2))){
var inst_24755 = (state_24772[(7)]);
var inst_24762 = (state_24772[(2)]);
var inst_24763 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24764 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24765 = cljs.core.PersistentHashMap.fromArrays(inst_24763,inst_24764);
var inst_24766 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24755,inst_24765);
var inst_24767 = cljs.core.async.timeout.call(null,(200));
var state_24772__$1 = (function (){var statearr_24775 = state_24772;
(statearr_24775[(9)] = inst_24762);

(statearr_24775[(10)] = inst_24766);

return statearr_24775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24772__$1,(3),inst_24767);
} else {
if((state_val_24773 === (3))){
var inst_24755 = (state_24772[(7)]);
var inst_24769 = (state_24772[(2)]);
var inst_24770 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24755,"");
var state_24772__$1 = (function (){var statearr_24776 = state_24772;
(statearr_24776[(11)] = inst_24769);

return statearr_24776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24772__$1,inst_24770);
} else {
return null;
}
}
}
});})(c__20515__auto__))
;
return ((function (switch__20494__auto__,c__20515__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20495__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20495__auto____0 = (function (){
var statearr_24780 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24780[(0)] = figwheel$client$heads_up$clear_$_state_machine__20495__auto__);

(statearr_24780[(1)] = (1));

return statearr_24780;
});
var figwheel$client$heads_up$clear_$_state_machine__20495__auto____1 = (function (state_24772){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_24772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e24781){if((e24781 instanceof Object)){
var ex__20498__auto__ = e24781;
var statearr_24782_24784 = state_24772;
(statearr_24782_24784[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24785 = state_24772;
state_24772 = G__24785;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20495__auto__ = function(state_24772){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20495__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20495__auto____1.call(this,state_24772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20495__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20495__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto__))
})();
var state__20517__auto__ = (function (){var statearr_24783 = f__20516__auto__.call(null);
(statearr_24783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto__);

return statearr_24783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto__))
);

return c__20515__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto__){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto__){
return (function (state_24817){
var state_val_24818 = (state_24817[(1)]);
if((state_val_24818 === (1))){
var inst_24807 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24817__$1 = state_24817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24817__$1,(2),inst_24807);
} else {
if((state_val_24818 === (2))){
var inst_24809 = (state_24817[(2)]);
var inst_24810 = cljs.core.async.timeout.call(null,(400));
var state_24817__$1 = (function (){var statearr_24819 = state_24817;
(statearr_24819[(7)] = inst_24809);

return statearr_24819;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24817__$1,(3),inst_24810);
} else {
if((state_val_24818 === (3))){
var inst_24812 = (state_24817[(2)]);
var inst_24813 = figwheel.client.heads_up.clear.call(null);
var state_24817__$1 = (function (){var statearr_24820 = state_24817;
(statearr_24820[(8)] = inst_24812);

return statearr_24820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24817__$1,(4),inst_24813);
} else {
if((state_val_24818 === (4))){
var inst_24815 = (state_24817[(2)]);
var state_24817__$1 = state_24817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24817__$1,inst_24815);
} else {
return null;
}
}
}
}
});})(c__20515__auto__))
;
return ((function (switch__20494__auto__,c__20515__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto____0 = (function (){
var statearr_24824 = [null,null,null,null,null,null,null,null,null];
(statearr_24824[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto__);

(statearr_24824[(1)] = (1));

return statearr_24824;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto____1 = (function (state_24817){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_24817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e24825){if((e24825 instanceof Object)){
var ex__20498__auto__ = e24825;
var statearr_24826_24828 = state_24817;
(statearr_24826_24828[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24829 = state_24817;
state_24817 = G__24829;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto__ = function(state_24817){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto____1.call(this,state_24817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto__))
})();
var state__20517__auto__ = (function (){var statearr_24827 = f__20516__auto__.call(null);
(statearr_24827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto__);

return statearr_24827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto__))
);

return c__20515__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1465245606510