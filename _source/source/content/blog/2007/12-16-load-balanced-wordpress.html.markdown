---
title: Load Balanced Wordpress
date: 2007-12-16
tags: wordpress
---
I've recently setup Wordpress high availability cluster using a pfSense load balancer. It works great, most of the time. There are definitely some issues with spam karma 2, but that's not the point of this post.

I'm having an issue where sometimes the only page that is displayed on the admin interface is something along the lines of "your new theme has been activated". This is very strange to me, as I have the database connector set to use the master database when the wp-admin pages are being used.

I thought the issue might have something to do with sessions, which can sometimes be messed up by high availability systems, but I'm using memcache to store the php sessions, which leads me to believe the wordpress sessions are tracked some other way. I'd imagine that they are tracked using the database, but if I'm only using one database, why should that matter?

Here's some Apache logs tracking the process:

<pre class="sh_log">www.internetfloorplans.com  [17/Dec/2007:07:38:19 -0500] "GET /blog/wp-admin/ HTTP/1.1" 301 192
www.internetfloorplans.com  [17/Dec/2007:07:38:19 -0500] "GET /blog/wp-admin/index.php HTTP/1.1" 302 20
www.internetfloorplans.com  [17/Dec/2007:07:38:20 -0500] "GET /blog/wp-admin/themes.php?activated=true HTTP/1.1" 302 20
www.internetfloorplans.com  [17/Dec/2007:07:38:20 -0500] "GET /blog/wp-login.php?redirect_to=%2Fblog%2Fwp-admin%2Fthemes.php%3Factivated%3Dtrue HTTP/1.1" 200 916
www.internetfloorplans.com  [17/Dec/2007:07:38:20 -0500] "GET /blog/wp-admin/wp-admin.css?version=2.1.3 HTTP/1.1" 200 4855
www.internetfloorplans.com  [17/Dec/2007:07:38:20 -0500] "GET /blog/wp-admin/images/login-bkg-tile.gif HTTP/1.1" 200 19279
www.internetfloorplans.com  [17/Dec/2007:07:38:23 -0500] "POST /blog/wp-login.php HTTP/1.1" 302 20
www.internetfloorplans.com  [17/Dec/2007:07:38:23 -0500] "GET /blog/wp-admin/themes.php?activated=true HTTP/1.1" 200 7308
www.internetfloorplans.com  [17/Dec/2007:07:38:24 -0500] "GET /blog/wp-admin/images/wordpress-logo.png HTTP/1.1" 200 2345
</pre>

