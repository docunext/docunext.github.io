---
title: No PHP5 Readline in Debian 
comments:
  - author: troels
    email: troelskn@gmail.com
    date: 11/14/2007 05:25:02 PM
    text: >
      I tried downloading the package, but get a 404. I would really like to get my hands on this package.
  - author: admin
    email: albert.lash@savonix.com
    date: 11/14/2007 05:30:45 PM
    text: >
      Hi Troels, thanks for the heads up. Try it now, should be fixed. Might have to refresh.
  - author: outsider
    email: n@n.com
    date: 03/20/2008 12:36:29 PM
    text: >
      I cannot get the debian Packeg through this Link it redirects to another Page
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/20/2008 02:13:21 PM
    text: >
      Hi outsider - thanks for the heads up. I fixed it so you should be able to download it now.
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/20/2008 02:15:05 PM
    text: >
      I plan to update this package with one of these:<br/><br/><a href="http://www.s11n.net/editline/" rel="nofollow">http://www.s11n.net/editline/</a><br/><br/><a href="http://www.thrysoee.dk/editline/" rel="nofollow">http://www.thrysoee.dk/editline/</a><br/><br/>to free it from license issues.
  - author: Charles Melbye
    email: charlie@yourwiki.net
    url: http://www.yourwiki.net/
    date: 02/20/2009 11:00:12 PM
    text: >
      You rock! I've been looking for this in all of Debian's package repositories.<br/><br/>Thanks for compiling this package!<br/><br/>- Charlie
  - author: David S.
    email: anonymous@foo.bar
    date: 04/19/2010 06:29:11 AM
    text: >
      Thank you.  This is a help.
date: 2007-10-19
---
<a href="http://www.docunext.com/blog/2007/10/19/no-php5-readline-in-debian/">

I'm working on a command line PHP script and I've come to realize that there is no readline capability compiled into the php5-cli package. That's too bad, as command line php usage is gaining a lot of popularity.

From what I've read, this may be due to licensing issues, which is also too bad.

Why do I want PHP5 readline support? Mostly so that when using interactive php command line scripts, I can use the "up arrow" keystroke to recall my last command, as well as tab completion. Those are my favorite things about the command line and what make it such an efficient way to interact with computers.

UPDATE: I was able to compile and install readline as a module! That makes creating command line PHP applications much easier.

<pre>./configure --disable-cgi --enable-cli --with-readline=shared,/usr/include/readline/</pre>

Control file:

<pre>
Package: php5-readline

Version: 5.2.3

Section: web

Priority: optional

Architecture: i386

Depends: php5-cli (>=5.2), libreadline5

Maintainer: Albert Lash

Description: PHP 5 Readline Shared Object Helpful in the creation of interactive command line scripts written in PHP.</pre>

Package contents:

<pre>
php5-readline

php5-readline/etc

php5-readline/etc/php5

php5-readline/etc/php5/conf.d

php5-readline/etc/php5/conf.d/readline.ini

php5-readline/usr

php5-readline/usr/lib

php5-readline/usr/lib/php5

php5-readline/usr/lib/php5/20060613+lfs

php5-readline/usr/lib/php5/20060613+lfs/readline.so

php5-readline/DEBIAN

php5-readline/DEBIAN/control</pre>

<a href="/blog/wp-content/sites/wwwdocunextcom/files/php5-readline_5.2.3.deb">php5-readline_5.2.3.deb</a>

Note: The above debian package was created with my very limited experience! Use at your own risk!

UPDATE November 12, 2007: Thanks to an email exchange with Felipe (see my new post on the <a href="http://www.docunext.com/blog/2007/11/11/creating-debian-packages-part-ii/">php5-xsltcache package</a>), the licensing issue with a php5-readline has been confirmed. So this package will not make it into the debian repositories. See <a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=341864">debian bug report #341864 regarding php5-readline licensing issues.</a>

¥

