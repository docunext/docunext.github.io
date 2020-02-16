---
title: Cookies are Cache Crashers
date: 2009-05-26
---
Its true - <i><b>cookies are cache crashers</b></i>.

I learned about this from my favorite reverse proxy cache: varnish. The varnish docs speak about how cookies will cause content to not get cached; its part of the http specification.

I had previously never really used cookies, but then I found that they were a helpful component to my efforts in combating blog spam as well as analyzing my sites' traffic patterns.

So nowadays I've been trying to keep all the content that I <i>really</i> want to get cached, namely images, under a separate path than the path for which my servers issue a cookie.

For example, I'm setting my blog cookies with "/blog/" as the path, and then putting any images I use inside the "/s/" folder. Therefore the image requests are not sent with any cookies. Yay!

<font style="font-size: 1.25em;"><b>Simple Comment Spam Defense</b></font>
This does not catch every automated comment attempt, but it does catch the lamer ones. Its a simple Apache mod_rewrite pattern which checks if a cookie exists, if not, it sets one. Then it tests for a POST request. If there is a POST request, it checks for the cookie. If the cookie is missing, it blocks the request. Simple and effective, just how I like it.

<pre>RewriteCond %{REQUEST_URI} ^/blog
RewriteCond %{REQUEST_URI} !.(css|jpg|gif|png)
RewriteCond %{HTTP_USER_AGENT} (MSIE|Mozilla|Opera|ELinks)
RewriteCond %{HTTP_USER_AGENT} !(Yahoo|Googlebot|msn-bot)
RewriteCond %{HTTP_COOKIE} !upost=y
RewriteRule . - [CO=upost:y:%{HTTP_HOST}:6000:/blog/:0:1]

RewriteCond %{REQUEST_METHOD} POST
RewriteCond %{REQUEST_URI} ^/(forums|blog)
RewriteCond %{HTTP_USER_AGENT} !(MSIE|Mozilla|Opera|ELinks) [OR]
RewriteCond %{HTTP_COOKIE} !upost
RewriteRule . - [F,L]
</pre>

There's a little more going on there, but hopefully I've explained it well enough. I'm aware of some drawbacks to this approach: namely that not everyone accepts cookies, and I wouldn't be surprised if there were other drawbacks as well. However, the barrage of automated blog spammers has made this a necessity. Some still get through!

<font style="font-size: 1.25em;"><b>Varnish VCL</b></font>
There are still some ways around the cookie issue with Varnish. In sub vcl_recv:
<pre>
&nbsp;&nbsp;&nbsp; if (req.url ~ "^/s/") {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; unset req.http.cookie;
&nbsp;&nbsp;&nbsp; }
</pre>

The "^/s/" is specific to my configuration. Other configurations will likely vary.

and in sub vcl_fetch:
<pre>
sub vcl_fetch {
&nbsp;&nbsp;&nbsp; if (req.url ~ "\.(png|gif|jpg|swf|css|js)$") {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; unset obj.http.set-cookie;
&nbsp;&nbsp;&nbsp; }
&nbsp;&nbsp;&nbsp; if (req.url ~ "^/s/") {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; unset obj.http.set-cookie;
&nbsp;&nbsp;&nbsp; }
</pre>
 Again, this is specific to my configuration.
