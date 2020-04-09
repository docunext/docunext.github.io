---
title: racoon ERROR can t start the quick mode there is no ISAKMP SA
date: 2008-08-26
tags: none
author: Albert Lash
---
Not sure what's up with this error - I'm trying to connect to my office VPN from the <a href="http://www.bethesda-notes.com/blog/2008/08/rockville-public-library.html">Rockville, MD library</a>, using a <a href="http://www.docunext.com/2008/08/21/bringing-my-pfsense-firewall-along/">portable pfSense gateway</a>.

I tried changing from aggressive to main line mode, but now I get:

<strong>racoon: ERROR: not acceptable Identity Protection mode</strong>

Right, you must use aggressive, according to the m0n0wall docs by Chris:

<blockquote>You must use aggressive mode, as only IP addresses can be used as identifiers in main mode.</blockquote><sup>[<a href="http://doc.m0n0.ch/handbook/faq.html">*</a>]</sup>

I never was able to get the VPN to work from the library, probably a firewall issue.

