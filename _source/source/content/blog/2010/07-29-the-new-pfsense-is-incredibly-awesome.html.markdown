---
title: The New pfSense is Incredibly Awesome
date: 2010-07-29
tags: ipsec,openvpn,pfsense
---
The latest version of pfSense is version 2.0 \*beta\* and it includes a downright bevy of kickass improvements and totally new functionality.

I tried it out a few months ago and was impressed, but only recently delved into the treasure trove of networkings' inner sanctum of great power.

No hyperbole here. Yes, its *that* good, but for the picky ones among us, its easy to find where its definitely still in beta.


#### Virtual Private Networks

Though I can't get the newer version of ipsec-tools / racoon on pfSense 2.0 to work with pfsense 1.3:

<pre class="sh_log">
Jul 30 00:20:56 	racoon: []: ERROR: no configuration found for x.x.x.x.
Jul 30 00:20:56 	racoon: []: ERROR: failed to begin ipsec sa negotication.
</pre>

Looks like I can get it to work if I set both endpoints to have static IP addresses, but not when one is a dynamic IP and I try setting one up as a mobile client.

Speaking of which, the IPSec interface is way different, though I'm not sure if that's a good thing. More specifically, each tunnel has a separate screen for phase 1 and phase 2 - so there is a whole lot more clicking going on. It seems that it was done to allow one gateway to have multiple phase two entries, but does that happen very often?

I'm really starting to like openVPN, so I'm going to use that for networks and clients with dynamic ips.

#### Traffic Shaper

The traffic shaper in 1.3 was pretty good, and I'm not sure of the face lift in version 2.0:


#### Multi-Wan

The multi-wan feature has greatly improved. I'm not taking full advantage of this feature quite yet, but it did come in useful this past week as a manual fail-over for a busted router.

#### glxsb:

"The AMD Geode LX Security Block will accelerate some cryptographic functions on systems which have the chip. Do not enable this option if you have a Hifn cryptographic acceleration card, as this will take precedence and the Hifn card will not be used. Acceleration should be automatic for IPsec when using Rijndael (AES). OpenVPN should be set for AES-128-CBC."

Awesome!!

**UPDATE**: I've started a new wiki page focusing solely on [pfSense 2](http://www.docunext.com/wiki/PfSense_2).

