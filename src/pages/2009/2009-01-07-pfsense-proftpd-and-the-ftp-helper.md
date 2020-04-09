---
title: pfSense ProFTPd and the FTP Helper
comments:
  - author: Gwen
    email: gwen@nospam.net
    date: 10/29/2009 09:47:39 AM
    text: >
      Thank you, thank you, thank you. I have been struggling with this for over a week now.
  - author: Albert
    email: albert.lash@savonix.com
    date: 10/30/2009 03:12:30 PM
    text: >
      Hi Gwen,<br/><br/>I'm glad you found this post helpful. I still wrestle with ftp from time to time and found an awesome project I'm trying to revive and get included into debian:<br/><br/><a href="http://www.proxy-sys.com/blog/ftpproxy/">http://www.proxy-sys.com/blog/ftpproxy/</a><br/><br/>Essentially its a REAL ftp proxy, not just a firewall workaround. When I say REAL ftp proxy, I mean it can connect FTP users to different back-ends based on their username.<br/><br/>Actually, I just checked out the site:<br/><br/><a href="http://www.ftpproxy.org/">http://www.ftpproxy.org/</a><br/><br/>and it looks like the maintainer has published two new releases - the first since 2005. Awesome!!
date: 2009-01-07
tags: fail2ban,pfsense
---
I'm not a big fan of the FTP helper, but in some cases it works. One problem I have with it is that proftpd ends up only having connections from the gateway ip address, so it does not log the source ip address.

To do away with the ftp helper and support passive ftp transfers, I found this <a href="http://devwiki.pfsense.org/FTPTroubleShooting" rel="nofollow">pfSense FTP Trouble Shooting page</a> helpful. In a nutshell, I did the following things:

<ul><li>Disabled the FTP userland helper for all interfaces.</li><li>Specified the masqueraded ip address and a limited port range in /etc/proftpd/proftpd.conf</li><li>Port forwarded port 21 and the port range in pfSense to the proftpd server</li></ul>

It works! I'm planning to install fail2ban now that I have ip addresses I can ban! :-)

¥

