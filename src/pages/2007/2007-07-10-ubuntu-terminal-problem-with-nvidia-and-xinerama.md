---
title: Ubuntu Terminal Problem with NVidia and Xinerama
comments:
  - author: zeeshan
    email: flash2_mail@yahoo.com
    date: 02/16/2008 04:33:35 PM
    text: >
      Hi,<br/>can u let me know about the shortcoming or u can say drawbacks of DITrack.
date: 2007-07-10
tags: nvidia,terminal
---
Just added my experience to <a href="https://bugs.launchpad.net/ubuntu/+source/linux-restricted-modules-2.6.17/+bug/58232/comments/54">bug #58232 at Ubuntu's launchpad.net</a>:

<blockquote>I'm running 2.6.20 32-bit on AMD64 with xinerama and NVidia card - no terminal action here.</blockquote>

<pre class="sh_sh">Section "Device"
    Identifier "0 Generic Video Card"
    Driver "nvidia"
    BusID "PCI:5:0:0"
    Screen 0
    Option "AddARGBGLXVisuals" "True"
    Option "DisableGLXRootClipping" "True"
    Option "XAANoOffscreenPixmaps" "true"
EndSection
Section "Device"
    Identifier "1 Generic Video Card"
    Driver "nvidia"
    BusID "PCI:5:0:0"
    Screen 1
    Option "AddARGBGLXVisuals" "True"
    Option "DisableGLXRootClipping" "True"
    Option "XAANoOffscreenPixmaps" "true"
EndSection
Section "Screen"
    Identifier "Main Screen"
    Device "0 Generic Video Card"
    Monitor "Main Monitor"
    DefaultDepth 16
    Option "UseFBDev" "true"
    SubSection "Display"
        Depth 16
        Modes "1680x1050"
    EndSubSection
    SubSection "Display"
        Depth 24
        Modes "1680x1050"
    EndSubSection
    Option "AddARGBGLXVisuals" "True"
    Option "DisableGLXRootClipping" "True"
EndSection
Section "Screen"
    Identifier "Second Screen"
    Device "1 Generic Video Card"
    Monitor "Second Monitor"
    DefaultDepth 16
    Option "UseFBDev" "true"
    SubSection "Display"
        Depth 16
        Modes "1680x1050"
    EndSubSection
    SubSection "Display"
        Depth 24
        Modes "1680x1050"
    EndSubSection
    Option "AddARGBGLXVisuals" "True"
    Option "DisableGLXRootClipping" "True"
EndSection
</pre>

<blockquote>Other than that, both monitors look great, and every other application I've tried works fine.</blockquote>

¥

