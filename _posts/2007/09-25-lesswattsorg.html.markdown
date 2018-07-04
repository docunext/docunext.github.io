---
title: LessWatts.org
comments:
  - author: Russell Coker
    email: russell@coker.com.au
    ip: 220.237.147.110
    url: http://etbe.coker.com.au
    date: 01/26/2008 01:21:52 AM
    text: >
      Can you substantiate your claim that hard drives wear out after being stopped and started repeatedly?<br/><br/>I would expect that drives with such a feature are designed to have it used without dying.<br/><br/>The last time I had an opportunity to ask a senior person at a hard drive manufacturing company about such things I was told that they made drives which were designed to perform any combination of operations repeatedly for the duration of the warranty period...
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 01/26/2008 11:18:31 AM
    text: >
      Hi Russell, I haven't done any testing myself, but I've read a lot of materials concerning the matter. For hard drives, there are a few usage measurements, kind of like mileage in a automobile: hours of operation and start / stop cycles. Here is a link to Wikipedia which should help:<br/><br/><a href="http://en.wikipedia.org/wiki/Hard_disk#Landing_zones_and_load.2Funload_technology" rel="nofollow">http://en.wikipedia.org/wiki/Hard_disk#Landing_zones_and_load.2Funload_technology</a><br/><br/>You are absolutely correct about the warranty period though, if I understand correctly, desktop drives can start and stop 10 times per day and stay under the estimated number of start / stop cycles before failure.<br/><br/>In comparing desktop drives to notebook drives, most notebook drives have substantially higher estimated start / stop cycles before failure.
date: 2007-09-25
tags: none
author: Albert Lash
---
YES! Another website dedicated to reducing power on linux machines:

<a href="http://www.lesswatts.org/">LessWatts.org</a>"LessWatts.org is not about marketing, trying to sell you something or comparing one vendor to another. LessWatts.org is about how you can save real watts, however you use Linux* on your computer or computers. "

Being a linux user and power miser myself, I can honestly say this site does have a lot to offer. In my brief visit tonight I learned about "tickless" and IRQ balancing. Well done!

UPDATE:

The lesswatts.org site is actually very good. They mention a few really interesting things besides the tickless kernel and the IRQ balancing, such as SATA Aggressive Link Power Management, which is slated to be included in kernel 2.6.24 or 2.6.25. <strong><em>It might be able to save us .5 to 1.5 watts per SATA drive</em></strong>. SWEET!

One problem I have with the site contents is that they also discuss powering down hard drives, without explaining that doing so can have a serious impact on the life span of a hard drive. Most hard drives can only stop and start a limited amount of times before failure, though laptop drives are supposed to be able to start and stop a lot more. What's more is that they also take up less energy in general, though they do cost more up front.

I emailed the admin of the site to ask about p4-clockmod, and they responded confirming that the module doesn't actually do any frequency scaling, and that it can sometimes reduce heat, but on newer processors it can actually increase power consumption. Ugh!

The biggest surprise I found there was that gigE can use up to more than 2 watts than 100Mbit. I was very surprised when I tested it and it was true.

¥

