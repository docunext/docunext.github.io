---
title: Ghosting Notes backup dd
date: 2006-08-15
---
<h3 id="toc0">What is Ghosting</h3><p>&quot;Ghosting&quot; is the process of duplicating an entire hard drive or media storage device bit-by-bit.</p><h3 id="toc1">Why ghost a drive?</h3><p>Ghosting is a great way to duplicate an entire drive, and while Symantec will be happy to sell you their ghosting software, you can always use dd, an open source alternative.</p><h3 id="toc2">Quick dd Notes</h3>

<ul>    <li>dd is good for dulpicating a drive instance many times</li>    <li>dd might be over doing a basic backup of files</li></ul><p><strong>Useful External Resources</strong>:

<a href="http://www.inference.phy.cam.ac.uk/saw27/notes/backup-hard-disk-partitions.html">How to ghost a drive using dd on linux</a>

<a href="http://www.macosxhints.com/article.php?story=20050302225659382">Mac OS X use of dd to recover a hard drive</a>

<a href="http://en.wikipedia.org/wiki/Dd_(Unix)" rel="nofollow">Wikipedia page on dd</a></p>

Example:

<pre>
dd if=/dev/hda1 bs=1k conv=sync,noerror | gzip -c | ssh -c blowfish user@hostname "dd of=filename.gz bs=1k"</pre>

Since I use a mac, I can't find sfdisk. Furthermore, dd and an extended partition table don't seem to get along, so I've been instead using this process to ghost and duplicate disk drives with my correct settings:

1. backup mbr

2. backup first and only partition from the drive, to keep it manageable, I limit the install size to 2gb. I can always shuffle around some stuff later.

3. plug in a new drive

4. restore the mbr - the kernel should then re-read the new partition table

5. restore the first and only partition

Hopefully that works!

UPDATE: Rather than mucking around with the mbr and partition table, I'm just dd'ing the disk device from the beginning to a little past the end of the size of my data. If I have three partitions that take up 6GB, I'll dd from 0 to 7GB. So far its worked OK.
