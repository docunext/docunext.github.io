---
title: Debian dhclient ath oddity 
comments:
  - author: Albert
    email: albert.lash@savonix.com
    ip: 71.163.55.98
    url:
    date: 07/04/2009 11:30:11 AM
    text: >
      This keeps happening, I wish I knew the fix.
date: 2009-02-26
tags: debian,networking
---
Just noticed that my dhclient was running about once every 10 seconds. Not good:

<pre class="sh_log">Feb 26 23:06:19 wrk-240-gr dhclient: DHCPREQUEST on ath1 to 192.168.1.1 port 67
Feb 26 23:06:35 wrk-240-gr dhclient: DHCPREQUEST on ath1 to 192.168.1.1 port 67
Feb 26 23:06:47 wrk-240-gr dhclient: DHCPREQUEST on ath1 to 192.168.1.1 port 67
Feb 26 23:06:55 wrk-240-gr dhclient: DHCPREQUEST on ath1 to 192.168.1.1 port 67
Feb 26 23:07:10 wrk-240-gr dhclient: DHCPREQUEST on ath1 to 192.168.1.1 port 67
Feb 26 23:07:22 wrk-240-gr dhclient: DHCPREQUEST on ath1 to 192.168.1.1 port 67
</pre>

I restarted it, but it was still happening, so I stopped it, and the daemon was still running. I killed the processes and then started it, and it now seems OK. Just have to keep my eye on it.

<b>UPDATE:</b> I'm now restarting network-manager to try and fix this.

¥

