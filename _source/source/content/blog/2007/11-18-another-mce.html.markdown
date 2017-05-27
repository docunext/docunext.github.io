---
title: Another MCE Machine Check Error 
date: 2007-11-18
tags: amd,dell,errors,"machine check exception",redhat
---

One of my servers threw another MCE this morning (Machine Check Error), and I guess it is being caused by ECC memory. I was able to capture the error codes:

<pre class="sh_sh">
CPU 0: Machine Check Exception: 0000000000000004
Bank 4: b63e200200080813 at 00000000048d7bc0
Kernel panic - not syncing: CPU context corrupt
</pre>

And using mceparse, this is the explanation:

<pre class="sh_sh">
CPU 0
Status: (4) Machine Check in progress.
Restart IP invalid.
parsebank(4): b63e200200080813 @ 48d7bc0
        External tag parity error
        Uncorrectable ECC error
        CPU state corrupt. Restart not possible
        Address in addr register valid
        Error enabled in control register
        Error not corrected.
        Bus and interconnect error
        Participation: Local processor originated request
        Timeout: Request did not timeout
        Request: Generic error
        Transaction type : Instruction
        Memory/IO : Other
</pre>

<a href="http://lists.us.dell.com/pipermail/linux-poweredge/2003-February/006430.html" rel="nofollow">http://lists.us.dell.com/pipermail/linux-poweredge/2003-February/006430.html</a>

Probably not a good idea, but I've added nomce to my boot options.

<a href="http://www.redhat.com/docs/manuals/linux/RHL-9-Manual/install-guide/ch-bootopts.html" rel="nofollow">http://www.redhat.com/docs/manuals/linux/RHL-9-Manual/install-guide/ch-bootopts.html</a>

