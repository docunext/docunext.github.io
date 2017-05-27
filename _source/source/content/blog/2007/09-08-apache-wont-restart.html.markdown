---
title: Apache Won t Restart
date: 2007-09-08
tags: apache
---
Just ran into a problem I've seen before. When restarting Apache, it will just hang there waiting to restart, but never will, and sometimes it will, it will just take awhile.

This is caused by a lack of entropy for generating secrets. Entropy is "randomness", and randomness is needed to create secret stuff. :-)

Let's cut to the chase. How do we fix it? Well, if you are asking that question, you're probably not dealing with incredibly sensitive data. If you were, you would already know the answer - get a hardware random number generator. They are expensive, so is there anything else I can do? Sure, I use a pseudo-random number generator. I installed rng-tools (available on debian and gentoo) and set it to use /dev/urandom. If I had a hardware random number generator, I would use /dev/hwrandom.

How much entropy do I have?

<pre class="terminal">
little-valley-1:/etc/apache2# cat /proc/sys/kernel/random/entropy_avail
3712
</pre>

How much do I need? At least 200. /dev/random will "pause" a process (like causing Apache to hang) keeping it from proceeding until the entropy is over 64, but even that is pretty low. A full entropy pool is 4096 on my machine.

I've found that running "updatedb &" fills the entropy pool back up pretty quick. If I understand correctly, the three main sources of entropy for linux are:

* mouse movement
* keyboard events
* hard disk activity (as well as network activity to some degree)

Considering the first two don't get used if you have a headless, no-x server, the third is a good option. I just discovered write_wakeup_threshold, which is the threshold which causes devices to be sourced for entropy. For example, mine was set to 128, so the entropy would have to get below 128 before it would start collecting random bits again and refilling entropy. That's fine if there is an abundance of random data, but as I said before, on a server with no mouse or keyboard, if it falls below 128, it might take awhile just to get back over it again.

I've since set the threshold to 2048, so that the entropy will be replenished way before it gets low. I'm also using audio-entropyd, which sources the soundcard for randomness data.

In addition to that, I do have some computers which have hardware random number generators. I play to share that randomness with other computers I have that don't have random number generators. I'll probably do something like this:

<pre class="terminal">
dd if=/dev/hwrng of=random_output bs=4096 count=1
xxd -ps random_output random_numbers.txt
</pre>

on the other computer:

<pre class="terminal">
scp the-rng-cpu:~/random_numbers.txt ./
cat random_numbers.txt > /dev/random
</pre>

Apache explains this issue here:

<blockquote><pre class="terminal">
# Pseudo Random Number Generator (PRNG):
# Configure one or more sources to seed the PRNG of the SSL library.
# The seed data should be of good random quality.
# WARNING! On some platforms /dev/random blocks if not enough entropy
# is available. This means you then cannot use the /dev/random device
# because it would lead to very long connection times (as long as
# it requires to make more entropy available). But usually those
# platforms additionally provide a /dev/urandom device which doesn't
# block. So, if available, use this one instead. Read the mod_ssl User
# Manual for more details.
</pre></blockquote>

Quote of the day:

<blockquote>
Andrew Tridgell wrote:

> the problem is that you are running out of entropy in

> /dev/random. Your box isn't active enough to generate enough

> entropy to satisfy the needs of smbd.</blockquote>

Links:

* <a href="http://www.docunext.com/wiki/Linux_and_entropy">http://www.docunext.com/wiki/Linux_and_entropy</a>
* <a href="http://www.linuxcertified.com/hw_random.html">http://www.linuxcertified.com/hw_random.html</a>
* <http://en.wikipedia.org/wiki/Hardware_random_number_generator>
* <a href="http://kerneltrap.org/node/7439">http://kerneltrap.org/node/7439</a>
* <a href="http://www.linuxfromscratch.org/hints/downloads/files/entropy.txt">http://www.linuxfromscratch.org/hints/downloads/files/entropy.txt</a>
* <a href="http://lwn.net/Articles/182874/">http://lwn.net/Articles/182874/</a>
* <a href="http://www.suspectclass.com/~sgifford/stunnel-tlsproxy/imap-tls.README">http://www.suspectclass.com/~sgifford/stunnel-tlsproxy/imap-tls.README</a>
* <a href="http://www.linuxjournal.com/article/8042">http://www.linuxjournal.com/article/8042</a>
* <a href="http://www.logix.cz/michal/devel/padlock/index.xp?show_selected=1&msgid=413>http://www.logix.cz/michal/devel/padlock/index.xp?show_selected=1&msgid=413</a>

