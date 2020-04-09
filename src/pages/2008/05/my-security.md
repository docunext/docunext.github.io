---
title: My Security
date: 2008-05-14
tags: none
author: Albert Lash
---
I'm by no means a security expert, but after the Debian OpenSSL vulnerability, I still felt a little secure. Why? I have a bunch of "add-ons" setup on my servers.

There are only a few ssh servers accessible via public ip addresses, and those are restricted to certain network subnets and even single ip addresses thanks to m0n0wall and pfsense firewalls I have in front of all the servers. Those public ip addresses also use fail2ban to thwart brute force attacks, if I have a wider subnet open to ssh for dynamic ip addresses. Also thanks to m0n0wall / pfsense, most of the communications that goes on between my machines is via VPN. With regards to ssh-keygen, I always use a passphrase.

Still, I went through the process of regenerating keys on almost all my servers.

This episode reminds me of the challenge that I've faced with entropy / randomness from time to time - servers don't have keyboards or mice to generate randomness. FreeBSD has the high quality yarrow prng and can also gather entropy from the network, and while it is possible, most linux network drivers do not use network activity as a randomness source. Without a keyboard and mouse, there is still disk activity, but when compiling my own kernels, I <a href="http://www.docunext.com/">patch the drivers to offer network entropy as a source of randomness</a>.

Would upstream do the same? I have no idea, and due to my personality, I'm just not apt to go promoting the idea upstream either.

