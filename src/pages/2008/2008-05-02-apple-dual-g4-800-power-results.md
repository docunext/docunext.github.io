---
title: Apple Dual G4 800 Power Results
date: 2008-05-02
tags: none
author: Albert Lash
---
I have an older dual G4-800Mhz powermac which I installed Debian on this week. I was unable to get an X server running, but everything else was working fine. I'm mainly interested in using it as a test machine - the power consumption is too high to have on all the time.

What I found interesting was the difference between running a symmetric, multiprocessor kernel (SMP kernel) and a non-SMP kernel, in terms of power consumption. With one CPU running, the machine consumed around 85 watts of power. On an SMP kernel and both CPUs running, the machine consumed 110 watts. I was surprised - I thought the machine would consume relatively similar amounts regardless of whether the operating system was aware of and able to leverage both CPUs.

Interesting...
