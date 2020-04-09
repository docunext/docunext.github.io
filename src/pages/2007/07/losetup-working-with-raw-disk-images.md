---
title: Losetup Working with Raw Disk Images
comments:
  - author: admin
    date: 07/09/2007 12:40:08 AM
    text: >
      PS - You can use these theories and techniques for mounting ISO images. :-)
  - author: Varghese Mathew
    email: vmathew@wisc.edu
    url: http://varghese85-cs.blogspot.com/
    date: 11/06/2008 07:18:33 PM
    text: >
      Awesome.. just what I was looking for..<br/>.
  - author: Albert
    date: 11/06/2008 07:20:51 PM
    text: >
      Hi Varghese, Glad it helped!
  - author: Chris Jones
    email: chris@rassalon.org
    date: 12/09/2008 02:08:53 PM
    text: >
      All,<br/><br/>You'll be glad to know that there's a much more intuitive (and arguably safer) way to do mount partitioned disks.  No math minor required.<br/><br/>1) stop any existing loop device usage<br/>2) rmmod loop<br/>3) modprobe loop max_part=63<br/>3) losetup -f /path/to/raw/image.raw<br/><br/>If the loop module's been setup with max_part=63, it will automatically setup devices for the partitions as /dev/loop0p1 through /dev/loop0p63, just like you'd see for a partitioned hard disk.<br/><br/>There's one caviat - you need a pretty recent kernel - I'd suggest 2.2.26 or later.<br/><br/>Chris
  - author: Albert
    date: 12/20/2008 01:08:16 PM
    text: >
      Thanks for commenting Chris!
date: 2007-07-08
---
When working with virtual machines and embedded devices, you'll probably end up working with a disk image at some point.

To work with disk images in gnu/linux, you can attach the file to the a device. To do so, you use the losetup command (which requires root privileges).

<pre class="sh_sh">usage:
  losetup [options] loop_device file        # setup
  losetup -F [options] loop_device [file]   # setup, read /etc/fstab
  losetup loop_device                       # give info
  losetup -a                                # give info of all loops
  losetup -f                                # show next free loop device
  losetup -d loop_device                    # delete
  losetup -R loop_device                    # resize
options:  -e encryption  -o offset  -s sizelimit  -p passwdfd  -T  -S pseed
          -H phash  -I loinit  -K gpgkey  -G gpghome  -C itercountk  -v  -r
          -P cleartextkey
</pre>

The challenge is if the disk image has multiple partitions. Though the loop device will be aware of the different partitions (which you can view with fdisk, and you'll need to in order to get the offset number required to mount the last partition), you can't access them all at once.

So far I only know how to mount the last partition on the disk image. You find out the offset of that partition, and attach it to the loopback device:

<pre class="sh_sh">losetup -o52428800 /dev/loop0 debian-sarge-256-hda.img
mount -text3 /dev/loop0 /mnt/debian-sarge-cf/</pre>

It works! How to find out the offset? Use fdisk on the loopback device when the entire image is attached to it:

<pre class="sh_sh">losetup /dev/loop0 debian-sarge-256-hda.img
fdisk /dev/loop0
Command (m for help): p
Disk /dev/loop0: 232 MB, 232783872 bytes
16 heads, 32 sectors/track, 888 cylinders
Units = cylinders of 512 * 512 = 262144 bytes
Device Boot      Start         End      Blocks   Id  System
/dev/loop0p1   *           1          80       20479+  83  Linux
/dev/loop0p2              81         200       30720   83  Linux
/dev/loop0p3             201         888      176128   83  Linux
Command (m for help): u
Changing display/entry units to sectors
Command (m for help): p
Disk /dev/loop0: 232 MB, 232783872 bytes
16 heads, 32 sectors/track, 888 cylinders, total 454656 sectors
Units = sectors of 1 * 512 = 512 bytes
Device Boot      Start         End      Blocks   Id  System
/dev/loop0p1   *           1       40959       20479+  83  Linux
/dev/loop0p2           40960      102399       30720   83  Linux
/dev/loop0p3          102400      454655      176128   83  Linux
</pre>

Use the "u" command in fdisk to change the units, then multiply the start number times 512, 102400 * 512 = 52428800.

Actually - turns out this also works on partitions other than the last one. For example, I just mounted the second partition by using the 40960 offset, multiplied by 512 = 20971520:

<pre class="sh_sh"># losetup -o20971520 /dev/loop0 debian-sarge-256-hda.img
# mount -text3 /dev/loop0 /mnt/debian-sarge-cf/</pre>

¥

