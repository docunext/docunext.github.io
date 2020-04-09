---
title: Varnish URL Rewriting
comments:
  - author: Shahid
    email: shahid.azeez@gmail.com
    url: http://shahidz.com
    date: 07/30/2008 07:19:38 AM
    text: >
      I have an issue when backen port is set to 80.<br/><br/>Varnish listen on port 6081 and the backend haproxy listen on port 80.<br/><br/>Varnish is passing 6081 to backend.<br/><br/>This is the varnish log<br/><br/>   12 RxRequest    c GET<br/>   12 RxURL        c /frontend_dev.php/<br/>   12 RxProtocol   c HTTP/1.1<br/>   12 RxHeader     c Host: example.com:6081<br/>   12 RxHeader     c User-Agent: Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9) Gecko/2008061015 Firefox/3.0<br/>   12 RxHeader     c Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8<br/>   12 RxHeader     c Accept-Language: en-us,en;q=0.5<br/>   12 RxHeader     c Accept-Encoding: gzip,deflate<br/>   12 RxHeader     c Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7<br/>   12 RxHeader     c Keep-Alive: 300<br/>   12 RxHeader     c Connection: keep-alive<br/>   12 RxHeader     c Cookie: mobshare=954986349020f015115b99df238a8a75<br/>   12 VCL_call     c recv<br/>   12 VCL_return   c pass<br/>   12 VCL_call     c pass<br/>   12 VCL_return   c pass<br/>   13 BackendOpen  b default 127.0.0.1 51345 0.0.0.0 80<br/>   13 BackendXID   b 118910221<br/>   12 Backend      c 13 default<br/>   13 TxRequest    b GET<br/>   13 TxURL        b /frontend_dev.php/<br/>   13 TxProtocol   b HTTP/1.1<br/>   13 TxHeader     b Host: haproxy.com:6081<br/>   13 TxHeader     b User-Agent: Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9) Gecko/2008061015 Firefox/3.0<br/>   13 TxHeader     b Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
  - author: Albert
    email: albert.lash@savonix.com
    date: 08/01/2008 01:14:57 PM
    text: >
      What does your VCL look like?
date: 2008-06-29
---
Varnish the reverse proxy can do some pretty cool stuff. I just realized that it compiles its VCL rules into C so that they are process quite efficiently. Here's a few examples:
<h4>Route to a different backend based upon location (i.e. url):</h4>

<pre>
backend server1 {    set backend.host = "192.168.222.222";    set backend.port = "80";}

sub vcl_recv {    if (req.url ~ "^/location-url") {        set req.backend = server1;        set req.http.host = "www.example.com";    }}</pre>

Explanation: when a client requests the url "/location-url" from varnish, it "routes" the request server1, which is located at the ip address 192.168.222.222, and uses the http host name www.example.com.
<h4>Backend choice with a traditional rewrite:</h4>

<pre>
backend server1 {    set backend.host = "192.168.222.222";    set backend.port = "80";}

sub vcl_recv {    if (req.url ~ "^/location-url") {        set req.backend = server1;        set req.url = regsub(req.url, "^/location-url", "/url-location");        set req.http.host = "www.example.com";    }}</pre>

Explanation: this is the same example, but the request prefix is changed from location-url to url-location. Pretty nifty, huh?

¥

