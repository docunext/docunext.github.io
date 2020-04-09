---
title: ssh exchange identification Connection closed by remote host
comments:
  - author: Albert
    email: albert.lash@savonix.com
    date: 07/23/2010 01:50:38 AM
    text: >
      Turns out that hosts.deny and hosts.allow (tcp wrappers) can cause this as well. The auth.log file looks like this:<br/><br/>warning: /etc/hosts.allow, line 13: can't verify hostname: getaddrinfo(pool-96-xxx-xx-xx.washdc.fios.verizon.net, AF_INET) failed
date: 2009-02-05
---
I hate it when this happens. I'm not sure why it does, but when I try to connect to an ssh server, I get this response:

<pre>
ssh_exchange_identification: Connection closed by remote host</pre>

What's up with that? I think the ssh service has too many connections open - for whatever reason something has gone wrong with the server.

¥

