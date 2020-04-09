---
title: Debian MySQL Replication and tmpfs tmp
comments:
  - author: Freehill Media Website Design
    email: dallas@freehillmedia.com
    url: http://www.freehillmedia.com
    date: 04/02/2009 06:14:03 AM
    text: >
      It's a little bit unfortunate that Debian MySQL Replication is quite rare and finding documentation for little issues/bugs/warnings can be quite a mission.
date: 2008-01-03
tags: file systems,mysql,replication
---
I finally nailed down a problem I've been having with MySQL replication on debian. I usually use tmpfs for /tmp, so when the machine restarts, /tmp is gone. That's why I call it tmp!

Anyway, to retain mysql stuff through a reboot, I use this:

<pre>tmpdir      = /var/lib/mysql/tmp</pre>

More database replication info: <a href="http://www.docunext.com/wiki/MySQL_Database_Replication">MySQL Database Replication</a>

¥

