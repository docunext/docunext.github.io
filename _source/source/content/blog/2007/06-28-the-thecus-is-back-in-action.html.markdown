---
title: The Thecus is back in ACTION 
date: 2007-06-28
tags: debian,energy,iperf,thecus
---
Wow, I finally got the Thecus running debian again. :-)

Here's the commands I used in redboot to load the initrd and kernel via tftp.

<pre class="sh_sh">ip_address -l 192.168.0.56
ip_address -h 192.168.0.2
load -r initrd -b 0x00800000
load -r vmlinuz -b 0x00200000
exec -c "console=ttyS0,115200 root=/dev/ram0 initrd=0xa0800000,42M mem=128M@0xa0000000"
openssl enc -d -des -in n2100.bin -out upgrade.tar.gz -K 7A9816A4C275D557 -iv 0 -nosalt -nopad</pre>

I had to extract the initrd and the vmlinuz from the n2100.bin that debian provided because my system was all messed up. The new debian installer is great - skips the bad hostname part, and everything went smoothly.

This time I'm only running with one disk, and the power consumption is still at 18 watts. What's up with that? And iperf is only able to get 120 Mbits / second, even when the link is 1000Mbits. Oh well, at least its running now.

