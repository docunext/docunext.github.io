---
title: Apache Application Server
date: 2008-03-15
tags: apache,xslt
---
With libapache2-modxslt (or similar) and mod_dbd, Apache gets a heck of a lot closer to an application server. In considering this, I was thinking about how to generate XML documents indirectly and dynamically. That's when I remembered this:

<a href="http://httpd.apache.org/docs/2.2/rewrite/rewrite_guide_advanced.html#on-the-fly-content" rel="nofollow">apache.org/.../rewrite/rewrite_guide#on-the-fly-content</a>

The idea here is to have Apache serve real files so that the cache control can also be dynamically controlled. For example, if a user updates a database record, the previously generated xml documents would need to be regenerated. If they were cached using Apache's mod_cache methods, it might not be as simple to purge a particular group of cached documents.

By having the XML document server (maybe powered by python, php, or something) write and purge the documents to the filesystem upon generation, Apache can then do what it does so well - talk to clients.

So guess what - it works! Here's the test setup I created: /var/www/public/main.xsl/var/www/public/entries.xml/var/www/public/entries.php

<pre class="sh_xml">RewriteCond %{REQUEST_FILENAME} entries.xml
RewriteCond /var/www/public%{REQUEST_FILENAME}   !-s
RewriteRule .          /xslt/entries.php   [T=application/x-httpd-php,L]
&lt;directory "/var/www/public/xslt"&gt;
        Order deny,allow
        Deny from all
        Allow from 192.168
        SetOutputFilter mod-xslt
        AddType text/xml .xml
        XSLTSetStylesheet text/xml /var/www/public/xslt/main.xsl
&lt;/directory&gt;
</pre>Follow-up: Webthing has some really cool modules for working with Apache as an application server, like mod_line_edit:

<a href="http://apache.webthing.com/mod_line_edit/">http://apache.webthing.com/mod_line_edit/</a>

It could be used to manage simple aberrations between different sites, for uses such as tracking codes, traffic analysis, header customizations, and css customizations.
