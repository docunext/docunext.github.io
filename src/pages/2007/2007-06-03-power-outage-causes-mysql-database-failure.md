---
title: Power Outage Causes MySQL Database Failure
date: 2007-06-03
tags: mdadm,mysql,power,ups
---
This morning I woke up to find on of my networks without a database. Why? I presume it was caused by an electrical failure in the town where the network is located. If not, it might have been the <a href="http://www.docunext.com/blog/2007/06/debian-testing-update-to-mdadm-253.html">upgrade to mdadm 2.5.3</a>.

It is somewhat ironic, because I just recently finished building a small <a href="http://www.docunext.com/blog/2007/05/how-to-build-a-fault-tolerant-internet-service.html">high-availability web server cluster</a> there, and am planning to build one for databases too.

It annoys me when this happens obviously, but I had bought a quality <a href="http://www.docunext.com/blog/2006/01/uninterruptible-power-supply-ups-documentation.html">uninterruptible power supply UPS</a> just for this reason.
