---
title: The Importance of DNS and How to Leverage It
date: 2009-10-09
tags: access control,m0n0wall
---
A question was posted on the m0n0wall mailing list recently about using it to block LAN access to certain websites.

M0n0wall isn't designed to do this, but with some specific settings, it can. I've used [m0n0wall to block mistyped URLs from ending up at Agoga](http://www.soggyblogger.com/blog/2007/11/avoiding-agoga.html).

I also explained how I might achieve something similar like blocking all access to a domain that has multiple sub-domains and is multi-homed across several IP subnets:

<blockquote>
The reject rule is only faster with regard to the browser's response,
not the setup. The browser's "thinking icon" will keep spinning if its
request packets are silently dropped. If they are rejected, the
browser should immediately respond back to the user saying the page
cannot be displayed.

If I were trying to do what you describe, I would use the DNS
Forwarder -> Domain Override to point DNS queries to  *.example.com to
a private authoritative DNS server which responds with a single IP
address to which access through the firewall from the LAN is denied.
</blockquote>

