---
title: PHP FastCGI fcgid gzip deflate Buffer Annoyances
date: 2007-09-24
tags: fastcgi
---
I'm trying to produce a continuous client - server connection with PHP and FastCGI or FCGI. Its not working. I found a few items related to the subject I'll share here.

mod_fcgid has an OutputBuffer setting:

<pre>
OutputBufferSize n (64k bytes)

CGI output cache buffer size.</pre>

mod_fastcgi can be configured with the flush option, but it won't work for dynamic applications:

<blockquote>

FastCGI application output is buffered by default. This is not the case for CGI scripts (under Apache 1.3). To override the default behavior, use the -flush option (not available for dynamic applications). Non-parsed header (nph-) scripts will be rejected by mod_fastcgi simply as warning the behavior is different (create a symbolic link to the script without the "nph-" prefix if this poses a problem).</blockquote>

Perhaps the "dynamic" factor is what prevented me from getting fcgid to work.

I was able to enable output buffering using libapache2-mod-fastcgi and the -flush setting. Here's my mod_fastcgi:

<pre><IfModule mod_fastcgi.c>  AddHandler fastcgi-script .fcgi .php  FastCGIConfig -flush  FastCgiIpcDir /var/lib/apache2/fastcgi</IfModule></pre>

I also found an old note about <a href="http://bugs.php.net/bug.php?id=34429">PHP always buffering in FastCGI mode:

http://bugs.php.net/bug.php?id=34429</a>, but that appears to have been fixed a long time ago.

Darn. In my experience, trac.fcgi is way faster when run with mod_fcgid than mod_fastcgi. Oh well. At least there are options. And for whatever reason, I can't get OutputBufferSize to work at all.

Incredible! I searched and searched and searched... and finally found. Thanks to PAGE 4 of a search, <a href="http://www.mail-archive.com/internals@lists.php.net/msg19643.html">this thread revealed that the problem was caused by mod_deflate buffering the output</a>!  I disabled the deflate module and the reduced and staggered output buffering worked fine. However, this even happened when I used compression in php.

Related cool stuff I found while figuring this out:

http://www.seaoffire.net/fcgi-faq.html

http://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html

http://code.roadsend.com/pcc

http://trac.lighttpd.net/trac/wiki/Docs:ModFastCGI

http://www.stanford.edu/services/webauth/

http://shibboleth.internet2.edu/

