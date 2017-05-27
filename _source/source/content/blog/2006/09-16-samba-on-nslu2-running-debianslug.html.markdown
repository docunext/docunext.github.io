---
title: Samba on NSLU2 running DebianSlug
date: 2006-09-16
---
I am trying to setup CUPS printer sharing for a Samsung 2010 via an NSLU2 running DebianSlug.

These pages were helpful:

<a href="http://www.nslu2-linux.org/wiki/DebianSlug/Printing">http://www.nslu2-linux.org/wiki/DebianSlug/Printing</a>

<a href="http://www.debonaras.org/wiki/HowTo/InkjetPrintingWithGhostscript">http://www.debonaras.org/wiki/HowTo/InkjetPrintingWithGhostscript</a>

Had some problems with broken package dependencies, traced it back to fontconfig-config.

Finally got the system to work, connecting to the printer via IPP:

<a href="http://www.fedoraforum.org/forum/showthread.php?t=113307">http://www.fedoraforum.org/forum/showthread.php?t=113307</a>

