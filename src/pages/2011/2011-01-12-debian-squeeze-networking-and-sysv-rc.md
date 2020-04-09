---
title: Debian Squeeze Networking and Sysv rc
comments:
  - author: Greg Armer
    email: greg@codelounge.org
    date: 02/09/2011 11:37:09 AM
    text: >
      I had the exact same problem. The solution for me was to install 'ifupdown' which somehow got removed. These utilities are used by /etc/init.d/networking to bring up the interfaces.
  - author: Admin
    email: albert.lash@savonix.com
    date: 02/10/2011 10:07:01 AM
    text: >
      Thanks for sharing, Greg. I'll try that and see what happens.
  - author: Albert
    email: albert.lash@savonix.com
    date: 04/11/2011 12:01:51 AM
    text: >
      Greg, you were totally correct. I installed ifupdown and everything is copacetic. Thank you!
date: 2011-01-12
tags: debian,networking,openvz,raid,squeeze,udev
---
I've been running Squeeze for awhile, and like most Debian "testing" systems, it has been running fairly smoothly.

However, today I ran into a problem with OpenVZ, the kernel, udev, and sysv-rc.

Seems that some combination of an update or some other, my network interfaces would not start. I *believe* that this was caused primarily by an update to udev without and update to the kernel, or to sysv-rc.

I'm running <tt>apt-get upgrade</tt> now, and I'm very hopeful that one of the updates will fix the problem. I'm very glad I had KVMOIP setup, as the server was simply offline, and its about 8 hours away. :-(

Once I was able to access the console, the usual command did nothing:

<pre class="sh_sh">
/etc/init.d/networking restart
</pre>

Instead, I issued the following commands:

<pre class="sh_sh">
ifconfig eth0 192.168.8.12 netmask 255.255.255.0 up
route add default gw 192.168.8.1 eth0
ifconfig lo 127.0.0.1
</pre>

Good, back online.

#### How to Restart Networking in Debian Squeeze

So if <tt>networking restart</tt> does not work, what does? A little research turns up this:

<pre class="sh_sh">
invoke-rc.d networking restart
</pre>

**Nope, still no luck on why no networking in starting on this machine. It has other problems, so I can't diagnose at the moment.**

The [server at least needs a new CMOS battery (CR2302)](http://www.my-tech-deals.com/blog/2011/01/replacement-cr2032-battery-for-tyan-thunder-k8s-pro.html), and after that, I plan to do a complete re-install of Debian Squeeze, including a change from RAID5 to RAID10.

¥

