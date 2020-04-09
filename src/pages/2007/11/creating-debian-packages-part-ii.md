---
title: Creating Debian Packages Part II
date: 2007-11-11
tags: debian,packages,php,xslt
---

As a follow-up to my post about the <a href="http://www.docunext.com/2007/10/nyt-xslcache/">New York Times XSLT cache package</a>, I emailed the debian mentors list asking for some help in packaging it correctly.

Felipe Augusto van de Wiel was kind enough to write back to me with a few tips. Here's a new control file:

<pre class="sh_sh">
Package: php5-xsltcache
Version: 5.2.3
Section: web
Priority: optional
Architecture: i386
Depends: php5-common (>=5.2), php5-xsl
Maintainer: Albert Lash
Homepage: http://code.nytimes.com/projects/xslcache
Description: PHP 5 XSLTCache Similar to php5-xslt, php5-xsltcache caches xsl documents in permanent memory, but keeps an eye on modification time of referenced file.
</pre>

Not too different, but I did added the Hompage field. I'm also going to create a php5-xsltcache.dsc (debian source package) and a pointer to the original archive, per Felipe's suggestions. One step at a time!

Oh yes, I also learned that there is a package status called "lintian clean", which I believe to mean that the package conforms to debian standards. I've decided to take myself off the mentors list until I have a little more time to dedicate to this.

For reference:

<a rel="nofollow" href="http://www.debian.org/doc/debian-policy/ch-controlfields.html">http://www.debian.org/doc/debian-policy/ch-controlfields.html</a>

