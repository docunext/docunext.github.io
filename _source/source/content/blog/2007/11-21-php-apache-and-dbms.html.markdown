---
title: PHP Apache and DBM s
date: 2007-11-21
tags: apache,cdb,debian,packages,php
---

Another case of open licensing conflicts: I'm trying to choose a dbm format to use, and I like the way SDBM is fast. Unfortunately, PHP doesn't have an interface for it. While PHP has an interface for GDBM, Apache does too, but it won't get distributed with it by default because the GBDM uses the GPL. Its is the GNU DBM, after all.

My options for Apache:

<pre class="sh_sh">
/usr/sbin/httxt2dbm
httxt2dbm -- Program to Create DBM Files for use by RewriteMap
Usage: httxt2dbm [-v] [-f format] -i SOURCE_TXT -o OUTPUT_DBM
Options:
 -v    More verbose output
 -i    Source Text File. If '-', use stdin.
 -o    Output DBM.
 -f    DBM Format.  If not specified, will use the APR Default.
           GDBM for GDBM files (unavailable)
           SDBM for SDBM files (available)
           DB   for berkeley DB files (available)
           NDBM for NDBM files (unavailable)
           default for the default DBM type
</pre>

And for PHP: dbm, ndbm, gdbm, qdbm, cdb, qdbm, and a few others. CDB and QDBM look interesting, but again Apache does not have support for those. The <a href="http://qdbm.sourceforge.net/" rel="nofollow>qdbm homepage</a> links to a <a href="http://qdbm.sourceforge.net/benchmark.pdf" rel="nofollow">benchmark test</a> (PDF), and the Berkeley DB format isn't too bad for both speed and size.

Since both the stock Debian Apache and PHP packages have support for this format, I guess I'll choose it!

Also, for what its worth, we might be able to see support for <a rel="nofollow" href="http://code.google.com/p/google-sparsehash/">Google's sparsehash</a> in both PHP and Apache at some point in the future. It uses the new BSD license, which I *think* would be free of conflict if distributed with Apache and PHP in debian.

Related:

<a href="http://httpd.apache.org/docs/2.2/programs/httxt2dbm.html" rel="nofollow">httxt2dbm</a>

<a href="http://us.php.net/manual/en/ref.dba.php" rel="nofollow">http://us.php.net/manual/en/ref.dba.php</a>

