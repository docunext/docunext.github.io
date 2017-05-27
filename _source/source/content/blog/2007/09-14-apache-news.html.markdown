---
title: Apache News
comments:
  - author: ziyad
    email: abderahman@zohry.net
    ip: 41.249.35.164
    url:
    date: 01/10/2008 05:20:00 PM
    text: >
      "mod_rewrite<br/><br/>... For example, you could setup your virtual host environment in a relational database. This is something that lighttpd has had for awhile in mod_mysql_vhost, which Apache didn’t have."<br/><br/>Can you explain please how to do that?<br/><br/>Greets.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 01/14/2008 04:03:01 PM
    text: >
      Hi Ziyad,<br/><br/>Sure, you need to use the external application feature of mod_rewrite, which can start and run a perl script (or php, or python, or ruby) which would connect to a rdbms and return the vhosting information. Hope that helps...
date: 2007-09-14
tags: apache,compression,fastcgi
---
The most popular web hosting software is Apache, and with good reason too. It is free and a great software package. While most people are pleased with its mod_php capabilities, Apache 2.2 has so much more to offer, and a lot more in the pipeline!

#### mod_cache

Previously Apache 2 users would have to use mod_expires and mod_headers to configure caching, and there wasn't much middle ground between the back-end and the client. Now with mod_cache, mod_mem_cache, and mod_disk_cache, the possibilities are awesome. With mod_cache, the HTTP caching specification really comes alive, and not only can you improve upon client revalidation checks, but you can also cache <em>compressed</em> data on the server for serving to different clients. It even saves different versions for different user agents as well as different cookie sessions (good for logged in users).

Along with mod_cache, setting up redundant web servers is easy - just proxy requests via mod_proxy or mod_rewrite and cache the results locally. <strong>The power of mod_rewrite, mod_proxy, and mod_cache might not seem like a lot, but it is huge</strong>.

#### mod_rewrite

The benefits of mod_rewrite have been around for awhile in terms of Apache, and one of my favorite capabilities is the prg: function, which allows you to use a program to access a stdin parameter and return a rewrite target. Personally, I use it for keeping track of all my URLs, as well as redirecting domains, but it can also power some pretty amazing virtual host environments. For example, you could setup your virtual host environment in a relational database. This is something that lighttpd has had for awhile in mod_mysql_vhost, which Apache didn't have.

#### mod_dbd

While not ready for prime time, mod_dbd is a module with a lot of potential. If you've ever been frustrated by the convoluted process of authorizing via mod_auth_mysql or mod_auth_pam, then you should be pleased to know that mod_dbd will save the day. Along with apr_dbd, mod_dbd can use various database specific drivers (postgres, mysql, etc.) and maintain persistent connection pools to the server, increasing efficiency bigtime.

While the initial use of mod_dbd will be authentication (authn) and authorization (authz), I'm hoping to see mod_dbd power a more tightly coupled relational database powered virtual hosting system than the one I mentioned earlier.

#### mpm worker

Previously I mentioned mod_php and how a lot of people (including myself) have been using that module as a mainstay in their Apache experience. With good reason, Apache and mod_php make a great pair. I have started to migrate away from mod_php though, thanks to fastcgi. I first learned about fastCGI through lighttpd and trac, and have really grown to like it a lot. One really nice thing about it is that it allows you to run Apache using the mpm worker module rather than the mpm prefork module. That's a very good thing for efficiency and performance as well.

#### Conclusion

Those few points I mentioned above are really only the tip of the iceberg when it comes to the greatness of Apache. If you have any favorites that I missed, please comment! Thanks for stopping by.

¥

