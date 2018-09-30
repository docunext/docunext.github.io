---
title: Local Debian Mirror on FreeNAS
date: 2008-04-20
tags: alix,debian,fios,freenas
---
I'm using FreeNAS to setup a local mirror of a <a href="http://www.debian.org/mirror/ftpmirror">debian repository</a>; so far so good!

<pre class="sh_sh">
rsync --recursive --times --links --hard-links --delete rsync://debian.mirrors.easynews.com/debian /mnt/storage/debian
</pre>

Actually that didn't work out - easynews mirrors everything even though their entry on the mirrors page says they only mirror i386 and amd64. I'm now using the <a href="http://www.debian.org/mirror/anonftpsync">anonftpsync</a> script.

Here's a screenshot of the bandwidth graph in FreeNAS. This is extra cool because I'm synchronizing with the MIT debian mirror with FIOS, and its cruising. This is cool not only because it shows that FIOS is delivering as promised, but also because the firewall the freeNAS box is behind (an ALIX board with pfSense installed) can handle the throughput with ease. Granted, its not going through the VPN, but I'm still pleased.


Also impressive is this RRD graph showing the sustained speeds maintained by the FIOS connection:


