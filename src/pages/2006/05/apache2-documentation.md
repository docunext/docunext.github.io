---
title: Apache2 Documentation
date: 2006-05-15
---
<h3 id="toc0">Apache 2 Errors</h3><p>Got this error:

<pre>
configuration error:  couldn't check access.  No groups file?: /awstats/awstats.pl</pre>

Many things cause this error, but in my case, mod_auth was not enabled. Duh.</p><h3 id="toc1">Apache2 Performance</h3><p><strong>Update</strong>

We've switched to Prefork MPM for stability and resource management. Since this server is also a high volume email server and stability is the most important aspect to its operations, we are scaling back on performance issues to increase stability. The other services also affect the values we use to setup preform mpm:

StartServers 5 - not starting and stopping the daemon too often, so this is somewhat moot.

MinSpareServers 5 - ready for more action

MaxSpareServers 25 - keeping this smaller so that unused Apache resources can be lent to email services when needed.

MaxClients 256 - I don't want to run out of RAM!

MaxRequestsPerChild - 250 - we have awesome processors so I don't mind restarting processes.</p>
<p>I also turned off KeepAlive.</p>
<p>The site is static so I'm mostly concerned with reliability, robustness, and uptime, rather than worrying about performance flexibility.</p>
<p><strong>Old setup</strong>

I run a high volume server, 1,000,000 hits / day. Thats hits, not unique visitors. Approximately 10,000 visitors / day. Our site is mostly static. First off we have a huge server with 2GB of ram, then a RAID array with a good controller card, then these settings for Apache2:</p>

<ul>    <li>Use mpm_worker - this is a multi-threaded server, using less memory.  </li>    <li>Divide the ram by 5 for the max number of clients</li>    <li>Turn down timeout to 30 seconds</li>    <li>KeepAlive On</li>    <li>Unlimited Keepalive requests - important!</li>    <li>KeepAliveTimeout 2 - important!</li>    <li>Our worker settings: </li></ul>

<pre># worker MPM [DEFAULT IF USE=threads]# StartServers: initial number of server processes to start# MaxClients: maximum number of simultaneous client connections# MinSpareThreads: minimum number of worker threads which are kept spare# MaxSpareThreads: maximum number of worker threads which are kept spare# ThreadsPerChild: constant number of worker threads in each server process# MaxRequestsPerChild: maximum number of requests a server process serves&lt;IfModule worker.c&gt;    StartServers        25    MaxClients         400    MinSpareThreads     50     MaxSpareThreads     75    ThreadsPerChild     25       MaxRequestsPerChild  0&lt;/IfModule&gt;</pre><p>Mostly thanks to this post, and some trial and error:

<a href="http://virtualthreads.blogspot.com/2006/01/tuning-apache-part-1.html" rel="nofollow">http://virtualthreads.blogspot.com/2006/01/tuning-apache-part-1.html</a></p><h3 id="toc2">Apache2 on Debian</h3><p><strong>Notes</strong></p>

<ul>    <li>a2ensite and a2dissite are automated ways of enable and dissabling virtual hosts for Apache2 on Debian. Strange to me, but seems like it might come in handy at some point. </li>    <li>To enable mod_auth_mysql, I a2enmod auth_mysql, but I'm getting an error:</li></ul>

<pre>
Invalid command 'AuthMySQLEnable', perhaps mis-spelled or defined by a module not included in the server configuration</pre>

<ul>    <li>The directives for mod_auth_mysql are totally different on Debian: </li></ul><p><a href="http://polestar.org/auth_mysql/USAGE.html" rel="nofollow">http://polestar.org/auth_mysql/USAGE.html</a></p><hr /><p><strong>Setting up OpenSSL on Debian for Apache2</strong></p><ol>    <li>a2enmod ssl</li>    <li>cd /etc/apache2/ssl</li>    <li>cd /etc/ssl</li>    <li>nano openssl.cnf</li>    <li>edit your defaults to minimize typing later on</li>    <li>openssl req -new &gt; new.cert.csr</li>    <li>openssl rsa -in privkey.pem -out new.cert.key</li>    <li>openssl x509 -in new.cert.csr -out new.cert.cert -req -signkey new.cert.key -days 1095</li>    <li>cp /usr/lib/ssl/misc/new.cert.cert /etc/apache2/ssl/</li>    <li>cp /usr/lib/ssl/misc/new.cert.key /etc/apache2/ssl/</li></ol><p><strong>Notes</strong></p>

<ul>    <li>Debian complains if you mix non-port specified IP wildcards, so always use *:80, *:443, or whatever port you are using to specify NameVirtualHosts.</li></ul><p><strong>External Related Links</strong>:

<a href="http://www.gentoo.org/doc/en/virt-mail-howto.xml" rel="nofollow">http://www.gentoo.org/doc/en/virt-mail-howto.xml</a></p>
<p><strong>Setting up mod_dav over SSL with MySQL authentication</strong></p><ol>    <li>On gentoo, edited /etc/conf.d/apache2 to include dav and dav_fs</li>    <li>On gentoo, emerge mod_auth_mysql</li>    <li>Getting annoying error from apache: End of file found: SSL handshake interrupted by system [Hint: Stop button pressed in browser?!]</li>    <li>Boy the apache configuration was a pain, but I finally got it working. </li></ol><p><strong>Notes</strong></p>

<ul>    <li>Mac OS X 10.3 doesn't support https webdav. Though you can use Goliath. </li>    <li>mod_dav won't work with symlinks. Don't even try it. </li>    <li>User's attached to a mod_dav file share access the share with the same userid that apache is running. This can be a security issue if you are publically serving the same files. </li></ul><p><strong>Questions</strong></p>

<ul>    <li>Is it possible to &quot;approximate&quot; a virtual file system with <ul>        <li>additional metadata from xml file</li>        <li>dynamic (possible?) Apache aliases and mod_rewrites - probably no easy way to automate this without automatically rewriting .htaccess files</li>        <li>user authentication and name service switch from a flexible data structure </li>    </ul></li></ul><p><strong>External Links</strong>:

<a rel="nofollow" href="http://modauthmysql.sourceforge.net/CONFIGURE">Mod Auth Mysql</a>

<a rel="nofollow" href="http://www.ed.uiuc.edu/oet/network/webdavwinXP.html">Web DAV Windows XP</a></p><hr/><p>Apache is awesome web server software.</p>
<p><strong>mod_dav</strong>

Mod_dav provides file sharing not unlike Samba or AFP.</p>
<p><strong>mod_auth_mysql</strong>

Mod_auth_mysql is an Apache module which provides for authentication via MySQL.</p>
<p>The combination of Apache, mod_dav, and ssl is an incredible alternative and in my humble opinion improvement to a setup with a VPN (openVPN, PPTP, or L2TP/IPSec) with a Samba or AFP share.</p>
<p><strong>External Links</strong></p>

<ul>    <li><a href="http://modauthmysql.sourceforge.net/" onclick="window.open(this.href, '_blank'); return false;">http://modauthmysql.sourceforge.net/</a></li>    <li><a href="http://www.faqs.org/docs/Linux-HOWTO/Apache-WebDAV-LDAP-HOWTO.html" onclick="window.open(this.href, '_blank'); return false;">http://www.faqs.org/docs/Linux-HOWTO/Apache-WebDAV-LDAP-HOWTO.html</a></li></ul>
