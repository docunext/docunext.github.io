---
title: Quick News Updates Movable Type Catalyst Varnish Subversion Ikiwiki DAV NGINX.
date: 2009-05-28
tags: catalyst,"movable type",subversion,varnish
---
I've been hard at work lately - just finished up some cool tasks though, including some work with a Perl MVC framework called Catalyst. I like it! I've also been using Nginx's pre-compression gzip module to lower server load.

I'm also using Movable Type and really growing to like publishing with static files. During the process of embracing static files, I've come to learn more about caching, cookies, and HTTP headers. In short: <a href="http://www.proxy-sys.com/blog/2009/05/cookies-are-cache-crashers.html">cookies crash the caching party</a>. :-( Well its not that serious, but in the never ending pursuit of performance, every little bit counts!

I finally got around to updating my Varnish proxies to version 2.0. Nice work guys! Very very nice. I've got the health checks and fail-overs operational. Sweet!

Lastly, I was able to round up the code I used to power the direct "putting" of a text document to a DAV server, which in turn is connected to a Subversion repository with auto-commit enabled. My goal is to connect this with an Ikiwiki backend which will get triggered by the post-commit-hook and the publish the new content. My plan is to document and package this recipe up nice at a shiny new domain: <a href="http://www.jaderz.com/blog/">http://www.jaderz.com/blog/</a>. (Its empty right now, you don't have to visit.)

That's all for now... thanks for listening.
