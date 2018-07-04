---
title: First Real FreeBSD Machine
comments:
  - author: Rob
    email: rbyrnes@gmail.com
    ip: 203.194.27.78
    url:
    date: 07/23/2007 08:44:00 PM
    text: >
      WOL is a known issue on FreeBSD ... see <a href="http://www.freebsd.org/news/status/report-2007-04-2007-06.html#FreeBSD-and-Wake-On-Lan" rel="nofollow">http://www.freebsd.org/news/status/report-2007-04-2007-06.html#FreeBSD-and-Wake-On-Lan</a>
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 07/26/2007 12:42:28 PM
    text: >
      Hi Rob, yeah I found that too - I tried the patch but still couldn't get it to work. I contacted the author who was helpful, but I didn't know enough about FreeBSD and device drivers to help. I'm just using the hardware reboot now.
date: 2007-07-19
tags: d201gly,freebsd,gigabyte,intel
---
I'm building a "real" (not a virtual) FreeBSD workstation - my first ever! It will be comprised of the following components:

<ul>
<li><del>PC Chips motherboard A11G</del> - now a Gigebyte board, see below</li>
<li>AMD Athlon 64 X2 3600+</li>
<li>
2 x 2GB = 4GB RAM</li>
<li>80GB SATA drive</li>
<li>Seasonic 330Watt power supply</li>
</ul>

DOH! I'm getting the BTX halted error, caused by BIOS doing bad stuff. I tried fail safe settings and disabling all that I could, but no avail. Darn. I tried the bootonly disk and a Frisbee distribution, but I'll also try the full CD just for the heck of it before I try some other tactics. Nope that didn't work either.

Guess I'll try building the workstation with a D201GLY instead or a Gigabyte S55SLI. :-(

So far so good. My install had a little trouble at first with the media connection (its very cool they allow you to set the value of the timeout in the beginning!). To be specific, the motherboard I'm using now is a Gigabyte GA-M55SLI-S4 rev 2.0. I'm installing to a 80GB IDE hard drive using an IDE CD-ROM. I tried using a USB CD-ROM, but it was unable to load the kernel for some reason, even though I'm positive I've booted FreeBSD off a USB CD-ROM drive on other machines.

This system has the same components as I previously mentioned, 4GB ram, Athlon 64 X2 processor, and a SeaSonic power supply. It also has an ATI Rage XL PCI graphics card which I'm using only for the install. I'll soon remove it and just use the serial port for a console, and login over SSH. What's that? Of course I'll post how I end up doing that, if I can figure it out! :-)

Well that was easy!

<a href="http://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/serialconsole-setup.html" title="how to setup a serial console on freebsd">http://www.freebsd.org/.../serialconsole-setup.html</a>

Now wake on lan in FreeBSD is a different story!

<a href="http://www.stsp.in-berlin.de/wol/">http://www.stsp.in-berlin.de/wol/</a>

Here's what I did:

<pre class="sh_sh">
cd /usr/ports/ftp/wget/
make install
cd /root/
wget http://... link from in-berlin.de/wol/...
cd /usr/src/
patch -p0 &lt; /root/Fre...
make -j10 buildkernel
make installkernel
reboot
</pre>

After the reboot, I'm trying to follow the next steps:

<pre class="sh_sh">cd /usr/src/sbin/ifconfig
make clean obj
make &amp;&amp; make install</pre>

But I'm getting an error:

