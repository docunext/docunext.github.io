---
title: Varnish versus SquirrelMail and NGINX versus Lighttpd 
date: 2010-06-01
tags: lighttpd,squirrelmail,varnish
---
I just ran into an error trying to use SquirrelMail behind a Varnish proxy because apparently SquirrelMail was setting too many duplicate headers:

<pre class="sh_sh">
   14 RxProtocol   b HTTP/1.0
   14 RxStatus     b 302
   14 RxResponse   b Found
   14 RxHeader     b Date: Tue, 01 Jun 2010 17:12:19 GMT
   14 RxHeader     b Server: Apache
   14 RxHeader     b X-Powered-By: PHP/5.3.2-1
   14 RxHeader     b Expires: Thu, 19 Nov 1981 08:52:00 GMT
   14 RxHeader     b Cache-Control: public
   14 RxHeader     b Pragma: no-cache
   14 RxHeader     b Set-Cookie: SQMSESSID=mp24q63lol8gjjvsdtus6qfdi7; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=mp24q63lol8gjjvsdtus6qfdi7; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=mp24q63lol8gjjvsdtus6qfdi7; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=mp24q63lol8gjjvsdtus6qfdi7; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=mp24q63lol8gjjvsdtus6qfdi7; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: squirrelmail_language=en_US; expires=Thu, 01-Jul-2010 17:12:19 GMT; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: key=YdO4%2FQ%3D%3D; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 RxHeader     b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 LostHeader   b Set-Cookie: SQMSESSID=bhtr9skc1e2jsdv33pfsl9daj5; path=/a/webmail/; HttpOnly
   14 HttpGarbage  b HTTP/1.0
   12 FetchError   c http format error
   14 BackendClose b pro2glight
   12 VCL_call     c error
</pre>

I was able to confirm this thanks to this post by [Robin Clarke about switching ISPs without any downtime](http://www.robinclarke.net/archives/how-to-switch-isp-without-downtime).

I use NGINX in front of Varnish so I simply proxied requests to squirrelmail around Varnish, to yet another proxy server, lighttpd, which does more host-specific routing.

Also noteworthy - I hadn't used lighttpd that much at all before now, but I've certainly dabbled with it. I don't think its proxy capabilities are as extensive as NGINX, but it does have mod_magnet with built in Lua scripting, which is really awesome. I've even wrote up [a Lua script to load a JSON hash of hosts to redirect](http://www.docunext.com/wiki/Mod_magnet) - I'm definitely planning on extending that. I sort of wish they used more standard interfaces though, something along the lines of Rack or wsapi with app, env, and so on - instead they use the lighty object as the interface.

Lighttpd also has dynamically loaded modules and compression caching, something which NGINX does not have (though NGINX has gzip precompression, but its not a standard module on Debian - my OS of choice).

