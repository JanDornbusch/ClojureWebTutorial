# Tutorial 1 - Basics about **Ring** and Requests
This tutorial is about understanding the Ring workflow used by clojure webapps and the requests/responses flow in the Ring.

[[toc]]

## Ring
The following picture shows how the layout of Ring which describes the dataflow of webapps. On the right side the flow of requests (client to server) are depicted in green color. At the opposite side the response (server to client) are drawn in a blue color.

![Sketch of Ring](/img/ring.png)

The dataflow over network (HTTP) will not be described here (this should be clear or documented at wikipedia for further reading).
More information about RING can be found at [the Ring SPECs page](https://github.com/ring-clojure/ring/blob/master/SPEC).
Or by investigating the [code or repository](https://github.com/ring-clojure/ring).

## Adapters

Adapters operate close to Ethernet or other applications. They can be used to connect the Ring to webservers or sockets, which are responsible to read/write the HTTP requests/responses from the wire.
A list of available adapters can be found here: [Ring - Third Party Libraries](https://github.com/ring-clojure/ring/wiki/Third-Party-Libraries#adapters). There are still more server adapters than listet here, if your favourite web server is not in this list, give it a try and google it. Nginx made really good performance in recent tests [Clojure web server benchmarks](https://github.com/ptaoussanis/clojure-web-server-benchmarks).

## Ring maps
This chapter shows how the maps look like at 4 different points.

### Request after adapter
The following codeblock shows how a map can look (directly after adapters), you might see there are already some middlewares added content to the client and got it returned:

```clojure
{:ssl-client-cert nil,
 :cookies {"id" {:value "5181e1d9-53ef-4303-86b7-40b5f62bb0f7"}},
 :remote-addr "0:0:0:0:0:0:0:1",
 :params {:param1 "value1", :param2 "value2"},
 :flash nil,
 :headers
 {"accept"
  "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,application/json",
  "connection" "keep-alive",
  "dnt" "1",
  "accept-encoding" "gzip, deflate",
  "user-agent"
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:44.0) Gecko/20100101 Firefox/44.0",
  "accept-language" "de",
  "cookie" "id=5181e1d9-53ef-4303-86b7-40b5f62bb0f7",
  "host" "localhost:8080"},
 :server-port 8080,
 :content-length nil,
 :form-params {},
 :session/key "5181e1d9-53ef-4303-86b7-40b5f62bb0f7",
 :query-params {"param1" "value1", "param2" "value2"},
 :content-type nil,
 :character-encoding nil,
 :uri "/",
 :server-name "localhost",
 :query-string "param1=value1&param2=value2",
 :body
 #object[org.eclipse.jetty.server.HttpInput 0x423c1e3d "org.eclipse.jetty.server.HttpInput@423c1e3d"],
 :multipart-params {},
 :scheme :http,
 :request-method :get,
 :session
 {:ring.middleware.anti-forgery/anti-forgery-token
  "KX0lLYpJtWoDVVHuErth9FQZPTj58iuSLNt9fPrDORPyzWVgZw4y7fZq1gVmEjE2c2FXP90/kVBxhwyn"}}
```
### Request before handler

after running the middleware the following map is given to the handlers:

```clojure
{:ssl-client-cert nil,
 :remote-addr "0:0:0:0:0:0:0:1",
 :headers
 {"accept"
  "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,application/json",
  "connection" "keep-alive",
  "dnt" "1",
  "accept-encoding" "gzip, deflate",
  "user-agent"
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:44.0) Gecko/20100101 Firefox/44.0",
  "accept-language" "de",
  "cookie" "id=5181e1d9-53ef-4303-86b7-40b5f62bb0f7",
  "host" "localhost:8080"},
 :server-port 8080,
 :content-length nil,
 :content-type nil,
 :character-encoding nil,
 :uri "/",
 :server-name "localhost",
 :query-string "param1=value1&param2=value2",
 :body
 #object[org.eclipse.jetty.server.HttpInput 0x423c1e3d "org.eclipse.jetty.server.HttpInput@423c1e3d"],
 :scheme :http,
 :request-method :get}

```

### Response after handler
after your handlers the map might look like this:

```clojure
{:status 200,
 :headers
 {"Content-Type" "text/html; charset=utf-8",
  "X-XSS-Protection" "1; mode=block",
  "X-Frame-Options" "SAMEORIGIN",
  "X-Content-Type-Options" "nosniff"},
 :body
 "<!DOCTYPE html>\n<html><head><title>Welcome to guestbook</title><link href=\"/css/screen.css?1456142313861\" rel=\"stylesheet\" type=\"text/css\"></head><body><h1>Guestbook</h1><p>Welcome to my guestbook</p><ul class=\"guests\"><li><blockquote>test</blockquote><p>-<cite>test</cite></p><time>19/01/2016</time></li></ul><hr><p></p><form action=\"/\" method=\"POST\"><input id=\"__anti-forgery-token\" name=\"__anti-forgery-token\" type=\"hidden\" value=\"KX0lLYpJtWoDVVHuErth9FQZPTj58iuSLNt9fPrDORPyzWVgZw4y7fZq1gVmEjE2c2FXP90/kVBxhwyn\" /><p>Name</p><input id=\"name\" name=\"name\" type=\"text\"><p>Message</p><textarea cols=\"40\" id=\"message\" name=\"message\" rows=\"10\"></textarea><br><input type=\"submit\" value=\"comment\"></form></body></html>"}

```

### Response before adapters
and finally what the adapters get:

```clojure
{:status 200,
 :headers {"Content-Type" "text/html; charset=utf-8"},
 :body
 "<!DOCTYPE html>\n<html><head><title>Welcome to guestbook</title><link href=\"/css/screen.css?1456142313861\" rel=\"stylesheet\" type=\"text/css\"></head><body><h1>Guestbook</h1><p>Welcome to my guestbook</p><ul class=\"guests\"><li><blockquote>test</blockquote><p>-<cite>test</cite></p><time>19/01/2016</time></li></ul><hr><p></p><form action=\"/\" method=\"POST\"><input id=\"__anti-forgery-token\" name=\"__anti-forgery-token\" type=\"hidden\" value=\"KX0lLYpJtWoDVVHuErth9FQZPTj58iuSLNt9fPrDORPyzWVgZw4y7fZq1gVmEjE2c2FXP90/kVBxhwyn\" /><p>Name</p><input id=\"name\" name=\"name\" type=\"text\"><p>Message</p><textarea cols=\"40\" id=\"message\" name=\"message\" rows=\"10\"></textarea><br><input type=\"submit\" value=\"comment\"></form></body></html>"}

```

### Request keys explained
What does all this key-values mean? I think the best about that is to look at the most recent version at [Ring SPECs page](https://github.com/ring-clojure/ring/blob/master/SPEC).

Here is a possible older snapshot of the [Ring SPECs page](https://github.com/ring-clojure/ring/blob/master/SPEC):

| Key | Type | Description |
|-----|------|-------------|
|:server-port|(Required, Integer)|The port on which the request is being handled.|
|:server-name|(Required, String)|The resolved server name, or the server IP address.|
|:remote-addr|(Required, String)|The IP address of the client or the last proxy that sent the request.|
|:uri|(Required, String)|The request URI, excluding the query string and the "?" separator. Must start with "/".|
|:query-string|(Optional, String)|The query string, if present.|
|:scheme|(Required, Keyword)|The transport protocol, must be one of :http or :https.|
|:request-method|(Required, Keyword)|The HTTP request method, must be a lowercase keyword corresponding to a HTTP request method, such as :get or :post.|
|:protocol|(Required, String)|The protocol the request was made with, e.g. "HTTP/1.1".|
|:content-type [DEPRECATED]|(Optional, String)|The MIME type of the request body, if known.|
|:content-length [DEPRECATED]|(Optional, Integer)|The number of bytes in the request body, if known.|
|:character-encoding [DEPRECATED]|(Optional, String)|The name of the character encoding used in the request body, if known.|
|:ssl-client-cert|(Optional, X509Certificate)|The SSL client certificate, if supplied.|
|:headers|(Required, IPersistentMap)|A Clojure map of downcased header name Strings to corresponding header value Strings.|
|:body|(Optional, InputStream)|An InputStream for the request body, if present.|

### Response keys explained
and the response:

| Key | Type | Description |
|-----|------|-------------|
|:status|(Required, Integer)|The HTTP status code, must be greater than or equal to 100.|
|:headers|(Required, IPersistentMap)|A Clojure map of HTTP header names to header values. These values may be either Strings, in which case one name/value header will be sent in the HTTP response, or a seq of Strings, in which case a name/value header will be sent for each such String value.|
|:body|(Optional, {String, ISeq, File, InputStream})|A representation of the response body, if a response body is appropriate for the response's status code. The respond body is handled according to its type:</br ><dl><dt>String:</dt><dd>Contents are sent to the client as-is.</dd><dt>ISeq:</dt><dd>Each element of the seq is sent to the client as a string.</dd><dt>File:</dt><dd>Contents at the specified location are sent to the client. The server may use an optimized method to send the file if such a method is available. </dd><dt>InputStream:</dt><dd>Contents are consumed from the stream and sent to the client. When the stream is exhausted, it is .close'd.</dd></dl>|

## Middleware

Middleware is an interesting topic worth a deeper look. All requests go through this on their way to the handlers and later on way back as response they pass this wrappers too. See the code below to understand how they work. There are 2 small examples, later we will write our own debug-spy so you get more practice.

```clojure
(defn wrap-content-type [handler content-type]
  (fn [request]
    ; This is the side of incoming request (green side)
    (let [response (handler request)]
      ; here we change the response type to the given content-type
      (assoc-in response [:headers "Content-Type"] content-type))))

(defn wrap-content [handler]
  (fn [request]
    ; This is the incoming request (green side)
    (some_fn request)
    ; going forward in the ring towards other wrappers or the handler
    (let [response (handler request)]
      ; now we are behind the handlers (blue side)
      (other_fn response)
      response)))
```

## Handler

The handler(s) are responsible of creating the responses content. Different to PHP, where you could probably `echo "Content"` here you have to fill the resonse map wich will be delivered to the clients.
A simple content could be the visitors IP address as shown below.

```clojure
(defn what-is-my-ip [request]
  ; Give a status for use within the response
  {:status 200
   ; mark the content as plain text
   :headers {"Content-Type" "text/plain"}
   ; add the content (IP) to the response map
   :body (:remote-addr request)})
```

___
Read below here only for further information.
___

### Status codes
#### Information
| Code | Message | Usage |
|---|---|---|
|100|Continue|Used for big Requests (together with „Expect 100-continue“-Header-Field).|
|101|Switching Protocols|Used with „Upgrade“-Header-Field if the Server accepts the change of protocol (HTTP to WebSocket).|
|102|Processing|Send to avoid timeouts when processing big requests.|

#### Successfull Operations
| Code | Message | Usage |
|---|---|---|
|200|OK|Request successfully processed - answer is in response.|
|201|Created|Request successfully processed - ressource created, location can be in „Location“-Header-Field.|
|202|Accepted|Request has beed accepted, but will be processed later. A successfull processing can not be guaranteed.|
|203|Non-Authoritative Information|The server acts as "Transforming Proxy", the response was 200 but the document has been changed during response|
|204|No Content|Request successfully processed - the document left blank intentionally.|
|205|Reset Content|Request successfully processed - the client has to request the document again, to clear all formular inputs.|
|206|Partial Content|The requestet part was transferred successfully, normally used with a „Content-Range“-Header-Field or Content-Type multipart/byteranges. Can be used to inform the Client about successfully transfer of a partial download (used by Wget to control the progress of downloads with multiple streams).|
|207|Multi-Status|Response is XML with status codes to many seperate requested processings.|
|208|Already Reported|WebDAV RFC 5842 - the members of WebDAV-commitment already enumerated before and are no more part of this request.|
|226|IM Used|RFC 3229 – The server processed a GET-request of this ressource. The response is a view of results of one ore more instance manipulations, related to the current instance.|

#### Redirection
| Code | Message | Usage |
|---|---|---|
|300|Multiple Choices|The ressource is available in many representatons. The „Location“-Header-Field can contain the link to the preferred version of representation.|
|301|Moved Permanently|The ressource has been moved permanent (redirect). The „Location“-Header-Field points to the new path.|
|302|Found|The requested ressource is currently availiable at the path given at „Location“-Header-Field. The old address stays valid. The browsers follow the redirect mostly with GET-requests even if the initial request was a POST-request. In HTTP/1.1 this code has been replaced with 303 and 307 depended by use-case of application. 302 redirects have been replaced, because of URL-hijacking by search engine errors.|
|303|See Other|The answer of the request can be found at in „Location“-Header-Field given location. The browser shall follow the link with a GET, even if request was a POST.|
|304|Not Modified|The content has not been changed, and will not been transferred. See the browsers cache-mechanism for further information.|
|305|Use Proxy|The requestet ressource is only available via proxy. The link to this proxy is given in „Location“-Header-Field.|
|306|(reserviert)|Not more in use. - Used as „Switch Proxy“ in past.|
|307|Temporary Redirect|The requested ressource is currently availiable at the path given at „Location“-Header-Field. The old address stays valid. The browsers shall follow in same way the initial request was send (GET->GET, POST->POST, ...)|
|308|Permanent Redirect|Experimental. The ressource has been moved permanent (redirect). The „Location“-Header-Field points to the new path. The browsers shall follow in same way the initial request was send (GET->GET, POST->POST, ...)|

#### Client-Error
| Code | Message | Usage |
|---|---|---|
|400|Bad Request|The request was malformed.|
|401|Unauthorized|The request need a valid authentification to be processed. How the client shall authentificate will be included in the „WWW-Authenticate“-Header-Field of the response.|
|402|Payment Required|Reserved for further HTTP-Protocols.|
|403|Forbidden|The request has been denied due to the lack of credentials or wrong access method (HTTP instead of HTTPS).|
|404|Not Found|Ressource not exists. Or you do not want to give a reason of deny.|
|405|Method Not Allowed|If user uses GET when only POST allowed.|
|406|Not Acceptable|The content type is not available in the given requested type.|
|407|Proxy Authentication Required|Like 401. But authentication at proxy required.|
|408|Request Time-out|During allowed timespan of server the client-request was not complete.|
|409|Conflict|The PUT-request has been made under wrong assumptions about the ressource (changed by 3rd party before send).|
|410|Gone|Ressource has been removed permanent.|
|411|Length Required|The request requieres a lenght set in „Content-Length“-Header-Field to be processed.|
|412|Precondition Failed|A requirement of the request did not match - usually an „If-Match“-Header-Fields.|
|413|Request Entity Too Large|The request was to big to be processed now. If the server is able to process queries of this length/workload at an other time you can use the „Retry-After“-Header-Field to inform the client.|
|414|Request-URL Too Long|URL was too long to be processed. Usually caused by endless redirect loops.|
|415|Unsupported Media Type|The media type send in request is not allowed or supported.|
|416|Requested range not satisfiable|A part of ressource is not available on this server.|
|417|Expectation Failed|The expected behaviour of the server can not be satisfied. The behaviour can be specified in the „Expect“-Header-Field. |
|418|I’m a teapot|Sends real code 200. And is part of HTCPCP (Hyper Text Coffee Pot Control Protocol) RFC 2324. Indicates the usage of a teapot instead of a coffeepot.|
|420|Policy Not Fulfilled|Suggested by W3C PEP (Working Draft 21. November 1997) to indicate a not fullfilled requirement.|
|421|Misdirected Request|The requet has been send to a server which is not able to send answers. Introduced in HTTP/2.|
|422|Unprocessable Entity|Used when 415 is to hard answer. In case of deny the request because of semantic mistakes.|
|423|Locked|The requested ressource is currently locked.|
|424|Failed Dependency|This request can not be handled until a former request is successfull.|
|425|Unordered Collection|Only in drafts of WebDav Advanced Collections. Not in Web Distributed Authoring and Versioning (WebDAV) Ordered Collections Protocol.|
|426|Upgrade Required|The client shall switch to (TLS/1.0).|
|428|Precondition Required|To prevent race conditions in updates or deletes of ressources. Use with ETag-Header field to be sure to update and delete only if the ressource is not changed.|
|429|Too Many Requests|The client send too many requests in a given time.|
|431|Request Header Fields Too Large|The length of a single header field or the complete header is too long.|
|451|Unavailable For Legal Reasons|Introduced by Google (Tim Bray) to indicate that the requested ressource is not available because of copyright, censorship, special laws or area restrictions (access not allowed by some countries).|
|444|Proprietary No Response|Proprietary Nginx uses this in logs to indicate that nothing has been send back to client and the connection has been closed.|
|449|Proprietary The request should be retried after doing the appropriate action|Proprietary used by MS-Exchange-Server.|

#### Server-Errors
| Code | Message | Usage |
|---|---|---|
|500|Internal Server Error|Collector code used for all unexpected errors.|
|501|Not Implemented|Functionallity not supported by server. Can be a not implemented HTTP-methode.|
|502|Bad Gateway|Server could not act as configures (as proxy) because the response him got was invalid.|
|503|Service Unavailable|Server is overloaded or in maintenance. „Retry-After“-Header-Field can indicate the time the request maybe can be processed again.|
|504|Gateway Time-out|Server could not act as configures (as proxy) because the response took too long.|
|505|HTTP Version not supported|The HTTP version (x.y) x is not supported or rejected by the server.|
|506|Variant Also Negotiates|Content Negotiation produces a circular reference.|
|507|Insufficient Storage|The storage of this server is too small to process this request right now.|
|508|Loop Detected|WebDAV RFC 5842 the request produces an endless loop in binding-extension.|
|509|Bandwidth Limit Exceeded|Inofficial extension indicates the overload of bandwith of the server due to this request.|
|510|Not Extended|The request not contains all information required by the requested server extension.|

### Content-Types
Content-Types are defined as:
`Content-Type := type "/" subtype * [";" parameter]`.
While allowed types are:

| type | use |
|---|---|
|application|some other kind of data, typically either uninterpreted binary data or information to be processed by a mail-based application. The primary subtype, "octet-stream", is to be used in the case of uninterpreted binary data, in which case the simplest recommended action is to offer to write the information into a file for the user. Two additional subtypes, "ODA" and "PostScript", are defined for transporting ODA and PostScript documents in bodies. Other expected uses for "application" include spreadsheets, data for mail-based scheduling systems, and languages for "active" (computational) email. (Note that active email entails several securityconsiderations, which are discussed later in this memo, particularly in the context of application/PostScript.)|
|audio|audio data, with initial subtype "basic". Audio requires an audio output device (such as a speaker or a telephone) to "display" the contents.|
|image|image data. Image requires a display device (such as a graphical display, a printer, or a FAX machine) to view the information. Initial subtypes are defined for two widely-used image formats, jpeg and gif. |
|message|an encapsulated message. A body of Content-Type "message" is itself a fully formatted RFC 822 conformant message which may contain its own different Content-Type header field. The primary subtype is "rfc822". The "partial" subtype is defined for partial messages, to permit the fragmented transmission of bodies that are thought to be too large to be passed through mail transport facilities. Another subtype, "External-body", is defined for specifying large bodies by reference to an external data source. |
|model|files with multidimensional structures.|
|multipart|data consisting of multiple parts of independent data types. Four initial subtypes are defined, including the primary "mixed" subtype, "alternative" for representing the same data in multiple formats, "parallel" for parts intended to be viewed simultaneously, and "digest" for multipart entities in which each part is of type "message". |
|text|textual information. The primary subtype, "plain", indicates plain (unformatted) text. No special software is required to get the full meaning of the text, aside from support for the indicated character set. Subtypes are to be used for enriched text in forms where application software may enhance the appearance of the text, but such software must not be required in order to get the general idea of the content. Possible subtypes thus include any readable word processor format. A very simple and portable subtype, richtext, is defined in this document.|
|video|video data. Video requires the capability to display moving images, typically including specialized hardware and software. The initial subtype is "mpeg". |
|x-token|Private values (starting with "X-") may be defined bilaterally between two cooperating agents without outside registration or standardization. |
As explained at [W3C Protocols](https://www.w3.org/Protocols/rfc1341/4_Content-Type.html).

The tokens are defined as:
`x-token := <"X-" followed by any token, with no intervening white space> `.
about the token:
`token := <any CHARs except SPACE, CTLs, or specials>`.
and the specials:
```
specials :=  "(" / ")" / "<" / ">" / "@"  ; Must be in
             "," / ";" / ":" / "\" / <">  ; quoted-string,
             "/" / "[" / "]" / "?" / "."  ; to use within
             "="                          ; parameter values
```

#### Examples

| type | use |
|--------|--------|
|application/x-7z-compressed|7-Zip|
|application/vnd.amazon.ebook|Amazon Kindle eBook format|
|application/octet-stream|Binary Data|
|image/bmp|Bitmap Image File|
|text/css|Cascading Style Sheets (CSS)|
|image/gif|Graphics Interchange Format|
|text/html|HyperText Markup Language (HTML)|
|text/calendar|iCalendar|
|image/x-icon|Icon Image|
|application/x-javascript|JavaScript|
|application/javascript|JavaScript|
|application/json|JavaScript Object Notation (JSON)|
|image/jpeg|JPEG Image|
|video/jpeg|JPGVideo|
|application/x-latex|LaTeX|
|video/mpeg|MPEG Video|
|audio/mp4|MPEG-4 Audio|
|video/mp4|MPEG-4 Video|
|application/mp4|MPEG4|
|text/richtext|Rich Text Format (RTF)|
|image/tiff|Tagged Image File Format|
|text/plain|Text File|
|text/x-vcalendar|vCalendar|
|text/x-vcard|vCard|
|audio/x-wav|Waveform Audio File Format (WAV)|
|application/davmount+xml|Web Distributed Authoring and Versioning|
|application/x-font-woff|Web Open Font Format|
|application/wspolicy+xml|Web Services Policy|
|application/x-x509-ca-cert|X.509 Certificate|
|application/xhtml+xml|XHTML - The Extensible HyperText Markup Language|
|application/xml|XML - Extensible Markup Language|
|application/zip|Zip Archive|

A good list can be found [here at SELFHTML.org](https://wiki.selfhtml.org/wiki/Referenz:MIME-Typen).