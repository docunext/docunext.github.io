---
title: 2006 2007 Cryptography News
date: 2007-09-10
tags: alix,amd,encryption,geode
---
In the past few years, there's been some exciting news in the world of cryptography. As mentioned in our post about the <a href="http://www.docunext.com/2007/09/via-padlock.html">VIA padlock, the use of the padlock as an engine for OpenSSL yields some very impressive results</a>.

Then last night I realized that the AMD Geode LX800 (the same chip used in the new <a href="http://www.docunext.com/2007/07/alix.html">PC Engines ALIX boards which I've been blogging about</a>) also has a hardware random number generator (RNG) as well as a built in AES Security Block engine. That is really cool!

Riding on the excitement that the AMD Geode LX800 has these great new features, I did some serious diggin' in the net and found some even more cool stuff! :-)

Among the finds:

* <a href="http://www.openbsd.org/cgi-bin/man.cgi?query=glxsb&sektion=4&arch=i386">glxsb(4) - Geode LX Security Block crypto accelerator for OpenBSD</a>
* Linux CryptoAPI now includes support for using the Geode LX Security block for its AES engine (as of 2.6.20?):

<pre>
59           Say 'Y' here to use the AMD Geode LX processor on-board AES
60           engine for the CryptoAPI AES algorithm.
61
62           To compile this driver as a module, choose M here: the module
63           will be called geode-aes.</pre>

So that got me wanting to test it out, but the linux CryptoAPI is low-level, and doesn't have many userland tools, like OpenSSL, and OpenSSL doesn't have an engine driver for it, nor am I aware of a way to get OpenSSL to use the CryptoAPI instead of its internal algorithms.

So I did some more research, and found information on <a href="http://ocf-linux.sourceforge.net/">how to get OpenSSL to use the linux CryptoAPI as its engine</a>.

Here's information on how to get <a href="http://www.docunext.com/wiki/My_Notes_on_Patching_2.6.22_with_OCF">your linux kernel patched with the ocf crypto device, especially good for use with AMD Geode lx800 processors</a>.

#### What processors to use where

At this point in time, to design some heavy duty infrastructure, I would use the following chips in the following ways:

* **AMD Geode LX800** - firewalls / ipsec vpn / layer 4 load balancer nodes because of aes security block and low power, no fan, perfect for stable embedded devices
* **Via C7** - SSL offloaders / front line web servers / layer 7 load balancers - easy integration with openSSL for "<a href="http://www.logix.cz/michal/doc/article.xp/padlock-en">wicked fast encryption</a>" (Michal Ludvig is from the Czech Republic but his use of "wicked" suggests he's from New England... interesting.) - the C7 has great power utilization and can handle a decent amount of RAM (about 2GB I think), very small CPU cache though so not appropriate for directly interacting with storage facilities
* **Intel Celeron** - A relatively low powered and low-cost cpu which has access to some great motherboards (some with on board gigE) and high amounts of RAM (up to 8GB I believe, at least 4BG). No encryption acceleration or hardware random number generator limits the flexibility of the chip though.

Because the AMD Geode and Via C7 chips are so low power and security centric, they are my choice for high-availability failover perimeter systems. Behind them, the intel celeron and at least one corresponding motherboard can handle sleep states very well in linux, and could potentially be used to setup an energy efficient, scalable load-balance farm. When demand is high, they wake, bake, and serve, and when demand is low, they nap. Sounds good, right?

<a href="http://www.docunext.com/wiki/PfSense_test_results_of_the_padlock_kernel_driver_on_a_VIA_C7">PfSense test results of the padlock kernel driver on a VIA C7</a>

