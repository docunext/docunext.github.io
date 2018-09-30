---
title: How I use Apache behind pfSense
date: 2007-12-03
tags: apache,network,pfsense
---
Apache can sometimes cause problems when configured certain ways in certain environments with certain clients.

Like FIN_WAIT_2.

If you setup Apache behind a pfSense firewall you might notice a lot of FIN_WAIT_2 states in your table. This isn't necessary, and as I understand it is caused by sloppy http clients that never send the FIN/ACK to close the tcp connection.

There are a few things I've done to alleviate this issue:

* Turn off KeepAlive in Apache
* Reduce the tcp timeout on the Apache server using sysctl  ( I use net.ipv4.tcp_keepalive_time = 1800 )
* Reduce the fin timeout (I use net.ipv4.tcp_fin_timeout = 20 )
* Change the firewall optimization setting to aggressive (but actually I've switched it back to normal for the time being)

The more I read about this, the more I feel its not a serious problem, unless you have several thousand FIN_WAIT_2 states. The one's I'm mostly confused about are the ones from the firewall to the server:

<pre>192.168.3.1:43147 -> 192.168.3.2:80</pre>

There are usually many of these, and I'm not sure exactly why there needs to be so many. I think it may be since I'm using the load balancer, instead of simple nat, which I think would directly use the web server's settings for keeping state.

Thankfully, pfSense has the "advanced" option for each firewall rule. I went into the rule for port 80, and reduced the timeout for that rule to 20, though I may reduce it more.

http://blog.pfsense.org/?p=137

http://www.dba-oracle.com/oracle_tips_tuning_the_apache_server.htm

http://www.mail-archive.com/support@pfsense.com/msg04114.html

http://library.pantek.com/Mailing%20Lists/httpd.apache.org/docs/att-4974/fin_wait_2.xml

