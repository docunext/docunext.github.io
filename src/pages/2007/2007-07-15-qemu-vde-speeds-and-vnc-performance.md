---
title: QEMU VDE Speeds and VNC performance
date: 2007-07-15
tags: iperf,qemu,vnc,vpn
---
Strangely I'm only getting 39 Mbits per second when I use iperf to test the speed between a QEMU VM and its host. I thought it would be much higher.

On another note, I mainly use VNC to connect to my QEMU VMs, especially when installing debian. I found this weblog "<a href="http://blog.codemonkey.ws/">Tales of a Webmonkey</a>" which talks a lot about the VNC server built into QEMU, but I don't think the changes they coded made it into QEMU. :-(

In the meantime, to speed things up over my VPN, I'm using ssh to connect to the VM host (yes the encryption is redundant) and turn on compression. The responsiveness is much improved. This got me thinking... can m0n0wall automatically compress VPN traffic?
