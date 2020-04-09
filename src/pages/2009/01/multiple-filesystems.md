---
title: Multiple Filesystems
date: 2009-01-16
tags: file systems,lvm
---
I used to thing a single filesystem was better than several, but now I use multiple filesystems. What changed? <a href="http://www.docunext.com/wiki/LVM">LVM2</a>!! Its the <a href="http://www.reaktiv8.com/">magic key</a> I was looking for when I looked for a way to adjust filesystem sizes. I thought that one filesystem was better because all the space could be used if it was needed. If you split up the volumes into pieces, you might need to shift things around to make them fit, and with LVM2, you can do exactly that.

<a href="http://www.docunext.com/wiki/LVM">Check out the Docunext wiki page on logical volume management for more info on how I use LVM2</a>.

Thanks to <a href="http://blog.andrew.net.au/2009/01/15#filesystem_layouts">Andrew Pollack</a> for bringing this up.

Related:

<a href="http://www.docunext.com/2008/04/resizing-filesystems.html">Resizing Filesystems</a>

