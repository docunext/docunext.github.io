---
title: Varnish Grace Without Polling
date: 2009-12-21
tags: caching,varnish
---
I finally managed to setup grace on Varnish so that it works when a backend server goes down AND when the backend does not have polling setup.

I think it does require polling to be setup on a fake server though. I got the idea from [Alex Mizrahi's email to the Linpro Varnish mailing list](http://projects.linpro.no/pipermail/varnish-misc/2009-May/002805.html):

<blockquote>
serving stale content during grace period works fine if backend polling can
detect that server is down. however in some cases polling thinks that server
is fine, but it returns 50x error for some requests (e.g. when database
server is overloaded), and it might be better if stale content would be
served. (by the way, that's how grace works in nginx web server's cache.)

as i understand, varnish does not support this case now.
nevertheless, i've tried to hack something with vcl, using example with
restarts as inspiration. i've made a nonexistant backend for this purposes,
with polling enabled:

<pre>
backend nonexistant {
        .host = "localhost";
        .port = "31337";
        .probe = {
           .interval = 10s;
           .timeout = 0.3 s;
           .window = 2;
           .threshold = 1;
        }
}
</pre>

then it vcl_fetch, when it sees status 500, it
calls restart:

<pre>
sub vcl_fetch {
        if (obj.status == 500) {
                restart;
        }
}
</pre>

and vcl_recv sets backend to nonexistant in case of restart:

<pre>
sub vcl_recv {
        if (req.restarts == 0) {
                set req.grace = 2m;
                set req.backend = apache;
        } else {
                set req.grace = 2m;
                set req.backend = nonexistant;
        }
}
</pre>
</blockquote>

Except on my server, when Varnish would try to fetch, the missing backend would send it right to error, and it would never get the chance to restart, resulting in a 503 response (yes, I tried changing the 500 in the example to 503).

I tried putting the restart block in my VCL error code, but no luck. Varnish reported an error. I did some digging on the idea of putting restart into the error vcl and learned that the functionality was added this past year. I upgraded my varnish version to 2.0.5 and it now works. Rock on!

This is what I use in the sub vcl_error block:

<pre>
    if(req.restarts < 1) {
        restart;
    }
</pre>

Hopefully I won't get too many errors, but regardless of what causes the error, Varnish will try one more time before it gives up.

