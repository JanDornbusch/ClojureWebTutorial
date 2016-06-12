// Compiled by ClojureScript 1.8.51 {}
goog.provide('testapp.script.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
testapp.script.core.set_html_BANG_ = (function testapp$script$core$set_html_BANG_(el,content){
return el.innerHTML = content;
});
if(typeof testapp.script.core.socket !== 'undefined'){
} else {
testapp.script.core.socket = cljs.core.atom.call(null,null);
}
/**
 * receive messages of socket and apply them to handler
 */
testapp.script.core.receive_msg_BANG_ = (function testapp$script$core$receive_msg_BANG_(handler){
return (function (msg){
return handler.call(null,msg.data);
});
});
/**
 * sends a message over socket
 */
testapp.script.core.send_msg_BANG_ = (function testapp$script$core$send_msg_BANG_(msg){
if(cljs.core.truth_(cljs.core.deref.call(null,testapp.script.core.socket))){
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,testapp.script.core.socket).readyState,WebSocket.OPEN)) || (cljs.core._EQ_.call(null,cljs.core.deref.call(null,testapp.script.core.socket).readyState,(1)))){
return cljs.core.deref.call(null,testapp.script.core.socket).send(msg);
} else {
return alert("The WebSocket is not open!");
}
} else {
throw (new Error("Websocket is not available!"));
}
});
/**
 * creates a new socket with the given url and the handler to handle all incomming messages
 */
testapp.script.core.createWebSocket = (function testapp$script$core$createWebSocket(url,handler){
cljs.core.println.call(null,"attempting to connect websocket");

if(cljs.core.truth_(window.WebSocket)){
var temp__4655__auto__ = (new WebSocket(url));
if(cljs.core.truth_(temp__4655__auto__)){
var chan = temp__4655__auto__;
chan.onopen = ((function (chan,temp__4655__auto__){
return (function (event){
return alert("WebSocket open!");
});})(chan,temp__4655__auto__))
;

chan.onclose = ((function (chan,temp__4655__auto__){
return (function (event){
return alert("WebSocket closed");
});})(chan,temp__4655__auto__))
;

chan.onmessage = testapp.script.core.receive_msg_BANG_.call(null,handler);

cljs.core.reset_BANG_.call(null,testapp.script.core.socket,chan);

return cljs.core.println.call(null,"Websocket connection established with: ",url);
} else {
throw (new Error("Websocket connection failed!"));
}
} else {
return alert("Your browser does not support WebSockets yet.");
}
});
/**
 * closes the Socket
 */
testapp.script.core.closeSocket = (function testapp$script$core$closeSocket(){
if(cljs.core.truth_(cljs.core.deref.call(null,testapp.script.core.socket))){
cljs.core.println.call(null,"Closing the socket");

cljs.core.deref.call(null,testapp.script.core.socket).close();

return cljs.core.reset_BANG_.call(null,testapp.script.core.socket,null);
} else {
return null;
}
});
/**
 * attaches the response to the html element with id response
 */
testapp.script.core.parser = (function testapp$script$core$parser(response){
return testapp.script.core.set_html_BANG_.call(null,goog.dom.getElement("response"),response);
});
testapp.script.core.main = (function testapp$script$core$main(){
var content = [cljs.core.str("<hr />"),cljs.core.str("<label for=\"to_socket\">Socket input</label>"),cljs.core.str("<input id=\"to_socket\" pattern=\"[a-zA-Z0-9 \\?]{3,}\" type=\"text\" />"),cljs.core.str("<button class=\"btnSubmit\" id=\"button_socket\" type=\"submit\">Submit</button>"),cljs.core.str("<section><span>Response: </span><span id=\"response\"></span></section>")].join('');
var element = (document.getElementsByTagName("main")[(0)]);
return testapp.script.core.set_html_BANG_.call(null,element,content);
});
/**
 * create the sockets and bind the function to the button with id button_socket
 */
testapp.script.core.socketbinding = (function testapp$script$core$socketbinding(){
var button = goog.dom.getElement("button_socket");
var input = goog.dom.getElement("to_socket");
testapp.script.core.createWebSocket.call(null,"ws://127.0.0.1:8080/echo",testapp.script.core.parser);

return goog.events.listen(button,"click",((function (button,input){
return (function (event){
return testapp.script.core.send_msg_BANG_.call(null,input.value);
});})(button,input))
);
});
cljs.core.enable_console_print_BANG_.call(null);
testapp.script.core.main.call(null);
testapp.script.core.socketbinding.call(null);

//# sourceMappingURL=core.js.map?rel=1465724750175