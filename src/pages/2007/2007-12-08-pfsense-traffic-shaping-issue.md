---
title: pfSense Traffic Shaping Issue
date: 2007-12-08
tags: none
author: Albert Lash
---
I just ran into an issue with the traffic shaper on pfSense. I was downloading a large file from a server behind the firewall over the vpn, and it consumed all the bandwidth I made available in the parent queue. I had set http to be the higher priority, but it still was not getting any bandwidth AT ALL. I'm not sure if that was caused by the tcp settings on the server, or the traffic shaper, but regardless, I found a solution.

Rather than setting the default queues to have 1% of the bandwidth as a minimum, I set it to have 1000kb, while the total parent queue has 3000kb. Not perfect, but better.

I also just noticed that the "higher priority" queue that I created only had a minimum requirement of 1kB. ???? What the....

I still think the lack of bandwidth for my higher priority queue was caused by the fact that the download was occurring over the ipsec vpn.
