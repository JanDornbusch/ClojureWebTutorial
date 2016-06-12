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
var args36344 = [];
var len__19809__auto___36350 = arguments.length;
var i__19810__auto___36351 = (0);
while(true){
if((i__19810__auto___36351 < len__19809__auto___36350)){
args36344.push((arguments[i__19810__auto___36351]));

var G__36352 = (i__19810__auto___36351 + (1));
i__19810__auto___36351 = G__36352;
continue;
} else {
}
break;
}

var G__36346 = args36344.length;
switch (G__36346) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36344.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36347 = (function (f,blockable,meta36348){
this.f = f;
this.blockable = blockable;
this.meta36348 = meta36348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36349,meta36348__$1){
var self__ = this;
var _36349__$1 = this;
return (new cljs.core.async.t_cljs$core$async36347(self__.f,self__.blockable,meta36348__$1));
});

cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36349){
var self__ = this;
var _36349__$1 = this;
return self__.meta36348;
});

cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36348","meta36348",1966817187,null)], null);
});

cljs.core.async.t_cljs$core$async36347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36347";

cljs.core.async.t_cljs$core$async36347.cljs$lang$ctorPrWriter = (function (this__19345__auto__,writer__19346__auto__,opt__19347__auto__){
return cljs.core._write.call(null,writer__19346__auto__,"cljs.core.async/t_cljs$core$async36347");
});

cljs.core.async.__GT_t_cljs$core$async36347 = (function cljs$core$async$__GT_t_cljs$core$async36347(f__$1,blockable__$1,meta36348){
return (new cljs.core.async.t_cljs$core$async36347(f__$1,blockable__$1,meta36348));
});

}

return (new cljs.core.async.t_cljs$core$async36347(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args36356 = [];
var len__19809__auto___36359 = arguments.length;
var i__19810__auto___36360 = (0);
while(true){
if((i__19810__auto___36360 < len__19809__auto___36359)){
args36356.push((arguments[i__19810__auto___36360]));

var G__36361 = (i__19810__auto___36360 + (1));
i__19810__auto___36360 = G__36361;
continue;
} else {
}
break;
}

var G__36358 = args36356.length;
switch (G__36358) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36356.length)].join('')));

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
var args36363 = [];
var len__19809__auto___36366 = arguments.length;
var i__19810__auto___36367 = (0);
while(true){
if((i__19810__auto___36367 < len__19809__auto___36366)){
args36363.push((arguments[i__19810__auto___36367]));

var G__36368 = (i__19810__auto___36367 + (1));
i__19810__auto___36367 = G__36368;
continue;
} else {
}
break;
}

var G__36365 = args36363.length;
switch (G__36365) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36363.length)].join('')));

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
var args36370 = [];
var len__19809__auto___36373 = arguments.length;
var i__19810__auto___36374 = (0);
while(true){
if((i__19810__auto___36374 < len__19809__auto___36373)){
args36370.push((arguments[i__19810__auto___36374]));

var G__36375 = (i__19810__auto___36374 + (1));
i__19810__auto___36374 = G__36375;
continue;
} else {
}
break;
}

var G__36372 = args36370.length;
switch (G__36372) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36370.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36377 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36377);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36377,ret){
return (function (){
return fn1.call(null,val_36377);
});})(val_36377,ret))
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
var args36378 = [];
var len__19809__auto___36381 = arguments.length;
var i__19810__auto___36382 = (0);
while(true){
if((i__19810__auto___36382 < len__19809__auto___36381)){
args36378.push((arguments[i__19810__auto___36382]));

var G__36383 = (i__19810__auto___36382 + (1));
i__19810__auto___36382 = G__36383;
continue;
} else {
}
break;
}

var G__36380 = args36378.length;
switch (G__36380) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36378.length)].join('')));

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
var n__19654__auto___36385 = n;
var x_36386 = (0);
while(true){
if((x_36386 < n__19654__auto___36385)){
(a[x_36386] = (0));

var G__36387 = (x_36386 + (1));
x_36386 = G__36387;
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

var G__36388 = (i + (1));
i = G__36388;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36392 = (function (alt_flag,flag,meta36393){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36393 = meta36393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36394,meta36393__$1){
var self__ = this;
var _36394__$1 = this;
return (new cljs.core.async.t_cljs$core$async36392(self__.alt_flag,self__.flag,meta36393__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36394){
var self__ = this;
var _36394__$1 = this;
return self__.meta36393;
});})(flag))
;

cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36392.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36393","meta36393",-932396707,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36392";

cljs.core.async.t_cljs$core$async36392.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19345__auto__,writer__19346__auto__,opt__19347__auto__){
return cljs.core._write.call(null,writer__19346__auto__,"cljs.core.async/t_cljs$core$async36392");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36392 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36392(alt_flag__$1,flag__$1,meta36393){
return (new cljs.core.async.t_cljs$core$async36392(alt_flag__$1,flag__$1,meta36393));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36392(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36398 = (function (alt_handler,flag,cb,meta36399){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36399 = meta36399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36400,meta36399__$1){
var self__ = this;
var _36400__$1 = this;
return (new cljs.core.async.t_cljs$core$async36398(self__.alt_handler,self__.flag,self__.cb,meta36399__$1));
});

cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36400){
var self__ = this;
var _36400__$1 = this;
return self__.meta36399;
});

cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36399","meta36399",-1020333910,null)], null);
});

cljs.core.async.t_cljs$core$async36398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36398";

cljs.core.async.t_cljs$core$async36398.cljs$lang$ctorPrWriter = (function (this__19345__auto__,writer__19346__auto__,opt__19347__auto__){
return cljs.core._write.call(null,writer__19346__auto__,"cljs.core.async/t_cljs$core$async36398");
});

cljs.core.async.__GT_t_cljs$core$async36398 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36398(alt_handler__$1,flag__$1,cb__$1,meta36399){
return (new cljs.core.async.t_cljs$core$async36398(alt_handler__$1,flag__$1,cb__$1,meta36399));
});

}

