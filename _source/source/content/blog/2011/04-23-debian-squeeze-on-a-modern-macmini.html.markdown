---
title: Debian Squeeze on a Modern MacMini
date: 2011-04-23
tags: macmini
---
Its been awhile since I'd built a MacMini with a completely free operating system, but I did so at work this past week. The hardware is a very modern MacMini, so when I was reading up about the process, I was pleased for two reasons:

1. The firmware for recent Apple Mac hardware includes a BIOS compatibility mode, greatly increasing the simplicity with which free operating systems can be installed.
2. The MacMini I installed onto already had the latest firmware.

Thanks to the awesome [Debian wiki page about installing onto a MacMini](http://wiki.debian.org/MacMiniIntel) - especially the inclusion of a Debian installer that had the necessary drivers, the process was straightforward, but I did run into a tough problem, actually two.

The first issue I had was getting grub to install. I just like grub more than lilo, OK? I could not install it from the debian installer, I had to execute a shell, apt-get install gptsync, run in, and then install grub manually. I installed it to both /dev/sda and /dev/sda3. I wish I took better notes on that part, but I will do this install again (on my own older MacMini hardware), and I'll write down the steps by steps tasks I performed.

The second issue was with the video card. Its a new nvidia graphics card, and the installer included a kernel with support for the reverse engineered *nouveau* driver. For it to work, the kernel **must** have this passed to it upon boot:

<pre class="terminal">
nouveau.modeset=0
</pre>

The debian wiki instructions include that, but without explanation. If that boot option is not included, the screen simply goes blank.

With it, the screen remains active, and even supports decent video modes. I was unable to use the screen resolution I wanted with the nouveau driver, so I ended up installing the proprietary nvidia dkms driver. Not optimal, but definitely usable. I even setup TwinView via nvidia-settings, which allows me to use two displays.

There is no doubt in my mind that Apple will benefit from the new firmware-powered BIOS compatibility mode they offer. I know many consumers and businesses who value the high quality and consistent hardware that Apple produces, but prefer similarly high quality and consistent free and open source operating systems like Debian.

