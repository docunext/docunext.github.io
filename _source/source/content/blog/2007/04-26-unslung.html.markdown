---
title: Unslung
date: 2007-04-26
tags: debian,linux,nslu2
---
I'm trying out unslung as opposed to Debian for one of my slugs. Its pretty cool, but I'm having this problem:

<pre class="sh_sh">LKG7C013D login: admin
Password:
No directory, logging in with HOME=/
Welcome to Unslung V2.3R63-uNSLUng-6.8-beta   -------- NOTE: RUNNING FROM INTERNAL FLASH  --------
This system is currently running from the internal flash memory,
it has NOT booted up into "unslung" mode from an external drive.
In this mode, very few services are running, and available disk
space is extremely limited.  This mode is normally only used
for initial installation, and system maintenance and recovery.
Cannot execute /dev/null: Permission denied
Connection closed by foreign host.</pre>

Guess I should have read the README.txt:

<pre class="sh_sh">5) In the telnet session, run "/sbin/unsling disk2".
(If you've decided to unsling to a device connected to port 1, you'll run
"/sbin/unsling disk1", of course.)</pre>

Hmm, still couldn't get Unslung to work, so I tried DebianSlug again and its working finally. Sweet! Good now I have three slugs running debian, two of which have real hard drives. If you would like to <a href="http://mytechdeals.blogspot.com/2007/04/slug.html">buy a Linksys nslu2</a>, check out <a href="http://mytechdeals.blogspot.com/2007/04/slug.html">My Tech Deals for info on how to buy a slug</a>.

