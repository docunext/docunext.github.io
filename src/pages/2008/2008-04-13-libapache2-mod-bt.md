---
title: libapache2 mod bt
date: 2008-04-13
tags: none
author: Albert Lash
---
I'm trying to setup a bittorrent tracker on a development server so I can learn more about the protocol.

<pre lang="bash">
apt-get install libapache2-mod-bt</pre>

I think this is it:

<a href="http://www.crackerjack.net/mod_bt/mod_bt.html">http://www.crackerjack.net/mod_bt/mod_bt.html</a>

Its pretty easy to setup on debian, I just ran "a2enmod bt" and the stopped and started apache2.

Duh, took me awhile to figure it out, but I finally used ktorrent to connect to the mod_bt server. In the uploads section, I added my tracker address, then clicked add tracker, and when I visited the mod_bt page again there was some new stuff there!

<a href="http://http://www.dessent.net/btfaq/">http://www.dessent.net/btfaq/</a>

<a href="http://mail.milwaukeelug.org/wws/arc/mlug-list/2007-10/msg00119.html">http://mail.milwaukeelug.org/wws/arc/mlug-list/2007-10/msg00119.html</a>

<a href="http://hightechsorcery.com/2008/02/bittorrent-tracker-debian-and-ubuntu">http://hightechsorcery.com/2008/02/bittorrent-tracker-debian-and-ubuntu</a>

<a href="http://www.docunext.com/wiki/BitTorrent">http://www.docunext.com/wiki/BitTorrent</a>
