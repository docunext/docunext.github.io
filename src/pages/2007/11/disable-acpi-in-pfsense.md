---
title: Disable ACPI in pfSense
date: 2007-11-29
tags: acpi,intel,pfsense
---
I just installed pfSense on an old PIII server (intel L440GX mainboard), and for whatever reason, it would freeze when booting. By disabling ACPI, it boots OK, so I did some searching for information on how to disable ACPI for every boot. I found that this is possible by adding:

<pre class="sh_sh">
hint.acpi.0.disabled="1"
</pre>

to the end of /boot/device.hints from the diagnostics -> edit file menu option.

I'm now using the most recent build of pfSense (1.2-RC3) on several machines and I'm very pleased with the results.

The cool thing about this mini-project was that I was able to replace a VPN gateway router which was running on debian without too much trouble. I was a little nervous about doing that, especially remotely, but it worked out well. I first created a third VLAN on my Cisco router for a new subnet, just in case I wasn't able to do the switch. Then I moved the current gateway address, keeping the public WAN address active. Then I switched in the lan ip of the new pfsense vpn firewall router, setup IPSec and tested it to make sure it was OK. Then I made the LAN nic of the old VPN server a dhcp client, tested it, then did the same for its wan port, and added the port on the cisco switch to the second VLAN.

Thankfully, it all worked! :-)

Thanks:

http://www.freebsd.org/doc/en_US.ISO8859-1/articles/laptop/article.html

http://doc.pfsense.org/index.php/HOWTO_disable_acpi

