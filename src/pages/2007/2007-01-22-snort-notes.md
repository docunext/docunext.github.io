---
title: Snort Notes
date: 2007-01-22
---
<h3 id="toc0">What is Snort?</h3><p>Snort is a Network Intrusion Detection System (NIDS). Snort can operate in a few different modes, we use it in NIDS mode. This means that Snort listens, captures, and anaylzes all data that comes across it's interface(s). It will alert us after it compares signature data on the host machine to the packet data.</p><h3 id="toc1">Snort MySQL</h3><p>We are also using another feature of Snort. Snort has MySQL capabilities built in. You just have to compile it too support MySQL. The primary reason that I do this is, to use a front end. It's much easier for a front end script

too look in a database than a very large flat file. Due to the amount of internet threats these days, your logs can fill up very fast. ACID, BASE, and Squil are frontends that are currently avaliable. They primarly do the same thing, let you look at what Snort stores as an alert. Which is what you've told it too do in the snort configuration. These are just a very easy way too see who's attacking your network, which ports/services, times, days, and other data in an easy fashion.</p><h3 id="toc2">Snort Related Websites:</h3><p><a rel="nofollow" href="http://www.sun.com/bigadmin/features/articles/intrusion_detection.html">http://www.sun.com/bigadmin/features/articles/intrusion_detection.html</a>

RULES/SIGNATURES:

<a rel="nofollow" href="http://www.bleedingsnort.org/">Bleeding Snort</a>

OFFICIAL SNORT:

<a rel="nofollow" href="http://www.snort.org/">Snort</a></p>
