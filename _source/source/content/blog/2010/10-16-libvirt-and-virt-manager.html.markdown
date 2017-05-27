---
title: Libvirt and virt manager
comments:
  - author: Russell Coker
    email: russell@coker.com.au
    ip: 59.167.196.118
    url:
    date: 10/24/2010 05:06:57 AM
    text: >
      Yes, please do a detailed comparison of libvirt and Eucalyptus!  I've been wanting to do that for a while but I'll probably never get time.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.96.185.154
    url:
    date: 10/27/2010 07:24:06 AM
    text: >
      Hi Russell, Thanks for chiming in!<br/><br/>I expect to start work with Eucalyptus next week and will then have enough information to start my subjective comparison.<br/><br/>Albert
date: 2010-10-16
tags: networking
---

I've only used libvirt and virt-manager for about an hour an so far I have to so say it is totally awesome!

Well finally I did run into something a little wacky... it appears that it is very root-centric, meaning that I'm only able to use Usermode networking unless I launch virt-manager as root.

Might I avoid this by adding myself to the netdev / libvirtd groups? We'll see shortly.

Doesn't appear to be happening. I'm guessing this is better setup with a machine that does not use NetworkManager.

I hope to do a comparison of libvirt and Eucalyptus very soon.

**UPDATE**: I won't be able to review Eucalyptus as we ended up choosing VMWare instead. I would have preferred an open source solution, but the decision was not mine to make.

¥

