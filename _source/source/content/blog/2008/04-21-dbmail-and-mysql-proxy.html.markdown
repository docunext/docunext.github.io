---
title: dbmail mysql proxy and ldap
date: 2008-04-21
tags: ldap,mysql
---
Very cool stuff:

http://jan.kneschke.de/2007/8/1/mysql-proxy-learns-r-w-splitting

http://www.dbmail.org/dokuwiki/doku.php

</a>

<pre class="sh_sh">dbmail-imapd
[15508]: Error:[sql] dbmysql.c,db_mysql_check_collations(+138): collation mismatch, your MySQL configuration specifies a different charset than the data currently in your DBMail database.
Apr 21 09:21:49 bart111 dbmail-imapd
[15508]: FATAL:[server] server.c,StartServer(+129): Unable to connect to database.
</pre>

<pre class="sh_sh">dpkg-reconfigure -plow dbmail
</pre>

<pre class="sh_sh">telnet localhost 144
Trying 127.0.0.1...
Connected to localhost.localdomain.
Escape character is '^]'.* OK dbmail imap (protocol version 4r1) server 2.2.10 ready to run
* BAD No tag specified
* BAD No tag specified
</pre>/etc/default/dbmail:

<pre class="sh_sh">export START_IMAPD=1
</pre>

<a href="http://www.guia-ubuntu.org/index.php?title=DbMail" rel="nofollow">http://www.guia-ubuntu.org/index.php?title=DbMail
</a>

After the initial problems with dbmail, I'm pleased to report it works! I was able to connect RoundCube to dbmail, and authenticate via ldap. That's awesome!

More interesting links:

<a href="http://www.dbmail.org/dokuwiki/doku.php?id=imapsync-howto">http://www.dbmail.org/dokuwiki/doku.php?id=imapsync-howto
</a>

<a href="http://www.dbmail.org/dokuwiki/doku.php?id=unique_id_guid">http://www.dbmail.org/dokuwiki/doku.php?id=unique_id_guid
</a>

<a href="http://www.dbmail.org/dokuwiki/doku.php?id=exporting_dbmail_users_to_maildir_format._ver_2.0.x">http://www.dbmail.org/dokuwiki/doku.php?id=exporting_dbmail_users_to_maildir_format._ver_2.0.x
</a>

<h4>mysql-proxy not ready yet?
</h4>

I planned to try out mysql-proxy right away with dbmail, but it looks like its not ready yet. There is no init script that I can find.

<h4>Perdition
</h4>

This would be a perfect time to give perdition a spin! I would like to be able to route only a few accounts to receive mail for mailboxes stored in dbmail.

To-do: * Setup public smtp server for delivery of low-volume email to dbmail

Note:

Looks like it will be fairly easy to set this up for a single domain - thanks to the flexibility of postfix configuration. Specifically, you can specify the transport for each domain separately.

While it is possible to use ldap, I'm now using the built in sql authentication capabilities of dbmail for testing it out.

Also thanks:

<a href="http://www.helgrim.com/dbmaildocs/installation.html">http://www.helgrim.com/dbmaildocs/installation.html
</a>

