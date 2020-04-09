---
title: Soekris net4501 BIOS Update
date: 2007-06-26
tags: bios,m0n0wall,soekris
---
## <strong>Updating the BIOS on a Soekris net4801</strong>

I found out why my <a href="http://www.docunext.com/2007/06/soekris-net4501-m0n0wall-error.html">net4501 was going slow</a>: the latest bios had the cpu cache disabled. :-) Its so nice when you finally get to the bottom of something.

To update the bios, I had to use linux. Even though Mac OS X runs BSD, I couldn't get the bios to update using minicom or lrzsz. :-(

I used linux, connected a null modem cable, and then booted up minicom and the net4501.

<ol><li>CTRL-P upon post</li><li>"download -"</li><li>CTRL-S</li><li>b4501_131b.bin</li><li>Probably some errors, keep trying</li><li>flashupdate</li><li>reboot</li></ol>

Old:

<pre>comBIOS ver. 1.31  20070408 </pre>

New:

<pre>comBIOS ver. 1.31b 20070614</pre>

Is it faster? YES! It is WAY faster. It can load the system.php page in under 5 seconds, whereas previously it required 10-60+ seconds, depending on the configuration.

Would have been nice to get a notice from Soekris about this, but as imply on their website, customer service is not their forte. :-)

Thanks to <a href="http://ward.vandewege.net/blog/2007/06/09/137/">the purple yonder for notes on flashing the net4801 bios using GNU/linux</a>!

