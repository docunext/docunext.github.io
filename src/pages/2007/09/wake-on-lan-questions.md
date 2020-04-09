---
title: Wake on LAN Questions
date: 2007-09-06
---
I've just setup a nice intel-based mini-server, and I'm wondering how the various functions of wake-on lan work.

From the manpage:       <B>wol</B> <B>p</B>|<B>u</B>|<B>m</B>|<B>b</B>|<B>a</B>|<B>g</B>|<B>s</B>|<B>d</B>...              Set Wake-on-LAN options.  Not all  devices  support  this.   The              argument  to  this  option  is a string of characters specifying              which options to enable.              <B>p</B>  Wake on phy activity              <B>u</B>  Wake on unicast messages              <B>m</B>  Wake on multicast messages              <B>b</B>  Wake on broadcast messages              <B>a</B>  Wake on ARP              <B>g</B>  Wake on MagicPacket(tm)              <B>s</B>  Enable SecureOn(tm) password for MagicPacket(tm)              <B>d</B>  Disable (wake on nothing).  This option clears  all  previous                 options.

But what do each of those options mean? Can I wake a computer by pinging it when the wol "u" setting is activated? How will the router / network switch know where to send the unicast message if the computer is asleep?

I guess that depends on the arp cache. But also, these are simple network messages, in my case anyway. The u and b settings didn't require a magic packet at all, just a ping sufficed.

So for activating everything, I'm testing to ensure that wake-on-lan is enabled for sleep state 3: <code>cat /proc/acpi/wakeup | grep 'ILAN' | awk '{ print $3; }'</code>
