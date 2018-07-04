---
title: X11 xserver xorg performance
date: 2008-02-16
tags: performance,x11
---
I'm not exactly sure what the difference between X11 and xserver-xorg are, but I'm trying to make my graphics perform better. I'm using a low power laptop with the unichrome pro chipset, the openchrome xserver-xorg driver, and am doing all sorts of senseless fiddling when compiling the kernel, but hey, that's how I learn. Here's more of my notes:

I've been working on making X perform better,

and the little tweaks I thought might make a difference only make a slight difference.

Now I'm trying to recompile with the i686 arch instead of prescott, the kernel

and the xorg openchrome driver

I was surprised that NoAccel "true" only made the xperf marginally slower...

I was also surprised that reducing the videoram to 32 from 128 didn't have a noticeable

affect on x11perf, I supposed it would for more aggressive tasks like 3d,

but I'm unable to use 3d acceleration anyway.

I removed via, agp, agpgart, drm, and via-agp modules, to save memory.

Having a hard time trying to figure out how to pass compiler flags to make-kpkg,

if possible.

I'd like to use:-march=i686 -O2 -fomit-frame-pointer -ffast-math -finline-functions -msse -mfpmath=sse

maybe edit the placeholder that pentium-builder made? No that doesn't work

I set -march with DEBIAN_BUILDHOST, then I found in Makefile there is a spot for CFLAGS...

