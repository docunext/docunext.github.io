---
title: Debian kFreeBSD i386 AMD64
date: 2008-04-28
tags: debian,freebsd
---
Today I installed Debian kFreeBSD AMD64 on an extra laptop. I've gotta say I'm really impressed with this project - its working well on the laptop, which has an nvidia graphics card.

I still get some weird errors - like this Iceweasel modal dialogue box which is displayed when I try launching it:


Thankfully Galeon works, at least some of the time.

Ah yes - I've been trying to keep track of what I've installed, what works and what doesn't:

<a href="http://www.docunext.com/wiki/Debian_GNU/kFreeBSD">Debian GNU/kFreeBSD</a>

And...:

<pre class="sh_sh">  gpg --keyserver pgpkeys.mit.edu --recv-key 0792182443229C06  gpg --export 0792182443229C06 -a | apt-key add - </pre>

Thanks <a href="http://www.digriz.org.uk/ts-7800">diGriz</a>
