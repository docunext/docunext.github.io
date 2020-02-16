---
title: LiquidWeb cPanel IPs and Subnets
date: 2011-03-25
tags: liquid web
---
I work for a web development company that hosts hundreds of websites on about a dozen dedicated servers.

Those servers all have cPanel installed on them, and in my humble opinion, that's an unfortunate fact. What can I say? I don't like cPanel. I think its a crutch that has long outlived its usefulness.

While it might be helpful for some web development / hosting companies, cPanel might be useful. For us, cPanel really ends up being more of a burden.

So recently, a coworker of mine and I convinced the rest of our team to try out some more modern hosting configurations. When I use the term " modern", I'm referring to things like virtualization (Xen), containers (OpenVZ), and proxies (Varnish, NGINX, lighttpd), for a start.

We shared our plans with LiquidWeb, stating that we felt the current situation was insufficient, and that we could do better. I was thrilled at their response - they were on board with our plans to move away from cPanel!

Since then, the experience has been a huge disappointment for me. Note: my experience with LiquidWeb is obviously not representative of all their customer experiences, nor am I aware of the complete relationship between LiquidWeb and the company I work for! With that said, let me explain what has disappointed me.

#### Painted Into a Corner

With a full explanation of our plans to build a virtualization platform, we asked LiquidWeb to assign us a block of IP addresses, and mentioned the possibility of colocating some hardware with them that they did not offer (specialized KVMoIP, switched PDU, and some PC Engines boxes for pfSense firewalls) - so that we could scale in the near future.

With that in mind, the salesperson (who shall remain nameless) tried desperately to upsell me on the rackspace, claiming that I needed to reserve the 42U rack near our dedicated server. I was really disappointed to be put in that position. I had a deadline, was not a decision maker, and most importantly, the rationale the salesperson was using was not technically sound and the line of questioning was undermining my confidence in their company.

After repeatedly explaining that I am not a decision maker (sales 101, right?), I finally requested that they simply deliver a basic firewall (Cisco ASA 5505), the ten IP addresses that were advertised would accompany the 5505, and our dedicated server.  I said that if they went ahead and implemented our needs in a way that would not scale or flex, we'd have to cross that bridge when we came to it.

To our dismay, we were not allocated our own /28 subnet or even 10 IP addresses. We were given two IP addresses within a gigantic /23 network! Ouch! Right off the bat, I found the circumstances curious. Who knew that bridge of disappointment was so close by!

My co-worker and I sounded the horn and complained voraciously, but ended up foraging ahead with the deadline in mind.

#### Is a Router-less Filtered Bridge a Firewall?

After spending some time reviewing the Cisco's configuration, I was surprised to find the management IP of the "firewall" in a non-contiguous relationship with the IP addresses that we were provided with.

I felt the implementation was totally unacceptable, and so we stopped our work and complained to LiquidWeb. They explained that the firewall was configured correctly and isolated our server from the internet, so we proceeded.

I dug around some more... the router was simply configured as a filtered bridge in the pool of the subnet, simply allowing some traffic to flow from the "outside" port, to the "inside" port. The "inside" network was defined as our two IP addresses. Huh, no routing AT ALL. Great, so without reinventing the wheel, we are stuck with a public IP address on our dedicated server. D'oh!!!

More to the point: ARGH!! I haven't never felt so obtusely boxed in!

Now for us to do any serious virtualization with this dedicated server, we have to do our own routing on our dedicated server. For me, its truly inexcusable for a company that offers so-called "enterprise" support to drop the ball. Thankfully, with virtualization, we can migrate to another dedicated box, hopefully one that is on a professional network. At LiquidWeb, sure, if they can and will do it.
