---
title: aolserver4 nsmysql
date: 2008-07-14
tags: none
author: Albert Lash
---
Nice! Finally got AOL Server's nsmysql driver working with a lot of help from Dossy. (THANKS!)

This was the trick:

<pre lang="bash">
make NO_ROPT=1 NEED_ZLIB=1 NO_LDOVERRIDE=1 </pre>

As well as having libmysqlclient14 and libmysqlclient14-dev. I'm running Lenny, so I had to grab those from Sarge. Thankfully they installed without a problem.

I haven't actually tried it yet, but I wanted to post the solution before I got distracted with other things. How do I know its working? The logs:

<pre>[14/Jul/2008:12:56:46][4967.3083085488][-main-] Notice: modload: loading '/usr/lib/aolserver4/bin/nsmysql.so'[14/Jul/2008:12:56:46][4967.3083085488][-main-] Notice: Ns_MySQL_DriverInit(mysql):  Loaded Panoptic MySQL Driver v0.6, built on Jul 14 2008 at 12:56:36.</pre>

So the fact that aolserver4-nsmysql is included in lenny, but libnsmysql14 is not, is a problem. I haven't heard back from Riccardo yet, so I'll hold off on contact him again until I do.

UPDATE: I've successfully queried a MySQL database and returned values to a TCL script, and output to a web page. It works. :-)

