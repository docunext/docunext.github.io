---
title: ejabberd Documentation
date: 2006-07-05
tags: jabber,xmpp
---
<p>inet_gethost

inet_gethost is causing us problems. We can turn it off by using -name instead of -sname in the init script.</p>
<p>Now on Debian x86:

Seems to run fine, using external authentication, check_mysql.pl script. - In the perl script, I had to use absolute reference for the external file reference in the mysql command.</p>
<p>Wow ejabbedb was so much easier to get installed, configured and running on debian.</p><hr><p>ejabberd was difficult to get installed on a gentoo box. The ebuilds are too old!</p>
<p><strong>Erlang</strong>

First thing that dawned on me was that Erlang is a programming language. Ejabberd is written in erlang, and is called by erl, the erlang command. The ejabberd and ejabberdctl commands are just shell scripts which call erlang in a compact manner for you.</p>
<p><strong>Installation Attempts</strong>

ejabberd-0.7.5.ebuild on gentoo ~amd64 - no go

ejabberd-1.0.0.ebuild on gentoo ~amd64 - no go, could manually run, but init scripts didn't work, and when manually run, noone else could connect to the node

ejabberd from SVN source checkout - no go

ejabberd binary install - needed libncurses.so.5 compiled for 32bit, which I did, and it works!</p>
<p>bandersnatch<a class="" href="https://www.savonix.com/acc/nxwiki/new/bandersnatch">?</a></p><hr><p>trying to install ejabberd on gentoo is maddening. I've resorted to using a binary install but it can't find libncurses.so.5, which is there, but is I guess compiled for 64 bit. argh.</p>
<p>Trying version 5.5....</p>
<p>CFLAGS=-m32 CXXFLAGS=-m32 LDFLAGS="-L/emul/linux/x86/lib -L/emul/linux/x86/usr/lib" ./configure --prefix=/emul/linux/x86 --with-shared --without-debug</p>
<p>Looks like it worked....</p>
<p>Couple of things to remember about ejabberd:</p>

<ul>    <li>need full user name: user@host</li></ul><p>Links:

<a href="http://www.gentoo.org/proj/en/base/amd64/technotes/index.xml?part=1&amp;chap=4" onclick="window.open(this.href, '_blank'); return false;">http://www.gentoo.org/proj/en/base/amd64/technotes/index.xml?part=1&amp;chap=4</a>

<a href="http://www.linuxfromscratch.org/clfs/view/cross-lfs/mips64/final-system/ncurses-n32.html" onclick="window.open(this.href, '_blank'); return false;">http://www.linuxfromscratch.org/clfs/view/cross-lfs/mips64/final-system/ncurses-n32.html</a></p>
<p>What not to do:

<a href="http://www.archivesat.com/Gentoo_Linux_Amd64_port/thread377129.htm" onclick="window.open(this.href, '_blank'); return false;">http://www.archivesat.com/Gentoo_Linux_Amd64_port/thread377129.htm</a></p><hr>

Additional notes:

Trying to install ejabberd 0.9.1 on Gentoo 2.6 amd64 Intel XEON<p>ebuild:

<a href="http://bugs.gentoo.org/attachment.cgi?id=60352" onclick="window.open(this.href, '_blank'); return false;">http://bugs.gentoo.org/attachment.cgi?id=60352</a></p>
<p>Manual Install:

<a href="http://www.process-one.net/en/projects/ejabberd/docs/guide_en.html" onclick="window.open(this.href, '_blank'); return false;">http://www.process-one.net/en/projects/ejabberd/docs/guide_en.html</a></p>
<p>SOME DISCUSSION

<a href="http://www.jabber.ru/chatlogs/ejabberd@conference.jabber.ru/2005/11/29.html" onclick="window.open(this.href, '_blank'); return false;">http://www.jabber.ru/chatlogs/ejabberd@conference.jabber.ru/2005/11/29.html</a></p>
<p><a href="http://www.jabber.ru/chatlogs/ejabberd@conference.jabber.ru/2005/08/26.html" onclick="window.open(this.href, '_blank'); return false;">http://www.jabber.ru/chatlogs/ejabberd@conference.jabber.ru/2005/08/26.html</a></p>

