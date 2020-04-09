---
title: Block Proxies
date: 2009-06-18
tags: none
author: Albert Lash
---
I found this mod_rewrite configuration at <a href="http://perishablepress.com/press/2008/04/20/how-to-block-proxy-servers-via-htaccess/">Perishable Press</a>:

<pre>RewriteEngine on
RewriteCond %{REQUEST_METHOD} POST
RewriteCond %{HTTP:VIA}                 !^$ [OR]
RewriteCond %{HTTP:FORWARDED}           !^$ [OR]
RewriteCond %{HTTP:USERAGENT_VIA}       !^$ [OR]
RewriteCond %{HTTP:X_FORWARDED_FOR}     !^$ [OR]
RewriteCond %{HTTP:PROXY_CONNECTION}    !^$ [OR]
RewriteCond %{HTTP:XPROXY_CONNECTION}   !^$ [OR]
RewriteCond %{HTTP:HTTP_PC_REMOTE_ADDR} !^$ [OR]
RewriteCond %{HTTP:HTTP_CLIENT_IP}      !^$
RewriteRule ^(.*)$ - [F]
</pre>
Then I added this:

<pre>RewriteCond %{REQUEST_METHOD} POST
</pre>
at the beginning. I might remove that as the post another post about blocking proxies said that some of them strip out my ads and insert their own. That's not cool!

But one problem with all this: since I use Varnish, the legitimate requests have some of those headers already. I'm going to try and come up with a regular expression to allow forwarding from my Varnish proxies, but block other ones. This will also help with <a href="http://www.docunext.com/">mod_extract_forwarded</a>!

