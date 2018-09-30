---
title: DJabberd on FreeBSD
comments:
  - author: Om Kumawat
    email: h2005428@bits-pilani.ac.in
    ip: 203.83.248.32
    url: http://www.bits-pilani.ac.in
    date: 03/31/2008 04:10:17 AM
    text: >
      Hi:<br/>My Djabberd Server is not working. First let me explain what I have done:<br/>Installed Djabberd Server on Linux machine from <a href="http://search.cpan.org/~bradfitz/DJabberd-0.83/lib/DJabberd.pm" rel="nofollow">http://search.cpan.org/~bradfitz/DJabberd-0.83/lib/DJabberd.pm</a><br/><br/>Installed all the requiered packages<br/><br/>Installed SamePlace for connecting it to Djabberd Server<br/>my machine hostname is "jpr.om.com"<br/><br/>when I run<br/>"telnet jpr.om.com 5222"<br/>"telnet jpr.om.com 5269"<br/>than its showing CONNECTED<br/><br/>my djabberd.users file as follos:<br/><br/>Policy accept<br/>AllowedUsers om1 om2<br/><br/>Password password<br/><br/>my djabberd.conf file as follows:<br/><br/>OldSSL enable<br/><br/># defaults:<br/>ClientPort 5222<br/>ServerPort 5269<br/><br/>#PerlModule DJabberd::SixApart<br/><br/>S2S enable<br/>RequireSSL no<br/><br/>Policy accept<br/>AllowedUsers om1 crucially test om2<br/><br/>Password password<br/><br/>Database roster.sqlite<br/><br/>So now when I try to connect SamePlace to Djabberd Server It does not connect<br/>I give following parameters in SamePlace<br/>open account wizard than select second jabber service and enter following details:<br/><br/>Username: om1<br/>Domain: jpr.om.com<br/>Password: 123456<br/>Resource: SamePlace<br/>Server: jpr.om.com<br/>Port: 5223/5222/5269(check for all these three port)<br/>Encryption: SSL/None(check for both SSL as well as None)<br/><br/>Than it does not show any error massage or anything.<br/><br/>So please tell me what's wrong is going on here. if anything isrequired more to explain than please let me know. I highly need a help because its a my MTech term project. if I be unable to complete it thanI will be getting poor Grade. So please tell me how do I run it.<br/><br/>Please do reply asap.<br/><br/>Best regards,<br/>Om Kumawat<br/>MTech(Computer Science)<br/>4th Sem<br/>BITS-PILANI, Pilani(Rajasthan-India)
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 03/31/2008 09:28:03 PM
    text: >
      Hi Om,<br/><br/>How are you starting djabberd?<br/><br/>Can you run tcpdump on the machine running djabberd?<br/><br/>Albert
date: 2007-08-15
tags: djabberd,freebsd,xmpp
---
I'm trying to install DJabberd on FreeBSD. I followed: <a href="http://osterman.com/wordpress/2007/08/11/djabberd-debian-howto">

http://osterman.com/wordpress/2007/08/11/djabberd-debian-howto</a>

and adjusted for FreeBSD layout.

<pre class="sh_sh">cd /usr/ports/net-im/p5-DJabberd
make install clean</pre>then:

<pre class="sh_sh">mkdir /usr/local/etc/djabberd/</pre>
and saved this as djabberd.conf:

<pre class="sh_sh">OldSSL  enable
# health checks from this IP (directive can be repeated) won't log and
# won't allocate a connection id
DeclareMonitor 127.0.0.1
AdminPort 5200
ClientPort 5222
ServerPort 5269
SSLCertificateFile    /usr/local/etc/djabberd/server-cert.pem
SSLCertificateKeyFile /usr/local/etc/djabberd/server-key.pem
&lt;vhost alliance.com=""&gt;
  S2S enable
  RequireSSL yes
  &lt;plugin djabberd::authen::htdigest=""&gt;
    Realm djabberd
    HtDigest /usr/local/etc/djabberd/djabberd.users
  &lt;/plugin&gt;
  &lt;plugin djabberd::rosterstorage::sqlite=""&gt;
    Database /usr/local/etc/djabberd/djabberd.sqlite
  &lt;/plugin&gt;
  &lt;plugin djabberd::authen::mysql=""&gt;
    DBName               djabberd
    DBHost               127.0.0.1
    DBPort               6723
    DBUsername           dbusername
    DBPassword           dbpassword
    DBTable              user
    DBUsernameColumn     username
    DBPasswordColumn     password
    DBEncryptedPasswords 1    DBWhere              canjabber = 1
  &lt;/plugin&gt;
&lt;/vhost&gt;
</pre>

<pre class="sh_sh">openssl req -x509 -newkey rsa:1024 -keyout /usr/local/etc/djabberd/server-key.pem -out \ /usr/local/etc/djabberd/server-cert.pem -days 365 -nodes
djabberd --conf=/usr/local/etc/djabberd/server.conf --daemon</pre>

The command htdigest didn't work for me because I didn't have it installed, so I used an htpass file from another machine and changed the realm to "djabberd".

OK, to use HTDigest and SQLite, I needed to get the latest subversion code. Also had to copy over the libs:

<pre class="sh_sh">cp -R DJabberd-Authen-HTDigest/ /usr/local/lib/perl5/5.8.8/
cp -R DJabberd-RosterStorage-SQLite/lib/DJabberd/ /usr/local/lib/perl5/5.8.8/DJabberd/</pre>

and install DBI and DBD::SQLite, and DBD::MySQL. In the end, I couldn't get any of that to work, but I did get the very basics to work by using static settings:

<pre class="sh_sh">  &lt;plugin djabberd::authen::allowedusers=""&gt;
     Policy accept     AllowedUsers albertlash
  &lt;/plugin&gt;
  &lt;plugin djabberd::authen::staticpassword=""&gt;
      Password password
  &lt;/plugin&gt;
</pre>

This looks like a great alternative to ejabberd! Ouch, I just noticed that offline messages aren't working. Doh!

<a href="http://lists.danga.com/pipermail/djabberd/2007-January/000271.html">danga.com/.../djabberd/2007-January/000271.html</a>

I am still very excited about djabberd as I can actually understand the code! :-) I need to figure out how the configuration file is formatted better.

I just posted to Erik's blog a note about the HTDigest, you don't need the "@" sign or the domain when creating the htdigest file. Also, I just commented on Brad's blog (the author of DJAbberd), and am posting here in case it gets filtered out:

<blockquote>Hi Brad,

Great work. I've been using ejabberd for awhile on debian, but am trying to make an ~8-16MB jabber appliance on top of m0n0wall, sort of like askoziapbx, but for jabber. While ejabberd on debian has its niceties (like registration and offline messages), running erlang on freebsd (minibsd) on an embedded device is much harder than perl.

FYI - found out about your work via the news that MT4 will be GPL. That's great news! - Docunext</blockquote>

WAIT! DJabberd DOES have offline storage! :-) :-) :-)

<a href="http://search.cpan.org/%7Epiers/DJabberd-Delivery-OfflineStorage-0.02/lib/DJabberd/Delivery/OfflineStorage.pm">cpan.org/.../OfflineStorage.pm</a>

<a href="http://search.cpan.org/%7Emisc/DJabberd-Plugin-PrivateStorage-0.60/lib/DJabberd/Plugin/PrivateStorage/SpoolDirectory.pm">cpan.org/.../PrivateStorage/SpoolDirectory.pm</a>

¥

