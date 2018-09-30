---
title: My Mistake In Copying and Pasting apt get updates
date: 2010-06-12
tags: debian,updates
---
Note to self: do not copy and paste dependent upgrades. They become specifically installed, and won't automatically be removed during subsequent upgrades.

I had a suspicion that it was a bad idea after I did so for a few months, and it only sank in today while I was cleaning up a computer that's been having some issues and I noticed duplicate libraries from etch, lenny and squeeze!

Hah! Just noticed this on another machine:

<pre class="sh_sh">
ii  liblwres30                             1:9.4.2-10+lenny1                      Lightweight Resolver Library used by BIND
ii  liblwres40                             1:9.5.1.dfsg.P2-1+lenny1               Lightweight Resolver Library used by BIND
ii  liblwres60                             1:9.7.0.dfsg.P1-1                      Lightweight Resolver Library used by BIND
ii  liblwres9                              1:9.3.4-2etch1                         Lightweight Resolver Library used by BIND
ii  liblzo1                                1.08-3                                 data compression library (old version)
ii  liblzo2-2                              2.03-1                                 data compression library
</pre>

