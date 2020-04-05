---
title: Solar Powered DecTop
date: 2007-08-16
tags: alix,energy
---
My solar panel charge regulator arrived this week so I plugged it into my solar panel and my battery pack, then plugged my dectop into the battery pack, and voila, we are operating under solar power! :-)

This is basically just a test right now to see how well the charger works. The dectop takes about 10 watts of power, which might be too much for the solar panel to recharge the battery with. I'll probably switch to using a <a href="http://www.docunext.com/blog/2007/07/pc-engines-wrap-successor-alix.html">PC Engines ALIX board</a> instead, but I only have one right now. That one is happy using a CF as a drive, only consumes about 4-6 watts of power, and has both an onboard nic and a miniPCI card for a wireless network.

I had originally thought of using a NSLU2 "slug" for this project, but they are better off doing network storage.

To make this setup more efficient, I am contemplating the use of the ~12V outlet on the battery pack, and feeding that directly into the computer. The way it is currently setup now requires the voltage be stepped up to 120V, and then back down to 12V. The PC Engines WRAP boards can accept voltages anywhere from 7V to 20V, so I'm hoping that the ALIX has a similar range, but its possible that they don't. I could always just use a WRAP board on the battery pack. I'll need to check out the specs on the battery pack as well to see if the 12V output can be used when the battery is getting charged at the same time.

UPDATE: August 17, 2007: I woke up this morning to the alarm of the battery pack, meaning it was out of juice. So either the dectop uses too much energy, or the battery pack wasn't topped off - it had been sitting for awhile before I plugged everything in. Right now its charging up via the solar panel, so we'll see what happens.

UPDATE: August 19, 2007: Seems like charging through the adapter port of the battery pack isn't working - there is a rapid clicking sound, which I'm guessing is an actuator /regulator switch. I'm not charging through the 12V "cigarette lighter" port, which doesn't have the regulator, so I've included the SunForce regulator inline. I'm wondering why the switch is flickering like it is when the solar panel is plugged into the adapter port. Maybe not enough amperage? Voltage too high?

UPDATE 2: August 19, 2007: The fuse in the 12V "cigarette lighter" adapter blew, so I tried the regular power adapter port, and in the brighter sunlight, the switch isn't flickering on and off. :-)

<table><tbody><tr><td align="center">
<img src="http://www-sa.evenserver.com/s/img/2007/08/snb10891.JPG" alt="snb10891.JPG" class="imageframe imgalignleft" height="417" width="282" /></td></tr><tr><td align="center">
<img src="http://www-sa.evenserver.com/s/img/2007/08/snb10892.JPG" alt="snb10892.JPG" class="imageframe imgalignleft" height="263" width="350" /></td></tr></tbody></table>

UPDATE September 29, 2007:

The <span title="Powerpack 600hd">Xantrex Powerpack600hd</span> is again fully charged. I think it had been for awhile, but was just reporting 0% charge on the LED.
