---
title: Move an existing Windows 2000 installation to a virtual machine success 
date: 2007-02-17
tags: freebsd,qemu,virtualization,windows
---
I can't believe it, but it worked! After lots of failed attempts, I finally was able to migrate an existing Windows 2000 installation from a Toshiba laptop to a QEMU "Q" virtual machine without the Windows 2000 installation disk.

<strong>Some background on why I converted a working Windows 2000 install to a Virtual Machine</strong>: <ol><li>I lost my Windows 2000 disk.</li><li>I really want to keep my Windows 2000 install because it is on a machine that I used for many years containing lots of information I'd like to keep archived.</li><li>The laptop has seen better days to say the least, and I wouldn't be surprised if it kicked the bucket someday soon.</li><li>I'd like to keep using my Windows 2000 software which I bought at the full retail price.</li></ol>

<strong>My first few attempts to convert</strong>

My first few attempts were not successful. I was getting the blue screen of death. I tried both "Q" the QEMU based emulator for Mac OS X, as well as Parallels, but always got the BSOD. You can read more about my lame attempts to make a <a href="http://www.runpcrun.com/move-windows-xp-to-new-system-or-motherboard">QEMU âQâ Windows 2000 Disk Image</a>.

<strong>The Right Way</strong>

It was pretty easy. This website had all the information and resources I needed:

<a href="http://www.runpcrun.com/move-windows-xp-to-new-system-or-motherboard">Move your drive with Windows 2000 (or XP) to a new system</a>

So its working, but since I'd like it to run faster I'm trying to convert it to a Parallels machine. It will also take up less room too. First I converted the dmg file to a crd file, and am now running the Parallels Image Tool on it, converting it to an expanding virtual disk. I had to change the extension from .cdr to .hdd for it to even look at it. I have no idea if this is going to work, but as usual I'll let you know the results.

<strong>QEMU to Parallels</strong>

This is a tough one. As much as I love the speed and usability of Parallels, I'm disappointed they don't support more image formats. I did find a couple of useful pages:

<a href="http://forum.parallels.com/thread7910.html">http://forum.parallels.com/thread7910.html - Migrate your beloved windows install to parallels for mac...</a>

<a href="http://forum.parallels.com/thread3261-2.html">http://forum.parallels.com/thread3261-2.html - How I migrated my Boot Camp setup into Parallels...</a>

There seem to be rumors that .hdd virtual hard drive images are simply .iso files, but I haven't found a reliable source of that information yet.

The best way to do this is to convert a drive using the Windows version of the Parallels Image Tool. Not sure why they don't have that function in the Mac version, but they don't. So I'm kind of confused - I took the advice of a page I read and used the Windows version of Parallels to create a disk image of the existing Windows drive, but when I try to boot it, I get an error. However, I changed the .hdd to a .cdr, and it booted in Q. Argh.

Now I'm trying to convert the image to an expanding type to see if that helps. I mainly want to try and reduce the size of the disk image, 20GB is too unwieldy. I'm using both the Mac Disk Utility to convert a dmg to a compressed dmg and the Parallels Image Tool to convert an hdd file to an expanding hdd file. From there, I'm going to try using the Parallels application itself to compact the image.

Results:

<ul><li>Using a compressed .dmg file with QEMU did not work at all. </li><li>Parallels was not able to compact the image at all.</li><li>Converting the 18GB .dmg file to a qcow image took awhile, but it did take 6GB off, and appears to be working OK. Sweet!</li></ul>

The qemu-img command line tool in Mac OS X seems to be finicky. Some instructions I've tried end up with files like "-c" or "-O" instead of the target filename. Here's the one I got to work:

<pre>/Applications/Q.app/Contents/MacOS/qemu-img convert -c -f raw -O qcow disk1.dmg disk1.qcow</pre>

And one last note, if you are looking for information about the QEMU virtualization accelerator on Mac OS X, this is the best reference I found:

<a href="http://qemu-forum.ipi.fi/viewtopic.php?t=930&amp;start=105">KQEMU on Mac OS X</a> dated Sun Oct 08, 2006 9:42 am. I'm surprised there isn't more interest in KQEMU on Mac OS X now that its GPL, but then again I'm not qualified to say how much work would be involved in creating the kernel extension. Perhaps the nice folks at the fantastic <a href="http://code.google.com/p/macfuse/">Google MacFUSE</a> project would know how to create that kernel extension?

Also <a href="http://www.docunext.com/blog/2007/08/kqemu-on-mac-os-x.html">KQEMU on Mac OS X?</a>

Anyway that link to the QEMU forums quotes Fabrice, the creator of QEMU saying this:

<blockquote>

kqemu has been ported to many very different OSes (Windows, FreeBSD, Solaris, Linux), so Mac OS X should not be especially difficult. The first step is that you look at a close port such as the FreeBSD one (the source code is in the kqemu archive) and read the documentation given in the Linux wrapper (kqemu-linux.c). The second part is to be able to link the OS independent part of kqemu to you wrapper code. As the OS independant part is not open source, you need to either convert the ELF object code (kqemu-mod-i386.o) to your preferred format (Mach-O I presume), or I need to recompile the source code so that I can give you a Mach-O object file ready for linking with the OS specific wrapper. </blockquote>

<strong>Related</strong>:

<a href="http://qemu-forum.ipi.fi/viewtopic.php?t=1140&amp;highlight=performance">Q Qemu performance tips</a>

<a href="http://arstechnica.com/guides/tweaks/memory-1.ars">Windows 2000 Optimization Tips</a>

<strong>Problems</strong>:

<a href="http://www.jsifaq.com/SF/Tips/Tip.aspx?id=2764">Add Remove Programs Not Working</a>

<a href="http://support.microsoft.com/?kbid=266668">http://support.microsoft.com/?kbid=266668</a>

An unexpected error occured: res://sp3res.dll/default.hta

Changed:

HKEY_LOCAL_MACHINE\SOFTWARE\CLASSES\.htc-&gt; make sure the value "Content Type" should be "text/x-component"

That <strong>did not fix my res://sp3res.dll/default.hta error</strong>.

I also get this error when trying to use Windows Update: [Error Number: 0x8009200D]

<strong>Windows XP Related:</strong>

<a href="http://techbargains.com/hottips/hottip12/index.cfm">Windows XP Performance Tips</a>
