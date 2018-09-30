---
title: Installing FlexySvn
date: 2007-05-22
tags: nodows
---
I'm trying out FlexySVN:

<a href="http://pecl.php.net/package/svn">http://pecl.php.net/package/svn</a>

<pre>apt-get install libsvn-dev</pre>

<pre class="sh_sh">...
checking if nawk is broken... no
checking for svn support... yes, shared
checking for specifying the location of apr for svn... yes, shared
checking for svn includes... configure: error: failed to find apr.h
ERROR: `/tmp/pear/cache/svn-0.2/configure' failed</pre>

Found this:

<a href="http://pecl.php.net/bugs/bug.php?id=10811&amp;edit=1">http://pecl.php.net/bugs/bug.php?id=10811&amp;edit=1</a> - Fixed!

<pre>pecl install -f colorerchecking for colorer files in default path... not found
configure: error: Please reinstall the colorer distribution!
ERROR: `/tmp/pear/cache/colorer-0.7/configure' failed</pre>

OK, how about:

<pre>wget http://prdownloads.sourceforge.net/colorer/Colorer-take5-linux.beta4.tar.bz2
tar -xjvf Colorer-take5-linux.beta4.tar.bz2</pre>

<pre>./configure
make</pre>

yields:

<pre>make[1]: *** [objs/LineRegionsCompactSupport.o] Error 1
make[1]: Leaving directory `/usr/src/colorer/src/colorer'
make: *** [colorer] Error 2</pre>

Urgh, oh well. Better luck next time. I did a little more searching on this, came up with this link about a <a rel="nofollow" href="http://www.robertswarthout.com/rswarthout/2007/01/php-frontend-to-subversion-svn/">PHP frontend to SVN (but closed source!)</a>, and then found this mention of <a rel="nofollow" href="http://www.robertswarthout.com/rswarthout/2007/05/ie-6-apache-mod_deflate-blank-pages/">IE blank pages with javascript and Apache deflate</a>. I've experienced similar behavior with cached pages and adsense. Nowadays I simply turn off caching for MSIE. <a href="http://www.nodows.com">NODOWS</a>!

