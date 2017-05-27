---
title: Web Filtering with Squid and ipfw
date: 2009-10-10
tags: caching,squid
---
The m0n0wall mailing list has had a lot of talk about web filtering lately and I just had this to contribute:

"I love Squid for stuff like this. I hope in the future they drop the reverse http accelerator functions and leave that to varnish instead, but I'm not holding my breath.

If you setup squid, you get a nice caching proxy too!

I haven't tried it, but I would venture to guess that squid can also prevent direct access to IP addresses without a hostname. A potential configuration might block access to example.com as well as the IP address that example.com points to, not because of which IP address it is, but because it is only an IP address.

A combination of (squid|dan's guardian|untangle) + ipfw is the best solution I can think of setting up without having to invest (waste?) an inordinate amount of additional work.

Was there a question about where to put the filtering proxy? I'd put it anywhere on the lan and set it up as a transparent proxy and use ipfw to route http requests through it. If I had convenient global control of all the workstations, I would have them access a proxy configuration file or specifically configure the proxy settings for each workstation.

I prefer keeping configurations like this on the network as opposed to workstations, but that's not always possible for me.

Lastly,whenever I setup a proxy server, I view its security and access control configuration of the utmost importance."

