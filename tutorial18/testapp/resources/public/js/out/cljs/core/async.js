// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20560 = [];
var len__19512__auto___20566 = arguments.length;
var i__19513__auto___20567 = (0);
while(true){
if((i__19513__auto___20567 < len__19512__auto___20566)){
args20560.push((arguments[i__19513__auto___20567]));

var G__20568 = (i__19513__auto___20567 + (1));
i__19513__auto___20567 = G__20568;
continue;
} else {
}
break;
}

var G__20562 = args20560.length;
switch (G__20562) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20560.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20563 = (function (f,blockable,meta20564){
this.f = f;
this.blockable = blockable;
this.meta20564 = meta20564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20565,meta20564__$1){
var self__ = this;
var _20565__$1 = this;
return (new cljs.core.async.t_cljs$core$async20563(self__.f,self__.blockable,meta20564__$1));
});

cljs.core.async.t_cljs$core$async20563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20565){
var self__ = this;
var _20565__$1 = this;
return self__.meta20564;
});

cljs.core.async.t_cljs$core$async20563.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20563.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20564","meta20564",-823043348,null)], null);
});

cljs.core.async.t_cljs$core$async20563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20563";

cljs.core.async.t_cljs$core$async20563.cljs$lang$ctorPrWriter = (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async20563");
});

cljs.core.async.__GT_t_cljs$core$async20563 = (function cljs$core$async$__GT_t_cljs$core$async20563(f__$1,blockable__$1,meta20564){
return (new cljs.core.async.t_cljs$core$async20563(f__$1,blockable__$1,meta20564));
});

}

return (new cljs.core.async.t_cljs$core$async20563(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20572 = [];
var len__19512__auto___20575 = arguments.length;
var i__19513__auto___20576 = (0);
while(true){
if((i__19513__auto___20576 < len__19512__auto___20575)){
args20572.push((arguments[i__19513__auto___20576]));

var G__20577 = (i__19513__auto___20576 + (1));
i__19513__auto___20576 = G__20577;
continue;
} else {
}
break;
}

var G__20574 = args20572.length;
switch (G__20574) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20572.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20579 = [];
var len__19512__auto___20582 = arguments.length;
var i__19513__auto___20583 = (0);
while(true){
if((i__19513__auto___20583 < len__19512__auto___20582)){
args20579.push((arguments[i__19513__auto___20583]));

var G__20584 = (i__19513__auto___20583 + (1));
i__19513__auto___20583 = G__20584;
continue;
} else {
}
break;
}

var G__20581 = args20579.length;
switch (G__20581) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20579.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20586 = [];
var len__19512__auto___20589 = arguments.length;
var i__19513__auto___20590 = (0);
while(true){
if((i__19513__auto___20590 < len__19512__auto___20589)){
args20586.push((arguments[i__19513__auto___20590]));

var G__20591 = (i__19513__auto___20590 + (1));
i__19513__auto___20590 = G__20591;
continue;
} else {
}
break;
}

var G__20588 = args20586.length;
switch (G__20588) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20586.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20593 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20593);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20593,ret){
return (function (){
return fn1.call(null,val_20593);
});})(val_20593,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20594 = [];
var len__19512__auto___20597 = arguments.length;
var i__19513__auto___20598 = (0);
while(true){
if((i__19513__auto___20598 < len__19512__auto___20597)){
args20594.push((arguments[i__19513__auto___20598]));

var G__20599 = (i__19513__auto___20598 + (1));
i__19513__auto___20598 = G__20599;
continue;
} else {
}
break;
}

var G__20596 = args20594.length;
switch (G__20596) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20594.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19357__auto___20601 = n;
var x_20602 = (0);
while(true){
if((x_20602 < n__19357__auto___20601)){
(a[x_20602] = (0));

var G__20603 = (x_20602 + (1));
x_20602 = G__20603;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20604 = (i + (1));
i = G__20604;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20608 = (function (alt_flag,flag,meta20609){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20609 = meta20609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20610,meta20609__$1){
var self__ = this;
var _20610__$1 = this;
return (new cljs.core.async.t_cljs$core$async20608(self__.alt_flag,self__.flag,meta20609__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20610){
var self__ = this;
var _20610__$1 = this;
return self__.meta20609;
});})(flag))
;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20608.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20609","meta20609",-2043525144,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20608";

cljs.core.async.t_cljs$core$async20608.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async20608");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20608 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20608(alt_flag__$1,flag__$1,meta20609){
return (new cljs.core.async.t_cljs$core$async20608(alt_flag__$1,flag__$1,meta20609));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20608(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20614 = (function (alt_handler,flag,cb,meta20615){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20615 = meta20615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20616,meta20615__$1){
var self__ = this;
var _20616__$1 = this;
return (new cljs.core.async.t_cljs$core$async20614(self__.alt_handler,self__.flag,self__.cb,meta20615__$1));
});

cljs.core.async.t_cljs$core$async20614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20616){
var self__ = this;
var _20616__$1 = this;
return self__.meta20615;
});

cljs.core.async.t_cljs$core$async20614.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20615","meta20615",-1247454891,null)], null);
});

cljs.core.async.t_cljs$core$async20614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20614";

cljs.core.async.t_cljs$core$async20614.cljs$lang$ctorPrWriter = (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async20614");
});

cljs.core.async.__GT_t_cljs$core$async20614 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20614(alt_handler__$1,flag__$1,cb__$1,meta20615){
return (new cljs.core.async.t_cljs$core$async20614(alt_handler__$1,flag__$1,cb__$1,meta20615));
});

}