<pre class="sh_sh">/usr/src/sbin/ifconfig/ifwol.c:57: warning: 'parse_args' declared `static' but never defined
/usr/src/sbin/ifconfig/ifwol.c:138: warning: 'parse_args' defined but not used*** Error code 1</pre>

Duh, I forgot to "make installkernel", trying that now and rebooting. Got the same error after rebooting, so then I tried rebuilding the world, somewhat following the guidelines at <a href="http://askozia.com/how-to/how-to-install-freebsd6-for-m0n0wall-development.php">askozia for building a freebsd 6.2 development system</a>. Tried to build ifconfig again and got the same error again.

Then, after feeling like I made a significant effort on trying to fix the problem myself, I decided to email the author of the code (its usually a good idea to try to resolve the problem on your own considering how much work the original author has already done - if you figure it out,  email them the fix, if not email them what you've tried, they'll likely be more responsive!).

<blockquote>Hi,

I tried your patch on a freebsd machine and was able to run the patch, recompile and install the kernel, and reboot, but when I try to compile ifconfig I get an error:&gt;&gt;&gt;/usr/src/sbin/ifconfig/ifwol.c:57: warning: "struct if_wolopts" declared inside parameter list/usr/src/sbin/ifconfig/ifwol.c:57: warning: its scope is only this definition or declaration, which is probably not what you want/usr/src/sbin/ifconfig/ifwol.c: In function `wol_status':/usr/src/sbin/ifconfig/ifwol.c:73: error: `SIOCGIFWOLSUPP' undeclared (first use in this function)[snip snip snip/]/usr/src/sbin/ifconfig/ifwol.c:627: warning: 'parse_sopasswd' defined but not used*** Error code 1

Stop in /usr/src/sbin/ifconfig.&lt;&lt;&lt;

The freebsd is freshly installed with the developer distro, release_6_2, no x. I figure I must be missing something because of the way the errors are looking.

Thanks so much!</blockquote>

He was very quick to respond and suggested I try "make includes" in /usr/src so I'm doing that now. A new error, now trying a reboot before I try again. Same new error, so I email Stefan back:

<blockquote>

