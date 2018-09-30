---
title: X11 QEMU vnc usbdevice tablet
date: 2007-07-13
tags: mouse,usb,vnc,x11
---
I was having wacky mouse action with QEMU and X11, so I did a little research and found the solution. The trick is to use the -usbdevice tablet option when starting QEMU, and to enable the evtouch driver for the X11 server.

Debian makes this super easy! They have xserver-xorg-input-evtouch in unstable, and then you add this to your xorg.conf file and you are good to go:

<pre class="sh_sh">
Section "InputDevice"
  Identifier "Mouse1"
  Driver "evtouch"
  Option "Protocol" "usb"
  Option "Device" "/dev/input/event0"
  Option "DeviceName" "touchscreen"
  Option "SendCoreEvents"
  Option "CorePointer"
  Option "MinX" "0"
  Option "MinY" "0"
  Option "MaxX" "32767"
  Option "MaxY" "32767"
  Option "ReportingMode" "Raw"
EndSection</pre>

Thanks to:

<a title="qemu usbdevice tablet fix for X11" href="http://lists.gnu.org/archive/html/qemu-devel/2006-04/msg00290.html">http://lists.gnu.org/.../msg00290.html</a>

and

<a  title="another qemu usbdevice tablet fix for X11" href="http://qemu-forum.ipi.fi/viewtopic.php?t=2720">http://qemu-forum.ipi.fi/viewtopic.php?t=2720</a>

