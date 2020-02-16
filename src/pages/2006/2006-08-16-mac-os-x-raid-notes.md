---
title: Mac OS X RAID Notes
date: 2006-08-16
tags: Apple
---
<h3 id="toc0">Trying to get a Macintosh to boot off a RAID Array</h3><p>I'm trying to use Apple's built-in raid and it is surprisingly difficult! Sure, I am trying to do this on the boot disk, but that shouldn't be a big deal, it can be done in linux.</p>
<p>First I tried creating a striped raid to boot off of. No go. At first, it woulnd't let me. Then somehow I tricked it into letting me, and then when I rebooted the dreaded you must reboot your computer screen showed up. Back to the drawing board.</p>
<p>Now I am trying to create two partitions on each disk, where I will create one mirrored partition as the boot disk, and the striped partition as the local storage unit. Right now I'm waiting for the raid to rebuild. I can't cancel it though,  if I could I would so I could just start over. Ugh.</p>
<p>This guy is having the same problem as I:

<a rel="nofollow" href="http://www.askbjoernhansen.com/2006/03/30/only_one_apple_raid_partition_1.html#comments">http://www.askbjoernhansen.com/2006/03/30/only_one_apple_raid_partition_1.html#comments</a></p>
<p>&quot;Waiting for new RAID to come online&quot;</p>
<p>It pisses me off when software like this is released! With some better documentation, things would be fine. Looks like I found the documentation. They say:
&quot;In server versions verions 10.1 to 10.1.4 and client verions 10.1 to 10.2.8, RAID volumes can be used as data volumes only - not as the startup disk on which system software is installed. You can RAID a startup volume in 10.3 or later.&quot;

and
&quot;Disk Utility used with Mac OS X offers RAID levels 0 and 1. A RAID set of two or more hard disks may be level 0 or 1, but not both, when set up with Disk Utility. Third-party products may offer different levels of RAID.&quot;</p>
<p>While I'm not sure about the first one, it definitely wasn't booting off a striped raid. The second one I can confirm right away. So I'm booting off a regular drive partition, 10GB, with a 277GB striped array,  and 10GB of free, unused space. I journaled the boot drive for reliability, and did not journal the raid for added performance.</p>
<p>Alas,  when I rebooted, the computer again asked me to restart, saying it had failed miserably. Here Apple says you can create RAID arrays from startup volumes as long as you boot from another disk:</p>
<p><a rel="nofollow" href="http://docs.info.apple.com/article.html?path=DiskUtility/10.5/en/duh1013.html">http://docs.info.apple.com/article.html?path=DiskUtility/10.5/en/duh1013.html</a></p>
<p>Apple has misrepresented the functionality of their software, bigtime.</p>
<p><strong>New strategy</strong>

I have deleted my RAID array, and am simply installing the OS to the 10GB partition. Once it has installed and I can confirm it will boot, I will upgrade the OS. After that, I will again reboot of the install DVD and run Disk Utility to create the RAID AGAIN! If this doesn't work I'm going to cry.</p>

<ul>    <li>That didn't work. </li></ul><p><strong>Another new strategy</strong>

Remembering that I recently sped up my linux raid by removing jumpers to enable 3.0GB/s sata II speeds, I added a jumper to the samsung drive I just bought. See <a class="wikilink" href="https://www.savonix.com/acc/nxwiki/view/Disk%20Drive%20Notes.html">Disk Drive Notes</a> for more info.</p>
<p>That still didn't work, so now I'm trying again with no raid present, installing the OS on the old drive. Maybe then I restart successfully? Next I will have to remove the new disk and try simply with the old. One other idea, I sincerely hope this doesn't have anything to do with the old mac_fdisk partitions I made with Gentoo's PPC installer. I can check that too. I've got time.</p><h1 id="toc1">The SOLUTION:</h1><p>HAHA. Tried to unplug the other disk, still kernel panic. Now I've removed the random nic card I plugged in there earlier this week. Maybe that will do it? Holy cow it was indeed the networking card. I take back all the nasty things I said about Apple. No wonder, it was <strong>throwing a kernel panic at the registration screen</strong>, where Apple tries to &quot;phone home&quot; and tell them your secrets.</p>
<p>Sweet! I just rebooted with my fresh new striped array. Awesome!</p>
<p>To boot into a striped array, you have to use partitions in your array, rather than actual disks. Apple must put some information on the smaller hidden parts of the physical device that tell the boot process about the paritions, and thus the raid. Cool! If you create a raid with just physical device disks, you will not be able to install the os.</p>
<p>Related:

<a class="wikilink" href="https://www.savonix.com/acc/nxwiki/view/Disk%20Drive%20Notes.html">Disk Drive Notes</a></p>
