---
title: GTK Print Dialog Iceweasel Crash 
date: 2009-04-30
tags: none
author: Albert Lash
---
Anyone else getting this? It happened to me once before when I was trying some gtk libs from sid, so I back-graded to lenny and it worked again.

It happens with all print dialog boxes, but with Iceweasel its instantaneous. I had previously tried to diagnose this but strace revealed little and I didn't know what else to try...

Hmm, looks like Iceweasel is randomly crashing too. I just recently upgraded it, so there must be something funky going on. Seems to be related to my openvz kernel??? (The random crashes, not the print dialog crashes.)

UPDATE: For some unknown reason - the crash is no longer happening. :-)
