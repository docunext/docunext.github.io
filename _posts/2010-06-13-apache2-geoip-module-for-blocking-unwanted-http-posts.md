---
title: Apache2 GeoIP Module For Blocking Unwanted HTTP POSTs
date: 2010-06-13
tags: apache
---
For some time I've used [mod_spamhaus](http://www.docunext.com/wiki/Mod_spamhaus) to block comment spam, similar to how I deflect email spam. I'm OK with this because it only blocks POST, PUT, DELETE, and CONNECT requests, not GET requests.

Still, email spam is different than comment spam, so I setup mod_geoip to block users from anonymous proxies (that's the "A1" in the rewrite rule below). I'm also tracking countries codes in the logs to see if I can find out where most of the POSTs are coming from.

#### GeoIP Module Setup
<pre class="sh_xml">
&lt;IfModule mod_geoip.c&gt;
  GeoIPEnable On
  GeoIPDBFile /usr/share/GeoIP/GeoIP.dat MMapCache
  GeoIPOutput All
  GeoIPScanProxyHeaders On
&lt;/IfModule&gt;
</pre>

#### Access Control
<pre class="sh_sh">
RewriteCond %{REQUEST_METHOD} POST
RewriteCond %{ENV:GEOIP_COUNTRY_CODE} ^(A1)$
RewriteRule . - [F,L]
</pre>

#### **Logs**
<pre class="sh_sh">
LogFormat "\"%{X-FORWARDED-FOR}i\" \"%{PROXY-CONNECTION}i\" \"%{HTTP-PC-REMOTE-ADDR}i\" \"%{GEOIP_COUNTRY_CODE}e\" \"%r\"" proxy_info
</pre>

#### **NGINX Too!**

What's extra cool is that NGINX has this capability too! Its even built into the latest debian package:

<pre class="sh_sh">
    ./configure --conf-path=/etc/nginx/nginx.conf \
        --error-log-path=/var/log/nginx/error.log \
        --pid-path=/var/run/nginx.pid \
        --lock-path=/var/lock/nginx.lock \
        --http-log-path=/var/log/nginx/access.log \
        --http-client-body-temp-path=/var/lib/nginx/body \
        --http-proxy-temp-path=/var/lib/nginx/proxy \
        --http-fastcgi-temp-path=/var/lib/nginx/fastcgi \
        --with-debug \
        --with-http_stub_status_module \
        --with-http_flv_module \
        --with-http_ssl_module \
        --with-http_dav_module \
        --with-http_gzip_static_module \
        --with-http_realip_module \
        --with-mail \
        --with-mail_ssl_module \
        --with-ipv6 \
        --with-http_geoip_module \
        --add-module=$(CURDIR)/modules/nginx-upstream-fair
</pre>

Oh cool - it has the static gzip module too!

