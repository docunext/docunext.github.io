---
title: Bringing my pfSense Firewall Along
comments:
  - author: luis
    email: cs@m5it.com
    date: 01/31/2009 06:24:31 PM
    text: >
      Hello, I been looking in to the same kind of solution for some time. DO you happen to have any idea of the throughput the board can achieve. Thank you.
  - author: Albert
    date: 03/08/2009 02:48:08 PM
    text: >
      The alix with pfsense can now use the glxsb.ko module which supports hardware accelerated aes-128 encryption, so throughput is fantastic for the price of the device.<br/><br/>See <a href="http://www.docunext.com/2009/02/freebsd-glxsb/" rel="nofollow">http://www.docunext.com/2009/02/13/freebsd-glxsb/</a> for more information about this.
date: 2008-08-21
tags: none
author: Albert Lash
---
I've decided to pack up a small router to bring along with me and my laptop. Why? Because pfSense works so well of course! If I'm just using my laptop to surf the web, I'll just connect to whatever access is available, but if I'm traveling and want to dial back to my VPN, I'd love to be able to just connect to my local pfSense wireless, instruct it to connect to my VPN, and voila - good to go. How is this better than just using a software based VPN client? Its better because I'm always using different clients, reinstalling operating systems, and buying new equipment, but my network configurations don't change nearly as often. So why should I need to reconfigure a VPN client each time I change my laptop or <a href="http://www.neobookz.com/blog/">netbook</a>?

To accomplish this, I'm using the smaller and more portable <a href="http://www.pcengines.ch/alix3c1.htm">alix3c1</a> from pc engines. This little gizmo will come in handy, and I can't wait to try it out!

UPDATE: I've got my pfSense ALIX 3c1 going, with one of the wireless nics as the WAN port. However, I haven't gotten it to work yet. Might be a firewall issue of the network I'm on. :-(

UPDATE 2: Its working now! It was a problem with the network firewall.

¥

