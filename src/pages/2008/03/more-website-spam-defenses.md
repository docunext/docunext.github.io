---
title: More Website Spam Defenses with Apache
date: 2008-03-15
tags: apache,spam,wordpress
---
I've written about blocking POST requests before, and thanks to WP-Spamfree I've found another way to do so - with cookies, like so:

<pre class="sh_sh">RewriteCond  %{HTTP_USER_AGENT}  ^Mozilla.*
RewriteRule . - [CO=barf:blah:%{HTTP_HOST}]
RewriteCond %{REQUEST_METHOD} POST
RewriteCond %{HTTP_COOKIE} !blah
RewriteRule . - [F]</pre>

Obviously that is just conceptual code, but its a start. I'd like to use an environment variable for the cookie name, only set it once, and only set it for user agents that would presumably be posting. On the flip side, something like WP-Spamfree could then use javascript to further validate the user agent's "realness".

Considering how much email spam has increased over the past few years, my guess is that website spam will do the same.

While I'm at it I should mention that I took another look at mod_defensible last night. I'd like to be able to use it only for POST requests, so I'll take another look at the mod_defensible code, adding something like this:

<pre class="sh_c">char *request = apr_pstrdup(r-&gt;pool, apr_table_get(r-&gt;headers_in, "method"));</pre>

to get the method, then only do the dnsbl lookup if the method is configured to be inspected. In my past experience, I ran into a significant problem with mod_defensible when used with udns (i.e. no timeout), but since I run dnsmasq on most of my firewalls (pfsense / m0n0wall) it shouldn't be a big deal. Still, I don't want to check (or block) every get request, only posts.

See:

<a href="http://www.docunext.com/2007/10/server-based-comment-spam-protection.html">Server Based Comment Spam Protection</a> (Papa Smurf tells it like it is.)

<a href="http://www.docunext.com/wiki/Protecting_Against_Bad_Bots">Protecting against bad bots</a>

Also:

<a href="http://thomas.eibner.dk/apache/table.html">http://thomas.eibner.dk/apache/table.html</a>

