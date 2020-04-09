---
title: VIA Unichrome Madness
comments:
  - author: Sean Whitney
    email: sean.whitney@gmail.com
    date: 12/02/2008 02:56:00 PM
    text: >
      I finally got the video on my Everex working with Ubuntu 8.10 with this webpage.<br/><br/><a href="https://help.ubuntu.com/community/OpenChrome" rel="nofollow">https://help.ubuntu.com/community/OpenChrome</a>
date: 2008-02-17
tags: unichrome,via
---
Via makes some cool products, but their management of these products seems totally erratic to me. For example, their driver downloads - some are archived using rar, some with tar and gzip. That's just the tip of the iceberg!

I finally got AGP enabled on my Everex NC1503 laptop thanks to a hint I found only in the redhat driver instructions, to patch the kernel in a few spots. Now I'm again trying to enable MPEG acceleration and AGPDRM support, which I had when I didn't have AGP support. Ugh!

Hopefully the success that Everex is finding with gOS will encourage VIA to be cooler with the open source community.

WOW! This is such a mess. I've been banging my head against the wall trying to get video to work better on the Everex NC1503, to no avail. I feel like I'm really close, but not there yet.

This is what I was referring to for AGP:

<a href="http://wiki.openchrome.org/tikiwiki/tiki-index.php?page=P4M900">http://wiki.openchrome.org/tikiwiki/tiki-index.php?page=P4M900</a>

But when I had tried it in the past, it didn't produce the same results as this:

<blockquote>If users want to enable AGP feature (higher performance) for CN896, K8M890,    P4M900 and VN896 IGPs, users need to rebuild kernel source with following steps   manually due to the AGP driver has been built in the default kernel of Fedora    Core Linux 5/6/7.   First, users need to define the AGP device ID in pci_ids.h file which is located   at &lt;kernel source>/include/linux/

#define PCI_DEVICE_ID_VIA_VT3364        0x0364

Next, find the structure "agp_device_ids via_agp_device_ids[]" in via-agp.c    under <kernel source>/drivers/char/agp folder and add following lines.

<pre>
/* VT3364*/
        {
                .device_id  = PCI_DEVICE_ID_VIA_VT3364,                .chipset_name   = "VT3364",
        },
</pre>

Then, find the structure "pci_device_id agp_via_pci_table[]" and add following   line.

ID(PCI_DEVICE_ID_VIA_VT3364),

At last, users can start to rebuild the kernel.</blockquote>

The goal being:

<pre>[   21.953000] Linux agpgart interface v0.102 (c) Dave Jones
[   21.990000] agpgart: Detected VIA VT3364 chipset
[   22.044000] agpgart: AGP aperture is 128M @ 0xc0000000</pre>

<a href="http://http://bugzilla.kernel.org/attachment.cgi?id=12515">The patch which was applied to 2.6.23</a>.

Unfortunately, I'm still getting an error message along the lines that AGP DMA is not enabled for this chipset. I thought I could outsmart the driver by commenting out this:

<pre>/*  if (dev_priv->chipset == VIA_DX9_0) {
    DRM_ERROR("AGP DMA is not supported on this chip\n");
    return -EINVAL;
    }*/</pre>

