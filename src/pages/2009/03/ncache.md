---
title: NCache is an NGINX Module for Caching Proxied HTTP Responses
date: 2009-03-01
tags: caching,nginx
---
Ncache is a caching module for nginx, similar to varnish. I just installed it using my modified nginx debian build script, and it was a little tough to get going. I kept getting this error:

<pre class="sh_log">2009/02/28 23:57:49 [emerg] 5579#0: ncache_index_fd &lt; 0
2009/02/28 23:57:49 [emerg] 5579#0: ncache_http_proxy_shm_hash_init error</pre>

I poked around the code for a little bit, and found this:

<pre class="sh_c">ncache_index_fd = open( NGX_PREFIX"/logs/ncache_index",O_RDWR);</pre>

The problem is that they are using NGX_PREFIX, which isn't configured with the debian build script. It defaults to /usr/local/nginx. As a temporary workaround, I created /usr/local/nginx/logs/ and chowned to www-data. That fixed the problem.

Another small issue I ran into was the shell script to create the cache directories, but thankfully someone contributed a <a href="http://code.google.com/p/ncache/issues/detail?id=32" rel="nofollow">solution</a>.

I'll probably fork this and make lots of changes to learn more about caching and nginx modules. I've added a wiki page about it <a href="http://www.docunext.com/">here</a>.

Unfortunately I still had problems getting this to work. :-(