Made a little bit of progress! I ran "make includes" in /usr/src/, and then tried to run "make" in /usr/src/sbin/ifconfig/ and am getting different errors:<textarea rows="8" cols="60"><pre><br/ /><br/ />In file included from /usr/src/sbin/ifconfig/ifwol.c:282:/usr/src/sbin/ifconfig/ifconfig.h:42: error: redefinition of typedef 'c_func'/usr/src/sbin/ifconfig/ifconfig.h:42: error: previous declaration of 'c_func' was here/usr/src/sbin/ifconfig/ifconfig.h:43: error: redefinition of typedef 'c_func2'/usr/src/sbin/ifconfig/ifconfig.h:43: error: previous declaration of 'c_func2' was here/usr/src/sbin/ifconfig/ifconfig.h:45: error: redefinition of `struct cmd'/usr/src/sbin/ifconfig/ifconfig.h:59: error: redefinition of typedef 'callback_func'/usr/src/sbin/ifconfig/ifconfig.h:59: error: previous declaration of 'callback_func' was here/usr/src/sbin/ifconfig/ifconfig.h:79: error: redeclaration of enumerator `RIDADDR'/usr/src/sbin/ifconfig/ifconfig.h:79: error: previous definition of 'RIDADDR' was here/usr/src/sbin/ifconfig/ifconfig.h:80: error: redeclaration of enumerator `ADDR'/usr/src/sbin/ifconfig/ifconfig.h:80: error: previous definition of 'ADDR' was here/usr/src/sbin/ifconfig/ifconfig.h:81: error: redeclaration of enumerator `MASK'/usr/src/sbin/ifconfig/ifconfig.h:81: error: previous definition of 'MASK' was here/usr/src/sbin/ifconfig/ifconfig.h:82: error: redeclaration of enumerator `DSTADDR'/usr/src/sbin/ifconfig/ifconfig.h:82: error: previous definition of 'DSTADDR' was here/usr/src/sbin/ifconfig/ifconfig.h:85: error: redefinition of `struct afswtch'/usr/src/sbin/ifconfig/ifconfig.h:117: error: redefinition of `struct option'/usr/src/sbin/ifconfig/ifwol.c:296: error: redefinition of 'wol_status'/usr/src/sbin/ifconfig/ifwol.c:67: error: previous definition of 'wol_status' was here/usr/src/sbin/ifconfig/ifwol.c:323: error: redefinition of 'print_wol_events'/usr/src/sbin/ifconfig/ifwol.c:94: error: previous definition of 'print_wol_events' was here/usr/src/sbin/ifconfig/ifwol.c:342: error: redefinition of 'setwol'/usr/src/sbin/ifconfig/ifwol.c:113: error: previous definition of 'setwol' was here/usr/src/sbin/ifconfig/ifwol.c:367: error: redefinition of 'parse_args'/usr/src/sbin/ifconfig/ifwol.c:138: error: previous definition of 'parse_args' was here/usr/src/sbin/ifconfig/ifwol.c:398: error: redefinition of 'parse_sopasswd'/usr/src/sbin/ifconfig/ifwol.c:169: error: previous definition of 'parse_sopasswd' was here/usr/src/sbin/ifconfig/ifwol.c:424: error: redefinition of 'unsetwol'/usr/src/sbin/ifconfig/ifwol.c:195: error: previous definition of 'unsetwol' was here/usr/src/sbin/ifconfig/ifwol.c:438: error: redefinition of 'wol_cmds'/usr/src/sbin/ifconfig/ifwol.c:209: error: previous definition of 'wol_cmds' was here/usr/src/sbin/ifconfig/ifwol.c:442: error: redefinition of 'af_wol'/usr/src/sbin/ifconfig/ifwol.c:213: error: previous definition of 'af_wol' was here/usr/src/sbin/ifconfig/ifwol.c:450: error: redefinition of 'ifwol_ctor'/usr/src/sbin/ifconfig/ifwol.c:221: error: previous definition of 'ifwol_ctor' was here<br/ /><br/ />In file included from /usr/src/sbin/ifconfig/ifwol.c:511:/usr/src/sbin/ifconfig/ifconfig.h:42: error: redefinition of typedef 'c_func'/usr/src/sbin/ifconfig/ifconfig.h:42: error: previous declaration of 'c_func' was here/usr/src/sbin/ifconfig/ifconfig.h:42: error: redefinition of typedef 'c_func'/usr/src/sbin/ifconfig/ifconfig.h:42: error: previous declaration of 'c_func' was here/usr/src/sbin/ifconfig/ifconfig.h:43: error: redefinition of typedef 'c_func2'/usr/src/sbin/ifconfig/ifconfig.h:43: error: previous declaration of 'c_func2' was here/usr/src/sbin/ifconfig/ifconfig.h:43: error: redefinition of typedef 'c_func2'/usr/src/sbin/ifconfig/ifconfig.h:43: error: previous declaration of 'c_func2' was here/usr/src/sbin/ifconfig/ifconfig.h:45: error: redefinition of `struct cmd'/usr/src/sbin/ifconfig/ifconfig.h:59: error: redefinition of typedef 'callback_func'/usr/src/sbin/ifconfig/ifconfig.h:59: error: previous declaration of 'callback_func' was here/usr/src/sbin/ifconfig/ifconfig.h:59: error: redefinition of typedef 'callback_func'/usr/src/sbin/ifconfig/ifconfig.h:59: error: previous declaration of 'callback_func' was here/usr/src/sbin/ifconfig/ifconfig.h:79: error: redeclaration of enumerator `RIDADDR'/usr/src/sbin/ifconfig/ifconfig.h:79: error: previous definition of 'RIDADDR' was here/usr/src/sbin/ifconfig/ifconfig.h:79: error: redeclaration of enumerator `RIDADDR'/usr/src/sbin/ifconfig/ifconfig.h:79: error: previous definition of 'RIDADDR' was here/usr/src/sbin/ifconfig/ifconfig.h:80: error: redeclaration of enumerator `ADDR'/usr/src/sbin/ifconfig/ifconfig.h:80: error: previous definition of 'ADDR' was here/usr/src/sbin/ifconfig/ifconfig.h:80: error: redeclaration of enumerator `ADDR'/usr/src/sbin/ifconfig/ifconfig.h:80: error: previous definition of 'ADDR' was here/usr/src/sbin/ifconfig/ifconfig.h:81: error: redeclaration of enumerator `MASK'/usr/src/sbin/ifconfig/ifconfig.h:81: error: previous definition of 'MASK' was here/usr/src/sbin/ifconfig/ifconfig.h:81: error: redeclaration of enumerator `MASK'/usr/src/sbin/ifconfig/ifconfig.h:81: error: previous definition of 'MASK' was here/usr/src/sbin/ifconfig/ifconfig.h:82: error: redeclaration of enumerator `DSTADDR'/usr/src/sbin/ifconfig/ifconfig.h:82: error: previous definition of 'DSTADDR' was here/usr/src/sbin/ifconfig/ifconfig.h:82: error: redeclaration of enumerator `DSTADDR'/usr/src/sbin/ifconfig/ifconfig.h:82: error: previous definition of 'DSTADDR' was here/usr/src/sbin/ifconfig/ifconfig.h:85: error: redefinition of `struct afswtch'/usr/src/sbin/ifconfig/ifconfig.h:117: error: redefinition of `struct option'/usr/src/sbin/ifconfig/ifwol.c:525: error: redefinition of 'wol_status'/usr/src/sbin/ifconfig/ifwol.c:296: error: previous definition of 'wol_status' was here/usr/src/sbin/ifconfig/ifwol.c:525: error: redefinition of 'wol_status'/usr/src/sbin/ifconfig/ifwol.c:296: error: previous definition of 'wol_status' was here/usr/src/sbin/ifconfig/ifwol.c:552: error: redefinition of 'print_wol_events'/usr/src/sbin/ifconfig/ifwol.c:323: error: previous definition of 'print_wol_events' was here/usr/src/sbin/ifconfig/ifwol.c:552: error: redefinition of 'print_wol_events'/usr/src/sbin/ifconfig/ifwol.c:323: error: previous definition of 'print_wol_events' was here/usr/src/sbin/ifconfig/ifwol.c:571: error: redefinition of 'setwol'/usr/src/sbin/ifconfig/ifwol.c:342: error: previous definition of 'setwol' was here/usr/src/sbin/ifconfig/ifwol.c:571: error: redefinition of 'setwol'/usr/src/sbin/ifconfig/ifwol.c:342: error: previous definition of 'setwol' was here/usr/src/sbin/ifconfig/ifwol.c:596: error: redefinition of 'parse_args'/usr/src/sbin/ifconfig/ifwol.c:367: error: previous definition of 'parse_args' was here/usr/src/sbin/ifconfig/ifwol.c:596: error: redefinition of 'parse_args'/usr/src/sbin/ifconfig/ifwol.c:367: error: previous definition of 'parse_args' was here/usr/src/sbin/ifconfig/ifwol.c:627: error: redefinition of 'parse_sopasswd'/usr/src/sbin/ifconfig/ifwol.c:398: error: previous definition of 'parse_sopasswd' was here/usr/src/sbin/ifconfig/ifwol.c:627: error: redefinition of 'parse_sopasswd'/usr/src/sbin/ifconfig/ifwol.c:398: error: previous definition of 'parse_sopasswd' was here/usr/src/sbin/ifconfig/ifwol.c:653: error: redefinition of 'unsetwol'/usr/src/sbin/ifconfig/ifwol.c:424: error: previous definition of 'unsetwol' was here/usr/src/sbin/ifconfig/ifwol.c:653: error: redefinition of 'unsetwol'/usr/src/sbin/ifconfig/ifwol.c:424: error: previous definition of 'unsetwol' was here/usr/src/sbin/ifconfig/ifwol.c:667: error: redefinition of 'wol_cmds'/usr/src/sbin/ifconfig/ifwol.c:438: error: previous definition of 'wol_cmds' was here/usr/src/sbin/ifconfig/ifwol.c:667: error: redefinition of 'wol_cmds'/usr/src/sbin/ifconfig/ifwol.c:438: error: previous definition of 'wol_cmds' was here/usr/src/sbin/ifconfig/ifwol.c:671: error: redefinition of 'af_wol'/usr/src/sbin/ifconfig/ifwol.c:442: error: previous definition of 'af_wol' was here/usr/src/sbin/ifconfig/ifwol.c:671: error: redefinition of 'af_wol'/usr/src/sbin/ifconfig/ifwol.c:442: error: previous definition of 'af_wol' was here/usr/src/sbin/ifconfig/ifwol.c:679: error: redefinition of 'ifwol_ctor'/usr/src/sbin/ifconfig/ifwol.c:450: error: previous definition of 'ifwol_ctor' was here/usr/src/sbin/ifconfig/ifwol.c:679: error: redefinition of 'ifwol_ctor'/usr/src/sbin/ifconfig/ifwol.c:450: error: previous definition of 'ifwol_ctor' was here/usr/src/sbin/ifconfig/ifwol.c:552: warning: 'print_wol_events' defined but not used/usr/src/sbin/ifconfig/ifwol.c:596: warning: 'parse_args' defined but not used/usr/src/sbin/ifconfig/ifwol.c:627: warning: 'parse_sopasswd' defined but not used*** Error code 1<br/ /><br/ />Stop in /usr/src/sbin/ifconfig.</pre></textarea>