In that case, with the other pieces correctly in place (via.ko and drm.ko), the DRM ring would initialize, but then it would crash. :-(

So close... but I could be farther than I think. In addition to the AGP DMA problem, the X driver also reports that panel mode is not available on this chipset, and that its using VBEmodes as a work around - what does that mean?

It really boggles my mind that Via and Everex would market such a cool, low-cost laptop with Windows Vista. Its much more appropriate to put linux on a machine like this, but they are hindering that effort with their lack of support for the Unichrome drivers. Grrrr.

Now I'm following <a href="http://www.hombrepac.com.ar/software-libre/linux/how-to-via-k8m890-chrome-9-igp-and-linuxs-xorg-ubuntu-edgy-610/">these slightly outdated</a> instructions... here's the rough set of steps I'm taking:

1. cd src
2. vim makedriver - find debian, match kernel version
3. ./makedriver
4. its complaining about no via_drv.so
5. cd via/X11R7
6. ./config_x11r7
7 ./configure
8. make - fails with error about overlay.c

Now I'm using the "via" driver, but I still can't use DRM:

<pre>[drm] failed to load kernel module "uma"</pre>

Nevertheless, the interface is much more responsive. I rebuilt the via and drm modules, then added "alias uma via" in the modules alias file, but I still get this:

<pre>(II) VIA(0): [drm] Detect H5 chipset: 000a  chipid: 3371
drmOpenDevice: node name is /dev/dri/card0
drmOpenDevice: open result is 7, (OK)
drmOpenDevice: node name is /dev/dri/card0
drmOpenDevice: open result is 7, (OK)
drmOpenByBusid: Searching for BusID PCI:1:0:0
drmOpenDevice: node name is /dev/dri/card0
drmOpenDevice: open result is 7, (OK)
drmOpenByBusid: drmOpenMinor returns 7
drmOpenByBusid: drmGetBusid reports pci:0000:01:00.0(II)
[drm] DRM interface version 1.3(II)
[drm] DRM open master succeeded.(II) VIA(0):
[drm] Using the DRM lock SAREA also for drawables.(II) VIA(0):
[drm] framebuffer handle = 0xa0000000(II) VIA(0):
[drm] added 1 reserved context for kernel(II) VIA(0):
[drm] installed DRM signal handler(II) VIA(0):
[drm] drmAgpEnabled succeeded(II) VIA(0):
[drm] agpAddr = 0xc0000000(II) VIA(0):
[drm] agpBase = 0x00000000(II) VIA(0):
[drm] agpAddr = 0xc0000000(II) VIA(0):
[drm] agpSize = 0x01000000(II) VIA(0):
[drm] agp physical addr = 0x00000000(II) VIA(0):
[drm] register handle = 0xc8000000(II) VIA(0):
[drm] mmio Registers = 0xc8000000(EE) VIA(0):
[drm] ERROR! S3GDRIKernelInit:failed to initialize kernel module! (-22)(II) VIA(0):
[drm] removed 1 reserved context for kernel(II) VIA(0):
[drm] unmapping 8192 bytes of SAREA 0xf8b3e000 at 0xaf9ce000(II) VIA(0):
[drm] Closed DRM master.(II) VIA(0):
[drm] Freeing agp memory(II) VIA(0):
[drm] Releasing agp module</pre>

This is the driver source I used from VIA:

<a href="http://www.viaarena.com/Driver/VT3324-3364XORG40079a-kernel-src_200.tgz">http://www.viaarena.com/Driver/VT3324-3364XORG40079a-kernel-src_200.tgz</a>

And I have to say even though a lot of the possibilities aren't functioning, it makes a huge difference in the performance of this computer. :-)

I notice in the XServer/X11R7/README file, this copyright notice and liberal license is included:

<pre>
#
# Copyright 1998-2006 VIA Technologies, Inc. All Rights Reserved.
# Copyright 2001-2006 S3 Graphics, Inc. All Rights Reserved.
#
# Permission is hereby granted, free of charge, to any person obtaining a
# copy of this software and associated documentation files (the "Software"),
# to deal in the Software without restriction, including without limitation
# the rights to use, copy, modify, merge, publish, distribute, sub license,
# and/or sell copies of the Software, and to permit persons to whom the
# Software is furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice (including the
# next paragraph) shall be included in all copies or substantial portions
# of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL
# THE AUTHOR(S) OR COPYRIGHT HOLDER(S) BE LIABLE FOR ANY CLAIM, DAMAGES OR
# OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
# ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
# DEALINGS IN THE SOFTWARE.</pre>

That's nice!

¥
