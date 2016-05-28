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
var args32974 = [];
var len__19512__auto___32980 = arguments.length;
var i__19513__auto___32981 = (0);
while(true){
if((i__19513__auto___32981 < len__19512__auto___32980)){
args32974.push((arguments[i__19513__auto___32981]));

var G__32982 = (i__19513__auto___32981 + (1));
i__19513__auto___32981 = G__32982;
continue;
} else {
}
break;
}

var G__32976 = args32974.length;
switch (G__32976) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32974.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32977 = (function (f,blockable,meta32978){
this.f = f;
this.blockable = blockable;
this.meta32978 = meta32978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32979,meta32978__$1){
var self__ = this;
var _32979__$1 = this;
return (new cljs.core.async.t_cljs$core$async32977(self__.f,self__.blockable,meta32978__$1));
});

cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32979){
var self__ = this;
var _32979__$1 = this;
return self__.meta32978;
});

cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32978","meta32978",95566102,null)], null);
});

cljs.core.async.t_cljs$core$async32977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32977";

cljs.core.async.t_cljs$core$async32977.cljs$lang$ctorPrWriter = (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async32977");
});

cljs.core.async.__GT_t_cljs$core$async32977 = (function cljs$core$async$__GT_t_cljs$core$async32977(f__$1,blockable__$1,meta32978){
return (new cljs.core.async.t_cljs$core$async32977(f__$1,blockable__$1,meta32978));
});

}

return (new cljs.core.async.t_cljs$core$async32977(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args32986 = [];
var len__19512__auto___32989 = arguments.length;
var i__19513__auto___32990 = (0);
while(true){
if((i__19513__auto___32990 < len__19512__auto___32989)){
args32986.push((arguments[i__19513__auto___32990]));

var G__32991 = (i__19513__auto___32990 + (1));
i__19513__auto___32990 = G__32991;
continue;
} else {
}
break;
}

var G__32988 = args32986.length;
switch (G__32988) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32986.length)].join('')));

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
var args32993 = [];
var len__19512__auto___32996 = arguments.length;
var i__19513__auto___32997 = (0);
while(true){
if((i__19513__auto___32997 < len__19512__auto___32996)){
args32993.push((arguments[i__19513__auto___32997]));

var G__32998 = (i__19513__auto___32997 + (1));
i__19513__auto___32997 = G__32998;
continue;
} else {
}
break;
}

var G__32995 = args32993.length;
switch (G__32995) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32993.length)].join('')));

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
var args33000 = [];
var len__19512__auto___33003 = arguments.length;
var i__19513__auto___33004 = (0);
while(true){
if((i__19513__auto___33004 < len__19512__auto___33003)){
args33000.push((arguments[i__19513__auto___33004]));

var G__33005 = (i__19513__auto___33004 + (1));
i__19513__auto___33004 = G__33005;
continue;
} else {
}
break;
}

var G__33002 = args33000.length;
switch (G__33002) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33000.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33007 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33007);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33007,ret){
return (function (){
return fn1.call(null,val_33007);
});})(val_33007,ret))
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
var args33008 = [];
var len__19512__auto___33011 = arguments.length;
var i__19513__auto___33012 = (0);
while(true){
if((i__19513__auto___33012 < len__19512__auto___33011)){
args33008.push((arguments[i__19513__auto___33012]));

var G__33013 = (i__19513__auto___33012 + (1));
i__19513__auto___33012 = G__33013;
continue;
} else {
}
break;
}

var G__33010 = args33008.length;
switch (G__33010) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33008.length)].join('')));

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
var n__19357__auto___33015 = n;
var x_33016 = (0);
while(true){
if((x_33016 < n__19357__auto___33015)){
(a[x_33016] = (0));

var G__33017 = (x_33016 + (1));
x_33016 = G__33017;
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

var G__33018 = (i + (1));
i = G__33018;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33022 = (function (alt_flag,flag,meta33023){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33023 = meta33023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33024,meta33023__$1){
var self__ = this;
var _33024__$1 = this;
return (new cljs.core.async.t_cljs$core$async33022(self__.alt_flag,self__.flag,meta33023__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33024){
var self__ = this;
var _33024__$1 = this;
return self__.meta33023;
});})(flag))
;

cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33022.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33023","meta33023",1777698271,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33022";

cljs.core.async.t_cljs$core$async33022.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async33022");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33022 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33022(alt_flag__$1,flag__$1,meta33023){
return (new cljs.core.async.t_cljs$core$async33022(alt_flag__$1,flag__$1,meta33023));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33022(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33028 = (function (alt_handler,flag,cb,meta33029){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33029 = meta33029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33030,meta33029__$1){
var self__ = this;
var _33030__$1 = this;
return (new cljs.core.async.t_cljs$core$async33028(self__.alt_handler,self__.flag,self__.cb,meta33029__$1));
});

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33030){
var self__ = this;
var _33030__$1 = this;
return self__.meta33029;
});

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33029","meta33029",678019042,null)], null);
});

cljs.core.async.t_cljs$core$async33028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33028";

cljs.core.async.t_cljs$core$async33028.cljs$lang$ctorPrWriter = (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async33028");
});

cljs.core.async.__GT_t_cljs$core$async33028 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33028(alt_handler__$1,flag__$1,cb__$1,meta33029){
return (new cljs.core.async.t_cljs$core$async33028(alt_handler__$1,flag__$1,cb__$1,meta33029));
});

}

return (new cljs.core.async.t_cljs$core$async33028(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33031_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33031_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33032_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33032_SHARP_,port], null));
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
var G__33033 = (i + (1));
i = G__33033;
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
var len__19512__auto___33039 = arguments.length;
var i__19513__auto___33040 = (0);
while(true){
if((i__19513__auto___33040 < len__19512__auto___33039)){
args__19519__auto__.push((arguments[i__19513__auto___33040]));

var G__33041 = (i__19513__auto___33040 + (1));
i__19513__auto___33040 = G__33041;
continue;
} else {
}
break;
}

