---
title: Turn off webcam
date: 2009-04-02
---
A recent run of powertop discovered that the webcam in my Acer Extensa 5620Z was causing a significant amount of wakeups. I never use it, in fact its covered up with a sticker.

<pre>[    6.888500] usb 1-1: Product: Acer CrystalEye webcam[   15.287631] uvcvideo: Found UVC 1.00 device Acer CrystalEye webcam (064e:a101)[   15.288506] input: Acer CrystalEye webcam as /class/input/input6</pre>

<a href="http://www.zzillezz.net/2008/09/24/disable-webcam-in-ubuntu/">zzillezz.net turned a similar webcam off with "blacklist gspca"</a>. I'm using "blacklist uvcvideo".

While I was at it, I also blacklisted a few other modules to save RAM as my laptop recently lost 2GB of RAM. :-(
