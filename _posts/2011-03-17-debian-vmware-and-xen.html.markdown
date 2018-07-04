---
title: Debian VMWare and Xen plus OpenVZ 
date: 2011-03-17
tags: debian,lenny,openvz,squeeze,virtualization,vmware
---
I finally got the chance to set up a **Debian Xen** server today. After wrestling with Xen on a VMWare virtual machine (I know, I know) I found an older tower with an AMD CPU that happened to have the virtualization CPU capability. After that, I had much better luck.

The VMWare machine actually worked out somewhat well - it did everything, except DomU networking. I tried all options: network-bridge, network-route, and network-nat - all no good - packets were blocked.

With the real machine, it worked like a dream - though we did run into a problem with squeeze as a DomU (I'm running squeeze on Dom0) - when I created images with xen-create-image, the boot process would hang when trying to mount root. Lenny worked without a hitch.

Next up - running an openvz kernel within a domu!

**UPDATE**: I was able to install an **OpenVZ kernel inside of a Xen virtual machine image** today! How freaking cool is that?? This is *not* on the VMWare machine, but a real machine with an AMD CPU that supports virtualization.

The only way I could get this to work was to use the Debian Squeeze distro created with xen-create-image and without the --scsi option. The [Debian Xen documentation](http://wiki.debian.org/Xen) is a little confusing about this - whether or not to use the "--scsi" option. It works with Ubuntu Maverick and Lenny, but not Squeeze or Wheezy - the boot process hangs when it can't find /dev/sda2.

As a workaround, I left out the "--scsi" flag when using xen-create-image, and then installed grub within the image (which requires a working [pygrub on the debian dom0](http://wiki.debian.org/PyGrub)). After that I was able to install the OpenVZ kernel and boot with it. See this page on <a href="http://superuser.com/questions/255083/xen-fails-to-boot-timeout-mounting-dev-sda2?tab=active" rel="nofollow">superuser</a> where I comment about my resolution:

<blockquote class="svxlb"><pre>
I ended up simply not using the --scsi option for squeeze guests. I was able to make changes to the domu.cfg file, referencing xvd(a|b), and installing grub in the domu as described on the Debian pygrub page. Furthermore, I was able to install openvz in the domu, too!
</pre></blockquote>

Anyway, I am really impressed with Squeeze's support for Xen 4.0. I feel like this is going to have a huge impact on how GNU/Linux and virtualization is going to evolve. Sure, KVM is making some impressive progress into the kernel, but I'm just not comfortable with its *userland* vibe. Not to mention its spawned from [Bellard's](http://bellard.org/) qemu project - phenomenal!! As a matter of fact, some of QEMU is used for Xen's HVM implementation.

I can't wait to automate the build of this server as well as the build of xen images and openvz containers within them. That will be really awesome. Oh and I also want to see what the xen http server is all about.... so much cool stuff to explore... lol!

