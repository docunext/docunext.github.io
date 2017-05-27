---
title: Ethtool
date: 2008-07-22
tags: none
author: Albert Lash
---
Think ethtool can help you save power? It can! Believe it or not, 1GBit Ethernet uses up to 2 watts more than 100Mbit. Surprising, isn't it!

The power consumption on my Mac Mini x86 went from 19 watts to 17 after switching. Here's how I did it:

<pre>ethtool -s eth1 speed 100 autoneg off</pre>

Without "autoneg off", the speed would return to 1000, and eth1 might be eth0 or eth2, depending on the setup.

