---
title: Apache2 Spamhaus and X Forwarded Module
date: 2009-03-22
tags: apache,debian,modules,spam,spamhaus,varnish
---
This is similar to the defensible module I tried out last year, but it appears to work really well. Its available in debian, which is convenient, but since I run Apache behind a reverse proxy (most likely Varnish), I need to switch around the X-Forwarded-For headers.

Thankfully, this works fine: <a rel="nofollow"  href="http://www.openinfo.co.uk/apache/index.html">http://www.openinfo.co.uk/apache/index.html</a>. Since the author of mod_extract_forwarded used Apache 2.0, I've just emailed to share that I have succeeded in compiling it with 2.2:

<blockquote class="svxlb"><pre>
Just a heads up that mod_extract_forwarded.c works for me with Apache 2.2 on Debian Squeeze. I'm using it to bridge between Varnish and mod-spamhaus.
</pre></blockquote>

I did run into a small issue on debian, the proxy modules must be loaded first, and apxs2 couldn't activate the module for me in httpd.conf (because its blank on debian). I used this name as the module loader: "proxy_xtract_forwarded", and this as its contents:

<pre class="sh_sh">
LoadModule extract_forwarded_module  /usr/lib/apache2/modules/mod_extract_forwarded.so
</pre>

And for the configuration:

<pre class="sh_xml">
&lt;IfModule mod_extract_forwarded.c>
MEFaccept all
MEFdebug off
&lt;/IfModule>
</pre>

Note: this is on my development machine. I'll change MEFaccept on any production machines I install this on.

For more information on mod-spamhaus, here's a link to the author's website: <a href="http://www.lucaercoli.it/" rel="nofollow">Luca Ercoli</a>.

<a href="http://varnish.projects.linpro.no/ticket/203" rel="nofollow">This</a> page about X-Forwarded-For at the Varnish trac was helpful too.