return (new cljs.core.async.t_cljs$core$async20614(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20617_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20617_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20618_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20618_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18442__auto__ = wport;
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20619 = (i + (1));
i = G__20619;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18442__auto__ = ret;
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18430__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18430__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18430__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19519__auto__ = [];
var len__19512__auto___20625 = arguments.length;
var i__19513__auto___20626 = (0);
while(true){
if((i__19513__auto___20626 < len__19512__auto___20625)){
args__19519__auto__.push((arguments[i__19513__auto___20626]));

var G__20627 = (i__19513__auto___20626 + (1));
i__19513__auto___20626 = G__20627;
continue;
} else {
}
break;
}

var argseq__19520__auto__ = ((((1) < args__19519__auto__.length))?(new cljs.core.IndexedSeq(args__19519__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19520__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20622){
var map__20623 = p__20622;
var map__20623__$1 = ((((!((map__20623 == null)))?((((map__20623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20623):map__20623);
var opts = map__20623__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20620){
var G__20621 = cljs.core.first.call(null,seq20620);
var seq20620__$1 = cljs.core.next.call(null,seq20620);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20621,seq20620__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20628 = [];
var len__19512__auto___20678 = arguments.length;
var i__19513__auto___20679 = (0);
while(true){
if((i__19513__auto___20679 < len__19512__auto___20678)){
args20628.push((arguments[i__19513__auto___20679]));

var G__20680 = (i__19513__auto___20679 + (1));
i__19513__auto___20679 = G__20680;
continue;
} else {
}
break;
}

var G__20630 = args20628.length;
switch (G__20630) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20628.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20515__auto___20682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___20682){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___20682){
return (function (state_20654){
var state_val_20655 = (state_20654[(1)]);
if((state_val_20655 === (7))){
var inst_20650 = (state_20654[(2)]);
var state_20654__$1 = state_20654;
var statearr_20656_20683 = state_20654__$1;
(statearr_20656_20683[(2)] = inst_20650);

(statearr_20656_20683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20655 === (1))){
var state_20654__$1 = state_20654;
var statearr_20657_20684 = state_20654__$1;
(statearr_20657_20684[(2)] = null);

(statearr_20657_20684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20655 === (4))){
var inst_20633 = (state_20654[(7)]);
var inst_20633__$1 = (state_20654[(2)]);
var inst_20634 = (inst_20633__$1 == null);
var state_20654__$1 = (function (){var statearr_20658 = state_20654;
(statearr_20658[(7)] = inst_20633__$1);

return statearr_20658;
})();
if(cljs.core.truth_(inst_20634)){
var statearr_20659_20685 = state_20654__$1;
(statearr_20659_20685[(1)] = (5));

} else {
var statearr_20660_20686 = state_20654__$1;
(statearr_20660_20686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20655 === (13))){
var state_20654__$1 = state_20654;
var statearr_20661_20687 = state_20654__$1;
(statearr_20661_20687[(2)] = null);

(statearr_20661_20687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20655 === (6))){
var inst_20633 = (state_20654[(7)]);
var state_20654__$1 = state_20654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20654__$1,(11),to,inst_20633);
} else {
if((state_val_20655 === (3))){
var inst_20652 = (state_20654[(2)]);
var state_20654__$1 = state_20654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20654__$1,inst_20652);
} else {
if((state_val_20655 === (12))){
var state_20654__$1 = state_20654;
var statearr_20662_20688 = state_20654__$1;
(statearr_20662_20688[(2)] = null);

(statearr_20662_20688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20655 === (2))){
var state_20654__$1 = state_20654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20654__$1,(4),from);
} else {
if((state_val_20655 === (11))){
var inst_20643 = (state_20654[(2)]);
var state_20654__$1 = state_20654;
if(cljs.core.truth_(inst_20643)){
var statearr_20663_20689 = state_20654__$1;
(statearr_20663_20689[(1)] = (12));

} else {
var statearr_20664_20690 = state_20654__$1;
(statearr_20664_20690[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20655 === (9))){
var state_20654__$1 = state_20654;
var statearr_20665_20691 = state_20654__$1;
(statearr_20665_20691[(2)] = null);

(statearr_20665_20691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20655 === (5))){
var state_20654__$1 = state_20654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20666_20692 = state_20654__$1;
(statearr_20666_20692[(1)] = (8));

} else {
var statearr_20667_20693 = state_20654__$1;
(statearr_20667_20693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20655 === (14))){
var inst_20648 = (state_20654[(2)]);
var state_20654__$1 = state_20654;
var statearr_20668_20694 = state_20654__$1;
(statearr_20668_20694[(2)] = inst_20648);

(statearr_20668_20694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20655 === (10))){
var inst_20640 = (state_20654[(2)]);
var state_20654__$1 = state_20654;
var statearr_20669_20695 = state_20654__$1;
(statearr_20669_20695[(2)] = inst_20640);

(statearr_20669_20695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20655 === (8))){
var inst_20637 = cljs.core.async.close_BANG_.call(null,to);
var state_20654__$1 = state_20654;
var statearr_20670_20696 = state_20654__$1;
(statearr_20670_20696[(2)] = inst_20637);

(statearr_20670_20696[(1)] = (10));


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
});})(c__20515__auto___20682))
;
return ((function (switch__20494__auto__,c__20515__auto___20682){
return (function() {
var cljs$core$async$state_machine__20495__auto__ = null;
var cljs$core$async$state_machine__20495__auto____0 = (function (){
var statearr_20674 = [null,null,null,null,null,null,null,null];
(statearr_20674[(0)] = cljs$core$async$state_machine__20495__auto__);

(statearr_20674[(1)] = (1));

return statearr_20674;
});
var cljs$core$async$state_machine__20495__auto____1 = (function (state_20654){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_20654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e20675){if((e20675 instanceof Object)){
var ex__20498__auto__ = e20675;
var statearr_20676_20697 = state_20654;
(statearr_20676_20697[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20698 = state_20654;
state_20654 = G__20698;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$state_machine__20495__auto__ = function(state_20654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20495__auto____1.call(this,state_20654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20495__auto____0;
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20495__auto____1;
return cljs$core$async$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___20682))
})();
var state__20517__auto__ = (function (){var statearr_20677 = f__20516__auto__.call(null);
(statearr_20677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___20682);

return statearr_20677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___20682))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20882){
var vec__20883 = p__20882;
var v = cljs.core.nth.call(null,vec__20883,(0),null);
var p = cljs.core.nth.call(null,vec__20883,(1),null);
var job = vec__20883;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20515__auto___21065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___21065,res,vec__20883,v,p,job,jobs,results){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___21065,res,vec__20883,v,p,job,jobs,results){
return (function (state_20888){
var state_val_20889 = (state_20888[(1)]);
if((state_val_20889 === (1))){
var state_20888__$1 = state_20888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20888__$1,(2),res,v);
} else {
if((state_val_20889 === (2))){
var inst_20885 = (state_20888[(2)]);
var inst_20886 = cljs.core.async.close_BANG_.call(null,res);
var state_20888__$1 = (function (){var statearr_20890 = state_20888;
(statearr_20890[(7)] = inst_20885);

return statearr_20890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20888__$1,inst_20886);
} else {
return null;
}
}
});})(c__20515__auto___21065,res,vec__20883,v,p,job,jobs,results))
;
return ((function (switch__20494__auto__,c__20515__auto___21065,res,vec__20883,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0 = (function (){
var statearr_20894 = [null,null,null,null,null,null,null,null];
(statearr_20894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__);

(statearr_20894[(1)] = (1));

return statearr_20894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1 = (function (state_20888){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_20888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e20895){if((e20895 instanceof Object)){
var ex__20498__auto__ = e20895;
var statearr_20896_21066 = state_20888;
(statearr_20896_21066[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21067 = state_20888;
state_20888 = G__21067;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__ = function(state_20888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1.call(this,state_20888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___21065,res,vec__20883,v,p,job,jobs,results))
})();
var state__20517__auto__ = (function (){var statearr_20897 = f__20516__auto__.call(null);
(statearr_20897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___21065);

return statearr_20897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___21065,res,vec__20883,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20898){
var vec__20899 = p__20898;
var v = cljs.core.nth.call(null,vec__20899,(0),null);
var p = cljs.core.nth.call(null,vec__20899,(1),null);
var job = vec__20899;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19357__auto___21068 = n;
var __21069 = (0);
while(true){
if((__21069 < n__19357__auto___21068)){
var G__20900_21070 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20900_21070) {
case "compute":
var c__20515__auto___21072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21069,c__20515__auto___21072,G__20900_21070,n__19357__auto___21068,jobs,results,process,async){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (__21069,c__20515__auto___21072,G__20900_21070,n__19357__auto___21068,jobs,results,process,async){
return (function (state_20913){
var state_val_20914 = (state_20913[(1)]);
if((state_val_20914 === (1))){
var state_20913__$1 = state_20913;
var statearr_20915_21073 = state_20913__$1;
(statearr_20915_21073[(2)] = null);

(statearr_20915_21073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (2))){
var state_20913__$1 = state_20913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20913__$1,(4),jobs);
} else {
if((state_val_20914 === (3))){
var inst_20911 = (state_20913[(2)]);
var state_20913__$1 = state_20913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20913__$1,inst_20911);
} else {
if((state_val_20914 === (4))){
var inst_20903 = (state_20913[(2)]);
var inst_20904 = process.call(null,inst_20903);
var state_20913__$1 = state_20913;
if(cljs.core.truth_(inst_20904)){
var statearr_20916_21074 = state_20913__$1;
(statearr_20916_21074[(1)] = (5));

} else {
var statearr_20917_21075 = state_20913__$1;
(statearr_20917_21075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (5))){
var state_20913__$1 = state_20913;
var statearr_20918_21076 = state_20913__$1;
(statearr_20918_21076[(2)] = null);

(statearr_20918_21076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (6))){
var state_20913__$1 = state_20913;
var statearr_20919_21077 = state_20913__$1;
(statearr_20919_21077[(2)] = null);

(statearr_20919_21077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (7))){
var inst_20909 = (state_20913[(2)]);
var state_20913__$1 = state_20913;
var statearr_20920_21078 = state_20913__$1;
(statearr_20920_21078[(2)] = inst_20909);

(statearr_20920_21078[(1)] = (3));


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
});})(__21069,c__20515__auto___21072,G__20900_21070,n__19357__auto___21068,jobs,results,process,async))
;
return ((function (__21069,switch__20494__auto__,c__20515__auto___21072,G__20900_21070,n__19357__auto___21068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0 = (function (){
var statearr_20924 = [null,null,null,null,null,null,null];
(statearr_20924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__);

(statearr_20924[(1)] = (1));

return statearr_20924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1 = (function (state_20913){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_20913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e20925){if((e20925 instanceof Object)){
var ex__20498__auto__ = e20925;
var statearr_20926_21079 = state_20913;
(statearr_20926_21079[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21080 = state_20913;
state_20913 = G__21080;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__ = function(state_20913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1.call(this,state_20913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__;
})()
;})(__21069,switch__20494__auto__,c__20515__auto___21072,G__20900_21070,n__19357__auto___21068,jobs,results,process,async))
})();
var state__20517__auto__ = (function (){var statearr_20927 = f__20516__auto__.call(null);
(statearr_20927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___21072);

return statearr_20927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(__21069,c__20515__auto___21072,G__20900_21070,n__19357__auto___21068,jobs,results,process,async))
);


break;
case "async":
var c__20515__auto___21081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21069,c__20515__auto___21081,G__20900_21070,n__19357__auto___21068,jobs,results,process,async){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (__21069,c__20515__auto___21081,G__20900_21070,n__19357__auto___21068,jobs,results,process,async){
return (function (state_20940){
var state_val_20941 = (state_20940[(1)]);
if((state_val_20941 === (1))){
var state_20940__$1 = state_20940;
var statearr_20942_21082 = state_20940__$1;
(statearr_20942_21082[(2)] = null);

(statearr_20942_21082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20941 === (2))){
var state_20940__$1 = state_20940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20940__$1,(4),jobs);
} else {
if((state_val_20941 === (3))){
var inst_20938 = (state_20940[(2)]);
var state_20940__$1 = state_20940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20940__$1,inst_20938);
} else {
if((state_val_20941 === (4))){
var inst_20930 = (state_20940[(2)]);
var inst_20931 = async.call(null,inst_20930);
var state_20940__$1 = state_20940;
if(cljs.core.truth_(inst_20931)){
var statearr_20943_21083 = state_20940__$1;
(statearr_20943_21083[(1)] = (5));

} else {
var statearr_20944_21084 = state_20940__$1;
(statearr_20944_21084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20941 === (5))){
var state_20940__$1 = state_20940;
var statearr_20945_21085 = state_20940__$1;
(statearr_20945_21085[(2)] = null);

(statearr_20945_21085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20941 === (6))){
var state_20940__$1 = state_20940;
var statearr_20946_21086 = state_20940__$1;
(statearr_20946_21086[(2)] = null);

(statearr_20946_21086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20941 === (7))){
var inst_20936 = (state_20940[(2)]);
var state_20940__$1 = state_20940;
var statearr_20947_21087 = state_20940__$1;
(statearr_20947_21087[(2)] = inst_20936);

(statearr_20947_21087[(1)] = (3));


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
});})(__21069,c__20515__auto___21081,G__20900_21070,n__19357__auto___21068,jobs,results,process,async))
;
return ((function (__21069,switch__20494__auto__,c__20515__auto___21081,G__20900_21070,n__19357__auto___21068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0 = (function (){
var statearr_20951 = [null,null,null,null,null,null,null];
(statearr_20951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__);

(statearr_20951[(1)] = (1));

return statearr_20951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1 = (function (state_20940){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_20940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e20952){if((e20952 instanceof Object)){
var ex__20498__auto__ = e20952;
var statearr_20953_21088 = state_20940;
(statearr_20953_21088[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21089 = state_20940;
state_20940 = G__21089;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__ = function(state_20940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1.call(this,state_20940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__;
})()
;})(__21069,switch__20494__auto__,c__20515__auto___21081,G__20900_21070,n__19357__auto___21068,jobs,results,process,async))
})();
var state__20517__auto__ = (function (){var statearr_20954 = f__20516__auto__.call(null);
(statearr_20954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___21081);

return statearr_20954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(__21069,c__20515__auto___21081,G__20900_21070,n__19357__auto___21068,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21090 = (__21069 + (1));
__21069 = G__21090;
continue;
} else {
}
break;
}

var c__20515__auto___21091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___21091,jobs,results,process,async){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___21091,jobs,results,process,async){
return (function (state_20976){
var state_val_20977 = (state_20976[(1)]);
if((state_val_20977 === (1))){
var state_20976__$1 = state_20976;
var statearr_20978_21092 = state_20976__$1;
(statearr_20978_21092[(2)] = null);

(statearr_20978_21092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (2))){
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20976__$1,(4),from);
} else {
if((state_val_20977 === (3))){
var inst_20974 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20976__$1,inst_20974);
} else {
if((state_val_20977 === (4))){
var inst_20957 = (state_20976[(7)]);
var inst_20957__$1 = (state_20976[(2)]);
var inst_20958 = (inst_20957__$1 == null);
var state_20976__$1 = (function (){var statearr_20979 = state_20976;
(statearr_20979[(7)] = inst_20957__$1);

return statearr_20979;
})();
if(cljs.core.truth_(inst_20958)){
var statearr_20980_21093 = state_20976__$1;
(statearr_20980_21093[(1)] = (5));

} else {
var statearr_20981_21094 = state_20976__$1;
(statearr_20981_21094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (5))){
var inst_20960 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20976__$1 = state_20976;
var statearr_20982_21095 = state_20976__$1;
(statearr_20982_21095[(2)] = inst_20960);

(statearr_20982_21095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (6))){
var inst_20962 = (state_20976[(8)]);
var inst_20957 = (state_20976[(7)]);
var inst_20962__$1 = cljs.core.async.chan.call(null,(1));
var inst_20963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20964 = [inst_20957,inst_20962__$1];
var inst_20965 = (new cljs.core.PersistentVector(null,2,(5),inst_20963,inst_20964,null));
var state_20976__$1 = (function (){var statearr_20983 = state_20976;
(statearr_20983[(8)] = inst_20962__$1);

return statearr_20983;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20976__$1,(8),jobs,inst_20965);
} else {
if((state_val_20977 === (7))){
var inst_20972 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20984_21096 = state_20976__$1;
(statearr_20984_21096[(2)] = inst_20972);

(statearr_20984_21096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (8))){
var inst_20962 = (state_20976[(8)]);
var inst_20967 = (state_20976[(2)]);
var state_20976__$1 = (function (){var statearr_20985 = state_20976;
(statearr_20985[(9)] = inst_20967);

return statearr_20985;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20976__$1,(9),results,inst_20962);
} else {
if((state_val_20977 === (9))){
var inst_20969 = (state_20976[(2)]);
var state_20976__$1 = (function (){var statearr_20986 = state_20976;
(statearr_20986[(10)] = inst_20969);

return statearr_20986;
})();
var statearr_20987_21097 = state_20976__$1;
(statearr_20987_21097[(2)] = null);

(statearr_20987_21097[(1)] = (2));


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
});})(c__20515__auto___21091,jobs,results,process,async))
;
return ((function (switch__20494__auto__,c__20515__auto___21091,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0 = (function (){
var statearr_20991 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__);

(statearr_20991[(1)] = (1));

return statearr_20991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1 = (function (state_20976){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_20976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e20992){if((e20992 instanceof Object)){
var ex__20498__auto__ = e20992;
var statearr_20993_21098 = state_20976;
(statearr_20993_21098[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21099 = state_20976;
state_20976 = G__21099;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__ = function(state_20976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1.call(this,state_20976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___21091,jobs,results,process,async))
})();
var state__20517__auto__ = (function (){var statearr_20994 = f__20516__auto__.call(null);
(statearr_20994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___21091);

return statearr_20994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___21091,jobs,results,process,async))
);


var c__20515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto__,jobs,results,process,async){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto__,jobs,results,process,async){
return (function (state_21032){
var state_val_21033 = (state_21032[(1)]);
if((state_val_21033 === (7))){
var inst_21028 = (state_21032[(2)]);
var state_21032__$1 = state_21032;
var statearr_21034_21100 = state_21032__$1;
(statearr_21034_21100[(2)] = inst_21028);

(statearr_21034_21100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (20))){
var state_21032__$1 = state_21032;
var statearr_21035_21101 = state_21032__$1;
(statearr_21035_21101[(2)] = null);

(statearr_21035_21101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (1))){
var state_21032__$1 = state_21032;
var statearr_21036_21102 = state_21032__$1;
(statearr_21036_21102[(2)] = null);

(statearr_21036_21102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (4))){
var inst_20997 = (state_21032[(7)]);
var inst_20997__$1 = (state_21032[(2)]);
var inst_20998 = (inst_20997__$1 == null);
var state_21032__$1 = (function (){var statearr_21037 = state_21032;
(statearr_21037[(7)] = inst_20997__$1);

return statearr_21037;
})();
if(cljs.core.truth_(inst_20998)){
var statearr_21038_21103 = state_21032__$1;
(statearr_21038_21103[(1)] = (5));

} else {
var statearr_21039_21104 = state_21032__$1;
(statearr_21039_21104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (15))){
var inst_21010 = (state_21032[(8)]);
var state_21032__$1 = state_21032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21032__$1,(18),to,inst_21010);
} else {
if((state_val_21033 === (21))){
var inst_21023 = (state_21032[(2)]);
var state_21032__$1 = state_21032;
var statearr_21040_21105 = state_21032__$1;
(statearr_21040_21105[(2)] = inst_21023);

(statearr_21040_21105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (13))){
var inst_21025 = (state_21032[(2)]);
var state_21032__$1 = (function (){var statearr_21041 = state_21032;
(statearr_21041[(9)] = inst_21025);

return statearr_21041;
})();
var statearr_21042_21106 = state_21032__$1;
(statearr_21042_21106[(2)] = null);

(statearr_21042_21106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (6))){
var inst_20997 = (state_21032[(7)]);
var state_21032__$1 = state_21032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21032__$1,(11),inst_20997);
} else {
if((state_val_21033 === (17))){
var inst_21018 = (state_21032[(2)]);
var state_21032__$1 = state_21032;
if(cljs.core.truth_(inst_21018)){
var statearr_21043_21107 = state_21032__$1;
(statearr_21043_21107[(1)] = (19));

} else {
var statearr_21044_21108 = state_21032__$1;
(statearr_21044_21108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (3))){
var inst_21030 = (state_21032[(2)]);
var state_21032__$1 = state_21032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21032__$1,inst_21030);
} else {
if((state_val_21033 === (12))){
var inst_21007 = (state_21032[(10)]);
var state_21032__$1 = state_21032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21032__$1,(14),inst_21007);
} else {
if((state_val_21033 === (2))){
var state_21032__$1 = state_21032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21032__$1,(4),results);
} else {
if((state_val_21033 === (19))){
var state_21032__$1 = state_21032;
var statearr_21045_21109 = state_21032__$1;
(statearr_21045_21109[(2)] = null);

(statearr_21045_21109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (11))){
var inst_21007 = (state_21032[(2)]);
var state_21032__$1 = (function (){var statearr_21046 = state_21032;
(statearr_21046[(10)] = inst_21007);

return statearr_21046;
})();
var statearr_21047_21110 = state_21032__$1;
(statearr_21047_21110[(2)] = null);

(statearr_21047_21110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (9))){
var state_21032__$1 = state_21032;
var statearr_21048_21111 = state_21032__$1;
(statearr_21048_21111[(2)] = null);

(statearr_21048_21111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (5))){
var state_21032__$1 = state_21032;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21049_21112 = state_21032__$1;
(statearr_21049_21112[(1)] = (8));

} else {
var statearr_21050_21113 = state_21032__$1;
(statearr_21050_21113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (14))){
var inst_21012 = (state_21032[(11)]);
var inst_21010 = (state_21032[(8)]);
var inst_21010__$1 = (state_21032[(2)]);
var inst_21011 = (inst_21010__$1 == null);
var inst_21012__$1 = cljs.core.not.call(null,inst_21011);
var state_21032__$1 = (function (){var statearr_21051 = state_21032;
(statearr_21051[(11)] = inst_21012__$1);

(statearr_21051[(8)] = inst_21010__$1);

return statearr_21051;
})();
if(inst_21012__$1){
var statearr_21052_21114 = state_21032__$1;
(statearr_21052_21114[(1)] = (15));

} else {
var statearr_21053_21115 = state_21032__$1;
(statearr_21053_21115[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (16))){
var inst_21012 = (state_21032[(11)]);
var state_21032__$1 = state_21032;
var statearr_21054_21116 = state_21032__$1;
(statearr_21054_21116[(2)] = inst_21012);

(statearr_21054_21116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (10))){
var inst_21004 = (state_21032[(2)]);
var state_21032__$1 = state_21032;
var statearr_21055_21117 = state_21032__$1;
(statearr_21055_21117[(2)] = inst_21004);

(statearr_21055_21117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (18))){
var inst_21015 = (state_21032[(2)]);
var state_21032__$1 = state_21032;
var statearr_21056_21118 = state_21032__$1;
(statearr_21056_21118[(2)] = inst_21015);

(statearr_21056_21118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21033 === (8))){
var inst_21001 = cljs.core.async.close_BANG_.call(null,to);
var state_21032__$1 = state_21032;
var statearr_21057_21119 = state_21032__$1;
(statearr_21057_21119[(2)] = inst_21001);

(statearr_21057_21119[(1)] = (10));


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
});})(c__20515__auto__,jobs,results,process,async))
;
return ((function (switch__20494__auto__,c__20515__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0 = (function (){
var statearr_21061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__);

(statearr_21061[(1)] = (1));

return statearr_21061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1 = (function (state_21032){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_21032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e21062){if((e21062 instanceof Object)){
var ex__20498__auto__ = e21062;
var statearr_21063_21120 = state_21032;
(statearr_21063_21120[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21121 = state_21032;
state_21032 = G__21121;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__ = function(state_21032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1.call(this,state_21032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto__,jobs,results,process,async))
})();
var state__20517__auto__ = (function (){var statearr_21064 = f__20516__auto__.call(null);
(statearr_21064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto__);

return statearr_21064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto__,jobs,results,process,async))
);

return c__20515__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21122 = [];
var len__19512__auto___21125 = arguments.length;
var i__19513__auto___21126 = (0);
while(true){
if((i__19513__auto___21126 < len__19512__auto___21125)){
args21122.push((arguments[i__19513__auto___21126]));

var G__21127 = (i__19513__auto___21126 + (1));
i__19513__auto___21126 = G__21127;
continue;
} else {
}
break;
}

var G__21124 = args21122.length;
switch (G__21124) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21122.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21129 = [];
var len__19512__auto___21132 = arguments.length;
var i__19513__auto___21133 = (0);
while(true){
if((i__19513__auto___21133 < len__19512__auto___21132)){
args21129.push((arguments[i__19513__auto___21133]));

var G__21134 = (i__19513__auto___21133 + (1));
i__19513__auto___21133 = G__21134;
continue;
} else {
}
break;
}

var G__21131 = args21129.length;
switch (G__21131) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21129.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21136 = [];
var len__19512__auto___21189 = arguments.length;
var i__19513__auto___21190 = (0);
while(true){
if((i__19513__auto___21190 < len__19512__auto___21189)){
args21136.push((arguments[i__19513__auto___21190]));

var G__21191 = (i__19513__auto___21190 + (1));
i__19513__auto___21190 = G__21191;
continue;
} else {
}
break;
}

var G__21138 = args21136.length;
switch (G__21138) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21136.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20515__auto___21193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___21193,tc,fc){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___21193,tc,fc){
return (function (state_21164){
var state_val_21165 = (state_21164[(1)]);
if((state_val_21165 === (7))){
var inst_21160 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
var statearr_21166_21194 = state_21164__$1;
(statearr_21166_21194[(2)] = inst_21160);

(statearr_21166_21194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (1))){
var state_21164__$1 = state_21164;
var statearr_21167_21195 = state_21164__$1;
(statearr_21167_21195[(2)] = null);

(statearr_21167_21195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (4))){
var inst_21141 = (state_21164[(7)]);
var inst_21141__$1 = (state_21164[(2)]);
var inst_21142 = (inst_21141__$1 == null);
var state_21164__$1 = (function (){var statearr_21168 = state_21164;
(statearr_21168[(7)] = inst_21141__$1);

return statearr_21168;
})();
if(cljs.core.truth_(inst_21142)){
var statearr_21169_21196 = state_21164__$1;
(statearr_21169_21196[(1)] = (5));

} else {
var statearr_21170_21197 = state_21164__$1;
(statearr_21170_21197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (13))){
var state_21164__$1 = state_21164;
var statearr_21171_21198 = state_21164__$1;
(statearr_21171_21198[(2)] = null);

(statearr_21171_21198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (6))){
var inst_21141 = (state_21164[(7)]);
var inst_21147 = p.call(null,inst_21141);
var state_21164__$1 = state_21164;
if(cljs.core.truth_(inst_21147)){
var statearr_21172_21199 = state_21164__$1;
(statearr_21172_21199[(1)] = (9));

} else {
var statearr_21173_21200 = state_21164__$1;
(statearr_21173_21200[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (3))){
var inst_21162 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21164__$1,inst_21162);
} else {
if((state_val_21165 === (12))){
var state_21164__$1 = state_21164;
var statearr_21174_21201 = state_21164__$1;
(statearr_21174_21201[(2)] = null);

(statearr_21174_21201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (2))){
var state_21164__$1 = state_21164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21164__$1,(4),ch);
} else {
if((state_val_21165 === (11))){
var inst_21141 = (state_21164[(7)]);
var inst_21151 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21164__$1,(8),inst_21151,inst_21141);
} else {
if((state_val_21165 === (9))){
var state_21164__$1 = state_21164;
var statearr_21175_21202 = state_21164__$1;
(statearr_21175_21202[(2)] = tc);

(statearr_21175_21202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (5))){
var inst_21144 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21145 = cljs.core.async.close_BANG_.call(null,fc);
var state_21164__$1 = (function (){var statearr_21176 = state_21164;
(statearr_21176[(8)] = inst_21144);

return statearr_21176;
})();
var statearr_21177_21203 = state_21164__$1;
(statearr_21177_21203[(2)] = inst_21145);

(statearr_21177_21203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (14))){
var inst_21158 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
var statearr_21178_21204 = state_21164__$1;
(statearr_21178_21204[(2)] = inst_21158);

(statearr_21178_21204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (10))){
var state_21164__$1 = state_21164;
var statearr_21179_21205 = state_21164__$1;
(statearr_21179_21205[(2)] = fc);

(statearr_21179_21205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (8))){
var inst_21153 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
if(cljs.core.truth_(inst_21153)){
var statearr_21180_21206 = state_21164__$1;
(statearr_21180_21206[(1)] = (12));

} else {
var statearr_21181_21207 = state_21164__$1;
(statearr_21181_21207[(1)] = (13));

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
});})(c__20515__auto___21193,tc,fc))
;
return ((function (switch__20494__auto__,c__20515__auto___21193,tc,fc){
return (function() {
var cljs$core$async$state_machine__20495__auto__ = null;
var cljs$core$async$state_machine__20495__auto____0 = (function (){
var statearr_21185 = [null,null,null,null,null,null,null,null,null];
(statearr_21185[(0)] = cljs$core$async$state_machine__20495__auto__);

(statearr_21185[(1)] = (1));

return statearr_21185;
});
var cljs$core$async$state_machine__20495__auto____1 = (function (state_21164){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_21164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e21186){if((e21186 instanceof Object)){
var ex__20498__auto__ = e21186;
var statearr_21187_21208 = state_21164;
(statearr_21187_21208[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21209 = state_21164;
state_21164 = G__21209;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$state_machine__20495__auto__ = function(state_21164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20495__auto____1.call(this,state_21164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20495__auto____0;
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20495__auto____1;
return cljs$core$async$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___21193,tc,fc))
})();
var state__20517__auto__ = (function (){var statearr_21188 = f__20516__auto__.call(null);
(statearr_21188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___21193);

return statearr_21188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___21193,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto__){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto__){
return (function (state_21273){
var state_val_21274 = (state_21273[(1)]);
if((state_val_21274 === (7))){
var inst_21269 = (state_21273[(2)]);
var state_21273__$1 = state_21273;
var statearr_21275_21296 = state_21273__$1;
(statearr_21275_21296[(2)] = inst_21269);

(statearr_21275_21296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21274 === (1))){
var inst_21253 = init;
var state_21273__$1 = (function (){var statearr_21276 = state_21273;
(statearr_21276[(7)] = inst_21253);

return statearr_21276;
})();
var statearr_21277_21297 = state_21273__$1;
(statearr_21277_21297[(2)] = null);

(statearr_21277_21297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21274 === (4))){
var inst_21256 = (state_21273[(8)]);
var inst_21256__$1 = (state_21273[(2)]);
var inst_21257 = (inst_21256__$1 == null);
var state_21273__$1 = (function (){var statearr_21278 = state_21273;
(statearr_21278[(8)] = inst_21256__$1);

return statearr_21278;
})();
if(cljs.core.truth_(inst_21257)){
var statearr_21279_21298 = state_21273__$1;
(statearr_21279_21298[(1)] = (5));

} else {
var statearr_21280_21299 = state_21273__$1;
(statearr_21280_21299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21274 === (6))){
var inst_21256 = (state_21273[(8)]);
var inst_21253 = (state_21273[(7)]);
var inst_21260 = (state_21273[(9)]);
var inst_21260__$1 = f.call(null,inst_21253,inst_21256);
var inst_21261 = cljs.core.reduced_QMARK_.call(null,inst_21260__$1);
var state_21273__$1 = (function (){var statearr_21281 = state_21273;
(statearr_21281[(9)] = inst_21260__$1);

return statearr_21281;
})();
if(inst_21261){
var statearr_21282_21300 = state_21273__$1;
(statearr_21282_21300[(1)] = (8));

} else {
var statearr_21283_21301 = state_21273__$1;
(statearr_21283_21301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21274 === (3))){
var inst_21271 = (state_21273[(2)]);
var state_21273__$1 = state_21273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21273__$1,inst_21271);
} else {
if((state_val_21274 === (2))){
var state_21273__$1 = state_21273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21273__$1,(4),ch);
} else {
if((state_val_21274 === (9))){
var inst_21260 = (state_21273[(9)]);
var inst_21253 = inst_21260;
var state_21273__$1 = (function (){var statearr_21284 = state_21273;
(statearr_21284[(7)] = inst_21253);

return statearr_21284;
})();
var statearr_21285_21302 = state_21273__$1;
(statearr_21285_21302[(2)] = null);

(statearr_21285_21302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21274 === (5))){
var inst_21253 = (state_21273[(7)]);
var state_21273__$1 = state_21273;
var statearr_21286_21303 = state_21273__$1;
(statearr_21286_21303[(2)] = inst_21253);

(statearr_21286_21303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21274 === (10))){
var inst_21267 = (state_21273[(2)]);
var state_21273__$1 = state_21273;
var statearr_21287_21304 = state_21273__$1;
(statearr_21287_21304[(2)] = inst_21267);

(statearr_21287_21304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21274 === (8))){
var inst_21260 = (state_21273[(9)]);
var inst_21263 = cljs.core.deref.call(null,inst_21260);
var state_21273__$1 = state_21273;
var statearr_21288_21305 = state_21273__$1;
(statearr_21288_21305[(2)] = inst_21263);

(statearr_21288_21305[(1)] = (10));


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
});})(c__20515__auto__))
;
return ((function (switch__20494__auto__,c__20515__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20495__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20495__auto____0 = (function (){
var statearr_21292 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21292[(0)] = cljs$core$async$reduce_$_state_machine__20495__auto__);

(statearr_21292[(1)] = (1));

return statearr_21292;
});
var cljs$core$async$reduce_$_state_machine__20495__auto____1 = (function (state_21273){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_21273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e21293){if((e21293 instanceof Object)){
var ex__20498__auto__ = e21293;
var statearr_21294_21306 = state_21273;
(statearr_21294_21306[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21307 = state_21273;
state_21273 = G__21307;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20495__auto__ = function(state_21273){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20495__auto____1.call(this,state_21273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20495__auto____0;
cljs$core$async$reduce_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20495__auto____1;
return cljs$core$async$reduce_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto__))
})();
var state__20517__auto__ = (function (){var statearr_21295 = f__20516__auto__.call(null);
(statearr_21295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto__);

return statearr_21295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto__))
);

return c__20515__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21308 = [];
var len__19512__auto___21360 = arguments.length;
var i__19513__auto___21361 = (0);
while(true){
if((i__19513__auto___21361 < len__19512__auto___21360)){
args21308.push((arguments[i__19513__auto___21361]));

var G__21362 = (i__19513__auto___21361 + (1));
i__19513__auto___21361 = G__21362;
continue;
} else {
}
break;
}

var G__21310 = args21308.length;
switch (G__21310) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21308.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto__){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto__){
return (function (state_21335){
var state_val_21336 = (state_21335[(1)]);
if((state_val_21336 === (7))){
var inst_21317 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
var statearr_21337_21364 = state_21335__$1;
(statearr_21337_21364[(2)] = inst_21317);

(statearr_21337_21364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (1))){
var inst_21311 = cljs.core.seq.call(null,coll);
var inst_21312 = inst_21311;
var state_21335__$1 = (function (){var statearr_21338 = state_21335;
(statearr_21338[(7)] = inst_21312);

return statearr_21338;
})();
var statearr_21339_21365 = state_21335__$1;
(statearr_21339_21365[(2)] = null);

(statearr_21339_21365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (4))){
var inst_21312 = (state_21335[(7)]);
var inst_21315 = cljs.core.first.call(null,inst_21312);
var state_21335__$1 = state_21335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21335__$1,(7),ch,inst_21315);
} else {
if((state_val_21336 === (13))){
var inst_21329 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
var statearr_21340_21366 = state_21335__$1;
(statearr_21340_21366[(2)] = inst_21329);

(statearr_21340_21366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (6))){
var inst_21320 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
if(cljs.core.truth_(inst_21320)){
var statearr_21341_21367 = state_21335__$1;
(statearr_21341_21367[(1)] = (8));

} else {
var statearr_21342_21368 = state_21335__$1;
(statearr_21342_21368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (3))){
var inst_21333 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21335__$1,inst_21333);
} else {
if((state_val_21336 === (12))){
var state_21335__$1 = state_21335;
var statearr_21343_21369 = state_21335__$1;
(statearr_21343_21369[(2)] = null);

(statearr_21343_21369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (2))){
var inst_21312 = (state_21335[(7)]);
var state_21335__$1 = state_21335;
if(cljs.core.truth_(inst_21312)){
var statearr_21344_21370 = state_21335__$1;
(statearr_21344_21370[(1)] = (4));

} else {
var statearr_21345_21371 = state_21335__$1;
(statearr_21345_21371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (11))){
var inst_21326 = cljs.core.async.close_BANG_.call(null,ch);
var state_21335__$1 = state_21335;
var statearr_21346_21372 = state_21335__$1;
(statearr_21346_21372[(2)] = inst_21326);

(statearr_21346_21372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (9))){
var state_21335__$1 = state_21335;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21347_21373 = state_21335__$1;
(statearr_21347_21373[(1)] = (11));

} else {
var statearr_21348_21374 = state_21335__$1;
(statearr_21348_21374[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (5))){
var inst_21312 = (state_21335[(7)]);
var state_21335__$1 = state_21335;
var statearr_21349_21375 = state_21335__$1;
(statearr_21349_21375[(2)] = inst_21312);

(statearr_21349_21375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (10))){
var inst_21331 = (state_21335[(2)]);
var state_21335__$1 = state_21335;
var statearr_21350_21376 = state_21335__$1;
(statearr_21350_21376[(2)] = inst_21331);

(statearr_21350_21376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21336 === (8))){
var inst_21312 = (state_21335[(7)]);
var inst_21322 = cljs.core.next.call(null,inst_21312);
var inst_21312__$1 = inst_21322;
var state_21335__$1 = (function (){var statearr_21351 = state_21335;
(statearr_21351[(7)] = inst_21312__$1);

return statearr_21351;
})();
var statearr_21352_21377 = state_21335__$1;
(statearr_21352_21377[(2)] = null);

(statearr_21352_21377[(1)] = (2));


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
});})(c__20515__auto__))
;
return ((function (switch__20494__auto__,c__20515__auto__){
return (function() {
var cljs$core$async$state_machine__20495__auto__ = null;
var cljs$core$async$state_machine__20495__auto____0 = (function (){
var statearr_21356 = [null,null,null,null,null,null,null,null];
(statearr_21356[(0)] = cljs$core$async$state_machine__20495__auto__);

(statearr_21356[(1)] = (1));

return statearr_21356;
});
var cljs$core$async$state_machine__20495__auto____1 = (function (state_21335){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_21335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e21357){if((e21357 instanceof Object)){
var ex__20498__auto__ = e21357;
var statearr_21358_21378 = state_21335;
(statearr_21358_21378[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21379 = state_21335;
state_21335 = G__21379;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$state_machine__20495__auto__ = function(state_21335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20495__auto____1.call(this,state_21335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20495__auto____0;
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20495__auto____1;
return cljs$core$async$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto__))
})();
var state__20517__auto__ = (function (){var statearr_21359 = f__20516__auto__.call(null);
(statearr_21359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto__);

return statearr_21359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto__))
);

return c__20515__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19105__auto__ = (((_ == null))?null:_);
var m__19106__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,_);
} else {
var m__19106__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19105__auto__ = (((m == null))?null:m);
var m__19106__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19106__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19105__auto__ = (((m == null))?null:m);
var m__19106__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,m,ch);
} else {
var m__19106__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19105__auto__ = (((m == null))?null:m);
var m__19106__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,m);
} else {
var m__19106__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21601 = (function (mult,ch,cs,meta21602){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21602 = meta21602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21603,meta21602__$1){
var self__ = this;
var _21603__$1 = this;
return (new cljs.core.async.t_cljs$core$async21601(self__.mult,self__.ch,self__.cs,meta21602__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21603){
var self__ = this;
var _21603__$1 = this;
return self__.meta21602;
});})(cs))
;

cljs.core.async.t_cljs$core$async21601.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21601.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21601.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21601.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21601.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21601.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21601.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21602","meta21602",-145473882,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21601";

cljs.core.async.t_cljs$core$async21601.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async21601");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21601 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21601(mult__$1,ch__$1,cs__$1,meta21602){
return (new cljs.core.async.t_cljs$core$async21601(mult__$1,ch__$1,cs__$1,meta21602));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21601(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20515__auto___21822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___21822,cs,m,dchan,dctr,done){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___21822,cs,m,dchan,dctr,done){
return (function (state_21734){
var state_val_21735 = (state_21734[(1)]);
if((state_val_21735 === (7))){
var inst_21730 = (state_21734[(2)]);
var state_21734__$1 = state_21734;
var statearr_21736_21823 = state_21734__$1;
(statearr_21736_21823[(2)] = inst_21730);

(statearr_21736_21823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (20))){
var inst_21635 = (state_21734[(7)]);
var inst_21645 = cljs.core.first.call(null,inst_21635);
var inst_21646 = cljs.core.nth.call(null,inst_21645,(0),null);
var inst_21647 = cljs.core.nth.call(null,inst_21645,(1),null);
var state_21734__$1 = (function (){var statearr_21737 = state_21734;
(statearr_21737[(8)] = inst_21646);

return statearr_21737;
})();
if(cljs.core.truth_(inst_21647)){
var statearr_21738_21824 = state_21734__$1;
(statearr_21738_21824[(1)] = (22));

} else {
var statearr_21739_21825 = state_21734__$1;
(statearr_21739_21825[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (27))){
var inst_21675 = (state_21734[(9)]);
var inst_21606 = (state_21734[(10)]);
var inst_21677 = (state_21734[(11)]);
var inst_21682 = (state_21734[(12)]);
var inst_21682__$1 = cljs.core._nth.call(null,inst_21675,inst_21677);
var inst_21683 = cljs.core.async.put_BANG_.call(null,inst_21682__$1,inst_21606,done);
var state_21734__$1 = (function (){var statearr_21740 = state_21734;
(statearr_21740[(12)] = inst_21682__$1);

return statearr_21740;
})();
if(cljs.core.truth_(inst_21683)){
var statearr_21741_21826 = state_21734__$1;
(statearr_21741_21826[(1)] = (30));

} else {
var statearr_21742_21827 = state_21734__$1;
(statearr_21742_21827[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (1))){
var state_21734__$1 = state_21734;
var statearr_21743_21828 = state_21734__$1;
(statearr_21743_21828[(2)] = null);

(statearr_21743_21828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (24))){
var inst_21635 = (state_21734[(7)]);
var inst_21652 = (state_21734[(2)]);
var inst_21653 = cljs.core.next.call(null,inst_21635);
var inst_21615 = inst_21653;
var inst_21616 = null;
var inst_21617 = (0);
var inst_21618 = (0);
var state_21734__$1 = (function (){var statearr_21744 = state_21734;
(statearr_21744[(13)] = inst_21618);

(statearr_21744[(14)] = inst_21616);

(statearr_21744[(15)] = inst_21617);

(statearr_21744[(16)] = inst_21615);

(statearr_21744[(17)] = inst_21652);

return statearr_21744;
})();
var statearr_21745_21829 = state_21734__$1;
(statearr_21745_21829[(2)] = null);

(statearr_21745_21829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (39))){
var state_21734__$1 = state_21734;
var statearr_21749_21830 = state_21734__$1;
(statearr_21749_21830[(2)] = null);

(statearr_21749_21830[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (4))){
var inst_21606 = (state_21734[(10)]);
var inst_21606__$1 = (state_21734[(2)]);
var inst_21607 = (inst_21606__$1 == null);
var state_21734__$1 = (function (){var statearr_21750 = state_21734;
(statearr_21750[(10)] = inst_21606__$1);

return statearr_21750;
})();
if(cljs.core.truth_(inst_21607)){
var statearr_21751_21831 = state_21734__$1;
(statearr_21751_21831[(1)] = (5));

} else {
var statearr_21752_21832 = state_21734__$1;
(statearr_21752_21832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (15))){
var inst_21618 = (state_21734[(13)]);
var inst_21616 = (state_21734[(14)]);
var inst_21617 = (state_21734[(15)]);
var inst_21615 = (state_21734[(16)]);
var inst_21631 = (state_21734[(2)]);
var inst_21632 = (inst_21618 + (1));
var tmp21746 = inst_21616;
var tmp21747 = inst_21617;
var tmp21748 = inst_21615;
var inst_21615__$1 = tmp21748;
var inst_21616__$1 = tmp21746;
var inst_21617__$1 = tmp21747;
var inst_21618__$1 = inst_21632;
var state_21734__$1 = (function (){var statearr_21753 = state_21734;
(statearr_21753[(18)] = inst_21631);

(statearr_21753[(13)] = inst_21618__$1);

(statearr_21753[(14)] = inst_21616__$1);

(statearr_21753[(15)] = inst_21617__$1);

(statearr_21753[(16)] = inst_21615__$1);

return statearr_21753;
})();
var statearr_21754_21833 = state_21734__$1;
(statearr_21754_21833[(2)] = null);

(statearr_21754_21833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (21))){
var inst_21656 = (state_21734[(2)]);
var state_21734__$1 = state_21734;
var statearr_21758_21834 = state_21734__$1;
(statearr_21758_21834[(2)] = inst_21656);

(statearr_21758_21834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (31))){
var inst_21682 = (state_21734[(12)]);
var inst_21686 = done.call(null,null);
var inst_21687 = cljs.core.async.untap_STAR_.call(null,m,inst_21682);
var state_21734__$1 = (function (){var statearr_21759 = state_21734;
(statearr_21759[(19)] = inst_21686);

return statearr_21759;
})();
var statearr_21760_21835 = state_21734__$1;
(statearr_21760_21835[(2)] = inst_21687);

(statearr_21760_21835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (32))){
var inst_21675 = (state_21734[(9)]);
var inst_21676 = (state_21734[(20)]);
var inst_21674 = (state_21734[(21)]);
var inst_21677 = (state_21734[(11)]);
var inst_21689 = (state_21734[(2)]);
var inst_21690 = (inst_21677 + (1));
var tmp21755 = inst_21675;
var tmp21756 = inst_21676;
var tmp21757 = inst_21674;
var inst_21674__$1 = tmp21757;
var inst_21675__$1 = tmp21755;
var inst_21676__$1 = tmp21756;
var inst_21677__$1 = inst_21690;
var state_21734__$1 = (function (){var statearr_21761 = state_21734;
(statearr_21761[(9)] = inst_21675__$1);

(statearr_21761[(20)] = inst_21676__$1);

(statearr_21761[(22)] = inst_21689);

(statearr_21761[(21)] = inst_21674__$1);

(statearr_21761[(11)] = inst_21677__$1);

return statearr_21761;
})();
var statearr_21762_21836 = state_21734__$1;
(statearr_21762_21836[(2)] = null);

(statearr_21762_21836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (40))){
var inst_21702 = (state_21734[(23)]);
var inst_21706 = done.call(null,null);
var inst_21707 = cljs.core.async.untap_STAR_.call(null,m,inst_21702);
var state_21734__$1 = (function (){var statearr_21763 = state_21734;
(statearr_21763[(24)] = inst_21706);

return statearr_21763;
})();
var statearr_21764_21837 = state_21734__$1;
(statearr_21764_21837[(2)] = inst_21707);

(statearr_21764_21837[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (33))){
var inst_21693 = (state_21734[(25)]);
var inst_21695 = cljs.core.chunked_seq_QMARK_.call(null,inst_21693);
var state_21734__$1 = state_21734;
if(inst_21695){
var statearr_21765_21838 = state_21734__$1;
(statearr_21765_21838[(1)] = (36));

} else {
var statearr_21766_21839 = state_21734__$1;
(statearr_21766_21839[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (13))){
var inst_21625 = (state_21734[(26)]);
var inst_21628 = cljs.core.async.close_BANG_.call(null,inst_21625);
var state_21734__$1 = state_21734;
var statearr_21767_21840 = state_21734__$1;
(statearr_21767_21840[(2)] = inst_21628);

(statearr_21767_21840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (22))){
var inst_21646 = (state_21734[(8)]);
var inst_21649 = cljs.core.async.close_BANG_.call(null,inst_21646);
var state_21734__$1 = state_21734;
var statearr_21768_21841 = state_21734__$1;
(statearr_21768_21841[(2)] = inst_21649);

(statearr_21768_21841[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (36))){
var inst_21693 = (state_21734[(25)]);
var inst_21697 = cljs.core.chunk_first.call(null,inst_21693);
var inst_21698 = cljs.core.chunk_rest.call(null,inst_21693);
var inst_21699 = cljs.core.count.call(null,inst_21697);
var inst_21674 = inst_21698;
var inst_21675 = inst_21697;
var inst_21676 = inst_21699;
var inst_21677 = (0);
var state_21734__$1 = (function (){var statearr_21769 = state_21734;
(statearr_21769[(9)] = inst_21675);

(statearr_21769[(20)] = inst_21676);

(statearr_21769[(21)] = inst_21674);

(statearr_21769[(11)] = inst_21677);

return statearr_21769;
})();
var statearr_21770_21842 = state_21734__$1;
(statearr_21770_21842[(2)] = null);

(statearr_21770_21842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (41))){
var inst_21693 = (state_21734[(25)]);
var inst_21709 = (state_21734[(2)]);
var inst_21710 = cljs.core.next.call(null,inst_21693);
var inst_21674 = inst_21710;
var inst_21675 = null;
var inst_21676 = (0);
var inst_21677 = (0);
var state_21734__$1 = (function (){var statearr_21771 = state_21734;
(statearr_21771[(9)] = inst_21675);

(statearr_21771[(20)] = inst_21676);

(statearr_21771[(21)] = inst_21674);

(statearr_21771[(11)] = inst_21677);

(statearr_21771[(27)] = inst_21709);

return statearr_21771;
})();
var statearr_21772_21843 = state_21734__$1;
(statearr_21772_21843[(2)] = null);

(statearr_21772_21843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (43))){
var state_21734__$1 = state_21734;
var statearr_21773_21844 = state_21734__$1;
(statearr_21773_21844[(2)] = null);

(statearr_21773_21844[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (29))){
var inst_21718 = (state_21734[(2)]);
var state_21734__$1 = state_21734;
var statearr_21774_21845 = state_21734__$1;
(statearr_21774_21845[(2)] = inst_21718);

(statearr_21774_21845[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (44))){
var inst_21727 = (state_21734[(2)]);
var state_21734__$1 = (function (){var statearr_21775 = state_21734;
(statearr_21775[(28)] = inst_21727);

return statearr_21775;
})();
var statearr_21776_21846 = state_21734__$1;
(statearr_21776_21846[(2)] = null);

(statearr_21776_21846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (6))){
var inst_21666 = (state_21734[(29)]);
var inst_21665 = cljs.core.deref.call(null,cs);
var inst_21666__$1 = cljs.core.keys.call(null,inst_21665);
var inst_21667 = cljs.core.count.call(null,inst_21666__$1);
var inst_21668 = cljs.core.reset_BANG_.call(null,dctr,inst_21667);
var inst_21673 = cljs.core.seq.call(null,inst_21666__$1);
var inst_21674 = inst_21673;
var inst_21675 = null;
var inst_21676 = (0);
var inst_21677 = (0);
var state_21734__$1 = (function (){var statearr_21777 = state_21734;
(statearr_21777[(9)] = inst_21675);

(statearr_21777[(20)] = inst_21676);

(statearr_21777[(29)] = inst_21666__$1);

(statearr_21777[(30)] = inst_21668);

(statearr_21777[(21)] = inst_21674);

(statearr_21777[(11)] = inst_21677);

return statearr_21777;
})();
var statearr_21778_21847 = state_21734__$1;
(statearr_21778_21847[(2)] = null);

(statearr_21778_21847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (28))){
var inst_21693 = (state_21734[(25)]);
var inst_21674 = (state_21734[(21)]);
var inst_21693__$1 = cljs.core.seq.call(null,inst_21674);
var state_21734__$1 = (function (){var statearr_21779 = state_21734;
(statearr_21779[(25)] = inst_21693__$1);

return statearr_21779;
})();
if(inst_21693__$1){
var statearr_21780_21848 = state_21734__$1;
(statearr_21780_21848[(1)] = (33));

} else {
var statearr_21781_21849 = state_21734__$1;
(statearr_21781_21849[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (25))){
var inst_21676 = (state_21734[(20)]);
var inst_21677 = (state_21734[(11)]);
var inst_21679 = (inst_21677 < inst_21676);
var inst_21680 = inst_21679;
var state_21734__$1 = state_21734;
if(cljs.core.truth_(inst_21680)){
var statearr_21782_21850 = state_21734__$1;
(statearr_21782_21850[(1)] = (27));

} else {
var statearr_21783_21851 = state_21734__$1;
(statearr_21783_21851[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (34))){
var state_21734__$1 = state_21734;
var statearr_21784_21852 = state_21734__$1;
(statearr_21784_21852[(2)] = null);

(statearr_21784_21852[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (17))){
var state_21734__$1 = state_21734;
var statearr_21785_21853 = state_21734__$1;
(statearr_21785_21853[(2)] = null);

(statearr_21785_21853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (3))){
var inst_21732 = (state_21734[(2)]);
var state_21734__$1 = state_21734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21734__$1,inst_21732);
} else {
if((state_val_21735 === (12))){
var inst_21661 = (state_21734[(2)]);
var state_21734__$1 = state_21734;
var statearr_21786_21854 = state_21734__$1;
(statearr_21786_21854[(2)] = inst_21661);

(statearr_21786_21854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (2))){
var state_21734__$1 = state_21734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21734__$1,(4),ch);
} else {
if((state_val_21735 === (23))){
var state_21734__$1 = state_21734;
var statearr_21787_21855 = state_21734__$1;
(statearr_21787_21855[(2)] = null);

(statearr_21787_21855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (35))){
var inst_21716 = (state_21734[(2)]);
var state_21734__$1 = state_21734;
var statearr_21788_21856 = state_21734__$1;
(statearr_21788_21856[(2)] = inst_21716);

(statearr_21788_21856[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (19))){
var inst_21635 = (state_21734[(7)]);
var inst_21639 = cljs.core.chunk_first.call(null,inst_21635);
var inst_21640 = cljs.core.chunk_rest.call(null,inst_21635);
var inst_21641 = cljs.core.count.call(null,inst_21639);
var inst_21615 = inst_21640;
var inst_21616 = inst_21639;
var inst_21617 = inst_21641;
var inst_21618 = (0);
var state_21734__$1 = (function (){var statearr_21789 = state_21734;
(statearr_21789[(13)] = inst_21618);

(statearr_21789[(14)] = inst_21616);

(statearr_21789[(15)] = inst_21617);

(statearr_21789[(16)] = inst_21615);

return statearr_21789;
})();
var statearr_21790_21857 = state_21734__$1;
(statearr_21790_21857[(2)] = null);

(statearr_21790_21857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (11))){
var inst_21635 = (state_21734[(7)]);
var inst_21615 = (state_21734[(16)]);
var inst_21635__$1 = cljs.core.seq.call(null,inst_21615);
var state_21734__$1 = (function (){var statearr_21791 = state_21734;
(statearr_21791[(7)] = inst_21635__$1);

return statearr_21791;
})();
if(inst_21635__$1){
var statearr_21792_21858 = state_21734__$1;
(statearr_21792_21858[(1)] = (16));

} else {
var statearr_21793_21859 = state_21734__$1;
(statearr_21793_21859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (9))){
var inst_21663 = (state_21734[(2)]);
var state_21734__$1 = state_21734;
var statearr_21794_21860 = state_21734__$1;
(statearr_21794_21860[(2)] = inst_21663);

(statearr_21794_21860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (5))){
var inst_21613 = cljs.core.deref.call(null,cs);
var inst_21614 = cljs.core.seq.call(null,inst_21613);
var inst_21615 = inst_21614;
var inst_21616 = null;
var inst_21617 = (0);
var inst_21618 = (0);
var state_21734__$1 = (function (){var statearr_21795 = state_21734;
(statearr_21795[(13)] = inst_21618);

(statearr_21795[(14)] = inst_21616);

(statearr_21795[(15)] = inst_21617);

(statearr_21795[(16)] = inst_21615);

return statearr_21795;
})();
var statearr_21796_21861 = state_21734__$1;
(statearr_21796_21861[(2)] = null);

(statearr_21796_21861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (14))){
var state_21734__$1 = state_21734;
var statearr_21797_21862 = state_21734__$1;
(statearr_21797_21862[(2)] = null);

(statearr_21797_21862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (45))){
var inst_21724 = (state_21734[(2)]);
var state_21734__$1 = state_21734;
var statearr_21798_21863 = state_21734__$1;
(statearr_21798_21863[(2)] = inst_21724);

(statearr_21798_21863[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (26))){
var inst_21666 = (state_21734[(29)]);
var inst_21720 = (state_21734[(2)]);
var inst_21721 = cljs.core.seq.call(null,inst_21666);
var state_21734__$1 = (function (){var statearr_21799 = state_21734;
(statearr_21799[(31)] = inst_21720);

return statearr_21799;
})();
if(inst_21721){
var statearr_21800_21864 = state_21734__$1;
(statearr_21800_21864[(1)] = (42));

} else {
var statearr_21801_21865 = state_21734__$1;
(statearr_21801_21865[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (16))){
var inst_21635 = (state_21734[(7)]);
var inst_21637 = cljs.core.chunked_seq_QMARK_.call(null,inst_21635);
var state_21734__$1 = state_21734;
if(inst_21637){
var statearr_21802_21866 = state_21734__$1;
(statearr_21802_21866[(1)] = (19));

} else {
var statearr_21803_21867 = state_21734__$1;
(statearr_21803_21867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (38))){
var inst_21713 = (state_21734[(2)]);
var state_21734__$1 = state_21734;
var statearr_21804_21868 = state_21734__$1;
(statearr_21804_21868[(2)] = inst_21713);

(statearr_21804_21868[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (30))){
var state_21734__$1 = state_21734;
var statearr_21805_21869 = state_21734__$1;
(statearr_21805_21869[(2)] = null);

(statearr_21805_21869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (10))){
var inst_21618 = (state_21734[(13)]);
var inst_21616 = (state_21734[(14)]);
var inst_21624 = cljs.core._nth.call(null,inst_21616,inst_21618);
var inst_21625 = cljs.core.nth.call(null,inst_21624,(0),null);
var inst_21626 = cljs.core.nth.call(null,inst_21624,(1),null);
var state_21734__$1 = (function (){var statearr_21806 = state_21734;
(statearr_21806[(26)] = inst_21625);

return statearr_21806;
})();
if(cljs.core.truth_(inst_21626)){
var statearr_21807_21870 = state_21734__$1;
(statearr_21807_21870[(1)] = (13));

} else {
var statearr_21808_21871 = state_21734__$1;
(statearr_21808_21871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (18))){
var inst_21659 = (state_21734[(2)]);
var state_21734__$1 = state_21734;
var statearr_21809_21872 = state_21734__$1;
(statearr_21809_21872[(2)] = inst_21659);

(statearr_21809_21872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (42))){
var state_21734__$1 = state_21734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21734__$1,(45),dchan);
} else {
if((state_val_21735 === (37))){
var inst_21693 = (state_21734[(25)]);
var inst_21702 = (state_21734[(23)]);
var inst_21606 = (state_21734[(10)]);
var inst_21702__$1 = cljs.core.first.call(null,inst_21693);
var inst_21703 = cljs.core.async.put_BANG_.call(null,inst_21702__$1,inst_21606,done);
var state_21734__$1 = (function (){var statearr_21810 = state_21734;
(statearr_21810[(23)] = inst_21702__$1);

return statearr_21810;
})();
if(cljs.core.truth_(inst_21703)){
var statearr_21811_21873 = state_21734__$1;
(statearr_21811_21873[(1)] = (39));

} else {
var statearr_21812_21874 = state_21734__$1;
(statearr_21812_21874[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21735 === (8))){
var inst_21618 = (state_21734[(13)]);
var inst_21617 = (state_21734[(15)]);
var inst_21620 = (inst_21618 < inst_21617);
var inst_21621 = inst_21620;
var state_21734__$1 = state_21734;
if(cljs.core.truth_(inst_21621)){
var statearr_21813_21875 = state_21734__$1;
(statearr_21813_21875[(1)] = (10));

} else {
var statearr_21814_21876 = state_21734__$1;
(statearr_21814_21876[(1)] = (11));

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
});})(c__20515__auto___21822,cs,m,dchan,dctr,done))
;
return ((function (switch__20494__auto__,c__20515__auto___21822,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20495__auto__ = null;
var cljs$core$async$mult_$_state_machine__20495__auto____0 = (function (){
var statearr_21818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21818[(0)] = cljs$core$async$mult_$_state_machine__20495__auto__);

(statearr_21818[(1)] = (1));

return statearr_21818;
});
var cljs$core$async$mult_$_state_machine__20495__auto____1 = (function (state_21734){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_21734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e21819){if((e21819 instanceof Object)){
var ex__20498__auto__ = e21819;
var statearr_21820_21877 = state_21734;
(statearr_21820_21877[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21878 = state_21734;
state_21734 = G__21878;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20495__auto__ = function(state_21734){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20495__auto____1.call(this,state_21734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20495__auto____0;
cljs$core$async$mult_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20495__auto____1;
return cljs$core$async$mult_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___21822,cs,m,dchan,dctr,done))
})();
var state__20517__auto__ = (function (){var statearr_21821 = f__20516__auto__.call(null);
(statearr_21821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___21822);

return statearr_21821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___21822,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21879 = [];
var len__19512__auto___21882 = arguments.length;
var i__19513__auto___21883 = (0);
while(true){
if((i__19513__auto___21883 < len__19512__auto___21882)){
args21879.push((arguments[i__19513__auto___21883]));

var G__21884 = (i__19513__auto___21883 + (1));
i__19513__auto___21883 = G__21884;
continue;
} else {
}
break;
}

var G__21881 = args21879.length;
switch (G__21881) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21879.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19105__auto__ = (((m == null))?null:m);
var m__19106__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,m,ch);
} else {
var m__19106__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19105__auto__ = (((m == null))?null:m);
var m__19106__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,m,ch);
} else {
var m__19106__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19105__auto__ = (((m == null))?null:m);
var m__19106__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,m);
} else {
var m__19106__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19105__auto__ = (((m == null))?null:m);
var m__19106__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,m,state_map);
} else {
var m__19106__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19105__auto__ = (((m == null))?null:m);
var m__19106__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,m,mode);
} else {
var m__19106__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19519__auto__ = [];
var len__19512__auto___21896 = arguments.length;
var i__19513__auto___21897 = (0);
while(true){
if((i__19513__auto___21897 < len__19512__auto___21896)){
args__19519__auto__.push((arguments[i__19513__auto___21897]));

var G__21898 = (i__19513__auto___21897 + (1));
i__19513__auto___21897 = G__21898;
continue;
} else {
}
break;
}

var argseq__19520__auto__ = ((((3) < args__19519__auto__.length))?(new cljs.core.IndexedSeq(args__19519__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19520__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21890){
var map__21891 = p__21890;
var map__21891__$1 = ((((!((map__21891 == null)))?((((map__21891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21891):map__21891);
var opts = map__21891__$1;
var statearr_21893_21899 = state;
(statearr_21893_21899[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__21891,map__21891__$1,opts){
return (function (val){
var statearr_21894_21900 = state;
(statearr_21894_21900[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21891,map__21891__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_21895_21901 = state;
(statearr_21895_21901[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21886){
var G__21887 = cljs.core.first.call(null,seq21886);
var seq21886__$1 = cljs.core.next.call(null,seq21886);
var G__21888 = cljs.core.first.call(null,seq21886__$1);
var seq21886__$2 = cljs.core.next.call(null,seq21886__$1);
var G__21889 = cljs.core.first.call(null,seq21886__$2);
var seq21886__$3 = cljs.core.next.call(null,seq21886__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21887,G__21888,G__21889,seq21886__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22065 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22066){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22066 = meta22066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22067,meta22066__$1){
var self__ = this;
var _22067__$1 = this;
return (new cljs.core.async.t_cljs$core$async22065(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22066__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22067){
var self__ = this;
var _22067__$1 = this;
return self__.meta22066;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22065.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22065.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22065.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22065.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22065.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22065.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22065.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22065.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22066","meta22066",1799874894,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22065";

cljs.core.async.t_cljs$core$async22065.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async22065");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22065 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22065(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22066){
return (new cljs.core.async.t_cljs$core$async22065(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22066));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22065(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20515__auto___22228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___22228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___22228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22165){
var state_val_22166 = (state_22165[(1)]);
if((state_val_22166 === (7))){
var inst_22083 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
var statearr_22167_22229 = state_22165__$1;
(statearr_22167_22229[(2)] = inst_22083);

(statearr_22167_22229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (20))){
var inst_22095 = (state_22165[(7)]);
var state_22165__$1 = state_22165;
var statearr_22168_22230 = state_22165__$1;
(statearr_22168_22230[(2)] = inst_22095);

(statearr_22168_22230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (27))){
var state_22165__$1 = state_22165;
var statearr_22169_22231 = state_22165__$1;
(statearr_22169_22231[(2)] = null);

(statearr_22169_22231[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (1))){
var inst_22071 = (state_22165[(8)]);
var inst_22071__$1 = calc_state.call(null);
var inst_22073 = (inst_22071__$1 == null);
var inst_22074 = cljs.core.not.call(null,inst_22073);
var state_22165__$1 = (function (){var statearr_22170 = state_22165;
(statearr_22170[(8)] = inst_22071__$1);

return statearr_22170;
})();
if(inst_22074){
var statearr_22171_22232 = state_22165__$1;
(statearr_22171_22232[(1)] = (2));

} else {
var statearr_22172_22233 = state_22165__$1;
(statearr_22172_22233[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (24))){
var inst_22118 = (state_22165[(9)]);
var inst_22125 = (state_22165[(10)]);
var inst_22139 = (state_22165[(11)]);
var inst_22139__$1 = inst_22118.call(null,inst_22125);
var state_22165__$1 = (function (){var statearr_22173 = state_22165;
(statearr_22173[(11)] = inst_22139__$1);

return statearr_22173;
})();
if(cljs.core.truth_(inst_22139__$1)){
var statearr_22174_22234 = state_22165__$1;
(statearr_22174_22234[(1)] = (29));

} else {
var statearr_22175_22235 = state_22165__$1;
(statearr_22175_22235[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (4))){
var inst_22086 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
if(cljs.core.truth_(inst_22086)){
var statearr_22176_22236 = state_22165__$1;
(statearr_22176_22236[(1)] = (8));

} else {
var statearr_22177_22237 = state_22165__$1;
(statearr_22177_22237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (15))){
var inst_22112 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
if(cljs.core.truth_(inst_22112)){
var statearr_22178_22238 = state_22165__$1;
(statearr_22178_22238[(1)] = (19));

} else {
var statearr_22179_22239 = state_22165__$1;
(statearr_22179_22239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (21))){
var inst_22117 = (state_22165[(12)]);
var inst_22117__$1 = (state_22165[(2)]);
var inst_22118 = cljs.core.get.call(null,inst_22117__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22119 = cljs.core.get.call(null,inst_22117__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22120 = cljs.core.get.call(null,inst_22117__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22165__$1 = (function (){var statearr_22180 = state_22165;
(statearr_22180[(9)] = inst_22118);

(statearr_22180[(13)] = inst_22119);

(statearr_22180[(12)] = inst_22117__$1);

return statearr_22180;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22165__$1,(22),inst_22120);
} else {
if((state_val_22166 === (31))){
var inst_22147 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
if(cljs.core.truth_(inst_22147)){
var statearr_22181_22240 = state_22165__$1;
(statearr_22181_22240[(1)] = (32));

} else {
var statearr_22182_22241 = state_22165__$1;
(statearr_22182_22241[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (32))){
var inst_22124 = (state_22165[(14)]);
var state_22165__$1 = state_22165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22165__$1,(35),out,inst_22124);
} else {
if((state_val_22166 === (33))){
var inst_22117 = (state_22165[(12)]);
var inst_22095 = inst_22117;
var state_22165__$1 = (function (){var statearr_22183 = state_22165;
(statearr_22183[(7)] = inst_22095);

return statearr_22183;
})();
var statearr_22184_22242 = state_22165__$1;
(statearr_22184_22242[(2)] = null);

(statearr_22184_22242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (13))){
var inst_22095 = (state_22165[(7)]);
var inst_22102 = inst_22095.cljs$lang$protocol_mask$partition0$;
var inst_22103 = (inst_22102 & (64));
var inst_22104 = inst_22095.cljs$core$ISeq$;
var inst_22105 = (inst_22103) || (inst_22104);
var state_22165__$1 = state_22165;
if(cljs.core.truth_(inst_22105)){
var statearr_22185_22243 = state_22165__$1;
(statearr_22185_22243[(1)] = (16));

} else {
var statearr_22186_22244 = state_22165__$1;
(statearr_22186_22244[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (22))){
var inst_22124 = (state_22165[(14)]);
var inst_22125 = (state_22165[(10)]);
var inst_22123 = (state_22165[(2)]);
var inst_22124__$1 = cljs.core.nth.call(null,inst_22123,(0),null);
var inst_22125__$1 = cljs.core.nth.call(null,inst_22123,(1),null);
var inst_22126 = (inst_22124__$1 == null);
var inst_22127 = cljs.core._EQ_.call(null,inst_22125__$1,change);
var inst_22128 = (inst_22126) || (inst_22127);
var state_22165__$1 = (function (){var statearr_22187 = state_22165;
(statearr_22187[(14)] = inst_22124__$1);

(statearr_22187[(10)] = inst_22125__$1);

return statearr_22187;
})();
if(cljs.core.truth_(inst_22128)){
var statearr_22188_22245 = state_22165__$1;
(statearr_22188_22245[(1)] = (23));

} else {
var statearr_22189_22246 = state_22165__$1;
(statearr_22189_22246[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (36))){
var inst_22117 = (state_22165[(12)]);
var inst_22095 = inst_22117;
var state_22165__$1 = (function (){var statearr_22190 = state_22165;
(statearr_22190[(7)] = inst_22095);

return statearr_22190;
})();
var statearr_22191_22247 = state_22165__$1;
(statearr_22191_22247[(2)] = null);

(statearr_22191_22247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (29))){
var inst_22139 = (state_22165[(11)]);
var state_22165__$1 = state_22165;
var statearr_22192_22248 = state_22165__$1;
(statearr_22192_22248[(2)] = inst_22139);

(statearr_22192_22248[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (6))){
var state_22165__$1 = state_22165;
var statearr_22193_22249 = state_22165__$1;
(statearr_22193_22249[(2)] = false);

(statearr_22193_22249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (28))){
var inst_22135 = (state_22165[(2)]);
var inst_22136 = calc_state.call(null);
var inst_22095 = inst_22136;
var state_22165__$1 = (function (){var statearr_22194 = state_22165;
(statearr_22194[(15)] = inst_22135);

(statearr_22194[(7)] = inst_22095);

return statearr_22194;
})();
var statearr_22195_22250 = state_22165__$1;
(statearr_22195_22250[(2)] = null);

(statearr_22195_22250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (25))){
var inst_22161 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
var statearr_22196_22251 = state_22165__$1;
(statearr_22196_22251[(2)] = inst_22161);

(statearr_22196_22251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (34))){
var inst_22159 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
var statearr_22197_22252 = state_22165__$1;
(statearr_22197_22252[(2)] = inst_22159);

(statearr_22197_22252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (17))){
var state_22165__$1 = state_22165;
var statearr_22198_22253 = state_22165__$1;
(statearr_22198_22253[(2)] = false);

(statearr_22198_22253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (3))){
var state_22165__$1 = state_22165;
var statearr_22199_22254 = state_22165__$1;
(statearr_22199_22254[(2)] = false);

(statearr_22199_22254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (12))){
var inst_22163 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22165__$1,inst_22163);
} else {
if((state_val_22166 === (2))){
var inst_22071 = (state_22165[(8)]);
var inst_22076 = inst_22071.cljs$lang$protocol_mask$partition0$;
var inst_22077 = (inst_22076 & (64));
var inst_22078 = inst_22071.cljs$core$ISeq$;
var inst_22079 = (inst_22077) || (inst_22078);
var state_22165__$1 = state_22165;
if(cljs.core.truth_(inst_22079)){
var statearr_22200_22255 = state_22165__$1;
(statearr_22200_22255[(1)] = (5));

} else {
var statearr_22201_22256 = state_22165__$1;
(statearr_22201_22256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (23))){
var inst_22124 = (state_22165[(14)]);
var inst_22130 = (inst_22124 == null);
var state_22165__$1 = state_22165;
if(cljs.core.truth_(inst_22130)){
var statearr_22202_22257 = state_22165__$1;
(statearr_22202_22257[(1)] = (26));

} else {
var statearr_22203_22258 = state_22165__$1;
(statearr_22203_22258[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (35))){
var inst_22150 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
if(cljs.core.truth_(inst_22150)){
var statearr_22204_22259 = state_22165__$1;
(statearr_22204_22259[(1)] = (36));

} else {
var statearr_22205_22260 = state_22165__$1;
(statearr_22205_22260[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (19))){
var inst_22095 = (state_22165[(7)]);
var inst_22114 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22095);
var state_22165__$1 = state_22165;
var statearr_22206_22261 = state_22165__$1;
(statearr_22206_22261[(2)] = inst_22114);

(statearr_22206_22261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (11))){
var inst_22095 = (state_22165[(7)]);
var inst_22099 = (inst_22095 == null);
var inst_22100 = cljs.core.not.call(null,inst_22099);
var state_22165__$1 = state_22165;
if(inst_22100){
var statearr_22207_22262 = state_22165__$1;
(statearr_22207_22262[(1)] = (13));

} else {
var statearr_22208_22263 = state_22165__$1;
(statearr_22208_22263[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (9))){
var inst_22071 = (state_22165[(8)]);
var state_22165__$1 = state_22165;
var statearr_22209_22264 = state_22165__$1;
(statearr_22209_22264[(2)] = inst_22071);

(statearr_22209_22264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (5))){
var state_22165__$1 = state_22165;
var statearr_22210_22265 = state_22165__$1;
(statearr_22210_22265[(2)] = true);

(statearr_22210_22265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (14))){
var state_22165__$1 = state_22165;
var statearr_22211_22266 = state_22165__$1;
(statearr_22211_22266[(2)] = false);

(statearr_22211_22266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (26))){
var inst_22125 = (state_22165[(10)]);
var inst_22132 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22125);
var state_22165__$1 = state_22165;
var statearr_22212_22267 = state_22165__$1;
(statearr_22212_22267[(2)] = inst_22132);

(statearr_22212_22267[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (16))){
var state_22165__$1 = state_22165;
var statearr_22213_22268 = state_22165__$1;
(statearr_22213_22268[(2)] = true);

(statearr_22213_22268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (38))){
var inst_22155 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
var statearr_22214_22269 = state_22165__$1;
(statearr_22214_22269[(2)] = inst_22155);

(statearr_22214_22269[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (30))){
var inst_22118 = (state_22165[(9)]);
var inst_22125 = (state_22165[(10)]);
var inst_22119 = (state_22165[(13)]);
var inst_22142 = cljs.core.empty_QMARK_.call(null,inst_22118);
var inst_22143 = inst_22119.call(null,inst_22125);
var inst_22144 = cljs.core.not.call(null,inst_22143);
var inst_22145 = (inst_22142) && (inst_22144);
var state_22165__$1 = state_22165;
var statearr_22215_22270 = state_22165__$1;
(statearr_22215_22270[(2)] = inst_22145);

(statearr_22215_22270[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (10))){
var inst_22071 = (state_22165[(8)]);
var inst_22091 = (state_22165[(2)]);
var inst_22092 = cljs.core.get.call(null,inst_22091,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22093 = cljs.core.get.call(null,inst_22091,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22094 = cljs.core.get.call(null,inst_22091,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22095 = inst_22071;
var state_22165__$1 = (function (){var statearr_22216 = state_22165;
(statearr_22216[(7)] = inst_22095);

(statearr_22216[(16)] = inst_22092);

(statearr_22216[(17)] = inst_22093);

(statearr_22216[(18)] = inst_22094);

return statearr_22216;
})();
var statearr_22217_22271 = state_22165__$1;
(statearr_22217_22271[(2)] = null);

(statearr_22217_22271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (18))){
var inst_22109 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
var statearr_22218_22272 = state_22165__$1;
(statearr_22218_22272[(2)] = inst_22109);

(statearr_22218_22272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (37))){
var state_22165__$1 = state_22165;
var statearr_22219_22273 = state_22165__$1;
(statearr_22219_22273[(2)] = null);

(statearr_22219_22273[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (8))){
var inst_22071 = (state_22165[(8)]);
var inst_22088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22071);
var state_22165__$1 = state_22165;
var statearr_22220_22274 = state_22165__$1;
(statearr_22220_22274[(2)] = inst_22088);

(statearr_22220_22274[(1)] = (10));


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
});})(c__20515__auto___22228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20494__auto__,c__20515__auto___22228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20495__auto__ = null;
var cljs$core$async$mix_$_state_machine__20495__auto____0 = (function (){
var statearr_22224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22224[(0)] = cljs$core$async$mix_$_state_machine__20495__auto__);

(statearr_22224[(1)] = (1));

return statearr_22224;
});
var cljs$core$async$mix_$_state_machine__20495__auto____1 = (function (state_22165){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_22165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e22225){if((e22225 instanceof Object)){
var ex__20498__auto__ = e22225;
var statearr_22226_22275 = state_22165;
(statearr_22226_22275[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22276 = state_22165;
state_22165 = G__22276;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20495__auto__ = function(state_22165){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20495__auto____1.call(this,state_22165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20495__auto____0;
cljs$core$async$mix_$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20495__auto____1;
return cljs$core$async$mix_$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___22228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20517__auto__ = (function (){var statearr_22227 = f__20516__auto__.call(null);
(statearr_22227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___22228);

return statearr_22227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___22228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19105__auto__ = (((p == null))?null:p);
var m__19106__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19106__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19105__auto__ = (((p == null))?null:p);
var m__19106__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,p,v,ch);
} else {
var m__19106__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22277 = [];
var len__19512__auto___22280 = arguments.length;
var i__19513__auto___22281 = (0);
while(true){
if((i__19513__auto___22281 < len__19512__auto___22280)){
args22277.push((arguments[i__19513__auto___22281]));

var G__22282 = (i__19513__auto___22281 + (1));
i__19513__auto___22281 = G__22282;
continue;
} else {
}
break;
}

var G__22279 = args22277.length;
switch (G__22279) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22277.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19105__auto__ = (((p == null))?null:p);
var m__19106__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,p);
} else {
var m__19106__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19105__auto__ = (((p == null))?null:p);
var m__19106__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19105__auto__)]);
if(!((m__19106__auto__ == null))){
return m__19106__auto__.call(null,p,v);
} else {
var m__19106__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19106__auto____$1 == null))){
return m__19106__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22285 = [];
var len__19512__auto___22410 = arguments.length;
var i__19513__auto___22411 = (0);
while(true){
if((i__19513__auto___22411 < len__19512__auto___22410)){
args22285.push((arguments[i__19513__auto___22411]));

var G__22412 = (i__19513__auto___22411 + (1));
i__19513__auto___22411 = G__22412;
continue;
} else {
}
break;
}

var G__22287 = args22285.length;
switch (G__22287) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22285.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18442__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18442__auto__)){
return or__18442__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18442__auto__,mults){
return (function (p1__22284_SHARP_){
if(cljs.core.truth_(p1__22284_SHARP_.call(null,topic))){
return p1__22284_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22284_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18442__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22288 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22289){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22289 = meta22289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22290,meta22289__$1){
var self__ = this;
var _22290__$1 = this;
return (new cljs.core.async.t_cljs$core$async22288(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22289__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22290){
var self__ = this;
var _22290__$1 = this;
return self__.meta22289;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22288.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22289","meta22289",1456143176,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22288";

cljs.core.async.t_cljs$core$async22288.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async22288");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22288 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22288(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22289){
return (new cljs.core.async.t_cljs$core$async22288(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22289));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22288(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20515__auto___22414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___22414,mults,ensure_mult,p){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___22414,mults,ensure_mult,p){
return (function (state_22362){
var state_val_22363 = (state_22362[(1)]);
if((state_val_22363 === (7))){
var inst_22358 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
var statearr_22364_22415 = state_22362__$1;
(statearr_22364_22415[(2)] = inst_22358);

(statearr_22364_22415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (20))){
var state_22362__$1 = state_22362;
var statearr_22365_22416 = state_22362__$1;
(statearr_22365_22416[(2)] = null);

(statearr_22365_22416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (1))){
var state_22362__$1 = state_22362;
var statearr_22366_22417 = state_22362__$1;
(statearr_22366_22417[(2)] = null);

(statearr_22366_22417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (24))){
var inst_22341 = (state_22362[(7)]);
var inst_22350 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22341);
var state_22362__$1 = state_22362;
var statearr_22367_22418 = state_22362__$1;
(statearr_22367_22418[(2)] = inst_22350);

(statearr_22367_22418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (4))){
var inst_22293 = (state_22362[(8)]);
var inst_22293__$1 = (state_22362[(2)]);
var inst_22294 = (inst_22293__$1 == null);
var state_22362__$1 = (function (){var statearr_22368 = state_22362;
(statearr_22368[(8)] = inst_22293__$1);

return statearr_22368;
})();
if(cljs.core.truth_(inst_22294)){
var statearr_22369_22419 = state_22362__$1;
(statearr_22369_22419[(1)] = (5));

} else {
var statearr_22370_22420 = state_22362__$1;
(statearr_22370_22420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (15))){
var inst_22335 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
var statearr_22371_22421 = state_22362__$1;
(statearr_22371_22421[(2)] = inst_22335);

(statearr_22371_22421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (21))){
var inst_22355 = (state_22362[(2)]);
var state_22362__$1 = (function (){var statearr_22372 = state_22362;
(statearr_22372[(9)] = inst_22355);

return statearr_22372;
})();
var statearr_22373_22422 = state_22362__$1;
(statearr_22373_22422[(2)] = null);

(statearr_22373_22422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (13))){
var inst_22317 = (state_22362[(10)]);
var inst_22319 = cljs.core.chunked_seq_QMARK_.call(null,inst_22317);
var state_22362__$1 = state_22362;
if(inst_22319){
var statearr_22374_22423 = state_22362__$1;
(statearr_22374_22423[(1)] = (16));

} else {
var statearr_22375_22424 = state_22362__$1;
(statearr_22375_22424[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (22))){
var inst_22347 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
if(cljs.core.truth_(inst_22347)){
var statearr_22376_22425 = state_22362__$1;
(statearr_22376_22425[(1)] = (23));

} else {
var statearr_22377_22426 = state_22362__$1;
(statearr_22377_22426[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (6))){
var inst_22293 = (state_22362[(8)]);
var inst_22343 = (state_22362[(11)]);
var inst_22341 = (state_22362[(7)]);
var inst_22341__$1 = topic_fn.call(null,inst_22293);
var inst_22342 = cljs.core.deref.call(null,mults);
var inst_22343__$1 = cljs.core.get.call(null,inst_22342,inst_22341__$1);
var state_22362__$1 = (function (){var statearr_22378 = state_22362;
(statearr_22378[(11)] = inst_22343__$1);

(statearr_22378[(7)] = inst_22341__$1);

return statearr_22378;
})();
if(cljs.core.truth_(inst_22343__$1)){
var statearr_22379_22427 = state_22362__$1;
(statearr_22379_22427[(1)] = (19));

} else {
var statearr_22380_22428 = state_22362__$1;
(statearr_22380_22428[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (25))){
var inst_22352 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
var statearr_22381_22429 = state_22362__$1;
(statearr_22381_22429[(2)] = inst_22352);

(statearr_22381_22429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (17))){
var inst_22317 = (state_22362[(10)]);
var inst_22326 = cljs.core.first.call(null,inst_22317);
var inst_22327 = cljs.core.async.muxch_STAR_.call(null,inst_22326);
var inst_22328 = cljs.core.async.close_BANG_.call(null,inst_22327);
var inst_22329 = cljs.core.next.call(null,inst_22317);
var inst_22303 = inst_22329;
var inst_22304 = null;
var inst_22305 = (0);
var inst_22306 = (0);
var state_22362__$1 = (function (){var statearr_22382 = state_22362;
(statearr_22382[(12)] = inst_22303);

(statearr_22382[(13)] = inst_22305);

(statearr_22382[(14)] = inst_22328);

(statearr_22382[(15)] = inst_22304);

(statearr_22382[(16)] = inst_22306);

return statearr_22382;
})();
var statearr_22383_22430 = state_22362__$1;
(statearr_22383_22430[(2)] = null);

(statearr_22383_22430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (3))){
var inst_22360 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22362__$1,inst_22360);
} else {
if((state_val_22363 === (12))){
var inst_22337 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
var statearr_22384_22431 = state_22362__$1;
(statearr_22384_22431[(2)] = inst_22337);

(statearr_22384_22431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (2))){
var state_22362__$1 = state_22362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22362__$1,(4),ch);
} else {
if((state_val_22363 === (23))){
var state_22362__$1 = state_22362;
var statearr_22385_22432 = state_22362__$1;
(statearr_22385_22432[(2)] = null);

(statearr_22385_22432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (19))){
var inst_22293 = (state_22362[(8)]);
var inst_22343 = (state_22362[(11)]);
var inst_22345 = cljs.core.async.muxch_STAR_.call(null,inst_22343);
var state_22362__$1 = state_22362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22362__$1,(22),inst_22345,inst_22293);
} else {
if((state_val_22363 === (11))){
var inst_22303 = (state_22362[(12)]);
var inst_22317 = (state_22362[(10)]);
var inst_22317__$1 = cljs.core.seq.call(null,inst_22303);
var state_22362__$1 = (function (){var statearr_22386 = state_22362;
(statearr_22386[(10)] = inst_22317__$1);

return statearr_22386;
})();
if(inst_22317__$1){
var statearr_22387_22433 = state_22362__$1;
(statearr_22387_22433[(1)] = (13));

} else {
var statearr_22388_22434 = state_22362__$1;
(statearr_22388_22434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (9))){
var inst_22339 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
var statearr_22389_22435 = state_22362__$1;
(statearr_22389_22435[(2)] = inst_22339);

(statearr_22389_22435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (5))){
var inst_22300 = cljs.core.deref.call(null,mults);
var inst_22301 = cljs.core.vals.call(null,inst_22300);
var inst_22302 = cljs.core.seq.call(null,inst_22301);
var inst_22303 = inst_22302;
var inst_22304 = null;
var inst_22305 = (0);
var inst_22306 = (0);
var state_22362__$1 = (function (){var statearr_22390 = state_22362;
(statearr_22390[(12)] = inst_22303);

(statearr_22390[(13)] = inst_22305);

(statearr_22390[(15)] = inst_22304);

(statearr_22390[(16)] = inst_22306);

return statearr_22390;
})();
var statearr_22391_22436 = state_22362__$1;
(statearr_22391_22436[(2)] = null);

(statearr_22391_22436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (14))){
var state_22362__$1 = state_22362;
var statearr_22395_22437 = state_22362__$1;
(statearr_22395_22437[(2)] = null);

(statearr_22395_22437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (16))){
var inst_22317 = (state_22362[(10)]);
var inst_22321 = cljs.core.chunk_first.call(null,inst_22317);
var inst_22322 = cljs.core.chunk_rest.call(null,inst_22317);
var inst_22323 = cljs.core.count.call(null,inst_22321);
var inst_22303 = inst_22322;
var inst_22304 = inst_22321;
var inst_22305 = inst_22323;
var inst_22306 = (0);
var state_22362__$1 = (function (){var statearr_22396 = state_22362;
(statearr_22396[(12)] = inst_22303);

(statearr_22396[(13)] = inst_22305);

(statearr_22396[(15)] = inst_22304);

(statearr_22396[(16)] = inst_22306);

return statearr_22396;
})();
var statearr_22397_22438 = state_22362__$1;
(statearr_22397_22438[(2)] = null);

(statearr_22397_22438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (10))){
var inst_22303 = (state_22362[(12)]);
var inst_22305 = (state_22362[(13)]);
var inst_22304 = (state_22362[(15)]);
var inst_22306 = (state_22362[(16)]);
var inst_22311 = cljs.core._nth.call(null,inst_22304,inst_22306);
var inst_22312 = cljs.core.async.muxch_STAR_.call(null,inst_22311);
var inst_22313 = cljs.core.async.close_BANG_.call(null,inst_22312);
var inst_22314 = (inst_22306 + (1));
var tmp22392 = inst_22303;
var tmp22393 = inst_22305;
var tmp22394 = inst_22304;
var inst_22303__$1 = tmp22392;
var inst_22304__$1 = tmp22394;
var inst_22305__$1 = tmp22393;
var inst_22306__$1 = inst_22314;
var state_22362__$1 = (function (){var statearr_22398 = state_22362;
(statearr_22398[(12)] = inst_22303__$1);

(statearr_22398[(13)] = inst_22305__$1);

(statearr_22398[(17)] = inst_22313);

(statearr_22398[(15)] = inst_22304__$1);

(statearr_22398[(16)] = inst_22306__$1);

return statearr_22398;
})();
var statearr_22399_22439 = state_22362__$1;
(statearr_22399_22439[(2)] = null);

(statearr_22399_22439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (18))){
var inst_22332 = (state_22362[(2)]);
var state_22362__$1 = state_22362;
var statearr_22400_22440 = state_22362__$1;
(statearr_22400_22440[(2)] = inst_22332);

(statearr_22400_22440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22363 === (8))){
var inst_22305 = (state_22362[(13)]);
var inst_22306 = (state_22362[(16)]);
var inst_22308 = (inst_22306 < inst_22305);
var inst_22309 = inst_22308;
var state_22362__$1 = state_22362;
if(cljs.core.truth_(inst_22309)){
var statearr_22401_22441 = state_22362__$1;
(statearr_22401_22441[(1)] = (10));

} else {
var statearr_22402_22442 = state_22362__$1;
(statearr_22402_22442[(1)] = (11));

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
});})(c__20515__auto___22414,mults,ensure_mult,p))
;
return ((function (switch__20494__auto__,c__20515__auto___22414,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20495__auto__ = null;
var cljs$core$async$state_machine__20495__auto____0 = (function (){
var statearr_22406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22406[(0)] = cljs$core$async$state_machine__20495__auto__);

(statearr_22406[(1)] = (1));

return statearr_22406;
});
var cljs$core$async$state_machine__20495__auto____1 = (function (state_22362){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_22362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e22407){if((e22407 instanceof Object)){
var ex__20498__auto__ = e22407;
var statearr_22408_22443 = state_22362;
(statearr_22408_22443[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22444 = state_22362;
state_22362 = G__22444;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$state_machine__20495__auto__ = function(state_22362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20495__auto____1.call(this,state_22362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20495__auto____0;
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20495__auto____1;
return cljs$core$async$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___22414,mults,ensure_mult,p))
})();
var state__20517__auto__ = (function (){var statearr_22409 = f__20516__auto__.call(null);
(statearr_22409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___22414);

return statearr_22409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___22414,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22445 = [];
var len__19512__auto___22448 = arguments.length;
var i__19513__auto___22449 = (0);
while(true){
if((i__19513__auto___22449 < len__19512__auto___22448)){
args22445.push((arguments[i__19513__auto___22449]));

var G__22450 = (i__19513__auto___22449 + (1));
i__19513__auto___22449 = G__22450;
continue;
} else {
}
break;
}

var G__22447 = args22445.length;
switch (G__22447) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22445.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22452 = [];
var len__19512__auto___22455 = arguments.length;
var i__19513__auto___22456 = (0);
while(true){
if((i__19513__auto___22456 < len__19512__auto___22455)){
args22452.push((arguments[i__19513__auto___22456]));

var G__22457 = (i__19513__auto___22456 + (1));
i__19513__auto___22456 = G__22457;
continue;
} else {
}
break;
}

var G__22454 = args22452.length;
switch (G__22454) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22452.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22459 = [];
var len__19512__auto___22530 = arguments.length;
var i__19513__auto___22531 = (0);
while(true){
if((i__19513__auto___22531 < len__19512__auto___22530)){
args22459.push((arguments[i__19513__auto___22531]));

var G__22532 = (i__19513__auto___22531 + (1));
i__19513__auto___22531 = G__22532;
continue;
} else {
}
break;
}

var G__22461 = args22459.length;
switch (G__22461) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22459.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20515__auto___22534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___22534,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___22534,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22500){
var state_val_22501 = (state_22500[(1)]);
if((state_val_22501 === (7))){
var state_22500__$1 = state_22500;
var statearr_22502_22535 = state_22500__$1;
(statearr_22502_22535[(2)] = null);

(statearr_22502_22535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (1))){
var state_22500__$1 = state_22500;
var statearr_22503_22536 = state_22500__$1;
(statearr_22503_22536[(2)] = null);

(statearr_22503_22536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (4))){
var inst_22464 = (state_22500[(7)]);
var inst_22466 = (inst_22464 < cnt);
var state_22500__$1 = state_22500;
if(cljs.core.truth_(inst_22466)){
var statearr_22504_22537 = state_22500__$1;
(statearr_22504_22537[(1)] = (6));

} else {
var statearr_22505_22538 = state_22500__$1;
(statearr_22505_22538[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (15))){
var inst_22496 = (state_22500[(2)]);
var state_22500__$1 = state_22500;
var statearr_22506_22539 = state_22500__$1;
(statearr_22506_22539[(2)] = inst_22496);

(statearr_22506_22539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (13))){
var inst_22489 = cljs.core.async.close_BANG_.call(null,out);
var state_22500__$1 = state_22500;
var statearr_22507_22540 = state_22500__$1;
(statearr_22507_22540[(2)] = inst_22489);

(statearr_22507_22540[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (6))){
var state_22500__$1 = state_22500;
var statearr_22508_22541 = state_22500__$1;
(statearr_22508_22541[(2)] = null);

(statearr_22508_22541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (3))){
var inst_22498 = (state_22500[(2)]);
var state_22500__$1 = state_22500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22500__$1,inst_22498);
} else {
if((state_val_22501 === (12))){
var inst_22486 = (state_22500[(8)]);
var inst_22486__$1 = (state_22500[(2)]);
var inst_22487 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22486__$1);
var state_22500__$1 = (function (){var statearr_22509 = state_22500;
(statearr_22509[(8)] = inst_22486__$1);

return statearr_22509;
})();
if(cljs.core.truth_(inst_22487)){
var statearr_22510_22542 = state_22500__$1;
(statearr_22510_22542[(1)] = (13));

} else {
var statearr_22511_22543 = state_22500__$1;
(statearr_22511_22543[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (2))){
var inst_22463 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22464 = (0);
var state_22500__$1 = (function (){var statearr_22512 = state_22500;
(statearr_22512[(9)] = inst_22463);

(statearr_22512[(7)] = inst_22464);

return statearr_22512;
})();
var statearr_22513_22544 = state_22500__$1;
(statearr_22513_22544[(2)] = null);

(statearr_22513_22544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (11))){
var inst_22464 = (state_22500[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22500,(10),Object,null,(9));
var inst_22473 = chs__$1.call(null,inst_22464);
var inst_22474 = done.call(null,inst_22464);
var inst_22475 = cljs.core.async.take_BANG_.call(null,inst_22473,inst_22474);
var state_22500__$1 = state_22500;
var statearr_22514_22545 = state_22500__$1;
(statearr_22514_22545[(2)] = inst_22475);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22500__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (9))){
var inst_22464 = (state_22500[(7)]);
var inst_22477 = (state_22500[(2)]);
var inst_22478 = (inst_22464 + (1));
var inst_22464__$1 = inst_22478;
var state_22500__$1 = (function (){var statearr_22515 = state_22500;
(statearr_22515[(10)] = inst_22477);

(statearr_22515[(7)] = inst_22464__$1);

return statearr_22515;
})();
var statearr_22516_22546 = state_22500__$1;
(statearr_22516_22546[(2)] = null);

(statearr_22516_22546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (5))){
var inst_22484 = (state_22500[(2)]);
var state_22500__$1 = (function (){var statearr_22517 = state_22500;
(statearr_22517[(11)] = inst_22484);

return statearr_22517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22500__$1,(12),dchan);
} else {
if((state_val_22501 === (14))){
var inst_22486 = (state_22500[(8)]);
var inst_22491 = cljs.core.apply.call(null,f,inst_22486);
var state_22500__$1 = state_22500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22500__$1,(16),out,inst_22491);
} else {
if((state_val_22501 === (16))){
var inst_22493 = (state_22500[(2)]);
var state_22500__$1 = (function (){var statearr_22518 = state_22500;
(statearr_22518[(12)] = inst_22493);

return statearr_22518;
})();
var statearr_22519_22547 = state_22500__$1;
(statearr_22519_22547[(2)] = null);

(statearr_22519_22547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (10))){
var inst_22468 = (state_22500[(2)]);
var inst_22469 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22500__$1 = (function (){var statearr_22520 = state_22500;
(statearr_22520[(13)] = inst_22468);

return statearr_22520;
})();
var statearr_22521_22548 = state_22500__$1;
(statearr_22521_22548[(2)] = inst_22469);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22500__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22501 === (8))){
var inst_22482 = (state_22500[(2)]);
var state_22500__$1 = state_22500;
var statearr_22522_22549 = state_22500__$1;
(statearr_22522_22549[(2)] = inst_22482);

(statearr_22522_22549[(1)] = (5));


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
});})(c__20515__auto___22534,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20494__auto__,c__20515__auto___22534,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20495__auto__ = null;
var cljs$core$async$state_machine__20495__auto____0 = (function (){
var statearr_22526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22526[(0)] = cljs$core$async$state_machine__20495__auto__);

(statearr_22526[(1)] = (1));

return statearr_22526;
});
var cljs$core$async$state_machine__20495__auto____1 = (function (state_22500){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_22500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e22527){if((e22527 instanceof Object)){
var ex__20498__auto__ = e22527;
var statearr_22528_22550 = state_22500;
(statearr_22528_22550[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22551 = state_22500;
state_22500 = G__22551;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$state_machine__20495__auto__ = function(state_22500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20495__auto____1.call(this,state_22500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20495__auto____0;
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20495__auto____1;
return cljs$core$async$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___22534,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20517__auto__ = (function (){var statearr_22529 = f__20516__auto__.call(null);
(statearr_22529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___22534);

return statearr_22529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___22534,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22553 = [];
var len__19512__auto___22609 = arguments.length;
var i__19513__auto___22610 = (0);
while(true){
if((i__19513__auto___22610 < len__19512__auto___22609)){
args22553.push((arguments[i__19513__auto___22610]));

var G__22611 = (i__19513__auto___22610 + (1));
i__19513__auto___22610 = G__22611;
continue;
} else {
}
break;
}

var G__22555 = args22553.length;
switch (G__22555) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22553.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20515__auto___22613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___22613,out){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___22613,out){
return (function (state_22585){
var state_val_22586 = (state_22585[(1)]);
if((state_val_22586 === (7))){
var inst_22565 = (state_22585[(7)]);
var inst_22564 = (state_22585[(8)]);
var inst_22564__$1 = (state_22585[(2)]);
var inst_22565__$1 = cljs.core.nth.call(null,inst_22564__$1,(0),null);
var inst_22566 = cljs.core.nth.call(null,inst_22564__$1,(1),null);
var inst_22567 = (inst_22565__$1 == null);
var state_22585__$1 = (function (){var statearr_22587 = state_22585;
(statearr_22587[(7)] = inst_22565__$1);

(statearr_22587[(8)] = inst_22564__$1);

(statearr_22587[(9)] = inst_22566);

return statearr_22587;
})();
if(cljs.core.truth_(inst_22567)){
var statearr_22588_22614 = state_22585__$1;
(statearr_22588_22614[(1)] = (8));

} else {
var statearr_22589_22615 = state_22585__$1;
(statearr_22589_22615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (1))){
var inst_22556 = cljs.core.vec.call(null,chs);
var inst_22557 = inst_22556;
var state_22585__$1 = (function (){var statearr_22590 = state_22585;
(statearr_22590[(10)] = inst_22557);

return statearr_22590;
})();
var statearr_22591_22616 = state_22585__$1;
(statearr_22591_22616[(2)] = null);

(statearr_22591_22616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (4))){
var inst_22557 = (state_22585[(10)]);
var state_22585__$1 = state_22585;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22585__$1,(7),inst_22557);
} else {
if((state_val_22586 === (6))){
var inst_22581 = (state_22585[(2)]);
var state_22585__$1 = state_22585;
var statearr_22592_22617 = state_22585__$1;
(statearr_22592_22617[(2)] = inst_22581);

(statearr_22592_22617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (3))){
var inst_22583 = (state_22585[(2)]);
var state_22585__$1 = state_22585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22585__$1,inst_22583);
} else {
if((state_val_22586 === (2))){
var inst_22557 = (state_22585[(10)]);
var inst_22559 = cljs.core.count.call(null,inst_22557);
var inst_22560 = (inst_22559 > (0));
var state_22585__$1 = state_22585;
if(cljs.core.truth_(inst_22560)){
var statearr_22594_22618 = state_22585__$1;
(statearr_22594_22618[(1)] = (4));

} else {
var statearr_22595_22619 = state_22585__$1;
(statearr_22595_22619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (11))){
var inst_22557 = (state_22585[(10)]);
var inst_22574 = (state_22585[(2)]);
var tmp22593 = inst_22557;
var inst_22557__$1 = tmp22593;
var state_22585__$1 = (function (){var statearr_22596 = state_22585;
(statearr_22596[(11)] = inst_22574);

(statearr_22596[(10)] = inst_22557__$1);

return statearr_22596;
})();
var statearr_22597_22620 = state_22585__$1;
(statearr_22597_22620[(2)] = null);

(statearr_22597_22620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (9))){
var inst_22565 = (state_22585[(7)]);
var state_22585__$1 = state_22585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22585__$1,(11),out,inst_22565);
} else {
if((state_val_22586 === (5))){
var inst_22579 = cljs.core.async.close_BANG_.call(null,out);
var state_22585__$1 = state_22585;
var statearr_22598_22621 = state_22585__$1;
(statearr_22598_22621[(2)] = inst_22579);

(statearr_22598_22621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (10))){
var inst_22577 = (state_22585[(2)]);
var state_22585__$1 = state_22585;
var statearr_22599_22622 = state_22585__$1;
(statearr_22599_22622[(2)] = inst_22577);

(statearr_22599_22622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22586 === (8))){
var inst_22565 = (state_22585[(7)]);
var inst_22564 = (state_22585[(8)]);
var inst_22566 = (state_22585[(9)]);
var inst_22557 = (state_22585[(10)]);
var inst_22569 = (function (){var cs = inst_22557;
var vec__22562 = inst_22564;
var v = inst_22565;
var c = inst_22566;
return ((function (cs,vec__22562,v,c,inst_22565,inst_22564,inst_22566,inst_22557,state_val_22586,c__20515__auto___22613,out){
return (function (p1__22552_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22552_SHARP_);
});
;})(cs,vec__22562,v,c,inst_22565,inst_22564,inst_22566,inst_22557,state_val_22586,c__20515__auto___22613,out))
})();
var inst_22570 = cljs.core.filterv.call(null,inst_22569,inst_22557);
var inst_22557__$1 = inst_22570;
var state_22585__$1 = (function (){var statearr_22600 = state_22585;
(statearr_22600[(10)] = inst_22557__$1);

return statearr_22600;
})();
var statearr_22601_22623 = state_22585__$1;
(statearr_22601_22623[(2)] = null);

(statearr_22601_22623[(1)] = (2));


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
});})(c__20515__auto___22613,out))
;
return ((function (switch__20494__auto__,c__20515__auto___22613,out){
return (function() {
var cljs$core$async$state_machine__20495__auto__ = null;
var cljs$core$async$state_machine__20495__auto____0 = (function (){
var statearr_22605 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22605[(0)] = cljs$core$async$state_machine__20495__auto__);

(statearr_22605[(1)] = (1));

return statearr_22605;
});
var cljs$core$async$state_machine__20495__auto____1 = (function (state_22585){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_22585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e22606){if((e22606 instanceof Object)){
var ex__20498__auto__ = e22606;
var statearr_22607_22624 = state_22585;
(statearr_22607_22624[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22625 = state_22585;
state_22585 = G__22625;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$state_machine__20495__auto__ = function(state_22585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20495__auto____1.call(this,state_22585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20495__auto____0;
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20495__auto____1;
return cljs$core$async$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___22613,out))
})();
var state__20517__auto__ = (function (){var statearr_22608 = f__20516__auto__.call(null);
(statearr_22608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___22613);

return statearr_22608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___22613,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22626 = [];
var len__19512__auto___22675 = arguments.length;
var i__19513__auto___22676 = (0);
while(true){
if((i__19513__auto___22676 < len__19512__auto___22675)){
args22626.push((arguments[i__19513__auto___22676]));

var G__22677 = (i__19513__auto___22676 + (1));
i__19513__auto___22676 = G__22677;
continue;
} else {
}
break;
}

var G__22628 = args22626.length;
switch (G__22628) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22626.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20515__auto___22679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___22679,out){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___22679,out){
return (function (state_22652){
var state_val_22653 = (state_22652[(1)]);
if((state_val_22653 === (7))){
var inst_22634 = (state_22652[(7)]);
var inst_22634__$1 = (state_22652[(2)]);
var inst_22635 = (inst_22634__$1 == null);
var inst_22636 = cljs.core.not.call(null,inst_22635);
var state_22652__$1 = (function (){var statearr_22654 = state_22652;
(statearr_22654[(7)] = inst_22634__$1);

return statearr_22654;
})();
if(inst_22636){
var statearr_22655_22680 = state_22652__$1;
(statearr_22655_22680[(1)] = (8));

} else {
var statearr_22656_22681 = state_22652__$1;
(statearr_22656_22681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (1))){
var inst_22629 = (0);
var state_22652__$1 = (function (){var statearr_22657 = state_22652;
(statearr_22657[(8)] = inst_22629);

return statearr_22657;
})();
var statearr_22658_22682 = state_22652__$1;
(statearr_22658_22682[(2)] = null);

(statearr_22658_22682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (4))){
var state_22652__$1 = state_22652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22652__$1,(7),ch);
} else {
if((state_val_22653 === (6))){
var inst_22647 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
var statearr_22659_22683 = state_22652__$1;
(statearr_22659_22683[(2)] = inst_22647);

(statearr_22659_22683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (3))){
var inst_22649 = (state_22652[(2)]);
var inst_22650 = cljs.core.async.close_BANG_.call(null,out);
var state_22652__$1 = (function (){var statearr_22660 = state_22652;
(statearr_22660[(9)] = inst_22649);

return statearr_22660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22652__$1,inst_22650);
} else {
if((state_val_22653 === (2))){
var inst_22629 = (state_22652[(8)]);
var inst_22631 = (inst_22629 < n);
var state_22652__$1 = state_22652;
if(cljs.core.truth_(inst_22631)){
var statearr_22661_22684 = state_22652__$1;
(statearr_22661_22684[(1)] = (4));

} else {
var statearr_22662_22685 = state_22652__$1;
(statearr_22662_22685[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (11))){
var inst_22629 = (state_22652[(8)]);
var inst_22639 = (state_22652[(2)]);
var inst_22640 = (inst_22629 + (1));
var inst_22629__$1 = inst_22640;
var state_22652__$1 = (function (){var statearr_22663 = state_22652;
(statearr_22663[(8)] = inst_22629__$1);

(statearr_22663[(10)] = inst_22639);

return statearr_22663;
})();
var statearr_22664_22686 = state_22652__$1;
(statearr_22664_22686[(2)] = null);

(statearr_22664_22686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (9))){
var state_22652__$1 = state_22652;
var statearr_22665_22687 = state_22652__$1;
(statearr_22665_22687[(2)] = null);

(statearr_22665_22687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (5))){
var state_22652__$1 = state_22652;
var statearr_22666_22688 = state_22652__$1;
(statearr_22666_22688[(2)] = null);

(statearr_22666_22688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (10))){
var inst_22644 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
var statearr_22667_22689 = state_22652__$1;
(statearr_22667_22689[(2)] = inst_22644);

(statearr_22667_22689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (8))){
var inst_22634 = (state_22652[(7)]);
var state_22652__$1 = state_22652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22652__$1,(11),out,inst_22634);
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
});})(c__20515__auto___22679,out))
;
return ((function (switch__20494__auto__,c__20515__auto___22679,out){
return (function() {
var cljs$core$async$state_machine__20495__auto__ = null;
var cljs$core$async$state_machine__20495__auto____0 = (function (){
var statearr_22671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22671[(0)] = cljs$core$async$state_machine__20495__auto__);

(statearr_22671[(1)] = (1));

return statearr_22671;
});
var cljs$core$async$state_machine__20495__auto____1 = (function (state_22652){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_22652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e22672){if((e22672 instanceof Object)){
var ex__20498__auto__ = e22672;
var statearr_22673_22690 = state_22652;
(statearr_22673_22690[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22691 = state_22652;
state_22652 = G__22691;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$state_machine__20495__auto__ = function(state_22652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20495__auto____1.call(this,state_22652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20495__auto____0;
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20495__auto____1;
return cljs$core$async$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___22679,out))
})();
var state__20517__auto__ = (function (){var statearr_22674 = f__20516__auto__.call(null);
(statearr_22674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___22679);

return statearr_22674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___22679,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22699 = (function (map_LT_,f,ch,meta22700){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22700 = meta22700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22701,meta22700__$1){
var self__ = this;
var _22701__$1 = this;
return (new cljs.core.async.t_cljs$core$async22699(self__.map_LT_,self__.f,self__.ch,meta22700__$1));
});

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22701){
var self__ = this;
var _22701__$1 = this;
return self__.meta22700;
});

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22702 = (function (map_LT_,f,ch,meta22700,_,fn1,meta22703){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22700 = meta22700;
this._ = _;
this.fn1 = fn1;
this.meta22703 = meta22703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22704,meta22703__$1){
var self__ = this;
var _22704__$1 = this;
return (new cljs.core.async.t_cljs$core$async22702(self__.map_LT_,self__.f,self__.ch,self__.meta22700,self__._,self__.fn1,meta22703__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22704){
var self__ = this;
var _22704__$1 = this;
return self__.meta22703;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22692_SHARP_){
return f1.call(null,(((p1__22692_SHARP_ == null))?null:self__.f.call(null,p1__22692_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22702.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22700","meta22700",-557378869,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22699","cljs.core.async/t_cljs$core$async22699",1258569163,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22703","meta22703",652992542,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22702";

cljs.core.async.t_cljs$core$async22702.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async22702");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22702 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22702(map_LT___$1,f__$1,ch__$1,meta22700__$1,___$2,fn1__$1,meta22703){
return (new cljs.core.async.t_cljs$core$async22702(map_LT___$1,f__$1,ch__$1,meta22700__$1,___$2,fn1__$1,meta22703));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22702(self__.map_LT_,self__.f,self__.ch,self__.meta22700,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18430__auto__ = ret;
if(cljs.core.truth_(and__18430__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18430__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22700","meta22700",-557378869,null)], null);
});

cljs.core.async.t_cljs$core$async22699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22699";

cljs.core.async.t_cljs$core$async22699.cljs$lang$ctorPrWriter = (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async22699");
});

cljs.core.async.__GT_t_cljs$core$async22699 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22699(map_LT___$1,f__$1,ch__$1,meta22700){
return (new cljs.core.async.t_cljs$core$async22699(map_LT___$1,f__$1,ch__$1,meta22700));
});

}

return (new cljs.core.async.t_cljs$core$async22699(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22708 = (function (map_GT_,f,ch,meta22709){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22709 = meta22709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22710,meta22709__$1){
var self__ = this;
var _22710__$1 = this;
return (new cljs.core.async.t_cljs$core$async22708(self__.map_GT_,self__.f,self__.ch,meta22709__$1));
});

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22710){
var self__ = this;
var _22710__$1 = this;
return self__.meta22709;
});

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22709","meta22709",-341993698,null)], null);
});

cljs.core.async.t_cljs$core$async22708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22708";

cljs.core.async.t_cljs$core$async22708.cljs$lang$ctorPrWriter = (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async22708");
});

cljs.core.async.__GT_t_cljs$core$async22708 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22708(map_GT___$1,f__$1,ch__$1,meta22709){
return (new cljs.core.async.t_cljs$core$async22708(map_GT___$1,f__$1,ch__$1,meta22709));
});

}

return (new cljs.core.async.t_cljs$core$async22708(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22714 = (function (filter_GT_,p,ch,meta22715){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22715 = meta22715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22716,meta22715__$1){
var self__ = this;
var _22716__$1 = this;
return (new cljs.core.async.t_cljs$core$async22714(self__.filter_GT_,self__.p,self__.ch,meta22715__$1));
});

cljs.core.async.t_cljs$core$async22714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22716){
var self__ = this;
var _22716__$1 = this;
return self__.meta22715;
});

cljs.core.async.t_cljs$core$async22714.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22714.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22714.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22714.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22714.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22714.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22714.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22715","meta22715",1789488515,null)], null);
});

cljs.core.async.t_cljs$core$async22714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22714";

cljs.core.async.t_cljs$core$async22714.cljs$lang$ctorPrWriter = (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async22714");
});

cljs.core.async.__GT_t_cljs$core$async22714 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22714(filter_GT___$1,p__$1,ch__$1,meta22715){
return (new cljs.core.async.t_cljs$core$async22714(filter_GT___$1,p__$1,ch__$1,meta22715));
});

}

return (new cljs.core.async.t_cljs$core$async22714(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22717 = [];
var len__19512__auto___22761 = arguments.length;
var i__19513__auto___22762 = (0);
while(true){
if((i__19513__auto___22762 < len__19512__auto___22761)){
args22717.push((arguments[i__19513__auto___22762]));

var G__22763 = (i__19513__auto___22762 + (1));
i__19513__auto___22762 = G__22763;
continue;
} else {
}
break;
}

var G__22719 = args22717.length;
switch (G__22719) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22717.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20515__auto___22765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___22765,out){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___22765,out){
return (function (state_22740){
var state_val_22741 = (state_22740[(1)]);
if((state_val_22741 === (7))){
var inst_22736 = (state_22740[(2)]);
var state_22740__$1 = state_22740;
var statearr_22742_22766 = state_22740__$1;
(statearr_22742_22766[(2)] = inst_22736);

(statearr_22742_22766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (1))){
var state_22740__$1 = state_22740;
var statearr_22743_22767 = state_22740__$1;
(statearr_22743_22767[(2)] = null);

(statearr_22743_22767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (4))){
var inst_22722 = (state_22740[(7)]);
var inst_22722__$1 = (state_22740[(2)]);
var inst_22723 = (inst_22722__$1 == null);
var state_22740__$1 = (function (){var statearr_22744 = state_22740;
(statearr_22744[(7)] = inst_22722__$1);

return statearr_22744;
})();
if(cljs.core.truth_(inst_22723)){
var statearr_22745_22768 = state_22740__$1;
(statearr_22745_22768[(1)] = (5));

} else {
var statearr_22746_22769 = state_22740__$1;
(statearr_22746_22769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (6))){
var inst_22722 = (state_22740[(7)]);
var inst_22727 = p.call(null,inst_22722);
var state_22740__$1 = state_22740;
if(cljs.core.truth_(inst_22727)){
var statearr_22747_22770 = state_22740__$1;
(statearr_22747_22770[(1)] = (8));

} else {
var statearr_22748_22771 = state_22740__$1;
(statearr_22748_22771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (3))){
var inst_22738 = (state_22740[(2)]);
var state_22740__$1 = state_22740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22740__$1,inst_22738);
} else {
if((state_val_22741 === (2))){
var state_22740__$1 = state_22740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22740__$1,(4),ch);
} else {
if((state_val_22741 === (11))){
var inst_22730 = (state_22740[(2)]);
var state_22740__$1 = state_22740;
var statearr_22749_22772 = state_22740__$1;
(statearr_22749_22772[(2)] = inst_22730);

(statearr_22749_22772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (9))){
var state_22740__$1 = state_22740;
var statearr_22750_22773 = state_22740__$1;
(statearr_22750_22773[(2)] = null);

(statearr_22750_22773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (5))){
var inst_22725 = cljs.core.async.close_BANG_.call(null,out);
var state_22740__$1 = state_22740;
var statearr_22751_22774 = state_22740__$1;
(statearr_22751_22774[(2)] = inst_22725);

(statearr_22751_22774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (10))){
var inst_22733 = (state_22740[(2)]);
var state_22740__$1 = (function (){var statearr_22752 = state_22740;
(statearr_22752[(8)] = inst_22733);

return statearr_22752;
})();
var statearr_22753_22775 = state_22740__$1;
(statearr_22753_22775[(2)] = null);

(statearr_22753_22775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (8))){
var inst_22722 = (state_22740[(7)]);
var state_22740__$1 = state_22740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22740__$1,(11),out,inst_22722);
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
});})(c__20515__auto___22765,out))
;
return ((function (switch__20494__auto__,c__20515__auto___22765,out){
return (function() {
var cljs$core$async$state_machine__20495__auto__ = null;
var cljs$core$async$state_machine__20495__auto____0 = (function (){
var statearr_22757 = [null,null,null,null,null,null,null,null,null];
(statearr_22757[(0)] = cljs$core$async$state_machine__20495__auto__);

(statearr_22757[(1)] = (1));

return statearr_22757;
});
var cljs$core$async$state_machine__20495__auto____1 = (function (state_22740){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_22740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e22758){if((e22758 instanceof Object)){
var ex__20498__auto__ = e22758;
var statearr_22759_22776 = state_22740;
(statearr_22759_22776[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22777 = state_22740;
state_22740 = G__22777;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$state_machine__20495__auto__ = function(state_22740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20495__auto____1.call(this,state_22740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20495__auto____0;
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20495__auto____1;
return cljs$core$async$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___22765,out))
})();
var state__20517__auto__ = (function (){var statearr_22760 = f__20516__auto__.call(null);
(statearr_22760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___22765);

return statearr_22760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___22765,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22778 = [];
var len__19512__auto___22781 = arguments.length;
var i__19513__auto___22782 = (0);
while(true){
if((i__19513__auto___22782 < len__19512__auto___22781)){
args22778.push((arguments[i__19513__auto___22782]));

var G__22783 = (i__19513__auto___22782 + (1));
i__19513__auto___22782 = G__22783;
continue;
} else {
}
break;
}

var G__22780 = args22778.length;
switch (G__22780) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22778.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto__){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto__){
return (function (state_22950){
var state_val_22951 = (state_22950[(1)]);
if((state_val_22951 === (7))){
var inst_22946 = (state_22950[(2)]);
var state_22950__$1 = state_22950;
var statearr_22952_22993 = state_22950__$1;
(statearr_22952_22993[(2)] = inst_22946);

(statearr_22952_22993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (20))){
var inst_22916 = (state_22950[(7)]);
var inst_22927 = (state_22950[(2)]);
var inst_22928 = cljs.core.next.call(null,inst_22916);
var inst_22902 = inst_22928;
var inst_22903 = null;
var inst_22904 = (0);
var inst_22905 = (0);
var state_22950__$1 = (function (){var statearr_22953 = state_22950;
(statearr_22953[(8)] = inst_22903);

(statearr_22953[(9)] = inst_22905);

(statearr_22953[(10)] = inst_22902);

(statearr_22953[(11)] = inst_22927);

(statearr_22953[(12)] = inst_22904);

return statearr_22953;
})();
var statearr_22954_22994 = state_22950__$1;
(statearr_22954_22994[(2)] = null);

(statearr_22954_22994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (1))){
var state_22950__$1 = state_22950;
var statearr_22955_22995 = state_22950__$1;
(statearr_22955_22995[(2)] = null);

(statearr_22955_22995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (4))){
var inst_22891 = (state_22950[(13)]);
var inst_22891__$1 = (state_22950[(2)]);
var inst_22892 = (inst_22891__$1 == null);
var state_22950__$1 = (function (){var statearr_22956 = state_22950;
(statearr_22956[(13)] = inst_22891__$1);

return statearr_22956;
})();
if(cljs.core.truth_(inst_22892)){
var statearr_22957_22996 = state_22950__$1;
(statearr_22957_22996[(1)] = (5));

} else {
var statearr_22958_22997 = state_22950__$1;
(statearr_22958_22997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (15))){
var state_22950__$1 = state_22950;
var statearr_22962_22998 = state_22950__$1;
(statearr_22962_22998[(2)] = null);

(statearr_22962_22998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (21))){
var state_22950__$1 = state_22950;
var statearr_22963_22999 = state_22950__$1;
(statearr_22963_22999[(2)] = null);

(statearr_22963_22999[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (13))){
var inst_22903 = (state_22950[(8)]);
var inst_22905 = (state_22950[(9)]);
var inst_22902 = (state_22950[(10)]);
var inst_22904 = (state_22950[(12)]);
var inst_22912 = (state_22950[(2)]);
var inst_22913 = (inst_22905 + (1));
var tmp22959 = inst_22903;
var tmp22960 = inst_22902;
var tmp22961 = inst_22904;
var inst_22902__$1 = tmp22960;
var inst_22903__$1 = tmp22959;
var inst_22904__$1 = tmp22961;
var inst_22905__$1 = inst_22913;
var state_22950__$1 = (function (){var statearr_22964 = state_22950;
(statearr_22964[(8)] = inst_22903__$1);

(statearr_22964[(14)] = inst_22912);

(statearr_22964[(9)] = inst_22905__$1);

(statearr_22964[(10)] = inst_22902__$1);

(statearr_22964[(12)] = inst_22904__$1);

return statearr_22964;
})();
var statearr_22965_23000 = state_22950__$1;
(statearr_22965_23000[(2)] = null);

(statearr_22965_23000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (22))){
var state_22950__$1 = state_22950;
var statearr_22966_23001 = state_22950__$1;
(statearr_22966_23001[(2)] = null);

(statearr_22966_23001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (6))){
var inst_22891 = (state_22950[(13)]);
var inst_22900 = f.call(null,inst_22891);
var inst_22901 = cljs.core.seq.call(null,inst_22900);
var inst_22902 = inst_22901;
var inst_22903 = null;
var inst_22904 = (0);
var inst_22905 = (0);
var state_22950__$1 = (function (){var statearr_22967 = state_22950;
(statearr_22967[(8)] = inst_22903);

(statearr_22967[(9)] = inst_22905);

(statearr_22967[(10)] = inst_22902);

(statearr_22967[(12)] = inst_22904);

return statearr_22967;
})();
var statearr_22968_23002 = state_22950__$1;
(statearr_22968_23002[(2)] = null);

(statearr_22968_23002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (17))){
var inst_22916 = (state_22950[(7)]);
var inst_22920 = cljs.core.chunk_first.call(null,inst_22916);
var inst_22921 = cljs.core.chunk_rest.call(null,inst_22916);
var inst_22922 = cljs.core.count.call(null,inst_22920);
var inst_22902 = inst_22921;
var inst_22903 = inst_22920;
var inst_22904 = inst_22922;
var inst_22905 = (0);
var state_22950__$1 = (function (){var statearr_22969 = state_22950;
(statearr_22969[(8)] = inst_22903);

(statearr_22969[(9)] = inst_22905);

(statearr_22969[(10)] = inst_22902);

(statearr_22969[(12)] = inst_22904);

return statearr_22969;
})();
var statearr_22970_23003 = state_22950__$1;
(statearr_22970_23003[(2)] = null);

(statearr_22970_23003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (3))){
var inst_22948 = (state_22950[(2)]);
var state_22950__$1 = state_22950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22950__$1,inst_22948);
} else {
if((state_val_22951 === (12))){
var inst_22936 = (state_22950[(2)]);
var state_22950__$1 = state_22950;
var statearr_22971_23004 = state_22950__$1;
(statearr_22971_23004[(2)] = inst_22936);

(statearr_22971_23004[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (2))){
var state_22950__$1 = state_22950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22950__$1,(4),in$);
} else {
if((state_val_22951 === (23))){
var inst_22944 = (state_22950[(2)]);
var state_22950__$1 = state_22950;
var statearr_22972_23005 = state_22950__$1;
(statearr_22972_23005[(2)] = inst_22944);

(statearr_22972_23005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (19))){
var inst_22931 = (state_22950[(2)]);
var state_22950__$1 = state_22950;
var statearr_22973_23006 = state_22950__$1;
(statearr_22973_23006[(2)] = inst_22931);

(statearr_22973_23006[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (11))){
var inst_22902 = (state_22950[(10)]);
var inst_22916 = (state_22950[(7)]);
var inst_22916__$1 = cljs.core.seq.call(null,inst_22902);
var state_22950__$1 = (function (){var statearr_22974 = state_22950;
(statearr_22974[(7)] = inst_22916__$1);

return statearr_22974;
})();
if(inst_22916__$1){
var statearr_22975_23007 = state_22950__$1;
(statearr_22975_23007[(1)] = (14));

} else {
var statearr_22976_23008 = state_22950__$1;
(statearr_22976_23008[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (9))){
var inst_22938 = (state_22950[(2)]);
var inst_22939 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22950__$1 = (function (){var statearr_22977 = state_22950;
(statearr_22977[(15)] = inst_22938);

return statearr_22977;
})();
if(cljs.core.truth_(inst_22939)){
var statearr_22978_23009 = state_22950__$1;
(statearr_22978_23009[(1)] = (21));

} else {
var statearr_22979_23010 = state_22950__$1;
(statearr_22979_23010[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (5))){
var inst_22894 = cljs.core.async.close_BANG_.call(null,out);
var state_22950__$1 = state_22950;
var statearr_22980_23011 = state_22950__$1;
(statearr_22980_23011[(2)] = inst_22894);

(statearr_22980_23011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (14))){
var inst_22916 = (state_22950[(7)]);
var inst_22918 = cljs.core.chunked_seq_QMARK_.call(null,inst_22916);
var state_22950__$1 = state_22950;
if(inst_22918){
var statearr_22981_23012 = state_22950__$1;
(statearr_22981_23012[(1)] = (17));

} else {
var statearr_22982_23013 = state_22950__$1;
(statearr_22982_23013[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (16))){
var inst_22934 = (state_22950[(2)]);
var state_22950__$1 = state_22950;
var statearr_22983_23014 = state_22950__$1;
(statearr_22983_23014[(2)] = inst_22934);

(statearr_22983_23014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22951 === (10))){
var inst_22903 = (state_22950[(8)]);
var inst_22905 = (state_22950[(9)]);
var inst_22910 = cljs.core._nth.call(null,inst_22903,inst_22905);
var state_22950__$1 = state_22950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22950__$1,(13),out,inst_22910);
} else {
if((state_val_22951 === (18))){
var inst_22916 = (state_22950[(7)]);
var inst_22925 = cljs.core.first.call(null,inst_22916);
var state_22950__$1 = state_22950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22950__$1,(20),out,inst_22925);
} else {
if((state_val_22951 === (8))){
var inst_22905 = (state_22950[(9)]);
var inst_22904 = (state_22950[(12)]);
var inst_22907 = (inst_22905 < inst_22904);
var inst_22908 = inst_22907;
var state_22950__$1 = state_22950;
if(cljs.core.truth_(inst_22908)){
var statearr_22984_23015 = state_22950__$1;
(statearr_22984_23015[(1)] = (10));

} else {
var statearr_22985_23016 = state_22950__$1;
(statearr_22985_23016[(1)] = (11));

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
});})(c__20515__auto__))
;
return ((function (switch__20494__auto__,c__20515__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20495__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20495__auto____0 = (function (){
var statearr_22989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22989[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20495__auto__);

(statearr_22989[(1)] = (1));

return statearr_22989;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20495__auto____1 = (function (state_22950){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_22950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e22990){if((e22990 instanceof Object)){
var ex__20498__auto__ = e22990;
var statearr_22991_23017 = state_22950;
(statearr_22991_23017[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23018 = state_22950;
state_22950 = G__23018;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20495__auto__ = function(state_22950){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20495__auto____1.call(this,state_22950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20495__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20495__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto__))
})();
var state__20517__auto__ = (function (){var statearr_22992 = f__20516__auto__.call(null);
(statearr_22992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto__);

return statearr_22992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto__))
);

return c__20515__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23019 = [];
var len__19512__auto___23022 = arguments.length;
var i__19513__auto___23023 = (0);
while(true){
if((i__19513__auto___23023 < len__19512__auto___23022)){
args23019.push((arguments[i__19513__auto___23023]));

var G__23024 = (i__19513__auto___23023 + (1));
i__19513__auto___23023 = G__23024;
continue;
} else {
}
break;
}

var G__23021 = args23019.length;
switch (G__23021) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23019.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23026 = [];
var len__19512__auto___23029 = arguments.length;
var i__19513__auto___23030 = (0);
while(true){
if((i__19513__auto___23030 < len__19512__auto___23029)){
args23026.push((arguments[i__19513__auto___23030]));

var G__23031 = (i__19513__auto___23030 + (1));
i__19513__auto___23030 = G__23031;
continue;
} else {
}
break;
}

var G__23028 = args23026.length;
switch (G__23028) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23026.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23033 = [];
var len__19512__auto___23084 = arguments.length;
var i__19513__auto___23085 = (0);
while(true){
if((i__19513__auto___23085 < len__19512__auto___23084)){
args23033.push((arguments[i__19513__auto___23085]));

var G__23086 = (i__19513__auto___23085 + (1));
i__19513__auto___23085 = G__23086;
continue;
} else {
}
break;
}

var G__23035 = args23033.length;
switch (G__23035) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23033.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20515__auto___23088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___23088,out){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___23088,out){
return (function (state_23059){
var state_val_23060 = (state_23059[(1)]);
if((state_val_23060 === (7))){
var inst_23054 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23061_23089 = state_23059__$1;
(statearr_23061_23089[(2)] = inst_23054);

(statearr_23061_23089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (1))){
var inst_23036 = null;
var state_23059__$1 = (function (){var statearr_23062 = state_23059;
(statearr_23062[(7)] = inst_23036);

return statearr_23062;
})();
var statearr_23063_23090 = state_23059__$1;
(statearr_23063_23090[(2)] = null);

(statearr_23063_23090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (4))){
var inst_23039 = (state_23059[(8)]);
var inst_23039__$1 = (state_23059[(2)]);
var inst_23040 = (inst_23039__$1 == null);
var inst_23041 = cljs.core.not.call(null,inst_23040);
var state_23059__$1 = (function (){var statearr_23064 = state_23059;
(statearr_23064[(8)] = inst_23039__$1);

return statearr_23064;
})();
if(inst_23041){
var statearr_23065_23091 = state_23059__$1;
(statearr_23065_23091[(1)] = (5));

} else {
var statearr_23066_23092 = state_23059__$1;
(statearr_23066_23092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (6))){
var state_23059__$1 = state_23059;
var statearr_23067_23093 = state_23059__$1;
(statearr_23067_23093[(2)] = null);

(statearr_23067_23093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (3))){
var inst_23056 = (state_23059[(2)]);
var inst_23057 = cljs.core.async.close_BANG_.call(null,out);
var state_23059__$1 = (function (){var statearr_23068 = state_23059;
(statearr_23068[(9)] = inst_23056);

return statearr_23068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23059__$1,inst_23057);
} else {
if((state_val_23060 === (2))){
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23059__$1,(4),ch);
} else {
if((state_val_23060 === (11))){
var inst_23039 = (state_23059[(8)]);
var inst_23048 = (state_23059[(2)]);
var inst_23036 = inst_23039;
var state_23059__$1 = (function (){var statearr_23069 = state_23059;
(statearr_23069[(10)] = inst_23048);

(statearr_23069[(7)] = inst_23036);

return statearr_23069;
})();
var statearr_23070_23094 = state_23059__$1;
(statearr_23070_23094[(2)] = null);

(statearr_23070_23094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (9))){
var inst_23039 = (state_23059[(8)]);
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23059__$1,(11),out,inst_23039);
} else {
if((state_val_23060 === (5))){
var inst_23036 = (state_23059[(7)]);
var inst_23039 = (state_23059[(8)]);
var inst_23043 = cljs.core._EQ_.call(null,inst_23039,inst_23036);
var state_23059__$1 = state_23059;
if(inst_23043){
var statearr_23072_23095 = state_23059__$1;
(statearr_23072_23095[(1)] = (8));

} else {
var statearr_23073_23096 = state_23059__$1;
(statearr_23073_23096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (10))){
var inst_23051 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23074_23097 = state_23059__$1;
(statearr_23074_23097[(2)] = inst_23051);

(statearr_23074_23097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (8))){
var inst_23036 = (state_23059[(7)]);
var tmp23071 = inst_23036;
var inst_23036__$1 = tmp23071;
var state_23059__$1 = (function (){var statearr_23075 = state_23059;
(statearr_23075[(7)] = inst_23036__$1);

return statearr_23075;
})();
var statearr_23076_23098 = state_23059__$1;
(statearr_23076_23098[(2)] = null);

(statearr_23076_23098[(1)] = (2));


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
});})(c__20515__auto___23088,out))
;
return ((function (switch__20494__auto__,c__20515__auto___23088,out){
return (function() {
var cljs$core$async$state_machine__20495__auto__ = null;
var cljs$core$async$state_machine__20495__auto____0 = (function (){
var statearr_23080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23080[(0)] = cljs$core$async$state_machine__20495__auto__);

(statearr_23080[(1)] = (1));

return statearr_23080;
});
var cljs$core$async$state_machine__20495__auto____1 = (function (state_23059){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_23059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e23081){if((e23081 instanceof Object)){
var ex__20498__auto__ = e23081;
var statearr_23082_23099 = state_23059;
(statearr_23082_23099[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23100 = state_23059;
state_23059 = G__23100;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$state_machine__20495__auto__ = function(state_23059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20495__auto____1.call(this,state_23059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20495__auto____0;
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20495__auto____1;
return cljs$core$async$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___23088,out))
})();
var state__20517__auto__ = (function (){var statearr_23083 = f__20516__auto__.call(null);
(statearr_23083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___23088);

return statearr_23083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___23088,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23101 = [];
var len__19512__auto___23171 = arguments.length;
var i__19513__auto___23172 = (0);
while(true){
if((i__19513__auto___23172 < len__19512__auto___23171)){
args23101.push((arguments[i__19513__auto___23172]));

var G__23173 = (i__19513__auto___23172 + (1));
i__19513__auto___23172 = G__23173;
continue;
} else {
}
break;
}

var G__23103 = args23101.length;
switch (G__23103) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23101.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20515__auto___23175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___23175,out){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___23175,out){
return (function (state_23141){
var state_val_23142 = (state_23141[(1)]);
if((state_val_23142 === (7))){
var inst_23137 = (state_23141[(2)]);
var state_23141__$1 = state_23141;
var statearr_23143_23176 = state_23141__$1;
(statearr_23143_23176[(2)] = inst_23137);

(statearr_23143_23176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (1))){
var inst_23104 = (new Array(n));
var inst_23105 = inst_23104;
var inst_23106 = (0);
var state_23141__$1 = (function (){var statearr_23144 = state_23141;
(statearr_23144[(7)] = inst_23106);

(statearr_23144[(8)] = inst_23105);

return statearr_23144;
})();
var statearr_23145_23177 = state_23141__$1;
(statearr_23145_23177[(2)] = null);

(statearr_23145_23177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (4))){
var inst_23109 = (state_23141[(9)]);
var inst_23109__$1 = (state_23141[(2)]);
var inst_23110 = (inst_23109__$1 == null);
var inst_23111 = cljs.core.not.call(null,inst_23110);
var state_23141__$1 = (function (){var statearr_23146 = state_23141;
(statearr_23146[(9)] = inst_23109__$1);

return statearr_23146;
})();
if(inst_23111){
var statearr_23147_23178 = state_23141__$1;
(statearr_23147_23178[(1)] = (5));

} else {
var statearr_23148_23179 = state_23141__$1;
(statearr_23148_23179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (15))){
var inst_23131 = (state_23141[(2)]);
var state_23141__$1 = state_23141;
var statearr_23149_23180 = state_23141__$1;
(statearr_23149_23180[(2)] = inst_23131);

(statearr_23149_23180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (13))){
var state_23141__$1 = state_23141;
var statearr_23150_23181 = state_23141__$1;
(statearr_23150_23181[(2)] = null);

(statearr_23150_23181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (6))){
var inst_23106 = (state_23141[(7)]);
var inst_23127 = (inst_23106 > (0));
var state_23141__$1 = state_23141;
if(cljs.core.truth_(inst_23127)){
var statearr_23151_23182 = state_23141__$1;
(statearr_23151_23182[(1)] = (12));

} else {
var statearr_23152_23183 = state_23141__$1;
(statearr_23152_23183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (3))){
var inst_23139 = (state_23141[(2)]);
var state_23141__$1 = state_23141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23141__$1,inst_23139);
} else {
if((state_val_23142 === (12))){
var inst_23105 = (state_23141[(8)]);
var inst_23129 = cljs.core.vec.call(null,inst_23105);
var state_23141__$1 = state_23141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23141__$1,(15),out,inst_23129);
} else {
if((state_val_23142 === (2))){
var state_23141__$1 = state_23141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23141__$1,(4),ch);
} else {
if((state_val_23142 === (11))){
var inst_23121 = (state_23141[(2)]);
var inst_23122 = (new Array(n));
var inst_23105 = inst_23122;
var inst_23106 = (0);
var state_23141__$1 = (function (){var statearr_23153 = state_23141;
(statearr_23153[(7)] = inst_23106);

(statearr_23153[(10)] = inst_23121);

(statearr_23153[(8)] = inst_23105);

return statearr_23153;
})();
var statearr_23154_23184 = state_23141__$1;
(statearr_23154_23184[(2)] = null);

(statearr_23154_23184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (9))){
var inst_23105 = (state_23141[(8)]);
var inst_23119 = cljs.core.vec.call(null,inst_23105);
var state_23141__$1 = state_23141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23141__$1,(11),out,inst_23119);
} else {
if((state_val_23142 === (5))){
var inst_23106 = (state_23141[(7)]);
var inst_23109 = (state_23141[(9)]);
var inst_23114 = (state_23141[(11)]);
var inst_23105 = (state_23141[(8)]);
var inst_23113 = (inst_23105[inst_23106] = inst_23109);
var inst_23114__$1 = (inst_23106 + (1));
var inst_23115 = (inst_23114__$1 < n);
var state_23141__$1 = (function (){var statearr_23155 = state_23141;
(statearr_23155[(12)] = inst_23113);

(statearr_23155[(11)] = inst_23114__$1);

return statearr_23155;
})();
if(cljs.core.truth_(inst_23115)){
var statearr_23156_23185 = state_23141__$1;
(statearr_23156_23185[(1)] = (8));

} else {
var statearr_23157_23186 = state_23141__$1;
(statearr_23157_23186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (14))){
var inst_23134 = (state_23141[(2)]);
var inst_23135 = cljs.core.async.close_BANG_.call(null,out);
var state_23141__$1 = (function (){var statearr_23159 = state_23141;
(statearr_23159[(13)] = inst_23134);

return statearr_23159;
})();
var statearr_23160_23187 = state_23141__$1;
(statearr_23160_23187[(2)] = inst_23135);

(statearr_23160_23187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (10))){
var inst_23125 = (state_23141[(2)]);
var state_23141__$1 = state_23141;
var statearr_23161_23188 = state_23141__$1;
(statearr_23161_23188[(2)] = inst_23125);

(statearr_23161_23188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23142 === (8))){
var inst_23114 = (state_23141[(11)]);
var inst_23105 = (state_23141[(8)]);
var tmp23158 = inst_23105;
var inst_23105__$1 = tmp23158;
var inst_23106 = inst_23114;
var state_23141__$1 = (function (){var statearr_23162 = state_23141;
(statearr_23162[(7)] = inst_23106);

(statearr_23162[(8)] = inst_23105__$1);

return statearr_23162;
})();
var statearr_23163_23189 = state_23141__$1;
(statearr_23163_23189[(2)] = null);

(statearr_23163_23189[(1)] = (2));


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
});})(c__20515__auto___23175,out))
;
return ((function (switch__20494__auto__,c__20515__auto___23175,out){
return (function() {
var cljs$core$async$state_machine__20495__auto__ = null;
var cljs$core$async$state_machine__20495__auto____0 = (function (){
var statearr_23167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23167[(0)] = cljs$core$async$state_machine__20495__auto__);

(statearr_23167[(1)] = (1));

return statearr_23167;
});
var cljs$core$async$state_machine__20495__auto____1 = (function (state_23141){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_23141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e23168){if((e23168 instanceof Object)){
var ex__20498__auto__ = e23168;
var statearr_23169_23190 = state_23141;
(statearr_23169_23190[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23191 = state_23141;
state_23141 = G__23191;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$state_machine__20495__auto__ = function(state_23141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20495__auto____1.call(this,state_23141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20495__auto____0;
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20495__auto____1;
return cljs$core$async$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___23175,out))
})();
var state__20517__auto__ = (function (){var statearr_23170 = f__20516__auto__.call(null);
(statearr_23170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___23175);

return statearr_23170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___23175,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23192 = [];
var len__19512__auto___23266 = arguments.length;
var i__19513__auto___23267 = (0);
while(true){
if((i__19513__auto___23267 < len__19512__auto___23266)){
args23192.push((arguments[i__19513__auto___23267]));

var G__23268 = (i__19513__auto___23267 + (1));
i__19513__auto___23267 = G__23268;
continue;
} else {
}
break;
}

var G__23194 = args23192.length;
switch (G__23194) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23192.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20515__auto___23270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20515__auto___23270,out){
return (function (){
var f__20516__auto__ = (function (){var switch__20494__auto__ = ((function (c__20515__auto___23270,out){
return (function (state_23236){
var state_val_23237 = (state_23236[(1)]);
if((state_val_23237 === (7))){
var inst_23232 = (state_23236[(2)]);
var state_23236__$1 = state_23236;
var statearr_23238_23271 = state_23236__$1;
(statearr_23238_23271[(2)] = inst_23232);

(statearr_23238_23271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (1))){
var inst_23195 = [];
var inst_23196 = inst_23195;
var inst_23197 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23236__$1 = (function (){var statearr_23239 = state_23236;
(statearr_23239[(7)] = inst_23197);

(statearr_23239[(8)] = inst_23196);

return statearr_23239;
})();
var statearr_23240_23272 = state_23236__$1;
(statearr_23240_23272[(2)] = null);

(statearr_23240_23272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (4))){
var inst_23200 = (state_23236[(9)]);
var inst_23200__$1 = (state_23236[(2)]);
var inst_23201 = (inst_23200__$1 == null);
var inst_23202 = cljs.core.not.call(null,inst_23201);
var state_23236__$1 = (function (){var statearr_23241 = state_23236;
(statearr_23241[(9)] = inst_23200__$1);

return statearr_23241;
})();
if(inst_23202){
var statearr_23242_23273 = state_23236__$1;
(statearr_23242_23273[(1)] = (5));

} else {
var statearr_23243_23274 = state_23236__$1;
(statearr_23243_23274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (15))){
var inst_23226 = (state_23236[(2)]);
var state_23236__$1 = state_23236;
var statearr_23244_23275 = state_23236__$1;
(statearr_23244_23275[(2)] = inst_23226);

(statearr_23244_23275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (13))){
var state_23236__$1 = state_23236;
var statearr_23245_23276 = state_23236__$1;
(statearr_23245_23276[(2)] = null);

(statearr_23245_23276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (6))){
var inst_23196 = (state_23236[(8)]);
var inst_23221 = inst_23196.length;
var inst_23222 = (inst_23221 > (0));
var state_23236__$1 = state_23236;
if(cljs.core.truth_(inst_23222)){
var statearr_23246_23277 = state_23236__$1;
(statearr_23246_23277[(1)] = (12));

} else {
var statearr_23247_23278 = state_23236__$1;
(statearr_23247_23278[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (3))){
var inst_23234 = (state_23236[(2)]);
var state_23236__$1 = state_23236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23236__$1,inst_23234);
} else {
if((state_val_23237 === (12))){
var inst_23196 = (state_23236[(8)]);
var inst_23224 = cljs.core.vec.call(null,inst_23196);
var state_23236__$1 = state_23236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23236__$1,(15),out,inst_23224);
} else {
if((state_val_23237 === (2))){
var state_23236__$1 = state_23236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23236__$1,(4),ch);
} else {
if((state_val_23237 === (11))){
var inst_23200 = (state_23236[(9)]);
var inst_23204 = (state_23236[(10)]);
var inst_23214 = (state_23236[(2)]);
var inst_23215 = [];
var inst_23216 = inst_23215.push(inst_23200);
var inst_23196 = inst_23215;
var inst_23197 = inst_23204;
var state_23236__$1 = (function (){var statearr_23248 = state_23236;
(statearr_23248[(11)] = inst_23216);

(statearr_23248[(7)] = inst_23197);

(statearr_23248[(8)] = inst_23196);

(statearr_23248[(12)] = inst_23214);

return statearr_23248;
})();
var statearr_23249_23279 = state_23236__$1;
(statearr_23249_23279[(2)] = null);

(statearr_23249_23279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (9))){
var inst_23196 = (state_23236[(8)]);
var inst_23212 = cljs.core.vec.call(null,inst_23196);
var state_23236__$1 = state_23236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23236__$1,(11),out,inst_23212);
} else {
if((state_val_23237 === (5))){
var inst_23200 = (state_23236[(9)]);
var inst_23197 = (state_23236[(7)]);
var inst_23204 = (state_23236[(10)]);
var inst_23204__$1 = f.call(null,inst_23200);
var inst_23205 = cljs.core._EQ_.call(null,inst_23204__$1,inst_23197);
var inst_23206 = cljs.core.keyword_identical_QMARK_.call(null,inst_23197,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23207 = (inst_23205) || (inst_23206);
var state_23236__$1 = (function (){var statearr_23250 = state_23236;
(statearr_23250[(10)] = inst_23204__$1);

return statearr_23250;
})();
if(cljs.core.truth_(inst_23207)){
var statearr_23251_23280 = state_23236__$1;
(statearr_23251_23280[(1)] = (8));

} else {
var statearr_23252_23281 = state_23236__$1;
(statearr_23252_23281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (14))){
var inst_23229 = (state_23236[(2)]);
var inst_23230 = cljs.core.async.close_BANG_.call(null,out);
var state_23236__$1 = (function (){var statearr_23254 = state_23236;
(statearr_23254[(13)] = inst_23229);

return statearr_23254;
})();
var statearr_23255_23282 = state_23236__$1;
(statearr_23255_23282[(2)] = inst_23230);

(statearr_23255_23282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (10))){
var inst_23219 = (state_23236[(2)]);
var state_23236__$1 = state_23236;
var statearr_23256_23283 = state_23236__$1;
(statearr_23256_23283[(2)] = inst_23219);

(statearr_23256_23283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (8))){
var inst_23200 = (state_23236[(9)]);
var inst_23196 = (state_23236[(8)]);
var inst_23204 = (state_23236[(10)]);
var inst_23209 = inst_23196.push(inst_23200);
var tmp23253 = inst_23196;
var inst_23196__$1 = tmp23253;
var inst_23197 = inst_23204;
var state_23236__$1 = (function (){var statearr_23257 = state_23236;
(statearr_23257[(7)] = inst_23197);

(statearr_23257[(8)] = inst_23196__$1);

(statearr_23257[(14)] = inst_23209);

return statearr_23257;
})();
var statearr_23258_23284 = state_23236__$1;
(statearr_23258_23284[(2)] = null);

(statearr_23258_23284[(1)] = (2));


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
});})(c__20515__auto___23270,out))
;
return ((function (switch__20494__auto__,c__20515__auto___23270,out){
return (function() {
var cljs$core$async$state_machine__20495__auto__ = null;
var cljs$core$async$state_machine__20495__auto____0 = (function (){
var statearr_23262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23262[(0)] = cljs$core$async$state_machine__20495__auto__);

(statearr_23262[(1)] = (1));

return statearr_23262;
});
var cljs$core$async$state_machine__20495__auto____1 = (function (state_23236){
while(true){
var ret_value__20496__auto__ = (function (){try{while(true){
var result__20497__auto__ = switch__20494__auto__.call(null,state_23236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20497__auto__;
}
break;
}
}catch (e23263){if((e23263 instanceof Object)){
var ex__20498__auto__ = e23263;
var statearr_23264_23285 = state_23236;
(statearr_23264_23285[(5)] = ex__20498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23286 = state_23236;
state_23236 = G__23286;
continue;
} else {
return ret_value__20496__auto__;
}
break;
}
});
cljs$core$async$state_machine__20495__auto__ = function(state_23236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20495__auto____1.call(this,state_23236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20495__auto____0;
cljs$core$async$state_machine__20495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20495__auto____1;
return cljs$core$async$state_machine__20495__auto__;
})()
;})(switch__20494__auto__,c__20515__auto___23270,out))
})();
var state__20517__auto__ = (function (){var statearr_23265 = f__20516__auto__.call(null);
(statearr_23265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20515__auto___23270);

return statearr_23265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20517__auto__);
});})(c__20515__auto___23270,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1465245605270