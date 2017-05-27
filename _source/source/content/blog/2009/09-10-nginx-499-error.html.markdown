---
title: NGINX 499 Error
date: 2009-09-10
tags: nginx,proxies
---
I got this error when trying to use NGINX as a proxy, setting the http_host header like this:

<pre>
    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://192.168.8.2:6081/;
        proxy_connect_timeout 5;
    }
</pre>

Everything worked fine except when clients would send a request without a host field set.

This happened with a few clients whose job it was to test the server and make sure it ran properly, like monit. To fix the issue, I create a specific location for the test target:

<pre>
    location = /test_target.html {
        root /var/www/public;
    }
</pre>

