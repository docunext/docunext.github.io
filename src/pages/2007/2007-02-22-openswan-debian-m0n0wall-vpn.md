---
title: OpenSwan Debian M0n0wall VPN
comments:
  - author: Paul Wouters
    email: paul@cypherpunks.ca
    url: http://www.openswan.org
    date: 02/22/2007 10:54:02 PM
    text: >
      you need to disable Opportunistic Encryption when using netkey. on modern openswan's this is done by adding the following line at the end of your ipsec.conf:<br/><br/>include /etc/ipsec.d/examples/no_oe.conf
date: 2007-02-22
tags: none
author: Albert Lash
---
I'm setting up a VPN site-to-site link from a m0n0wall firewall to a debian server:

<a href="http://doc.m0n0.ch/handbook/examplevpn-freeswan.html">http://doc.m0n0.ch/handbook/examplevpn-freeswan.html</a>

<a href="http://www.freeswan.org/freeswan_trees/freeswan-1.99/doc/manpage.d/ipsec.conf.5.html">http://www.freeswan.org/freeswan_trees/freeswan-1.99/doc/manpage.d/ipsec.conf.5.html</a>

Its not working... though one the freeswan side I'm getting this error:

<pre>FATAL: Error inserting xfrm4_tunnel (/lib/modules/2.6.16-xen/kernel/net/ipv4/xfrm4_tunnel.ko): Resource temporarily unavailable</pre>

Time to buy another netgate m1n1wall!

¥

