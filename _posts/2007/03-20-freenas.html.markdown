---
title: Freenas
date: 2007-03-20
tags: none
author: Albert Lash
---
I'm giving Freenas (version 0.68) a whirl. I've got an AOpen XC Cube and a AMCC 3Ware 9650SE SATA RAID 0/1 card. I'll be using RAID0 for speed and size. Ack! Never mind, I just noticed that FreeNAS has support for local users, Active Directory Users, though LDAP support is a work in progress. I've dabbled with LDAP, instead using nss-mysql for most of my machines. Hmmmm. Maybe I can setup libnss-mysql on FreeNAS, it appears to be available for freebsd, which is what freenas runs on. I'll give that a go, but the real question is whether the 3Ware card will work out of the box.

Unfortunately it didn't. :-(

Oh well I have a debian CD with the latest 3Ware drivers on it so that should work well.

http://www.3ware.com/kb/article.aspx?id=14860

