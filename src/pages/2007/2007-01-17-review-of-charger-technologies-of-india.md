---
title: Review of Charger Technologies of India
date: 2007-01-17
tags: none
author: Albert Lash
---
I signed up with Charger Technologies on January 16th, 2007 at approximately 1PM, EST. I paid $5 via PayPal, using a Discover Credit card.

They emailed the account information approximately 11 hours later. They had promised within 24 hours, so they kept their promise! Everything appears as they had described, and so far I'm pleased with the service. I have two domains there, and setting them up was easy. The one thing that did strike me as odd is that the first nameserver does not respond to dig queries. For example, if I try the following

<pre>dig proxy-sys.com @ns1.chargertek.in
</pre>
I receive a timeout, but ns2.chargertek.in works fine. Inasmuch, I receive a DNS error when I try to load a page I host there through Windows XP, running within "Q" (QEMU) on my Macbook. Not sure what is causing this error, so I will check it out again when I have access to a native Windows XP machine.
