---
title: The Filesystem Saga Continues
date: 2007-02-19
---
True, the saga continues. This is a great excuse to learn logical drive images inside and out. Now I'm trying to remove unused, non-partitioned space from a logical disk image that contains an MBR (master boot record), an 8GB NTFS partition, and almost 12GB of unused, non-partitioned space.

Here are the tools I've thought of using so far: * Mac's Disk Utility - though it doesn't understand NTFS very well* hdiutil - has a resize command but it won't work on disks with an mbr afaik* ntfsprogs - great program but I'm not sure how well it works with images* fdisk from linux - not sure how well it works with linux* qemu-img* dd

Right now I'm trying to "dd" the disk image I made with Disk Utility. It is 18.3GB, but the "disk" inside of it is only 7.5GB. That, I believe, is the ntfs partition. So I suspect that it will not have the master boot record on it. I'm guessing that is at the beginning the main disk image.

<strong>Dealing with virtual devices</strong>

In Mac OS X, devices are located in /dev/ and so when you have a disk image, you gotta wonder where the "device" is located. Its also in /dev/, but it has an "r" in front, so instead of:

<pre>/dev/disk0</pre>

you have:

<pre>/dev/rdisk0</pre>

The confusing thing is how these are created and destroyed. You can open an image in Disk Utility but it will mount the image. You can then unmount the image and the device remains. Note, if you eject the image, the device is destroyed.

This might look a little strange to be duplicating a partition to a device node, but I think it just might work. Here's the command I'm using:

<pre>dd if=/dev/rdisk3s1 of=/dev/rdisk2</pre>

However, what about the master boot record? I don't think that it is stored on the ntfs partition, and because /dev/rdisk3s1 is only 7.5GB, and /dev/rdisk3 is 18.3GB, I'm guessing that there is information on /dev/rdisk3 that is needed.

If I use this command:

<pre>dd if=/dev/rdisk3 of=/dev/rdisk2 count=1 bs=512</pre>

it might muck up the ntfs partition that I jut copied there. Hmmmm.

<strong>Linux!</strong>

I cancelled that, and am now trying to use ntfsresize and ntfsclone to move the ntfs partition and mbr to a new virtual disk using parallels, based upon the premise that parallels disk images are really just .cdr images. Within linux running in parallels, the disk image shows up as a real drive, and I mapped the original drive to parallels, so its easy to do a dd from the original partition to a new one I created on a virtual drive. Once that's done, I'm going to dd the mbr from the original disk to the second. Then once that is complete, I'll try to run the new drive directly in Parallels, or convert it to a qcow image and run it from Q.

So the coolest thing I learned today so far was from the dd manual page: if you kill the process with the following code you will get a status report of the progress:

<pre>kill -USR1 $pid</pre>

<blockquote>

<pre>       Note that sending a SIGUSR1 signal to a running 'dd' process makes  it       print to standard error the number of records read and written so far,       then to resume copying.              $ dd if=/dev/zero of=/dev/null& pid=$!              $ kill -USR1 $pid; sleep 1; kill $pid              10899206+0 records in 10899206+0 records out</pre></blockquote>

<strong>The Finale</strong>

Here's how it ended up going down: <ol><li>Used the thecus n21000 running debian as a usb2 host to dd the ntfs partition to a file. Did the same with the mbr. The speed averaged about 7MB/s.</li><li>Used netcat to send the ntfs file over to a Parallels virtual machine running debian which had a 8GB virtual drive image mounted; did the same with the mbr. Transfer rate of about 1.2 MB/s. </li></ol>

<strong>Related:</strong>

Some interesting links I found while researching this topic:

<a href="http://uneasysilence.com/archive/2007/01/9404/">How to Resize Your Parallels Drive, and Get Windows to Recognize It</a>

<a href="http://www.inference.phy.cam.ac.uk/saw27/notes/backup-hard-disk-partitions.html">Notes on backing up entire hard disks or partitions</a>

<a href="http://www.linuxquestions.org/questions/showthread.php?t=362506">Learn the dd command</a>

<a href="http://www.kidsquid.com/cgi-bin/moin.cgi/FrequentlyAskedQuestions#head-46d3f40c447a63bbd7c6f325f7c771a77cfa58f8">Convert .hdd to qcow</a>

<a href="http://en.wikipedia.org/wiki/Master_boot_record">Wikipedia Master Boot Record</a>

<a href="http://marc.abramowitz.info/archives/2007/02/17/getting-good-performance-out-of-usb-hard-drives-in-linux/">Linux USB hard drive performance</a>
