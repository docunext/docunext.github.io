---
title: Apache 2.2 Caching
date: 2007-08-09
tags: caching
---
As of Apache 2.2 - mod_cache is no longer experimental! I'm trying it out.

On debian:

<pre>a2enmod cache
a2enmod mem_cache</pre>

Added this to my config:
<pre class="sh_xml">&lt;ifmodule mod_cache.c&gt;
    &lt;ifmodule mod_mem_cache.c&gt;
        CacheEnable mem http://192.168.0.3/pbooks/images/
        MCacheSize 4096  MCacheMaxObjectCount 100
        MCacheMinObjectSize 1
        MCacheMaxObjectSize 2048
    &lt;/ifmodule&gt;
&lt;/ifmodule&gt;
</pre>

then restarted:

<pre>sudo /etc/init.d/apache2 reload</pre>

So far so good! This is a really great addition to Apache, as it provides easy caching of mod_deflate content, so the server doesn't have to keep compressing the same content over and over again. At least that's how I interpret the following:

<blockquote>If the URL is not found within the cache, mod_cache  will add a filter to the request handling. After Apache has located the content by the usual means, the filter will be run as the content is served. If the content is determined to be cacheable, the content will be saved to the cache for future serving.

If the URL is found within the cache, but also found to have expired, the filter is added anyway, but mod_cache will create a conditional request to the backend, to determine if the cached version is still current. If the cached version is still current, its meta-information will be updated and the request will be served from the cache. If the cached version is no longer current, the cached version will be deleted and the filter will save the updated content to the cache as it is served.</blockquote>

It sure sounds to me that the filter is ONLY added if the URL is found, and the cache hasn't expired. I wish there was some way to monitor the memory cache.

This is a feature I really liked in lighttpd, and blogged about it awhile back:

<a href="http://www.docunext.com/2006/12/lighttd-webserver/">Caching with lighttpd webserver</a>

I just added options for disk caching, seems to be working OK as well. UPDATE: No it isn't working well. :-( I ran into a problem with Wordpress which caused a blank page to display. It probably has something to do with the internal caching setup in Wordpress. Doh! I've turned it off for now on our main blogs, but I'm keeping it on for a smaller server with less crucial content.

For more information, read Apache's <a href="http://httpd.apache.org/docs/2.2/caching.html">caching guide</a>.

