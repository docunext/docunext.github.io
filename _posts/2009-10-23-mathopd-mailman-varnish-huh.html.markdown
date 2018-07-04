---
title: Mathopd Mailman Varnish Huh 
date: 2009-10-23
tags: nginx,varnish
---
I'm finally trying out mathopd and its surprisingly nice and flexible considering how small it is.

I'm especially pleased it handles path_info correctly.

I tried using it with Mailman and was getting blank pages. I thought it surely must be my mathopd.conf setup. Nope!

Turns out it was my proxy setup. I go from NGINX to Varnish, and then to Mathopd, and for whatever reason, Varnish can't handle the response. My guess is that its due to buffering, but I've tried a few different buffering settings in /etc/mathopd.conf, but the only thing that made a different was setting the input buffer too small resulted in the error log:

<pre>
Fri Oct 23 19:34:35 2009 [25287] input buffer full
</pre>

I was never able to debug this properly, but I did find a VCL setup I like:

<pre>
if (req.url ~ "/lists" || req.url ~ "/cgi-bin/mailman" || req.url ~ "/images/mailman/") {

        set req.backend = mailman;
        if (req.request != "GET" && req.request != "HEAD") {
            pipe;
        } else {
            lookup;
        }

    }
</pre>

