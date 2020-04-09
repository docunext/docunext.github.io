---
title: Csync2 on Debian
comments:
  - author: Dennis Vermaut
    email: Threesa@gmail.com
    url: http://www.eleanorcomputing.be
    date: 05/06/2008 09:51:33 AM
    text: >
      Hi, I'm also trying to install csync2 on my debian cluster, but I'm having some strange problems.<br/><br/>These are the steps I do:<br/><br/># aptitude install csync2<br/># openssl genrsa -out /etc/csync2_ssl_key.pem 1024<br/># openssl req -batch -new -key /etc/csync2_ssl_key.pem -out<br/>	/etc/csync2_ssl_cert.csr<br/># openssl x509 -req -days 600 -in /etc/csync2_ssl_cert.csr -signkey<br/>	/etc/csync2_ssl_key.pem -out /etc/csync2_ssl_cert.pem<br/># csync2 –k /etc/csync2.key.linuxCluster<br/># scp /etc/csync2.key.linuxCluster root@hac-c1n2:/etc<br/><br/>The configuration file:<br/><br/>group linuxCluster<br/>{<br/>	host hac-c1n1 hac-c1n2;<br/><br/>	key /etc/csync2.key.linuxCluster;<br/><br/>	include /home;<br/>      include /var/www;<br/>	include /srv;<br/>	exclude /srv/mysql-cluster;<br/>	include /etc/apache2;<br/>	exclude /etc/apache2/local.conf;<br/><br/>	action<br/>	{<br/>		pattern /etc/apache2/*;<br/>		exec "/usr/sbin/apache2ctl graceful";<br/>		logfile "/var/log/csync2.actions.log";<br/>		do-local;<br/>	}<br/><br/>	auto younger;<br/>}<br/><br/># scp /etc/csync2.cfg root@hac-c1n2:/etc<br/># /etc/init.d/openbsd-inetd restart<br/># /etc/init.d/apache2 restart<br/><br/>And then when I try to do<br/><br/>#csync2 -xv<br/><br/>I get the message Connection to host eth1 (SSL) ...<br/>Can't resolve peername.<br/>ERROR: Connection to remote host failed.<br/>Host stays in dirty state. Try again later ...<br/>Finished with 1 errors.<br/><br/>Why the fuck won't it work? Besides: why does it say the host is eth1??? The host isn't eth1, that's the interface ...<br/><br/>Your help would be much appreciated!
  - author: Albert
    email: albert.lash@savonix.com
    date: 05/06/2008 11:56:53 AM
    text: >
      Hey dennis - what happens when you "ping eth1" on both machines? csync2 is very picky about host names - and even after its changed. I also believe that I had to get the "hostname" command to output the same name as the one I put in the csync2.cfg file. I just checked my file and I have this at the top:<br/><br/><pre><br/>host dev-101;<br/>host (bart111);<br/>host (lisa132);<br/>host (little-valley-1);<br/></pre><br/><br/>Maybe you need some hosts that are in ()? The top one without parens is the primary.
  - author: Phil
    email: comdr_zod@gmx.de
    date: 08/14/2008 09:37:51 AM
    text: >
      While the documentation says something else... removing the "-eth0" string in the config file did the trick for me
  - author: rifdhy
    email: rifdhy.riyan@gmail.com
    url: http://fortunaglobal.com
    date: 04/27/2009 04:52:55 AM
    text: >
      Hi,<br/><br/>I am getting this error when trying to run csync2.I think this is something to do with network.Can some one help me?<br/><br/>root@host1:~ $ csync2 -x<br/>ERROR: Connection to remote host failed.<br/>Finished with 1 errors.<br/>You have new mail in /var/spool/mail/root<br/>root@host1:~ $<br/><br/>Thanks,<br/>Rifdhy.
  - author: Albert
    email: albert.lash@savonix.com
    date: 04/29/2009 01:10:59 AM
    text: >
      Do you have your host names and reverse ip's setup correctly? That was an issue for me.
  - author: Albert
    email: albert.lash@savonix.com
    date: 04/29/2009 01:11:24 AM
    text: >
      Check out this post too:<br/><br/><a href="http://www.docunext.com/blog/2009/01/25/csync2-part-ii/" rel="nofollow">http://www.docunext.com/blog/2009/01/25/csync2-part-ii/</a>
date: 2008-03-20
tags: debian,sqlite
---
I finally setup csync2 on debian - its nice! Its a simple sort of configuration tool that I need for now.

I followed this <a href="http://zhenhuiliang.blogspot.com/2006/04/csync2-is-so-cool.html">guide for setting up csync2 on redhat</a>, and then read the debian readme, which included instructions for creating keys:

<pre class="sh_sh">csync2 for Debian-----------------
You need to create an SSL certificate for the local Csync2 server.
You can create a certificate using the following commands:
openssl genrsa -out /etc/csync2_ssl_key.pem 1024
openssl req -new -key /etc/csync2_ssl_key.pem -out /etc/csync2_ssl_cert.csr
openssl x509 -req -days 600 -in /etc/csync2_ssl_cert.csr \        -signkey /etc/csync2_ssl_key.pem -out /etc/csync2_ssl_cert.pem
</pre>

Then I also had to use the command "csync2 -k /etc/csync2_ssl_cert.key".

I didn't have to do anything with openbsd.inetd other than restart it, and I'm not sure if that was even necessary. I initially typed in a peer's hostname wrong, so I had to remove the sqlite db in /var/lib/csync2/.

I've only done one test but I like it so far! Hopefully I can use this to alleviate my current dependency on subversion for configuration files.

UPDATE: I do have to restart openbsd-inetd to get csync2 to work right.

More notes: * hostnames are tricky - the names in the /etc/csync2.cfg file need to be the same as the /etc/hostname for each member of the cluster. * I'm finding it easier to go server by server, using non-volatile files, and I'm including /etc/csync2.cfg in the list of files to sync so I can update them later

¥

