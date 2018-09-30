---
title: Sporadic FIOS Network Connectivity
date: 2010-07-27
tags: fios,networking
---
My network is behaving badly - connectivity is sporadic; it works fine for five minutes, then exhibits extreme latency, apparently only for tcp connections, not icmp!

#### Troubleshooting Network Connectivity Tools

1. tcpdump
2. ping and httping
3. dig
4. netstat

Switching to only forward udp for dns, are dns queries eating up too many tcp connections?

Tue Jul 27 20:31:26 EDT 2010

nss-mysql[3075]: _nss_mysql_getspnam_r conf file parsing failed

Apache not logging, very strange. Changed apache2-worker to apache2-prefork, somehow that is helping.

Seemed to work fine until Tue Jul 27 20:49:18 EDT 2010.

Its very odd - I wonder if its FIOS and not my network setup. I've run through most of the basic troubleshooting techniques and no issues are popping up.

