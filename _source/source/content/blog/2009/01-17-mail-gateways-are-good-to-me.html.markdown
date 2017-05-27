---
title: Mail Gateways Are Good To Me
date: 2009-01-17
tags: none
author: Albert Lash
---
Sing along... mail gateways have been good to me so far...

Seriously though - I'm really liking email gateways. Just a postfix setup to relay (aka route) mail to different servers. Its kind of like an email firewall in a way. I am keeping some things in mind when configuring mine:* Need to keep an updated list of all recipients behind the gateway to prevent backscatter mail* Perdition!* Need to have a failover

What are the benefits? Easier administration, especially when it comes to defending against spam: greylisting, spamassassin, and dnsrbls are all consolidated, also making for a more efficient operation. :-)