return (new cljs.core.async.t_cljs$core$async36398(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36401_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36401_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36402_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36402_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18739__auto__ = wport;
if(cljs.core.truth_(or__18739__auto__)){
return or__18739__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36403 = (i + (1));
i = G__36403;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18739__auto__ = ret;
if(cljs.core.truth_(or__18739__auto__)){
return or__18739__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18727__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18727__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18727__auto__;
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
var args__19816__auto__ = [];
var len__19809__auto___36409 = arguments.length;
var i__19810__auto___36410 = (0);
while(true){
if((i__19810__auto___36410 < len__19809__auto___36409)){
args__19816__auto__.push((arguments[i__19810__auto___36410]));

var G__36411 = (i__19810__auto___36410 + (1));
i__19810__auto___36410 = G__36411;
continue;
} else {
}
break;
}

var argseq__19817__auto__ = ((((1) < args__19816__auto__.length))?(new cljs.core.IndexedSeq(args__19816__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36406){
var map__36407 = p__36406;
var map__36407__$1 = ((((!((map__36407 == null)))?((((map__36407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36407):map__36407);
var opts = map__36407__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36404){
var G__36405 = cljs.core.first.call(null,seq36404);
var seq36404__$1 = cljs.core.next.call(null,seq36404);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36405,seq36404__$1);
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
var args36412 = [];
var len__19809__auto___36462 = arguments.length;
var i__19810__auto___36463 = (0);
while(true){
if((i__19810__auto___36463 < len__19809__auto___36462)){
args36412.push((arguments[i__19810__auto___36463]));

var G__36464 = (i__19810__auto___36463 + (1));
i__19810__auto___36463 = G__36464;
continue;
} else {
}
break;
}

var G__36414 = args36412.length;
switch (G__36414) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36412.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20906__auto___36466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___36466){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___36466){
return (function (state_36438){
var state_val_36439 = (state_36438[(1)]);
if((state_val_36439 === (7))){
var inst_36434 = (state_36438[(2)]);
var state_36438__$1 = state_36438;
var statearr_36440_36467 = state_36438__$1;
(statearr_36440_36467[(2)] = inst_36434);

(statearr_36440_36467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36439 === (1))){
var state_36438__$1 = state_36438;
var statearr_36441_36468 = state_36438__$1;
(statearr_36441_36468[(2)] = null);

(statearr_36441_36468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36439 === (4))){
var inst_36417 = (state_36438[(7)]);
var inst_36417__$1 = (state_36438[(2)]);
var inst_36418 = (inst_36417__$1 == null);
var state_36438__$1 = (function (){var statearr_36442 = state_36438;
(statearr_36442[(7)] = inst_36417__$1);

return statearr_36442;
})();
if(cljs.core.truth_(inst_36418)){
var statearr_36443_36469 = state_36438__$1;
(statearr_36443_36469[(1)] = (5));

} else {
var statearr_36444_36470 = state_36438__$1;
(statearr_36444_36470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36439 === (13))){
var state_36438__$1 = state_36438;
var statearr_36445_36471 = state_36438__$1;
(statearr_36445_36471[(2)] = null);

(statearr_36445_36471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36439 === (6))){
var inst_36417 = (state_36438[(7)]);
var state_36438__$1 = state_36438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36438__$1,(11),to,inst_36417);
} else {
if((state_val_36439 === (3))){
var inst_36436 = (state_36438[(2)]);
var state_36438__$1 = state_36438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36438__$1,inst_36436);
} else {
if((state_val_36439 === (12))){
var state_36438__$1 = state_36438;
var statearr_36446_36472 = state_36438__$1;
(statearr_36446_36472[(2)] = null);

(statearr_36446_36472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36439 === (2))){
var state_36438__$1 = state_36438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36438__$1,(4),from);
} else {
if((state_val_36439 === (11))){
var inst_36427 = (state_36438[(2)]);
var state_36438__$1 = state_36438;
if(cljs.core.truth_(inst_36427)){
var statearr_36447_36473 = state_36438__$1;
(statearr_36447_36473[(1)] = (12));

} else {
var statearr_36448_36474 = state_36438__$1;
(statearr_36448_36474[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36439 === (9))){
var state_36438__$1 = state_36438;
var statearr_36449_36475 = state_36438__$1;
(statearr_36449_36475[(2)] = null);

(statearr_36449_36475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36439 === (5))){
var state_36438__$1 = state_36438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36450_36476 = state_36438__$1;
(statearr_36450_36476[(1)] = (8));

} else {
var statearr_36451_36477 = state_36438__$1;
(statearr_36451_36477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36439 === (14))){
var inst_36432 = (state_36438[(2)]);
var state_36438__$1 = state_36438;
var statearr_36452_36478 = state_36438__$1;
(statearr_36452_36478[(2)] = inst_36432);

(statearr_36452_36478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36439 === (10))){
var inst_36424 = (state_36438[(2)]);
var state_36438__$1 = state_36438;
var statearr_36453_36479 = state_36438__$1;
(statearr_36453_36479[(2)] = inst_36424);

(statearr_36453_36479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36439 === (8))){
var inst_36421 = cljs.core.async.close_BANG_.call(null,to);
var state_36438__$1 = state_36438;
var statearr_36454_36480 = state_36438__$1;
(statearr_36454_36480[(2)] = inst_36421);

(statearr_36454_36480[(1)] = (10));


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
});})(c__20906__auto___36466))
;
return ((function (switch__20794__auto__,c__20906__auto___36466){
return (function() {
var cljs$core$async$state_machine__20795__auto__ = null;
var cljs$core$async$state_machine__20795__auto____0 = (function (){
var statearr_36458 = [null,null,null,null,null,null,null,null];
(statearr_36458[(0)] = cljs$core$async$state_machine__20795__auto__);

(statearr_36458[(1)] = (1));

return statearr_36458;
});
var cljs$core$async$state_machine__20795__auto____1 = (function (state_36438){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_36438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e36459){if((e36459 instanceof Object)){
var ex__20798__auto__ = e36459;
var statearr_36460_36481 = state_36438;
(statearr_36460_36481[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36482 = state_36438;
state_36438 = G__36482;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$state_machine__20795__auto__ = function(state_36438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20795__auto____1.call(this,state_36438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20795__auto____0;
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20795__auto____1;
return cljs$core$async$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___36466))
})();
var state__20908__auto__ = (function (){var statearr_36461 = f__20907__auto__.call(null);
(statearr_36461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___36466);

return statearr_36461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___36466))
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
return (function (p__36666){
var vec__36667 = p__36666;
var v = cljs.core.nth.call(null,vec__36667,(0),null);
var p = cljs.core.nth.call(null,vec__36667,(1),null);
var job = vec__36667;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20906__auto___36849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___36849,res,vec__36667,v,p,job,jobs,results){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___36849,res,vec__36667,v,p,job,jobs,results){
return (function (state_36672){
var state_val_36673 = (state_36672[(1)]);
if((state_val_36673 === (1))){
var state_36672__$1 = state_36672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36672__$1,(2),res,v);
} else {
if((state_val_36673 === (2))){
var inst_36669 = (state_36672[(2)]);
var inst_36670 = cljs.core.async.close_BANG_.call(null,res);
var state_36672__$1 = (function (){var statearr_36674 = state_36672;
(statearr_36674[(7)] = inst_36669);

return statearr_36674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36672__$1,inst_36670);
} else {
return null;
}
}
});})(c__20906__auto___36849,res,vec__36667,v,p,job,jobs,results))
;
return ((function (switch__20794__auto__,c__20906__auto___36849,res,vec__36667,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0 = (function (){
var statearr_36678 = [null,null,null,null,null,null,null,null];
(statearr_36678[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__);

(statearr_36678[(1)] = (1));

return statearr_36678;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1 = (function (state_36672){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_36672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e36679){if((e36679 instanceof Object)){
var ex__20798__auto__ = e36679;
var statearr_36680_36850 = state_36672;
(statearr_36680_36850[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36851 = state_36672;
state_36672 = G__36851;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__ = function(state_36672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1.call(this,state_36672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___36849,res,vec__36667,v,p,job,jobs,results))
})();
var state__20908__auto__ = (function (){var statearr_36681 = f__20907__auto__.call(null);
(statearr_36681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___36849);

return statearr_36681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___36849,res,vec__36667,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36682){
var vec__36683 = p__36682;
var v = cljs.core.nth.call(null,vec__36683,(0),null);
var p = cljs.core.nth.call(null,vec__36683,(1),null);
var job = vec__36683;
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
var n__19654__auto___36852 = n;
var __36853 = (0);
while(true){
if((__36853 < n__19654__auto___36852)){
var G__36684_36854 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36684_36854) {
case "compute":
var c__20906__auto___36856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36853,c__20906__auto___36856,G__36684_36854,n__19654__auto___36852,jobs,results,process,async){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (__36853,c__20906__auto___36856,G__36684_36854,n__19654__auto___36852,jobs,results,process,async){
return (function (state_36697){
var state_val_36698 = (state_36697[(1)]);
if((state_val_36698 === (1))){
var state_36697__$1 = state_36697;
var statearr_36699_36857 = state_36697__$1;
(statearr_36699_36857[(2)] = null);

(statearr_36699_36857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (2))){
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36697__$1,(4),jobs);
} else {
if((state_val_36698 === (3))){
var inst_36695 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36697__$1,inst_36695);
} else {
if((state_val_36698 === (4))){
var inst_36687 = (state_36697[(2)]);
var inst_36688 = process.call(null,inst_36687);
var state_36697__$1 = state_36697;
if(cljs.core.truth_(inst_36688)){
var statearr_36700_36858 = state_36697__$1;
(statearr_36700_36858[(1)] = (5));

} else {
var statearr_36701_36859 = state_36697__$1;
(statearr_36701_36859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (5))){
var state_36697__$1 = state_36697;
var statearr_36702_36860 = state_36697__$1;
(statearr_36702_36860[(2)] = null);

(statearr_36702_36860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (6))){
var state_36697__$1 = state_36697;
var statearr_36703_36861 = state_36697__$1;
(statearr_36703_36861[(2)] = null);

(statearr_36703_36861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (7))){
var inst_36693 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
var statearr_36704_36862 = state_36697__$1;
(statearr_36704_36862[(2)] = inst_36693);

(statearr_36704_36862[(1)] = (3));


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
});})(__36853,c__20906__auto___36856,G__36684_36854,n__19654__auto___36852,jobs,results,process,async))
;
return ((function (__36853,switch__20794__auto__,c__20906__auto___36856,G__36684_36854,n__19654__auto___36852,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0 = (function (){
var statearr_36708 = [null,null,null,null,null,null,null];
(statearr_36708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__);

(statearr_36708[(1)] = (1));

return statearr_36708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1 = (function (state_36697){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_36697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e36709){if((e36709 instanceof Object)){
var ex__20798__auto__ = e36709;
var statearr_36710_36863 = state_36697;
(statearr_36710_36863[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36864 = state_36697;
state_36697 = G__36864;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__ = function(state_36697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1.call(this,state_36697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__;
})()
;})(__36853,switch__20794__auto__,c__20906__auto___36856,G__36684_36854,n__19654__auto___36852,jobs,results,process,async))
})();
var state__20908__auto__ = (function (){var statearr_36711 = f__20907__auto__.call(null);
(statearr_36711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___36856);

return statearr_36711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(__36853,c__20906__auto___36856,G__36684_36854,n__19654__auto___36852,jobs,results,process,async))
);


break;
case "async":
var c__20906__auto___36865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36853,c__20906__auto___36865,G__36684_36854,n__19654__auto___36852,jobs,results,process,async){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (__36853,c__20906__auto___36865,G__36684_36854,n__19654__auto___36852,jobs,results,process,async){
return (function (state_36724){
var state_val_36725 = (state_36724[(1)]);
if((state_val_36725 === (1))){
var state_36724__$1 = state_36724;
var statearr_36726_36866 = state_36724__$1;
(statearr_36726_36866[(2)] = null);

(statearr_36726_36866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (2))){
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36724__$1,(4),jobs);
} else {
if((state_val_36725 === (3))){
var inst_36722 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36724__$1,inst_36722);
} else {
if((state_val_36725 === (4))){
var inst_36714 = (state_36724[(2)]);
var inst_36715 = async.call(null,inst_36714);
var state_36724__$1 = state_36724;
if(cljs.core.truth_(inst_36715)){
var statearr_36727_36867 = state_36724__$1;
(statearr_36727_36867[(1)] = (5));

} else {
var statearr_36728_36868 = state_36724__$1;
(statearr_36728_36868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (5))){
var state_36724__$1 = state_36724;
var statearr_36729_36869 = state_36724__$1;
(statearr_36729_36869[(2)] = null);

(statearr_36729_36869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (6))){
var state_36724__$1 = state_36724;
var statearr_36730_36870 = state_36724__$1;
(statearr_36730_36870[(2)] = null);

(statearr_36730_36870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36725 === (7))){
var inst_36720 = (state_36724[(2)]);
var state_36724__$1 = state_36724;
var statearr_36731_36871 = state_36724__$1;
(statearr_36731_36871[(2)] = inst_36720);

(statearr_36731_36871[(1)] = (3));


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
});})(__36853,c__20906__auto___36865,G__36684_36854,n__19654__auto___36852,jobs,results,process,async))
;
return ((function (__36853,switch__20794__auto__,c__20906__auto___36865,G__36684_36854,n__19654__auto___36852,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0 = (function (){
var statearr_36735 = [null,null,null,null,null,null,null];
(statearr_36735[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__);

(statearr_36735[(1)] = (1));

return statearr_36735;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1 = (function (state_36724){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_36724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e36736){if((e36736 instanceof Object)){
var ex__20798__auto__ = e36736;
var statearr_36737_36872 = state_36724;
(statearr_36737_36872[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36873 = state_36724;
state_36724 = G__36873;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__ = function(state_36724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1.call(this,state_36724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__;
})()
;})(__36853,switch__20794__auto__,c__20906__auto___36865,G__36684_36854,n__19654__auto___36852,jobs,results,process,async))
})();
var state__20908__auto__ = (function (){var statearr_36738 = f__20907__auto__.call(null);
(statearr_36738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___36865);

return statearr_36738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(__36853,c__20906__auto___36865,G__36684_36854,n__19654__auto___36852,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36874 = (__36853 + (1));
__36853 = G__36874;
continue;
} else {
}
break;
}

var c__20906__auto___36875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___36875,jobs,results,process,async){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___36875,jobs,results,process,async){
return (function (state_36760){
var state_val_36761 = (state_36760[(1)]);
if((state_val_36761 === (1))){
var state_36760__$1 = state_36760;
var statearr_36762_36876 = state_36760__$1;
(statearr_36762_36876[(2)] = null);

(statearr_36762_36876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (2))){
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,(4),from);
} else {
if((state_val_36761 === (3))){
var inst_36758 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36760__$1,inst_36758);
} else {
if((state_val_36761 === (4))){
var inst_36741 = (state_36760[(7)]);
var inst_36741__$1 = (state_36760[(2)]);
var inst_36742 = (inst_36741__$1 == null);
var state_36760__$1 = (function (){var statearr_36763 = state_36760;
(statearr_36763[(7)] = inst_36741__$1);

return statearr_36763;
})();
if(cljs.core.truth_(inst_36742)){
var statearr_36764_36877 = state_36760__$1;
(statearr_36764_36877[(1)] = (5));

} else {
var statearr_36765_36878 = state_36760__$1;
(statearr_36765_36878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (5))){
var inst_36744 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36760__$1 = state_36760;
var statearr_36766_36879 = state_36760__$1;
(statearr_36766_36879[(2)] = inst_36744);

(statearr_36766_36879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (6))){
var inst_36741 = (state_36760[(7)]);
var inst_36746 = (state_36760[(8)]);
var inst_36746__$1 = cljs.core.async.chan.call(null,(1));
var inst_36747 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36748 = [inst_36741,inst_36746__$1];
var inst_36749 = (new cljs.core.PersistentVector(null,2,(5),inst_36747,inst_36748,null));
var state_36760__$1 = (function (){var statearr_36767 = state_36760;
(statearr_36767[(8)] = inst_36746__$1);

return statearr_36767;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36760__$1,(8),jobs,inst_36749);
} else {
if((state_val_36761 === (7))){
var inst_36756 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36768_36880 = state_36760__$1;
(statearr_36768_36880[(2)] = inst_36756);

(statearr_36768_36880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (8))){
var inst_36746 = (state_36760[(8)]);
var inst_36751 = (state_36760[(2)]);
var state_36760__$1 = (function (){var statearr_36769 = state_36760;
(statearr_36769[(9)] = inst_36751);

return statearr_36769;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36760__$1,(9),results,inst_36746);
} else {
if((state_val_36761 === (9))){
var inst_36753 = (state_36760[(2)]);
var state_36760__$1 = (function (){var statearr_36770 = state_36760;
(statearr_36770[(10)] = inst_36753);

return statearr_36770;
})();
var statearr_36771_36881 = state_36760__$1;
(statearr_36771_36881[(2)] = null);

(statearr_36771_36881[(1)] = (2));


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
});})(c__20906__auto___36875,jobs,results,process,async))
;
return ((function (switch__20794__auto__,c__20906__auto___36875,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0 = (function (){
var statearr_36775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__);

(statearr_36775[(1)] = (1));

return statearr_36775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1 = (function (state_36760){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_36760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e36776){if((e36776 instanceof Object)){
var ex__20798__auto__ = e36776;
var statearr_36777_36882 = state_36760;
(statearr_36777_36882[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36883 = state_36760;
state_36760 = G__36883;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__ = function(state_36760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1.call(this,state_36760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___36875,jobs,results,process,async))
})();
var state__20908__auto__ = (function (){var statearr_36778 = f__20907__auto__.call(null);
(statearr_36778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___36875);

return statearr_36778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___36875,jobs,results,process,async))
);


var c__20906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto__,jobs,results,process,async){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto__,jobs,results,process,async){
return (function (state_36816){
var state_val_36817 = (state_36816[(1)]);
if((state_val_36817 === (7))){
var inst_36812 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
var statearr_36818_36884 = state_36816__$1;
(statearr_36818_36884[(2)] = inst_36812);

(statearr_36818_36884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (20))){
var state_36816__$1 = state_36816;
var statearr_36819_36885 = state_36816__$1;
(statearr_36819_36885[(2)] = null);

(statearr_36819_36885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (1))){
var state_36816__$1 = state_36816;
var statearr_36820_36886 = state_36816__$1;
(statearr_36820_36886[(2)] = null);

(statearr_36820_36886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (4))){
var inst_36781 = (state_36816[(7)]);
var inst_36781__$1 = (state_36816[(2)]);
var inst_36782 = (inst_36781__$1 == null);
var state_36816__$1 = (function (){var statearr_36821 = state_36816;
(statearr_36821[(7)] = inst_36781__$1);

return statearr_36821;
})();
if(cljs.core.truth_(inst_36782)){
var statearr_36822_36887 = state_36816__$1;
(statearr_36822_36887[(1)] = (5));

} else {
var statearr_36823_36888 = state_36816__$1;
(statearr_36823_36888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (15))){
var inst_36794 = (state_36816[(8)]);
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36816__$1,(18),to,inst_36794);
} else {
if((state_val_36817 === (21))){
var inst_36807 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
var statearr_36824_36889 = state_36816__$1;
(statearr_36824_36889[(2)] = inst_36807);

(statearr_36824_36889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (13))){
var inst_36809 = (state_36816[(2)]);
var state_36816__$1 = (function (){var statearr_36825 = state_36816;
(statearr_36825[(9)] = inst_36809);

return statearr_36825;
})();
var statearr_36826_36890 = state_36816__$1;
(statearr_36826_36890[(2)] = null);

(statearr_36826_36890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (6))){
var inst_36781 = (state_36816[(7)]);
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36816__$1,(11),inst_36781);
} else {
if((state_val_36817 === (17))){
var inst_36802 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
if(cljs.core.truth_(inst_36802)){
var statearr_36827_36891 = state_36816__$1;
(statearr_36827_36891[(1)] = (19));

} else {
var statearr_36828_36892 = state_36816__$1;
(statearr_36828_36892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (3))){
var inst_36814 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36816__$1,inst_36814);
} else {
if((state_val_36817 === (12))){
var inst_36791 = (state_36816[(10)]);
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36816__$1,(14),inst_36791);
} else {
if((state_val_36817 === (2))){
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36816__$1,(4),results);
} else {
if((state_val_36817 === (19))){
var state_36816__$1 = state_36816;
var statearr_36829_36893 = state_36816__$1;
(statearr_36829_36893[(2)] = null);

(statearr_36829_36893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (11))){
var inst_36791 = (state_36816[(2)]);
var state_36816__$1 = (function (){var statearr_36830 = state_36816;
(statearr_36830[(10)] = inst_36791);

return statearr_36830;
})();
var statearr_36831_36894 = state_36816__$1;
(statearr_36831_36894[(2)] = null);

(statearr_36831_36894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (9))){
var state_36816__$1 = state_36816;
var statearr_36832_36895 = state_36816__$1;
(statearr_36832_36895[(2)] = null);

(statearr_36832_36895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (5))){
var state_36816__$1 = state_36816;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36833_36896 = state_36816__$1;
(statearr_36833_36896[(1)] = (8));

} else {
var statearr_36834_36897 = state_36816__$1;
(statearr_36834_36897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (14))){
var inst_36796 = (state_36816[(11)]);
var inst_36794 = (state_36816[(8)]);
var inst_36794__$1 = (state_36816[(2)]);
var inst_36795 = (inst_36794__$1 == null);
var inst_36796__$1 = cljs.core.not.call(null,inst_36795);
var state_36816__$1 = (function (){var statearr_36835 = state_36816;
(statearr_36835[(11)] = inst_36796__$1);

(statearr_36835[(8)] = inst_36794__$1);

return statearr_36835;
})();
if(inst_36796__$1){
var statearr_36836_36898 = state_36816__$1;
(statearr_36836_36898[(1)] = (15));

} else {
var statearr_36837_36899 = state_36816__$1;
(statearr_36837_36899[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (16))){
var inst_36796 = (state_36816[(11)]);
var state_36816__$1 = state_36816;
var statearr_36838_36900 = state_36816__$1;
(statearr_36838_36900[(2)] = inst_36796);

(statearr_36838_36900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (10))){
var inst_36788 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
var statearr_36839_36901 = state_36816__$1;
(statearr_36839_36901[(2)] = inst_36788);

(statearr_36839_36901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (18))){
var inst_36799 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
var statearr_36840_36902 = state_36816__$1;
(statearr_36840_36902[(2)] = inst_36799);

(statearr_36840_36902[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (8))){
var inst_36785 = cljs.core.async.close_BANG_.call(null,to);
var state_36816__$1 = state_36816;
var statearr_36841_36903 = state_36816__$1;
(statearr_36841_36903[(2)] = inst_36785);

(statearr_36841_36903[(1)] = (10));


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
});})(c__20906__auto__,jobs,results,process,async))
;
return ((function (switch__20794__auto__,c__20906__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0 = (function (){
var statearr_36845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__);

(statearr_36845[(1)] = (1));

return statearr_36845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1 = (function (state_36816){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_36816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e36846){if((e36846 instanceof Object)){
var ex__20798__auto__ = e36846;
var statearr_36847_36904 = state_36816;
(statearr_36847_36904[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36905 = state_36816;
state_36816 = G__36905;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__ = function(state_36816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1.call(this,state_36816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto__,jobs,results,process,async))
})();
var state__20908__auto__ = (function (){var statearr_36848 = f__20907__auto__.call(null);
(statearr_36848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto__);

return statearr_36848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto__,jobs,results,process,async))
);

return c__20906__auto__;
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
var args36906 = [];
var len__19809__auto___36909 = arguments.length;
var i__19810__auto___36910 = (0);
while(true){
if((i__19810__auto___36910 < len__19809__auto___36909)){
args36906.push((arguments[i__19810__auto___36910]));

var G__36911 = (i__19810__auto___36910 + (1));
i__19810__auto___36910 = G__36911;
continue;
} else {
}
break;
}

var G__36908 = args36906.length;
switch (G__36908) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36906.length)].join('')));

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
var args36913 = [];
var len__19809__auto___36916 = arguments.length;
var i__19810__auto___36917 = (0);
while(true){
if((i__19810__auto___36917 < len__19809__auto___36916)){
args36913.push((arguments[i__19810__auto___36917]));

var G__36918 = (i__19810__auto___36917 + (1));
i__19810__auto___36917 = G__36918;
continue;
} else {
}
break;
}

var G__36915 = args36913.length;
switch (G__36915) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36913.length)].join('')));

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
var args36920 = [];
var len__19809__auto___36973 = arguments.length;
var i__19810__auto___36974 = (0);
while(true){
if((i__19810__auto___36974 < len__19809__auto___36973)){
args36920.push((arguments[i__19810__auto___36974]));

var G__36975 = (i__19810__auto___36974 + (1));
i__19810__auto___36974 = G__36975;
continue;
} else {
}
break;
}

var G__36922 = args36920.length;
switch (G__36922) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36920.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20906__auto___36977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___36977,tc,fc){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___36977,tc,fc){
return (function (state_36948){
var state_val_36949 = (state_36948[(1)]);
if((state_val_36949 === (7))){
var inst_36944 = (state_36948[(2)]);
var state_36948__$1 = state_36948;
var statearr_36950_36978 = state_36948__$1;
(statearr_36950_36978[(2)] = inst_36944);

(statearr_36950_36978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (1))){
var state_36948__$1 = state_36948;
var statearr_36951_36979 = state_36948__$1;
(statearr_36951_36979[(2)] = null);

(statearr_36951_36979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (4))){
var inst_36925 = (state_36948[(7)]);
var inst_36925__$1 = (state_36948[(2)]);
var inst_36926 = (inst_36925__$1 == null);
var state_36948__$1 = (function (){var statearr_36952 = state_36948;
(statearr_36952[(7)] = inst_36925__$1);

return statearr_36952;
})();
if(cljs.core.truth_(inst_36926)){
var statearr_36953_36980 = state_36948__$1;
(statearr_36953_36980[(1)] = (5));

} else {
var statearr_36954_36981 = state_36948__$1;
(statearr_36954_36981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (13))){
var state_36948__$1 = state_36948;
var statearr_36955_36982 = state_36948__$1;
(statearr_36955_36982[(2)] = null);

(statearr_36955_36982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (6))){
var inst_36925 = (state_36948[(7)]);
var inst_36931 = p.call(null,inst_36925);
var state_36948__$1 = state_36948;
if(cljs.core.truth_(inst_36931)){
var statearr_36956_36983 = state_36948__$1;
(statearr_36956_36983[(1)] = (9));

} else {
var statearr_36957_36984 = state_36948__$1;
(statearr_36957_36984[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (3))){
var inst_36946 = (state_36948[(2)]);
var state_36948__$1 = state_36948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36948__$1,inst_36946);
} else {
if((state_val_36949 === (12))){
var state_36948__$1 = state_36948;
var statearr_36958_36985 = state_36948__$1;
(statearr_36958_36985[(2)] = null);

(statearr_36958_36985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (2))){
var state_36948__$1 = state_36948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36948__$1,(4),ch);
} else {
if((state_val_36949 === (11))){
var inst_36925 = (state_36948[(7)]);
var inst_36935 = (state_36948[(2)]);
var state_36948__$1 = state_36948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36948__$1,(8),inst_36935,inst_36925);
} else {
if((state_val_36949 === (9))){
var state_36948__$1 = state_36948;
var statearr_36959_36986 = state_36948__$1;
(statearr_36959_36986[(2)] = tc);

(statearr_36959_36986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (5))){
var inst_36928 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36929 = cljs.core.async.close_BANG_.call(null,fc);
var state_36948__$1 = (function (){var statearr_36960 = state_36948;
(statearr_36960[(8)] = inst_36928);

return statearr_36960;
})();
var statearr_36961_36987 = state_36948__$1;
(statearr_36961_36987[(2)] = inst_36929);

(statearr_36961_36987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (14))){
var inst_36942 = (state_36948[(2)]);
var state_36948__$1 = state_36948;
var statearr_36962_36988 = state_36948__$1;
(statearr_36962_36988[(2)] = inst_36942);

(statearr_36962_36988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (10))){
var state_36948__$1 = state_36948;
var statearr_36963_36989 = state_36948__$1;
(statearr_36963_36989[(2)] = fc);

(statearr_36963_36989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36949 === (8))){
var inst_36937 = (state_36948[(2)]);
var state_36948__$1 = state_36948;
if(cljs.core.truth_(inst_36937)){
var statearr_36964_36990 = state_36948__$1;
(statearr_36964_36990[(1)] = (12));

} else {
var statearr_36965_36991 = state_36948__$1;
(statearr_36965_36991[(1)] = (13));

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
});})(c__20906__auto___36977,tc,fc))
;
return ((function (switch__20794__auto__,c__20906__auto___36977,tc,fc){
return (function() {
var cljs$core$async$state_machine__20795__auto__ = null;
var cljs$core$async$state_machine__20795__auto____0 = (function (){
var statearr_36969 = [null,null,null,null,null,null,null,null,null];
(statearr_36969[(0)] = cljs$core$async$state_machine__20795__auto__);

(statearr_36969[(1)] = (1));

return statearr_36969;
});
var cljs$core$async$state_machine__20795__auto____1 = (function (state_36948){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_36948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e36970){if((e36970 instanceof Object)){
var ex__20798__auto__ = e36970;
var statearr_36971_36992 = state_36948;
(statearr_36971_36992[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36993 = state_36948;
state_36948 = G__36993;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$state_machine__20795__auto__ = function(state_36948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20795__auto____1.call(this,state_36948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20795__auto____0;
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20795__auto____1;
return cljs$core$async$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___36977,tc,fc))
})();
var state__20908__auto__ = (function (){var statearr_36972 = f__20907__auto__.call(null);
(statearr_36972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___36977);

return statearr_36972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___36977,tc,fc))
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
var c__20906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto__){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto__){
return (function (state_37057){
var state_val_37058 = (state_37057[(1)]);
if((state_val_37058 === (7))){
var inst_37053 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37059_37080 = state_37057__$1;
(statearr_37059_37080[(2)] = inst_37053);

(statearr_37059_37080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (1))){
var inst_37037 = init;
var state_37057__$1 = (function (){var statearr_37060 = state_37057;
(statearr_37060[(7)] = inst_37037);

return statearr_37060;
})();
var statearr_37061_37081 = state_37057__$1;
(statearr_37061_37081[(2)] = null);

(statearr_37061_37081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (4))){
var inst_37040 = (state_37057[(8)]);
var inst_37040__$1 = (state_37057[(2)]);
var inst_37041 = (inst_37040__$1 == null);
var state_37057__$1 = (function (){var statearr_37062 = state_37057;
(statearr_37062[(8)] = inst_37040__$1);

return statearr_37062;
})();
if(cljs.core.truth_(inst_37041)){
var statearr_37063_37082 = state_37057__$1;
(statearr_37063_37082[(1)] = (5));

} else {
var statearr_37064_37083 = state_37057__$1;
(statearr_37064_37083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (6))){
var inst_37044 = (state_37057[(9)]);
var inst_37037 = (state_37057[(7)]);
var inst_37040 = (state_37057[(8)]);
var inst_37044__$1 = f.call(null,inst_37037,inst_37040);
var inst_37045 = cljs.core.reduced_QMARK_.call(null,inst_37044__$1);
var state_37057__$1 = (function (){var statearr_37065 = state_37057;
(statearr_37065[(9)] = inst_37044__$1);

return statearr_37065;
})();
if(inst_37045){
var statearr_37066_37084 = state_37057__$1;
(statearr_37066_37084[(1)] = (8));

} else {
var statearr_37067_37085 = state_37057__$1;
(statearr_37067_37085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (3))){
var inst_37055 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37057__$1,inst_37055);
} else {
if((state_val_37058 === (2))){
var state_37057__$1 = state_37057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37057__$1,(4),ch);
} else {
if((state_val_37058 === (9))){
var inst_37044 = (state_37057[(9)]);
var inst_37037 = inst_37044;
var state_37057__$1 = (function (){var statearr_37068 = state_37057;
(statearr_37068[(7)] = inst_37037);

return statearr_37068;
})();
var statearr_37069_37086 = state_37057__$1;
(statearr_37069_37086[(2)] = null);

(statearr_37069_37086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (5))){
var inst_37037 = (state_37057[(7)]);
var state_37057__$1 = state_37057;
var statearr_37070_37087 = state_37057__$1;
(statearr_37070_37087[(2)] = inst_37037);

(statearr_37070_37087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (10))){
var inst_37051 = (state_37057[(2)]);
var state_37057__$1 = state_37057;
var statearr_37071_37088 = state_37057__$1;
(statearr_37071_37088[(2)] = inst_37051);

(statearr_37071_37088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37058 === (8))){
var inst_37044 = (state_37057[(9)]);
var inst_37047 = cljs.core.deref.call(null,inst_37044);
var state_37057__$1 = state_37057;
var statearr_37072_37089 = state_37057__$1;
(statearr_37072_37089[(2)] = inst_37047);

(statearr_37072_37089[(1)] = (10));


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
});})(c__20906__auto__))
;
return ((function (switch__20794__auto__,c__20906__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20795__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20795__auto____0 = (function (){
var statearr_37076 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37076[(0)] = cljs$core$async$reduce_$_state_machine__20795__auto__);

(statearr_37076[(1)] = (1));

return statearr_37076;
});
var cljs$core$async$reduce_$_state_machine__20795__auto____1 = (function (state_37057){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_37057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e37077){if((e37077 instanceof Object)){
var ex__20798__auto__ = e37077;
var statearr_37078_37090 = state_37057;
(statearr_37078_37090[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37091 = state_37057;
state_37057 = G__37091;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20795__auto__ = function(state_37057){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20795__auto____1.call(this,state_37057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20795__auto____0;
cljs$core$async$reduce_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20795__auto____1;
return cljs$core$async$reduce_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto__))
})();
var state__20908__auto__ = (function (){var statearr_37079 = f__20907__auto__.call(null);
(statearr_37079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto__);

return statearr_37079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto__))
);

return c__20906__auto__;
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
var args37092 = [];
var len__19809__auto___37144 = arguments.length;
var i__19810__auto___37145 = (0);
while(true){
if((i__19810__auto___37145 < len__19809__auto___37144)){
args37092.push((arguments[i__19810__auto___37145]));

var G__37146 = (i__19810__auto___37145 + (1));
i__19810__auto___37145 = G__37146;
continue;
} else {
}
break;
}

var G__37094 = args37092.length;
switch (G__37094) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37092.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto__){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto__){
return (function (state_37119){
var state_val_37120 = (state_37119[(1)]);
if((state_val_37120 === (7))){
var inst_37101 = (state_37119[(2)]);
var state_37119__$1 = state_37119;
var statearr_37121_37148 = state_37119__$1;
(statearr_37121_37148[(2)] = inst_37101);

(statearr_37121_37148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37120 === (1))){
var inst_37095 = cljs.core.seq.call(null,coll);
var inst_37096 = inst_37095;
var state_37119__$1 = (function (){var statearr_37122 = state_37119;
(statearr_37122[(7)] = inst_37096);

return statearr_37122;
})();
var statearr_37123_37149 = state_37119__$1;
(statearr_37123_37149[(2)] = null);

(statearr_37123_37149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37120 === (4))){
var inst_37096 = (state_37119[(7)]);
var inst_37099 = cljs.core.first.call(null,inst_37096);
var state_37119__$1 = state_37119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37119__$1,(7),ch,inst_37099);
} else {
if((state_val_37120 === (13))){
var inst_37113 = (state_37119[(2)]);
var state_37119__$1 = state_37119;
var statearr_37124_37150 = state_37119__$1;
(statearr_37124_37150[(2)] = inst_37113);

(statearr_37124_37150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37120 === (6))){
var inst_37104 = (state_37119[(2)]);
var state_37119__$1 = state_37119;
if(cljs.core.truth_(inst_37104)){
var statearr_37125_37151 = state_37119__$1;
(statearr_37125_37151[(1)] = (8));

} else {
var statearr_37126_37152 = state_37119__$1;
(statearr_37126_37152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37120 === (3))){
var inst_37117 = (state_37119[(2)]);
var state_37119__$1 = state_37119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37119__$1,inst_37117);
} else {
if((state_val_37120 === (12))){
var state_37119__$1 = state_37119;
var statearr_37127_37153 = state_37119__$1;
(statearr_37127_37153[(2)] = null);

(statearr_37127_37153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37120 === (2))){
var inst_37096 = (state_37119[(7)]);
var state_37119__$1 = state_37119;
if(cljs.core.truth_(inst_37096)){
var statearr_37128_37154 = state_37119__$1;
(statearr_37128_37154[(1)] = (4));

} else {
var statearr_37129_37155 = state_37119__$1;
(statearr_37129_37155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37120 === (11))){
var inst_37110 = cljs.core.async.close_BANG_.call(null,ch);
var state_37119__$1 = state_37119;
var statearr_37130_37156 = state_37119__$1;
(statearr_37130_37156[(2)] = inst_37110);

(statearr_37130_37156[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37120 === (9))){
var state_37119__$1 = state_37119;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37131_37157 = state_37119__$1;
(statearr_37131_37157[(1)] = (11));

} else {
var statearr_37132_37158 = state_37119__$1;
(statearr_37132_37158[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37120 === (5))){
var inst_37096 = (state_37119[(7)]);
var state_37119__$1 = state_37119;
var statearr_37133_37159 = state_37119__$1;
(statearr_37133_37159[(2)] = inst_37096);

(statearr_37133_37159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37120 === (10))){
var inst_37115 = (state_37119[(2)]);
var state_37119__$1 = state_37119;
var statearr_37134_37160 = state_37119__$1;
(statearr_37134_37160[(2)] = inst_37115);

(statearr_37134_37160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37120 === (8))){
var inst_37096 = (state_37119[(7)]);
var inst_37106 = cljs.core.next.call(null,inst_37096);
var inst_37096__$1 = inst_37106;
var state_37119__$1 = (function (){var statearr_37135 = state_37119;
(statearr_37135[(7)] = inst_37096__$1);

return statearr_37135;
})();
var statearr_37136_37161 = state_37119__$1;
(statearr_37136_37161[(2)] = null);

(statearr_37136_37161[(1)] = (2));


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
});})(c__20906__auto__))
;
return ((function (switch__20794__auto__,c__20906__auto__){
return (function() {
var cljs$core$async$state_machine__20795__auto__ = null;
var cljs$core$async$state_machine__20795__auto____0 = (function (){
var statearr_37140 = [null,null,null,null,null,null,null,null];
(statearr_37140[(0)] = cljs$core$async$state_machine__20795__auto__);

(statearr_37140[(1)] = (1));

return statearr_37140;
});
var cljs$core$async$state_machine__20795__auto____1 = (function (state_37119){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_37119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e37141){if((e37141 instanceof Object)){
var ex__20798__auto__ = e37141;
var statearr_37142_37162 = state_37119;
(statearr_37142_37162[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37163 = state_37119;
state_37119 = G__37163;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$state_machine__20795__auto__ = function(state_37119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20795__auto____1.call(this,state_37119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20795__auto____0;
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20795__auto____1;
return cljs$core$async$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto__))
})();
var state__20908__auto__ = (function (){var statearr_37143 = f__20907__auto__.call(null);
(statearr_37143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto__);

return statearr_37143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto__))
);

return c__20906__auto__;
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
var x__19402__auto__ = (((_ == null))?null:_);
var m__19403__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,_);
} else {
var m__19403__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,_);
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
var x__19402__auto__ = (((m == null))?null:m);
var m__19403__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19403__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19402__auto__ = (((m == null))?null:m);
var m__19403__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,m,ch);
} else {
var m__19403__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,m,ch);
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
var x__19402__auto__ = (((m == null))?null:m);
var m__19403__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,m);
} else {
var m__19403__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async37385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37385 = (function (mult,ch,cs,meta37386){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta37386 = meta37386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37387,meta37386__$1){
var self__ = this;
var _37387__$1 = this;
return (new cljs.core.async.t_cljs$core$async37385(self__.mult,self__.ch,self__.cs,meta37386__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37387){
var self__ = this;
var _37387__$1 = this;
return self__.meta37386;
});})(cs))
;

cljs.core.async.t_cljs$core$async37385.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37385.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async37385.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37385.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37385.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37385.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37386","meta37386",1782584150,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37385";

cljs.core.async.t_cljs$core$async37385.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19345__auto__,writer__19346__auto__,opt__19347__auto__){
return cljs.core._write.call(null,writer__19346__auto__,"cljs.core.async/t_cljs$core$async37385");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37385 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37385(mult__$1,ch__$1,cs__$1,meta37386){
return (new cljs.core.async.t_cljs$core$async37385(mult__$1,ch__$1,cs__$1,meta37386));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37385(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20906__auto___37606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___37606,cs,m,dchan,dctr,done){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___37606,cs,m,dchan,dctr,done){
return (function (state_37518){
var state_val_37519 = (state_37518[(1)]);
if((state_val_37519 === (7))){
var inst_37514 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
var statearr_37520_37607 = state_37518__$1;
(statearr_37520_37607[(2)] = inst_37514);

(statearr_37520_37607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (20))){
var inst_37419 = (state_37518[(7)]);
var inst_37429 = cljs.core.first.call(null,inst_37419);
var inst_37430 = cljs.core.nth.call(null,inst_37429,(0),null);
var inst_37431 = cljs.core.nth.call(null,inst_37429,(1),null);
var state_37518__$1 = (function (){var statearr_37521 = state_37518;
(statearr_37521[(8)] = inst_37430);

return statearr_37521;
})();
if(cljs.core.truth_(inst_37431)){
var statearr_37522_37608 = state_37518__$1;
(statearr_37522_37608[(1)] = (22));

} else {
var statearr_37523_37609 = state_37518__$1;
(statearr_37523_37609[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (27))){
var inst_37390 = (state_37518[(9)]);
var inst_37461 = (state_37518[(10)]);
var inst_37459 = (state_37518[(11)]);
var inst_37466 = (state_37518[(12)]);
var inst_37466__$1 = cljs.core._nth.call(null,inst_37459,inst_37461);
var inst_37467 = cljs.core.async.put_BANG_.call(null,inst_37466__$1,inst_37390,done);
var state_37518__$1 = (function (){var statearr_37524 = state_37518;
(statearr_37524[(12)] = inst_37466__$1);

return statearr_37524;
})();
if(cljs.core.truth_(inst_37467)){
var statearr_37525_37610 = state_37518__$1;
(statearr_37525_37610[(1)] = (30));

} else {
var statearr_37526_37611 = state_37518__$1;
(statearr_37526_37611[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (1))){
var state_37518__$1 = state_37518;
var statearr_37527_37612 = state_37518__$1;
(statearr_37527_37612[(2)] = null);

(statearr_37527_37612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (24))){
var inst_37419 = (state_37518[(7)]);
var inst_37436 = (state_37518[(2)]);
var inst_37437 = cljs.core.next.call(null,inst_37419);
var inst_37399 = inst_37437;
var inst_37400 = null;
var inst_37401 = (0);
var inst_37402 = (0);
var state_37518__$1 = (function (){var statearr_37528 = state_37518;
(statearr_37528[(13)] = inst_37399);

(statearr_37528[(14)] = inst_37436);

(statearr_37528[(15)] = inst_37402);

(statearr_37528[(16)] = inst_37401);

(statearr_37528[(17)] = inst_37400);

return statearr_37528;
})();
var statearr_37529_37613 = state_37518__$1;
(statearr_37529_37613[(2)] = null);

(statearr_37529_37613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (39))){
var state_37518__$1 = state_37518;
var statearr_37533_37614 = state_37518__$1;
(statearr_37533_37614[(2)] = null);

(statearr_37533_37614[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (4))){
var inst_37390 = (state_37518[(9)]);
var inst_37390__$1 = (state_37518[(2)]);
var inst_37391 = (inst_37390__$1 == null);
var state_37518__$1 = (function (){var statearr_37534 = state_37518;
(statearr_37534[(9)] = inst_37390__$1);

return statearr_37534;
})();
if(cljs.core.truth_(inst_37391)){
var statearr_37535_37615 = state_37518__$1;
(statearr_37535_37615[(1)] = (5));

} else {
var statearr_37536_37616 = state_37518__$1;
(statearr_37536_37616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (15))){
var inst_37399 = (state_37518[(13)]);
var inst_37402 = (state_37518[(15)]);
var inst_37401 = (state_37518[(16)]);
var inst_37400 = (state_37518[(17)]);
var inst_37415 = (state_37518[(2)]);
var inst_37416 = (inst_37402 + (1));
var tmp37530 = inst_37399;
var tmp37531 = inst_37401;
var tmp37532 = inst_37400;
var inst_37399__$1 = tmp37530;
var inst_37400__$1 = tmp37532;
var inst_37401__$1 = tmp37531;
var inst_37402__$1 = inst_37416;
var state_37518__$1 = (function (){var statearr_37537 = state_37518;
(statearr_37537[(13)] = inst_37399__$1);

(statearr_37537[(18)] = inst_37415);

(statearr_37537[(15)] = inst_37402__$1);

(statearr_37537[(16)] = inst_37401__$1);

(statearr_37537[(17)] = inst_37400__$1);

return statearr_37537;
})();
var statearr_37538_37617 = state_37518__$1;
(statearr_37538_37617[(2)] = null);

(statearr_37538_37617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (21))){
var inst_37440 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
var statearr_37542_37618 = state_37518__$1;
(statearr_37542_37618[(2)] = inst_37440);

(statearr_37542_37618[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (31))){
var inst_37466 = (state_37518[(12)]);
var inst_37470 = done.call(null,null);
var inst_37471 = cljs.core.async.untap_STAR_.call(null,m,inst_37466);
var state_37518__$1 = (function (){var statearr_37543 = state_37518;
(statearr_37543[(19)] = inst_37470);

return statearr_37543;
})();
var statearr_37544_37619 = state_37518__$1;
(statearr_37544_37619[(2)] = inst_37471);

(statearr_37544_37619[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (32))){
var inst_37461 = (state_37518[(10)]);
var inst_37459 = (state_37518[(11)]);
var inst_37458 = (state_37518[(20)]);
var inst_37460 = (state_37518[(21)]);
var inst_37473 = (state_37518[(2)]);
var inst_37474 = (inst_37461 + (1));
var tmp37539 = inst_37459;
var tmp37540 = inst_37458;
var tmp37541 = inst_37460;
var inst_37458__$1 = tmp37540;
var inst_37459__$1 = tmp37539;
var inst_37460__$1 = tmp37541;
var inst_37461__$1 = inst_37474;
var state_37518__$1 = (function (){var statearr_37545 = state_37518;
(statearr_37545[(22)] = inst_37473);

(statearr_37545[(10)] = inst_37461__$1);

(statearr_37545[(11)] = inst_37459__$1);

(statearr_37545[(20)] = inst_37458__$1);

(statearr_37545[(21)] = inst_37460__$1);

return statearr_37545;
})();
var statearr_37546_37620 = state_37518__$1;
(statearr_37546_37620[(2)] = null);

(statearr_37546_37620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (40))){
var inst_37486 = (state_37518[(23)]);
var inst_37490 = done.call(null,null);
var inst_37491 = cljs.core.async.untap_STAR_.call(null,m,inst_37486);
var state_37518__$1 = (function (){var statearr_37547 = state_37518;
(statearr_37547[(24)] = inst_37490);

return statearr_37547;
})();
var statearr_37548_37621 = state_37518__$1;
(statearr_37548_37621[(2)] = inst_37491);

(statearr_37548_37621[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (33))){
var inst_37477 = (state_37518[(25)]);
var inst_37479 = cljs.core.chunked_seq_QMARK_.call(null,inst_37477);
var state_37518__$1 = state_37518;
if(inst_37479){
var statearr_37549_37622 = state_37518__$1;
(statearr_37549_37622[(1)] = (36));

} else {
var statearr_37550_37623 = state_37518__$1;
(statearr_37550_37623[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (13))){
var inst_37409 = (state_37518[(26)]);
var inst_37412 = cljs.core.async.close_BANG_.call(null,inst_37409);
var state_37518__$1 = state_37518;
var statearr_37551_37624 = state_37518__$1;
(statearr_37551_37624[(2)] = inst_37412);

(statearr_37551_37624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (22))){
var inst_37430 = (state_37518[(8)]);
var inst_37433 = cljs.core.async.close_BANG_.call(null,inst_37430);
var state_37518__$1 = state_37518;
var statearr_37552_37625 = state_37518__$1;
(statearr_37552_37625[(2)] = inst_37433);

(statearr_37552_37625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (36))){
var inst_37477 = (state_37518[(25)]);
var inst_37481 = cljs.core.chunk_first.call(null,inst_37477);
var inst_37482 = cljs.core.chunk_rest.call(null,inst_37477);
var inst_37483 = cljs.core.count.call(null,inst_37481);
var inst_37458 = inst_37482;
var inst_37459 = inst_37481;
var inst_37460 = inst_37483;
var inst_37461 = (0);
var state_37518__$1 = (function (){var statearr_37553 = state_37518;
(statearr_37553[(10)] = inst_37461);

(statearr_37553[(11)] = inst_37459);

(statearr_37553[(20)] = inst_37458);

(statearr_37553[(21)] = inst_37460);

return statearr_37553;
})();
var statearr_37554_37626 = state_37518__$1;
(statearr_37554_37626[(2)] = null);

(statearr_37554_37626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (41))){
var inst_37477 = (state_37518[(25)]);
var inst_37493 = (state_37518[(2)]);
var inst_37494 = cljs.core.next.call(null,inst_37477);
var inst_37458 = inst_37494;
var inst_37459 = null;
var inst_37460 = (0);
var inst_37461 = (0);
var state_37518__$1 = (function (){var statearr_37555 = state_37518;
(statearr_37555[(10)] = inst_37461);

(statearr_37555[(11)] = inst_37459);

(statearr_37555[(20)] = inst_37458);

(statearr_37555[(27)] = inst_37493);

(statearr_37555[(21)] = inst_37460);

return statearr_37555;
})();
var statearr_37556_37627 = state_37518__$1;
(statearr_37556_37627[(2)] = null);

(statearr_37556_37627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (43))){
var state_37518__$1 = state_37518;
var statearr_37557_37628 = state_37518__$1;
(statearr_37557_37628[(2)] = null);

(statearr_37557_37628[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (29))){
var inst_37502 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
var statearr_37558_37629 = state_37518__$1;
(statearr_37558_37629[(2)] = inst_37502);

(statearr_37558_37629[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (44))){
var inst_37511 = (state_37518[(2)]);
var state_37518__$1 = (function (){var statearr_37559 = state_37518;
(statearr_37559[(28)] = inst_37511);

return statearr_37559;
})();
var statearr_37560_37630 = state_37518__$1;
(statearr_37560_37630[(2)] = null);

(statearr_37560_37630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (6))){
var inst_37450 = (state_37518[(29)]);
var inst_37449 = cljs.core.deref.call(null,cs);
var inst_37450__$1 = cljs.core.keys.call(null,inst_37449);
var inst_37451 = cljs.core.count.call(null,inst_37450__$1);
var inst_37452 = cljs.core.reset_BANG_.call(null,dctr,inst_37451);
var inst_37457 = cljs.core.seq.call(null,inst_37450__$1);
var inst_37458 = inst_37457;
var inst_37459 = null;
var inst_37460 = (0);
var inst_37461 = (0);
var state_37518__$1 = (function (){var statearr_37561 = state_37518;
(statearr_37561[(29)] = inst_37450__$1);

(statearr_37561[(10)] = inst_37461);

(statearr_37561[(11)] = inst_37459);

(statearr_37561[(30)] = inst_37452);

(statearr_37561[(20)] = inst_37458);

(statearr_37561[(21)] = inst_37460);

return statearr_37561;
})();
var statearr_37562_37631 = state_37518__$1;
(statearr_37562_37631[(2)] = null);

(statearr_37562_37631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (28))){
var inst_37477 = (state_37518[(25)]);
var inst_37458 = (state_37518[(20)]);
var inst_37477__$1 = cljs.core.seq.call(null,inst_37458);
var state_37518__$1 = (function (){var statearr_37563 = state_37518;
(statearr_37563[(25)] = inst_37477__$1);

return statearr_37563;
})();
if(inst_37477__$1){
var statearr_37564_37632 = state_37518__$1;
(statearr_37564_37632[(1)] = (33));

} else {
var statearr_37565_37633 = state_37518__$1;
(statearr_37565_37633[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (25))){
var inst_37461 = (state_37518[(10)]);
var inst_37460 = (state_37518[(21)]);
var inst_37463 = (inst_37461 < inst_37460);
var inst_37464 = inst_37463;
var state_37518__$1 = state_37518;
if(cljs.core.truth_(inst_37464)){
var statearr_37566_37634 = state_37518__$1;
(statearr_37566_37634[(1)] = (27));

} else {
var statearr_37567_37635 = state_37518__$1;
(statearr_37567_37635[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (34))){
var state_37518__$1 = state_37518;
var statearr_37568_37636 = state_37518__$1;
(statearr_37568_37636[(2)] = null);

(statearr_37568_37636[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (17))){
var state_37518__$1 = state_37518;
var statearr_37569_37637 = state_37518__$1;
(statearr_37569_37637[(2)] = null);

(statearr_37569_37637[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (3))){
var inst_37516 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37518__$1,inst_37516);
} else {
if((state_val_37519 === (12))){
var inst_37445 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
var statearr_37570_37638 = state_37518__$1;
(statearr_37570_37638[(2)] = inst_37445);

(statearr_37570_37638[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (2))){
var state_37518__$1 = state_37518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37518__$1,(4),ch);
} else {
if((state_val_37519 === (23))){
var state_37518__$1 = state_37518;
var statearr_37571_37639 = state_37518__$1;
(statearr_37571_37639[(2)] = null);

(statearr_37571_37639[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (35))){
var inst_37500 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
var statearr_37572_37640 = state_37518__$1;
(statearr_37572_37640[(2)] = inst_37500);

(statearr_37572_37640[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (19))){
var inst_37419 = (state_37518[(7)]);
var inst_37423 = cljs.core.chunk_first.call(null,inst_37419);
var inst_37424 = cljs.core.chunk_rest.call(null,inst_37419);
var inst_37425 = cljs.core.count.call(null,inst_37423);
var inst_37399 = inst_37424;
var inst_37400 = inst_37423;
var inst_37401 = inst_37425;
var inst_37402 = (0);
var state_37518__$1 = (function (){var statearr_37573 = state_37518;
(statearr_37573[(13)] = inst_37399);

(statearr_37573[(15)] = inst_37402);

(statearr_37573[(16)] = inst_37401);

(statearr_37573[(17)] = inst_37400);

return statearr_37573;
})();
var statearr_37574_37641 = state_37518__$1;
(statearr_37574_37641[(2)] = null);

(statearr_37574_37641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (11))){
var inst_37399 = (state_37518[(13)]);
var inst_37419 = (state_37518[(7)]);
var inst_37419__$1 = cljs.core.seq.call(null,inst_37399);
var state_37518__$1 = (function (){var statearr_37575 = state_37518;
(statearr_37575[(7)] = inst_37419__$1);

return statearr_37575;
})();
if(inst_37419__$1){
var statearr_37576_37642 = state_37518__$1;
(statearr_37576_37642[(1)] = (16));

} else {
var statearr_37577_37643 = state_37518__$1;
(statearr_37577_37643[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (9))){
var inst_37447 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
var statearr_37578_37644 = state_37518__$1;
(statearr_37578_37644[(2)] = inst_37447);

(statearr_37578_37644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (5))){
var inst_37397 = cljs.core.deref.call(null,cs);
var inst_37398 = cljs.core.seq.call(null,inst_37397);
var inst_37399 = inst_37398;
var inst_37400 = null;
var inst_37401 = (0);
var inst_37402 = (0);
var state_37518__$1 = (function (){var statearr_37579 = state_37518;
(statearr_37579[(13)] = inst_37399);

(statearr_37579[(15)] = inst_37402);

(statearr_37579[(16)] = inst_37401);

(statearr_37579[(17)] = inst_37400);

return statearr_37579;
})();
var statearr_37580_37645 = state_37518__$1;
(statearr_37580_37645[(2)] = null);

(statearr_37580_37645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (14))){
var state_37518__$1 = state_37518;
var statearr_37581_37646 = state_37518__$1;
(statearr_37581_37646[(2)] = null);

(statearr_37581_37646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (45))){
var inst_37508 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
var statearr_37582_37647 = state_37518__$1;
(statearr_37582_37647[(2)] = inst_37508);

(statearr_37582_37647[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (26))){
var inst_37450 = (state_37518[(29)]);
var inst_37504 = (state_37518[(2)]);
var inst_37505 = cljs.core.seq.call(null,inst_37450);
var state_37518__$1 = (function (){var statearr_37583 = state_37518;
(statearr_37583[(31)] = inst_37504);

return statearr_37583;
})();
if(inst_37505){
var statearr_37584_37648 = state_37518__$1;
(statearr_37584_37648[(1)] = (42));

} else {
var statearr_37585_37649 = state_37518__$1;
(statearr_37585_37649[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (16))){
var inst_37419 = (state_37518[(7)]);
var inst_37421 = cljs.core.chunked_seq_QMARK_.call(null,inst_37419);
var state_37518__$1 = state_37518;
if(inst_37421){
var statearr_37586_37650 = state_37518__$1;
(statearr_37586_37650[(1)] = (19));

} else {
var statearr_37587_37651 = state_37518__$1;
(statearr_37587_37651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (38))){
var inst_37497 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
var statearr_37588_37652 = state_37518__$1;
(statearr_37588_37652[(2)] = inst_37497);

(statearr_37588_37652[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (30))){
var state_37518__$1 = state_37518;
var statearr_37589_37653 = state_37518__$1;
(statearr_37589_37653[(2)] = null);

(statearr_37589_37653[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (10))){
var inst_37402 = (state_37518[(15)]);
var inst_37400 = (state_37518[(17)]);
var inst_37408 = cljs.core._nth.call(null,inst_37400,inst_37402);
var inst_37409 = cljs.core.nth.call(null,inst_37408,(0),null);
var inst_37410 = cljs.core.nth.call(null,inst_37408,(1),null);
var state_37518__$1 = (function (){var statearr_37590 = state_37518;
(statearr_37590[(26)] = inst_37409);

return statearr_37590;
})();
if(cljs.core.truth_(inst_37410)){
var statearr_37591_37654 = state_37518__$1;
(statearr_37591_37654[(1)] = (13));

} else {
var statearr_37592_37655 = state_37518__$1;
(statearr_37592_37655[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (18))){
var inst_37443 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
var statearr_37593_37656 = state_37518__$1;
(statearr_37593_37656[(2)] = inst_37443);

(statearr_37593_37656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (42))){
var state_37518__$1 = state_37518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37518__$1,(45),dchan);
} else {
if((state_val_37519 === (37))){
var inst_37390 = (state_37518[(9)]);
var inst_37486 = (state_37518[(23)]);
var inst_37477 = (state_37518[(25)]);
var inst_37486__$1 = cljs.core.first.call(null,inst_37477);
var inst_37487 = cljs.core.async.put_BANG_.call(null,inst_37486__$1,inst_37390,done);
var state_37518__$1 = (function (){var statearr_37594 = state_37518;
(statearr_37594[(23)] = inst_37486__$1);

return statearr_37594;
})();
if(cljs.core.truth_(inst_37487)){
var statearr_37595_37657 = state_37518__$1;
(statearr_37595_37657[(1)] = (39));

} else {
var statearr_37596_37658 = state_37518__$1;
(statearr_37596_37658[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (8))){
var inst_37402 = (state_37518[(15)]);
var inst_37401 = (state_37518[(16)]);
var inst_37404 = (inst_37402 < inst_37401);
var inst_37405 = inst_37404;
var state_37518__$1 = state_37518;
if(cljs.core.truth_(inst_37405)){
var statearr_37597_37659 = state_37518__$1;
(statearr_37597_37659[(1)] = (10));

} else {
var statearr_37598_37660 = state_37518__$1;
(statearr_37598_37660[(1)] = (11));

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
});})(c__20906__auto___37606,cs,m,dchan,dctr,done))
;
return ((function (switch__20794__auto__,c__20906__auto___37606,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20795__auto__ = null;
var cljs$core$async$mult_$_state_machine__20795__auto____0 = (function (){
var statearr_37602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37602[(0)] = cljs$core$async$mult_$_state_machine__20795__auto__);

(statearr_37602[(1)] = (1));

return statearr_37602;
});
var cljs$core$async$mult_$_state_machine__20795__auto____1 = (function (state_37518){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_37518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e37603){if((e37603 instanceof Object)){
var ex__20798__auto__ = e37603;
var statearr_37604_37661 = state_37518;
(statearr_37604_37661[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37662 = state_37518;
state_37518 = G__37662;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20795__auto__ = function(state_37518){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20795__auto____1.call(this,state_37518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20795__auto____0;
cljs$core$async$mult_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20795__auto____1;
return cljs$core$async$mult_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___37606,cs,m,dchan,dctr,done))
})();
var state__20908__auto__ = (function (){var statearr_37605 = f__20907__auto__.call(null);
(statearr_37605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___37606);

return statearr_37605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___37606,cs,m,dchan,dctr,done))
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
var args37663 = [];
var len__19809__auto___37666 = arguments.length;
var i__19810__auto___37667 = (0);
while(true){
if((i__19810__auto___37667 < len__19809__auto___37666)){
args37663.push((arguments[i__19810__auto___37667]));

var G__37668 = (i__19810__auto___37667 + (1));
i__19810__auto___37667 = G__37668;
continue;
} else {
}
break;
}

var G__37665 = args37663.length;
switch (G__37665) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37663.length)].join('')));

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
var x__19402__auto__ = (((m == null))?null:m);
var m__19403__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,m,ch);
} else {
var m__19403__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,m,ch);
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
var x__19402__auto__ = (((m == null))?null:m);
var m__19403__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,m,ch);
} else {
var m__19403__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,m,ch);
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
var x__19402__auto__ = (((m == null))?null:m);
var m__19403__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,m);
} else {
var m__19403__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,m);
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
var x__19402__auto__ = (((m == null))?null:m);
var m__19403__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,m,state_map);
} else {
var m__19403__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,m,state_map);
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
var x__19402__auto__ = (((m == null))?null:m);
var m__19403__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,m,mode);
} else {
var m__19403__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19816__auto__ = [];
var len__19809__auto___37680 = arguments.length;
var i__19810__auto___37681 = (0);
while(true){
if((i__19810__auto___37681 < len__19809__auto___37680)){
args__19816__auto__.push((arguments[i__19810__auto___37681]));

var G__37682 = (i__19810__auto___37681 + (1));
i__19810__auto___37681 = G__37682;
continue;
} else {
}
break;
}

var argseq__19817__auto__ = ((((3) < args__19816__auto__.length))?(new cljs.core.IndexedSeq(args__19816__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37674){
var map__37675 = p__37674;
var map__37675__$1 = ((((!((map__37675 == null)))?((((map__37675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37675):map__37675);
var opts = map__37675__$1;
var statearr_37677_37683 = state;
(statearr_37677_37683[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__37675,map__37675__$1,opts){
return (function (val){
var statearr_37678_37684 = state;
(statearr_37678_37684[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37675,map__37675__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_37679_37685 = state;
(statearr_37679_37685[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37670){
var G__37671 = cljs.core.first.call(null,seq37670);
var seq37670__$1 = cljs.core.next.call(null,seq37670);
var G__37672 = cljs.core.first.call(null,seq37670__$1);
var seq37670__$2 = cljs.core.next.call(null,seq37670__$1);
var G__37673 = cljs.core.first.call(null,seq37670__$2);
var seq37670__$3 = cljs.core.next.call(null,seq37670__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37671,G__37672,G__37673,seq37670__$3);
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
if(typeof cljs.core.async.t_cljs$core$async37849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37849 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37850){
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
this.meta37850 = meta37850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37851,meta37850__$1){
var self__ = this;
var _37851__$1 = this;
return (new cljs.core.async.t_cljs$core$async37849(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37850__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37851){
var self__ = this;
var _37851__$1 = this;
return self__.meta37850;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37849.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37849.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async37849.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37849.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37849.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37849.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37849.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async37849.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37850","meta37850",518795467,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37849";

cljs.core.async.t_cljs$core$async37849.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19345__auto__,writer__19346__auto__,opt__19347__auto__){
return cljs.core._write.call(null,writer__19346__auto__,"cljs.core.async/t_cljs$core$async37849");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37849 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37849(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37850){
return (new cljs.core.async.t_cljs$core$async37849(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37850));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37849(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20906__auto___38012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37949){
var state_val_37950 = (state_37949[(1)]);
if((state_val_37950 === (7))){
var inst_37867 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
var statearr_37951_38013 = state_37949__$1;
(statearr_37951_38013[(2)] = inst_37867);

(statearr_37951_38013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (20))){
var inst_37879 = (state_37949[(7)]);
var state_37949__$1 = state_37949;
var statearr_37952_38014 = state_37949__$1;
(statearr_37952_38014[(2)] = inst_37879);

(statearr_37952_38014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (27))){
var state_37949__$1 = state_37949;
var statearr_37953_38015 = state_37949__$1;
(statearr_37953_38015[(2)] = null);

(statearr_37953_38015[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (1))){
var inst_37855 = (state_37949[(8)]);
var inst_37855__$1 = calc_state.call(null);
var inst_37857 = (inst_37855__$1 == null);
var inst_37858 = cljs.core.not.call(null,inst_37857);
var state_37949__$1 = (function (){var statearr_37954 = state_37949;
(statearr_37954[(8)] = inst_37855__$1);

return statearr_37954;
})();
if(inst_37858){
var statearr_37955_38016 = state_37949__$1;
(statearr_37955_38016[(1)] = (2));

} else {
var statearr_37956_38017 = state_37949__$1;
(statearr_37956_38017[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (24))){
var inst_37909 = (state_37949[(9)]);
var inst_37902 = (state_37949[(10)]);
var inst_37923 = (state_37949[(11)]);
var inst_37923__$1 = inst_37902.call(null,inst_37909);
var state_37949__$1 = (function (){var statearr_37957 = state_37949;
(statearr_37957[(11)] = inst_37923__$1);

return statearr_37957;
})();
if(cljs.core.truth_(inst_37923__$1)){
var statearr_37958_38018 = state_37949__$1;
(statearr_37958_38018[(1)] = (29));

} else {
var statearr_37959_38019 = state_37949__$1;
(statearr_37959_38019[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (4))){
var inst_37870 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
if(cljs.core.truth_(inst_37870)){
var statearr_37960_38020 = state_37949__$1;
(statearr_37960_38020[(1)] = (8));

} else {
var statearr_37961_38021 = state_37949__$1;
(statearr_37961_38021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (15))){
var inst_37896 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
if(cljs.core.truth_(inst_37896)){
var statearr_37962_38022 = state_37949__$1;
(statearr_37962_38022[(1)] = (19));

} else {
var statearr_37963_38023 = state_37949__$1;
(statearr_37963_38023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (21))){
var inst_37901 = (state_37949[(12)]);
var inst_37901__$1 = (state_37949[(2)]);
var inst_37902 = cljs.core.get.call(null,inst_37901__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37903 = cljs.core.get.call(null,inst_37901__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37904 = cljs.core.get.call(null,inst_37901__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37949__$1 = (function (){var statearr_37964 = state_37949;
(statearr_37964[(10)] = inst_37902);

(statearr_37964[(12)] = inst_37901__$1);

(statearr_37964[(13)] = inst_37903);

return statearr_37964;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37949__$1,(22),inst_37904);
} else {
if((state_val_37950 === (31))){
var inst_37931 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
if(cljs.core.truth_(inst_37931)){
var statearr_37965_38024 = state_37949__$1;
(statearr_37965_38024[(1)] = (32));

} else {
var statearr_37966_38025 = state_37949__$1;
(statearr_37966_38025[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (32))){
var inst_37908 = (state_37949[(14)]);
var state_37949__$1 = state_37949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37949__$1,(35),out,inst_37908);
} else {
if((state_val_37950 === (33))){
var inst_37901 = (state_37949[(12)]);
var inst_37879 = inst_37901;
var state_37949__$1 = (function (){var statearr_37967 = state_37949;
(statearr_37967[(7)] = inst_37879);

return statearr_37967;
})();
var statearr_37968_38026 = state_37949__$1;
(statearr_37968_38026[(2)] = null);

(statearr_37968_38026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (13))){
var inst_37879 = (state_37949[(7)]);
var inst_37886 = inst_37879.cljs$lang$protocol_mask$partition0$;
var inst_37887 = (inst_37886 & (64));
var inst_37888 = inst_37879.cljs$core$ISeq$;
var inst_37889 = (inst_37887) || (inst_37888);
var state_37949__$1 = state_37949;
if(cljs.core.truth_(inst_37889)){
var statearr_37969_38027 = state_37949__$1;
(statearr_37969_38027[(1)] = (16));

} else {
var statearr_37970_38028 = state_37949__$1;
(statearr_37970_38028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (22))){
var inst_37909 = (state_37949[(9)]);
var inst_37908 = (state_37949[(14)]);
var inst_37907 = (state_37949[(2)]);
var inst_37908__$1 = cljs.core.nth.call(null,inst_37907,(0),null);
var inst_37909__$1 = cljs.core.nth.call(null,inst_37907,(1),null);
var inst_37910 = (inst_37908__$1 == null);
var inst_37911 = cljs.core._EQ_.call(null,inst_37909__$1,change);
var inst_37912 = (inst_37910) || (inst_37911);
var state_37949__$1 = (function (){var statearr_37971 = state_37949;
(statearr_37971[(9)] = inst_37909__$1);

(statearr_37971[(14)] = inst_37908__$1);

return statearr_37971;
})();
if(cljs.core.truth_(inst_37912)){
var statearr_37972_38029 = state_37949__$1;
(statearr_37972_38029[(1)] = (23));

} else {
var statearr_37973_38030 = state_37949__$1;
(statearr_37973_38030[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (36))){
var inst_37901 = (state_37949[(12)]);
var inst_37879 = inst_37901;
var state_37949__$1 = (function (){var statearr_37974 = state_37949;
(statearr_37974[(7)] = inst_37879);

return statearr_37974;
})();
var statearr_37975_38031 = state_37949__$1;
(statearr_37975_38031[(2)] = null);

(statearr_37975_38031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (29))){
var inst_37923 = (state_37949[(11)]);
var state_37949__$1 = state_37949;
var statearr_37976_38032 = state_37949__$1;
(statearr_37976_38032[(2)] = inst_37923);

(statearr_37976_38032[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (6))){
var state_37949__$1 = state_37949;
var statearr_37977_38033 = state_37949__$1;
(statearr_37977_38033[(2)] = false);

(statearr_37977_38033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (28))){
var inst_37919 = (state_37949[(2)]);
var inst_37920 = calc_state.call(null);
var inst_37879 = inst_37920;
var state_37949__$1 = (function (){var statearr_37978 = state_37949;
(statearr_37978[(15)] = inst_37919);

(statearr_37978[(7)] = inst_37879);

return statearr_37978;
})();
var statearr_37979_38034 = state_37949__$1;
(statearr_37979_38034[(2)] = null);

(statearr_37979_38034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (25))){
var inst_37945 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
var statearr_37980_38035 = state_37949__$1;
(statearr_37980_38035[(2)] = inst_37945);

(statearr_37980_38035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (34))){
var inst_37943 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
var statearr_37981_38036 = state_37949__$1;
(statearr_37981_38036[(2)] = inst_37943);

(statearr_37981_38036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (17))){
var state_37949__$1 = state_37949;
var statearr_37982_38037 = state_37949__$1;
(statearr_37982_38037[(2)] = false);

(statearr_37982_38037[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (3))){
var state_37949__$1 = state_37949;
var statearr_37983_38038 = state_37949__$1;
(statearr_37983_38038[(2)] = false);

(statearr_37983_38038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (12))){
var inst_37947 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37949__$1,inst_37947);
} else {
if((state_val_37950 === (2))){
var inst_37855 = (state_37949[(8)]);
var inst_37860 = inst_37855.cljs$lang$protocol_mask$partition0$;
var inst_37861 = (inst_37860 & (64));
var inst_37862 = inst_37855.cljs$core$ISeq$;
var inst_37863 = (inst_37861) || (inst_37862);
var state_37949__$1 = state_37949;
if(cljs.core.truth_(inst_37863)){
var statearr_37984_38039 = state_37949__$1;
(statearr_37984_38039[(1)] = (5));

} else {
var statearr_37985_38040 = state_37949__$1;
(statearr_37985_38040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (23))){
var inst_37908 = (state_37949[(14)]);
var inst_37914 = (inst_37908 == null);
var state_37949__$1 = state_37949;
if(cljs.core.truth_(inst_37914)){
var statearr_37986_38041 = state_37949__$1;
(statearr_37986_38041[(1)] = (26));

} else {
var statearr_37987_38042 = state_37949__$1;
(statearr_37987_38042[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (35))){
var inst_37934 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
if(cljs.core.truth_(inst_37934)){
var statearr_37988_38043 = state_37949__$1;
(statearr_37988_38043[(1)] = (36));

} else {
var statearr_37989_38044 = state_37949__$1;
(statearr_37989_38044[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (19))){
var inst_37879 = (state_37949[(7)]);
var inst_37898 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37879);
var state_37949__$1 = state_37949;
var statearr_37990_38045 = state_37949__$1;
(statearr_37990_38045[(2)] = inst_37898);

(statearr_37990_38045[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (11))){
var inst_37879 = (state_37949[(7)]);
var inst_37883 = (inst_37879 == null);
var inst_37884 = cljs.core.not.call(null,inst_37883);
var state_37949__$1 = state_37949;
if(inst_37884){
var statearr_37991_38046 = state_37949__$1;
(statearr_37991_38046[(1)] = (13));

} else {
var statearr_37992_38047 = state_37949__$1;
(statearr_37992_38047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (9))){
var inst_37855 = (state_37949[(8)]);
var state_37949__$1 = state_37949;
var statearr_37993_38048 = state_37949__$1;
(statearr_37993_38048[(2)] = inst_37855);

(statearr_37993_38048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (5))){
var state_37949__$1 = state_37949;
var statearr_37994_38049 = state_37949__$1;
(statearr_37994_38049[(2)] = true);

(statearr_37994_38049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (14))){
var state_37949__$1 = state_37949;
var statearr_37995_38050 = state_37949__$1;
(statearr_37995_38050[(2)] = false);

(statearr_37995_38050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (26))){
var inst_37909 = (state_37949[(9)]);
var inst_37916 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37909);
var state_37949__$1 = state_37949;
var statearr_37996_38051 = state_37949__$1;
(statearr_37996_38051[(2)] = inst_37916);

(statearr_37996_38051[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (16))){
var state_37949__$1 = state_37949;
var statearr_37997_38052 = state_37949__$1;
(statearr_37997_38052[(2)] = true);

(statearr_37997_38052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (38))){
var inst_37939 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
var statearr_37998_38053 = state_37949__$1;
(statearr_37998_38053[(2)] = inst_37939);

(statearr_37998_38053[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (30))){
var inst_37909 = (state_37949[(9)]);
var inst_37902 = (state_37949[(10)]);
var inst_37903 = (state_37949[(13)]);
var inst_37926 = cljs.core.empty_QMARK_.call(null,inst_37902);
var inst_37927 = inst_37903.call(null,inst_37909);
var inst_37928 = cljs.core.not.call(null,inst_37927);
var inst_37929 = (inst_37926) && (inst_37928);
var state_37949__$1 = state_37949;
var statearr_37999_38054 = state_37949__$1;
(statearr_37999_38054[(2)] = inst_37929);

(statearr_37999_38054[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (10))){
var inst_37855 = (state_37949[(8)]);
var inst_37875 = (state_37949[(2)]);
var inst_37876 = cljs.core.get.call(null,inst_37875,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37877 = cljs.core.get.call(null,inst_37875,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37878 = cljs.core.get.call(null,inst_37875,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37879 = inst_37855;
var state_37949__$1 = (function (){var statearr_38000 = state_37949;
(statearr_38000[(16)] = inst_37877);

(statearr_38000[(7)] = inst_37879);

(statearr_38000[(17)] = inst_37876);

(statearr_38000[(18)] = inst_37878);

return statearr_38000;
})();
var statearr_38001_38055 = state_37949__$1;
(statearr_38001_38055[(2)] = null);

(statearr_38001_38055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (18))){
var inst_37893 = (state_37949[(2)]);
var state_37949__$1 = state_37949;
var statearr_38002_38056 = state_37949__$1;
(statearr_38002_38056[(2)] = inst_37893);

(statearr_38002_38056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (37))){
var state_37949__$1 = state_37949;
var statearr_38003_38057 = state_37949__$1;
(statearr_38003_38057[(2)] = null);

(statearr_38003_38057[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37950 === (8))){
var inst_37855 = (state_37949[(8)]);
var inst_37872 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37855);
var state_37949__$1 = state_37949;
var statearr_38004_38058 = state_37949__$1;
(statearr_38004_38058[(2)] = inst_37872);

(statearr_38004_38058[(1)] = (10));


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
});})(c__20906__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20794__auto__,c__20906__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20795__auto__ = null;
var cljs$core$async$mix_$_state_machine__20795__auto____0 = (function (){
var statearr_38008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38008[(0)] = cljs$core$async$mix_$_state_machine__20795__auto__);

(statearr_38008[(1)] = (1));

return statearr_38008;
});
var cljs$core$async$mix_$_state_machine__20795__auto____1 = (function (state_37949){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_37949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e38009){if((e38009 instanceof Object)){
var ex__20798__auto__ = e38009;
var statearr_38010_38059 = state_37949;
(statearr_38010_38059[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38060 = state_37949;
state_37949 = G__38060;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20795__auto__ = function(state_37949){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20795__auto____1.call(this,state_37949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20795__auto____0;
cljs$core$async$mix_$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20795__auto____1;
return cljs$core$async$mix_$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20908__auto__ = (function (){var statearr_38011 = f__20907__auto__.call(null);
(statearr_38011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___38012);

return statearr_38011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19402__auto__ = (((p == null))?null:p);
var m__19403__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19403__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19402__auto__ = (((p == null))?null:p);
var m__19403__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,p,v,ch);
} else {
var m__19403__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args38061 = [];
var len__19809__auto___38064 = arguments.length;
var i__19810__auto___38065 = (0);
while(true){
if((i__19810__auto___38065 < len__19809__auto___38064)){
args38061.push((arguments[i__19810__auto___38065]));

var G__38066 = (i__19810__auto___38065 + (1));
i__19810__auto___38065 = G__38066;
continue;
} else {
}
break;
}

var G__38063 = args38061.length;
switch (G__38063) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38061.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19402__auto__ = (((p == null))?null:p);
var m__19403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,p);
} else {
var m__19403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,p);
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
var x__19402__auto__ = (((p == null))?null:p);
var m__19403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19402__auto__)]);
if(!((m__19403__auto__ == null))){
return m__19403__auto__.call(null,p,v);
} else {
var m__19403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19403__auto____$1 == null))){
return m__19403__auto____$1.call(null,p,v);
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
var args38069 = [];
var len__19809__auto___38194 = arguments.length;
var i__19810__auto___38195 = (0);
while(true){
if((i__19810__auto___38195 < len__19809__auto___38194)){
args38069.push((arguments[i__19810__auto___38195]));

var G__38196 = (i__19810__auto___38195 + (1));
i__19810__auto___38195 = G__38196;
continue;
} else {
}
break;
}

var G__38071 = args38069.length;
switch (G__38071) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38069.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18739__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18739__auto__)){
return or__18739__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18739__auto__,mults){
return (function (p1__38068_SHARP_){
if(cljs.core.truth_(p1__38068_SHARP_.call(null,topic))){
return p1__38068_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38068_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18739__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38072 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38073){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38073 = meta38073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38074,meta38073__$1){
var self__ = this;
var _38074__$1 = this;
return (new cljs.core.async.t_cljs$core$async38072(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38073__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38074){
var self__ = this;
var _38074__$1 = this;
return self__.meta38073;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38072.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38072.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38072.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async38072.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38072.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async38072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38072.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38073","meta38073",1311552090,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38072";

cljs.core.async.t_cljs$core$async38072.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19345__auto__,writer__19346__auto__,opt__19347__auto__){
return cljs.core._write.call(null,writer__19346__auto__,"cljs.core.async/t_cljs$core$async38072");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38072 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38073){
return (new cljs.core.async.t_cljs$core$async38072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38073));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38072(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20906__auto___38198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___38198,mults,ensure_mult,p){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___38198,mults,ensure_mult,p){
return (function (state_38146){
var state_val_38147 = (state_38146[(1)]);
if((state_val_38147 === (7))){
var inst_38142 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38148_38199 = state_38146__$1;
(statearr_38148_38199[(2)] = inst_38142);

(statearr_38148_38199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (20))){
var state_38146__$1 = state_38146;
var statearr_38149_38200 = state_38146__$1;
(statearr_38149_38200[(2)] = null);

(statearr_38149_38200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (1))){
var state_38146__$1 = state_38146;
var statearr_38150_38201 = state_38146__$1;
(statearr_38150_38201[(2)] = null);

(statearr_38150_38201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (24))){
var inst_38125 = (state_38146[(7)]);
var inst_38134 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38125);
var state_38146__$1 = state_38146;
var statearr_38151_38202 = state_38146__$1;
(statearr_38151_38202[(2)] = inst_38134);

(statearr_38151_38202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (4))){
var inst_38077 = (state_38146[(8)]);
var inst_38077__$1 = (state_38146[(2)]);
var inst_38078 = (inst_38077__$1 == null);
var state_38146__$1 = (function (){var statearr_38152 = state_38146;
(statearr_38152[(8)] = inst_38077__$1);

return statearr_38152;
})();
if(cljs.core.truth_(inst_38078)){
var statearr_38153_38203 = state_38146__$1;
(statearr_38153_38203[(1)] = (5));

} else {
var statearr_38154_38204 = state_38146__$1;
(statearr_38154_38204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (15))){
var inst_38119 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38155_38205 = state_38146__$1;
(statearr_38155_38205[(2)] = inst_38119);

(statearr_38155_38205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (21))){
var inst_38139 = (state_38146[(2)]);
var state_38146__$1 = (function (){var statearr_38156 = state_38146;
(statearr_38156[(9)] = inst_38139);

return statearr_38156;
})();
var statearr_38157_38206 = state_38146__$1;
(statearr_38157_38206[(2)] = null);

(statearr_38157_38206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (13))){
var inst_38101 = (state_38146[(10)]);
var inst_38103 = cljs.core.chunked_seq_QMARK_.call(null,inst_38101);
var state_38146__$1 = state_38146;
if(inst_38103){
var statearr_38158_38207 = state_38146__$1;
(statearr_38158_38207[(1)] = (16));

} else {
var statearr_38159_38208 = state_38146__$1;
(statearr_38159_38208[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (22))){
var inst_38131 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
if(cljs.core.truth_(inst_38131)){
var statearr_38160_38209 = state_38146__$1;
(statearr_38160_38209[(1)] = (23));

} else {
var statearr_38161_38210 = state_38146__$1;
(statearr_38161_38210[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (6))){
var inst_38127 = (state_38146[(11)]);
var inst_38125 = (state_38146[(7)]);
var inst_38077 = (state_38146[(8)]);
var inst_38125__$1 = topic_fn.call(null,inst_38077);
var inst_38126 = cljs.core.deref.call(null,mults);
var inst_38127__$1 = cljs.core.get.call(null,inst_38126,inst_38125__$1);
var state_38146__$1 = (function (){var statearr_38162 = state_38146;
(statearr_38162[(11)] = inst_38127__$1);

(statearr_38162[(7)] = inst_38125__$1);

return statearr_38162;
})();
if(cljs.core.truth_(inst_38127__$1)){
var statearr_38163_38211 = state_38146__$1;
(statearr_38163_38211[(1)] = (19));

} else {
var statearr_38164_38212 = state_38146__$1;
(statearr_38164_38212[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (25))){
var inst_38136 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38165_38213 = state_38146__$1;
(statearr_38165_38213[(2)] = inst_38136);

(statearr_38165_38213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (17))){
var inst_38101 = (state_38146[(10)]);
var inst_38110 = cljs.core.first.call(null,inst_38101);
var inst_38111 = cljs.core.async.muxch_STAR_.call(null,inst_38110);
var inst_38112 = cljs.core.async.close_BANG_.call(null,inst_38111);
var inst_38113 = cljs.core.next.call(null,inst_38101);
var inst_38087 = inst_38113;
var inst_38088 = null;
var inst_38089 = (0);
var inst_38090 = (0);
var state_38146__$1 = (function (){var statearr_38166 = state_38146;
(statearr_38166[(12)] = inst_38087);

(statearr_38166[(13)] = inst_38090);

(statearr_38166[(14)] = inst_38112);

(statearr_38166[(15)] = inst_38089);

(statearr_38166[(16)] = inst_38088);

return statearr_38166;
})();
var statearr_38167_38214 = state_38146__$1;
(statearr_38167_38214[(2)] = null);

(statearr_38167_38214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (3))){
var inst_38144 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38146__$1,inst_38144);
} else {
if((state_val_38147 === (12))){
var inst_38121 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38168_38215 = state_38146__$1;
(statearr_38168_38215[(2)] = inst_38121);

(statearr_38168_38215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (2))){
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38146__$1,(4),ch);
} else {
if((state_val_38147 === (23))){
var state_38146__$1 = state_38146;
var statearr_38169_38216 = state_38146__$1;
(statearr_38169_38216[(2)] = null);

(statearr_38169_38216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (19))){
var inst_38127 = (state_38146[(11)]);
var inst_38077 = (state_38146[(8)]);
var inst_38129 = cljs.core.async.muxch_STAR_.call(null,inst_38127);
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38146__$1,(22),inst_38129,inst_38077);
} else {
if((state_val_38147 === (11))){
var inst_38087 = (state_38146[(12)]);
var inst_38101 = (state_38146[(10)]);
var inst_38101__$1 = cljs.core.seq.call(null,inst_38087);
var state_38146__$1 = (function (){var statearr_38170 = state_38146;
(statearr_38170[(10)] = inst_38101__$1);

return statearr_38170;
})();
if(inst_38101__$1){
var statearr_38171_38217 = state_38146__$1;
(statearr_38171_38217[(1)] = (13));

} else {
var statearr_38172_38218 = state_38146__$1;
(statearr_38172_38218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (9))){
var inst_38123 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38173_38219 = state_38146__$1;
(statearr_38173_38219[(2)] = inst_38123);

(statearr_38173_38219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (5))){
var inst_38084 = cljs.core.deref.call(null,mults);
var inst_38085 = cljs.core.vals.call(null,inst_38084);
var inst_38086 = cljs.core.seq.call(null,inst_38085);
var inst_38087 = inst_38086;
var inst_38088 = null;
var inst_38089 = (0);
var inst_38090 = (0);
var state_38146__$1 = (function (){var statearr_38174 = state_38146;
(statearr_38174[(12)] = inst_38087);

(statearr_38174[(13)] = inst_38090);

(statearr_38174[(15)] = inst_38089);

(statearr_38174[(16)] = inst_38088);

return statearr_38174;
})();
var statearr_38175_38220 = state_38146__$1;
(statearr_38175_38220[(2)] = null);

(statearr_38175_38220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (14))){
var state_38146__$1 = state_38146;
var statearr_38179_38221 = state_38146__$1;
(statearr_38179_38221[(2)] = null);

(statearr_38179_38221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (16))){
var inst_38101 = (state_38146[(10)]);
var inst_38105 = cljs.core.chunk_first.call(null,inst_38101);
var inst_38106 = cljs.core.chunk_rest.call(null,inst_38101);
var inst_38107 = cljs.core.count.call(null,inst_38105);
var inst_38087 = inst_38106;
var inst_38088 = inst_38105;
var inst_38089 = inst_38107;
var inst_38090 = (0);
var state_38146__$1 = (function (){var statearr_38180 = state_38146;
(statearr_38180[(12)] = inst_38087);

(statearr_38180[(13)] = inst_38090);

(statearr_38180[(15)] = inst_38089);

(statearr_38180[(16)] = inst_38088);

return statearr_38180;
})();
var statearr_38181_38222 = state_38146__$1;
(statearr_38181_38222[(2)] = null);

(statearr_38181_38222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (10))){
var inst_38087 = (state_38146[(12)]);
var inst_38090 = (state_38146[(13)]);
var inst_38089 = (state_38146[(15)]);
var inst_38088 = (state_38146[(16)]);
var inst_38095 = cljs.core._nth.call(null,inst_38088,inst_38090);
var inst_38096 = cljs.core.async.muxch_STAR_.call(null,inst_38095);
var inst_38097 = cljs.core.async.close_BANG_.call(null,inst_38096);
var inst_38098 = (inst_38090 + (1));
var tmp38176 = inst_38087;
var tmp38177 = inst_38089;
var tmp38178 = inst_38088;
var inst_38087__$1 = tmp38176;
var inst_38088__$1 = tmp38178;
var inst_38089__$1 = tmp38177;
var inst_38090__$1 = inst_38098;
var state_38146__$1 = (function (){var statearr_38182 = state_38146;
(statearr_38182[(12)] = inst_38087__$1);

(statearr_38182[(13)] = inst_38090__$1);

(statearr_38182[(17)] = inst_38097);

(statearr_38182[(15)] = inst_38089__$1);

(statearr_38182[(16)] = inst_38088__$1);

return statearr_38182;
})();
var statearr_38183_38223 = state_38146__$1;
(statearr_38183_38223[(2)] = null);

(statearr_38183_38223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (18))){
var inst_38116 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38184_38224 = state_38146__$1;
(statearr_38184_38224[(2)] = inst_38116);

(statearr_38184_38224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (8))){
var inst_38090 = (state_38146[(13)]);
var inst_38089 = (state_38146[(15)]);
var inst_38092 = (inst_38090 < inst_38089);
var inst_38093 = inst_38092;
var state_38146__$1 = state_38146;
if(cljs.core.truth_(inst_38093)){
var statearr_38185_38225 = state_38146__$1;
(statearr_38185_38225[(1)] = (10));

} else {
var statearr_38186_38226 = state_38146__$1;
(statearr_38186_38226[(1)] = (11));

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
});})(c__20906__auto___38198,mults,ensure_mult,p))
;
return ((function (switch__20794__auto__,c__20906__auto___38198,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20795__auto__ = null;
var cljs$core$async$state_machine__20795__auto____0 = (function (){
var statearr_38190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38190[(0)] = cljs$core$async$state_machine__20795__auto__);

(statearr_38190[(1)] = (1));

return statearr_38190;
});
var cljs$core$async$state_machine__20795__auto____1 = (function (state_38146){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_38146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e38191){if((e38191 instanceof Object)){
var ex__20798__auto__ = e38191;
var statearr_38192_38227 = state_38146;
(statearr_38192_38227[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38228 = state_38146;
state_38146 = G__38228;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$state_machine__20795__auto__ = function(state_38146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20795__auto____1.call(this,state_38146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20795__auto____0;
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20795__auto____1;
return cljs$core$async$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___38198,mults,ensure_mult,p))
})();
var state__20908__auto__ = (function (){var statearr_38193 = f__20907__auto__.call(null);
(statearr_38193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___38198);

return statearr_38193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___38198,mults,ensure_mult,p))
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
var args38229 = [];
var len__19809__auto___38232 = arguments.length;
var i__19810__auto___38233 = (0);
while(true){
if((i__19810__auto___38233 < len__19809__auto___38232)){
args38229.push((arguments[i__19810__auto___38233]));

var G__38234 = (i__19810__auto___38233 + (1));
i__19810__auto___38233 = G__38234;
continue;
} else {
}
break;
}

var G__38231 = args38229.length;
switch (G__38231) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38229.length)].join('')));

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
var args38236 = [];
var len__19809__auto___38239 = arguments.length;
var i__19810__auto___38240 = (0);
while(true){
if((i__19810__auto___38240 < len__19809__auto___38239)){
args38236.push((arguments[i__19810__auto___38240]));

var G__38241 = (i__19810__auto___38240 + (1));
i__19810__auto___38240 = G__38241;
continue;
} else {
}
break;
}

var G__38238 = args38236.length;
switch (G__38238) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38236.length)].join('')));

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
var args38243 = [];
var len__19809__auto___38314 = arguments.length;
var i__19810__auto___38315 = (0);
while(true){
if((i__19810__auto___38315 < len__19809__auto___38314)){
args38243.push((arguments[i__19810__auto___38315]));

var G__38316 = (i__19810__auto___38315 + (1));
i__19810__auto___38315 = G__38316;
continue;
} else {
}
break;
}

var G__38245 = args38243.length;
switch (G__38245) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38243.length)].join('')));

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
var c__20906__auto___38318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___38318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___38318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38284){
var state_val_38285 = (state_38284[(1)]);
if((state_val_38285 === (7))){
var state_38284__$1 = state_38284;
var statearr_38286_38319 = state_38284__$1;
(statearr_38286_38319[(2)] = null);

(statearr_38286_38319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (1))){
var state_38284__$1 = state_38284;
var statearr_38287_38320 = state_38284__$1;
(statearr_38287_38320[(2)] = null);

(statearr_38287_38320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (4))){
var inst_38248 = (state_38284[(7)]);
var inst_38250 = (inst_38248 < cnt);
var state_38284__$1 = state_38284;
if(cljs.core.truth_(inst_38250)){
var statearr_38288_38321 = state_38284__$1;
(statearr_38288_38321[(1)] = (6));

} else {
var statearr_38289_38322 = state_38284__$1;
(statearr_38289_38322[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (15))){
var inst_38280 = (state_38284[(2)]);
var state_38284__$1 = state_38284;
var statearr_38290_38323 = state_38284__$1;
(statearr_38290_38323[(2)] = inst_38280);

(statearr_38290_38323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (13))){
var inst_38273 = cljs.core.async.close_BANG_.call(null,out);
var state_38284__$1 = state_38284;
var statearr_38291_38324 = state_38284__$1;
(statearr_38291_38324[(2)] = inst_38273);

(statearr_38291_38324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (6))){
var state_38284__$1 = state_38284;
var statearr_38292_38325 = state_38284__$1;
(statearr_38292_38325[(2)] = null);

(statearr_38292_38325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (3))){
var inst_38282 = (state_38284[(2)]);
var state_38284__$1 = state_38284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38284__$1,inst_38282);
} else {
if((state_val_38285 === (12))){
var inst_38270 = (state_38284[(8)]);
var inst_38270__$1 = (state_38284[(2)]);
var inst_38271 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38270__$1);
var state_38284__$1 = (function (){var statearr_38293 = state_38284;
(statearr_38293[(8)] = inst_38270__$1);

return statearr_38293;
})();
if(cljs.core.truth_(inst_38271)){
var statearr_38294_38326 = state_38284__$1;
(statearr_38294_38326[(1)] = (13));

} else {
var statearr_38295_38327 = state_38284__$1;
(statearr_38295_38327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (2))){
var inst_38247 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38248 = (0);
var state_38284__$1 = (function (){var statearr_38296 = state_38284;
(statearr_38296[(9)] = inst_38247);

(statearr_38296[(7)] = inst_38248);

return statearr_38296;
})();
var statearr_38297_38328 = state_38284__$1;
(statearr_38297_38328[(2)] = null);

(statearr_38297_38328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (11))){
var inst_38248 = (state_38284[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38284,(10),Object,null,(9));
var inst_38257 = chs__$1.call(null,inst_38248);
var inst_38258 = done.call(null,inst_38248);
var inst_38259 = cljs.core.async.take_BANG_.call(null,inst_38257,inst_38258);
var state_38284__$1 = state_38284;
var statearr_38298_38329 = state_38284__$1;
(statearr_38298_38329[(2)] = inst_38259);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (9))){
var inst_38248 = (state_38284[(7)]);
var inst_38261 = (state_38284[(2)]);
var inst_38262 = (inst_38248 + (1));
var inst_38248__$1 = inst_38262;
var state_38284__$1 = (function (){var statearr_38299 = state_38284;
(statearr_38299[(10)] = inst_38261);

(statearr_38299[(7)] = inst_38248__$1);

return statearr_38299;
})();
var statearr_38300_38330 = state_38284__$1;
(statearr_38300_38330[(2)] = null);

(statearr_38300_38330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (5))){
var inst_38268 = (state_38284[(2)]);
var state_38284__$1 = (function (){var statearr_38301 = state_38284;
(statearr_38301[(11)] = inst_38268);

return statearr_38301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38284__$1,(12),dchan);
} else {
if((state_val_38285 === (14))){
var inst_38270 = (state_38284[(8)]);
var inst_38275 = cljs.core.apply.call(null,f,inst_38270);
var state_38284__$1 = state_38284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38284__$1,(16),out,inst_38275);
} else {
if((state_val_38285 === (16))){
var inst_38277 = (state_38284[(2)]);
var state_38284__$1 = (function (){var statearr_38302 = state_38284;
(statearr_38302[(12)] = inst_38277);

return statearr_38302;
})();
var statearr_38303_38331 = state_38284__$1;
(statearr_38303_38331[(2)] = null);

(statearr_38303_38331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (10))){
var inst_38252 = (state_38284[(2)]);
var inst_38253 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38284__$1 = (function (){var statearr_38304 = state_38284;
(statearr_38304[(13)] = inst_38252);

return statearr_38304;
})();
var statearr_38305_38332 = state_38284__$1;
(statearr_38305_38332[(2)] = inst_38253);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38285 === (8))){
var inst_38266 = (state_38284[(2)]);
var state_38284__$1 = state_38284;
var statearr_38306_38333 = state_38284__$1;
(statearr_38306_38333[(2)] = inst_38266);

(statearr_38306_38333[(1)] = (5));


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
});})(c__20906__auto___38318,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20794__auto__,c__20906__auto___38318,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20795__auto__ = null;
var cljs$core$async$state_machine__20795__auto____0 = (function (){
var statearr_38310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38310[(0)] = cljs$core$async$state_machine__20795__auto__);

(statearr_38310[(1)] = (1));

return statearr_38310;
});
var cljs$core$async$state_machine__20795__auto____1 = (function (state_38284){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_38284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e38311){if((e38311 instanceof Object)){
var ex__20798__auto__ = e38311;
var statearr_38312_38334 = state_38284;
(statearr_38312_38334[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38335 = state_38284;
state_38284 = G__38335;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$state_machine__20795__auto__ = function(state_38284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20795__auto____1.call(this,state_38284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20795__auto____0;
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20795__auto____1;
return cljs$core$async$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___38318,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20908__auto__ = (function (){var statearr_38313 = f__20907__auto__.call(null);
(statearr_38313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___38318);

return statearr_38313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___38318,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args38337 = [];
var len__19809__auto___38393 = arguments.length;
var i__19810__auto___38394 = (0);
while(true){
if((i__19810__auto___38394 < len__19809__auto___38393)){
args38337.push((arguments[i__19810__auto___38394]));

var G__38395 = (i__19810__auto___38394 + (1));
i__19810__auto___38394 = G__38395;
continue;
} else {
}
break;
}

var G__38339 = args38337.length;
switch (G__38339) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38337.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20906__auto___38397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___38397,out){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___38397,out){
return (function (state_38369){
var state_val_38370 = (state_38369[(1)]);
if((state_val_38370 === (7))){
var inst_38348 = (state_38369[(7)]);
var inst_38349 = (state_38369[(8)]);
var inst_38348__$1 = (state_38369[(2)]);
var inst_38349__$1 = cljs.core.nth.call(null,inst_38348__$1,(0),null);
var inst_38350 = cljs.core.nth.call(null,inst_38348__$1,(1),null);
var inst_38351 = (inst_38349__$1 == null);
var state_38369__$1 = (function (){var statearr_38371 = state_38369;
(statearr_38371[(9)] = inst_38350);

(statearr_38371[(7)] = inst_38348__$1);

(statearr_38371[(8)] = inst_38349__$1);

return statearr_38371;
})();
if(cljs.core.truth_(inst_38351)){
var statearr_38372_38398 = state_38369__$1;
(statearr_38372_38398[(1)] = (8));

} else {
var statearr_38373_38399 = state_38369__$1;
(statearr_38373_38399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (1))){
var inst_38340 = cljs.core.vec.call(null,chs);
var inst_38341 = inst_38340;
var state_38369__$1 = (function (){var statearr_38374 = state_38369;
(statearr_38374[(10)] = inst_38341);

return statearr_38374;
})();
var statearr_38375_38400 = state_38369__$1;
(statearr_38375_38400[(2)] = null);

(statearr_38375_38400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (4))){
var inst_38341 = (state_38369[(10)]);
var state_38369__$1 = state_38369;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38369__$1,(7),inst_38341);
} else {
if((state_val_38370 === (6))){
var inst_38365 = (state_38369[(2)]);
var state_38369__$1 = state_38369;
var statearr_38376_38401 = state_38369__$1;
(statearr_38376_38401[(2)] = inst_38365);

(statearr_38376_38401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (3))){
var inst_38367 = (state_38369[(2)]);
var state_38369__$1 = state_38369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38369__$1,inst_38367);
} else {
if((state_val_38370 === (2))){
var inst_38341 = (state_38369[(10)]);
var inst_38343 = cljs.core.count.call(null,inst_38341);
var inst_38344 = (inst_38343 > (0));
var state_38369__$1 = state_38369;
if(cljs.core.truth_(inst_38344)){
var statearr_38378_38402 = state_38369__$1;
(statearr_38378_38402[(1)] = (4));

} else {
var statearr_38379_38403 = state_38369__$1;
(statearr_38379_38403[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (11))){
var inst_38341 = (state_38369[(10)]);
var inst_38358 = (state_38369[(2)]);
var tmp38377 = inst_38341;
var inst_38341__$1 = tmp38377;
var state_38369__$1 = (function (){var statearr_38380 = state_38369;
(statearr_38380[(10)] = inst_38341__$1);

(statearr_38380[(11)] = inst_38358);

return statearr_38380;
})();
var statearr_38381_38404 = state_38369__$1;
(statearr_38381_38404[(2)] = null);

(statearr_38381_38404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (9))){
var inst_38349 = (state_38369[(8)]);
var state_38369__$1 = state_38369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38369__$1,(11),out,inst_38349);
} else {
if((state_val_38370 === (5))){
var inst_38363 = cljs.core.async.close_BANG_.call(null,out);
var state_38369__$1 = state_38369;
var statearr_38382_38405 = state_38369__$1;
(statearr_38382_38405[(2)] = inst_38363);

(statearr_38382_38405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (10))){
var inst_38361 = (state_38369[(2)]);
var state_38369__$1 = state_38369;
var statearr_38383_38406 = state_38369__$1;
(statearr_38383_38406[(2)] = inst_38361);

(statearr_38383_38406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38370 === (8))){
var inst_38341 = (state_38369[(10)]);
var inst_38350 = (state_38369[(9)]);
var inst_38348 = (state_38369[(7)]);
var inst_38349 = (state_38369[(8)]);
var inst_38353 = (function (){var cs = inst_38341;
var vec__38346 = inst_38348;
var v = inst_38349;
var c = inst_38350;
return ((function (cs,vec__38346,v,c,inst_38341,inst_38350,inst_38348,inst_38349,state_val_38370,c__20906__auto___38397,out){
return (function (p1__38336_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38336_SHARP_);
});
;})(cs,vec__38346,v,c,inst_38341,inst_38350,inst_38348,inst_38349,state_val_38370,c__20906__auto___38397,out))
})();
var inst_38354 = cljs.core.filterv.call(null,inst_38353,inst_38341);
var inst_38341__$1 = inst_38354;
var state_38369__$1 = (function (){var statearr_38384 = state_38369;
(statearr_38384[(10)] = inst_38341__$1);

return statearr_38384;
})();
var statearr_38385_38407 = state_38369__$1;
(statearr_38385_38407[(2)] = null);

(statearr_38385_38407[(1)] = (2));


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
});})(c__20906__auto___38397,out))
;
return ((function (switch__20794__auto__,c__20906__auto___38397,out){
return (function() {
var cljs$core$async$state_machine__20795__auto__ = null;
var cljs$core$async$state_machine__20795__auto____0 = (function (){
var statearr_38389 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38389[(0)] = cljs$core$async$state_machine__20795__auto__);

(statearr_38389[(1)] = (1));

return statearr_38389;
});
var cljs$core$async$state_machine__20795__auto____1 = (function (state_38369){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_38369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e38390){if((e38390 instanceof Object)){
var ex__20798__auto__ = e38390;
var statearr_38391_38408 = state_38369;
(statearr_38391_38408[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38409 = state_38369;
state_38369 = G__38409;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$state_machine__20795__auto__ = function(state_38369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20795__auto____1.call(this,state_38369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20795__auto____0;
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20795__auto____1;
return cljs$core$async$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___38397,out))
})();
var state__20908__auto__ = (function (){var statearr_38392 = f__20907__auto__.call(null);
(statearr_38392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___38397);

return statearr_38392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___38397,out))
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
var args38410 = [];
var len__19809__auto___38459 = arguments.length;
var i__19810__auto___38460 = (0);
while(true){
if((i__19810__auto___38460 < len__19809__auto___38459)){
args38410.push((arguments[i__19810__auto___38460]));

var G__38461 = (i__19810__auto___38460 + (1));
i__19810__auto___38460 = G__38461;
continue;
} else {
}
break;
}

var G__38412 = args38410.length;
switch (G__38412) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38410.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20906__auto___38463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___38463,out){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___38463,out){
return (function (state_38436){
var state_val_38437 = (state_38436[(1)]);
if((state_val_38437 === (7))){
var inst_38418 = (state_38436[(7)]);
var inst_38418__$1 = (state_38436[(2)]);
var inst_38419 = (inst_38418__$1 == null);
var inst_38420 = cljs.core.not.call(null,inst_38419);
var state_38436__$1 = (function (){var statearr_38438 = state_38436;
(statearr_38438[(7)] = inst_38418__$1);

return statearr_38438;
})();
if(inst_38420){
var statearr_38439_38464 = state_38436__$1;
(statearr_38439_38464[(1)] = (8));

} else {
var statearr_38440_38465 = state_38436__$1;
(statearr_38440_38465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (1))){
var inst_38413 = (0);
var state_38436__$1 = (function (){var statearr_38441 = state_38436;
(statearr_38441[(8)] = inst_38413);

return statearr_38441;
})();
var statearr_38442_38466 = state_38436__$1;
(statearr_38442_38466[(2)] = null);

(statearr_38442_38466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (4))){
var state_38436__$1 = state_38436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38436__$1,(7),ch);
} else {
if((state_val_38437 === (6))){
var inst_38431 = (state_38436[(2)]);
var state_38436__$1 = state_38436;
var statearr_38443_38467 = state_38436__$1;
(statearr_38443_38467[(2)] = inst_38431);

(statearr_38443_38467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (3))){
var inst_38433 = (state_38436[(2)]);
var inst_38434 = cljs.core.async.close_BANG_.call(null,out);
var state_38436__$1 = (function (){var statearr_38444 = state_38436;
(statearr_38444[(9)] = inst_38433);

return statearr_38444;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38436__$1,inst_38434);
} else {
if((state_val_38437 === (2))){
var inst_38413 = (state_38436[(8)]);
var inst_38415 = (inst_38413 < n);
var state_38436__$1 = state_38436;
if(cljs.core.truth_(inst_38415)){
var statearr_38445_38468 = state_38436__$1;
(statearr_38445_38468[(1)] = (4));

} else {
var statearr_38446_38469 = state_38436__$1;
(statearr_38446_38469[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (11))){
var inst_38413 = (state_38436[(8)]);
var inst_38423 = (state_38436[(2)]);
var inst_38424 = (inst_38413 + (1));
var inst_38413__$1 = inst_38424;
var state_38436__$1 = (function (){var statearr_38447 = state_38436;
(statearr_38447[(8)] = inst_38413__$1);

(statearr_38447[(10)] = inst_38423);

return statearr_38447;
})();
var statearr_38448_38470 = state_38436__$1;
(statearr_38448_38470[(2)] = null);

(statearr_38448_38470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (9))){
var state_38436__$1 = state_38436;
var statearr_38449_38471 = state_38436__$1;
(statearr_38449_38471[(2)] = null);

(statearr_38449_38471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (5))){
var state_38436__$1 = state_38436;
var statearr_38450_38472 = state_38436__$1;
(statearr_38450_38472[(2)] = null);

(statearr_38450_38472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (10))){
var inst_38428 = (state_38436[(2)]);
var state_38436__$1 = state_38436;
var statearr_38451_38473 = state_38436__$1;
(statearr_38451_38473[(2)] = inst_38428);

(statearr_38451_38473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38437 === (8))){
var inst_38418 = (state_38436[(7)]);
var state_38436__$1 = state_38436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38436__$1,(11),out,inst_38418);
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
});})(c__20906__auto___38463,out))
;
return ((function (switch__20794__auto__,c__20906__auto___38463,out){
return (function() {
var cljs$core$async$state_machine__20795__auto__ = null;
var cljs$core$async$state_machine__20795__auto____0 = (function (){
var statearr_38455 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38455[(0)] = cljs$core$async$state_machine__20795__auto__);

(statearr_38455[(1)] = (1));

return statearr_38455;
});
var cljs$core$async$state_machine__20795__auto____1 = (function (state_38436){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_38436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e38456){if((e38456 instanceof Object)){
var ex__20798__auto__ = e38456;
var statearr_38457_38474 = state_38436;
(statearr_38457_38474[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38475 = state_38436;
state_38436 = G__38475;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$state_machine__20795__auto__ = function(state_38436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20795__auto____1.call(this,state_38436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20795__auto____0;
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20795__auto____1;
return cljs$core$async$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___38463,out))
})();
var state__20908__auto__ = (function (){var statearr_38458 = f__20907__auto__.call(null);
(statearr_38458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___38463);

return statearr_38458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___38463,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38483 = (function (map_LT_,f,ch,meta38484){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38484 = meta38484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38485,meta38484__$1){
var self__ = this;
var _38485__$1 = this;
return (new cljs.core.async.t_cljs$core$async38483(self__.map_LT_,self__.f,self__.ch,meta38484__$1));
});

cljs.core.async.t_cljs$core$async38483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38485){
var self__ = this;
var _38485__$1 = this;
return self__.meta38484;
});

cljs.core.async.t_cljs$core$async38483.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38483.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38483.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38486 = (function (map_LT_,f,ch,meta38484,_,fn1,meta38487){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38484 = meta38484;
this._ = _;
this.fn1 = fn1;
this.meta38487 = meta38487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38488,meta38487__$1){
var self__ = this;
var _38488__$1 = this;
return (new cljs.core.async.t_cljs$core$async38486(self__.map_LT_,self__.f,self__.ch,self__.meta38484,self__._,self__.fn1,meta38487__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38488){
var self__ = this;
var _38488__$1 = this;
return self__.meta38487;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38486.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38486.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38476_SHARP_){
return f1.call(null,(((p1__38476_SHARP_ == null))?null:self__.f.call(null,p1__38476_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38486.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38484","meta38484",1159575242,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38483","cljs.core.async/t_cljs$core$async38483",2033727405,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38487","meta38487",283390930,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38486";

cljs.core.async.t_cljs$core$async38486.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19345__auto__,writer__19346__auto__,opt__19347__auto__){
return cljs.core._write.call(null,writer__19346__auto__,"cljs.core.async/t_cljs$core$async38486");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38486 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38486(map_LT___$1,f__$1,ch__$1,meta38484__$1,___$2,fn1__$1,meta38487){
return (new cljs.core.async.t_cljs$core$async38486(map_LT___$1,f__$1,ch__$1,meta38484__$1,___$2,fn1__$1,meta38487));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38486(self__.map_LT_,self__.f,self__.ch,self__.meta38484,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18727__auto__ = ret;
if(cljs.core.truth_(and__18727__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18727__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38483.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38484","meta38484",1159575242,null)], null);
});

cljs.core.async.t_cljs$core$async38483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38483";

cljs.core.async.t_cljs$core$async38483.cljs$lang$ctorPrWriter = (function (this__19345__auto__,writer__19346__auto__,opt__19347__auto__){
return cljs.core._write.call(null,writer__19346__auto__,"cljs.core.async/t_cljs$core$async38483");
});

cljs.core.async.__GT_t_cljs$core$async38483 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38483(map_LT___$1,f__$1,ch__$1,meta38484){
return (new cljs.core.async.t_cljs$core$async38483(map_LT___$1,f__$1,ch__$1,meta38484));
});

}

return (new cljs.core.async.t_cljs$core$async38483(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38492 = (function (map_GT_,f,ch,meta38493){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38493 = meta38493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38494,meta38493__$1){
var self__ = this;
var _38494__$1 = this;
return (new cljs.core.async.t_cljs$core$async38492(self__.map_GT_,self__.f,self__.ch,meta38493__$1));
});

cljs.core.async.t_cljs$core$async38492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38494){
var self__ = this;
var _38494__$1 = this;
return self__.meta38493;
});

cljs.core.async.t_cljs$core$async38492.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38492.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38492.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38492.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38492.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38492.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38493","meta38493",488685629,null)], null);
});

cljs.core.async.t_cljs$core$async38492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38492";

cljs.core.async.t_cljs$core$async38492.cljs$lang$ctorPrWriter = (function (this__19345__auto__,writer__19346__auto__,opt__19347__auto__){
return cljs.core._write.call(null,writer__19346__auto__,"cljs.core.async/t_cljs$core$async38492");
});

cljs.core.async.__GT_t_cljs$core$async38492 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38492(map_GT___$1,f__$1,ch__$1,meta38493){
return (new cljs.core.async.t_cljs$core$async38492(map_GT___$1,f__$1,ch__$1,meta38493));
});

}

return (new cljs.core.async.t_cljs$core$async38492(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38498 = (function (filter_GT_,p,ch,meta38499){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38499 = meta38499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38500,meta38499__$1){
var self__ = this;
var _38500__$1 = this;
return (new cljs.core.async.t_cljs$core$async38498(self__.filter_GT_,self__.p,self__.ch,meta38499__$1));
});

cljs.core.async.t_cljs$core$async38498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38500){
var self__ = this;
var _38500__$1 = this;
return self__.meta38499;
});

cljs.core.async.t_cljs$core$async38498.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38498.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38498.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38498.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38498.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38498.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38498.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38499","meta38499",1124092104,null)], null);
});

cljs.core.async.t_cljs$core$async38498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38498";

cljs.core.async.t_cljs$core$async38498.cljs$lang$ctorPrWriter = (function (this__19345__auto__,writer__19346__auto__,opt__19347__auto__){
return cljs.core._write.call(null,writer__19346__auto__,"cljs.core.async/t_cljs$core$async38498");
});

cljs.core.async.__GT_t_cljs$core$async38498 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38498(filter_GT___$1,p__$1,ch__$1,meta38499){
return (new cljs.core.async.t_cljs$core$async38498(filter_GT___$1,p__$1,ch__$1,meta38499));
});

}

return (new cljs.core.async.t_cljs$core$async38498(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args38501 = [];
var len__19809__auto___38545 = arguments.length;
var i__19810__auto___38546 = (0);
while(true){
if((i__19810__auto___38546 < len__19809__auto___38545)){
args38501.push((arguments[i__19810__auto___38546]));

var G__38547 = (i__19810__auto___38546 + (1));
i__19810__auto___38546 = G__38547;
continue;
} else {
}
break;
}

var G__38503 = args38501.length;
switch (G__38503) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38501.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20906__auto___38549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___38549,out){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___38549,out){
return (function (state_38524){
var state_val_38525 = (state_38524[(1)]);
if((state_val_38525 === (7))){
var inst_38520 = (state_38524[(2)]);
var state_38524__$1 = state_38524;
var statearr_38526_38550 = state_38524__$1;
(statearr_38526_38550[(2)] = inst_38520);

(statearr_38526_38550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38525 === (1))){
var state_38524__$1 = state_38524;
var statearr_38527_38551 = state_38524__$1;
(statearr_38527_38551[(2)] = null);

(statearr_38527_38551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38525 === (4))){
var inst_38506 = (state_38524[(7)]);
var inst_38506__$1 = (state_38524[(2)]);
var inst_38507 = (inst_38506__$1 == null);
var state_38524__$1 = (function (){var statearr_38528 = state_38524;
(statearr_38528[(7)] = inst_38506__$1);

return statearr_38528;
})();
if(cljs.core.truth_(inst_38507)){
var statearr_38529_38552 = state_38524__$1;
(statearr_38529_38552[(1)] = (5));

} else {
var statearr_38530_38553 = state_38524__$1;
(statearr_38530_38553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38525 === (6))){
var inst_38506 = (state_38524[(7)]);
var inst_38511 = p.call(null,inst_38506);
var state_38524__$1 = state_38524;
if(cljs.core.truth_(inst_38511)){
var statearr_38531_38554 = state_38524__$1;
(statearr_38531_38554[(1)] = (8));

} else {
var statearr_38532_38555 = state_38524__$1;
(statearr_38532_38555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38525 === (3))){
var inst_38522 = (state_38524[(2)]);
var state_38524__$1 = state_38524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38524__$1,inst_38522);
} else {
if((state_val_38525 === (2))){
var state_38524__$1 = state_38524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38524__$1,(4),ch);
} else {
if((state_val_38525 === (11))){
var inst_38514 = (state_38524[(2)]);
var state_38524__$1 = state_38524;
var statearr_38533_38556 = state_38524__$1;
(statearr_38533_38556[(2)] = inst_38514);

(statearr_38533_38556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38525 === (9))){
var state_38524__$1 = state_38524;
var statearr_38534_38557 = state_38524__$1;
(statearr_38534_38557[(2)] = null);

(statearr_38534_38557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38525 === (5))){
var inst_38509 = cljs.core.async.close_BANG_.call(null,out);
var state_38524__$1 = state_38524;
var statearr_38535_38558 = state_38524__$1;
(statearr_38535_38558[(2)] = inst_38509);

(statearr_38535_38558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38525 === (10))){
var inst_38517 = (state_38524[(2)]);
var state_38524__$1 = (function (){var statearr_38536 = state_38524;
(statearr_38536[(8)] = inst_38517);

return statearr_38536;
})();
var statearr_38537_38559 = state_38524__$1;
(statearr_38537_38559[(2)] = null);

(statearr_38537_38559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38525 === (8))){
var inst_38506 = (state_38524[(7)]);
var state_38524__$1 = state_38524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38524__$1,(11),out,inst_38506);
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
});})(c__20906__auto___38549,out))
;
return ((function (switch__20794__auto__,c__20906__auto___38549,out){
return (function() {
var cljs$core$async$state_machine__20795__auto__ = null;
var cljs$core$async$state_machine__20795__auto____0 = (function (){
var statearr_38541 = [null,null,null,null,null,null,null,null,null];
(statearr_38541[(0)] = cljs$core$async$state_machine__20795__auto__);

(statearr_38541[(1)] = (1));

return statearr_38541;
});
var cljs$core$async$state_machine__20795__auto____1 = (function (state_38524){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_38524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e38542){if((e38542 instanceof Object)){
var ex__20798__auto__ = e38542;
var statearr_38543_38560 = state_38524;
(statearr_38543_38560[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38561 = state_38524;
state_38524 = G__38561;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$state_machine__20795__auto__ = function(state_38524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20795__auto____1.call(this,state_38524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20795__auto____0;
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20795__auto____1;
return cljs$core$async$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___38549,out))
})();
var state__20908__auto__ = (function (){var statearr_38544 = f__20907__auto__.call(null);
(statearr_38544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___38549);

return statearr_38544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___38549,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38562 = [];
var len__19809__auto___38565 = arguments.length;
var i__19810__auto___38566 = (0);
while(true){
if((i__19810__auto___38566 < len__19809__auto___38565)){
args38562.push((arguments[i__19810__auto___38566]));

var G__38567 = (i__19810__auto___38566 + (1));
i__19810__auto___38566 = G__38567;
continue;
} else {
}
break;
}

var G__38564 = args38562.length;
switch (G__38564) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38562.length)].join('')));

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
var c__20906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto__){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto__){
return (function (state_38734){
var state_val_38735 = (state_38734[(1)]);
if((state_val_38735 === (7))){
var inst_38730 = (state_38734[(2)]);
var state_38734__$1 = state_38734;
var statearr_38736_38777 = state_38734__$1;
(statearr_38736_38777[(2)] = inst_38730);

(statearr_38736_38777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (20))){
var inst_38700 = (state_38734[(7)]);
var inst_38711 = (state_38734[(2)]);
var inst_38712 = cljs.core.next.call(null,inst_38700);
var inst_38686 = inst_38712;
var inst_38687 = null;
var inst_38688 = (0);
var inst_38689 = (0);
var state_38734__$1 = (function (){var statearr_38737 = state_38734;
(statearr_38737[(8)] = inst_38689);

(statearr_38737[(9)] = inst_38711);

(statearr_38737[(10)] = inst_38687);

(statearr_38737[(11)] = inst_38686);

(statearr_38737[(12)] = inst_38688);

return statearr_38737;
})();
var statearr_38738_38778 = state_38734__$1;
(statearr_38738_38778[(2)] = null);

(statearr_38738_38778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (1))){
var state_38734__$1 = state_38734;
var statearr_38739_38779 = state_38734__$1;
(statearr_38739_38779[(2)] = null);

(statearr_38739_38779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (4))){
var inst_38675 = (state_38734[(13)]);
var inst_38675__$1 = (state_38734[(2)]);
var inst_38676 = (inst_38675__$1 == null);
var state_38734__$1 = (function (){var statearr_38740 = state_38734;
(statearr_38740[(13)] = inst_38675__$1);

return statearr_38740;
})();
if(cljs.core.truth_(inst_38676)){
var statearr_38741_38780 = state_38734__$1;
(statearr_38741_38780[(1)] = (5));

} else {
var statearr_38742_38781 = state_38734__$1;
(statearr_38742_38781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (15))){
var state_38734__$1 = state_38734;
var statearr_38746_38782 = state_38734__$1;
(statearr_38746_38782[(2)] = null);

(statearr_38746_38782[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (21))){
var state_38734__$1 = state_38734;
var statearr_38747_38783 = state_38734__$1;
(statearr_38747_38783[(2)] = null);

(statearr_38747_38783[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (13))){
var inst_38689 = (state_38734[(8)]);
var inst_38687 = (state_38734[(10)]);
var inst_38686 = (state_38734[(11)]);
var inst_38688 = (state_38734[(12)]);
var inst_38696 = (state_38734[(2)]);
var inst_38697 = (inst_38689 + (1));
var tmp38743 = inst_38687;
var tmp38744 = inst_38686;
var tmp38745 = inst_38688;
var inst_38686__$1 = tmp38744;
var inst_38687__$1 = tmp38743;
var inst_38688__$1 = tmp38745;
var inst_38689__$1 = inst_38697;
var state_38734__$1 = (function (){var statearr_38748 = state_38734;
(statearr_38748[(8)] = inst_38689__$1);

(statearr_38748[(14)] = inst_38696);

(statearr_38748[(10)] = inst_38687__$1);

(statearr_38748[(11)] = inst_38686__$1);

(statearr_38748[(12)] = inst_38688__$1);

return statearr_38748;
})();
var statearr_38749_38784 = state_38734__$1;
(statearr_38749_38784[(2)] = null);

(statearr_38749_38784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (22))){
var state_38734__$1 = state_38734;
var statearr_38750_38785 = state_38734__$1;
(statearr_38750_38785[(2)] = null);

(statearr_38750_38785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (6))){
var inst_38675 = (state_38734[(13)]);
var inst_38684 = f.call(null,inst_38675);
var inst_38685 = cljs.core.seq.call(null,inst_38684);
var inst_38686 = inst_38685;
var inst_38687 = null;
var inst_38688 = (0);
var inst_38689 = (0);
var state_38734__$1 = (function (){var statearr_38751 = state_38734;
(statearr_38751[(8)] = inst_38689);

(statearr_38751[(10)] = inst_38687);

(statearr_38751[(11)] = inst_38686);

(statearr_38751[(12)] = inst_38688);

return statearr_38751;
})();
var statearr_38752_38786 = state_38734__$1;
(statearr_38752_38786[(2)] = null);

(statearr_38752_38786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (17))){
var inst_38700 = (state_38734[(7)]);
var inst_38704 = cljs.core.chunk_first.call(null,inst_38700);
var inst_38705 = cljs.core.chunk_rest.call(null,inst_38700);
var inst_38706 = cljs.core.count.call(null,inst_38704);
var inst_38686 = inst_38705;
var inst_38687 = inst_38704;
var inst_38688 = inst_38706;
var inst_38689 = (0);
var state_38734__$1 = (function (){var statearr_38753 = state_38734;
(statearr_38753[(8)] = inst_38689);

(statearr_38753[(10)] = inst_38687);

(statearr_38753[(11)] = inst_38686);

(statearr_38753[(12)] = inst_38688);

return statearr_38753;
})();
var statearr_38754_38787 = state_38734__$1;
(statearr_38754_38787[(2)] = null);

(statearr_38754_38787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (3))){
var inst_38732 = (state_38734[(2)]);
var state_38734__$1 = state_38734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38734__$1,inst_38732);
} else {
if((state_val_38735 === (12))){
var inst_38720 = (state_38734[(2)]);
var state_38734__$1 = state_38734;
var statearr_38755_38788 = state_38734__$1;
(statearr_38755_38788[(2)] = inst_38720);

(statearr_38755_38788[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (2))){
var state_38734__$1 = state_38734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38734__$1,(4),in$);
} else {
if((state_val_38735 === (23))){
var inst_38728 = (state_38734[(2)]);
var state_38734__$1 = state_38734;
var statearr_38756_38789 = state_38734__$1;
(statearr_38756_38789[(2)] = inst_38728);

(statearr_38756_38789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (19))){
var inst_38715 = (state_38734[(2)]);
var state_38734__$1 = state_38734;
var statearr_38757_38790 = state_38734__$1;
(statearr_38757_38790[(2)] = inst_38715);

(statearr_38757_38790[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (11))){
var inst_38700 = (state_38734[(7)]);
var inst_38686 = (state_38734[(11)]);
var inst_38700__$1 = cljs.core.seq.call(null,inst_38686);
var state_38734__$1 = (function (){var statearr_38758 = state_38734;
(statearr_38758[(7)] = inst_38700__$1);

return statearr_38758;
})();
if(inst_38700__$1){
var statearr_38759_38791 = state_38734__$1;
(statearr_38759_38791[(1)] = (14));

} else {
var statearr_38760_38792 = state_38734__$1;
(statearr_38760_38792[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (9))){
var inst_38722 = (state_38734[(2)]);
var inst_38723 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38734__$1 = (function (){var statearr_38761 = state_38734;
(statearr_38761[(15)] = inst_38722);

return statearr_38761;
})();
if(cljs.core.truth_(inst_38723)){
var statearr_38762_38793 = state_38734__$1;
(statearr_38762_38793[(1)] = (21));

} else {
var statearr_38763_38794 = state_38734__$1;
(statearr_38763_38794[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (5))){
var inst_38678 = cljs.core.async.close_BANG_.call(null,out);
var state_38734__$1 = state_38734;
var statearr_38764_38795 = state_38734__$1;
(statearr_38764_38795[(2)] = inst_38678);

(statearr_38764_38795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (14))){
var inst_38700 = (state_38734[(7)]);
var inst_38702 = cljs.core.chunked_seq_QMARK_.call(null,inst_38700);
var state_38734__$1 = state_38734;
if(inst_38702){
var statearr_38765_38796 = state_38734__$1;
(statearr_38765_38796[(1)] = (17));

} else {
var statearr_38766_38797 = state_38734__$1;
(statearr_38766_38797[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (16))){
var inst_38718 = (state_38734[(2)]);
var state_38734__$1 = state_38734;
var statearr_38767_38798 = state_38734__$1;
(statearr_38767_38798[(2)] = inst_38718);

(statearr_38767_38798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (10))){
var inst_38689 = (state_38734[(8)]);
var inst_38687 = (state_38734[(10)]);
var inst_38694 = cljs.core._nth.call(null,inst_38687,inst_38689);
var state_38734__$1 = state_38734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38734__$1,(13),out,inst_38694);
} else {
if((state_val_38735 === (18))){
var inst_38700 = (state_38734[(7)]);
var inst_38709 = cljs.core.first.call(null,inst_38700);
var state_38734__$1 = state_38734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38734__$1,(20),out,inst_38709);
} else {
if((state_val_38735 === (8))){
var inst_38689 = (state_38734[(8)]);
var inst_38688 = (state_38734[(12)]);
var inst_38691 = (inst_38689 < inst_38688);
var inst_38692 = inst_38691;
var state_38734__$1 = state_38734;
if(cljs.core.truth_(inst_38692)){
var statearr_38768_38799 = state_38734__$1;
(statearr_38768_38799[(1)] = (10));

} else {
var statearr_38769_38800 = state_38734__$1;
(statearr_38769_38800[(1)] = (11));

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
});})(c__20906__auto__))
;
return ((function (switch__20794__auto__,c__20906__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20795__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20795__auto____0 = (function (){
var statearr_38773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38773[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20795__auto__);

(statearr_38773[(1)] = (1));

return statearr_38773;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20795__auto____1 = (function (state_38734){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_38734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e38774){if((e38774 instanceof Object)){
var ex__20798__auto__ = e38774;
var statearr_38775_38801 = state_38734;
(statearr_38775_38801[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38802 = state_38734;
state_38734 = G__38802;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20795__auto__ = function(state_38734){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20795__auto____1.call(this,state_38734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20795__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20795__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto__))
})();
var state__20908__auto__ = (function (){var statearr_38776 = f__20907__auto__.call(null);
(statearr_38776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto__);

return statearr_38776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto__))
);

return c__20906__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38803 = [];
var len__19809__auto___38806 = arguments.length;
var i__19810__auto___38807 = (0);
while(true){
if((i__19810__auto___38807 < len__19809__auto___38806)){
args38803.push((arguments[i__19810__auto___38807]));

var G__38808 = (i__19810__auto___38807 + (1));
i__19810__auto___38807 = G__38808;
continue;
} else {
}
break;
}

var G__38805 = args38803.length;
switch (G__38805) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38803.length)].join('')));

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
var args38810 = [];
var len__19809__auto___38813 = arguments.length;
var i__19810__auto___38814 = (0);
while(true){
if((i__19810__auto___38814 < len__19809__auto___38813)){
args38810.push((arguments[i__19810__auto___38814]));

var G__38815 = (i__19810__auto___38814 + (1));
i__19810__auto___38814 = G__38815;
continue;
} else {
}
break;
}

var G__38812 = args38810.length;
switch (G__38812) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38810.length)].join('')));

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
var args38817 = [];
var len__19809__auto___38868 = arguments.length;
var i__19810__auto___38869 = (0);
while(true){
if((i__19810__auto___38869 < len__19809__auto___38868)){
args38817.push((arguments[i__19810__auto___38869]));

var G__38870 = (i__19810__auto___38869 + (1));
i__19810__auto___38869 = G__38870;
continue;
} else {
}
break;
}

var G__38819 = args38817.length;
switch (G__38819) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38817.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20906__auto___38872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___38872,out){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___38872,out){
return (function (state_38843){
var state_val_38844 = (state_38843[(1)]);
if((state_val_38844 === (7))){
var inst_38838 = (state_38843[(2)]);
var state_38843__$1 = state_38843;
var statearr_38845_38873 = state_38843__$1;
(statearr_38845_38873[(2)] = inst_38838);

(statearr_38845_38873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38844 === (1))){
var inst_38820 = null;
var state_38843__$1 = (function (){var statearr_38846 = state_38843;
(statearr_38846[(7)] = inst_38820);

return statearr_38846;
})();
var statearr_38847_38874 = state_38843__$1;
(statearr_38847_38874[(2)] = null);

(statearr_38847_38874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38844 === (4))){
var inst_38823 = (state_38843[(8)]);
var inst_38823__$1 = (state_38843[(2)]);
var inst_38824 = (inst_38823__$1 == null);
var inst_38825 = cljs.core.not.call(null,inst_38824);
var state_38843__$1 = (function (){var statearr_38848 = state_38843;
(statearr_38848[(8)] = inst_38823__$1);

return statearr_38848;
})();
if(inst_38825){
var statearr_38849_38875 = state_38843__$1;
(statearr_38849_38875[(1)] = (5));

} else {
var statearr_38850_38876 = state_38843__$1;
(statearr_38850_38876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38844 === (6))){
var state_38843__$1 = state_38843;
var statearr_38851_38877 = state_38843__$1;
(statearr_38851_38877[(2)] = null);

(statearr_38851_38877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38844 === (3))){
var inst_38840 = (state_38843[(2)]);
var inst_38841 = cljs.core.async.close_BANG_.call(null,out);
var state_38843__$1 = (function (){var statearr_38852 = state_38843;
(statearr_38852[(9)] = inst_38840);

return statearr_38852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38843__$1,inst_38841);
} else {
if((state_val_38844 === (2))){
var state_38843__$1 = state_38843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38843__$1,(4),ch);
} else {
if((state_val_38844 === (11))){
var inst_38823 = (state_38843[(8)]);
var inst_38832 = (state_38843[(2)]);
var inst_38820 = inst_38823;
var state_38843__$1 = (function (){var statearr_38853 = state_38843;
(statearr_38853[(7)] = inst_38820);

(statearr_38853[(10)] = inst_38832);

return statearr_38853;
})();
var statearr_38854_38878 = state_38843__$1;
(statearr_38854_38878[(2)] = null);

(statearr_38854_38878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38844 === (9))){
var inst_38823 = (state_38843[(8)]);
var state_38843__$1 = state_38843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38843__$1,(11),out,inst_38823);
} else {
if((state_val_38844 === (5))){
var inst_38820 = (state_38843[(7)]);
var inst_38823 = (state_38843[(8)]);
var inst_38827 = cljs.core._EQ_.call(null,inst_38823,inst_38820);
var state_38843__$1 = state_38843;
if(inst_38827){
var statearr_38856_38879 = state_38843__$1;
(statearr_38856_38879[(1)] = (8));

} else {
var statearr_38857_38880 = state_38843__$1;
(statearr_38857_38880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38844 === (10))){
var inst_38835 = (state_38843[(2)]);
var state_38843__$1 = state_38843;
var statearr_38858_38881 = state_38843__$1;
(statearr_38858_38881[(2)] = inst_38835);

(statearr_38858_38881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38844 === (8))){
var inst_38820 = (state_38843[(7)]);
var tmp38855 = inst_38820;
var inst_38820__$1 = tmp38855;
var state_38843__$1 = (function (){var statearr_38859 = state_38843;
(statearr_38859[(7)] = inst_38820__$1);

return statearr_38859;
})();
var statearr_38860_38882 = state_38843__$1;
(statearr_38860_38882[(2)] = null);

(statearr_38860_38882[(1)] = (2));


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
});})(c__20906__auto___38872,out))
;
return ((function (switch__20794__auto__,c__20906__auto___38872,out){
return (function() {
var cljs$core$async$state_machine__20795__auto__ = null;
var cljs$core$async$state_machine__20795__auto____0 = (function (){
var statearr_38864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38864[(0)] = cljs$core$async$state_machine__20795__auto__);

(statearr_38864[(1)] = (1));

return statearr_38864;
});
var cljs$core$async$state_machine__20795__auto____1 = (function (state_38843){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_38843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e38865){if((e38865 instanceof Object)){
var ex__20798__auto__ = e38865;
var statearr_38866_38883 = state_38843;
(statearr_38866_38883[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38884 = state_38843;
state_38843 = G__38884;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$state_machine__20795__auto__ = function(state_38843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20795__auto____1.call(this,state_38843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20795__auto____0;
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20795__auto____1;
return cljs$core$async$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___38872,out))
})();
var state__20908__auto__ = (function (){var statearr_38867 = f__20907__auto__.call(null);
(statearr_38867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___38872);

return statearr_38867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___38872,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38885 = [];
var len__19809__auto___38955 = arguments.length;
var i__19810__auto___38956 = (0);
while(true){
if((i__19810__auto___38956 < len__19809__auto___38955)){
args38885.push((arguments[i__19810__auto___38956]));

var G__38957 = (i__19810__auto___38956 + (1));
i__19810__auto___38956 = G__38957;
continue;
} else {
}
break;
}

var G__38887 = args38885.length;
switch (G__38887) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38885.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20906__auto___38959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___38959,out){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___38959,out){
return (function (state_38925){
var state_val_38926 = (state_38925[(1)]);
if((state_val_38926 === (7))){
var inst_38921 = (state_38925[(2)]);
var state_38925__$1 = state_38925;
var statearr_38927_38960 = state_38925__$1;
(statearr_38927_38960[(2)] = inst_38921);

(statearr_38927_38960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38926 === (1))){
var inst_38888 = (new Array(n));
var inst_38889 = inst_38888;
var inst_38890 = (0);
var state_38925__$1 = (function (){var statearr_38928 = state_38925;
(statearr_38928[(7)] = inst_38889);

(statearr_38928[(8)] = inst_38890);

return statearr_38928;
})();
var statearr_38929_38961 = state_38925__$1;
(statearr_38929_38961[(2)] = null);

(statearr_38929_38961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38926 === (4))){
var inst_38893 = (state_38925[(9)]);
var inst_38893__$1 = (state_38925[(2)]);
var inst_38894 = (inst_38893__$1 == null);
var inst_38895 = cljs.core.not.call(null,inst_38894);
var state_38925__$1 = (function (){var statearr_38930 = state_38925;
(statearr_38930[(9)] = inst_38893__$1);

return statearr_38930;
})();
if(inst_38895){
var statearr_38931_38962 = state_38925__$1;
(statearr_38931_38962[(1)] = (5));

} else {
var statearr_38932_38963 = state_38925__$1;
(statearr_38932_38963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38926 === (15))){
var inst_38915 = (state_38925[(2)]);
var state_38925__$1 = state_38925;
var statearr_38933_38964 = state_38925__$1;
(statearr_38933_38964[(2)] = inst_38915);

(statearr_38933_38964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38926 === (13))){
var state_38925__$1 = state_38925;
var statearr_38934_38965 = state_38925__$1;
(statearr_38934_38965[(2)] = null);

(statearr_38934_38965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38926 === (6))){
var inst_38890 = (state_38925[(8)]);
var inst_38911 = (inst_38890 > (0));
var state_38925__$1 = state_38925;
if(cljs.core.truth_(inst_38911)){
var statearr_38935_38966 = state_38925__$1;
(statearr_38935_38966[(1)] = (12));

} else {
var statearr_38936_38967 = state_38925__$1;
(statearr_38936_38967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38926 === (3))){
var inst_38923 = (state_38925[(2)]);
var state_38925__$1 = state_38925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38925__$1,inst_38923);
} else {
if((state_val_38926 === (12))){
var inst_38889 = (state_38925[(7)]);
var inst_38913 = cljs.core.vec.call(null,inst_38889);
var state_38925__$1 = state_38925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38925__$1,(15),out,inst_38913);
} else {
if((state_val_38926 === (2))){
var state_38925__$1 = state_38925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38925__$1,(4),ch);
} else {
if((state_val_38926 === (11))){
var inst_38905 = (state_38925[(2)]);
var inst_38906 = (new Array(n));
var inst_38889 = inst_38906;
var inst_38890 = (0);
var state_38925__$1 = (function (){var statearr_38937 = state_38925;
(statearr_38937[(7)] = inst_38889);

(statearr_38937[(10)] = inst_38905);

(statearr_38937[(8)] = inst_38890);

return statearr_38937;
})();
var statearr_38938_38968 = state_38925__$1;
(statearr_38938_38968[(2)] = null);

(statearr_38938_38968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38926 === (9))){
var inst_38889 = (state_38925[(7)]);
var inst_38903 = cljs.core.vec.call(null,inst_38889);
var state_38925__$1 = state_38925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38925__$1,(11),out,inst_38903);
} else {
if((state_val_38926 === (5))){
var inst_38898 = (state_38925[(11)]);
var inst_38889 = (state_38925[(7)]);
var inst_38893 = (state_38925[(9)]);
var inst_38890 = (state_38925[(8)]);
var inst_38897 = (inst_38889[inst_38890] = inst_38893);
var inst_38898__$1 = (inst_38890 + (1));
var inst_38899 = (inst_38898__$1 < n);
var state_38925__$1 = (function (){var statearr_38939 = state_38925;
(statearr_38939[(12)] = inst_38897);

(statearr_38939[(11)] = inst_38898__$1);

return statearr_38939;
})();
if(cljs.core.truth_(inst_38899)){
var statearr_38940_38969 = state_38925__$1;
(statearr_38940_38969[(1)] = (8));

} else {
var statearr_38941_38970 = state_38925__$1;
(statearr_38941_38970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38926 === (14))){
var inst_38918 = (state_38925[(2)]);
var inst_38919 = cljs.core.async.close_BANG_.call(null,out);
var state_38925__$1 = (function (){var statearr_38943 = state_38925;
(statearr_38943[(13)] = inst_38918);

return statearr_38943;
})();
var statearr_38944_38971 = state_38925__$1;
(statearr_38944_38971[(2)] = inst_38919);

(statearr_38944_38971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38926 === (10))){
var inst_38909 = (state_38925[(2)]);
var state_38925__$1 = state_38925;
var statearr_38945_38972 = state_38925__$1;
(statearr_38945_38972[(2)] = inst_38909);

(statearr_38945_38972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38926 === (8))){
var inst_38898 = (state_38925[(11)]);
var inst_38889 = (state_38925[(7)]);
var tmp38942 = inst_38889;
var inst_38889__$1 = tmp38942;
var inst_38890 = inst_38898;
var state_38925__$1 = (function (){var statearr_38946 = state_38925;
(statearr_38946[(7)] = inst_38889__$1);

(statearr_38946[(8)] = inst_38890);

return statearr_38946;
})();
var statearr_38947_38973 = state_38925__$1;
(statearr_38947_38973[(2)] = null);

(statearr_38947_38973[(1)] = (2));


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
});})(c__20906__auto___38959,out))
;
return ((function (switch__20794__auto__,c__20906__auto___38959,out){
return (function() {
var cljs$core$async$state_machine__20795__auto__ = null;
var cljs$core$async$state_machine__20795__auto____0 = (function (){
var statearr_38951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38951[(0)] = cljs$core$async$state_machine__20795__auto__);

(statearr_38951[(1)] = (1));

return statearr_38951;
});
var cljs$core$async$state_machine__20795__auto____1 = (function (state_38925){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_38925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e38952){if((e38952 instanceof Object)){
var ex__20798__auto__ = e38952;
var statearr_38953_38974 = state_38925;
(statearr_38953_38974[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38975 = state_38925;
state_38925 = G__38975;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$state_machine__20795__auto__ = function(state_38925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20795__auto____1.call(this,state_38925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20795__auto____0;
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20795__auto____1;
return cljs$core$async$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___38959,out))
})();
var state__20908__auto__ = (function (){var statearr_38954 = f__20907__auto__.call(null);
(statearr_38954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___38959);

return statearr_38954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___38959,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args38976 = [];
var len__19809__auto___39050 = arguments.length;
var i__19810__auto___39051 = (0);
while(true){
if((i__19810__auto___39051 < len__19809__auto___39050)){
args38976.push((arguments[i__19810__auto___39051]));

var G__39052 = (i__19810__auto___39051 + (1));
i__19810__auto___39051 = G__39052;
continue;
} else {
}
break;
}

var G__38978 = args38976.length;
switch (G__38978) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38976.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20906__auto___39054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20906__auto___39054,out){
return (function (){
var f__20907__auto__ = (function (){var switch__20794__auto__ = ((function (c__20906__auto___39054,out){
return (function (state_39020){
var state_val_39021 = (state_39020[(1)]);
if((state_val_39021 === (7))){
var inst_39016 = (state_39020[(2)]);
var state_39020__$1 = state_39020;
var statearr_39022_39055 = state_39020__$1;
(statearr_39022_39055[(2)] = inst_39016);

(statearr_39022_39055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39021 === (1))){
var inst_38979 = [];
var inst_38980 = inst_38979;
var inst_38981 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39020__$1 = (function (){var statearr_39023 = state_39020;
(statearr_39023[(7)] = inst_38980);

(statearr_39023[(8)] = inst_38981);

return statearr_39023;
})();
var statearr_39024_39056 = state_39020__$1;
(statearr_39024_39056[(2)] = null);

(statearr_39024_39056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39021 === (4))){
var inst_38984 = (state_39020[(9)]);
var inst_38984__$1 = (state_39020[(2)]);
var inst_38985 = (inst_38984__$1 == null);
var inst_38986 = cljs.core.not.call(null,inst_38985);
var state_39020__$1 = (function (){var statearr_39025 = state_39020;
(statearr_39025[(9)] = inst_38984__$1);

return statearr_39025;
})();
if(inst_38986){
var statearr_39026_39057 = state_39020__$1;
(statearr_39026_39057[(1)] = (5));

} else {
var statearr_39027_39058 = state_39020__$1;
(statearr_39027_39058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39021 === (15))){
var inst_39010 = (state_39020[(2)]);
var state_39020__$1 = state_39020;
var statearr_39028_39059 = state_39020__$1;
(statearr_39028_39059[(2)] = inst_39010);

(statearr_39028_39059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39021 === (13))){
var state_39020__$1 = state_39020;
var statearr_39029_39060 = state_39020__$1;
(statearr_39029_39060[(2)] = null);

(statearr_39029_39060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39021 === (6))){
var inst_38980 = (state_39020[(7)]);
var inst_39005 = inst_38980.length;
var inst_39006 = (inst_39005 > (0));
var state_39020__$1 = state_39020;
if(cljs.core.truth_(inst_39006)){
var statearr_39030_39061 = state_39020__$1;
(statearr_39030_39061[(1)] = (12));

} else {
var statearr_39031_39062 = state_39020__$1;
(statearr_39031_39062[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39021 === (3))){
var inst_39018 = (state_39020[(2)]);
var state_39020__$1 = state_39020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39020__$1,inst_39018);
} else {
if((state_val_39021 === (12))){
var inst_38980 = (state_39020[(7)]);
var inst_39008 = cljs.core.vec.call(null,inst_38980);
var state_39020__$1 = state_39020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39020__$1,(15),out,inst_39008);
} else {
if((state_val_39021 === (2))){
var state_39020__$1 = state_39020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39020__$1,(4),ch);
} else {
if((state_val_39021 === (11))){
var inst_38988 = (state_39020[(10)]);
var inst_38984 = (state_39020[(9)]);
var inst_38998 = (state_39020[(2)]);
var inst_38999 = [];
var inst_39000 = inst_38999.push(inst_38984);
var inst_38980 = inst_38999;
var inst_38981 = inst_38988;
var state_39020__$1 = (function (){var statearr_39032 = state_39020;
(statearr_39032[(7)] = inst_38980);

(statearr_39032[(11)] = inst_39000);

(statearr_39032[(8)] = inst_38981);

(statearr_39032[(12)] = inst_38998);

return statearr_39032;
})();
var statearr_39033_39063 = state_39020__$1;
(statearr_39033_39063[(2)] = null);

(statearr_39033_39063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39021 === (9))){
var inst_38980 = (state_39020[(7)]);
var inst_38996 = cljs.core.vec.call(null,inst_38980);
var state_39020__$1 = state_39020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39020__$1,(11),out,inst_38996);
} else {
if((state_val_39021 === (5))){
var inst_38988 = (state_39020[(10)]);
var inst_38984 = (state_39020[(9)]);
var inst_38981 = (state_39020[(8)]);
var inst_38988__$1 = f.call(null,inst_38984);
var inst_38989 = cljs.core._EQ_.call(null,inst_38988__$1,inst_38981);
var inst_38990 = cljs.core.keyword_identical_QMARK_.call(null,inst_38981,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38991 = (inst_38989) || (inst_38990);
var state_39020__$1 = (function (){var statearr_39034 = state_39020;
(statearr_39034[(10)] = inst_38988__$1);

return statearr_39034;
})();
if(cljs.core.truth_(inst_38991)){
var statearr_39035_39064 = state_39020__$1;
(statearr_39035_39064[(1)] = (8));

} else {
var statearr_39036_39065 = state_39020__$1;
(statearr_39036_39065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39021 === (14))){
var inst_39013 = (state_39020[(2)]);
var inst_39014 = cljs.core.async.close_BANG_.call(null,out);
var state_39020__$1 = (function (){var statearr_39038 = state_39020;
(statearr_39038[(13)] = inst_39013);

return statearr_39038;
})();
var statearr_39039_39066 = state_39020__$1;
(statearr_39039_39066[(2)] = inst_39014);

(statearr_39039_39066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39021 === (10))){
var inst_39003 = (state_39020[(2)]);
var state_39020__$1 = state_39020;
var statearr_39040_39067 = state_39020__$1;
(statearr_39040_39067[(2)] = inst_39003);

(statearr_39040_39067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39021 === (8))){
var inst_38980 = (state_39020[(7)]);
var inst_38988 = (state_39020[(10)]);
var inst_38984 = (state_39020[(9)]);
var inst_38993 = inst_38980.push(inst_38984);
var tmp39037 = inst_38980;
var inst_38980__$1 = tmp39037;
var inst_38981 = inst_38988;
var state_39020__$1 = (function (){var statearr_39041 = state_39020;
(statearr_39041[(7)] = inst_38980__$1);

(statearr_39041[(14)] = inst_38993);

(statearr_39041[(8)] = inst_38981);

return statearr_39041;
})();
var statearr_39042_39068 = state_39020__$1;
(statearr_39042_39068[(2)] = null);

(statearr_39042_39068[(1)] = (2));


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
});})(c__20906__auto___39054,out))
;
return ((function (switch__20794__auto__,c__20906__auto___39054,out){
return (function() {
var cljs$core$async$state_machine__20795__auto__ = null;
var cljs$core$async$state_machine__20795__auto____0 = (function (){
var statearr_39046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39046[(0)] = cljs$core$async$state_machine__20795__auto__);

(statearr_39046[(1)] = (1));

return statearr_39046;
});
var cljs$core$async$state_machine__20795__auto____1 = (function (state_39020){
while(true){
var ret_value__20796__auto__ = (function (){try{while(true){
var result__20797__auto__ = switch__20794__auto__.call(null,state_39020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20797__auto__;
}
break;
}
}catch (e39047){if((e39047 instanceof Object)){
var ex__20798__auto__ = e39047;
var statearr_39048_39069 = state_39020;
(statearr_39048_39069[(5)] = ex__20798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39070 = state_39020;
state_39020 = G__39070;
continue;
} else {
return ret_value__20796__auto__;
}
break;
}
});
cljs$core$async$state_machine__20795__auto__ = function(state_39020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20795__auto____1.call(this,state_39020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20795__auto____0;
cljs$core$async$state_machine__20795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20795__auto____1;
return cljs$core$async$state_machine__20795__auto__;
})()
;})(switch__20794__auto__,c__20906__auto___39054,out))
})();
var state__20908__auto__ = (function (){var statearr_39049 = f__20907__auto__.call(null);
(statearr_39049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20906__auto___39054);

return statearr_39049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20908__auto__);
});})(c__20906__auto___39054,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1465694405630