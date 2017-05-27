---
title: Zonbu on the Everex
date: 2008-02-19
tags: 3D,acpi,openchrome,unichrome
---
To try and dig deeper into the Unichrome madness - I wrestled with the Zonbu root filesystem today. Its compressed into a read-only squash filesystem, so I had to jump through some serious hoops to get into it.

Once there, I found that it uses the openchrome driver to power the xserver, but there are some interesting differences, unfortunately, Zonbu doesn't offer much documentation as to how they configure their setup, so it doesn't make much sense to me. I think they were able to get the panel mode working, but I'm not sure how.

In the process, I found a nice command line utility for burning CD's / DVD's: mybashburn!

I should also note here that I found it humorous that the Zonbu live DVD uses the openchrome video driver as opposed to a Via supplied driver. It does load the uma.ko driver, and I wish I could find out more information about that.

Also, I found it very strange that the Zonbu live DVD uses a resolution of 1440x900, which causes the screen to extend beyond the display. What's strange is that I've come across other threads that suggest the NC15xx series laptops use this resolution, however, they are advertised as having 1280x800, and the NC1610 is advertised as having 1440x900. What's going on here?

<a href="http://ubuntuforums.org/archive/index.php/t-485646.html">http://ubuntuforums.org/archive/index.php/t-485646.html</a>

<a href="http://www.tkarena.com/forums/linux-arena/34021-via-vn896-chrome-9-hc.html">http://www.tkarena.com/forums/linux-arena/34021-via-vn896-chrome-9-hc.html</a>

