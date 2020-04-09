---
title: pfSense local load balancer
comments:
  - author: Joe Crain
    email: joec@clientworks.com
    date: 04/22/2011 03:33:34 PM
    text: >
      Hello, I am trying to configure a local load balancer and I can't seem to get it working.  I was hoping you could elaborate some more on your config or possibly show this setup as an example using hosts/IPs:  How are your interfaces configured?  You mention bridging the LAN/WAN but how are you using the bridge device?  Also what version of pfSense are you using?<br/><br/>Thanks for posting!
  - author: Albert
    email: albert.lash@savonix.com
    date: 04/23/2011 10:47:43 AM
    text: >
      Hi Joe,<br/><br/>The load balancer on pfSense 2.0 is MUCH improved, but MUCH different. On the 2.0 release candidate I was using, it wasn't actually done. I had to manually enable it to confirm my tests. I am really impressed with it, and eager to use it, but am not currently using it in production because it does need more work.<br/><br/>Hope that helps!<br/><br/>Albert
date: 2007-09-06
tags: load balancer,pfsense
---
I just setup a load balancer for my lan using **pfSense**. Its kind of a strange setup, because the LAN and WAN ports are on the same network, but it works. I have the LAN set to bridge with the WAN, and the WAN has a private ip in my lan, with its gateway set to the same as the rest of the hosts on the lan.

Why did I do this? Well I am often reconfiguring things on my lan, such as my squid proxy-cache and my dns server, and even my database services. By using a virtual server ip address, I can reorganize things so much more easily. Thanks pfSense!

Further setup details:

* Virtual server ip is the wan ip
* Clients should connect to that ip (I use a nameserver to provide one more level of abstraction)
* Under Setup -> Advanced, I checked "suppress arp messages", as well as "sticky connections". Sticky connections keep a connection through the load balancer on the same ip in the pool.

¥

