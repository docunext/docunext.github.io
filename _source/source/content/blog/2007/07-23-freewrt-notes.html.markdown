---
title: FreeWRT Notes and OpenWRT
date: 2007-07-23
---
I'm trying out FreeWRT again on an Ubuntu system, aka vmserver-1. I made a new directory in /usr/src/ called freewrt as root, then chowned it to my normal used, then exited sudo, and changed to that directory.

<pre>
svn co svn://www.freewrt.org/tags/freewrt_1_0_3

cd freewrt_1_0_3

make</pre>

That responds with:

<pre>You must install flex to continue.

You must install GNU Bison to continue</pre>

So I do so....

<pre>sudo su

aptitude install flex bison</pre>

Agreeing to the dependencies.... got a similar message about zlib, so installing zlib-bin... and libz-dev... and libncurses5-dev... and texinfo...

For next time:

<pre>aptitude install flex bison libz-dev libncurses5-dev texinfo zlib-bin</pre>

Hmmm, I can't seem to build for WRAP, or generic PC. Maybe that's in the trunk? Checking out svn now... yup. You'll need the SVN trunk to build for x86. As their website says - its in active development, expect unpredictable results. DOH! Now I'm getting this error:

<pre>gmake[3]: Entering directory `/usr/src/freewrt/freewrt-trunk/target'

sed -n '/^FWRT_KPACKAGE_KMOD/s//CONFIG/p' /usr/src/freewrt/freewrt-trunk/.config | \            sed 's/=y/=m/' >/usr/src/freewrt/freewrt-trunk/build_i386/.fwrtkernelconfig.modules

sed -n '/^FWRT_KERNEL/s//CONFIG/p' /usr/src/freewrt/freewrt-trunk/.config \            >/usr/src/freewrt/freewrt-trunk/build_i386/.fwrtkernelconfig.kernel

sed -n '/^# FWRT_KERNEL/s//# CONFIG/p' /usr/src/freewrt/freewrt-trunk/.config \            >/usr/src/freewrt/freewrt-trunk/build_i386/.fwrtkernelconfig.nokernel

cp linux/-/kernelconfig \            /usr/src/freewrt/freewrt-trunk/build_i386/.fwrtkernelconfig.board

cp: cannot stat `linux/-/kernelconfig': No such file or directory</pre>

Doh!

