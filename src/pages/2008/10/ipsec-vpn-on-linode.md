---
title: IPSec VPN on Linode
comments:
  - author: Zac
    email: zac@z4c.us
    date: 06/24/2011 03:43:07 PM
    text: >
      I'd be interested in a write-up on how you did this. I'm primarily interested in setting up IPSec on Linode so that I can force any iOS devices I own to use IPSec while I'm on any sort of public network. Any guidance would be appreciated!
  - author: Albert
    date: 06/24/2011 09:07:52 PM
    text: >
      Hi Zac, thanks for commenting. I actually don't use IPSec with Linode anymore. These days I'm using OpenVPN. Is there an OpenVPN client for iOS? I have to imagine there is one...
date: 2008-10-26
tags: vpn
---
I was able to setup a IPSec VPN on a Linode virtual server without too much trouble. They make it easy to add an extra network device as well as a private IP address, so after that, I did the usual /etc/racoon/racoon.conf to match up with a pfSense box on the other side, and voila!

One thing I overlooked was that I only want my single private IP address to be able to connect to my private network, not the entire Linode private IP space! I fixed that, but also need to add more rules to my firewall to make sure that other Linodes are securely blocked from mine.

This is a great thing because I'm now able to easily expand on my main network.

¥

