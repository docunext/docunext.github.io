---
title: Nexenta Nexenta2 and Virtualization
date: 2009-01-04
tags: none
author: Albert Lash
---
I had problems with Nexenta2 beta with QEMU and KVM, but then I tried VirtualBox, and it worked! For me, <a href="http://www.docunext.com/wiki/Upgrading_Nexenta">Nexenta2 works with VirtualBox</a>. Hooray!

So far, it doesn't seem too much different than the stable elatta version 1 of Nexenta.

I'm running it headless, so I used this command:

<pre>
VBoxHeadless -s nexenta &</pre>

rather than using the VirtualBox GUI.

Related:

<a href="/wiki/VirtualBox">Docunext VirtualBox wiki page</a>

