---
title: Data Evolution decTop versus Linksys NSLU2
comments:
  - author: Mark Phillips
    email: g7ltt@g7ltt.com
    url: http://www.enicomms.com/decTOP
    date: 06/28/2007 07:40:12 AM
    text: >
      Your decTOP as listed in the article is not typical. The decTOP ships with a 10GB HDD and not the 80GB listed. Subsequently the power consumption is somewhat lower (around 8W).
  - author: admin
    email: albert.lash@savonix.com
    date: 06/28/2007 10:25:22 AM
    text: >
      You are absolutely right about the hard drive, and thanks for adding the wattage rating you measured with the stock drive. I couldn't get the install to work correctly on the 10GB for some reason. It was nice to read on the astlinux list that the drive isn't locked. I wonder why mine wasn't working?<br/><br/>I'm planning to install AskoziaPBX on the next one using a disk-on-module for the hard drive, and use an  extra belkin usb ethernet adapter I have for the ethernet connection. It uses the pegasus driver and should fare better than the crappy one that shipped with the dectop (again thanks to the astlinux list for such extensive testing on that one!).
  - author: Help!!!
    email: kriptonomicon@gmail.com
    date: 07/30/2007 04:22:08 AM
    text: >
      How did you install debian on dectop?<br/>any hw to, or guide?
  - author: admin
    email: albert.lash@savonix.com
    date: 07/30/2007 10:42:03 AM
    text: >
      Actually its pretty easy - you just have to use a USB CD-ROM drive:<br/><br/><a href="http://www.docunext.com/blog/2007/04/build-your-own-external-cd-burner.html" rel="nofollow">Build Your Own USB CD-ROM Drive</a><br/><br/>And then follow the debian install as usual. I had problems with the HD that was inside the DecTOP, so I replaced it with a different one.<br/><br/>Can you describe where you are having trouble with the debian install?
date: 2007-06-23
tags: debian,dectop,energy,nslu2,slug
---
## <strong>A Thorough Comparison of the Data Evolution Dectop and the Linksys NSLU2</strong>
Both the Data Evolution dectop and the Linksys NSLU2 can run Debian linux. They
both feature ethernet connectivity and low power consumption, and are similarly
priced. However, the two are fairly different.

<table border="1" cellspacing="0" cellpadding="2"><tr><td><strong>Feature</strong></td><td><strong>dectop</strong></td><td><strong>NSLU2</strong></td></tr><tr><td>Processor</td><td>x86 compatible AMD Geode 366Mhz</td><td>ARM 166 MGhz</td></tr><tr><td>CPU Cache</td><td>32 KB</td><td>?</td></tr><tr><td>Memory</td><td>128MB</td><td>32MB</td></tr><tr><td>Network</td><td>USB 1.1 Ethernet dongle</td><td>10/100 on-board LAN, plus USB 2.0 ethernet dongles</td></tr><tr><td>Graphics</td><td>VGA support</td><td>None</td></tr><tr><td>Power consumption</td><td>10 Watts*</td><td>5 / 15 Watts*</td></tr><tr><td>Bonus features</td><td>Internal hard drive</td><td>USB 2.0</td></tr><tr><td>Extra HW</td><td>Keyboard, mouse, USB ethernet, usb cable, built-in modem</td><td>None</td></tr><tr><td>Cost</td><td>$99 + s/h</td><td>$75-$100</td></tr><tr><td>Availability</td><td>Now, future unknown</td><td>Available</td></tr></table>
<h3>Operating System Considerations</h3>

#### <strong>Linksys NSLU2</strong>

Installing debian on the NSLU2 can be tricky because it is headless, but it is
a well documented process. The NSLU2 comes with an operating system installed,
and is useful out of the box. It also supports OpenSLUG and Unslung.

#### <strong>Dectop</strong>

The dectop ships with no operating system and one must be installed, raising the
initial price tag substantially due to the cost of labor. However, if the end
user is going to be doing the installation, the labor can be considered
negligible, as the installation could be part of its actual "usage". The dectop
should support any type of linux, bsd, or open source software installation
including FreeDos, and should also support Windows CE with a new license.

#### <strong>Overall Conclusions</strong>

Both of these machines are amazing devices, and I'm glad I got a chance to work
with them both. As similar as they are, the subtle differences make them poised
for entirely different applications. The Linksys is very limited in its
  capacity, but its very good at what it does. It provides network access to USB
  devices, and that's it. It can do more, but in my humble opinion its not
  really worth it.

The dectop is a much more versatile and capable machine. Its really too bad that
they didn't provide on-board lan or linux pre-installed. Those two factors
aren't deal killers, but we'll need to see whether it is possible to install
a new operating system to the included hard-drive without opening up the box. My
efforts were thwarted, but others have reported success.  Another possibility is
to boot the dectop over a network, but we have yet to see if that is
a possibility. The one thing the dectop device does very well is provide
a low-power "window to the internet". Since most internet connections are
5 Mbits or slower, the usb 1.1 ethernet dongle does not pose too big a limiting
factor in evaluating the performance. However, that limit makes an impact when
considering this device as a local area network storage device. Compared to the
slug, this thing would be a snail. That metaphor doesn't really work! In other
words, it would be really really slow. :-)

It would be interesting to also compare a thin client to the dectop. HP makes
some very capable, low-power thin clients that also provide a "window to the
internet". Their limiting factor is the no-hard-drive aspect, but with
solid-state drives and USB flash drives getting bigger and bigger, that's
becoming less of an issue. They are more expensive, but go on sale from time to
time. <div style="background: #EEEEEE">* Power measured with a Kill-a-watt
device. dectop has a WD 80GB drive, NSLU2 has only a USB flash drive at 5W, an
external 250GB drive at 15W.</div>
