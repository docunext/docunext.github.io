---
title: pfsense versus m0n0wall
comments:
  - author: anthony
    email: anthony@bizroutesolutions.com
    date: 12/19/2007 03:02:55 PM
    text: >
      hey! i'm actually thinking of using Monowall over Pfsense since your right..simplicity really is a big factor.. but one question can I use monowall as a firewall for Voip? are there any changes or certain factors I need to consider..and How easy it is for a newbie like me? well anyways thanx for what you posted it really helped me a lot.
  - author: Albert
    email: albert.lash@savonix.com
    date: 12/19/2007 03:06:01 PM
    text: >
      Hey Anthony - yeah absolutely you can use m0n0wall for voip, it includes a traffic shaper. voip can be tricky behind nat though, what is your voip client? Have you checked out askoziapbx?
  - author: Jean
    email: jeantet@fieldsnetworks.com
    date: 07/12/2009 10:14:45 PM
    text: >
      Thanks for the comparison... a friend recommended I go with PFsense simply because it's "better" but now I know why... reading this was much easier than setting them both up and comparing myself :)
  - author: Albert
    email: albert.lash@savonix.com
    date: 07/12/2009 10:26:34 PM
    text: >
      Thanks for commenting Jean. Since I've written this article, I'm even more of a pfSense fan. It has rrd graphs of traffic that I use all the time, as well as really good wireless card support.
  - author: Kieran Osborne
    email: kieran_osborne@live.co.uk
    url: http://www.kieran-osborne.co.uk
    date: 12/16/2009 03:50:55 PM
    text: >
      Hey nice article! Ive recently setup a m0n0wall box after tinkering with IPCop and deciding it was to much for what i needed - Everything is running smoothly except when you reboot due to power down or what ever reason it looses trafic stats like how much data has been transfered and what not between lan / wan which is a bit anoyying concidering thats one of the main reasons i setup a dedicated box! - My question is does PFSense have a built in traffic logger, for example can you see useage stats for previous months / weeks or even days or is it like m0n0wall on the fly? I picked m0n0wall for its simple design but then i stumbled across PFSense.. Descisions descisions!
  - author: Albert
    email: albert.lash@savonix.com
    date: 12/16/2009 04:43:37 PM
    text: >
      It does! pfSense uses RRD to track network usage. Here's and example:<br/><br/><a href="http://www.docunext.com/wiki/PfSense#rrd_Graphs">http://www.docunext.com/wiki/PfSense#rrd_Graphs</a>
date: 2007-06-21
tags: debian,"load balancer",m0n0wall,pfsense,soekris
---
#### A Comparison of pfSense and m0n0wall

I spent some time tinkering around with pfsense today - its very nice. What I like best about it is that it has load-balancing built-in.

Compared to m0n0wall, it has many many more features. That proves problematic for very basic systems, like the soekris net4501 which only has 64mb of ram. m0n0wall runs great on that platform, but pfsense requires 128MB of RAM so its a no go.

m0n0wall does have simplicity going for it, as well as security. Simplicity is nice in many ways - fewer things can go wrong, etc., and with no ssh or servers other than the webGUI which can use SSL, you've got a tight box - even the console is very limited.

So I will stick with m0n0wall for now, and I'll keep trying out pfsense for its loadbalancing capabilities. I'm sort of leaning towards sticking with Debian for load balancing, but I'm open to new ideas.

UPDATE July 15, 2007:

I did a little research on the load balancer in pfSense. It is <a href="http://slbd.sourceforge.net/">slbd (server load balancing daemon)</a>, based on the FreeBSD 6.x packet filter (PF), and is not able to run on the current version of m0n0wall, which is FreeBSD 4 and uses ipchains for packet filtering. I'm now trying to find out if the newer beta of m0n0wall (which is Freebsd 6) uses PF, and can thus, theoretically use slbd.

¥

