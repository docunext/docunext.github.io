---
title: Debian kFreeBSD
date: 2008-03-25
tags: debian,freebsd,xfce4
---
I've installed Debian + kFreeBSD today - very cool stuff. The installation process is much more FreeBSD than debian, but once you get into the running shell, its all apt-get. Only main is available, no contrib or non-free, but with main I was able to install x-window-system and openbox.  The screen is really fuzzy though, but I can't install hwinfo to get xdebconfigurator.

Now I'm installing xfce4 to see how that goes.... that worked OK, and now I'm using vesa which is much better, but slower.

I can't get iceweasel to work so its installing galeon now. It wouldn't install because mono-common relied on update-binfmt which only works on linux. I commented out the exit 2; line just so it would install, and it worked. I was able to start up galeon.

