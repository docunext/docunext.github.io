---
title: QEMU Q Windows 2000 Disk Image
comments:
  - author: Frank Furter
    email: frank@furter.org
    date: 08/18/2008 05:32:19 PM
    text: >
      Cheeser Muffin!
  - author: Albert
    date: 08/18/2008 09:53:28 PM
    text: >
      What's up Mr. Furter?
date: 2007-02-16
---
Here's a good one! I'm trying to use a disk image I created from a real hard drive that has Windows 2000 on it. It boots, but then gives me an error:

<pre>inaccessible_boot_device</pre>

No idea what that means, but I'm going to try converting the dmg file to an iso first:

<pre>hdiutil convert disk3copy.dmg -format UDTO -o w2k.iso</pre>

If that doesn't work, I'll try this:

<pre>dd if=/dev/disk1s0 of=$HOME/outfile.iso bs=2048</pre>

If that doesn't work. I'll try this:

<a href="http://man.linux-ntfs.org/ntfsclone.8.html">ntfsclone</a>

Thanks to:

<a href="http://www.macosxhints.com/article.php?story=20031225124417353">Create an exact duplicate of a CD from the command line</a>

<a href="http://www.twocanoes.com/winclone/details.html">The details on how to clone bootcamp on Mac OS X - but also lots of information on ntfsprogs: ntfsclone and ntfsresize on Mac OS X</a>

Well I learned a bunch from those attempts, but I don't think the issue has anything to do with image formats. I now think   it has to do with Windows IDE drivers. I'm making yet another image, and with this one I will make some changes as specified here:

<a href="http://answers.google.com/answers/threadview?id=366929">Q: Fixing "Inaccessible Boot Device" STOP error win2k server</a>

More specifically: "If that first solution does not work, this, should:

1)      Open the Recovery Console and type LISTSVC.  A list of drivers

loaded on startup will be displayed.

2)      Locate the IDE drivers and type DISABLE name.ext (where

name.ext is the driver name and extension).

3)      Once the IDE drivers are disabled, exit and reboot.  On

reboot, Win2k will load the standard default IDE driver and should

startup." posted by tom-ga.

<a href="http://www.motherboard.windowsreinstall.com/problems.htm">This page about   INACCESSIBLE BOOT DEVICE PROCEDURES PART 1 </a> says pretty much the same thing.

The above mentioned technique isn't working, and everytime I edit a boot setting with the disable function, it returns to the same setting on reboot. Hmmm. I tried disabling ACPI, and this faq entry: <a href="http://www.kidsquid.com/cgi-bin/moin.cgi/FrequentlyAskedQuestions#head-679adfd6cf71d31525b6843d4c6fec6930efec40">My Windows XP/2000 guest is BSOD'ing when using the KQEMU accelerator. What can I do?</a> is eerily similar. Unfortunately, the QEMU flags mentioned there are no help.

One last shot before I return the hard disk to the laptop to try and disabling all the drivers: <a href="http://www.techspot.com/vb/all/windows/t-8356-p-6.html">How to: Repair Windows XP/2000 if you are unable to boot into Windows.</a>

Remember, I'm doing this on an image of a hard drive, not on the hard drive itself!  Nope, that didn't work either. Its surprising how much you can fiddle with and still get the "Starting Windows" screen.

OK I'm not giving up yet! I think the dmg I made was read-only, so none of the changes I'd make would stick. Converting and trying a couple of changes again...

<strong>Editing boot.ini</strong>

With notepad, boot.ini is hidden, but you can just type boot.ini into the open dialogue box field and presto, you can see it.


This has been an interesting learning experience. Here's what I've learned so far: * ALWAYS make a backup copy of your Windows install disks. They are the soul of your Windows machines and they'll likely get lost, stolen, or broken. * ALWAYS make copies of your certificate of authenticity (COA) and license key. The COA will get smudged, scratched, and become unreadable, and you'll lose your license key somehow. * If you plan on using your Windows operating system on several computers at different times, i.e. upgrading hardware, but not running the OS on multiple computers simultaneously, get the retail version. While its possible to use the OEM version on different computer hardware over time, Microsoft doesn't make it easy through the use of their activation process. * Microsoft XP Home isn't that bad. * Parallels is a zillion times faster than plain old QEMU "Q" on a Macbook. * Parallels and QEMU images don't play nicely together, the hardware layer is surprisingly different.

¥
