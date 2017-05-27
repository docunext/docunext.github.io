---
title: sshfs on the Thecus n2100
date: 2007-02-11
tags: open source
---
I've installed sshfs on my Thecus n2100, and I can mount a filesystem. The system hangs when I try to access it. :-(

I found its a module issue, perhaps?

<a href="http://www.arcknowledge.com/gmane.comp.file-systems.fuse.sshfs/2006-05/msg00017.html" title="http://www.arcknowledge.com/gmane.comp.file-systems.fuse.sshfs/2006-05/msg00017.html">sshfs hangs due to sshfs kernel api and kernel module api mismatch</a>

Took me awhile to find a fuse-source .deb package, and was able to get one from packages.debian.org, I couldn't install it via apt-get, I had to download it manually and install it with dpkg.

Still no go, I'm trying to compile sshfs:

<a href="http://julien.danjou.info/article-apt-build.html">http://julien.danjou.info/article-apt-build.html apt-build instructions</a>

Wow fuse is really a mess on debian. Ugh. Oh maybe its just on the ARM platform?

<a href="http://permalink.gmane.org/gmane.comp.file-systems.fuse.devel/3116">http://permalink.gmane.org/gmane.comp.file-systems.fuse.devel/3116 FUSE problems on the NSLU2</a>

Also, according to this:

<a href="http://packages.debian.org/changelogs/pool/main/f/fuse/fuse_2.5.3-4.2/changelog">http://packages.debian.org/changelogs/pool/main/f/fuse/fuse_2.5.3-4.2/changelog fuse-source package deprecated</a>

the fuse-source file isn't relevant anymore.

<strong>Yes, this confirms that the problem is only on the ARM architecture: </strong>

<a href="http://www.nabble.com/-fuse-devel--FUSE-not-working-on-ARM---Hangs-during-stat64-t2861448.html">http://www.nabble.com/-fuse-devel--FUSE-not-working-on-ARM---Hangs-during-stat64-t2861448.html FUSE not working on ARM</a>

Thought it still looks like there is generally trouble with fuse on debian:

<a href="http://www.docunext.com/acc/nxwiki/view/Installing-sshfs-on-Quantact-Debian-VPS.html" title="http://www.docunext.com/acc/nxwiki/view/Installing-sshfs-on-Quantact-Debian-VPS.html">Installing sshfs on Quantact Debian VPS</a>

