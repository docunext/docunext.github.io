---
title: php5 svn
comments:
  - author: Russell Coker
    email: russell@coker.com.au
    ip: 220.237.144.140
    url: http://etbe.coker.com.au/
    date: 05/19/2008 02:47:17 AM
    text: >
      The package is broken, there should not be any need to execute things under /tmp.  It's likely to be a security flaw too.  Please file a bug report.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 05/19/2008 06:32:10 AM
    text: >
      Hi Russell! Thanks for the comment, I just filed the bug report:<br/><br/><a href="http://pecl.php.net/bugs/bug.php?id=13938" rel="nofollow">http://pecl.php.net/bugs/bug.php?id=13938</a>
date: 2008-05-18
---
I'm building php5-svn:

<pre lang="bash">
apt-get install php5-dev libsvn-dev
pecl install channel://pecl.php.net/svn-0.3
vim /etc/php5/conf.d/svn.ini</pre>

Got this error:

<pre lang="bash">/usr/bin/phpize: /tmp/pear/cache/svn-0.3/build/shtool: /bin/sh: bad interpreter: Permission denied</pre>

It was a problem with my /tmp filesystem, I set the fstab options to defaults and then:

<pre lang="bash">
mount -o remount /tmp</pre>

¥

