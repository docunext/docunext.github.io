---
title: VPSLink Coreutils versus 2.6.18 ovz028stab053.5 smp
date: 2009-05-28
tags: dpkg,openvz
---
I just setup a new Debian OpenVZ container on a commercial VPS. It was installed as Lenny, but since I want to install a newer version of Varnish, I upgraded to Squeeze.

<pre class="sh_sh">
uh-oh::/var/cache/apt/archives# dpkg -i dpkg_1.14.26_i386.deb (Reading database ... 12216 files and directories currently installed.)
Preparing to replace dpkg 1.14.26 (using dpkg_1.14.26_i386.deb) ...
Unpacking replacement dpkg ...
Replaced by files in installed package base-files ...
Setting up dpkg (1.14.26) ...
touch: setting times of `/var/log/dpkg.log': Bad address
</pre>

Oh-no! A little digging reveals that there is a conflict between the newer version of coreutils and the kernel that is running on the openvz host. I'm surprised as I have an openvz host which is running 2.6.18 with squeeze containers... I think. I'll have to check that.

