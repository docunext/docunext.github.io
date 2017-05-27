---
title: Debian Kernel Patches
date: 2007-10-08
---
Debian is my favorite distribution, but I still need to make some changes to the kernel. I add these patches: * ocf-linux* acpi-dsdt patch* openvz patch

And I turn off a whole bunch of modules I don't need to save on space and compile times. Not all those patches work with the debian source linux kernel, so I downloaded one from kernel.org. Well, they didn't work with 2.6.22 in general, so I stepped down to 2.6.18, which is too bad because it doesn't include the Via C7 processor type. :-(

