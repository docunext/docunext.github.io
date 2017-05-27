---
title: Stunnel Notes
date: 2006-11-14
tags: none
author: Albert Lash
---
Stunnel Installation on Debian:

apt-get install stunnel4

This should create the stunnel4 user and group./etc/default/stunnel4

Change

Enable=0 to Enable=1 for the /etc/init.d/ script to work.

We noted that /var/lib/stunnel4 was not always created, so it has to be manually created sometimes.

drwxr-xr-x  2 stunnel4 root  4096 2006-06-05 16:57 stunnel4

Trying to get stunnel to play nicely with nsswitch.conf leveraging libnss-mysql is no easy task.

If you use:

passwd:      mysql files

you will create an endless loop which stunnel cannot get out of. It tries to find out if it has permissions to write its pid file, checks nsswitch.conf, tries the mysql connection, and the process begins again.

However, if you simply switch the nsswitch.conf directives:

passwd:      files mysql

it works fine. ----

Stunnel is pretty cool, I use it with MySQL replication over insecure networks. Nice! For more info check out the howto I followed and added onto:

<a href="http://www.howtoforge.com/mysql_database_replication" rel="nofollow">http://www.howtoforge.com/mysql_database_replication</a>

