---
title: Puredarwin
comments:
  - author: _sjc_
    email: stuart@echus.demon.co.uk
    ip: 192.168.8.12
    url:
    date: 02/28/2009 03:19:38 PM
    text: >
      Hi, Albert. Glad to see the progress you're making.<br/><br/>You've probably already found the networking notes on puredarwin.org. As for what's up with launchd... well, how long have you got?<br/><br/>You might like to try the patched version of CFLite available from <a href="http://code.google.com/p/purefoundation/downloads/list" rel="nofollow">http://code.google.com/p/purefoundation/downloads/list</a> since it resolves (or at least suppresses) some of them.
  - author: Daniel Bethe
    email: dtm@smuckola.org
    ip: 207.192.71.184
    url:
    date: 08/20/2012 11:37:21 PM
    text: >
      Hi there.  We're rebooting the PureDarwin project.  We'd like your help in getting PureDarwin running in modern virtual machines.  Come to #puredarwin in irc.freenode.net and let's talk about it.  Thanks!
  - author: Albert
    email: albert.lash@savonix.com
    ip: 207.192.71.184
    url:
    date: 08/28/2012 05:33:19 AM
    text: >
      Awesome! I'll check in to find out what's new.
date: 2009-02-28
tags: mac
---
I've decided to try puredarwin on my mac mini, and since I have a few preliminary questions, I decided to try irc. I installed ircii and connected to irc.freenode.net. I was wondering if I had to muck around with bios or efi._sjc_ answered a few of my ?s, and I now believe that installing puredarwin to the mini's hdd is a possibility. My goal will be to get puredarwin to be able to build itself, but I'm not sure ifs that is a realistic goal at the moment.I have to refrain from using 10.5, so I'll need to try building puredarwin on 10.4 with XCode 2.x. Hopefully that will work.

Actually my first goal will be to try and run Puredarwin XMas with QEMU. I'm going to try building the Qemu featured <a href="https://sites.google.com/a/puredarwin.org/puredarwin/developers/qemu" rel="nofollow">here</a> on Debian squeeze:

<pre>
wget http://www.coresystems.de/~patrick/qemu-r6146.tar.bz2
tar -xjvf qemu-r6146.tar.bz2sudo apt-get build-dep qemu./configure --disable-gfx-checkmakemake installwget http://xref.puredarwin.org/puredarwinxmas.tar.bz2
tar -xjvf puredarwinxmas.tar.bz2cd puredarwinxmas.vmwarevm
qemu-img convert -f vmdk puredarwinxmas.vmdk -O qcow2 puredarwinxmas.qcow2
/usr/local/bin/qemu -m 512 -vnc :1 -hdb puredarwinxmas.vmwarevm/puredarwinxmas.vmdk -cdrom puredarwinxmas.vmwarevm/puredarwinxmas.vmdk -boot d
</pre>

It's building now... so I'll download the XMas image. The last step installs qemu into /usr/local, which works for me. I think I've got it working, and I'm getting a ton of read-only errors from the verbose kernel output. This is interesting! I'm trying again without the -v option. Hmm, that didn't help. Oops I was using the wrong disk identifier for rd=. Its annoying to have to enter "mach_kernel.voodoo rd=disk1s3 -v" as a boot option every time.

Can't figure out the partitioning they are using for the vmdk images. Even if I convert them to raw and use losetup, no valid partition list shows up. Hmmm. Oh wait, gnu fdisk works:

<pre>
                               GNU cfdisk 1.2.1                                    Unknown         Disk: /dev/loop0   Disk type: mac    Size: 143654911B, 144MB              Heads: 255   Sectors per track: 63   Cylinders: 17   Number   Flags      Part Type   Filesystem       Label                Size -----------------------------------------------------------------------------      1                Primary     [partition_map]  Apple               0.03MB                        Primary     Free space                           0.69MB      3                Primary     hfs+             PureDarwin           143MB                       Primary     Free space                           0.03MB [ Flags  ] [Make FS ] [ Check  ] [ Rename ] [  Copy  ] [ Resize ] [  Move  ] [ Delete ] [  Type  ] [ Units  ] [ Commit ] [  Quit  ] [  Info  ] [  Help  ]                   Change the flags of the current partition
</pre>

Looks like my main problem at the moment is that / is read only. I am able to "mount -o rw /" but it still isn't happening. Hmmm. I think it might because my system always considers ISO images as read only. I did a little fiddling to extract the third partition from the iso image:

<pre>
losetup -o 1396736 /dev/loop1 puredarwinxmas.vmwarevm/puredarwinxmas.rawdd if=/dev/loop1 of=puredarwin.hfsx bs=16k
</pre>

Now I'm trying the kernel rd option as:

<pre>
mach_kernel.voodoo rd=disk0s1
</pre>

Nope, still getting lots of errors. Looks like linux can r/w hfsplus, but not hfsx. Hmmm. Well I think I might have figured something out.... very strange. XMas darwin isn't starting X because it can't find any screens, so I added -vga vmware, and even though I can't use X, the root is now writable. Odd, huh? I also learned that I can use Xmasdarwin to boot and set rd as nanodarwin. Nice.

Uh, I don't think it had anything to do with -vga, I guess the journal rebuilds allowed / ro mount rw. So X still wouldn't start automatically, but by typing startx on the bash line, it worked.

<b>
To-Do:
</b>

* Do this stuff on my debian macbook so I can try out kqemu. I will have to custom build it along with the qemu binary itself. No biggie.
* Get networking operational.
* Use the qemu darwin environment to modify the hfsx partition of a copy of the xmas darwin vmdk image - this is the big one, how should it be modified? For now, I just want to disable X and mDNSresponder.
* Figure out what's up with launchd.

Most recent qemu command:

<pre>
/usr/local/bin/qemu -m 512 -net user -hda puredarwinxmas.vmwarevm/puredarwinxmas.vmdk -cdrom puredarwinxmas.vmwarevm/puredarwinxmas.vmdk -boot d
</pre>

More random notes:

<pre>
     Partition info -----------------------------------------------------------------------------------------------------------------------------------------------------------      Possible partition device: /home/albertlash/src/qemu-r6146/puredarwinxmas.vmwarevm/puredarwinxmas.raw3                 Partition type: Primary                 Partition name: PureDarwinXmas        Partition size in bytes: 1292513280B      Partition size in sectors: 2524440s       Portion of the hard disk: 99.9%                Filesystem type: hfsx               System type name: Apple_HFS                       Position: 2728s-2527167s       Start (cyl,heads,sector): 21,1,8         End (cyl,heads,sector): 19743,1,31                          Flags:losetup -o 1396736 /dev/loop1 puredarwinxmas.vmwarevm/puredarwinxmas.raw/usr/local/bin/qemu -cpu coreduo -m 512 -vnc :1 -cdrom puredarwinxmas.vmwarevm/puredarwinxmas.vmdk -hda ~/puredarwin.hfsx -boot d/usr/local/bin/qemu -cpu coreduo -m 512 -vnc :1 -vga vmware -net user -hda puredarwinxmas.vmwarevm/puredarwinxmas.vmdk -cdrom puredarwinxmas.vmwarevm/puredarwinxmas.vmdk -boot d/usr/local/bin/qemu -cpu coreduo -m 512 -vnc :1 -net user -hdb puredarwin.iso -cdrom puredarwinxmas.vmwarevm/puredarwinxmas.vmdk -boot d
</pre>

¥
