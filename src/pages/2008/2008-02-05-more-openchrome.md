---
title: More Openchrome Battles Less DRI GLX 3D
comments:
  - author: Jay Armstrong
    email: jaygosan@gmail.com
    date: 02/21/2008 10:44:10 PM
    text: >
      Good to hear. I got vesa working, played with unichrome today (which I can't get to run at all - xubuntu 7.10), so next is openchrome. Thanks for the links.
  - author: Albert
    email: albert.lash@savonix.com
    date: 02/22/2008 12:34:25 AM
    text: >
      Hi Jay! Good luck with openchrome, its worked well for me. What mainboard / chipset / graphics chip do you have?
  - author: Gerson Barreiros
    email: fserve@gmail.com
    date: 03/22/2008 09:39:22 AM
    text: >
      i got the new 3D via drivers workin on my laptop, 1000 fps @ gears but i cant make it work in 1440x900 that is my monitor res...<br/><br/>compiz-fusion work with some glitchs...<br/><br/>so i've needed to come back to openchrome, without 3D accel.
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/22/2008 01:19:45 PM
    text: >
      Hi Gerson! That's awesome - I'm still using the via drivers (w/o 3D) because it feels a little faster, but I'm planning to switch back to openchrome because the via drivers cause some strange image distortion from time to time. I've been hoping that openchrome would get support for panel, agp, and 3d, but it probably won't be for awhile...
  - author: Gerson Barreiros
    email: fserve@gmail.com
    date: 03/24/2008 09:08:03 AM
    text: >
      Hey albert, try the new ubuntu 8.04. It's using openchrome and wow, is very good just out of the box workin very good with 3D/widescreen res, but no Compiz-fusion yet in openchrome.<br/><br/>to make VIA's Unichrome work with compiz you need add via to whitelist at /usr/bin/compiz
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/24/2008 01:26:25 PM
    text: >
      I will definitely check that out - ubuntu 8.04 looks sweet - Firefox 3 included, very cool. I just noticed that the problems I had with jEdit and compiz on debian lenny aren't a problem in gutsy. Weird, if I have time I'll try and track down the proper fix. Right now I'm installing debian on my Alix1c board so I can get back to working with OCF-linux... fun!
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/25/2008 02:11:45 PM
    text: >
      Hello again Gerson, I tried hardy with openchrome on an nc1503 last night but couldn't get 1440x900 resolution at all - which machine did you get it working on?
  - author: Gerson Barreiros
    email: fserve@gmail.com
    date: 05/13/2008 05:26:01 PM
    text: >
      Hey albert, long time huh?<br/><br/>i'm using a Itautec W7630, it's a brazilian laptop.
  - author: Gerson Barreiros
    email: fserve@gmail.com
    date: 05/13/2008 05:30:14 PM
    text: >
      new unichrome for linux, <a href="http://linux.via.com.tw/" rel="nofollow">http://linux.via.com.tw/</a><br/><br/>but, again, isnt working proper : (
  - author: Albert
    email: albert.lash@savonix.com
    date: 05/13/2008 06:51:58 PM
    text: >
      Hi Gerson, good to hear from you! Cool, I see - that makes sense that you are able to get 1440x900 on that then, and that I can't get it on the everex. I'm now using the new 3D drivers and can get several hundred FIPS with glgears, though I haven't gotten compiz to work yet.
date: 2008-02-05
tags: 3D,openchrome,opengl
---
I couldn't help but try more compiling efforts on using DRI with openchrome, but I didn't succeed this time either. :-(

Seems its just not possible. I found some good resources though, and tried to take notes.

Notes:

* dri causes lockup with blinking lights on laptop

This is as far as it would go:

<pre>drmOpenDevice: node name is /dev/dri/card0
drmOpenDevice: open result is 7, (OK)
drmOpenByBusid: Searching for BusID PCI:1:0:0
drmOpenDevice: node name is /dev/dri/card0
drmOpenDevice: open result is 7, (OK)
drmOpenByBusid: drmOpenMinor returns 7
drmOpenByBusid: drmGetBusid reports pci:0000:01:00.0(EE) AIGLX error: Calling driver entry point failed(EE) AIGLX: reverting to software rendering</pre>

I was under the impression that I could get DRI working if I disabled IRQs and turned off AGPDRM, but it just wasn't working. Oh well.

Resources:

* <a href="http://www.hombrepac.com.ar/software-libre/linux/how-to-via-k8m890-chrome-9-igp-and-linuxs-xorg-ubuntu-edgy-610/">VIA K8M890 Chrome 9 IGP and Linux's Xorg - Ubuntu Edgy 6.10</a>
* <a href="http://ubuntuforums.org/archive/index.php/t-485646.html">Compiling and Installing the OpenChrome Graphical VIA Driver</a>

Also still getting this error:

<pre>VIALoadPalette: Function not implemented for this chipset.</pre>

UPDATE: Strangely enough, I am now able to load the DRI modules - "drm" and "via" while using the openchrome driver. I still get an error when trying to run glxgears, but it defaults to using software rendering. What's great about this is that I now have accelerated MPEG! :-)

<pre>(==) CHROME(0): Xv Bandwidth check is enabled.
(II) CHROME(0):[XvMC] Registering chromeXvMCPro.
(II) CHROME(0): [XvMC] Initialized XvMC extension.</pre>

I can have a large VLC window playing in the background while I am browsing interactively in swiftweasel, while my processor is running at 400Mhz... way to go VIA! Now how about opening up that unichrome 3D driver? Huh?

What fixed it? I'm not exactly sure... as usual I didn't follow a strictly scientific methodology in troubleshooting the problems. Two things that potentially could have helped: * Added load "GLcore" to xorg.conf* Recompiled kernel using <a href="http://wiki.openchrome.org/tikiwiki/tiki-index.php?page=P4M900">agp / drm P4M900 chipset fix as described on the openchrome wiki</a>

I'm thinking it was the agp / drm fix. The openchrome wiki also mentions how confusing drivers for the unichrome hardware can be - I agree! At the moment, my gut is telling me to stick with openchrome, understanding that they are trying out experimental features. To keep this blog post from getting to large, I've started a page about the <a href="/wiki/Openchrome">openchrome</a> drivers in the Docunext wiki.

I also want to mention how much fun it has been to work with graphics again. I haven't done much work with 3D since I got my first 3D Macintosh software days about 12 years ago. Wow!

¥

