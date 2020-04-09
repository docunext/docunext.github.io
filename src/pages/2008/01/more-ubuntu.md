---
title: More Ubuntu and Nvidia GeForce 460
date: 2008-01-29
tags: nvidia,ssh,ubuntu,x11
---
I'm installing another Ubuntu desktop, xubuntu-desktop, on an old laptop notebook which happens to have a decent graphics card. The machine was originally a debian etch machine, and with a little encouragement, I was able to convert it to an ubuntu gutsy machine. The biggest problems were the sysvinit, sysv-rc, and initscripts packages. I was very careful when handling those directly with dpkg.

When I got x to start, I was greeted with this:

<pre class="sh_sh">
Xsession: warning: xrdb command not found
X resources not merged.
</pre>

Not sure what it means, but no negative side effects that I can find. I'm installing the linux-image-2.6.22-14-386 package now as well as the linux-restricted-modules package to use the nVidia card.

UPDATE: The new nvidia driver didn't work with my old school GeForce 460, so I had to download the firmware from nvidia, then compile the kernel module interface. It was kind of a pain, but in the end it worked. The glxgears fps is pretty sorry (300), but at least it works! :-)

Thanks: <a rel="nofollow" href="http://ubuntuforums.org/showthread.php?t=330657&amp;page=2">http://ubuntuforums.org/showthread.php?t=330657&amp;page=2</a>

UPDATE Jan. 30 2008 - I added more RAM (128MB up to 384) and the glxgears FPS rate shot up to 3000+, but I also reduced the color depth to 16bit. Not sure which helped more, but to make sure I added another 128MB of RAM since this machine is my active desktop now. Next up - <a href="http://www.docunext.com/">libpam-ssh</a>!

UPDATE February 4, 2008 - Fonts in XFCE / X11 can really be tricky. Even though my monitor resolution is 96, I've found that using the 100dpi font setting in the XFCE user interface control panel to work much better.

