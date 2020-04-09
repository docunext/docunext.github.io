---
title: ath9k versus madwifi
comments:
  - author: TedKotz
    email: tck6346@njit.edu
    date: 03/11/2009 10:51:43 AM
    text: >
      I think you want the ath5k driver for that card.<br/><br/>The ath9k driver is for the 802.11n based cards.
  - author: Albert
    date: 03/11/2009 10:33:15 PM
    text: >
      Hi Ted, thanks for commenting. I will try out ath5k.
date: 2008-08-06
---
I'm trying out <a href="http://wireless.kernel.org/en/users/Download">ath9k</a> on a <a href="http://www.my-tech-deals.com/blog/2008/08/01/399-laptop/">new inexpensive laptop</a> - it has an atheros chip:

<pre>
04:00.0 Ethernet controller: Atheros Communications Inc. AR242x 802.11abg Wireless PCI Express Adapter (rev 01)</pre>

In the past on my <a href="http://www.docunext.com/2008/03/19/debian-macbook-good/">debian macbook</a>, I've used the madwifi drivers, which worked fine, but I prefer the free drivers.

Hmmm - its not working. Doh! Back to madwifi I guess.... though it might be the laptop. Can't seem to figure out how to turn the wifi on.

A reboot and we're in business. Its using the madwifi drivers.

FYI - I did this using the terrific debian module-assistant tool. I started with "apt-get install module-assistant", and then proceeded with "m-a" and followed the instructions.

¥
