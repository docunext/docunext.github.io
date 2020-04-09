---
title: NewServers etc rc.local and what about the Hostname 
comments:
  - author: Chris Valean
    email: chris@newservers.com
    url: http://newservers.com
    date: 04/07/2010 09:36:29 AM
    text: >
      If I replied to your previous post and while I'm here I'll do a quick reply here as well. :)<br/><br/>NewServers does very little modifications to an OS before it's deployed, we do not want to customize the OS to the point where it can produce incompatibilities with customer's configuration.<br/><br/>This is available for the iptables configuration and rc.local - which runs only at first boot after a restore, then it's all your to modify since you have full root/Administrator access to the servers.<br/><br/>You don't have to feel constrained, we can detail you the changes and additions that we do to an OS so you can see that there are really no important changes compared to a clean CD install for eg.<br/>Again, feel free to contact us via Live Chat or tickets at any time.<br/>Regards,<br/>Chris Valean<br/>MCSA, MCITP, MCTS, Tech Support Team<br/>NewServers Inc. <a href="http://newservers.com" rel="nofollow">http://newservers.com</a>
date: 2009-10-21
tags: dedicated servers,modules,newservers
---
Could it be that I'm not able to edit /etc/rc.local??

No, seems to be working OK.... I just tested it by adding:

<pre>
touch /tmp/doesthiswork
</pre>

to the end of it and rebooted. After rebooting, the contents of /etc/rc.local remained the same and doesthiswork appeared in /tmp/.

Maybe if something gets messed up and it can't contact any networks, there are some overrides. I had previously used it to remove a bunch of unwanted modules which weren't getting blocked by /etc/modprobe.d/blacklist.

**Hostname**
--------------------

Currently the hostnames of the machines I've used from NewServers is something like: *server1866.newservers.com*.

What if I wanted to setup a mailserver and needed a reverse IP DNS (PTR) entry? I'd want that entry to match my machine's hostname.

To prep, I setup the /etc/hostname file, and then added the corresponding line into /etc/hosts. Let's see if it persists through a reboot. It should, but I want to make sure.

NOTE: Its nice that changes to the NewServers firewall setup persist through reboots. The iptables state is saved to /etc/sysconfig/iptables. I wonder, is that a NewServers directory or a CentOS directory? Looks like its a CentOS or wider directory, but I don't think its used on Debian. Nope, just checked.

My hostname setting did not persist across a reboot. Hmmm. What's up with that?

For some reason, while using the NewServers.com machine, I feel constrained by the stuff that's already there. I am impressed with their technical knowhow, but I'm skeptical of anything that hasn't been thoroughly reviewed by peers - hence the reason why I love open source software!

¥

