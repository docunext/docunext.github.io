---
title: NYT xslcache
date: 2007-10-26
tags: php,xml,xsl
---
<a href="http://www.docunext.com/2007/10/nyt-xslcache.html">

The New York Times has released a modified xsl module for php5 which caches xsl transformations. I just built it on ubuntu and debian:

<pre>apt-get install php5-dev libxslt1-dev
wget http://code.nytimes.com/downloads/xslcache.tar.gz
tar -xzvf xslcache.tar.gz
phpize./configure --with-xslcache=/usr/lib/ --with-xsl-exsl-dir=/usr/lib/
make
cp modules/xslcache.so /usr/lib/php5/20060613+lfs/
cp /etc/php5/conf.d/xsl.ini /etc/php5/conf.d/xslcache.ini
vim /etc/php5/conf.d/xslcache.ini</pre>

Cool. I got it to work with <a href="http://www.nexista.org/">nexista</a>, albeit a little funkified. It seems it can't accept a DOM Document like the regular XSLT processor class can, <a href="http://us3.php.net/manual/en/function.dom-domdocument-save.php">I had to save the xsl template after it had been loaded and entities transformed</a>, and then have the XSLT object load in the file. Strange, but it worked, and I actually think this might be the right way to go - cache the xsl file with its entities converted and be done with it.

This extension is actually very nice. I agree with some of their assumptions - that the XML data in an XSL transformation is likely to change, not the stylesheet. And the cache is set to expire when the modification time of the source file is changed. Very good. As I mentioned earlier, I have to use a DOM Document to convert some entities prior to the xsl transform, so I'm saving a temp file before loading it with the XSLTCache object. This requires another cache check of course.

If you've been reading Docunext for awhile, I'll all about the caching. I try to cache database queries, php optcode, rendered pages, gzipped content, and even employ client caches. Why? Its by far the best performance boost available!

My results? Nexista is showing up to a 25% performance increase, or in other words, a page taking 0.2 second to load only takes 0.15 seconds to load after the XSL document has been cached.

<a href="http://code.nytimes.com/projects/xslcache/wiki">http://code.nytimes.com/projects/xslcache/wiki</a>

#### Debian package of php5-xsltcache

<pre>
php5-xsltcache
php5-xsltcache/DEBIAN
php5-xsltcache/DEBIAN/control
php5-xsltcache/etc
php5-xsltcache/etc/php5
php5-xsltcache/etc/php5/conf.d
php5-xsltcache/usr
php5-xsltcache/usr/lib
php5-xsltcache/usr/lib/php5
php5-xsltcache/usr/lib/php5/20060613+lfs</pre>

Control file:

<pre>
Package: php5-xsltcache
Version: 5.2.3
Section: web
Priority: optional
Architecture: i386
Depends: php5-common (&gt;=5.2), php5-xsl
Maintainer: Albert Lash
Description: PHP 5 XSLTCache Similar to php5-xslt, php5-xsltcache caches xsl documents in  permanent memory, but keeps an eye on modification time of  referenced file. See: http://code.nytimes.com/projects/xslcache</pre>

UPDATE November 1, 2007: Apache can do this stuff too! See my post on <a href="http://www.docunext.com/2007/11/mod-transform.html">mod_transform</a>!

