---
title: FreeBSD Jails
date: 2007-07-24
tags: freebsd,virtualization
---
After some serious fun with <a href="http://www.docunext.com/wiki/OpenVZ">OpenVZ</a>, I've been reading about <a href="http://www.docunext.com/wiki/FreeBSD">FreeBSD</a> jails. I really need to read the <a href="http://www.docunext.com/wikiFreeBSD_man_jail">jail manual</a>.

And a page about BSD jails:

<a href="http://www.freebsddiary.org/jail.php">http://www.freebsddiary.org/jail.php</a>,

which links to:

<a href="http://www.iosn.net/Members/kaeru/articles/freebsd/freebsd-jails/index_html">iosn.net/Members/kaeru/.../freebsd-jails</a>, also very good.

OK, trying out the first build. I'm using the shell script example they provide on the man page:

<pre>D=/here/is/the/jail
cd /usr/src
mkdir -p $D
make world DESTDIR=$D
make distribution DESTDIR=$D
mount_devfs devfs $D/dev</pre>

Jails are working out very nicely. I'm pleased with the ability to run jailed FreeBSD in a jail because I'm sure as I learn the toolset I'll make some mistakes!

I'm planning to use OpenVZ on linux, and jails on FreeBSD. :-)

UPDATE: The second link referenced above has a great tip for duplicating BSD jails. I'll reproduce it here for convenience:

<pre>
mkdir /usr/jail/new
cd /usr/jail/old
tar -cpf - . | tar -C /usr/jail/new -xpf -</pre>

Hmmm, just tried to start lighttpd after enabling /usr/local/etc/rc.d/lighttpd but I'm getting this error:

<pre>2007-08-02 04:28:07: (network.c.159) socket failed: Protocol not supported </pre>

Found the answers I was looking for here: <a href="http://www.weithenn.idv.tw/cgi-bin/wiki.pl?action=browse&amp;diff=1&amp;id=LigHttpd-%E8%BC%95%E9%87%8F%E7%B4%9A_Web_Server">lighttpd on freebsd - (network.c.159) socket failed: Protocol not supported</a>

That page is in a foreign language, so in a nutshell it says that you need to comment out ipv6 from /usr/local/etc/lighttpd.conf and specify your ip address instead of using 0.0.0.0. I was unable to use port 80 so instead I used port 8088. I'll try and figure that one out too.
