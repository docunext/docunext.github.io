---
title: FreeNAS iSCSI
date: 2007-07-10
tags: freenas,iscsi,pfsense,ubuntu
---
In my continuing series of exploring the m0n0wall distros (AskoziaPBX, m0n0wall, pfsense, and FreeNAS), I'm trying to setup iscsi with FreeNAS.

So far it hasn't worked. I tried the freely downloadable but closed source iSCSI software from Studio Network Solutions for the Mac OS X, but the system kept freezing up. Now I'm trying open-iscsi on ubuntu.

<pre>
aptitude install open-iscsi
iscsiadm -m discovery --type sendtargets --portal &lt;iSCSI host IP>:3260
iscsiadm --mode node
iscsiadm --mode node --targetname iqn.1994-04.org.netbsd.iscsi-target:target0 --portal 192.168.0.183:3260 --login
</pre>

dmesg output:

<pre>
[429060.812000] Loading iSCSI transport class v2.0-724.
[429060.848000] iscsi: registered transport (tcp)
[429060.944000] iscsi: registered transport (iser)
[429483.192000] scsi4 : iSCSI Initiator over TCP/IP
[429483.492000] scsi 4:0:0:0: Direct-Access     NetBSD   NetBSD iSCSI     0    PQ: 0 ANSI: 3
[429483.492000] scsi 4:0:0:0: Attached scsi generic sg1 type 0
[429483.520000] SCSI device sda: 2048 512-byte hdwr sectors (1 MB)
[429483.520000] sda: Write Protect is off
[429483.520000] sda: Mode Sense: 0e 00 00 08
[429483.520000] sda: got wrong page
[429483.520000] sda: assuming drive cache: write through
[429483.524000] SCSI device sda: 2048 512-byte hdwr sectors (1 MB)
[429483.524000] sda: Write Protect is off
[429483.524000] sda: Mode Sense: 0e 00 00 08
[429483.524000] sda: got wrong page
[429483.524000] sda: assuming drive cache: write through
[429483.524000]  sda: unknown partition table
[429483.528000] sd 4:0:0:0: Attached scsi disk sda
</pre>

COOL!

fdisk /dev/sda

mke2fs -j /dev/sda1

mkdir /mnt/iscsi

mount /dev/sda1 /mnt/iscsi/

It WORKS!!! And it is surprisingly fast:

<pre>
# hdparm -tT /dev/sda1/dev/sda1:
Timing cached reads:   1286 MB in  2.00 seconds = 642.95 MB/sec
Timing buffered disk reads:   98 MB in  2.33 seconds =  42.13 MB/sec
</pre>

Note: I have 1GB of memory in the machine, and the machine is using an onboard realtek gigabit ethernet adapter (re0 - RealTek 8169S Single-chip Gigabit Ethernet). The drive inside is a real SCSI drive (SEAGATE ST39236LWV 0010), using an Adaptec PCI-X card in a 32-bit PCI slot (ahc0: <Adaptec 29160 Ultra160 SCSI adapter> port 0xf400-0xf4ff mem 0xfbffa000-0xfbffafff irq 16 at device 13.0 on pci0). The machine is an AOpen XC-Cube. Unfortunately, this machine has a low-efficiency power supply, so at idle with only one hard drive, the system still consumes at least 57 watts. :-(


I have to admit, I'm already thinking about using these devices as members of RAID sets! Since <a href="http://www.docunext.com/blog/2007/06/freenas-on-a-asus-terminator-c3.html">NFS doesn't work out of the box on FreeNSD (it does work, but you have to hack the config file)</a>, the iSCSI initiator makes it a really awesome solution.

Unfortunately, when I try the same steps on an ASUS Terminator C3 running FreeNas - the entire process gets messed up. My guess is that the problems stem from the fact the machine is running a gigabit ethernet card in a PCI slot. However, I don't see how the AOpen device would do any better with the SCSI card in a PCI slot. There must be some heavy duty RAM caching going on I'm not aware of - as a buffer between the drive and the nic.

<pre>
hdparm -tT /dev/sdb2/dev/sdb2:
Timing cached reads:   1242 MB in  2.00 seconds = 621.23 MB/sec
Timing buffered disk reads:   28 MB in  3.01 seconds =   9.30 MB/sec
</pre>

Actually, believe it or not I just ran e2fsck on /dev/sdb2 and now its running fine. I was getting an IO error earlier, but the e2fsck fixed it. Sweet. So I guess you can run FreeNAS iSCSI on the ASUS Terminator C3 which is very cool. Just be aware that you'll want to put a gigabit card into a pci card slot, which will only give you 300Mbits of bandwidth, but apparently that is enough for the service to operate.

Thanks to

<a title="ubuntu iscsi" href="http://ubuntuforums.org/showthread.php?t=236825&page=2">http://ubuntuforums.org/showthread.php?t=236825&page=2</a>

