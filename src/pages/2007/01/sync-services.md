---
title: Sync Services duplicity unison rdiff backup and rsync
date: 2007-01-29
tags: none
author: Albert Lash
---
If you are like me and use computers all the time, you like the idea of synchronization. There are many great tools to accomplish this:

<ul><li>duplicity</li><li>unison</li><li>rdiff_backup</li><li>rsync</li></ul>

I love rsync, which I was introduced to thanks to gentoo. Currently I use it for a lot of automated tasks. Unison is nice too because it can keep multiple machines up-to-date (bi-directional), which is tough to do with rsync, as rsync is really for syncronizing in one direction.

One drawback to unison is the need to have the same version of unison on all the machines, which can be tough if you are working cross platform like me. On the flip side, at least its possible! Unison is capable of syncronizing windows, macs and linux if you want to.

Sort of like unison, rdiff_backup requires that both machines have rdiff_backup installed. That cost comes with a bonus, rdiff_backup does archival of backup revisions, which is pretty amazing.

And duplicity can do that too, while encrypting the file contents. On top of that you don't even need to have duplicity installed on the remote machine, if backing up over a network. The drawbacks that I've experienced include the possibility of spending a whole bunch of time backing up, then have the backup fail before completion. In that case, you have to start over. OUCH!
