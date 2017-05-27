---
title: ath5k on eeepc rt73 rt2400
date: 2009-02-10
tags: none
author: Albert Lash
---
<strong>ath5k</strong>

I'm trying to install debian on my eeepc, actually I've got it installed on an SD card, its booting, but I'm not able to network. I've just compiled the atl2 driver and now I'm compiling the ath5k driver from compat-wireless-old as described <a href="http://wiki.debian.org/DebianEeePC/HowTo/UseUpstreamAtherosModules">here</a>.

I too had to apply this <a href="http://cgi.sfu.ca/~jdbates/tmp/linux/200901250/patch">patch</a>.

<strong>rt2x00</strong>

I'm also trying to get some <a href="http://www.my-tech-deals.com/blog/2009/02/05/good-linux-wireless/">Edimax (with ralink chipsets) usb wifi modules to work</a>. <a href="https://help.ubuntu.com/community/WifiDocs/Driver/RalinkRT73">This</a> may help.

What's up with this:

<pre>[ 1491.442652] firmware: requesting rt73.bin[ 1491.557812] phy0 -> rt2x00lib_request_firmware: Error - Failed to request Firmware.</pre>

Hmmm....

<pre># apt-cache search rt2x00

rt2400-source - source for rt2400 wireless network driver

rt2500-source - source for rt2500 wireless network driver

rt2570-source - source for rt2570 wireless network driver

rutilt - Configuration tool for rt2x00 wireless network cards</pre>

