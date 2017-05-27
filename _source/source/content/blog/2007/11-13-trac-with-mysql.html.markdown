---
title: Trac with MySQL
comments:
  - author: cheriyath
    email: cheriyath@live.com
    ip: 122.166.40.170
    url:
    date: 02/07/2008 07:19:14 AM
    text: >
      My friend.<br/><br/>Try to work and improve on this script<br/><a href="http://www.fadingred.org/blog/articles/2007/05/04/trac-migration-sqlite-to-mysql/" rel="nofollow">http://www.fadingred.org/blog/articles/2007/05/04/trac-migration-sqlite-to-mysql/</a><br/><br/>Cheers<br/>Cheriyath
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 02/07/2008 11:12:04 AM
    text: >
      Thanks for the link cheriyath, looks pretty good! I'm initializing all my new Trac setups so I no longer have any SQLite dbs to convert.
  - author: ugur
    email: ugurb@anadolu.edu.tr
    ip: 193.140.186.26
    url:
    date: 11/23/2009 06:24:35 AM
    text: >
      hi i have the same problem and i would like to change my sql. but the link that u gave is gone. can u reload the documant?<br/>thanks.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 96.231.130.53
    url:
    date: 11/29/2009 03:25:53 PM
    text: >
      Hi ugur, yeah that link is dead, I'll remove it. Are you trying to migrate your SQLite data to MySQL?
date: 2007-11-13
tags: debian,mysql,python,trac
---

I've decided to give it a try - Trac with MySQL:

<pre class="sh_sh">
apt-get install trac
</pre>

I already have MySQL installed.

<pre class="sh_sh">
apt-get install python-mysqldb
</pre>

I tried doing the trac-admin initenv test-trac/ before setting up the database, username and password, but that didn't work so I had to start over. After that, it was really quite easy. I got an error:

<pre class="sh_sh">
/var/lib/python-support/python2.4/trac/db/util.py:50:
Warning: Incorrect string value: '\xD0\xBF\xD0\xB5\xD1\x80...' for column 'text' at row 0
</pre>

But I think that its OK. The database configuration ended up in the trac-env/conf/trac.ini, and it appears that it won't be too tough to convert an existing SQLite database. I'm not ready to do that quite yet, just wanted to take the first step today.

To set this up with a failover, I'll need to use either SQL-Relay or a proxy server for Apache, because I don't know how to use a conditional for the trac settings in trac.ini. I'll probably use SQL Relay as I've been meaning to do that for awhile, and I imagine using Apache's proxy capabilities might be problematic due to authentication.

UPDATE December 2, 2007: I setup another trac / mysql test and it worked! The database connection string is along these lines:

<pre class="sh_sh">
mysql://username:password@hostname:port/databasename
</pre>

I was also able to convert an existing sqlite database to a MySQL database. I did this one manually, but will likely do the next one using a script. So far, so good!

¥

