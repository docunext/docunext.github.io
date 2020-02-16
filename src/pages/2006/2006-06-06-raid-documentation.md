---
title: RAID Documentation
date: 2006-06-06
---
<h3 id="toc0">RAID Controllers</h3><p>I've been looking into RAIDs for awhile. I've used an Adaptec and a 3Ware raid controller for awhile and found them very useful and high quality with great support in linux.</p>
<p>Since then, I've found that there are a few other options:</p>

<ul>    <li>Full software RAID in linux using the md tool</li>    <li>Pseudo fakeraid using a bios-powered raid using a tool called dm</li></ul><p>The choice here is clear: if you are using a dual-boot setup with Windows, you cannot go with a full software RAID solution, you have to use dm or a hardware controller. If you don't have to dual boot with Windows, definitely use the software raid. I also use a software raid on my mac. See Disk Drive Notes<a class="" href="https://www.savonix.com/acc/nxwiki/new/Disk%20Drive%20Notes">?</a> for more information.</p><h3 id="toc1">External RAID Links:</h3><p><a rel="nofollow" href="http://oss.sgi.com/archives/xfs/2005-05/msg00184.html">Mailing list with some good info about page, block and stripe size.</a>

<a rel="nofollow" href="http://www.tldp.org/HOWTO/Software-RAID-0.4x-HOWTO-8.html">http://www.tldp.org/HOWTO/Software-RAID-0.4x-HOWTO-8.html</a> - TLDP is really great, if a bit dated at times.</p>
