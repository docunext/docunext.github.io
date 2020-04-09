---
title: Freebsd2 megaBSD and clark gentoo progress
date: 2007-07-23
tags: freebsd,gentoo
---
Made some progress on my second freebsd machine:

<ul><li>Setup minichroot and install subversion, php5, pear, and phing in it</li><li>/usr/src/ has been patched with wol code, and even though it doesn't work with sis 900, doesn't seem to cause any problems</li></ul>

Still need to:

<ul><li>Mount HD and power inlet properly</li><li>Find permanent home for it</li><li>Give it a better hostname than freebsd2</li></ul>

Also, on an old gentoo box (clark), I emerge --sync, and had to update its profile and upgraded to a new portage. From there I updated some non-essentials, like gzip, tar, and screen. Updates are going smooth, so I may upgrade postfix soon. It's currently 2.2 and I'd like to use 2.3 for its tarpit capabilities.

On "megaBSD", the new machine I built using a Gigabyte motherboard, 8GB of RAM, and an AMD 64 4600+, the operating system in RELENG_6_2 amd64, using on board nve0 ethernet, DHCP, no hostname setup yet. So far I used cvsup to sync sources, then followed the instructions at FreeBSD.org to rebuild world:

<pre class="sh_sh"># make buildworld
# make buildkernel
# make installkernel
# reboot</pre>Then after the reboot, I followed suit with:

<pre class="sh_sh"># shutdown now
# mergemaster -p
# cd /usr/src
# make installworld
# mergemaster
# reboot</pre>
Though not in the FreeBSD guide, I used the first command shutdown now because I forgot to use boot -s at the prompt. Also, I'm not sure if I had to cd /usr/src/, but I figured it couldn't hurt.

Somewhat unrelated, I'm using two SATA300 drives in this machine, and one was labeled ad4 and the other ad10. Due to how the installer orders them, I thought ad10 was first, so I installed on it. The bootloader was confused when I tried to start, and I'm sure it would have been possible to load from ad10, but I just installed again on ad4 and it worked fine.

So far, the machine is very fast, but quite power hungry. Idles at about 80 watts, and rises to 140 under heavy load. Amazing what a range of power consumption it has. No big deal, I won't be running it all the time.

