---
title: Martian source dmesg logs
date: 2007-05-07
tags: none
author: Albert Lash
---
I keep getting martian source log entries. At first I thought they were caused by broadcast settings on my interfaces, but what I thought would fix them did not.

Old:

xzy.255.255.255

New:

xyz.xyz.xyz.255

It may have fixed it a little, but the problem is still happening.  From what I understand, this log is caused when a packet from a public network hits an interface on a private network (LAN).

