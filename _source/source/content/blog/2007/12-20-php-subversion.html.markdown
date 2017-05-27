---
title: PHP Subversion
date: 2007-12-20
tags: subversion
---
I'm installing the pecl library to add svn functions in php:

<pre class="sh_php">
apt-get install libsvn-dev
pecl install channel://pecl.php.net/svn-0.2
</pre>

Doh:

<pre class="php">
checking for svn includes... configure: error: failed to find apr.h
</pre>

http://pecl.php.net/bugs/bug.php?id=10811&edit=1

<pre>
cvs -d:pserver:cvsread@cvs.php.net:/repository co pecl/svn

cd pecl/svn

pecl install package2.xml
</pre>

This would make a good debian package as well.

