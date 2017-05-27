---
title: Multiple A Record Priorities 
date: 2007-08-30
tags: dns
---
I often wondered whether priorities assigned to multiple a records for the same dns zone has any affect. I didn't think so, and also thought that priorities only really matter for MX records (and thanks to spammers, they don't matter that much their either!).

I did a little research today and found someone who agrees:

http://www.webhostingtalk.com/showthread.php?t=555564

So when using multiple a records, the priority and preference values have no meaning.

I also found a clearer nomenclature for "multiple a records": round robin dns.

http://en.wikipedia.org/wiki/Round_robin_DNS

In my experiments with round robin dns, it turns out not every client can figure it out, so you really do need something like carp or bgp to step in when there is a network outage. Buckets. :-(

I just found this:

<a href="http://www.isc.org/index.pl?/sw/bind/docs/bind-load-bal.php">http://www.isc.org/index.pl?/sw/bind/docs/bind-load-bal.php</a>

Towards the end of the paper is describes SRV records, and how they can be used for DNS load balancing. However, SRV records aren't used by http clients (browsers) at the moment.

