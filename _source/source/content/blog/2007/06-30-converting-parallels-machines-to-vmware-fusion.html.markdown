---
title: Converting Parallels Machines to VMWare Fusion and KQEMU on OSX attempts
date: 2007-06-30
tags: kqemu,parallels,virtualization,vmware
---
I'm following these instructions to convert a <a href="http://www.deadlock.it/2007/06/25/how-to-convert-a-parallels-desktop-vm-to-vmware-fusion-vm-windows-only/">Parallels machine into a VMWare Fusion Machine</a>. So far so good.

I'm doing a XP Home machine now, planning to try a FreeBSD machine too, but I'm not sure if that will work. No, doesn't look like the conversion of FreeBSD will work. Too bad.

Also, you have to re-activate Windows XP Home once you convert the machine, and since Windows limits the amount of times you can re-activate a Windows XP license, I'm not going to at this time. As I keep saying, I will move to QEMU for good once KQEMU is ported to OS X.

Just for the heck of it I tried compiling KQEMU on my Macbook, but no luck:

<pre>make -C common all

gcc -Wall -O2 -Werror -g -D__KERNEL__ -I.. -o genoffsets genoffsets.c./genoffsets > monitor_def.h

gcc -D__KERNEL__ -nostdinc -iwithprefix include -I. -I.. -D__ASSEMBLY__ -c -o i386/nexus_asm.o i386/nexus_asm.S

i386/nexus_asm.S:27:Unknown pseudo-op: .global

i386/nexus_asm.S:27:Rest of line ignored. 1st junk character valued 95 (_).

i386/nexus_asm.S:86:operands given don't match any known 386 instruction

i386/nexus_asm.S:117:bad register name ('%dr7')

i386/nexus_asm.S:146:bad register name ('%dr7')

i386/nexus_asm.S:170:operands given don't match any known 386 instruction

make[1]: *** [i386/nexus_asm.o] Error 1

make: *** [kqemu.o] Error 2</pre>

Well this is quite interesting:

<a href="http://qemu-forum.ipi.fi/viewtopic.php?t=3333">Kqemu for Darwin</a>

Its from March of 2007, three months ago, so even though very little is said about it, it appears to be the real deal. I was able to get it to load, but I'm not sure if its getting used by Q.

Kernel Module unloaded:

1:40 to boot debian to login prompt.

root# ./load_kqemu.sh

kextload: extension kqemu.kext appears to be valid

kextload: notice: extension kqemu.kext has debug properties set

kextload: loading extension kqemu.kext

kextload: kqemu.kext loaded successfully

kextload: loading personalities named:

kextload:     kqemu

kextload: sending 1 personality to the kernel

kextload: matching started for kqemu.kext

And it took 1:37 to do the same thing after the kernel module was loaded. Hmmm. When I try to pass a qemu argument to use kqemu, I get an error saying -kernel-kqemu is not a valid option.

I was just checking out the <a href="http://en.opensuse.org/Qemu_with_kqemu_kernel_module_support#Compiling_qemu_and_kqemu">OpenSUSE kqemu qemu docs</a> and found a cool trick for qemu: you can access a vm monitor by changing consoles by typing alt-ctrl-2 all at once.


I am able to compile Q with the kqemu option enabled, but then when I try to run anything, it doesn't work at all. :-(

I'm doing this by editing the qemu/configure file to have kqemu="yes", when following the <a href="http://www.kju-app.org/proj/wiki/CompilingQ">Downloading and compiling Q instructions</a> given by the Q developers. The qemu folder gets copied to tmp/qemu in the build_i386.sh process.

What does this do:

<table><tr><td>


With this client, I am able to connect, get the version, and run the three test. I'm not able to init or exec. I did a little more writing about this over at <a href="http://www.docunext.com/blog/">docunext.com</a>.</td></tr></table>

The new Q icons look awesome:


Very cool - I just realized I can use a Parallels drive with Q if it is in the raw format. I have to change the extension to .img, but that's fine with me. Yes its slower on a Mac but at least it will be portable to other computers which can use kqemu. :-)

