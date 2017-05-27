---
title: jEdit Problem java.net.socketexception network is unreachable 
comments:
  - author: Marcello Messori
    email: m.messori@re-lab.it
    ip: 155.185.248.29
    url:
    date: 01/20/2010 08:37:04 AM
    text: >
      That was the problem! Thanks
  - author: Tom
    email: tpower21@gmail.com
    ip: 207.192.71.184
    url:
    date: 05/04/2012 04:10:16 AM
    text: >
      Ta!
date: 2009-12-25
tags: bugs,debian,java,jedit
---
This one had me stumped! Thankfully this [Debian bug report about netbase setting net.ipv6.bindv6only=1 in /etc/sysctl.d/bindv6only.conf](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=560044) cleared up the problem for me.

The symptoms included the error:

<pre class="sh_sh">
java.net.socketexception / network is unreachable
</pre>

whenever I tried to refresh the mirror list, update a plugin, or install a plugin. The problem was fixed for me after I ran the command suggested on the Debian bug page:

<pre class="sh_sh">
sudo sed -i 's/net.ipv6.bindv6only\ =\ 1/net.ipv6.bindv6only\ =\ 0/' \
/etc/sysctl.d/bindv6only.conf && sudo invoke-rc.d procps restart
</pre>

¥

