---
title: kFreeBSD GNU AMD64 ATI Radeon Xorg gdm Issues
date: 2008-06-16
tags: debian,freebsd,kfreebsd
---
I had to ditch my kFreeBSD AMD64 install because a recent upgrade caused the X server to die during gdm startup. It was odd - the X server would start, I'd see the mouse pointer, and could move it, but then it would revert back to the console.

I tried searching around for an answer, but I don't know enough about how FreeBSD works, or kFreeBSD/GNU for that matter, to troubleshoot the problem.

What do I know so far? Its a notebook computer - RS485 Radeon Xpress 1100 IGP, I also get this error: "Failed to determine nums pipe from DRM, falling back to manual look-up!:/var/log/Xorg.0.log also contains errors about how its unable to use some acceleration method, and to instead use XAA. Then later on in the log, it says its using XAA.

xinit Invalid argument errno 22 after I ctrl-alt-backspace...

Other tactics:

<ul><li>Messed around with fontconfig</li><li>Tried commenting out some stuff in /etc/X11/xinit</li><li>Tried xdm</li><li>Tried vesa and ati drivers</li><li>Starting Xorg manually with startx</li></ul>
None works, same behavior or similar with same result.

