---
title: Perl AutoIndex Apache2 AutoIndex XSLT
date: 2008-04-16
tags: none
author: Albert Lash
---
Perl powers some very handy applications, and based upon the success I'm having with svnweb, I'm going to give <a href="http://search.cpan.org/~gozer/Apache-AutoIndex-0.08/AutoIndex.pm"> Apache::AutoIndex</a> a try.

The Apache2 autoindex works, but it is really finicky and I had a hard time getting it to work. It will be nice to have a more flexible and robust tool for indexing public directories.

To install this on debian I had to install libapache-mod-perl, apache-dev and libapreq2-dev, libapreq, and . While debugging, I also found Apache::OpenIndex.

Hmmm, this is not working out... it seems like both AutoIndex and OpenIndex only work with apache 1.3.

AWESOME: This is what I was looking for:

<a href="http://search.cpan.org/~nicolaw/Apache2-AutoIndex-XSLT-0.03/lib/Apache2/AutoIndex/XSLT.pm">http://search.cpan.org/~nicolaw/Apache2-AutoIndex-XSLT-0.03/lib/Apache2/AutoIndex/XSLT.pm</a>

This is exactly what I was looking for. I was able to get it up and running in only a few minutes, and it works fine. Its a lot like the subversion xsl index method.

To render the XSL on the server side:

<pre lang="bash">
apt-get install libxml-libxslt-perl</pre>

apache2.conf:

<pre lang="bash">
PerlLoadModule XML::LibXML
PerlLoadModule XML::LibXSLT</pre>

