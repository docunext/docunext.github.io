---
title: To Dos
date: 2008-05-20
tags: ldap,mysql,pear,php
---
More to-dos:

* Try out ldap authentication with Apache - does it support digest? Unfortunately no, should again review building mod_authn_dbd with mysql support.
* Try setting up ldap to use mysql as a back end again - I did it once before but didn't find much use for it now I can fully appreciate the value that ldap brings to the table. Still, I use MySQL for so much it would make my life easier if I had a single back-end data store to manage
* Try out pure-ftpd - DONE - ran into an interesting issue, it requires some kernel capabilities - see <a href="http://www.docunext.com/#Kernel_Capabilities">this</a>.
* Try out mod_proxy_ftp - DONE, unfortunately, you can't specify the username and password in the proxy url directive like this:

<pre class="sh_sh">
ProxyPass /ftp_proxy ftp://example:example@ftp.example.com</pre>

The browser requesting /ftp_proxy is prompted for a password. :-(

* Try out mod_ftp, an experimental Apache module
* Try out Apache2 xslt filter from sourceforge
* Try out a distributed file system using dav, mod_rewrite, mod_proxy, mod_cache, and maybe even PEAR's HTTP_WebDAV_Server - kind of like a simpler mogileFS

Related:

* <a href="http://dev.e-taxonomy.eu/trac/wiki/ApacheMySQLAuthentication">http://dev.e-taxonomy.eu/trac/wiki/ApacheMySQLAuthentication</a>
* <a href="http://www.infodrom.org/~joey/log/?200805151718">http://www.infodrom.org/~joey/log/?200805151718</a>
* <a href="http://httpd.apache.org/docs/2.2/rewrite/rewrite_guide_advanced.html#on-the-fly-content">http://httpd.apache.org/docs/2.2/rewrite/rewrite_guide_advanced.html#on-the-fly-content</a>
* <a href="http://search.cpan.org/~iwade/Apache2-S3-0.05/lib/Apache2/S3.pm">http://search.cpan.org/~iwade/Apache2-S3-0.05/lib/Apache2/S3.pm</a>
* <a href="http://search.cpan.org/~mike/Muck-0.02/">http://search.cpan.org/~mike/Muck-0.02/</a>
* <a href="http://pear.php.net/package/Services_Amazon_S3">http://pear.php.net/package/Services_Amazon_S3</a>

