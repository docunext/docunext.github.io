---
title: Snort
date: 2006-12-09
tags: none
author: Albert Lash
---
After my post on blocking bad bots, I remembered snort. While snort doesn't do any blocking, it does detection like the best of them. I got it up and running on debian in under 15 minutes following the instructions that come with Debian, and this page:

<a href="http://www.debian-administration.org/articles/318">Using the 'snort' Intrusion Detection System</a>

<a href="http://www.bleedingsnort.com/">http://www.bleedingsnort.com/</a>

<a href="http://www.snort.org/docs/setup_guides/deb-snort-howto.pdf">Debian Snort PDF</a>

Here's what I'm thinking for a multi-layered approach to network security:

1. iptables firewall
2. postfix - dnsbl for proxies and open relays
3. fail2ban to watch logs - ssh (auth), email (spam, auth), web (auth)
4. libapache2-mod-ifier to check bad web requests (bots, worms)
5. snort to watch everything else and make sure nothing else improper is going on

This mostly focuses on web, email, and ssh, which happen to be highly popular network services. Beyond that, I'll have to check out what is available for ldap, voip, jabber, and more.

