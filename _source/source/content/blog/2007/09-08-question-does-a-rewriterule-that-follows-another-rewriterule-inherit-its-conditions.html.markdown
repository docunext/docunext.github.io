---
title: Question Does a RewriteRule that follows another RewriteRule inherit its conditions 
date: 2007-09-08
tags: apache,mod_rewrite
---
Example:

<pre class="terminal">
RewriteMap redirects prg:/etc/apache2/lookitup.pl
RewriteCond /var/www/%{REQUEST_FILENAME} !-f
RewriteCond /var/www/%{REQUEST_FILENAME} !-d
RewriteCond ${redirects:%{HTTP_HOST}|nomatch} !nomatch
RewriteRule (.*) http://${redirects:%{HTTP_HOST}} [R=301,L]
RewriteMap host_redirects prg:/etc/apache2/host_name_request_uri.pl
RewriteCond /var/www/%{REQUEST_FILENAME} !-f
RewriteCond /var/www/%{REQUEST_FILENAME} !-d
RewriteCond ${host_redirects:%{HTTP_HOST}%{REQUEST_URI}|nomatch} !nomatch
RewriteRule (.*) ${host_redirects:%{HTTP_HOST}%{REQUEST_URI}}/%{REQUEST_FILENAME} [R=301,L]
</pre>

Is this the same as:

<pre class="terminal">
RewriteMap redirects prg:/etc/apache2/lookitup.pl
RewriteMap host_redirects prg:/etc/apache2/host_name_request_uri.pl
RewriteCond /var/www/%{REQUEST_FILENAME} !-f
RewriteCond /var/www/%{REQUEST_FILENAME} !-d
RewriteCond ${redirects:%{HTTP_HOST}|nomatch} !nomatch
RewriteRule (.*) http://${redirects:%{HTTP_HOST}} [R=301,L]
RewriteCond ${host_redirects:%{HTTP_HOST}%{REQUEST_URI}|nomatch} !nomatch
RewriteRule (.*) ${host_redirects:%{HTTP_HOST}%{REQUEST_URI}}/%{REQUEST_FILENAME} [R=301,L]
</pre>

I think this could be done using the [C] chain option, but to do that I'll have to alter my SQL queries a little, so that if the first rule doesn't match, it will negate the evaluation of the next rule. I wonder though, if the RewriteCond prevent the first Rule from getting evaluated, does that still count as a "non-match"? I hope so, that would save a lot of processing, and <strong>since these will be processed on every http request, we'll want to streamline as much as humanly possible!</strong>

Hmm, actually I don't think that's going to work so well. The first rule is a domain-based redirect, so if it doesn't match, that doesn't necessarily mean the second one shouldn't match either. Instead, I'm using an environment variable.

<pre class="terminal">
RewriteCond /var/www/%{REQUEST_FILENAME} !-f
RewriteCond /var/www/%{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1 [C,E=REAL:NO]
RewriteMap redirects prg:/etc/apache2/lookitup.pl
RewriteCond ${redirects:%{HTTP_HOST}|nomatch} !nomatch
RewriteRule (.*) http://${redirects:%{HTTP_HOST}} [R=301,L]
RewriteMap host_redirects prg:/etc/apache2/host_name_request_uri.pl
RewriteCond %{ENV:REAL} NO
RewriteCond ${host_redirects:%{HTTP_HOST}%{REQUEST_URI}|nomatch} !nomatch
RewriteRule (.*) ${host_redirects:%{HTTP_HOST}%{REQUEST_URI}} [R=301,L]
</pre>

