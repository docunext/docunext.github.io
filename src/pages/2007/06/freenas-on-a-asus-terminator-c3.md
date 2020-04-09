---
title: FreeNAS on a ASUS Terminator C3
date: 2007-06-19
tags: compact flash,energy,freenas,raid
---
I'm running FreeNAS on an ASUS Terminator T1-C3 Intel Socket 370 Barebone. Took a little fiddling to get going, but now its running well. The NFS setup is confusing though, I think there is a bug.

Seems like every 4th time I reboot the machine, the compact flash won't mount. Instead, I just bought some Transcend disk on modules to avoid a cable and the cf-to-ide adapter which seems highly flaky.


If you look closely at this picture, you can see how the pins are bent. Came like that from Newegg!

Also, there seems to be a bug with the NFS interface where the available networks control panel is inoperable. I'll have to get on the freenas mailing list and see what's up.

Just sent this to the list:

<blockquote>Just installed Freenas on ASUS Terminator C3 last night - very very cool. m0n0wall is my choice for firewalls and routers, so I was attracted to freenas since its built off m0n0.

I ran into an issue though, when trying to setup an NFS export, the interface would not allow me to add any permitted networks. I think there is a bug in the php or something, as the table wasn't rendering properly. I'll snap a screen shot later today (my freenas box is currently down).</blockquote>


Also, for what its worth, the Syba CF to IDE ( SYBA SD-CF-IDE-A IDE to Compact Flash Adapter - Retail from Newegg.com item #     N82E16822998002) have been nothing but trouble for me. What's wierd is that the ones newegg sent me seemed like they had been in a fire or something.

Here's what I sent newegg.com back in March of this year (2007):

<blockquote>One of the SYBA SD-CF-IDE-A IDE to Compact Flash Adapters I ordered is damaged, not by shipping, but in general damaged. The pins are bent, and the container itself is very strangely sanded. Please advise. I would like the least amount of "hassle" as possible - this is a small, inexpensive part, and I do a lot business with you. I'm also really busy these days.</blockquote>

Like a good e-tailer, they refunded my money without a problem.

UPDATE:

Just heard back from Ralf on the mailing list. He sent me two links:

<a href="https://sourceforge.net/forum/forum.php?thread_id=1706064&forum_id=507590">FreeNAS NFS Fix</a>

<a href="http://sourceforge.net/forum/message.php?msg_id=4241958">FreeNAS NFS Fix 2</a>

Also - I was having a heck of a time booting off of a SanDisk standard compact flash disk,  which I thought would be the easiest one to work with. Frustrated, I opened up the bios on the Terminator and set UDMA to disabled. When I do that, the machine boots up much much faster, but then I get a READ_DMA timed out error on bootup.

Yup, just read on newegg that the Syba's don't have DMA, causing problems with Freenas.

Now getting this bug from the webgui:

<pre>Fatal error: Cannot break/continue 1 level in /etc/inc/services.inc on line 1740</pre>

#### <b>FreeNAS NFS</b>

Good, I'm getting NFS on FreeNAS working.  Strange how this functionality isn't straight-up built in. Maybe something I can help with in the future.

I plan to hold off on using FreeNAS in a production environment for now so that might delay my involvement. However, I'm working with m0n0wall all the time, and plan to work with Askozia, so those projects will educate me about the FreeNAS project at the same time.

UPDATE: The new Syba compact flash adapter is working better. Its ironic because this one had bent pins before I even opened it! Anyway, here are some pictures of how I've got it setup:


I install two 250GB drives, one in the 3.5" slot, and one in a 5.25" slot with a bracket kit.


The Syba CF adapter is hard to mount, so I just zip tied it to the frame.

#### <strong>Energy Consumption</strong>

This setup only uses 41 watts, which is pretty good for two drives and 250GB (RAID1 configured).

I have to say it again: FreeNAS is pretty sweet.

