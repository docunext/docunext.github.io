---
title: Debian on a Via C7
comments:
  - author: park
    email: tsogusa@paranoici.org
    date: 10/15/2008 01:30:22 PM
    text: >
      sata is needed,<br/>great processor useful Luks-cryptsetup and ecryptfs, AES harware support.. fanless :)
date: 2007-07-15
tags: acpi,c7,debian,via
---
VIA has this great new chip called the C7 - it has very low power consumption and can use a motherboard chipset that can support up to 2GB of RAM. It also has the ability to use the padlock cryptography functions programmed into the chip, making encryption faster.

How do we use this stuff in daily life? Good question! Well I am using debian so I'm going to try and use a vanilla kernel and the debian kernel tools to build a kernel with the C7-specific goodies.

I'm using http://www.kernel.org/pub/linux/kernel/v2.6/linux-2.6.21.tar.gz nope, no c7 support, how about

http://www.kernel.org/pub/linux/kernel/v2.6/linux-2.6.21.tar.gz?

has c7 support but does it have via_sata support??

¥

