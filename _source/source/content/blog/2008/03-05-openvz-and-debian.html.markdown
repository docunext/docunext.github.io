---
title: OpenVZ and Debian
date: 2008-03-05
tags: debian,openvz,virtualization
---
I'm rebuilding a kernel for one of my machines and this time I'm using Debian's automatic kernel patching capabilities. I tried building the kernel suggested by the kernel-patches-openvz package, but it failed on the initramfs step when I tried to install the kernel. Duh, it was because I hadn't enabled modules in the kernel config.

Furthermore, I found this <a href="http://http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=378045">debian bug report about openvz and vzctl which prevents vz from starting</a>.

