---
title: Resizing Filesystems
date: 2008-04-17
tags: file systems,lvm,storage
---
There's been some banter on planet debian lately about resizing filesystems (ext3 and reiserfs) so I'm going to try. Turns out a dev-101 (failover-steel) has some openvz ve's which could use some more breathing room.

<pre class="sh_sh">
failover-steel:/home/optimus-prime# vgscan   Reading all physical volumes.
This may take a while...
Found volume group "big_space" using metadata type lvm2</pre>

OK, how about logical volumes?

<pre class="sh_sh">
failover-steel:/home/megatron# lvscan
ACTIVE            '/dev/big_space/bart' [3.91 GB] inherit
ACTIVE            '/dev/big_space/homer' [10.00 GB] inherit
ACTIVE            '/dev/big_space/misc' [2.00 GB] inherit</pre>

Let's make bart bigger. <a href="http://www.docunext.com/2008/03/my-practices-with-openvz.html">Bart is like sid</a>
 - he'll probably break stuff.

Now, according to <a href="http://www.grep.be/blog/en/computer/cluebat/actually_you_can">Wouter, I can do something like this</a>:

<pre class="sh_sh">
lvresize -L +5G /dev/<hostname>
/home &amp;&amp; resize2fs /dev/<hostname>
/home</hostname>
</hostname>
</pre>

I'll start with the lvresize (not lvextend).

<pre class="sh_sh">
failover-steel:/home/starscream# lvresize -L +1G /dev/big_space/bart
Extending logical volume bart to 4.91 GB  Logical volume bart successfully resized</pre>

Wow, that was easy! Now how about the filesystem... first I'll stop the ve:

<pre class="sh_sh">
failover-steel:/home/bumblebee# vzctl stop 111
Stopping VE ...
VE was stopped/usr/lib/vzctl/scripts/vps-functions: line 146: [: del: integer expression expected
VE is unmounted
failover-steel:/home/bumblebee#resize2fs /dev/mapper/big_space-bart
resize2fs 1.40.6 (09-Feb-2008)
Filesystem at /dev/mapper/big_space-bart is mounted on /var/lib/vz/private/111; on-line resizing required
old desc_blocks = 1, new_desc_blocks = 1
Performing an on-line resize of /dev/mapper/big_space-bart to 1286144 (4k) blocks.
The filesystem on /dev/mapper/big_space-bart is now 1286144 blocks long.</pre>

Wow, that took hardly any time at all! I even did it again with the ve still running, that's very impressive. I've been using lvm2 for awhile without too much fanfare, thought I had heard so many good things about it, and had definitely run into problems where my filesystems were the wrong size enough times I tried it out. Now I'm a believer. :-)

More: <a href="http://www.docunext.com/wiki/LVM">LVM at the Docunext Wiki</a>

Note - Slightly different with reiserfs:

<pre>resize_reiserfs -s +500M /dev/morex/test</pre>

Also - I tried shrinking an online ext3 volume. I now feel like that was a very bad idea, and will not try again.

