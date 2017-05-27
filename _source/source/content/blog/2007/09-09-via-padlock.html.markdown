---
title: VIA Padlock
comments:
  - author: mykhal
    email: mykhal@centrum.cz
    ip: 147.33.1.151
    url:
    date: 09/10/2007 07:34:19 AM
    text: >
      hi, you should not have to use i486. Processors, which have padlock, should all be i686 compatible. If there are no padlock modules in in i686 version the same distribution, which has them in i486, it's strange. Isn't it compiled into kernel directly ?
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 09/10/2007 11:07:52 AM
    text: >
      Hi mykhal, thanks for commenting. You are absolutely right, I got confused when I didn't find the plain "padlock" module (it was in a different kernel source). I'll switch back to the 686 kernel for its optimizations.
date: 2007-09-09
tags: encryption,via
---
I'm trying to access the VIA padlock cryptography engine in debian linux. I just tried the 2.6.22 kernel for 686 and there was no padlock module! Do I need to use the 486 kernel?

I've gotten it to work fine with this kernel in ubuntu:

2.6.20-16-386 #2

To activate the engine, I load the following modules:

* padlock
* padlock_aes
* padlock_sha

The results are amazing. Hmm, that's odd, the 486 kernel does have the padlock_sha and padlock_aes modules, but not the plain padlock module.

More fun:

<a href="http://ocf-linux.sourceforge.net/">http://ocf-linux.sourceforge.net/</a>

¥

