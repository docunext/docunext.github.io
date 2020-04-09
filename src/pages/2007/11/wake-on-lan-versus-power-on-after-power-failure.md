---
title: Wake on LAN versus Power on after power failure
comments:
  - author: mike
    email: mike.dussault@gmail.com
    date: 12/16/2007 03:15:36 PM
    text: >
      God, I wish I had thought of that.. Can you recommend a networkable outlet controller? Most of the ones I've seen cost more than the device I'd be using it on (the Linksys NSLU2).
  - author: Albert
    date: 12/16/2007 03:23:26 PM
    text: >
      The "slug" is a great little device! Good choice. For network outlet controllers, aka remote reboot switches, the best price I've found is from Digital Loggers, but the web switch is pretty noisy due to the fan inside, other than that it works great and is very reliable in my experience. I've also used the APCC Power Switch, but its much more expensive, and actually uses a fair amount of energy itself, which is too bad. I think its really designed for nocs.<br/><br/>The link to digital loggers:<br/><br/><a href="http://www.digital-loggers.com/lpc.html" rel="nofollow">http://www.digital-loggers.com/lpc.html</a><br/><br/>I guess it will cost you about the same as the NSLU2!
  - author: Albert
    date: 12/16/2007 04:41:05 PM
    text: >
      Not sure, I've run a couple of Slugs with debianslug, but can't remember if I set them up with WOL. Like I said in the post, I've pretty much given up on it, its a real pain in the neck. I still use it on a couple of machines, but there are some many pieces which need to be setup right its not worth it.<br/><br/>Unfortunately I'm not sure if the slug will wake up automatically from a power outage, that's a setting usually made in the bios. What are you trying to accomplish with it?
  - author: Albert
    date: 12/16/2007 06:16:10 PM
    text: >
      You're right, the slug uses about 5 watts without drives, and a WOL enabled system uses at least 1 or 2 watts when off. You'd be fine with  just powering down the drives, you really don't have to power down the SLUG to save energy, it would be negligible.<br/><br/>Yeah the ALIX boards are awesome when it comes to power consumption, but even when its off and setup for WOL it will consume power. The NIC needs power to stay active.<br/><br/>If you are running on batteries, it might make sense, but if you've got power, just let the slug run. I can't believe I'm saying that, but its true.
  - author: Albert
    date: 12/16/2007 08:00:24 PM
    text: >
      Are you running debianslug or the linksys os? For the linksys, I think you have to rely on the external drive's capabilities, but otherwise there are some tips here:<br/><br/><a href="http://www.nslu2-linux.org/wiki/FAQ/SpinDownUSBHarddisks" rel="nofollow">http://www.nslu2-linux.org/wiki/FAQ/SpinDownUSBHarddisks</a>
date: 2007-11-27
tags: none
author: Albert Lash
---
I was just thinking - its been a few months since I started using a remote reboot switch instead of wake on lan. Hate to admit it, but its so much better, I've never looked back.

Unfortunately, wake-on-lan is pretty finicky. There are many different things that must work together to get it going. While its definitely possible, using an external switch to turn on a machine is so much easier.

To do that, all you need is a network accessible outlet controller, and set your BIOS to turn on after a power failure. Its that easy!

¥

