---
title: LVS ipvs FIN WAIT
comments:
  - author: Jeff
    email: jrobill@mail.cslf.org
    date: 10/02/2007 12:39:57 PM
    text: >
      any chance you can help me with my first ha attempt?<br/><br/>I have two ubuntu servers installed with ipvsadm ldirectd and heartbeat.  I have two iis servers running.    All of this is in vmware server, so its all on a virtual network in vmware.<br/><br/>The ultramonkey documentation for debian, lots of websites, and this link <a href="http://www.puryear-it.com/pubs/conferences/lisa2003/download-lisa/lvs-3.ppt#295,43,LVS-DR" rel="nofollow">http://www.puryear-it.com/pubs/conferences/lisa2003/download-lisa/lvs-3.ppt#295,43,LVS-DR</a>  all helped get it started, but it still doesnt work.<br/><br/>The virtual IP is created.  When I looked ipvsadm -l -n --stats it shows<br/><br/>connections on the VIP, and both RIP servers.   The load balancing appears to be working perfectly as the connections and inpkts are spread across both RIP1 and RIP2.    However, there is zero outpkts for any of the connections.<br/><br/>No matter how I configure this it never sends anything out.<br/><br/>Thanks in advance for any advice you can offer.
  - author: admin
    email: albert.lash@savonix.com
    date: 10/02/2007 01:56:30 PM
    text: >
      Hi Jeff, its been awhile since I setup my firs ultramonkey install... nothing springs to mind.
  - author: admin
    email: albert.lash@savonix.com
    date: 10/02/2007 02:47:51 PM
    text: >
      Hi Jeff, was just thinking I should ask what you are trying to accomplish? It you are doing basic load balancing, check out pfsense. It uses the pf packet filter from openbsd and works really well for simple setups, and I believe there is a VMWare image with two setup. Let me know what you think.
  - author: Albert
    email: albert.lash@savonix.com
    date: 12/01/2007 08:36:59 AM
    text: >
      I've been using pfSense more and more in my operations, and I just added a link to their blog which features a diagram of TCP states I found helpful.<br/><br/>In the pfSense load balancer, I was seeing a lot of fin_wait states too, so I switched from tcp monitoring to icmp. Not sure how or if that will change anything, but I imagine it will reduce load on the pfsense machine a little, at the cost of the heartbeat being slightly less accurate - in that the icmp could be "alive", but the load balanced web server be down. In the case I'm referring to in this context, I'm merely load balancing across two nic cards on one server, so if the tcp service is down for one, its most likely down for both. On the flip side, if the icmp is down for one, it would mean tcp would be down for the same one, but not necessarily icmp or tcp for the other.
  - author: Fleish
    email: underhill@fleish.org
    date: 01/02/2008 01:37:12 PM
    text: >
      Jeff - it sounds like your setup is using LVS_DR ... the incoming packets go through the IPVS code ... but the outbound packets are simply routed back out the network stack ... hence you won't see any outgoing packets/connections in the IPVS tables.
  - author: Albert
    email: albert.lash@savonix.com
    date: 01/04/2008 05:23:51 PM
    text: >
      Hi Fleish - thanks for commenting and helping out Jeff with the LVS_DR setup.
date: 2007-06-25
tags: pfsense,tcp
---
I setup heartbeat and ldirectord recently for use with ipvs, basically a manually configured ultramonkey.

I was running into issues with the system being very very slow, when I believed it should be very very fast. I did some debugging and found lots of FIN_WAITS:

<pre>/sbin/ipvsadm -L -n --connection
IPVS connection entries
pro expire state       source             virtual            destination
TCP 01:58  FIN_WAIT    74.94.149.33:51617 192.168.10.235:80  192.168.10.12:80
TCP 01:58  FIN_WAIT    74.94.149.33:51622 192.168.10.235:80  192.168.10.12:80
TCP 01:58  FIN_WAIT    74.94.149.33:51619 192.168.10.235:80  192.168.10.12:80
TCP 01:58  FIN_WAIT    74.94.149.33:51618 192.168.10.235:80  192.168.10.12:80
TCP 01:58  FIN_WAIT    74.94.149.33:51621 192.168.10.235:80  192.168.10.12:80
TCP 01:58  FIN_WAIT    74.94.149.33:51620 192.168.10.235:80  192.168.10.12:80
</pre>

The <a href="http://www.austintek.com/LVS/LVS-HOWTO/HOWTO/LVS-HOWTO.persistent_connection.html">LVS persistence document</a> mentions lowering the expire for testing:

<pre>ipvsadm --set 5 4 0</pre>

Works fine for me, and speeds up the service. I'll keep monitoring for unwanted side effects. For updating Wordpress posts, the process required more time. Here's what I'm using now:

<pre>ipvsadm --set 60 10 2</pre>

Related info:

<a href="http://readlist.com/lists/linuxvirtualserver.org/lvs-users/0/4799.html">This link seems to suggest problem is caused by MTU</a>

<a href="http://www.austintek.com/LVS/LVS-HOWTO/HOWTO/LVS-HOWTO.weird_hardware.html">This link has several LVS related switch hardware issues (Cisco)</a>

<a href="http://www.vs.inf.ethz.ch/edu/WS0102/VS/TCP-State-Diagram.html%22">http://www.vs.inf.ethz.ch/edu/WS0102/VS/TCP-State-Diagram.html</a>

<a href="http://blog.pfsense.org/?p=137">http://blog.pfsense.org/?p=137</a>

<a href="http://www.docunext.com/blog/2007/06/lvs-ipvs-fin-wait.html">How I use Apache behind pfSense (including FIN_WAIT gotchas)</a>

¥

