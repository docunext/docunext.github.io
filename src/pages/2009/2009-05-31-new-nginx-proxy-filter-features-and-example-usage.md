---
title: New NGINX Proxy Filter Features and Example Usage
date: 2009-05-31
---
There are some very nice new NGINX features now available - and the 0.7.x branch has been marked stable!

Here's the scoop on the new features:

<ul><li>there is a new image filter which is powered by libgd</li><li>the proxy server now includes a cache</li></ul>

This is terrific news in my opinion. NGINX is really becoming an excellent filtering proxy with the help of the existing XSLT transformer. One thing I'm hoping to see soon is a Markdown filter. That would be sweet.

It took me a moment to figure out how to use the proxy_cache, so here's and example. In the http configuration section:

<pre>
http {    include       /etc/nginx/mime.types;    default_type  application/octet-stream;    server_names_hash_bucket_size 128;    access_log  /var/log/nginx/access.log;    large_client_header_buffers 4 16k;    proxy_buffer_size 16k;    proxy_buffers 8 16k;    proxy_busy_buffers_size 32k;    proxy_intercept_errors on;    proxy_cache_path  /var/lib/nginx/cache  levels=1:2   keys_zone=one:1m;    proxy_cache_valid  200 302  10m;}</pre>

The proxy_cache_path has to be on the same partition as the proxy_temp_path, and on debian, that is /var/lib/nginx/proxy.

So that's just the base configuration. To have something get cached, I used the proxy_cache setting in a location directive:

<pre>    location /proxyme {        default_type image/jpeg;        image_filter_jpeg_quality 70;        image_filter   resize  100 100;        proxy_pass http://www.example.com/;        proxy_cache one;    }</pre>

That's also an example of how to use the image_filter module. I tried using variables for the resize parameters, but that didn't work. The resize feature keeps the scale of the original image, which is great.