So then I tried copying the headers over as you suggested previously, but a subsequent make results in the same errors. Now rebuilding world, will email you again in awhile!</blockquote>

I quickly followed up with:

<blockquote>Since I'm new to FreeBSD, I don't know how relevant it is so I'll also mention it anyway: when I rebuilt the world yesterday I didn't do it from single user mode, so I'm trying that now.</blockquote>

Aha! <del>I figured it out. Yesterday when trying to debug the errors, I tried the previous patch (the one without the "_2"), to see if that would help. I just applied the newest one and it compiled without errors. I think if I have run "make includes" in /usr/src/ yesterday without using the other patch, everything would have been fine, so it would probably be a good idea to update your info page.</del>

So it compiled and installed, but when I run ifconfig, no wakeon magic. Rebooting now. I think I actually reversed the patch, and that's why it compiled. I'm a little confused so I might start over with a fresh install. :-( Before that, I'm just trying to backtrack a little, I backed up ifconfig and sys/pci, as well as sys/sys and then did a cvsup. From there I repatched the diff from stefan, rebuilt the kernel, rebuilt the includes, went to single user mode, then installed the kernel, then restarted.

Not working though...

<pre class="sh_sh">fbsd1# acpiconf -s 1
fwohci0: fwohci_pci_suspend
pci0: Failed to set ACPI power state D1 on \_SB_.PCI0.USB0: AE_BAD_PARAMETER
pci0: Failed to set ACPI power state D1 on \_SB_.PCI0.USB2: AE_BAD_PARAMETER
acpi_bus_number: can't get _ADR
acpi_bus_number: can't get _ADR</pre>

Well S1 actually worked, though I couldn't wakeonlan.

I just have to say, I really like FreeBSD so far. My introduction to "BSD" style in general was through Darwin, and it was frustrating because of I am more familiar with linux and the two are similar, but not the same. Like Gentoo, rebuilding world takes a LOOOONG time, so I'm planning to <a href="http://www.tomjudge.com/howtos/distcc_ccache.php">setup a build cluster on freebsd using distcc and ccache</a>.

So I couldn't get wake on lan to work on that machine so I'm onto a third one. This one uses the d201gly little valley from intel, which has an sis network card so it should be able to wake on lan without issue. I hope! This way I'll get more practice on applying the wol patches to the freebsd sources.

I'm running into a similar problem here, so next time, I'm going to install FreeBSD, cvsup, rebuild the world, apply the patch, rebuild the kernel, install the kernel, reboot, and then compile ifconfig.

<a href="http://lists.freebsd.org/pipermail/freebsd-acpi/2005-February/001324.html">http://lists.freebsd.org/pipermail/freebsd-acpi/2005-February/001324.html</a>

Dang, for the life of me, I could not get WOL to work with FreeBSD. On both the Gigabyte board as well as the Intel little valley board. Oh well. I'm instead using a web switch and the wake from power outage function that most bios have. I've already tried it with the little valley and its works fine, should also work fine with the gigabyte board.

It will be good to rebuild the gigabyte board as this time I'd like to try building it with RAID. I'm also considering using 64bit FreeBSD instead, and using more RAM.

¥

