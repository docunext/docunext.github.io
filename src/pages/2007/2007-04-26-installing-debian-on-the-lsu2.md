---
title: Installing Debian on the NLSU2
comments:
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.92.61.253
    url:
    date: 04/26/2007 10:30:44 PM
    text: >
      I ended up trying again, and I think I got it to work this time because I increased the swap space. Not sure why, but the auto-partitioner sets up the slug with only 96MB, when it needs at least 128MB. I set up 256MB. The other partitions came to just a few gigs, and the home had approx 390GB.
date: 2007-04-26
tags: debian,linux,nslu2,slug
---
Today I installed debian on <a href="http://www.my-tech-deals.com/blog/2008/01/linksys-nslu2-price-drop.html">NLSU2</a>.  An NLSU2 is a device that lets you access a hard drive over a network.  We had some issues attempting to install Debian.  At first we suspected it was the fact that we removed the jumper block which limits the data transfer to 1.5 gbits per second.  After opening up the drive and putting the block back on, we discovered that this wasn't the case.  Upon further investigation we learned that the 400GB hard drive was too big, so we ended up using a 60gb.  Luckily after this, the installation worked.  All in all, the whole process took around an hour to complete.

<strong>Problems</strong>

1. The only problem we really ran into was the fact that the initial hard drive we were using was too large, and the partitioner would freeze at 33%, like this:


Though this could have been caused by the swap size. See comment below.

<strong>Solution</strong>

2. We swapped the 400GB HD and replaced it with a 60 GB HD to solve the space issue.

<strong>Insallation Process</strong>

<ol><li>Downloaded putty, which is a terminal client.</li><li>Started debian installation at aprox. 1:45</li><li>The partitioning process took around 15 minutes</li><li>Installed the base system from 2:20-3:05 (approx 1 hour)</li><li>Select and install software 3:07-3:08 (general system installed)
</li></ol>
Total time to install <a href="http://www.docunext.com/wiki/Debian">Debian</a> onto a Linksys <a href="http://www.my-tech-deals.com/blog/2008/01/linksys-nslu2-price-drop.html">NSLU2</a>: less than two hours (we have a pretty fast network).

¥
