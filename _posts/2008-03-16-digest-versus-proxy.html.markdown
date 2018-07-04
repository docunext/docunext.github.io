---
title: Battle Auth Digest versus Reverse Proxy
date: 2008-03-16
tags: apache,authentication,proxies,trac
---
Just some notes... I'm really tired and I worked on this for several hours today. While I think it might be possible to use digest auth on a back end server <em>and</em> use a different host-path (the request path in the address bar in the browser) and the final path on the server, I couldn't figure it out - esp. with trac.

This directive on the proxy server:

<pre>RequestHeader edit Authorization uri="/dev([a-z\/]+)" uri="$1"</pre>

fixes this error on the authentication server:

<pre>Digest: uri mismatch -  does not match request-uri </pre>

The error is caused by the fact that the browser uri is /dev/trac/login, whereas the server request-uri is /trac/login. The only thing that would fix this particular situation correctly is to rewrite the backend server-side request-uri during the digest processing stage. I have no idea how to do that.

In the end, I had to carry the /dev/ through to the authenticating back-end server like this:

<pre class="sh_sh">
RewriteCond %{REQUEST_URI} ^/dev/
RewriteCond %{REQUEST_URI} !^/dev/trac/login
RewriteRule ^/dev/(.*) http://dev-50/$1 [P]
RewriteCond %{REQUEST_URI} ^/dev/trac/login
RewriteRule ^/dev/trac/login(.*) http://dev-50/dev/trac/login$1 [P]</pre>

I feel like it should cause an infinite loop, but its not at the moment. Maybe if I do a hard restart of the back-end server. Update: it does cause an infinite loop:

<pre>Proxy Error
The proxy server received an invalid response from an upstream server.
The proxy server could not handle the request GET /dev/trac/login.
Reason: Max-Forwards has reached zero - proxy loop?</pre>

Luckily there is a way out:

<pre>RewriteCond %{HTTP:X-Forwarded-Host} !.+
RewriteCond %{REQUEST_URI} ^/dev/trac/login
RewriteRule ^/dev/trac/login(.*) http://dev-50/dev/trac/login$1 [L,P]</pre>

This says something like "if there is an X-Forwarded-Host, then don't proxy again". I think that could be problematic if requests from the public ip space contain this header. Therefore I'll evaluate some other headers, like X-Forwarded-For and check a list of designated addresses and hostnames.

