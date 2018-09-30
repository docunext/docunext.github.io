---
title: CPAN 
date: 2008-02-21
tags: cpan,perl
---
Finally got CPAN to work well, thankfully. I had to install libc6-dev, and am also using "perl -MCPAN -e shell" instead of simply "cpan" to get going. Other general requirements were to install make and gcc.

I'm very happy about finally getting this to work right. I've used it in the past, but never without some issues.

Can't seem to get libxml-sax-perl to install on debian though, I'm getting this error:

<pre>Can't locate object method "save_parsers_debian" via package "XML::SAX" at /usr/bin/update-perl-sax-parsers line </pre>

I fixed it with:

<pre>mv /usr/local/share/perl/5.8.8/XML/SAX.pm /usr/local/share/perl/5.8.8/XML/SAX.pm.bak</pre>

Thanks:

<a href="http://techero.wordpress.com/2008/02/12/problem-setting-up-libxml-perl-on-debianresolved/">http://techero.wordpress.com/2008/02/12/problem-setting-up-libxml-perl-on-debianresolved/</a>

<a href="http://ubuntuforums.org/showthread.php?p=1302053#post1302053">http://ubuntuforums.org/showthread.php?p=1302053#post1302053</a>

I also ran into this: <a href="http://dewarim.de/wms/programme/weak_references.html">Weak references are not implemented in the version of perl</a>

