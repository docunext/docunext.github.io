---
title: The Thecus isn t dead yet 
date: 2007-02-28
tags: thecus
---
Wow, after many failed attempts to resurrect the Thecus, its back in action! Many thanks to:

<a href="http://onbeat.dk/thecus/index.php/N2100_Recovering_from_a_bad_config_change">
http://onbeat.dk/thecus/index.php/N2100_Recovering_from_a_bad_config_change</a>

Darn - still not back from the dead. I'll have to wait for Martin to release the new image in a few weeks. At least I've verified that I can connect over serial again. The USB serial connector won't work. :-(

My notes:

<pre>
ip -l 192.168.0.123
ip -h 192.168.0.1
ip -d 0.0.0.0---
load -r initrd -b 0x00800000
load -r vmlinuz -b 0x00200000
exec -c "console=ttyS0,115200 root=/dev/ram0 initrd=0xa0800000,42M mem=128M@0xa0000000"---
Debootstrap error: "Release file signed by unknown key"---
debootstrap etch /target http://ftp.us.debian.org/debian </pre>

Thecus n2100 serial connection:

<pre>Computer
HW 				Thecus
2				2
3				6
5				5
The ribbon to the thecus must have the red stripe on the upper side.
</pre>

