---
title: ld cannot find lgcc s
comments:
  - author: brad
    email: brad@chickcentral.com
    date: 04/28/2009 12:41:11 PM
    text: >
      i have this same issue currently. what was the resolution?
  - author: Albert
    email: albert.lash@savonix.com
    date: 04/28/2009 12:52:31 PM
    text: >
      Hi brad, you using debian?
  - author: Albert
    email: albert.lash@savonix.com
    date: 04/28/2009 12:53:23 PM
    text: >
      I'll have to look back in my emails to find out what dossy said.
  - author: brad
    email: brad@chickcentral.com
    date: 04/28/2009 03:09:02 PM
    text: >
      I wish these were debian, but they are CentOS.
  - author: Albert
    email: albert.lash@savonix.com
    date: 04/29/2009 01:08:08 AM
    text: >
      Ah, OK. I just found this other post:<br/><br/><a href="http://www.docunext.com/blog/2008/07/14/aolserver4-nsmysql/" rel="nofollow">http://www.docunext.com/blog/2008/07/14/aolserver4-nsmysql/</a><br/><br/>And I'm posting the emails we exchanged in the wiki:<br/><br/><a href="http://www.docunext.com/wiki/The_Emails_Between_Dossy_and_I_about_AOLServer_and_MySQL" rel="nofollow">http://www.docunext.com/wiki/The_Emails_Between_Dossy_and_I_about_AOLServer_and_MySQL</a>
date: 2008-07-12
---
Finally figured this one out, I think. I was trying to compile aolserver4-nsmysql on debian, using the package source, but I kept hitting that error. then <a href="https://bugzilla.novell.com/show_bug.cgi?id=218406">I found some bug about openSUSE related to this</a>, and the workaround for x86 was to do this:

<pre lang="bash">
ln -s /lib/libgcc_s.so.1 /usr/lib/libgcc_s.so</pre>

DOH! Unfortunately, I'm back to square one. I'm now able to compile aolserver4-nsmysql, but I still get this error when trying to load the driver:

<pre lang="bash">
Warning: modload: could not load /usr/lib/aolserver4/bin/nsmysql.so: /usr/lib/aolserver4/lib/libnsmysql.so: undefined symbol: mysql_select_db</pre>

Maybe I'll stick with Postgres?

Dossy seems to be around still, so I've just sent an email:

<blockquote>

Hi Dossy,

How are you? I'm trying to get your AOL Server mysql driver up and running but keep running into the same problem:

Warning: modload: could not load /usr/lib/aolserver4/bin/nsmysql.so: /usr/lib/aolserver4/lib/libnsmysql.so: undefined symbol: mysql_select_db

I've been on this for a few days, I'm using debian lenny, and have /usr/lib/aolserver4/lib in /etc/ld.so.conf.d/aolserver4.conf. I'm using the debian packages for aolserver4 and aolserver4-nsmysql, but since it didn't work like that, I've been trying to compile it myself.

First I ran into an issue where it couldn't find gcc_s, so I did this:

ln -s /usr/lib/libgcc_s.so /lib/libgcc_s.so

That helped the compile finish, but I still get the same error when starting AOL Server.

What do you think? Any ideas? Thanks!

Albert</blockquote>

More info:

<pre>
ldd /usr/lib/aolserver4/bin/nsmysql.so	linux-gate.so.1 =>  (0xffffe000)	libnsmysql.so => /usr/lib/aolserver4/lib/libnsmysql.so (0xb7fc7000)	libnsd.so => /usr/lib/aolserver4/lib/libnsd.so (0xb7f69000)	libnsthread.so => /usr/lib/aolserver4/lib/libnsthread.so (0xb7f60000)	libgcc_s.so.1 => /lib/libgcc_s.so.1 (0xb7f53000)	libtcl8.4.so.0 => /usr/lib/libtcl8.4.so.0 (0xb7e9e000)	libdl.so.2 => /lib/i686/cmov/libdl.so.2 (0xb7e9a000)	libpthread.so.0 => /lib/i686/cmov/libpthread.so.0 (0xb7e82000)	libm.so.6 => /lib/i686/cmov/libm.so.6 (0xb7e5d000)	libc.so.6 => /lib/i686/cmov/libc.so.6 (0xb7d0e000)	/lib/ld-linux.so.2 (0x80000000)</pre>

¥

