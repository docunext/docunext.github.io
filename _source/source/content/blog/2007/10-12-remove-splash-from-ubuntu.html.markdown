---
title: Remove Splash from Ubuntu
date: 2007-10-12
tags: none
author: Albert Lash
---
Call me old fashioned, but I like the technobabble that covers the initial boot screens of many linux distributions, excluding ubuntu. Gentoo makes it easy to escape from the splash screen, but I can't figure out how to get out of it in ubuntu. What's worse, is that if you remove the splash boot parameter from the grub menu, its added back the next time you install a kernel!

I'm removing usplash to see if that "fixes" it. Nope, but I did figure out that /boot/grub/menu.lst has defaults which even though are commented out get used by the automagic kernel updater. I've since switched from ubuntu to debian on this machine, so it doesn't matter anymore, but I had to use the defaults to switch from an sda drive to an hda drive.