var argseq__19520__auto__ = ((((1) < args__19519__auto__.length))?(new cljs.core.IndexedSeq(args__19519__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19520__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33036){
var map__33037 = p__33036;
var map__33037__$1 = ((((!((map__33037 == null)))?((((map__33037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33037):map__33037);
var opts = map__33037__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33034){
var G__33035 = cljs.core.first.call(null,seq33034);
var seq33034__$1 = cljs.core.next.call(null,seq33034);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33035,seq33034__$1);
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
var args33042 = [];
var len__19512__auto___33092 = arguments.length;
var i__19513__auto___33093 = (0);
while(true){
if((i__19513__auto___33093 < len__19512__auto___33092)){
args33042.push((arguments[i__19513__auto___33093]));

var G__33094 = (i__19513__auto___33093 + (1));
i__19513__auto___33093 = G__33094;
continue;
} else {
}
break;
}

var G__33044 = args33042.length;
switch (G__33044) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33042.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20609__auto___33096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___33096){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___33096){
return (function (state_33068){
var state_val_33069 = (state_33068[(1)]);
if((state_val_33069 === (7))){
var inst_33064 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
var statearr_33070_33097 = state_33068__$1;
(statearr_33070_33097[(2)] = inst_33064);

(statearr_33070_33097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (1))){
var state_33068__$1 = state_33068;
var statearr_33071_33098 = state_33068__$1;
(statearr_33071_33098[(2)] = null);

(statearr_33071_33098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (4))){
var inst_33047 = (state_33068[(7)]);
var inst_33047__$1 = (state_33068[(2)]);
var inst_33048 = (inst_33047__$1 == null);
var state_33068__$1 = (function (){var statearr_33072 = state_33068;
(statearr_33072[(7)] = inst_33047__$1);

return statearr_33072;
})();
if(cljs.core.truth_(inst_33048)){
var statearr_33073_33099 = state_33068__$1;
(statearr_33073_33099[(1)] = (5));

} else {
var statearr_33074_33100 = state_33068__$1;
(statearr_33074_33100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (13))){
var state_33068__$1 = state_33068;
var statearr_33075_33101 = state_33068__$1;
(statearr_33075_33101[(2)] = null);

(statearr_33075_33101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (6))){
var inst_33047 = (state_33068[(7)]);
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33068__$1,(11),to,inst_33047);
} else {
if((state_val_33069 === (3))){
var inst_33066 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33068__$1,inst_33066);
} else {
if((state_val_33069 === (12))){
var state_33068__$1 = state_33068;
var statearr_33076_33102 = state_33068__$1;
(statearr_33076_33102[(2)] = null);

(statearr_33076_33102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (2))){
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33068__$1,(4),from);
} else {
if((state_val_33069 === (11))){
var inst_33057 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
if(cljs.core.truth_(inst_33057)){
var statearr_33077_33103 = state_33068__$1;
(statearr_33077_33103[(1)] = (12));

} else {
var statearr_33078_33104 = state_33068__$1;
(statearr_33078_33104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (9))){
var state_33068__$1 = state_33068;
var statearr_33079_33105 = state_33068__$1;
(statearr_33079_33105[(2)] = null);

(statearr_33079_33105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (5))){
var state_33068__$1 = state_33068;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33080_33106 = state_33068__$1;
(statearr_33080_33106[(1)] = (8));

} else {
var statearr_33081_33107 = state_33068__$1;
(statearr_33081_33107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (14))){
var inst_33062 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
var statearr_33082_33108 = state_33068__$1;
(statearr_33082_33108[(2)] = inst_33062);

(statearr_33082_33108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (10))){
var inst_33054 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
var statearr_33083_33109 = state_33068__$1;
(statearr_33083_33109[(2)] = inst_33054);

(statearr_33083_33109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (8))){
var inst_33051 = cljs.core.async.close_BANG_.call(null,to);
var state_33068__$1 = state_33068;
var statearr_33084_33110 = state_33068__$1;
(statearr_33084_33110[(2)] = inst_33051);

(statearr_33084_33110[(1)] = (10));


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
});})(c__20609__auto___33096))
;
return ((function (switch__20497__auto__,c__20609__auto___33096){
return (function() {
var cljs$core$async$state_machine__20498__auto__ = null;
var cljs$core$async$state_machine__20498__auto____0 = (function (){
var statearr_33088 = [null,null,null,null,null,null,null,null];
(statearr_33088[(0)] = cljs$core$async$state_machine__20498__auto__);

(statearr_33088[(1)] = (1));

return statearr_33088;
});
var cljs$core$async$state_machine__20498__auto____1 = (function (state_33068){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_33068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e33089){if((e33089 instanceof Object)){
var ex__20501__auto__ = e33089;
var statearr_33090_33111 = state_33068;
(statearr_33090_33111[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33112 = state_33068;
state_33068 = G__33112;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$state_machine__20498__auto__ = function(state_33068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20498__auto____1.call(this,state_33068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20498__auto____0;
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20498__auto____1;
return cljs$core$async$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___33096))
})();
var state__20611__auto__ = (function (){var statearr_33091 = f__20610__auto__.call(null);
(statearr_33091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___33096);

return statearr_33091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___33096))
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
return (function (p__33296){
var vec__33297 = p__33296;
var v = cljs.core.nth.call(null,vec__33297,(0),null);
var p = cljs.core.nth.call(null,vec__33297,(1),null);
var job = vec__33297;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20609__auto___33479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___33479,res,vec__33297,v,p,job,jobs,results){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___33479,res,vec__33297,v,p,job,jobs,results){
return (function (state_33302){
var state_val_33303 = (state_33302[(1)]);
if((state_val_33303 === (1))){
var state_33302__$1 = state_33302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33302__$1,(2),res,v);
} else {
if((state_val_33303 === (2))){
var inst_33299 = (state_33302[(2)]);
var inst_33300 = cljs.core.async.close_BANG_.call(null,res);
var state_33302__$1 = (function (){var statearr_33304 = state_33302;
(statearr_33304[(7)] = inst_33299);

return statearr_33304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33302__$1,inst_33300);
} else {
return null;
}
}
});})(c__20609__auto___33479,res,vec__33297,v,p,job,jobs,results))
;
return ((function (switch__20497__auto__,c__20609__auto___33479,res,vec__33297,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0 = (function (){
var statearr_33308 = [null,null,null,null,null,null,null,null];
(statearr_33308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__);

(statearr_33308[(1)] = (1));

return statearr_33308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1 = (function (state_33302){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_33302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e33309){if((e33309 instanceof Object)){
var ex__20501__auto__ = e33309;
var statearr_33310_33480 = state_33302;
(statearr_33310_33480[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33481 = state_33302;
state_33302 = G__33481;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__ = function(state_33302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1.call(this,state_33302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___33479,res,vec__33297,v,p,job,jobs,results))
})();
var state__20611__auto__ = (function (){var statearr_33311 = f__20610__auto__.call(null);
(statearr_33311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___33479);

return statearr_33311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___33479,res,vec__33297,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33312){
var vec__33313 = p__33312;
var v = cljs.core.nth.call(null,vec__33313,(0),null);
var p = cljs.core.nth.call(null,vec__33313,(1),null);
var job = vec__33313;
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
var n__19357__auto___33482 = n;
var __33483 = (0);
while(true){
if((__33483 < n__19357__auto___33482)){
var G__33314_33484 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33314_33484) {
case "compute":
var c__20609__auto___33486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33483,c__20609__auto___33486,G__33314_33484,n__19357__auto___33482,jobs,results,process,async){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (__33483,c__20609__auto___33486,G__33314_33484,n__19357__auto___33482,jobs,results,process,async){
return (function (state_33327){
var state_val_33328 = (state_33327[(1)]);
if((state_val_33328 === (1))){
var state_33327__$1 = state_33327;
var statearr_33329_33487 = state_33327__$1;
(statearr_33329_33487[(2)] = null);

(statearr_33329_33487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (2))){
var state_33327__$1 = state_33327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33327__$1,(4),jobs);
} else {
if((state_val_33328 === (3))){
var inst_33325 = (state_33327[(2)]);
var state_33327__$1 = state_33327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33327__$1,inst_33325);
} else {
if((state_val_33328 === (4))){
var inst_33317 = (state_33327[(2)]);
var inst_33318 = process.call(null,inst_33317);
var state_33327__$1 = state_33327;
if(cljs.core.truth_(inst_33318)){
var statearr_33330_33488 = state_33327__$1;
(statearr_33330_33488[(1)] = (5));

} else {
var statearr_33331_33489 = state_33327__$1;
(statearr_33331_33489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (5))){
var state_33327__$1 = state_33327;
var statearr_33332_33490 = state_33327__$1;
(statearr_33332_33490[(2)] = null);

(statearr_33332_33490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (6))){
var state_33327__$1 = state_33327;
var statearr_33333_33491 = state_33327__$1;
(statearr_33333_33491[(2)] = null);

(statearr_33333_33491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (7))){
var inst_33323 = (state_33327[(2)]);
var state_33327__$1 = state_33327;
var statearr_33334_33492 = state_33327__$1;
(statearr_33334_33492[(2)] = inst_33323);

(statearr_33334_33492[(1)] = (3));


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
});})(__33483,c__20609__auto___33486,G__33314_33484,n__19357__auto___33482,jobs,results,process,async))
;
return ((function (__33483,switch__20497__auto__,c__20609__auto___33486,G__33314_33484,n__19357__auto___33482,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0 = (function (){
var statearr_33338 = [null,null,null,null,null,null,null];
(statearr_33338[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__);

(statearr_33338[(1)] = (1));

return statearr_33338;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1 = (function (state_33327){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_33327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e33339){if((e33339 instanceof Object)){
var ex__20501__auto__ = e33339;
var statearr_33340_33493 = state_33327;
(statearr_33340_33493[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33494 = state_33327;
state_33327 = G__33494;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__ = function(state_33327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1.call(this,state_33327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__;
})()
;})(__33483,switch__20497__auto__,c__20609__auto___33486,G__33314_33484,n__19357__auto___33482,jobs,results,process,async))
})();
var state__20611__auto__ = (function (){var statearr_33341 = f__20610__auto__.call(null);
(statearr_33341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___33486);

return statearr_33341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(__33483,c__20609__auto___33486,G__33314_33484,n__19357__auto___33482,jobs,results,process,async))
);


break;
case "async":
var c__20609__auto___33495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33483,c__20609__auto___33495,G__33314_33484,n__19357__auto___33482,jobs,results,process,async){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (__33483,c__20609__auto___33495,G__33314_33484,n__19357__auto___33482,jobs,results,process,async){
return (function (state_33354){
var state_val_33355 = (state_33354[(1)]);
if((state_val_33355 === (1))){
var state_33354__$1 = state_33354;
var statearr_33356_33496 = state_33354__$1;
(statearr_33356_33496[(2)] = null);

(statearr_33356_33496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33355 === (2))){
var state_33354__$1 = state_33354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33354__$1,(4),jobs);
} else {
if((state_val_33355 === (3))){
var inst_33352 = (state_33354[(2)]);
var state_33354__$1 = state_33354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33354__$1,inst_33352);
} else {
if((state_val_33355 === (4))){
var inst_33344 = (state_33354[(2)]);
var inst_33345 = async.call(null,inst_33344);
var state_33354__$1 = state_33354;
if(cljs.core.truth_(inst_33345)){
var statearr_33357_33497 = state_33354__$1;
(statearr_33357_33497[(1)] = (5));

} else {
var statearr_33358_33498 = state_33354__$1;
(statearr_33358_33498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33355 === (5))){
var state_33354__$1 = state_33354;
var statearr_33359_33499 = state_33354__$1;
(statearr_33359_33499[(2)] = null);

(statearr_33359_33499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33355 === (6))){
var state_33354__$1 = state_33354;
var statearr_33360_33500 = state_33354__$1;
(statearr_33360_33500[(2)] = null);

(statearr_33360_33500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33355 === (7))){
var inst_33350 = (state_33354[(2)]);
var state_33354__$1 = state_33354;
var statearr_33361_33501 = state_33354__$1;
(statearr_33361_33501[(2)] = inst_33350);

(statearr_33361_33501[(1)] = (3));


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
});})(__33483,c__20609__auto___33495,G__33314_33484,n__19357__auto___33482,jobs,results,process,async))
;
return ((function (__33483,switch__20497__auto__,c__20609__auto___33495,G__33314_33484,n__19357__auto___33482,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0 = (function (){
var statearr_33365 = [null,null,null,null,null,null,null];
(statearr_33365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__);

(statearr_33365[(1)] = (1));

return statearr_33365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1 = (function (state_33354){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_33354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e33366){if((e33366 instanceof Object)){
var ex__20501__auto__ = e33366;
var statearr_33367_33502 = state_33354;
(statearr_33367_33502[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33503 = state_33354;
state_33354 = G__33503;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__ = function(state_33354){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1.call(this,state_33354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__;
})()
;})(__33483,switch__20497__auto__,c__20609__auto___33495,G__33314_33484,n__19357__auto___33482,jobs,results,process,async))
})();
var state__20611__auto__ = (function (){var statearr_33368 = f__20610__auto__.call(null);
(statearr_33368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___33495);

return statearr_33368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(__33483,c__20609__auto___33495,G__33314_33484,n__19357__auto___33482,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33504 = (__33483 + (1));
__33483 = G__33504;
continue;
} else {
}
break;
}

var c__20609__auto___33505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___33505,jobs,results,process,async){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___33505,jobs,results,process,async){
return (function (state_33390){
var state_val_33391 = (state_33390[(1)]);
if((state_val_33391 === (1))){
var state_33390__$1 = state_33390;
var statearr_33392_33506 = state_33390__$1;
(statearr_33392_33506[(2)] = null);

(statearr_33392_33506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (2))){
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(4),from);
} else {
if((state_val_33391 === (3))){
var inst_33388 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33390__$1,inst_33388);
} else {
if((state_val_33391 === (4))){
var inst_33371 = (state_33390[(7)]);
var inst_33371__$1 = (state_33390[(2)]);
var inst_33372 = (inst_33371__$1 == null);
var state_33390__$1 = (function (){var statearr_33393 = state_33390;
(statearr_33393[(7)] = inst_33371__$1);

return statearr_33393;
})();
if(cljs.core.truth_(inst_33372)){
var statearr_33394_33507 = state_33390__$1;
(statearr_33394_33507[(1)] = (5));

} else {
var statearr_33395_33508 = state_33390__$1;
(statearr_33395_33508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (5))){
var inst_33374 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33390__$1 = state_33390;
var statearr_33396_33509 = state_33390__$1;
(statearr_33396_33509[(2)] = inst_33374);

(statearr_33396_33509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (6))){
var inst_33371 = (state_33390[(7)]);
var inst_33376 = (state_33390[(8)]);
var inst_33376__$1 = cljs.core.async.chan.call(null,(1));
var inst_33377 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33378 = [inst_33371,inst_33376__$1];
var inst_33379 = (new cljs.core.PersistentVector(null,2,(5),inst_33377,inst_33378,null));
var state_33390__$1 = (function (){var statearr_33397 = state_33390;
(statearr_33397[(8)] = inst_33376__$1);

return statearr_33397;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33390__$1,(8),jobs,inst_33379);
} else {
if((state_val_33391 === (7))){
var inst_33386 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33398_33511 = state_33390__$1;
(statearr_33398_33511[(2)] = inst_33386);

(statearr_33398_33511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (8))){
var inst_33376 = (state_33390[(8)]);
var inst_33381 = (state_33390[(2)]);
var state_33390__$1 = (function (){var statearr_33399 = state_33390;
(statearr_33399[(9)] = inst_33381);

return statearr_33399;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33390__$1,(9),results,inst_33376);
} else {
if((state_val_33391 === (9))){
var inst_33383 = (state_33390[(2)]);
var state_33390__$1 = (function (){var statearr_33400 = state_33390;
(statearr_33400[(10)] = inst_33383);

return statearr_33400;
})();
var statearr_33401_33512 = state_33390__$1;
(statearr_33401_33512[(2)] = null);

(statearr_33401_33512[(1)] = (2));


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
});})(c__20609__auto___33505,jobs,results,process,async))
;
return ((function (switch__20497__auto__,c__20609__auto___33505,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0 = (function (){
var statearr_33405 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33405[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__);

(statearr_33405[(1)] = (1));

return statearr_33405;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1 = (function (state_33390){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_33390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e33406){if((e33406 instanceof Object)){
var ex__20501__auto__ = e33406;
var statearr_33407_33513 = state_33390;
(statearr_33407_33513[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33514 = state_33390;
state_33390 = G__33514;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__ = function(state_33390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1.call(this,state_33390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___33505,jobs,results,process,async))
})();
var state__20611__auto__ = (function (){var statearr_33408 = f__20610__auto__.call(null);
(statearr_33408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___33505);

return statearr_33408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___33505,jobs,results,process,async))
);


var c__20609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto__,jobs,results,process,async){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto__,jobs,results,process,async){
return (function (state_33446){
var state_val_33447 = (state_33446[(1)]);
if((state_val_33447 === (7))){
var inst_33442 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
var statearr_33448_33515 = state_33446__$1;
(statearr_33448_33515[(2)] = inst_33442);

(statearr_33448_33515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (20))){
var state_33446__$1 = state_33446;
var statearr_33449_33516 = state_33446__$1;
(statearr_33449_33516[(2)] = null);

(statearr_33449_33516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (1))){
var state_33446__$1 = state_33446;
var statearr_33450_33517 = state_33446__$1;
(statearr_33450_33517[(2)] = null);

(statearr_33450_33517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (4))){
var inst_33411 = (state_33446[(7)]);
var inst_33411__$1 = (state_33446[(2)]);
var inst_33412 = (inst_33411__$1 == null);
var state_33446__$1 = (function (){var statearr_33451 = state_33446;
(statearr_33451[(7)] = inst_33411__$1);

return statearr_33451;
})();
if(cljs.core.truth_(inst_33412)){
var statearr_33452_33518 = state_33446__$1;
(statearr_33452_33518[(1)] = (5));

} else {
var statearr_33453_33519 = state_33446__$1;
(statearr_33453_33519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (15))){
var inst_33424 = (state_33446[(8)]);
var state_33446__$1 = state_33446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33446__$1,(18),to,inst_33424);
} else {
if((state_val_33447 === (21))){
var inst_33437 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
var statearr_33454_33520 = state_33446__$1;
(statearr_33454_33520[(2)] = inst_33437);

(statearr_33454_33520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (13))){
var inst_33439 = (state_33446[(2)]);
var state_33446__$1 = (function (){var statearr_33455 = state_33446;
(statearr_33455[(9)] = inst_33439);

return statearr_33455;
})();
var statearr_33456_33521 = state_33446__$1;
(statearr_33456_33521[(2)] = null);

(statearr_33456_33521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (6))){
var inst_33411 = (state_33446[(7)]);
var state_33446__$1 = state_33446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33446__$1,(11),inst_33411);
} else {
if((state_val_33447 === (17))){
var inst_33432 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
if(cljs.core.truth_(inst_33432)){
var statearr_33457_33522 = state_33446__$1;
(statearr_33457_33522[(1)] = (19));

} else {
var statearr_33458_33523 = state_33446__$1;
(statearr_33458_33523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (3))){
var inst_33444 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33446__$1,inst_33444);
} else {
if((state_val_33447 === (12))){
var inst_33421 = (state_33446[(10)]);
var state_33446__$1 = state_33446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33446__$1,(14),inst_33421);
} else {
if((state_val_33447 === (2))){
var state_33446__$1 = state_33446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33446__$1,(4),results);
} else {
if((state_val_33447 === (19))){
var state_33446__$1 = state_33446;
var statearr_33459_33524 = state_33446__$1;
(statearr_33459_33524[(2)] = null);

(statearr_33459_33524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (11))){
var inst_33421 = (state_33446[(2)]);
var state_33446__$1 = (function (){var statearr_33460 = state_33446;
(statearr_33460[(10)] = inst_33421);

return statearr_33460;
})();
var statearr_33461_33525 = state_33446__$1;
(statearr_33461_33525[(2)] = null);

(statearr_33461_33525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (9))){
var state_33446__$1 = state_33446;
var statearr_33462_33526 = state_33446__$1;
(statearr_33462_33526[(2)] = null);

(statearr_33462_33526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (5))){
var state_33446__$1 = state_33446;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33463_33527 = state_33446__$1;
(statearr_33463_33527[(1)] = (8));

} else {
var statearr_33464_33528 = state_33446__$1;
(statearr_33464_33528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (14))){
var inst_33426 = (state_33446[(11)]);
var inst_33424 = (state_33446[(8)]);
var inst_33424__$1 = (state_33446[(2)]);
var inst_33425 = (inst_33424__$1 == null);
var inst_33426__$1 = cljs.core.not.call(null,inst_33425);
var state_33446__$1 = (function (){var statearr_33465 = state_33446;
(statearr_33465[(11)] = inst_33426__$1);

(statearr_33465[(8)] = inst_33424__$1);

return statearr_33465;
})();
if(inst_33426__$1){
var statearr_33466_33529 = state_33446__$1;
(statearr_33466_33529[(1)] = (15));

} else {
var statearr_33467_33530 = state_33446__$1;
(statearr_33467_33530[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (16))){
var inst_33426 = (state_33446[(11)]);
var state_33446__$1 = state_33446;
var statearr_33468_33531 = state_33446__$1;
(statearr_33468_33531[(2)] = inst_33426);

(statearr_33468_33531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (10))){
var inst_33418 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
var statearr_33469_33532 = state_33446__$1;
(statearr_33469_33532[(2)] = inst_33418);

(statearr_33469_33532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (18))){
var inst_33429 = (state_33446[(2)]);
var state_33446__$1 = state_33446;
var statearr_33470_33533 = state_33446__$1;
(statearr_33470_33533[(2)] = inst_33429);

(statearr_33470_33533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33447 === (8))){
var inst_33415 = cljs.core.async.close_BANG_.call(null,to);
var state_33446__$1 = state_33446;
var statearr_33471_33534 = state_33446__$1;
(statearr_33471_33534[(2)] = inst_33415);

(statearr_33471_33534[(1)] = (10));


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
});})(c__20609__auto__,jobs,results,process,async))
;
return ((function (switch__20497__auto__,c__20609__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0 = (function (){
var statearr_33475 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__);

(statearr_33475[(1)] = (1));

return statearr_33475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1 = (function (state_33446){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_33446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e33476){if((e33476 instanceof Object)){
var ex__20501__auto__ = e33476;
var statearr_33477_33535 = state_33446;
(statearr_33477_33535[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33536 = state_33446;
state_33446 = G__33536;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__ = function(state_33446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1.call(this,state_33446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto__,jobs,results,process,async))
})();
var state__20611__auto__ = (function (){var statearr_33478 = f__20610__auto__.call(null);
(statearr_33478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto__);

return statearr_33478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto__,jobs,results,process,async))
);

return c__20609__auto__;
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
var args33537 = [];
var len__19512__auto___33540 = arguments.length;
var i__19513__auto___33541 = (0);
while(true){
if((i__19513__auto___33541 < len__19512__auto___33540)){
args33537.push((arguments[i__19513__auto___33541]));

var G__33542 = (i__19513__auto___33541 + (1));
i__19513__auto___33541 = G__33542;
continue;
} else {
}
break;
}

var G__33539 = args33537.length;
switch (G__33539) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33537.length)].join('')));

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
var args33544 = [];
var len__19512__auto___33547 = arguments.length;
var i__19513__auto___33548 = (0);
while(true){
if((i__19513__auto___33548 < len__19512__auto___33547)){
args33544.push((arguments[i__19513__auto___33548]));

var G__33549 = (i__19513__auto___33548 + (1));
i__19513__auto___33548 = G__33549;
continue;
} else {
}
break;
}

var G__33546 = args33544.length;
switch (G__33546) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33544.length)].join('')));

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
var args33551 = [];
var len__19512__auto___33604 = arguments.length;
var i__19513__auto___33605 = (0);
while(true){
if((i__19513__auto___33605 < len__19512__auto___33604)){
args33551.push((arguments[i__19513__auto___33605]));

var G__33606 = (i__19513__auto___33605 + (1));
i__19513__auto___33605 = G__33606;
continue;
} else {
}
break;
}

var G__33553 = args33551.length;
switch (G__33553) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33551.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20609__auto___33608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___33608,tc,fc){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___33608,tc,fc){
return (function (state_33579){
var state_val_33580 = (state_33579[(1)]);
if((state_val_33580 === (7))){
var inst_33575 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
var statearr_33581_33609 = state_33579__$1;
(statearr_33581_33609[(2)] = inst_33575);

(statearr_33581_33609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (1))){
var state_33579__$1 = state_33579;
var statearr_33582_33610 = state_33579__$1;
(statearr_33582_33610[(2)] = null);

(statearr_33582_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (4))){
var inst_33556 = (state_33579[(7)]);
var inst_33556__$1 = (state_33579[(2)]);
var inst_33557 = (inst_33556__$1 == null);
var state_33579__$1 = (function (){var statearr_33583 = state_33579;
(statearr_33583[(7)] = inst_33556__$1);

return statearr_33583;
})();
if(cljs.core.truth_(inst_33557)){
var statearr_33584_33611 = state_33579__$1;
(statearr_33584_33611[(1)] = (5));

} else {
var statearr_33585_33612 = state_33579__$1;
(statearr_33585_33612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (13))){
var state_33579__$1 = state_33579;
var statearr_33586_33613 = state_33579__$1;
(statearr_33586_33613[(2)] = null);

(statearr_33586_33613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (6))){
var inst_33556 = (state_33579[(7)]);
var inst_33562 = p.call(null,inst_33556);
var state_33579__$1 = state_33579;
if(cljs.core.truth_(inst_33562)){
var statearr_33587_33614 = state_33579__$1;
(statearr_33587_33614[(1)] = (9));

} else {
var statearr_33588_33615 = state_33579__$1;
(statearr_33588_33615[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (3))){
var inst_33577 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33579__$1,inst_33577);
} else {
if((state_val_33580 === (12))){
var state_33579__$1 = state_33579;
var statearr_33589_33616 = state_33579__$1;
(statearr_33589_33616[(2)] = null);

(statearr_33589_33616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (2))){
var state_33579__$1 = state_33579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33579__$1,(4),ch);
} else {
if((state_val_33580 === (11))){
var inst_33556 = (state_33579[(7)]);
var inst_33566 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33579__$1,(8),inst_33566,inst_33556);
} else {
if((state_val_33580 === (9))){
var state_33579__$1 = state_33579;
var statearr_33590_33617 = state_33579__$1;
(statearr_33590_33617[(2)] = tc);

(statearr_33590_33617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (5))){
var inst_33559 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33560 = cljs.core.async.close_BANG_.call(null,fc);
var state_33579__$1 = (function (){var statearr_33591 = state_33579;
(statearr_33591[(8)] = inst_33559);

return statearr_33591;
})();
var statearr_33592_33618 = state_33579__$1;
(statearr_33592_33618[(2)] = inst_33560);

(statearr_33592_33618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (14))){
var inst_33573 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
var statearr_33593_33619 = state_33579__$1;
(statearr_33593_33619[(2)] = inst_33573);

(statearr_33593_33619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (10))){
var state_33579__$1 = state_33579;
var statearr_33594_33620 = state_33579__$1;
(statearr_33594_33620[(2)] = fc);

(statearr_33594_33620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33580 === (8))){
var inst_33568 = (state_33579[(2)]);
var state_33579__$1 = state_33579;
if(cljs.core.truth_(inst_33568)){
var statearr_33595_33621 = state_33579__$1;
(statearr_33595_33621[(1)] = (12));

} else {
var statearr_33596_33622 = state_33579__$1;
(statearr_33596_33622[(1)] = (13));

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
});})(c__20609__auto___33608,tc,fc))
;
return ((function (switch__20497__auto__,c__20609__auto___33608,tc,fc){
return (function() {
var cljs$core$async$state_machine__20498__auto__ = null;
var cljs$core$async$state_machine__20498__auto____0 = (function (){
var statearr_33600 = [null,null,null,null,null,null,null,null,null];
(statearr_33600[(0)] = cljs$core$async$state_machine__20498__auto__);

(statearr_33600[(1)] = (1));

return statearr_33600;
});
var cljs$core$async$state_machine__20498__auto____1 = (function (state_33579){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_33579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e33601){if((e33601 instanceof Object)){
var ex__20501__auto__ = e33601;
var statearr_33602_33623 = state_33579;
(statearr_33602_33623[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33624 = state_33579;
state_33579 = G__33624;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$state_machine__20498__auto__ = function(state_33579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20498__auto____1.call(this,state_33579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20498__auto____0;
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20498__auto____1;
return cljs$core$async$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___33608,tc,fc))
})();
var state__20611__auto__ = (function (){var statearr_33603 = f__20610__auto__.call(null);
(statearr_33603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___33608);

return statearr_33603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___33608,tc,fc))
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
var c__20609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto__){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto__){
return (function (state_33688){
var state_val_33689 = (state_33688[(1)]);
if((state_val_33689 === (7))){
var inst_33684 = (state_33688[(2)]);
var state_33688__$1 = state_33688;
var statearr_33690_33711 = state_33688__$1;
(statearr_33690_33711[(2)] = inst_33684);

(statearr_33690_33711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (1))){
var inst_33668 = init;
var state_33688__$1 = (function (){var statearr_33691 = state_33688;
(statearr_33691[(7)] = inst_33668);

return statearr_33691;
})();
var statearr_33692_33712 = state_33688__$1;
(statearr_33692_33712[(2)] = null);

(statearr_33692_33712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (4))){
var inst_33671 = (state_33688[(8)]);
var inst_33671__$1 = (state_33688[(2)]);
var inst_33672 = (inst_33671__$1 == null);
var state_33688__$1 = (function (){var statearr_33693 = state_33688;
(statearr_33693[(8)] = inst_33671__$1);

return statearr_33693;
})();
if(cljs.core.truth_(inst_33672)){
var statearr_33694_33713 = state_33688__$1;
(statearr_33694_33713[(1)] = (5));

} else {
var statearr_33695_33714 = state_33688__$1;
(statearr_33695_33714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (6))){
var inst_33671 = (state_33688[(8)]);
var inst_33675 = (state_33688[(9)]);
var inst_33668 = (state_33688[(7)]);
var inst_33675__$1 = f.call(null,inst_33668,inst_33671);
var inst_33676 = cljs.core.reduced_QMARK_.call(null,inst_33675__$1);
var state_33688__$1 = (function (){var statearr_33696 = state_33688;
(statearr_33696[(9)] = inst_33675__$1);

return statearr_33696;
})();
if(inst_33676){
var statearr_33697_33715 = state_33688__$1;
(statearr_33697_33715[(1)] = (8));

} else {
var statearr_33698_33716 = state_33688__$1;
(statearr_33698_33716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (3))){
var inst_33686 = (state_33688[(2)]);
var state_33688__$1 = state_33688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33688__$1,inst_33686);
} else {
if((state_val_33689 === (2))){
var state_33688__$1 = state_33688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33688__$1,(4),ch);
} else {
if((state_val_33689 === (9))){
var inst_33675 = (state_33688[(9)]);
var inst_33668 = inst_33675;
var state_33688__$1 = (function (){var statearr_33699 = state_33688;
(statearr_33699[(7)] = inst_33668);

return statearr_33699;
})();
var statearr_33700_33717 = state_33688__$1;
(statearr_33700_33717[(2)] = null);

(statearr_33700_33717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (5))){
var inst_33668 = (state_33688[(7)]);
var state_33688__$1 = state_33688;
var statearr_33701_33718 = state_33688__$1;
(statearr_33701_33718[(2)] = inst_33668);

(statearr_33701_33718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (10))){
var inst_33682 = (state_33688[(2)]);
var state_33688__$1 = state_33688;
var statearr_33702_33719 = state_33688__$1;
(statearr_33702_33719[(2)] = inst_33682);

(statearr_33702_33719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33689 === (8))){
var inst_33675 = (state_33688[(9)]);
var inst_33678 = cljs.core.deref.call(null,inst_33675);
var state_33688__$1 = state_33688;
var statearr_33703_33720 = state_33688__$1;
(statearr_33703_33720[(2)] = inst_33678);

(statearr_33703_33720[(1)] = (10));


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
});})(c__20609__auto__))
;
return ((function (switch__20497__auto__,c__20609__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20498__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20498__auto____0 = (function (){
var statearr_33707 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33707[(0)] = cljs$core$async$reduce_$_state_machine__20498__auto__);

(statearr_33707[(1)] = (1));

return statearr_33707;
});
var cljs$core$async$reduce_$_state_machine__20498__auto____1 = (function (state_33688){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_33688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e33708){if((e33708 instanceof Object)){
var ex__20501__auto__ = e33708;
var statearr_33709_33721 = state_33688;
(statearr_33709_33721[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33722 = state_33688;
state_33688 = G__33722;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20498__auto__ = function(state_33688){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20498__auto____1.call(this,state_33688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20498__auto____0;
cljs$core$async$reduce_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20498__auto____1;
return cljs$core$async$reduce_$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto__))
})();
var state__20611__auto__ = (function (){var statearr_33710 = f__20610__auto__.call(null);
(statearr_33710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto__);

return statearr_33710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto__))
);

return c__20609__auto__;
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
var args33723 = [];
var len__19512__auto___33775 = arguments.length;
var i__19513__auto___33776 = (0);
while(true){
if((i__19513__auto___33776 < len__19512__auto___33775)){
args33723.push((arguments[i__19513__auto___33776]));

var G__33777 = (i__19513__auto___33776 + (1));
i__19513__auto___33776 = G__33777;
continue;
} else {
}
break;
}

var G__33725 = args33723.length;
switch (G__33725) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33723.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto__){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto__){
return (function (state_33750){
var state_val_33751 = (state_33750[(1)]);
if((state_val_33751 === (7))){
var inst_33732 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33752_33779 = state_33750__$1;
(statearr_33752_33779[(2)] = inst_33732);

(statearr_33752_33779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (1))){
var inst_33726 = cljs.core.seq.call(null,coll);
var inst_33727 = inst_33726;
var state_33750__$1 = (function (){var statearr_33753 = state_33750;
(statearr_33753[(7)] = inst_33727);

return statearr_33753;
})();
var statearr_33754_33780 = state_33750__$1;
(statearr_33754_33780[(2)] = null);

(statearr_33754_33780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (4))){
var inst_33727 = (state_33750[(7)]);
var inst_33730 = cljs.core.first.call(null,inst_33727);
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33750__$1,(7),ch,inst_33730);
} else {
if((state_val_33751 === (13))){
var inst_33744 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33755_33781 = state_33750__$1;
(statearr_33755_33781[(2)] = inst_33744);

(statearr_33755_33781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (6))){
var inst_33735 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
if(cljs.core.truth_(inst_33735)){
var statearr_33756_33782 = state_33750__$1;
(statearr_33756_33782[(1)] = (8));

} else {
var statearr_33757_33783 = state_33750__$1;
(statearr_33757_33783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (3))){
var inst_33748 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33750__$1,inst_33748);
} else {
if((state_val_33751 === (12))){
var state_33750__$1 = state_33750;
var statearr_33758_33784 = state_33750__$1;
(statearr_33758_33784[(2)] = null);

(statearr_33758_33784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (2))){
var inst_33727 = (state_33750[(7)]);
var state_33750__$1 = state_33750;
if(cljs.core.truth_(inst_33727)){
var statearr_33759_33785 = state_33750__$1;
(statearr_33759_33785[(1)] = (4));

} else {
var statearr_33760_33786 = state_33750__$1;
(statearr_33760_33786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (11))){
var inst_33741 = cljs.core.async.close_BANG_.call(null,ch);
var state_33750__$1 = state_33750;
var statearr_33761_33787 = state_33750__$1;
(statearr_33761_33787[(2)] = inst_33741);

(statearr_33761_33787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (9))){
var state_33750__$1 = state_33750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33762_33788 = state_33750__$1;
(statearr_33762_33788[(1)] = (11));

} else {
var statearr_33763_33789 = state_33750__$1;
(statearr_33763_33789[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (5))){
var inst_33727 = (state_33750[(7)]);
var state_33750__$1 = state_33750;
var statearr_33764_33790 = state_33750__$1;
(statearr_33764_33790[(2)] = inst_33727);

(statearr_33764_33790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (10))){
var inst_33746 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33765_33791 = state_33750__$1;
(statearr_33765_33791[(2)] = inst_33746);

(statearr_33765_33791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (8))){
var inst_33727 = (state_33750[(7)]);
var inst_33737 = cljs.core.next.call(null,inst_33727);
var inst_33727__$1 = inst_33737;
var state_33750__$1 = (function (){var statearr_33766 = state_33750;
(statearr_33766[(7)] = inst_33727__$1);

return statearr_33766;
})();
var statearr_33767_33792 = state_33750__$1;
(statearr_33767_33792[(2)] = null);

(statearr_33767_33792[(1)] = (2));


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
});})(c__20609__auto__))
;
return ((function (switch__20497__auto__,c__20609__auto__){
return (function() {
var cljs$core$async$state_machine__20498__auto__ = null;
var cljs$core$async$state_machine__20498__auto____0 = (function (){
var statearr_33771 = [null,null,null,null,null,null,null,null];
(statearr_33771[(0)] = cljs$core$async$state_machine__20498__auto__);

(statearr_33771[(1)] = (1));

return statearr_33771;
});
var cljs$core$async$state_machine__20498__auto____1 = (function (state_33750){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_33750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e33772){if((e33772 instanceof Object)){
var ex__20501__auto__ = e33772;
var statearr_33773_33793 = state_33750;
(statearr_33773_33793[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33794 = state_33750;
state_33750 = G__33794;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$state_machine__20498__auto__ = function(state_33750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20498__auto____1.call(this,state_33750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20498__auto____0;
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20498__auto____1;
return cljs$core$async$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto__))
})();
var state__20611__auto__ = (function (){var statearr_33774 = f__20610__auto__.call(null);
(statearr_33774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto__);

return statearr_33774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto__))
);

return c__20609__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async34016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34016 = (function (mult,ch,cs,meta34017){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34017 = meta34017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34018,meta34017__$1){
var self__ = this;
var _34018__$1 = this;
return (new cljs.core.async.t_cljs$core$async34016(self__.mult,self__.ch,self__.cs,meta34017__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34018){
var self__ = this;
var _34018__$1 = this;
return self__.meta34017;
});})(cs))
;

cljs.core.async.t_cljs$core$async34016.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34016.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async34016.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34016.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34016.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34016.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34017","meta34017",-1303140142,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34016";

cljs.core.async.t_cljs$core$async34016.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async34016");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34016 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34016(mult__$1,ch__$1,cs__$1,meta34017){
return (new cljs.core.async.t_cljs$core$async34016(mult__$1,ch__$1,cs__$1,meta34017));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34016(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20609__auto___34237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___34237,cs,m,dchan,dctr,done){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___34237,cs,m,dchan,dctr,done){
return (function (state_34149){
var state_val_34150 = (state_34149[(1)]);
if((state_val_34150 === (7))){
var inst_34145 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34151_34238 = state_34149__$1;
(statearr_34151_34238[(2)] = inst_34145);

(statearr_34151_34238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (20))){
var inst_34050 = (state_34149[(7)]);
var inst_34060 = cljs.core.first.call(null,inst_34050);
var inst_34061 = cljs.core.nth.call(null,inst_34060,(0),null);
var inst_34062 = cljs.core.nth.call(null,inst_34060,(1),null);
var state_34149__$1 = (function (){var statearr_34152 = state_34149;
(statearr_34152[(8)] = inst_34061);

return statearr_34152;
})();
if(cljs.core.truth_(inst_34062)){
var statearr_34153_34239 = state_34149__$1;
(statearr_34153_34239[(1)] = (22));

} else {
var statearr_34154_34240 = state_34149__$1;
(statearr_34154_34240[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (27))){
var inst_34097 = (state_34149[(9)]);
var inst_34092 = (state_34149[(10)]);
var inst_34090 = (state_34149[(11)]);
var inst_34021 = (state_34149[(12)]);
var inst_34097__$1 = cljs.core._nth.call(null,inst_34090,inst_34092);
var inst_34098 = cljs.core.async.put_BANG_.call(null,inst_34097__$1,inst_34021,done);
var state_34149__$1 = (function (){var statearr_34155 = state_34149;
(statearr_34155[(9)] = inst_34097__$1);

return statearr_34155;
})();
if(cljs.core.truth_(inst_34098)){
var statearr_34156_34241 = state_34149__$1;
(statearr_34156_34241[(1)] = (30));

} else {
var statearr_34157_34242 = state_34149__$1;
(statearr_34157_34242[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (1))){
var state_34149__$1 = state_34149;
var statearr_34158_34243 = state_34149__$1;
(statearr_34158_34243[(2)] = null);

(statearr_34158_34243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (24))){
var inst_34050 = (state_34149[(7)]);
var inst_34067 = (state_34149[(2)]);
var inst_34068 = cljs.core.next.call(null,inst_34050);
var inst_34030 = inst_34068;
var inst_34031 = null;
var inst_34032 = (0);
var inst_34033 = (0);
var state_34149__$1 = (function (){var statearr_34159 = state_34149;
(statearr_34159[(13)] = inst_34033);

(statearr_34159[(14)] = inst_34032);

(statearr_34159[(15)] = inst_34030);

(statearr_34159[(16)] = inst_34067);

(statearr_34159[(17)] = inst_34031);

return statearr_34159;
})();
var statearr_34160_34244 = state_34149__$1;
(statearr_34160_34244[(2)] = null);

(statearr_34160_34244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (39))){
var state_34149__$1 = state_34149;
var statearr_34164_34245 = state_34149__$1;
(statearr_34164_34245[(2)] = null);

(statearr_34164_34245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (4))){
var inst_34021 = (state_34149[(12)]);
var inst_34021__$1 = (state_34149[(2)]);
var inst_34022 = (inst_34021__$1 == null);
var state_34149__$1 = (function (){var statearr_34165 = state_34149;
(statearr_34165[(12)] = inst_34021__$1);

return statearr_34165;
})();
if(cljs.core.truth_(inst_34022)){
var statearr_34166_34246 = state_34149__$1;
(statearr_34166_34246[(1)] = (5));

} else {
var statearr_34167_34247 = state_34149__$1;
(statearr_34167_34247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (15))){
var inst_34033 = (state_34149[(13)]);
var inst_34032 = (state_34149[(14)]);
var inst_34030 = (state_34149[(15)]);
var inst_34031 = (state_34149[(17)]);
var inst_34046 = (state_34149[(2)]);
var inst_34047 = (inst_34033 + (1));
var tmp34161 = inst_34032;
var tmp34162 = inst_34030;
var tmp34163 = inst_34031;
var inst_34030__$1 = tmp34162;
var inst_34031__$1 = tmp34163;
var inst_34032__$1 = tmp34161;
var inst_34033__$1 = inst_34047;
var state_34149__$1 = (function (){var statearr_34168 = state_34149;
(statearr_34168[(13)] = inst_34033__$1);

(statearr_34168[(14)] = inst_34032__$1);

(statearr_34168[(18)] = inst_34046);

(statearr_34168[(15)] = inst_34030__$1);

(statearr_34168[(17)] = inst_34031__$1);

return statearr_34168;
})();
var statearr_34169_34248 = state_34149__$1;
(statearr_34169_34248[(2)] = null);

(statearr_34169_34248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (21))){
var inst_34071 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34173_34249 = state_34149__$1;
(statearr_34173_34249[(2)] = inst_34071);

(statearr_34173_34249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (31))){
var inst_34097 = (state_34149[(9)]);
var inst_34101 = done.call(null,null);
var inst_34102 = cljs.core.async.untap_STAR_.call(null,m,inst_34097);
var state_34149__$1 = (function (){var statearr_34174 = state_34149;
(statearr_34174[(19)] = inst_34101);

return statearr_34174;
})();
var statearr_34175_34250 = state_34149__$1;
(statearr_34175_34250[(2)] = inst_34102);

(statearr_34175_34250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (32))){
var inst_34091 = (state_34149[(20)]);
var inst_34089 = (state_34149[(21)]);
var inst_34092 = (state_34149[(10)]);
var inst_34090 = (state_34149[(11)]);
var inst_34104 = (state_34149[(2)]);
var inst_34105 = (inst_34092 + (1));
var tmp34170 = inst_34091;
var tmp34171 = inst_34089;
var tmp34172 = inst_34090;
var inst_34089__$1 = tmp34171;
var inst_34090__$1 = tmp34172;
var inst_34091__$1 = tmp34170;
var inst_34092__$1 = inst_34105;
var state_34149__$1 = (function (){var statearr_34176 = state_34149;
(statearr_34176[(20)] = inst_34091__$1);

(statearr_34176[(21)] = inst_34089__$1);

(statearr_34176[(22)] = inst_34104);

(statearr_34176[(10)] = inst_34092__$1);

(statearr_34176[(11)] = inst_34090__$1);

return statearr_34176;
})();
var statearr_34177_34251 = state_34149__$1;
(statearr_34177_34251[(2)] = null);

(statearr_34177_34251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (40))){
var inst_34117 = (state_34149[(23)]);
var inst_34121 = done.call(null,null);
var inst_34122 = cljs.core.async.untap_STAR_.call(null,m,inst_34117);
var state_34149__$1 = (function (){var statearr_34178 = state_34149;
(statearr_34178[(24)] = inst_34121);

return statearr_34178;
})();
var statearr_34179_34252 = state_34149__$1;
(statearr_34179_34252[(2)] = inst_34122);

(statearr_34179_34252[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (33))){
var inst_34108 = (state_34149[(25)]);
var inst_34110 = cljs.core.chunked_seq_QMARK_.call(null,inst_34108);
var state_34149__$1 = state_34149;
if(inst_34110){
var statearr_34180_34253 = state_34149__$1;
(statearr_34180_34253[(1)] = (36));

} else {
var statearr_34181_34254 = state_34149__$1;
(statearr_34181_34254[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (13))){
var inst_34040 = (state_34149[(26)]);
var inst_34043 = cljs.core.async.close_BANG_.call(null,inst_34040);
var state_34149__$1 = state_34149;
var statearr_34182_34255 = state_34149__$1;
(statearr_34182_34255[(2)] = inst_34043);

(statearr_34182_34255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (22))){
var inst_34061 = (state_34149[(8)]);
var inst_34064 = cljs.core.async.close_BANG_.call(null,inst_34061);
var state_34149__$1 = state_34149;
var statearr_34183_34256 = state_34149__$1;
(statearr_34183_34256[(2)] = inst_34064);

(statearr_34183_34256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (36))){
var inst_34108 = (state_34149[(25)]);
var inst_34112 = cljs.core.chunk_first.call(null,inst_34108);
var inst_34113 = cljs.core.chunk_rest.call(null,inst_34108);
var inst_34114 = cljs.core.count.call(null,inst_34112);
var inst_34089 = inst_34113;
var inst_34090 = inst_34112;
var inst_34091 = inst_34114;
var inst_34092 = (0);
var state_34149__$1 = (function (){var statearr_34184 = state_34149;
(statearr_34184[(20)] = inst_34091);

(statearr_34184[(21)] = inst_34089);

(statearr_34184[(10)] = inst_34092);

(statearr_34184[(11)] = inst_34090);

return statearr_34184;
})();
var statearr_34185_34257 = state_34149__$1;
(statearr_34185_34257[(2)] = null);

(statearr_34185_34257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (41))){
var inst_34108 = (state_34149[(25)]);
var inst_34124 = (state_34149[(2)]);
var inst_34125 = cljs.core.next.call(null,inst_34108);
var inst_34089 = inst_34125;
var inst_34090 = null;
var inst_34091 = (0);
var inst_34092 = (0);
var state_34149__$1 = (function (){var statearr_34186 = state_34149;
(statearr_34186[(20)] = inst_34091);

(statearr_34186[(21)] = inst_34089);

(statearr_34186[(10)] = inst_34092);

(statearr_34186[(27)] = inst_34124);

(statearr_34186[(11)] = inst_34090);

return statearr_34186;
})();
var statearr_34187_34258 = state_34149__$1;
(statearr_34187_34258[(2)] = null);

(statearr_34187_34258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (43))){
var state_34149__$1 = state_34149;
var statearr_34188_34259 = state_34149__$1;
(statearr_34188_34259[(2)] = null);

(statearr_34188_34259[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (29))){
var inst_34133 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34189_34260 = state_34149__$1;
(statearr_34189_34260[(2)] = inst_34133);

(statearr_34189_34260[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (44))){
var inst_34142 = (state_34149[(2)]);
var state_34149__$1 = (function (){var statearr_34190 = state_34149;
(statearr_34190[(28)] = inst_34142);

return statearr_34190;
})();
var statearr_34191_34261 = state_34149__$1;
(statearr_34191_34261[(2)] = null);

(statearr_34191_34261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (6))){
var inst_34081 = (state_34149[(29)]);
var inst_34080 = cljs.core.deref.call(null,cs);
var inst_34081__$1 = cljs.core.keys.call(null,inst_34080);
var inst_34082 = cljs.core.count.call(null,inst_34081__$1);
var inst_34083 = cljs.core.reset_BANG_.call(null,dctr,inst_34082);
var inst_34088 = cljs.core.seq.call(null,inst_34081__$1);
var inst_34089 = inst_34088;
var inst_34090 = null;
var inst_34091 = (0);
var inst_34092 = (0);
var state_34149__$1 = (function (){var statearr_34192 = state_34149;
(statearr_34192[(20)] = inst_34091);

(statearr_34192[(30)] = inst_34083);

(statearr_34192[(29)] = inst_34081__$1);

(statearr_34192[(21)] = inst_34089);

(statearr_34192[(10)] = inst_34092);

(statearr_34192[(11)] = inst_34090);

return statearr_34192;
})();
var statearr_34193_34262 = state_34149__$1;
(statearr_34193_34262[(2)] = null);

(statearr_34193_34262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (28))){
var inst_34089 = (state_34149[(21)]);
var inst_34108 = (state_34149[(25)]);
var inst_34108__$1 = cljs.core.seq.call(null,inst_34089);
var state_34149__$1 = (function (){var statearr_34194 = state_34149;
(statearr_34194[(25)] = inst_34108__$1);

return statearr_34194;
})();
if(inst_34108__$1){
var statearr_34195_34263 = state_34149__$1;
(statearr_34195_34263[(1)] = (33));

} else {
var statearr_34196_34264 = state_34149__$1;
(statearr_34196_34264[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (25))){
var inst_34091 = (state_34149[(20)]);
var inst_34092 = (state_34149[(10)]);
var inst_34094 = (inst_34092 < inst_34091);
var inst_34095 = inst_34094;
var state_34149__$1 = state_34149;
if(cljs.core.truth_(inst_34095)){
var statearr_34197_34265 = state_34149__$1;
(statearr_34197_34265[(1)] = (27));

} else {
var statearr_34198_34266 = state_34149__$1;
(statearr_34198_34266[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (34))){
var state_34149__$1 = state_34149;
var statearr_34199_34267 = state_34149__$1;
(statearr_34199_34267[(2)] = null);

(statearr_34199_34267[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (17))){
var state_34149__$1 = state_34149;
var statearr_34200_34268 = state_34149__$1;
(statearr_34200_34268[(2)] = null);

(statearr_34200_34268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (3))){
var inst_34147 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34149__$1,inst_34147);
} else {
if((state_val_34150 === (12))){
var inst_34076 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34201_34269 = state_34149__$1;
(statearr_34201_34269[(2)] = inst_34076);

(statearr_34201_34269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (2))){
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34149__$1,(4),ch);
} else {
if((state_val_34150 === (23))){
var state_34149__$1 = state_34149;
var statearr_34202_34270 = state_34149__$1;
(statearr_34202_34270[(2)] = null);

(statearr_34202_34270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (35))){
var inst_34131 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34203_34271 = state_34149__$1;
(statearr_34203_34271[(2)] = inst_34131);

(statearr_34203_34271[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (19))){
var inst_34050 = (state_34149[(7)]);
var inst_34054 = cljs.core.chunk_first.call(null,inst_34050);
var inst_34055 = cljs.core.chunk_rest.call(null,inst_34050);
var inst_34056 = cljs.core.count.call(null,inst_34054);
var inst_34030 = inst_34055;
var inst_34031 = inst_34054;
var inst_34032 = inst_34056;
var inst_34033 = (0);
var state_34149__$1 = (function (){var statearr_34204 = state_34149;
(statearr_34204[(13)] = inst_34033);

(statearr_34204[(14)] = inst_34032);

(statearr_34204[(15)] = inst_34030);

(statearr_34204[(17)] = inst_34031);

return statearr_34204;
})();
var statearr_34205_34272 = state_34149__$1;
(statearr_34205_34272[(2)] = null);

(statearr_34205_34272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (11))){
var inst_34030 = (state_34149[(15)]);
var inst_34050 = (state_34149[(7)]);
var inst_34050__$1 = cljs.core.seq.call(null,inst_34030);
var state_34149__$1 = (function (){var statearr_34206 = state_34149;
(statearr_34206[(7)] = inst_34050__$1);

return statearr_34206;
})();
if(inst_34050__$1){
var statearr_34207_34273 = state_34149__$1;
(statearr_34207_34273[(1)] = (16));

} else {
var statearr_34208_34274 = state_34149__$1;
(statearr_34208_34274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (9))){
var inst_34078 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34209_34275 = state_34149__$1;
(statearr_34209_34275[(2)] = inst_34078);

(statearr_34209_34275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (5))){
var inst_34028 = cljs.core.deref.call(null,cs);
var inst_34029 = cljs.core.seq.call(null,inst_34028);
var inst_34030 = inst_34029;
var inst_34031 = null;
var inst_34032 = (0);
var inst_34033 = (0);
var state_34149__$1 = (function (){var statearr_34210 = state_34149;
(statearr_34210[(13)] = inst_34033);

(statearr_34210[(14)] = inst_34032);

(statearr_34210[(15)] = inst_34030);

(statearr_34210[(17)] = inst_34031);

return statearr_34210;
})();
var statearr_34211_34276 = state_34149__$1;
(statearr_34211_34276[(2)] = null);

(statearr_34211_34276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (14))){
var state_34149__$1 = state_34149;
var statearr_34212_34277 = state_34149__$1;
(statearr_34212_34277[(2)] = null);

(statearr_34212_34277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (45))){
var inst_34139 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34213_34278 = state_34149__$1;
(statearr_34213_34278[(2)] = inst_34139);

(statearr_34213_34278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (26))){
var inst_34081 = (state_34149[(29)]);
var inst_34135 = (state_34149[(2)]);
var inst_34136 = cljs.core.seq.call(null,inst_34081);
var state_34149__$1 = (function (){var statearr_34214 = state_34149;
(statearr_34214[(31)] = inst_34135);

return statearr_34214;
})();
if(inst_34136){
var statearr_34215_34279 = state_34149__$1;
(statearr_34215_34279[(1)] = (42));

} else {
var statearr_34216_34280 = state_34149__$1;
(statearr_34216_34280[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (16))){
var inst_34050 = (state_34149[(7)]);
var inst_34052 = cljs.core.chunked_seq_QMARK_.call(null,inst_34050);
var state_34149__$1 = state_34149;
if(inst_34052){
var statearr_34217_34281 = state_34149__$1;
(statearr_34217_34281[(1)] = (19));

} else {
var statearr_34218_34282 = state_34149__$1;
(statearr_34218_34282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (38))){
var inst_34128 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34219_34283 = state_34149__$1;
(statearr_34219_34283[(2)] = inst_34128);

(statearr_34219_34283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (30))){
var state_34149__$1 = state_34149;
var statearr_34220_34284 = state_34149__$1;
(statearr_34220_34284[(2)] = null);

(statearr_34220_34284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (10))){
var inst_34033 = (state_34149[(13)]);
var inst_34031 = (state_34149[(17)]);
var inst_34039 = cljs.core._nth.call(null,inst_34031,inst_34033);
var inst_34040 = cljs.core.nth.call(null,inst_34039,(0),null);
var inst_34041 = cljs.core.nth.call(null,inst_34039,(1),null);
var state_34149__$1 = (function (){var statearr_34221 = state_34149;
(statearr_34221[(26)] = inst_34040);

return statearr_34221;
})();
if(cljs.core.truth_(inst_34041)){
var statearr_34222_34285 = state_34149__$1;
(statearr_34222_34285[(1)] = (13));

} else {
var statearr_34223_34286 = state_34149__$1;
(statearr_34223_34286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (18))){
var inst_34074 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34224_34287 = state_34149__$1;
(statearr_34224_34287[(2)] = inst_34074);

(statearr_34224_34287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (42))){
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34149__$1,(45),dchan);
} else {
if((state_val_34150 === (37))){
var inst_34108 = (state_34149[(25)]);
var inst_34117 = (state_34149[(23)]);
var inst_34021 = (state_34149[(12)]);
var inst_34117__$1 = cljs.core.first.call(null,inst_34108);
var inst_34118 = cljs.core.async.put_BANG_.call(null,inst_34117__$1,inst_34021,done);
var state_34149__$1 = (function (){var statearr_34225 = state_34149;
(statearr_34225[(23)] = inst_34117__$1);

return statearr_34225;
})();
if(cljs.core.truth_(inst_34118)){
var statearr_34226_34288 = state_34149__$1;
(statearr_34226_34288[(1)] = (39));

} else {
var statearr_34227_34289 = state_34149__$1;
(statearr_34227_34289[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (8))){
var inst_34033 = (state_34149[(13)]);
var inst_34032 = (state_34149[(14)]);
var inst_34035 = (inst_34033 < inst_34032);
var inst_34036 = inst_34035;
var state_34149__$1 = state_34149;
if(cljs.core.truth_(inst_34036)){
var statearr_34228_34290 = state_34149__$1;
(statearr_34228_34290[(1)] = (10));

} else {
var statearr_34229_34291 = state_34149__$1;
(statearr_34229_34291[(1)] = (11));

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
});})(c__20609__auto___34237,cs,m,dchan,dctr,done))
;
return ((function (switch__20497__auto__,c__20609__auto___34237,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20498__auto__ = null;
var cljs$core$async$mult_$_state_machine__20498__auto____0 = (function (){
var statearr_34233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34233[(0)] = cljs$core$async$mult_$_state_machine__20498__auto__);

(statearr_34233[(1)] = (1));

return statearr_34233;
});
var cljs$core$async$mult_$_state_machine__20498__auto____1 = (function (state_34149){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_34149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e34234){if((e34234 instanceof Object)){
var ex__20501__auto__ = e34234;
var statearr_34235_34292 = state_34149;
(statearr_34235_34292[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34293 = state_34149;
state_34149 = G__34293;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20498__auto__ = function(state_34149){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20498__auto____1.call(this,state_34149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20498__auto____0;
cljs$core$async$mult_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20498__auto____1;
return cljs$core$async$mult_$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___34237,cs,m,dchan,dctr,done))
})();
var state__20611__auto__ = (function (){var statearr_34236 = f__20610__auto__.call(null);
(statearr_34236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___34237);

return statearr_34236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___34237,cs,m,dchan,dctr,done))
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
var args34294 = [];
var len__19512__auto___34297 = arguments.length;
var i__19513__auto___34298 = (0);
while(true){
if((i__19513__auto___34298 < len__19512__auto___34297)){
args34294.push((arguments[i__19513__auto___34298]));

var G__34299 = (i__19513__auto___34298 + (1));
i__19513__auto___34298 = G__34299;
continue;
} else {
}
break;
}

var G__34296 = args34294.length;
switch (G__34296) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34294.length)].join('')));

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
var len__19512__auto___34311 = arguments.length;
var i__19513__auto___34312 = (0);
while(true){
if((i__19513__auto___34312 < len__19512__auto___34311)){
args__19519__auto__.push((arguments[i__19513__auto___34312]));

var G__34313 = (i__19513__auto___34312 + (1));
i__19513__auto___34312 = G__34313;
continue;
} else {
}
break;
}

var argseq__19520__auto__ = ((((3) < args__19519__auto__.length))?(new cljs.core.IndexedSeq(args__19519__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19520__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34305){
var map__34306 = p__34305;
var map__34306__$1 = ((((!((map__34306 == null)))?((((map__34306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34306):map__34306);
var opts = map__34306__$1;
var statearr_34308_34314 = state;
(statearr_34308_34314[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34306,map__34306__$1,opts){
return (function (val){
var statearr_34309_34315 = state;
(statearr_34309_34315[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34306,map__34306__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34310_34316 = state;
(statearr_34310_34316[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34301){
var G__34302 = cljs.core.first.call(null,seq34301);
var seq34301__$1 = cljs.core.next.call(null,seq34301);
var G__34303 = cljs.core.first.call(null,seq34301__$1);
var seq34301__$2 = cljs.core.next.call(null,seq34301__$1);
var G__34304 = cljs.core.first.call(null,seq34301__$2);
var seq34301__$3 = cljs.core.next.call(null,seq34301__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34302,G__34303,G__34304,seq34301__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34480 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34481){
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
this.meta34481 = meta34481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34482,meta34481__$1){
var self__ = this;
var _34482__$1 = this;
return (new cljs.core.async.t_cljs$core$async34480(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34481__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34482){
var self__ = this;
var _34482__$1 = this;
return self__.meta34481;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34480.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34481","meta34481",1496348691,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34480";

cljs.core.async.t_cljs$core$async34480.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async34480");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34480 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34481){
return (new cljs.core.async.t_cljs$core$async34480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34481));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34480(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20609__auto___34643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___34643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___34643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34580){
var state_val_34581 = (state_34580[(1)]);
if((state_val_34581 === (7))){
var inst_34498 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34582_34644 = state_34580__$1;
(statearr_34582_34644[(2)] = inst_34498);

(statearr_34582_34644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (20))){
var inst_34510 = (state_34580[(7)]);
var state_34580__$1 = state_34580;
var statearr_34583_34645 = state_34580__$1;
(statearr_34583_34645[(2)] = inst_34510);

(statearr_34583_34645[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (27))){
var state_34580__$1 = state_34580;
var statearr_34584_34646 = state_34580__$1;
(statearr_34584_34646[(2)] = null);

(statearr_34584_34646[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (1))){
var inst_34486 = (state_34580[(8)]);
var inst_34486__$1 = calc_state.call(null);
var inst_34488 = (inst_34486__$1 == null);
var inst_34489 = cljs.core.not.call(null,inst_34488);
var state_34580__$1 = (function (){var statearr_34585 = state_34580;
(statearr_34585[(8)] = inst_34486__$1);

return statearr_34585;
})();
if(inst_34489){
var statearr_34586_34647 = state_34580__$1;
(statearr_34586_34647[(1)] = (2));

} else {
var statearr_34587_34648 = state_34580__$1;
(statearr_34587_34648[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (24))){
var inst_34540 = (state_34580[(9)]);
var inst_34554 = (state_34580[(10)]);
var inst_34533 = (state_34580[(11)]);
var inst_34554__$1 = inst_34533.call(null,inst_34540);
var state_34580__$1 = (function (){var statearr_34588 = state_34580;
(statearr_34588[(10)] = inst_34554__$1);

return statearr_34588;
})();
if(cljs.core.truth_(inst_34554__$1)){
var statearr_34589_34649 = state_34580__$1;
(statearr_34589_34649[(1)] = (29));

} else {
var statearr_34590_34650 = state_34580__$1;
(statearr_34590_34650[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (4))){
var inst_34501 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34501)){
var statearr_34591_34651 = state_34580__$1;
(statearr_34591_34651[(1)] = (8));

} else {
var statearr_34592_34652 = state_34580__$1;
(statearr_34592_34652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (15))){
var inst_34527 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34527)){
var statearr_34593_34653 = state_34580__$1;
(statearr_34593_34653[(1)] = (19));

} else {
var statearr_34594_34654 = state_34580__$1;
(statearr_34594_34654[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (21))){
var inst_34532 = (state_34580[(12)]);
var inst_34532__$1 = (state_34580[(2)]);
var inst_34533 = cljs.core.get.call(null,inst_34532__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34534 = cljs.core.get.call(null,inst_34532__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34535 = cljs.core.get.call(null,inst_34532__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34580__$1 = (function (){var statearr_34595 = state_34580;
(statearr_34595[(13)] = inst_34534);

(statearr_34595[(11)] = inst_34533);

(statearr_34595[(12)] = inst_34532__$1);

return statearr_34595;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34580__$1,(22),inst_34535);
} else {
if((state_val_34581 === (31))){
var inst_34562 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34562)){
var statearr_34596_34655 = state_34580__$1;
(statearr_34596_34655[(1)] = (32));

} else {
var statearr_34597_34656 = state_34580__$1;
(statearr_34597_34656[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (32))){
var inst_34539 = (state_34580[(14)]);
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34580__$1,(35),out,inst_34539);
} else {
if((state_val_34581 === (33))){
var inst_34532 = (state_34580[(12)]);
var inst_34510 = inst_34532;
var state_34580__$1 = (function (){var statearr_34598 = state_34580;
(statearr_34598[(7)] = inst_34510);

return statearr_34598;
})();
var statearr_34599_34657 = state_34580__$1;
(statearr_34599_34657[(2)] = null);

(statearr_34599_34657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (13))){
var inst_34510 = (state_34580[(7)]);
var inst_34517 = inst_34510.cljs$lang$protocol_mask$partition0$;
var inst_34518 = (inst_34517 & (64));
var inst_34519 = inst_34510.cljs$core$ISeq$;
var inst_34520 = (inst_34518) || (inst_34519);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34520)){
var statearr_34600_34658 = state_34580__$1;
(statearr_34600_34658[(1)] = (16));

} else {
var statearr_34601_34659 = state_34580__$1;
(statearr_34601_34659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (22))){
var inst_34540 = (state_34580[(9)]);
var inst_34539 = (state_34580[(14)]);
var inst_34538 = (state_34580[(2)]);
var inst_34539__$1 = cljs.core.nth.call(null,inst_34538,(0),null);
var inst_34540__$1 = cljs.core.nth.call(null,inst_34538,(1),null);
var inst_34541 = (inst_34539__$1 == null);
var inst_34542 = cljs.core._EQ_.call(null,inst_34540__$1,change);
var inst_34543 = (inst_34541) || (inst_34542);
var state_34580__$1 = (function (){var statearr_34602 = state_34580;
(statearr_34602[(9)] = inst_34540__$1);

(statearr_34602[(14)] = inst_34539__$1);

return statearr_34602;
})();
if(cljs.core.truth_(inst_34543)){
var statearr_34603_34660 = state_34580__$1;
(statearr_34603_34660[(1)] = (23));

} else {
var statearr_34604_34661 = state_34580__$1;
(statearr_34604_34661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (36))){
var inst_34532 = (state_34580[(12)]);
var inst_34510 = inst_34532;
var state_34580__$1 = (function (){var statearr_34605 = state_34580;
(statearr_34605[(7)] = inst_34510);

return statearr_34605;
})();
var statearr_34606_34662 = state_34580__$1;
(statearr_34606_34662[(2)] = null);

(statearr_34606_34662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (29))){
var inst_34554 = (state_34580[(10)]);
var state_34580__$1 = state_34580;
var statearr_34607_34663 = state_34580__$1;
(statearr_34607_34663[(2)] = inst_34554);

(statearr_34607_34663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (6))){
var state_34580__$1 = state_34580;
var statearr_34608_34664 = state_34580__$1;
(statearr_34608_34664[(2)] = false);

(statearr_34608_34664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (28))){
var inst_34550 = (state_34580[(2)]);
var inst_34551 = calc_state.call(null);
var inst_34510 = inst_34551;
var state_34580__$1 = (function (){var statearr_34609 = state_34580;
(statearr_34609[(15)] = inst_34550);

(statearr_34609[(7)] = inst_34510);

return statearr_34609;
})();
var statearr_34610_34665 = state_34580__$1;
(statearr_34610_34665[(2)] = null);

(statearr_34610_34665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (25))){
var inst_34576 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34611_34666 = state_34580__$1;
(statearr_34611_34666[(2)] = inst_34576);

(statearr_34611_34666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (34))){
var inst_34574 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34612_34667 = state_34580__$1;
(statearr_34612_34667[(2)] = inst_34574);

(statearr_34612_34667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (17))){
var state_34580__$1 = state_34580;
var statearr_34613_34668 = state_34580__$1;
(statearr_34613_34668[(2)] = false);

(statearr_34613_34668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (3))){
var state_34580__$1 = state_34580;
var statearr_34614_34669 = state_34580__$1;
(statearr_34614_34669[(2)] = false);

(statearr_34614_34669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (12))){
var inst_34578 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34580__$1,inst_34578);
} else {
if((state_val_34581 === (2))){
var inst_34486 = (state_34580[(8)]);
var inst_34491 = inst_34486.cljs$lang$protocol_mask$partition0$;
var inst_34492 = (inst_34491 & (64));
var inst_34493 = inst_34486.cljs$core$ISeq$;
var inst_34494 = (inst_34492) || (inst_34493);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34494)){
var statearr_34615_34670 = state_34580__$1;
(statearr_34615_34670[(1)] = (5));

} else {
var statearr_34616_34671 = state_34580__$1;
(statearr_34616_34671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (23))){
var inst_34539 = (state_34580[(14)]);
var inst_34545 = (inst_34539 == null);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34545)){
var statearr_34617_34672 = state_34580__$1;
(statearr_34617_34672[(1)] = (26));

} else {
var statearr_34618_34673 = state_34580__$1;
(statearr_34618_34673[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (35))){
var inst_34565 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
if(cljs.core.truth_(inst_34565)){
var statearr_34619_34674 = state_34580__$1;
(statearr_34619_34674[(1)] = (36));

} else {
var statearr_34620_34675 = state_34580__$1;
(statearr_34620_34675[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (19))){
var inst_34510 = (state_34580[(7)]);
var inst_34529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34510);
var state_34580__$1 = state_34580;
var statearr_34621_34676 = state_34580__$1;
(statearr_34621_34676[(2)] = inst_34529);

(statearr_34621_34676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (11))){
var inst_34510 = (state_34580[(7)]);
var inst_34514 = (inst_34510 == null);
var inst_34515 = cljs.core.not.call(null,inst_34514);
var state_34580__$1 = state_34580;
if(inst_34515){
var statearr_34622_34677 = state_34580__$1;
(statearr_34622_34677[(1)] = (13));

} else {
var statearr_34623_34678 = state_34580__$1;
(statearr_34623_34678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (9))){
var inst_34486 = (state_34580[(8)]);
var state_34580__$1 = state_34580;
var statearr_34624_34679 = state_34580__$1;
(statearr_34624_34679[(2)] = inst_34486);

(statearr_34624_34679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (5))){
var state_34580__$1 = state_34580;
var statearr_34625_34680 = state_34580__$1;
(statearr_34625_34680[(2)] = true);

(statearr_34625_34680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (14))){
var state_34580__$1 = state_34580;
var statearr_34626_34681 = state_34580__$1;
(statearr_34626_34681[(2)] = false);

(statearr_34626_34681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (26))){
var inst_34540 = (state_34580[(9)]);
var inst_34547 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34540);
var state_34580__$1 = state_34580;
var statearr_34627_34682 = state_34580__$1;
(statearr_34627_34682[(2)] = inst_34547);

(statearr_34627_34682[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (16))){
var state_34580__$1 = state_34580;
var statearr_34628_34683 = state_34580__$1;
(statearr_34628_34683[(2)] = true);

(statearr_34628_34683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (38))){
var inst_34570 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34629_34684 = state_34580__$1;
(statearr_34629_34684[(2)] = inst_34570);

(statearr_34629_34684[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (30))){
var inst_34540 = (state_34580[(9)]);
var inst_34534 = (state_34580[(13)]);
var inst_34533 = (state_34580[(11)]);
var inst_34557 = cljs.core.empty_QMARK_.call(null,inst_34533);
var inst_34558 = inst_34534.call(null,inst_34540);
var inst_34559 = cljs.core.not.call(null,inst_34558);
var inst_34560 = (inst_34557) && (inst_34559);
var state_34580__$1 = state_34580;
var statearr_34630_34685 = state_34580__$1;
(statearr_34630_34685[(2)] = inst_34560);

(statearr_34630_34685[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (10))){
var inst_34486 = (state_34580[(8)]);
var inst_34506 = (state_34580[(2)]);
var inst_34507 = cljs.core.get.call(null,inst_34506,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34508 = cljs.core.get.call(null,inst_34506,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34509 = cljs.core.get.call(null,inst_34506,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34510 = inst_34486;
var state_34580__$1 = (function (){var statearr_34631 = state_34580;
(statearr_34631[(16)] = inst_34507);

(statearr_34631[(17)] = inst_34509);

(statearr_34631[(7)] = inst_34510);

(statearr_34631[(18)] = inst_34508);

return statearr_34631;
})();
var statearr_34632_34686 = state_34580__$1;
(statearr_34632_34686[(2)] = null);

(statearr_34632_34686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (18))){
var inst_34524 = (state_34580[(2)]);
var state_34580__$1 = state_34580;
var statearr_34633_34687 = state_34580__$1;
(statearr_34633_34687[(2)] = inst_34524);

(statearr_34633_34687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (37))){
var state_34580__$1 = state_34580;
var statearr_34634_34688 = state_34580__$1;
(statearr_34634_34688[(2)] = null);

(statearr_34634_34688[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34581 === (8))){
var inst_34486 = (state_34580[(8)]);
var inst_34503 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34486);
var state_34580__$1 = state_34580;
var statearr_34635_34689 = state_34580__$1;
(statearr_34635_34689[(2)] = inst_34503);

(statearr_34635_34689[(1)] = (10));


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
});})(c__20609__auto___34643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20497__auto__,c__20609__auto___34643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20498__auto__ = null;
var cljs$core$async$mix_$_state_machine__20498__auto____0 = (function (){
var statearr_34639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34639[(0)] = cljs$core$async$mix_$_state_machine__20498__auto__);

(statearr_34639[(1)] = (1));

return statearr_34639;
});
var cljs$core$async$mix_$_state_machine__20498__auto____1 = (function (state_34580){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_34580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e34640){if((e34640 instanceof Object)){
var ex__20501__auto__ = e34640;
var statearr_34641_34690 = state_34580;
(statearr_34641_34690[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34691 = state_34580;
state_34580 = G__34691;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20498__auto__ = function(state_34580){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20498__auto____1.call(this,state_34580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20498__auto____0;
cljs$core$async$mix_$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20498__auto____1;
return cljs$core$async$mix_$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___34643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20611__auto__ = (function (){var statearr_34642 = f__20610__auto__.call(null);
(statearr_34642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___34643);

return statearr_34642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___34643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args34692 = [];
var len__19512__auto___34695 = arguments.length;
var i__19513__auto___34696 = (0);
while(true){
if((i__19513__auto___34696 < len__19512__auto___34695)){
args34692.push((arguments[i__19513__auto___34696]));

var G__34697 = (i__19513__auto___34696 + (1));
i__19513__auto___34696 = G__34697;
continue;
} else {
}
break;
}

var G__34694 = args34692.length;
switch (G__34694) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34692.length)].join('')));

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
var args34700 = [];
var len__19512__auto___34826 = arguments.length;
var i__19513__auto___34827 = (0);
while(true){
if((i__19513__auto___34827 < len__19512__auto___34826)){
args34700.push((arguments[i__19513__auto___34827]));

var G__34828 = (i__19513__auto___34827 + (1));
i__19513__auto___34827 = G__34828;
continue;
} else {
}
break;
}

var G__34702 = args34700.length;
switch (G__34702) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34700.length)].join('')));

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
return (function (p1__34699_SHARP_){
if(cljs.core.truth_(p1__34699_SHARP_.call(null,topic))){
return p1__34699_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34699_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18442__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34703 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34704){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34704 = meta34704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34705,meta34704__$1){
var self__ = this;
var _34705__$1 = this;
return (new cljs.core.async.t_cljs$core$async34703(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34704__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34705){
var self__ = this;
var _34705__$1 = this;
return self__.meta34704;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34703.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34703.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async34703.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34703.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34703.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34704","meta34704",1861417275,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34703";

cljs.core.async.t_cljs$core$async34703.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async34703");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34703 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34704){
return (new cljs.core.async.t_cljs$core$async34703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34704));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34703(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20609__auto___34830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___34830,mults,ensure_mult,p){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___34830,mults,ensure_mult,p){
return (function (state_34777){
var state_val_34778 = (state_34777[(1)]);
if((state_val_34778 === (7))){
var inst_34773 = (state_34777[(2)]);
var state_34777__$1 = state_34777;
var statearr_34779_34831 = state_34777__$1;
(statearr_34779_34831[(2)] = inst_34773);

(statearr_34779_34831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (20))){
var state_34777__$1 = state_34777;
var statearr_34780_34832 = state_34777__$1;
(statearr_34780_34832[(2)] = null);

(statearr_34780_34832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (1))){
var state_34777__$1 = state_34777;
var statearr_34781_34833 = state_34777__$1;
(statearr_34781_34833[(2)] = null);

(statearr_34781_34833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (24))){
var inst_34756 = (state_34777[(7)]);
var inst_34765 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34756);
var state_34777__$1 = state_34777;
var statearr_34782_34834 = state_34777__$1;
(statearr_34782_34834[(2)] = inst_34765);

(statearr_34782_34834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (4))){
var inst_34708 = (state_34777[(8)]);
var inst_34708__$1 = (state_34777[(2)]);
var inst_34709 = (inst_34708__$1 == null);
var state_34777__$1 = (function (){var statearr_34783 = state_34777;
(statearr_34783[(8)] = inst_34708__$1);

return statearr_34783;
})();
if(cljs.core.truth_(inst_34709)){
var statearr_34784_34835 = state_34777__$1;
(statearr_34784_34835[(1)] = (5));

} else {
var statearr_34785_34836 = state_34777__$1;
(statearr_34785_34836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (15))){
var inst_34750 = (state_34777[(2)]);
var state_34777__$1 = state_34777;
var statearr_34786_34837 = state_34777__$1;
(statearr_34786_34837[(2)] = inst_34750);

(statearr_34786_34837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (21))){
var inst_34770 = (state_34777[(2)]);
var state_34777__$1 = (function (){var statearr_34787 = state_34777;
(statearr_34787[(9)] = inst_34770);

return statearr_34787;
})();
var statearr_34788_34838 = state_34777__$1;
(statearr_34788_34838[(2)] = null);

(statearr_34788_34838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (13))){
var inst_34732 = (state_34777[(10)]);
var inst_34734 = cljs.core.chunked_seq_QMARK_.call(null,inst_34732);
var state_34777__$1 = state_34777;
if(inst_34734){
var statearr_34789_34839 = state_34777__$1;
(statearr_34789_34839[(1)] = (16));

} else {
var statearr_34790_34840 = state_34777__$1;
(statearr_34790_34840[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (22))){
var inst_34762 = (state_34777[(2)]);
var state_34777__$1 = state_34777;
if(cljs.core.truth_(inst_34762)){
var statearr_34791_34841 = state_34777__$1;
(statearr_34791_34841[(1)] = (23));

} else {
var statearr_34792_34842 = state_34777__$1;
(statearr_34792_34842[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (6))){
var inst_34758 = (state_34777[(11)]);
var inst_34708 = (state_34777[(8)]);
var inst_34756 = (state_34777[(7)]);
var inst_34756__$1 = topic_fn.call(null,inst_34708);
var inst_34757 = cljs.core.deref.call(null,mults);
var inst_34758__$1 = cljs.core.get.call(null,inst_34757,inst_34756__$1);
var state_34777__$1 = (function (){var statearr_34793 = state_34777;
(statearr_34793[(11)] = inst_34758__$1);

(statearr_34793[(7)] = inst_34756__$1);

return statearr_34793;
})();
if(cljs.core.truth_(inst_34758__$1)){
var statearr_34794_34843 = state_34777__$1;
(statearr_34794_34843[(1)] = (19));

} else {
var statearr_34795_34844 = state_34777__$1;
(statearr_34795_34844[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (25))){
var inst_34767 = (state_34777[(2)]);
var state_34777__$1 = state_34777;
var statearr_34796_34845 = state_34777__$1;
(statearr_34796_34845[(2)] = inst_34767);

(statearr_34796_34845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (17))){
var inst_34732 = (state_34777[(10)]);
var inst_34741 = cljs.core.first.call(null,inst_34732);
var inst_34742 = cljs.core.async.muxch_STAR_.call(null,inst_34741);
var inst_34743 = cljs.core.async.close_BANG_.call(null,inst_34742);
var inst_34744 = cljs.core.next.call(null,inst_34732);
var inst_34718 = inst_34744;
var inst_34719 = null;
var inst_34720 = (0);
var inst_34721 = (0);
var state_34777__$1 = (function (){var statearr_34798 = state_34777;
(statearr_34798[(12)] = inst_34721);

(statearr_34798[(13)] = inst_34718);

(statearr_34798[(14)] = inst_34719);

(statearr_34798[(15)] = inst_34743);

(statearr_34798[(16)] = inst_34720);

return statearr_34798;
})();
var statearr_34799_34846 = state_34777__$1;
(statearr_34799_34846[(2)] = null);

(statearr_34799_34846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (3))){
var inst_34775 = (state_34777[(2)]);
var state_34777__$1 = state_34777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34777__$1,inst_34775);
} else {
if((state_val_34778 === (12))){
var inst_34752 = (state_34777[(2)]);
var state_34777__$1 = state_34777;
var statearr_34800_34847 = state_34777__$1;
(statearr_34800_34847[(2)] = inst_34752);

(statearr_34800_34847[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (2))){
var state_34777__$1 = state_34777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34777__$1,(4),ch);
} else {
if((state_val_34778 === (23))){
var state_34777__$1 = state_34777;
var statearr_34801_34848 = state_34777__$1;
(statearr_34801_34848[(2)] = null);

(statearr_34801_34848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (19))){
var inst_34758 = (state_34777[(11)]);
var inst_34708 = (state_34777[(8)]);
var inst_34760 = cljs.core.async.muxch_STAR_.call(null,inst_34758);
var state_34777__$1 = state_34777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34777__$1,(22),inst_34760,inst_34708);
} else {
if((state_val_34778 === (11))){
var inst_34718 = (state_34777[(13)]);
var inst_34732 = (state_34777[(10)]);
var inst_34732__$1 = cljs.core.seq.call(null,inst_34718);
var state_34777__$1 = (function (){var statearr_34802 = state_34777;
(statearr_34802[(10)] = inst_34732__$1);

return statearr_34802;
})();
if(inst_34732__$1){
var statearr_34803_34849 = state_34777__$1;
(statearr_34803_34849[(1)] = (13));

} else {
var statearr_34804_34850 = state_34777__$1;
(statearr_34804_34850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (9))){
var inst_34754 = (state_34777[(2)]);
var state_34777__$1 = state_34777;
var statearr_34805_34851 = state_34777__$1;
(statearr_34805_34851[(2)] = inst_34754);

(statearr_34805_34851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (5))){
var inst_34715 = cljs.core.deref.call(null,mults);
var inst_34716 = cljs.core.vals.call(null,inst_34715);
var inst_34717 = cljs.core.seq.call(null,inst_34716);
var inst_34718 = inst_34717;
var inst_34719 = null;
var inst_34720 = (0);
var inst_34721 = (0);
var state_34777__$1 = (function (){var statearr_34806 = state_34777;
(statearr_34806[(12)] = inst_34721);

(statearr_34806[(13)] = inst_34718);

(statearr_34806[(14)] = inst_34719);

(statearr_34806[(16)] = inst_34720);

return statearr_34806;
})();
var statearr_34807_34852 = state_34777__$1;
(statearr_34807_34852[(2)] = null);

(statearr_34807_34852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (14))){
var state_34777__$1 = state_34777;
var statearr_34811_34853 = state_34777__$1;
(statearr_34811_34853[(2)] = null);

(statearr_34811_34853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (16))){
var inst_34732 = (state_34777[(10)]);
var inst_34736 = cljs.core.chunk_first.call(null,inst_34732);
var inst_34737 = cljs.core.chunk_rest.call(null,inst_34732);
var inst_34738 = cljs.core.count.call(null,inst_34736);
var inst_34718 = inst_34737;
var inst_34719 = inst_34736;
var inst_34720 = inst_34738;
var inst_34721 = (0);
var state_34777__$1 = (function (){var statearr_34812 = state_34777;
(statearr_34812[(12)] = inst_34721);

(statearr_34812[(13)] = inst_34718);

(statearr_34812[(14)] = inst_34719);

(statearr_34812[(16)] = inst_34720);

return statearr_34812;
})();
var statearr_34813_34854 = state_34777__$1;
(statearr_34813_34854[(2)] = null);

(statearr_34813_34854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (10))){
var inst_34721 = (state_34777[(12)]);
var inst_34718 = (state_34777[(13)]);
var inst_34719 = (state_34777[(14)]);
var inst_34720 = (state_34777[(16)]);
var inst_34726 = cljs.core._nth.call(null,inst_34719,inst_34721);
var inst_34727 = cljs.core.async.muxch_STAR_.call(null,inst_34726);
var inst_34728 = cljs.core.async.close_BANG_.call(null,inst_34727);
var inst_34729 = (inst_34721 + (1));
var tmp34808 = inst_34718;
var tmp34809 = inst_34719;
var tmp34810 = inst_34720;
var inst_34718__$1 = tmp34808;
var inst_34719__$1 = tmp34809;
var inst_34720__$1 = tmp34810;
var inst_34721__$1 = inst_34729;
var state_34777__$1 = (function (){var statearr_34814 = state_34777;
(statearr_34814[(12)] = inst_34721__$1);

(statearr_34814[(13)] = inst_34718__$1);

(statearr_34814[(17)] = inst_34728);

(statearr_34814[(14)] = inst_34719__$1);

(statearr_34814[(16)] = inst_34720__$1);

return statearr_34814;
})();
var statearr_34815_34855 = state_34777__$1;
(statearr_34815_34855[(2)] = null);

(statearr_34815_34855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (18))){
var inst_34747 = (state_34777[(2)]);
var state_34777__$1 = state_34777;
var statearr_34816_34856 = state_34777__$1;
(statearr_34816_34856[(2)] = inst_34747);

(statearr_34816_34856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34778 === (8))){
var inst_34721 = (state_34777[(12)]);
var inst_34720 = (state_34777[(16)]);
var inst_34723 = (inst_34721 < inst_34720);
var inst_34724 = inst_34723;
var state_34777__$1 = state_34777;
if(cljs.core.truth_(inst_34724)){
var statearr_34817_34857 = state_34777__$1;
(statearr_34817_34857[(1)] = (10));

} else {
var statearr_34818_34858 = state_34777__$1;
(statearr_34818_34858[(1)] = (11));

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
});})(c__20609__auto___34830,mults,ensure_mult,p))
;
return ((function (switch__20497__auto__,c__20609__auto___34830,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20498__auto__ = null;
var cljs$core$async$state_machine__20498__auto____0 = (function (){
var statearr_34822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34822[(0)] = cljs$core$async$state_machine__20498__auto__);

(statearr_34822[(1)] = (1));

return statearr_34822;
});
var cljs$core$async$state_machine__20498__auto____1 = (function (state_34777){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_34777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e34823){if((e34823 instanceof Object)){
var ex__20501__auto__ = e34823;
var statearr_34824_34859 = state_34777;
(statearr_34824_34859[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34860 = state_34777;
state_34777 = G__34860;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$state_machine__20498__auto__ = function(state_34777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20498__auto____1.call(this,state_34777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20498__auto____0;
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20498__auto____1;
return cljs$core$async$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___34830,mults,ensure_mult,p))
})();
var state__20611__auto__ = (function (){var statearr_34825 = f__20610__auto__.call(null);
(statearr_34825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___34830);

return statearr_34825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___34830,mults,ensure_mult,p))
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
var args34861 = [];
var len__19512__auto___34864 = arguments.length;
var i__19513__auto___34865 = (0);
while(true){
if((i__19513__auto___34865 < len__19512__auto___34864)){
args34861.push((arguments[i__19513__auto___34865]));

var G__34866 = (i__19513__auto___34865 + (1));
i__19513__auto___34865 = G__34866;
continue;
} else {
}
break;
}

var G__34863 = args34861.length;
switch (G__34863) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34861.length)].join('')));

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
var args34868 = [];
var len__19512__auto___34871 = arguments.length;
var i__19513__auto___34872 = (0);
while(true){
if((i__19513__auto___34872 < len__19512__auto___34871)){
args34868.push((arguments[i__19513__auto___34872]));

var G__34873 = (i__19513__auto___34872 + (1));
i__19513__auto___34872 = G__34873;
continue;
} else {
}
break;
}

var G__34870 = args34868.length;
switch (G__34870) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34868.length)].join('')));

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
var args34875 = [];
var len__19512__auto___34946 = arguments.length;
var i__19513__auto___34947 = (0);
while(true){
if((i__19513__auto___34947 < len__19512__auto___34946)){
args34875.push((arguments[i__19513__auto___34947]));

var G__34948 = (i__19513__auto___34947 + (1));
i__19513__auto___34947 = G__34948;
continue;
} else {
}
break;
}

var G__34877 = args34875.length;
switch (G__34877) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34875.length)].join('')));

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
var c__20609__auto___34950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___34950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___34950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34916){
var state_val_34917 = (state_34916[(1)]);
if((state_val_34917 === (7))){
var state_34916__$1 = state_34916;
var statearr_34918_34951 = state_34916__$1;
(statearr_34918_34951[(2)] = null);

(statearr_34918_34951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (1))){
var state_34916__$1 = state_34916;
var statearr_34919_34952 = state_34916__$1;
(statearr_34919_34952[(2)] = null);

(statearr_34919_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (4))){
var inst_34880 = (state_34916[(7)]);
var inst_34882 = (inst_34880 < cnt);
var state_34916__$1 = state_34916;
if(cljs.core.truth_(inst_34882)){
var statearr_34920_34953 = state_34916__$1;
(statearr_34920_34953[(1)] = (6));

} else {
var statearr_34921_34954 = state_34916__$1;
(statearr_34921_34954[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (15))){
var inst_34912 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_34922_34955 = state_34916__$1;
(statearr_34922_34955[(2)] = inst_34912);

(statearr_34922_34955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (13))){
var inst_34905 = cljs.core.async.close_BANG_.call(null,out);
var state_34916__$1 = state_34916;
var statearr_34923_34956 = state_34916__$1;
(statearr_34923_34956[(2)] = inst_34905);

(statearr_34923_34956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (6))){
var state_34916__$1 = state_34916;
var statearr_34924_34957 = state_34916__$1;
(statearr_34924_34957[(2)] = null);

(statearr_34924_34957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (3))){
var inst_34914 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34916__$1,inst_34914);
} else {
if((state_val_34917 === (12))){
var inst_34902 = (state_34916[(8)]);
var inst_34902__$1 = (state_34916[(2)]);
var inst_34903 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34902__$1);
var state_34916__$1 = (function (){var statearr_34925 = state_34916;
(statearr_34925[(8)] = inst_34902__$1);

return statearr_34925;
})();
if(cljs.core.truth_(inst_34903)){
var statearr_34926_34958 = state_34916__$1;
(statearr_34926_34958[(1)] = (13));

} else {
var statearr_34927_34959 = state_34916__$1;
(statearr_34927_34959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (2))){
var inst_34879 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34880 = (0);
var state_34916__$1 = (function (){var statearr_34928 = state_34916;
(statearr_34928[(9)] = inst_34879);

(statearr_34928[(7)] = inst_34880);

return statearr_34928;
})();
var statearr_34929_34960 = state_34916__$1;
(statearr_34929_34960[(2)] = null);

(statearr_34929_34960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (11))){
var inst_34880 = (state_34916[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34916,(10),Object,null,(9));
var inst_34889 = chs__$1.call(null,inst_34880);
var inst_34890 = done.call(null,inst_34880);
var inst_34891 = cljs.core.async.take_BANG_.call(null,inst_34889,inst_34890);
var state_34916__$1 = state_34916;
var statearr_34930_34961 = state_34916__$1;
(statearr_34930_34961[(2)] = inst_34891);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (9))){
var inst_34880 = (state_34916[(7)]);
var inst_34893 = (state_34916[(2)]);
var inst_34894 = (inst_34880 + (1));
var inst_34880__$1 = inst_34894;
var state_34916__$1 = (function (){var statearr_34931 = state_34916;
(statearr_34931[(7)] = inst_34880__$1);

(statearr_34931[(10)] = inst_34893);

return statearr_34931;
})();
var statearr_34932_34962 = state_34916__$1;
(statearr_34932_34962[(2)] = null);

(statearr_34932_34962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (5))){
var inst_34900 = (state_34916[(2)]);
var state_34916__$1 = (function (){var statearr_34933 = state_34916;
(statearr_34933[(11)] = inst_34900);

return statearr_34933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34916__$1,(12),dchan);
} else {
if((state_val_34917 === (14))){
var inst_34902 = (state_34916[(8)]);
var inst_34907 = cljs.core.apply.call(null,f,inst_34902);
var state_34916__$1 = state_34916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34916__$1,(16),out,inst_34907);
} else {
if((state_val_34917 === (16))){
var inst_34909 = (state_34916[(2)]);
var state_34916__$1 = (function (){var statearr_34934 = state_34916;
(statearr_34934[(12)] = inst_34909);

return statearr_34934;
})();
var statearr_34935_34963 = state_34916__$1;
(statearr_34935_34963[(2)] = null);

(statearr_34935_34963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (10))){
var inst_34884 = (state_34916[(2)]);
var inst_34885 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34916__$1 = (function (){var statearr_34936 = state_34916;
(statearr_34936[(13)] = inst_34884);

return statearr_34936;
})();
var statearr_34937_34964 = state_34916__$1;
(statearr_34937_34964[(2)] = inst_34885);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (8))){
var inst_34898 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
var statearr_34938_34965 = state_34916__$1;
(statearr_34938_34965[(2)] = inst_34898);

(statearr_34938_34965[(1)] = (5));


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
});})(c__20609__auto___34950,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20497__auto__,c__20609__auto___34950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20498__auto__ = null;
var cljs$core$async$state_machine__20498__auto____0 = (function (){
var statearr_34942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34942[(0)] = cljs$core$async$state_machine__20498__auto__);

(statearr_34942[(1)] = (1));

return statearr_34942;
});
var cljs$core$async$state_machine__20498__auto____1 = (function (state_34916){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_34916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e34943){if((e34943 instanceof Object)){
var ex__20501__auto__ = e34943;
var statearr_34944_34966 = state_34916;
(statearr_34944_34966[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34967 = state_34916;
state_34916 = G__34967;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$state_machine__20498__auto__ = function(state_34916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20498__auto____1.call(this,state_34916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20498__auto____0;
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20498__auto____1;
return cljs$core$async$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___34950,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20611__auto__ = (function (){var statearr_34945 = f__20610__auto__.call(null);
(statearr_34945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___34950);

return statearr_34945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___34950,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args34969 = [];
var len__19512__auto___35025 = arguments.length;
var i__19513__auto___35026 = (0);
while(true){
if((i__19513__auto___35026 < len__19512__auto___35025)){
args34969.push((arguments[i__19513__auto___35026]));

var G__35027 = (i__19513__auto___35026 + (1));
i__19513__auto___35026 = G__35027;
continue;
} else {
}
break;
}

var G__34971 = args34969.length;
switch (G__34971) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34969.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20609__auto___35029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___35029,out){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___35029,out){
return (function (state_35001){
var state_val_35002 = (state_35001[(1)]);
if((state_val_35002 === (7))){
var inst_34980 = (state_35001[(7)]);
var inst_34981 = (state_35001[(8)]);
var inst_34980__$1 = (state_35001[(2)]);
var inst_34981__$1 = cljs.core.nth.call(null,inst_34980__$1,(0),null);
var inst_34982 = cljs.core.nth.call(null,inst_34980__$1,(1),null);
var inst_34983 = (inst_34981__$1 == null);
var state_35001__$1 = (function (){var statearr_35003 = state_35001;
(statearr_35003[(7)] = inst_34980__$1);

(statearr_35003[(8)] = inst_34981__$1);

(statearr_35003[(9)] = inst_34982);

return statearr_35003;
})();
if(cljs.core.truth_(inst_34983)){
var statearr_35004_35030 = state_35001__$1;
(statearr_35004_35030[(1)] = (8));

} else {
var statearr_35005_35031 = state_35001__$1;
(statearr_35005_35031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (1))){
var inst_34972 = cljs.core.vec.call(null,chs);
var inst_34973 = inst_34972;
var state_35001__$1 = (function (){var statearr_35006 = state_35001;
(statearr_35006[(10)] = inst_34973);

return statearr_35006;
})();
var statearr_35007_35032 = state_35001__$1;
(statearr_35007_35032[(2)] = null);

(statearr_35007_35032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (4))){
var inst_34973 = (state_35001[(10)]);
var state_35001__$1 = state_35001;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35001__$1,(7),inst_34973);
} else {
if((state_val_35002 === (6))){
var inst_34997 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
var statearr_35008_35033 = state_35001__$1;
(statearr_35008_35033[(2)] = inst_34997);

(statearr_35008_35033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (3))){
var inst_34999 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35001__$1,inst_34999);
} else {
if((state_val_35002 === (2))){
var inst_34973 = (state_35001[(10)]);
var inst_34975 = cljs.core.count.call(null,inst_34973);
var inst_34976 = (inst_34975 > (0));
var state_35001__$1 = state_35001;
if(cljs.core.truth_(inst_34976)){
var statearr_35010_35034 = state_35001__$1;
(statearr_35010_35034[(1)] = (4));

} else {
var statearr_35011_35035 = state_35001__$1;
(statearr_35011_35035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (11))){
var inst_34973 = (state_35001[(10)]);
var inst_34990 = (state_35001[(2)]);
var tmp35009 = inst_34973;
var inst_34973__$1 = tmp35009;
var state_35001__$1 = (function (){var statearr_35012 = state_35001;
(statearr_35012[(11)] = inst_34990);

(statearr_35012[(10)] = inst_34973__$1);

return statearr_35012;
})();
var statearr_35013_35036 = state_35001__$1;
(statearr_35013_35036[(2)] = null);

(statearr_35013_35036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (9))){
var inst_34981 = (state_35001[(8)]);
var state_35001__$1 = state_35001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35001__$1,(11),out,inst_34981);
} else {
if((state_val_35002 === (5))){
var inst_34995 = cljs.core.async.close_BANG_.call(null,out);
var state_35001__$1 = state_35001;
var statearr_35014_35037 = state_35001__$1;
(statearr_35014_35037[(2)] = inst_34995);

(statearr_35014_35037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (10))){
var inst_34993 = (state_35001[(2)]);
var state_35001__$1 = state_35001;
var statearr_35015_35038 = state_35001__$1;
(statearr_35015_35038[(2)] = inst_34993);

(statearr_35015_35038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35002 === (8))){
var inst_34980 = (state_35001[(7)]);
var inst_34973 = (state_35001[(10)]);
var inst_34981 = (state_35001[(8)]);
var inst_34982 = (state_35001[(9)]);
var inst_34985 = (function (){var cs = inst_34973;
var vec__34978 = inst_34980;
var v = inst_34981;
var c = inst_34982;
return ((function (cs,vec__34978,v,c,inst_34980,inst_34973,inst_34981,inst_34982,state_val_35002,c__20609__auto___35029,out){
return (function (p1__34968_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34968_SHARP_);
});
;})(cs,vec__34978,v,c,inst_34980,inst_34973,inst_34981,inst_34982,state_val_35002,c__20609__auto___35029,out))
})();
var inst_34986 = cljs.core.filterv.call(null,inst_34985,inst_34973);
var inst_34973__$1 = inst_34986;
var state_35001__$1 = (function (){var statearr_35016 = state_35001;
(statearr_35016[(10)] = inst_34973__$1);

return statearr_35016;
})();
var statearr_35017_35039 = state_35001__$1;
(statearr_35017_35039[(2)] = null);

(statearr_35017_35039[(1)] = (2));


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
});})(c__20609__auto___35029,out))
;
return ((function (switch__20497__auto__,c__20609__auto___35029,out){
return (function() {
var cljs$core$async$state_machine__20498__auto__ = null;
var cljs$core$async$state_machine__20498__auto____0 = (function (){
var statearr_35021 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35021[(0)] = cljs$core$async$state_machine__20498__auto__);

(statearr_35021[(1)] = (1));

return statearr_35021;
});
var cljs$core$async$state_machine__20498__auto____1 = (function (state_35001){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_35001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e35022){if((e35022 instanceof Object)){
var ex__20501__auto__ = e35022;
var statearr_35023_35040 = state_35001;
(statearr_35023_35040[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35041 = state_35001;
state_35001 = G__35041;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$state_machine__20498__auto__ = function(state_35001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20498__auto____1.call(this,state_35001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20498__auto____0;
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20498__auto____1;
return cljs$core$async$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___35029,out))
})();
var state__20611__auto__ = (function (){var statearr_35024 = f__20610__auto__.call(null);
(statearr_35024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___35029);

return statearr_35024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___35029,out))
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
var args35042 = [];
var len__19512__auto___35091 = arguments.length;
var i__19513__auto___35092 = (0);
while(true){
if((i__19513__auto___35092 < len__19512__auto___35091)){
args35042.push((arguments[i__19513__auto___35092]));

var G__35093 = (i__19513__auto___35092 + (1));
i__19513__auto___35092 = G__35093;
continue;
} else {
}
break;
}

var G__35044 = args35042.length;
switch (G__35044) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35042.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20609__auto___35095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___35095,out){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___35095,out){
return (function (state_35068){
var state_val_35069 = (state_35068[(1)]);
if((state_val_35069 === (7))){
var inst_35050 = (state_35068[(7)]);
var inst_35050__$1 = (state_35068[(2)]);
var inst_35051 = (inst_35050__$1 == null);
var inst_35052 = cljs.core.not.call(null,inst_35051);
var state_35068__$1 = (function (){var statearr_35070 = state_35068;
(statearr_35070[(7)] = inst_35050__$1);

return statearr_35070;
})();
if(inst_35052){
var statearr_35071_35096 = state_35068__$1;
(statearr_35071_35096[(1)] = (8));

} else {
var statearr_35072_35097 = state_35068__$1;
(statearr_35072_35097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35069 === (1))){
var inst_35045 = (0);
var state_35068__$1 = (function (){var statearr_35073 = state_35068;
(statearr_35073[(8)] = inst_35045);

return statearr_35073;
})();
var statearr_35074_35098 = state_35068__$1;
(statearr_35074_35098[(2)] = null);

(statearr_35074_35098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35069 === (4))){
var state_35068__$1 = state_35068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35068__$1,(7),ch);
} else {
if((state_val_35069 === (6))){
var inst_35063 = (state_35068[(2)]);
var state_35068__$1 = state_35068;
var statearr_35075_35099 = state_35068__$1;
(statearr_35075_35099[(2)] = inst_35063);

(statearr_35075_35099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35069 === (3))){
var inst_35065 = (state_35068[(2)]);
var inst_35066 = cljs.core.async.close_BANG_.call(null,out);
var state_35068__$1 = (function (){var statearr_35076 = state_35068;
(statearr_35076[(9)] = inst_35065);

return statearr_35076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35068__$1,inst_35066);
} else {
if((state_val_35069 === (2))){
var inst_35045 = (state_35068[(8)]);
var inst_35047 = (inst_35045 < n);
var state_35068__$1 = state_35068;
if(cljs.core.truth_(inst_35047)){
var statearr_35077_35100 = state_35068__$1;
(statearr_35077_35100[(1)] = (4));

} else {
var statearr_35078_35101 = state_35068__$1;
(statearr_35078_35101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35069 === (11))){
var inst_35045 = (state_35068[(8)]);
var inst_35055 = (state_35068[(2)]);
var inst_35056 = (inst_35045 + (1));
var inst_35045__$1 = inst_35056;
var state_35068__$1 = (function (){var statearr_35079 = state_35068;
(statearr_35079[(10)] = inst_35055);

(statearr_35079[(8)] = inst_35045__$1);

return statearr_35079;
})();
var statearr_35080_35102 = state_35068__$1;
(statearr_35080_35102[(2)] = null);

(statearr_35080_35102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35069 === (9))){
var state_35068__$1 = state_35068;
var statearr_35081_35103 = state_35068__$1;
(statearr_35081_35103[(2)] = null);

(statearr_35081_35103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35069 === (5))){
var state_35068__$1 = state_35068;
var statearr_35082_35104 = state_35068__$1;
(statearr_35082_35104[(2)] = null);

(statearr_35082_35104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35069 === (10))){
var inst_35060 = (state_35068[(2)]);
var state_35068__$1 = state_35068;
var statearr_35083_35105 = state_35068__$1;
(statearr_35083_35105[(2)] = inst_35060);

(statearr_35083_35105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35069 === (8))){
var inst_35050 = (state_35068[(7)]);
var state_35068__$1 = state_35068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35068__$1,(11),out,inst_35050);
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
});})(c__20609__auto___35095,out))
;
return ((function (switch__20497__auto__,c__20609__auto___35095,out){
return (function() {
var cljs$core$async$state_machine__20498__auto__ = null;
var cljs$core$async$state_machine__20498__auto____0 = (function (){
var statearr_35087 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35087[(0)] = cljs$core$async$state_machine__20498__auto__);

(statearr_35087[(1)] = (1));

return statearr_35087;
});
var cljs$core$async$state_machine__20498__auto____1 = (function (state_35068){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_35068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e35088){if((e35088 instanceof Object)){
var ex__20501__auto__ = e35088;
var statearr_35089_35106 = state_35068;
(statearr_35089_35106[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35107 = state_35068;
state_35068 = G__35107;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$state_machine__20498__auto__ = function(state_35068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20498__auto____1.call(this,state_35068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20498__auto____0;
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20498__auto____1;
return cljs$core$async$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___35095,out))
})();
var state__20611__auto__ = (function (){var statearr_35090 = f__20610__auto__.call(null);
(statearr_35090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___35095);

return statearr_35090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___35095,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35115 = (function (map_LT_,f,ch,meta35116){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35116 = meta35116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35117,meta35116__$1){
var self__ = this;
var _35117__$1 = this;
return (new cljs.core.async.t_cljs$core$async35115(self__.map_LT_,self__.f,self__.ch,meta35116__$1));
});

cljs.core.async.t_cljs$core$async35115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35117){
var self__ = this;
var _35117__$1 = this;
return self__.meta35116;
});

cljs.core.async.t_cljs$core$async35115.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35115.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35118 = (function (map_LT_,f,ch,meta35116,_,fn1,meta35119){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35116 = meta35116;
this._ = _;
this.fn1 = fn1;
this.meta35119 = meta35119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35120,meta35119__$1){
var self__ = this;
var _35120__$1 = this;
return (new cljs.core.async.t_cljs$core$async35118(self__.map_LT_,self__.f,self__.ch,self__.meta35116,self__._,self__.fn1,meta35119__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35120){
var self__ = this;
var _35120__$1 = this;
return self__.meta35119;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35108_SHARP_){
return f1.call(null,(((p1__35108_SHARP_ == null))?null:self__.f.call(null,p1__35108_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35118.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35116","meta35116",350121491,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35115","cljs.core.async/t_cljs$core$async35115",972814886,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35119","meta35119",1219197325,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35118";

cljs.core.async.t_cljs$core$async35118.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async35118");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35118 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35118(map_LT___$1,f__$1,ch__$1,meta35116__$1,___$2,fn1__$1,meta35119){
return (new cljs.core.async.t_cljs$core$async35118(map_LT___$1,f__$1,ch__$1,meta35116__$1,___$2,fn1__$1,meta35119));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35118(self__.map_LT_,self__.f,self__.ch,self__.meta35116,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35116","meta35116",350121491,null)], null);
});

cljs.core.async.t_cljs$core$async35115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35115";

cljs.core.async.t_cljs$core$async35115.cljs$lang$ctorPrWriter = (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async35115");
});

cljs.core.async.__GT_t_cljs$core$async35115 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35115(map_LT___$1,f__$1,ch__$1,meta35116){
return (new cljs.core.async.t_cljs$core$async35115(map_LT___$1,f__$1,ch__$1,meta35116));
});

}

return (new cljs.core.async.t_cljs$core$async35115(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35124 = (function (map_GT_,f,ch,meta35125){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35125 = meta35125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35126,meta35125__$1){
var self__ = this;
var _35126__$1 = this;
return (new cljs.core.async.t_cljs$core$async35124(self__.map_GT_,self__.f,self__.ch,meta35125__$1));
});

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35126){
var self__ = this;
var _35126__$1 = this;
return self__.meta35125;
});

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35125","meta35125",1751536498,null)], null);
});

cljs.core.async.t_cljs$core$async35124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35124";

cljs.core.async.t_cljs$core$async35124.cljs$lang$ctorPrWriter = (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async35124");
});

cljs.core.async.__GT_t_cljs$core$async35124 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35124(map_GT___$1,f__$1,ch__$1,meta35125){
return (new cljs.core.async.t_cljs$core$async35124(map_GT___$1,f__$1,ch__$1,meta35125));
});

}

return (new cljs.core.async.t_cljs$core$async35124(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35130 = (function (filter_GT_,p,ch,meta35131){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35131 = meta35131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35132,meta35131__$1){
var self__ = this;
var _35132__$1 = this;
return (new cljs.core.async.t_cljs$core$async35130(self__.filter_GT_,self__.p,self__.ch,meta35131__$1));
});

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35132){
var self__ = this;
var _35132__$1 = this;
return self__.meta35131;
});

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35131","meta35131",1939261768,null)], null);
});

cljs.core.async.t_cljs$core$async35130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35130";

cljs.core.async.t_cljs$core$async35130.cljs$lang$ctorPrWriter = (function (this__19048__auto__,writer__19049__auto__,opt__19050__auto__){
return cljs.core._write.call(null,writer__19049__auto__,"cljs.core.async/t_cljs$core$async35130");
});

cljs.core.async.__GT_t_cljs$core$async35130 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35130(filter_GT___$1,p__$1,ch__$1,meta35131){
return (new cljs.core.async.t_cljs$core$async35130(filter_GT___$1,p__$1,ch__$1,meta35131));
});

}

return (new cljs.core.async.t_cljs$core$async35130(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args35133 = [];
var len__19512__auto___35177 = arguments.length;
var i__19513__auto___35178 = (0);
while(true){
if((i__19513__auto___35178 < len__19512__auto___35177)){
args35133.push((arguments[i__19513__auto___35178]));

var G__35179 = (i__19513__auto___35178 + (1));
i__19513__auto___35178 = G__35179;
continue;
} else {
}
break;
}

var G__35135 = args35133.length;
switch (G__35135) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35133.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20609__auto___35181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___35181,out){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___35181,out){
return (function (state_35156){
var state_val_35157 = (state_35156[(1)]);
if((state_val_35157 === (7))){
var inst_35152 = (state_35156[(2)]);
var state_35156__$1 = state_35156;
var statearr_35158_35182 = state_35156__$1;
(statearr_35158_35182[(2)] = inst_35152);

(statearr_35158_35182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (1))){
var state_35156__$1 = state_35156;
var statearr_35159_35183 = state_35156__$1;
(statearr_35159_35183[(2)] = null);

(statearr_35159_35183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (4))){
var inst_35138 = (state_35156[(7)]);
var inst_35138__$1 = (state_35156[(2)]);
var inst_35139 = (inst_35138__$1 == null);
var state_35156__$1 = (function (){var statearr_35160 = state_35156;
(statearr_35160[(7)] = inst_35138__$1);

return statearr_35160;
})();
if(cljs.core.truth_(inst_35139)){
var statearr_35161_35184 = state_35156__$1;
(statearr_35161_35184[(1)] = (5));

} else {
var statearr_35162_35185 = state_35156__$1;
(statearr_35162_35185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (6))){
var inst_35138 = (state_35156[(7)]);
var inst_35143 = p.call(null,inst_35138);
var state_35156__$1 = state_35156;
if(cljs.core.truth_(inst_35143)){
var statearr_35163_35186 = state_35156__$1;
(statearr_35163_35186[(1)] = (8));

} else {
var statearr_35164_35187 = state_35156__$1;
(statearr_35164_35187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (3))){
var inst_35154 = (state_35156[(2)]);
var state_35156__$1 = state_35156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35156__$1,inst_35154);
} else {
if((state_val_35157 === (2))){
var state_35156__$1 = state_35156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35156__$1,(4),ch);
} else {
if((state_val_35157 === (11))){
var inst_35146 = (state_35156[(2)]);
var state_35156__$1 = state_35156;
var statearr_35165_35188 = state_35156__$1;
(statearr_35165_35188[(2)] = inst_35146);

(statearr_35165_35188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (9))){
var state_35156__$1 = state_35156;
var statearr_35166_35189 = state_35156__$1;
(statearr_35166_35189[(2)] = null);

(statearr_35166_35189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (5))){
var inst_35141 = cljs.core.async.close_BANG_.call(null,out);
var state_35156__$1 = state_35156;
var statearr_35167_35190 = state_35156__$1;
(statearr_35167_35190[(2)] = inst_35141);

(statearr_35167_35190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (10))){
var inst_35149 = (state_35156[(2)]);
var state_35156__$1 = (function (){var statearr_35168 = state_35156;
(statearr_35168[(8)] = inst_35149);

return statearr_35168;
})();
var statearr_35169_35191 = state_35156__$1;
(statearr_35169_35191[(2)] = null);

(statearr_35169_35191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35157 === (8))){
var inst_35138 = (state_35156[(7)]);
var state_35156__$1 = state_35156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35156__$1,(11),out,inst_35138);
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
});})(c__20609__auto___35181,out))
;
return ((function (switch__20497__auto__,c__20609__auto___35181,out){
return (function() {
var cljs$core$async$state_machine__20498__auto__ = null;
var cljs$core$async$state_machine__20498__auto____0 = (function (){
var statearr_35173 = [null,null,null,null,null,null,null,null,null];
(statearr_35173[(0)] = cljs$core$async$state_machine__20498__auto__);

(statearr_35173[(1)] = (1));

return statearr_35173;
});
var cljs$core$async$state_machine__20498__auto____1 = (function (state_35156){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_35156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e35174){if((e35174 instanceof Object)){
var ex__20501__auto__ = e35174;
var statearr_35175_35192 = state_35156;
(statearr_35175_35192[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35193 = state_35156;
state_35156 = G__35193;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$state_machine__20498__auto__ = function(state_35156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20498__auto____1.call(this,state_35156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20498__auto____0;
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20498__auto____1;
return cljs$core$async$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___35181,out))
})();
var state__20611__auto__ = (function (){var statearr_35176 = f__20610__auto__.call(null);
(statearr_35176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___35181);

return statearr_35176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___35181,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args35194 = [];
var len__19512__auto___35197 = arguments.length;
var i__19513__auto___35198 = (0);
while(true){
if((i__19513__auto___35198 < len__19512__auto___35197)){
args35194.push((arguments[i__19513__auto___35198]));

var G__35199 = (i__19513__auto___35198 + (1));
i__19513__auto___35198 = G__35199;
continue;
} else {
}
break;
}

var G__35196 = args35194.length;
switch (G__35196) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35194.length)].join('')));

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
var c__20609__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto__){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto__){
return (function (state_35366){
var state_val_35367 = (state_35366[(1)]);
if((state_val_35367 === (7))){
var inst_35362 = (state_35366[(2)]);
var state_35366__$1 = state_35366;
var statearr_35368_35409 = state_35366__$1;
(statearr_35368_35409[(2)] = inst_35362);

(statearr_35368_35409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (20))){
var inst_35332 = (state_35366[(7)]);
var inst_35343 = (state_35366[(2)]);
var inst_35344 = cljs.core.next.call(null,inst_35332);
var inst_35318 = inst_35344;
var inst_35319 = null;
var inst_35320 = (0);
var inst_35321 = (0);
var state_35366__$1 = (function (){var statearr_35369 = state_35366;
(statearr_35369[(8)] = inst_35343);

(statearr_35369[(9)] = inst_35320);

(statearr_35369[(10)] = inst_35319);

(statearr_35369[(11)] = inst_35318);

(statearr_35369[(12)] = inst_35321);

return statearr_35369;
})();
var statearr_35370_35410 = state_35366__$1;
(statearr_35370_35410[(2)] = null);

(statearr_35370_35410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (1))){
var state_35366__$1 = state_35366;
var statearr_35371_35411 = state_35366__$1;
(statearr_35371_35411[(2)] = null);

(statearr_35371_35411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (4))){
var inst_35307 = (state_35366[(13)]);
var inst_35307__$1 = (state_35366[(2)]);
var inst_35308 = (inst_35307__$1 == null);
var state_35366__$1 = (function (){var statearr_35372 = state_35366;
(statearr_35372[(13)] = inst_35307__$1);

return statearr_35372;
})();
if(cljs.core.truth_(inst_35308)){
var statearr_35373_35412 = state_35366__$1;
(statearr_35373_35412[(1)] = (5));

} else {
var statearr_35374_35413 = state_35366__$1;
(statearr_35374_35413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (15))){
var state_35366__$1 = state_35366;
var statearr_35378_35414 = state_35366__$1;
(statearr_35378_35414[(2)] = null);

(statearr_35378_35414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (21))){
var state_35366__$1 = state_35366;
var statearr_35379_35415 = state_35366__$1;
(statearr_35379_35415[(2)] = null);

(statearr_35379_35415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (13))){
var inst_35320 = (state_35366[(9)]);
var inst_35319 = (state_35366[(10)]);
var inst_35318 = (state_35366[(11)]);
var inst_35321 = (state_35366[(12)]);
var inst_35328 = (state_35366[(2)]);
var inst_35329 = (inst_35321 + (1));
var tmp35375 = inst_35320;
var tmp35376 = inst_35319;
var tmp35377 = inst_35318;
var inst_35318__$1 = tmp35377;
var inst_35319__$1 = tmp35376;
var inst_35320__$1 = tmp35375;
var inst_35321__$1 = inst_35329;
var state_35366__$1 = (function (){var statearr_35380 = state_35366;
(statearr_35380[(9)] = inst_35320__$1);

(statearr_35380[(10)] = inst_35319__$1);

(statearr_35380[(11)] = inst_35318__$1);

(statearr_35380[(12)] = inst_35321__$1);

(statearr_35380[(14)] = inst_35328);

return statearr_35380;
})();
var statearr_35381_35416 = state_35366__$1;
(statearr_35381_35416[(2)] = null);

(statearr_35381_35416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (22))){
var state_35366__$1 = state_35366;
var statearr_35382_35417 = state_35366__$1;
(statearr_35382_35417[(2)] = null);

(statearr_35382_35417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (6))){
var inst_35307 = (state_35366[(13)]);
var inst_35316 = f.call(null,inst_35307);
var inst_35317 = cljs.core.seq.call(null,inst_35316);
var inst_35318 = inst_35317;
var inst_35319 = null;
var inst_35320 = (0);
var inst_35321 = (0);
var state_35366__$1 = (function (){var statearr_35383 = state_35366;
(statearr_35383[(9)] = inst_35320);

(statearr_35383[(10)] = inst_35319);

(statearr_35383[(11)] = inst_35318);

(statearr_35383[(12)] = inst_35321);

return statearr_35383;
})();
var statearr_35384_35418 = state_35366__$1;
(statearr_35384_35418[(2)] = null);

(statearr_35384_35418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (17))){
var inst_35332 = (state_35366[(7)]);
var inst_35336 = cljs.core.chunk_first.call(null,inst_35332);
var inst_35337 = cljs.core.chunk_rest.call(null,inst_35332);
var inst_35338 = cljs.core.count.call(null,inst_35336);
var inst_35318 = inst_35337;
var inst_35319 = inst_35336;
var inst_35320 = inst_35338;
var inst_35321 = (0);
var state_35366__$1 = (function (){var statearr_35385 = state_35366;
(statearr_35385[(9)] = inst_35320);

(statearr_35385[(10)] = inst_35319);

(statearr_35385[(11)] = inst_35318);

(statearr_35385[(12)] = inst_35321);

return statearr_35385;
})();
var statearr_35386_35419 = state_35366__$1;
(statearr_35386_35419[(2)] = null);

(statearr_35386_35419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (3))){
var inst_35364 = (state_35366[(2)]);
var state_35366__$1 = state_35366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35366__$1,inst_35364);
} else {
if((state_val_35367 === (12))){
var inst_35352 = (state_35366[(2)]);
var state_35366__$1 = state_35366;
var statearr_35387_35420 = state_35366__$1;
(statearr_35387_35420[(2)] = inst_35352);

(statearr_35387_35420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (2))){
var state_35366__$1 = state_35366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35366__$1,(4),in$);
} else {
if((state_val_35367 === (23))){
var inst_35360 = (state_35366[(2)]);
var state_35366__$1 = state_35366;
var statearr_35388_35421 = state_35366__$1;
(statearr_35388_35421[(2)] = inst_35360);

(statearr_35388_35421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (19))){
var inst_35347 = (state_35366[(2)]);
var state_35366__$1 = state_35366;
var statearr_35389_35422 = state_35366__$1;
(statearr_35389_35422[(2)] = inst_35347);

(statearr_35389_35422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (11))){
var inst_35318 = (state_35366[(11)]);
var inst_35332 = (state_35366[(7)]);
var inst_35332__$1 = cljs.core.seq.call(null,inst_35318);
var state_35366__$1 = (function (){var statearr_35390 = state_35366;
(statearr_35390[(7)] = inst_35332__$1);

return statearr_35390;
})();
if(inst_35332__$1){
var statearr_35391_35423 = state_35366__$1;
(statearr_35391_35423[(1)] = (14));

} else {
var statearr_35392_35424 = state_35366__$1;
(statearr_35392_35424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (9))){
var inst_35354 = (state_35366[(2)]);
var inst_35355 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35366__$1 = (function (){var statearr_35393 = state_35366;
(statearr_35393[(15)] = inst_35354);

return statearr_35393;
})();
if(cljs.core.truth_(inst_35355)){
var statearr_35394_35425 = state_35366__$1;
(statearr_35394_35425[(1)] = (21));

} else {
var statearr_35395_35426 = state_35366__$1;
(statearr_35395_35426[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (5))){
var inst_35310 = cljs.core.async.close_BANG_.call(null,out);
var state_35366__$1 = state_35366;
var statearr_35396_35427 = state_35366__$1;
(statearr_35396_35427[(2)] = inst_35310);

(statearr_35396_35427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (14))){
var inst_35332 = (state_35366[(7)]);
var inst_35334 = cljs.core.chunked_seq_QMARK_.call(null,inst_35332);
var state_35366__$1 = state_35366;
if(inst_35334){
var statearr_35397_35428 = state_35366__$1;
(statearr_35397_35428[(1)] = (17));

} else {
var statearr_35398_35429 = state_35366__$1;
(statearr_35398_35429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (16))){
var inst_35350 = (state_35366[(2)]);
var state_35366__$1 = state_35366;
var statearr_35399_35430 = state_35366__$1;
(statearr_35399_35430[(2)] = inst_35350);

(statearr_35399_35430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (10))){
var inst_35319 = (state_35366[(10)]);
var inst_35321 = (state_35366[(12)]);
var inst_35326 = cljs.core._nth.call(null,inst_35319,inst_35321);
var state_35366__$1 = state_35366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35366__$1,(13),out,inst_35326);
} else {
if((state_val_35367 === (18))){
var inst_35332 = (state_35366[(7)]);
var inst_35341 = cljs.core.first.call(null,inst_35332);
var state_35366__$1 = state_35366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35366__$1,(20),out,inst_35341);
} else {
if((state_val_35367 === (8))){
var inst_35320 = (state_35366[(9)]);
var inst_35321 = (state_35366[(12)]);
var inst_35323 = (inst_35321 < inst_35320);
var inst_35324 = inst_35323;
var state_35366__$1 = state_35366;
if(cljs.core.truth_(inst_35324)){
var statearr_35400_35431 = state_35366__$1;
(statearr_35400_35431[(1)] = (10));

} else {
var statearr_35401_35432 = state_35366__$1;
(statearr_35401_35432[(1)] = (11));

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
});})(c__20609__auto__))
;
return ((function (switch__20497__auto__,c__20609__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20498__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20498__auto____0 = (function (){
var statearr_35405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35405[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20498__auto__);

(statearr_35405[(1)] = (1));

return statearr_35405;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20498__auto____1 = (function (state_35366){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_35366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e35406){if((e35406 instanceof Object)){
var ex__20501__auto__ = e35406;
var statearr_35407_35433 = state_35366;
(statearr_35407_35433[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35434 = state_35366;
state_35366 = G__35434;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20498__auto__ = function(state_35366){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20498__auto____1.call(this,state_35366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20498__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20498__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto__))
})();
var state__20611__auto__ = (function (){var statearr_35408 = f__20610__auto__.call(null);
(statearr_35408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto__);

return statearr_35408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto__))
);

return c__20609__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args35435 = [];
var len__19512__auto___35438 = arguments.length;
var i__19513__auto___35439 = (0);
while(true){
if((i__19513__auto___35439 < len__19512__auto___35438)){
args35435.push((arguments[i__19513__auto___35439]));

var G__35440 = (i__19513__auto___35439 + (1));
i__19513__auto___35439 = G__35440;
continue;
} else {
}
break;
}

var G__35437 = args35435.length;
switch (G__35437) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35435.length)].join('')));

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
var args35442 = [];
var len__19512__auto___35445 = arguments.length;
var i__19513__auto___35446 = (0);
while(true){
if((i__19513__auto___35446 < len__19512__auto___35445)){
args35442.push((arguments[i__19513__auto___35446]));

var G__35447 = (i__19513__auto___35446 + (1));
i__19513__auto___35446 = G__35447;
continue;
} else {
}
break;
}

var G__35444 = args35442.length;
switch (G__35444) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35442.length)].join('')));

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
var args35449 = [];
var len__19512__auto___35500 = arguments.length;
var i__19513__auto___35501 = (0);
while(true){
if((i__19513__auto___35501 < len__19512__auto___35500)){
args35449.push((arguments[i__19513__auto___35501]));

var G__35502 = (i__19513__auto___35501 + (1));
i__19513__auto___35501 = G__35502;
continue;
} else {
}
break;
}

var G__35451 = args35449.length;
switch (G__35451) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35449.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20609__auto___35504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___35504,out){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___35504,out){
return (function (state_35475){
var state_val_35476 = (state_35475[(1)]);
if((state_val_35476 === (7))){
var inst_35470 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35477_35505 = state_35475__$1;
(statearr_35477_35505[(2)] = inst_35470);

(statearr_35477_35505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (1))){
var inst_35452 = null;
var state_35475__$1 = (function (){var statearr_35478 = state_35475;
(statearr_35478[(7)] = inst_35452);

return statearr_35478;
})();
var statearr_35479_35506 = state_35475__$1;
(statearr_35479_35506[(2)] = null);

(statearr_35479_35506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (4))){
var inst_35455 = (state_35475[(8)]);
var inst_35455__$1 = (state_35475[(2)]);
var inst_35456 = (inst_35455__$1 == null);
var inst_35457 = cljs.core.not.call(null,inst_35456);
var state_35475__$1 = (function (){var statearr_35480 = state_35475;
(statearr_35480[(8)] = inst_35455__$1);

return statearr_35480;
})();
if(inst_35457){
var statearr_35481_35507 = state_35475__$1;
(statearr_35481_35507[(1)] = (5));

} else {
var statearr_35482_35508 = state_35475__$1;
(statearr_35482_35508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (6))){
var state_35475__$1 = state_35475;
var statearr_35483_35509 = state_35475__$1;
(statearr_35483_35509[(2)] = null);

(statearr_35483_35509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (3))){
var inst_35472 = (state_35475[(2)]);
var inst_35473 = cljs.core.async.close_BANG_.call(null,out);
var state_35475__$1 = (function (){var statearr_35484 = state_35475;
(statearr_35484[(9)] = inst_35472);

return statearr_35484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35475__$1,inst_35473);
} else {
if((state_val_35476 === (2))){
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35475__$1,(4),ch);
} else {
if((state_val_35476 === (11))){
var inst_35455 = (state_35475[(8)]);
var inst_35464 = (state_35475[(2)]);
var inst_35452 = inst_35455;
var state_35475__$1 = (function (){var statearr_35485 = state_35475;
(statearr_35485[(7)] = inst_35452);

(statearr_35485[(10)] = inst_35464);

return statearr_35485;
})();
var statearr_35486_35510 = state_35475__$1;
(statearr_35486_35510[(2)] = null);

(statearr_35486_35510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (9))){
var inst_35455 = (state_35475[(8)]);
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35475__$1,(11),out,inst_35455);
} else {
if((state_val_35476 === (5))){
var inst_35452 = (state_35475[(7)]);
var inst_35455 = (state_35475[(8)]);
var inst_35459 = cljs.core._EQ_.call(null,inst_35455,inst_35452);
var state_35475__$1 = state_35475;
if(inst_35459){
var statearr_35488_35511 = state_35475__$1;
(statearr_35488_35511[(1)] = (8));

} else {
var statearr_35489_35512 = state_35475__$1;
(statearr_35489_35512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (10))){
var inst_35467 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35490_35513 = state_35475__$1;
(statearr_35490_35513[(2)] = inst_35467);

(statearr_35490_35513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (8))){
var inst_35452 = (state_35475[(7)]);
var tmp35487 = inst_35452;
var inst_35452__$1 = tmp35487;
var state_35475__$1 = (function (){var statearr_35491 = state_35475;
(statearr_35491[(7)] = inst_35452__$1);

return statearr_35491;
})();
var statearr_35492_35514 = state_35475__$1;
(statearr_35492_35514[(2)] = null);

(statearr_35492_35514[(1)] = (2));


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
});})(c__20609__auto___35504,out))
;
return ((function (switch__20497__auto__,c__20609__auto___35504,out){
return (function() {
var cljs$core$async$state_machine__20498__auto__ = null;
var cljs$core$async$state_machine__20498__auto____0 = (function (){
var statearr_35496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35496[(0)] = cljs$core$async$state_machine__20498__auto__);

(statearr_35496[(1)] = (1));

return statearr_35496;
});
var cljs$core$async$state_machine__20498__auto____1 = (function (state_35475){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_35475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e35497){if((e35497 instanceof Object)){
var ex__20501__auto__ = e35497;
var statearr_35498_35515 = state_35475;
(statearr_35498_35515[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35516 = state_35475;
state_35475 = G__35516;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$state_machine__20498__auto__ = function(state_35475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20498__auto____1.call(this,state_35475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20498__auto____0;
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20498__auto____1;
return cljs$core$async$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___35504,out))
})();
var state__20611__auto__ = (function (){var statearr_35499 = f__20610__auto__.call(null);
(statearr_35499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___35504);

return statearr_35499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___35504,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35517 = [];
var len__19512__auto___35587 = arguments.length;
var i__19513__auto___35588 = (0);
while(true){
if((i__19513__auto___35588 < len__19512__auto___35587)){
args35517.push((arguments[i__19513__auto___35588]));

var G__35589 = (i__19513__auto___35588 + (1));
i__19513__auto___35588 = G__35589;
continue;
} else {
}
break;
}

var G__35519 = args35517.length;
switch (G__35519) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35517.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20609__auto___35591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___35591,out){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___35591,out){
return (function (state_35557){
var state_val_35558 = (state_35557[(1)]);
if((state_val_35558 === (7))){
var inst_35553 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35559_35592 = state_35557__$1;
(statearr_35559_35592[(2)] = inst_35553);

(statearr_35559_35592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (1))){
var inst_35520 = (new Array(n));
var inst_35521 = inst_35520;
var inst_35522 = (0);
var state_35557__$1 = (function (){var statearr_35560 = state_35557;
(statearr_35560[(7)] = inst_35521);

(statearr_35560[(8)] = inst_35522);

return statearr_35560;
})();
var statearr_35561_35593 = state_35557__$1;
(statearr_35561_35593[(2)] = null);

(statearr_35561_35593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (4))){
var inst_35525 = (state_35557[(9)]);
var inst_35525__$1 = (state_35557[(2)]);
var inst_35526 = (inst_35525__$1 == null);
var inst_35527 = cljs.core.not.call(null,inst_35526);
var state_35557__$1 = (function (){var statearr_35562 = state_35557;
(statearr_35562[(9)] = inst_35525__$1);

return statearr_35562;
})();
if(inst_35527){
var statearr_35563_35594 = state_35557__$1;
(statearr_35563_35594[(1)] = (5));

} else {
var statearr_35564_35595 = state_35557__$1;
(statearr_35564_35595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (15))){
var inst_35547 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35565_35596 = state_35557__$1;
(statearr_35565_35596[(2)] = inst_35547);

(statearr_35565_35596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (13))){
var state_35557__$1 = state_35557;
var statearr_35566_35597 = state_35557__$1;
(statearr_35566_35597[(2)] = null);

(statearr_35566_35597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (6))){
var inst_35522 = (state_35557[(8)]);
var inst_35543 = (inst_35522 > (0));
var state_35557__$1 = state_35557;
if(cljs.core.truth_(inst_35543)){
var statearr_35567_35598 = state_35557__$1;
(statearr_35567_35598[(1)] = (12));

} else {
var statearr_35568_35599 = state_35557__$1;
(statearr_35568_35599[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (3))){
var inst_35555 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35557__$1,inst_35555);
} else {
if((state_val_35558 === (12))){
var inst_35521 = (state_35557[(7)]);
var inst_35545 = cljs.core.vec.call(null,inst_35521);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35557__$1,(15),out,inst_35545);
} else {
if((state_val_35558 === (2))){
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(4),ch);
} else {
if((state_val_35558 === (11))){
var inst_35537 = (state_35557[(2)]);
var inst_35538 = (new Array(n));
var inst_35521 = inst_35538;
var inst_35522 = (0);
var state_35557__$1 = (function (){var statearr_35569 = state_35557;
(statearr_35569[(7)] = inst_35521);

(statearr_35569[(8)] = inst_35522);

(statearr_35569[(10)] = inst_35537);

return statearr_35569;
})();
var statearr_35570_35600 = state_35557__$1;
(statearr_35570_35600[(2)] = null);

(statearr_35570_35600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (9))){
var inst_35521 = (state_35557[(7)]);
var inst_35535 = cljs.core.vec.call(null,inst_35521);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35557__$1,(11),out,inst_35535);
} else {
if((state_val_35558 === (5))){
var inst_35525 = (state_35557[(9)]);
var inst_35521 = (state_35557[(7)]);
var inst_35530 = (state_35557[(11)]);
var inst_35522 = (state_35557[(8)]);
var inst_35529 = (inst_35521[inst_35522] = inst_35525);
var inst_35530__$1 = (inst_35522 + (1));
var inst_35531 = (inst_35530__$1 < n);
var state_35557__$1 = (function (){var statearr_35571 = state_35557;
(statearr_35571[(12)] = inst_35529);

(statearr_35571[(11)] = inst_35530__$1);

return statearr_35571;
})();
if(cljs.core.truth_(inst_35531)){
var statearr_35572_35601 = state_35557__$1;
(statearr_35572_35601[(1)] = (8));

} else {
var statearr_35573_35602 = state_35557__$1;
(statearr_35573_35602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (14))){
var inst_35550 = (state_35557[(2)]);
var inst_35551 = cljs.core.async.close_BANG_.call(null,out);
var state_35557__$1 = (function (){var statearr_35575 = state_35557;
(statearr_35575[(13)] = inst_35550);

return statearr_35575;
})();
var statearr_35576_35603 = state_35557__$1;
(statearr_35576_35603[(2)] = inst_35551);

(statearr_35576_35603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (10))){
var inst_35541 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35577_35604 = state_35557__$1;
(statearr_35577_35604[(2)] = inst_35541);

(statearr_35577_35604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (8))){
var inst_35521 = (state_35557[(7)]);
var inst_35530 = (state_35557[(11)]);
var tmp35574 = inst_35521;
var inst_35521__$1 = tmp35574;
var inst_35522 = inst_35530;
var state_35557__$1 = (function (){var statearr_35578 = state_35557;
(statearr_35578[(7)] = inst_35521__$1);

(statearr_35578[(8)] = inst_35522);

return statearr_35578;
})();
var statearr_35579_35605 = state_35557__$1;
(statearr_35579_35605[(2)] = null);

(statearr_35579_35605[(1)] = (2));


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
});})(c__20609__auto___35591,out))
;
return ((function (switch__20497__auto__,c__20609__auto___35591,out){
return (function() {
var cljs$core$async$state_machine__20498__auto__ = null;
var cljs$core$async$state_machine__20498__auto____0 = (function (){
var statearr_35583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35583[(0)] = cljs$core$async$state_machine__20498__auto__);

(statearr_35583[(1)] = (1));

return statearr_35583;
});
var cljs$core$async$state_machine__20498__auto____1 = (function (state_35557){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_35557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e35584){if((e35584 instanceof Object)){
var ex__20501__auto__ = e35584;
var statearr_35585_35606 = state_35557;
(statearr_35585_35606[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35607 = state_35557;
state_35557 = G__35607;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$state_machine__20498__auto__ = function(state_35557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20498__auto____1.call(this,state_35557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20498__auto____0;
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20498__auto____1;
return cljs$core$async$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___35591,out))
})();
var state__20611__auto__ = (function (){var statearr_35586 = f__20610__auto__.call(null);
(statearr_35586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___35591);

return statearr_35586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___35591,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35608 = [];
var len__19512__auto___35682 = arguments.length;
var i__19513__auto___35683 = (0);
while(true){
if((i__19513__auto___35683 < len__19512__auto___35682)){
args35608.push((arguments[i__19513__auto___35683]));

var G__35684 = (i__19513__auto___35683 + (1));
i__19513__auto___35683 = G__35684;
continue;
} else {
}
break;
}

var G__35610 = args35608.length;
switch (G__35610) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35608.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20609__auto___35686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20609__auto___35686,out){
return (function (){
var f__20610__auto__ = (function (){var switch__20497__auto__ = ((function (c__20609__auto___35686,out){
return (function (state_35652){
var state_val_35653 = (state_35652[(1)]);
if((state_val_35653 === (7))){
var inst_35648 = (state_35652[(2)]);
var state_35652__$1 = state_35652;
var statearr_35654_35687 = state_35652__$1;
(statearr_35654_35687[(2)] = inst_35648);

(statearr_35654_35687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (1))){
var inst_35611 = [];
var inst_35612 = inst_35611;
var inst_35613 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35652__$1 = (function (){var statearr_35655 = state_35652;
(statearr_35655[(7)] = inst_35613);

(statearr_35655[(8)] = inst_35612);

return statearr_35655;
})();
var statearr_35656_35688 = state_35652__$1;
(statearr_35656_35688[(2)] = null);

(statearr_35656_35688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (4))){
var inst_35616 = (state_35652[(9)]);
var inst_35616__$1 = (state_35652[(2)]);
var inst_35617 = (inst_35616__$1 == null);
var inst_35618 = cljs.core.not.call(null,inst_35617);
var state_35652__$1 = (function (){var statearr_35657 = state_35652;
(statearr_35657[(9)] = inst_35616__$1);

return statearr_35657;
})();
if(inst_35618){
var statearr_35658_35689 = state_35652__$1;
(statearr_35658_35689[(1)] = (5));

} else {
var statearr_35659_35690 = state_35652__$1;
(statearr_35659_35690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (15))){
var inst_35642 = (state_35652[(2)]);
var state_35652__$1 = state_35652;
var statearr_35660_35691 = state_35652__$1;
(statearr_35660_35691[(2)] = inst_35642);

(statearr_35660_35691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (13))){
var state_35652__$1 = state_35652;
var statearr_35661_35692 = state_35652__$1;
(statearr_35661_35692[(2)] = null);

(statearr_35661_35692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (6))){
var inst_35612 = (state_35652[(8)]);
var inst_35637 = inst_35612.length;
var inst_35638 = (inst_35637 > (0));
var state_35652__$1 = state_35652;
if(cljs.core.truth_(inst_35638)){
var statearr_35662_35693 = state_35652__$1;
(statearr_35662_35693[(1)] = (12));

} else {
var statearr_35663_35694 = state_35652__$1;
(statearr_35663_35694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (3))){
var inst_35650 = (state_35652[(2)]);
var state_35652__$1 = state_35652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35652__$1,inst_35650);
} else {
if((state_val_35653 === (12))){
var inst_35612 = (state_35652[(8)]);
var inst_35640 = cljs.core.vec.call(null,inst_35612);
var state_35652__$1 = state_35652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35652__$1,(15),out,inst_35640);
} else {
if((state_val_35653 === (2))){
var state_35652__$1 = state_35652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35652__$1,(4),ch);
} else {
if((state_val_35653 === (11))){
var inst_35616 = (state_35652[(9)]);
var inst_35620 = (state_35652[(10)]);
var inst_35630 = (state_35652[(2)]);
var inst_35631 = [];
var inst_35632 = inst_35631.push(inst_35616);
var inst_35612 = inst_35631;
var inst_35613 = inst_35620;
var state_35652__$1 = (function (){var statearr_35664 = state_35652;
(statearr_35664[(7)] = inst_35613);

(statearr_35664[(11)] = inst_35630);

(statearr_35664[(8)] = inst_35612);

(statearr_35664[(12)] = inst_35632);

return statearr_35664;
})();
var statearr_35665_35695 = state_35652__$1;
(statearr_35665_35695[(2)] = null);

(statearr_35665_35695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (9))){
var inst_35612 = (state_35652[(8)]);
var inst_35628 = cljs.core.vec.call(null,inst_35612);
var state_35652__$1 = state_35652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35652__$1,(11),out,inst_35628);
} else {
if((state_val_35653 === (5))){
var inst_35613 = (state_35652[(7)]);
var inst_35616 = (state_35652[(9)]);
var inst_35620 = (state_35652[(10)]);
var inst_35620__$1 = f.call(null,inst_35616);
var inst_35621 = cljs.core._EQ_.call(null,inst_35620__$1,inst_35613);
var inst_35622 = cljs.core.keyword_identical_QMARK_.call(null,inst_35613,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35623 = (inst_35621) || (inst_35622);
var state_35652__$1 = (function (){var statearr_35666 = state_35652;
(statearr_35666[(10)] = inst_35620__$1);

return statearr_35666;
})();
if(cljs.core.truth_(inst_35623)){
var statearr_35667_35696 = state_35652__$1;
(statearr_35667_35696[(1)] = (8));

} else {
var statearr_35668_35697 = state_35652__$1;
(statearr_35668_35697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (14))){
var inst_35645 = (state_35652[(2)]);
var inst_35646 = cljs.core.async.close_BANG_.call(null,out);
var state_35652__$1 = (function (){var statearr_35670 = state_35652;
(statearr_35670[(13)] = inst_35645);

return statearr_35670;
})();
var statearr_35671_35698 = state_35652__$1;
(statearr_35671_35698[(2)] = inst_35646);

(statearr_35671_35698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (10))){
var inst_35635 = (state_35652[(2)]);
var state_35652__$1 = state_35652;
var statearr_35672_35699 = state_35652__$1;
(statearr_35672_35699[(2)] = inst_35635);

(statearr_35672_35699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (8))){
var inst_35616 = (state_35652[(9)]);
var inst_35612 = (state_35652[(8)]);
var inst_35620 = (state_35652[(10)]);
var inst_35625 = inst_35612.push(inst_35616);
var tmp35669 = inst_35612;
var inst_35612__$1 = tmp35669;
var inst_35613 = inst_35620;
var state_35652__$1 = (function (){var statearr_35673 = state_35652;
(statearr_35673[(7)] = inst_35613);

(statearr_35673[(14)] = inst_35625);

(statearr_35673[(8)] = inst_35612__$1);

return statearr_35673;
})();
var statearr_35674_35700 = state_35652__$1;
(statearr_35674_35700[(2)] = null);

(statearr_35674_35700[(1)] = (2));


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
});})(c__20609__auto___35686,out))
;
return ((function (switch__20497__auto__,c__20609__auto___35686,out){
return (function() {
var cljs$core$async$state_machine__20498__auto__ = null;
var cljs$core$async$state_machine__20498__auto____0 = (function (){
var statearr_35678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35678[(0)] = cljs$core$async$state_machine__20498__auto__);

(statearr_35678[(1)] = (1));

return statearr_35678;
});
var cljs$core$async$state_machine__20498__auto____1 = (function (state_35652){
while(true){
var ret_value__20499__auto__ = (function (){try{while(true){
var result__20500__auto__ = switch__20497__auto__.call(null,state_35652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20500__auto__;
}
break;
}
}catch (e35679){if((e35679 instanceof Object)){
var ex__20501__auto__ = e35679;
var statearr_35680_35701 = state_35652;
(statearr_35680_35701[(5)] = ex__20501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35702 = state_35652;
state_35652 = G__35702;
continue;
} else {
return ret_value__20499__auto__;
}
break;
}
});
cljs$core$async$state_machine__20498__auto__ = function(state_35652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20498__auto____1.call(this,state_35652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20498__auto____0;
cljs$core$async$state_machine__20498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20498__auto____1;
return cljs$core$async$state_machine__20498__auto__;
})()
;})(switch__20497__auto__,c__20609__auto___35686,out))
})();
var state__20611__auto__ = (function (){var statearr_35681 = f__20610__auto__.call(null);
(statearr_35681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20609__auto___35686);

return statearr_35681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20611__auto__);
});})(c__20609__auto___35686,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1464472749176