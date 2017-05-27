---
title: VaporSec Notes for Posterity
date: 2007-01-21
tags: none
author: Albert Lash
---
Found these wicked old notes about Vaporsec:

So far I have gotten the two computers to connect successfully when Rover was directly on the internet. I think the problem I was having thereafter was due to an incorrect shared secret. It looked as if this were the case because phase 1 was negotiating properly but phase 2 was not. I'm pretty sure that the router can handle this fine - it has a setting called IPSec passthru which seems to make sense.

If you start up the conf incorrectly, you'll want to do this:

<pre>sudo setkey -PF</pre>

