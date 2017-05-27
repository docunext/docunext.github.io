---
title: MySQL Sockets versus Network
date: 2007-09-15
tags: memcache,mysql
---
I've always used MySQL network connections instead of sockets as of late, but then I read that sockets are faster for local connections. Then I found more compelling evidence at the MySQL performance blog:

<a href="http://www.mysqlperformanceblog.com/2006/08/09/cache-performance-comparison/">Cache Performance Comparison - MySQL, Memcached, and various PHP caches</a>

I tried it out and got it to work using Wordpress, and I got it to work, but I haven't tested out the performance yet. I was surprised you need to put ":" before the path to the socket, which on debian is /var/run/mysqld/mysqld.sock.

