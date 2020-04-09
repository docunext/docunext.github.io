---
title: Apache Containers
date: 2007-11-11
tags: apache,caching
---
<span style="display: inline;">

I finally took a moment to figure out <a href="http://httpd.apache.org/docs/2.2/sections.html" rel="nofollow">Apache Containers, aka Configuration Sections</a>.

I wanted to know if a Location directive could override a Directive. I thought it couldn't, but it does! And also, what if I wanted a sub-directory to have a different setting than its parent? What would I have to do to set that up? First of all I had to figure out how to correctly use the directory configuration.

So I was wondering about symlinks. If I have a symlink from a web-accessible directory to another real filesystem directory, how does the webserver see it? I should have known: Apache views the symlinks like regular directories. So if you want to setup a configuration for a symlinked directory, use the path to the symlink, not the target.

Why was I doing all this? For caching of course! After using Wordpress for a few years, I've started to do a better job of isolating different types of content into distinct paths. That really helps when trying to set different cache settings for different file types. It is possible to set expiry settings for file types, but not cache-control headers as far as I know. To set those, I use the directory configurations.

The answer to my question was to use the location directive on only one locationmatch for a virtual url: /blog/200.*

And then to start specific, and get more general with the directory settings. It works!

How did I test out the results? Using the <a href="http://www.docunext.com/blog/tools/cacheability-engine/">cacheability engine</a>! Also, for what its worth, I did have to do a bunch of work on the WP-Cache plugin to get it to play nicely with Apache. For instance, I added a last modified check to compare the modification time of the cached file with that of the client cache. I also had to add a last modified header to every Wordpress page. Actually, I just moved that last modified header to the wp-cache plugin.

UPDATE November 12, 2007: I just remembered I should make a special note here. <strong>Using the stock wp-cache along with the Apache mod_mem_cache module can quickly break your configuration and result in blank pages being served. Caching is a tough balance.</strong>
