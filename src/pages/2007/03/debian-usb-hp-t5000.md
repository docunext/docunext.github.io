---
title: Debian USB HP t5000
comments:
  - author: Jacobo
    email: ffelagund@typhoonlabs.com
    url: http://www.typhoonlabs.com
    date: 06/29/2008 08:47:34 AM
    text: >
      Hello, lets see if you could help me :)<br/>I have an HP T5000 TC. I installed Debian Lenny on an external usb drive (a 350Gb external hard disk) The problem, is that I'm unable to boot it. HDA1 (ata flash) Grub refuses to detect any other device than HD0, and if I reinstall there grub, I got an error 21. How did you manage that installation part?<br/>Thanks.
  - author: Albert
    date: 06/29/2008 04:44:43 PM
    text: >
      Hi Jacobo - did you install the kernel on hd0? When I set it up, I had to put /boot/ on hd0, and then put / on hd1.
  - author: Jacobo
    email: ffelagund@typhoonlabs.com
    url: http://www.typhoonlabs.com
    date: 07/05/2008 02:01:11 PM
    text: >
      Hi,<br/>At last, I managed it. I placed /boot in the flash, and grub was able to load the stage2 from there, and then the kernel. Now I have successfully installed Ubuntu (I tried first Debian, but I wasn't able of make the net work, Eth0 was recognised but I couldn't access my other LAN machines. Ubuntu did it with no problem. Thanks :)
  - author: Albert
    date: 07/05/2008 02:26:15 PM
    text: >
      Nice work Jacobo!
  - author: Simon Clare
    email: simonc50@hotmail.com
    date: 12/31/2008 02:33:40 PM
    text: >
      Nice article.!! I have a 1ghz t5000 ..you should try Voyage linux ,they just released a new version ...you can install it too CF card ..i have a internet radio 512MB CF and a atheros wifi-card(supported in the kernel)...Voyage is a complete debian distro with apt-get what more could you ask for..!!Great site Thanks!
  - author: Albert
    date: 01/02/2009 02:09:40 AM
    text: >
      Thanks Simon, I've been meaning to try out Voyage - looks very cool! I've been working on my own variation of a minimal debian system:<br/><br/><a href="http://www.mindeb.com/blog/" rel="nofollow">http://www.mindeb.com/blog/</a>
date: 2007-03-28
tags: open source
---
I'm trying to install debian on an HP t5000 thin client, using a USB drive as an expanded storage device for the base system. Here's what I've got so far:

<pre>32MB ATA Flash memory mounted as /

175MB USB Flash as /home/

175MB USB Flash as /usr/

175MB USB Flash as /var/</pre>

Hopefully that setup will fix the problems I've been having with sda versus sdb upon reboot. This time I'll keep the installer USB plugged in, and I'll change the BIOS to boot off the internal flash memory first. Then I'll do something with the installer USB drive at some point.

Nope, the 32MB was not big enough.

Will this work:

<a href="http://blog.edong.net/?p=58">deb2flash</a>

Now I'm trying to just go off of a USB drive, but having some issues... casper is reporting "Unable to find a medium containing a live file system."

Trying this instead:<A href="http://linux.go2linux.org/node/34">

How to install Debian Etch on USB Flash memory stick</a>

My disk is /dev/sda/ yours might not be!

<pre>shred -n 1 -z -v /dev/sda

parted /dev/sda "mklabel msdos mkpartfs primary ext2 0 21 mkpartfs primary ext2 21 -0 set 1 boot on"

mkdir /mnt/buildroot

mount /dev/sda2 /mnt/buildroot

mkdir /mnt/buildroot/boot

mount /dev/sda1 /mnt/buildroot/boot

debootstrap --arch i386 etch /mnt/buildroot

chroot /mnt/buildroot /bin/su -..some steps missing here...

grub-install --recheck --root-directory=/mnt/buildroot /dev/sda</pre>

Crud, that didn't work.

Hmmm.

Giving the 32MB / USB flash duo a try again. This time just using the 32MB as a /boot/ mount. Again I'll have to tell the bios to try booting off it first, or at least put a blank usb flash drive in the installer's place.

Sweet! Finally got it to work. The via_rhine modules doesn't seem to work well at all... so I plugged in a linksys usb ethernet connector and it worked much better.

I keep getting these errors on startup:

<pre>usb 3-4: control timeout on ep0in</pre>

No idea...

Then the USB Flash drive got corrupted, so I'm now using an external USB 2.5 inch hard drive. Working fine, only uses 14 watts, all things considered. :-)

¥

