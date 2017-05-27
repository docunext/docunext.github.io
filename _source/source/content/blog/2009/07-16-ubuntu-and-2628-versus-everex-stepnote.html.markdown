---
title: Ubuntu and 2.6.28 versus Everex StepNote
date: 2009-07-16
tags: ubuntu
---
Not sure why, but the 2.6.28 kernel does not get along well with my Everex Stepnote Via C7 laptop. When booting, it freezes when it starts to load the manual modules. Duh, I think I just figured it out. I'm checking my /etc/modules file now:

<pre>acpi
cpufreq_conservative
fuse
lp
via-rng
padlock-aes
padlock-sha
cryptosoft
ocf
cryptodev
</pre>

I must have custom compiled the 2.6.24 kernel I'm using now to include the cryptosoft / ocf modules. Still, the system shouldn't freeze like it is. Right - I just checked and the 2.6.24 kernel that works isn't custom. It still boots without being able to load those extra modules. I'll shelve this issue for now.

