---
title: MyDNS Error MySQL has gone away
date: 2007-09-04
tags: mysql
---
Problem:

MySQL has too many connections.

Solution:

Lower the timeout on the mysql server.

Issue:

MyDNS gets booted.

Solution:

Add reconnect=1 in the my.cnf client section. Didn't work.

Solution that works:

I had port = 3308 in my my.cnf file, as mysql runs on that port locally. MyDNS on the other hand is connecting to another local mysql server on port 3306, and I was using ":3306" at the end of the host specification. For some reason, that caused problems. I switched the port in my.cnf back to 3306 and then removed the :3306 from the mydns.conf file and things seem to be working better.

