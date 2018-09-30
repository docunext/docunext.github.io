---
title: The Magic of mod rewrite and RewriteMap and Alternatives
comments:
  - author: http://www.openid.albertlash.com/openid/
    email:
    ip: 71.163.55.98
    url:
    date: 08/05/2009 04:06:19 PM
    text: >
      I've done some more thinking about this, and I believe that the best alternative to the Apache solution really depends on the application, more specifically - what should happen if the request does not result in a redirect.<br/><br/>First and foremost, it should be noted that, like Apache2, Lighttpd can be used as a proxy, which is a big bonus. This makes the solution quite flexible when there is no match of the request to redirect.<br/><br/>With the other solutions, I'm not sure what options there are in the case when there is no redirect. In the case of AOLServer and qHttpd, I'll have to do more research and testing.
date: 2009-07-18
tags: apache,lighttpd,lua,nginx,perl
---
This is by far one of my favorite features of Apache. I use it for a variety of tasks, but mainly for managing url redirection.

As my sites change through the ages, the url structures change a little as well. I like to support inbound links, and to do so I use mod_rewrite to do so.

More specifically, I use mod_rewrite's RewriteMap function and its ability to read Berkeley database files. Its fast, easy, and reliable.

However, I have started to consider using NGINX and its built in rewrite capability as well as lighttpd and its mod_magnet (Lua) capacity. This has become more of an issue lately as I've switched from using the worker mpm to the prefork mpm, so every request to Apache makes a more significant impact to the server workload.

<b>NGINX Rewrite</b>
I already use NGINX, so that is already take care of. However, NGINX takes a plain text file as the rewrite map and compiles it into a hash upon start. I don't feel that is optimal but I'm not aware of any internal options for NGINX. By internal I mean without using of a FastCGI process or anything. Actually the perl module might work, but I've never gotten that to work at all, yet. Maybe its time to try again! Honestly I wish NGINX had built-in Lua instead of Perl - we already have mod_perl for Apache.

<b>Lighttpd's mod_magnet</b>
This could be just what the doctor ordered, but for some strange reason I never embraced Lighttpd. I've tried it a bunch of times without any issues, but haven't yet used it in a production environment. Maybe its time to do so? If mod_magnet does what I'd like it to, that is. UPDATE - I just tried this (installed lighttpd and lighttpd-mod-magnet on debian and manually built lua tinycdb) and it will work great. :-)

But wait! There are more options!

<b>AOLServer4 and TCL
</b>For another unknown reason, I've always really liked AOLServer. It is an incredible software application and for whatever reason it isn't widely popular. Its had incredible features for many moons and might actually be the right choice for me. It has TCL (the command language) built-in, and there is a TCL library for accessing CDB (constant database) files available in Debian. Hmmmm - very interesting, this merits more research!

UPDATE - I tried this out and it will work as well. :-) This will probably be heavier and slower than Lighttpd and mod_magnet, but it has the upside of having all the dependencies available in the debian repositories.

<b>qHttpd and Lua</b>
qHttpd also supports Lua hooks which is very very cool. I'm a big fan of qDecoder, so this might be the right choice too. Its not available in Debian yet though.


¥

