---
title: Failed to fetch Size mismatch
date: 2007-05-30
tags: debian
---
I'm using apt-cacher, but now whenever I update one of my machines that uses the cache, I get the above error. What gives?

I just noticed that the apt-cacher machine was using testing, whereas one of the other machines was using unstable. Maybe that was it? Nope, here's more detail into what's happening:

<pre class="sh_sh"># apt-get upgrade
Reading Package Lists... Done
Building Dependency Tree... Done
The following packages have been kept back:  adduser apt apt-utils aptitude bash debianutils erlang-base erlang-nox exim4 exim4-base exim4-config exim4-daemon-light initscripts  libpam-modules nano netbase passwd pciutils ssh sysvinit tasksel util-linux whiptail
The following packages will be upgraded:  at base-files console-common console-tools cron dselect groff-base ifupdown libconsole module-init-tools procps telnet tzdata ucf
14 upgraded, 0 newly installed, 0 to remove and 23 not upgraded.
Need to get 189kB/2955kB of archives.
After unpacking 1270kB of additional disk space will be used.
Do you want to continue? [Y/n]
Get:1 http://http.us.debian.org testing/main console-common 0.7.69 [131kB]
Get:2 http://http.us.debian.org testing/main ucf 3.001 [57.7kB]
Fetched 190kB in 0s (675kB/s)
Failed to fetch http://http.us.debian.org/debian/pool/main/c/console-common/console-common_0.7.69_all.deb  Size mismatch
Failed to fetch http://http.us.debian.org/debian/pool/main/u/ucf/ucf_3.001_all.deb  Size mismatch
E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?</pre>

Looks like its a bug that's been filed with Debian. In the meantime (maybe permanently?) I'm using my squid cache which only saves files less than 2MB, but is still useful for sure.

