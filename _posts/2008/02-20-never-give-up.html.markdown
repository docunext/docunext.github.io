---
title: Never Give Up 
date: 2008-02-20
tags: 3D,errors,unichrome
---
I'm still plugging away at the Everex video drivers... strange - but the dri module is actually uma.ko, not via.ko. Its for the s3g_driver, news to me!

I'm feeling like I'm closer than ever:

<pre>[ 3151.204000] agpgart: Found an AGP 3.5 compliant device at 0000:00:00.0.
[ 3151.204000] agpgart: Xorg tried to set rate=x12. Setting to AGP3 x8 mode.
[ 3151.204000] agpgart: Putting AGP V3 device at 0000:00:00.0 into 8x mode
[ 3151.204000] agpgart: Putting AGP V3 device at 0000:01:00.0 into 8x mode
[ 3151.778000] [drm:s3g_do_init] *ERROR* failed to find dma buffer region!</pre>

UPDATE: After staying up until 2AM last night, I am giving up for now. The via driver for X is faster than the one from openchrome, so I'll just stick with that.

