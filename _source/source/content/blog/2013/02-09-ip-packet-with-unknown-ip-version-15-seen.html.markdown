---
title: IP packet with unknown IP version 15 seen
date: 2013-02-09 19:17 +00:00
tags: openvpn, errors, linode
author: Albert Lash
---
After deciding to simplify my linode VM, I gave my LXC setup, however so
incredibly cool, the end-of-life notice. The routing was a pain, and I decided
to save some memory^1 and go with the stock linode kernel to benefit from their
support. Using pv_grub was cool, but linode won't support it.

After switching kernels, I ran into a few glitches:

* Firehol kept squaking at me about ip_conntrack (the stock linode kernel
  has its modules built-in, not modprobed), so I switched to ufw, which
  I greatly prefer, so that ended up being a bonus.
* OpenVPN started acting wacky. Granted, my setup was wacky, but I was surprised
  how opaque the error message I found, and how little subsequent searches
  turned up.

#### IP packet with unknown IP version=15 seen

Interesting error message, eh? Almost as good as treason uncloaked!
Searches turned up some recommendations to ensure matching tuns or taps on the
client and server, as well as ensuring matching lzo compression settings - all
that is standard requirements for OpenVPN, and they weren't my issue.

Ack! I was just about to elaborate on the changes I took to render that error
begone when it reared its ugly head once more. The horror!

I avoid rebooting if I can, but I've thrown in the towel and decided to do it.
I've changed so much with sticky bits like netfilter rules that I've decided to
just do it.

...5 minutes go by, elevator music playing...

Its still occurring; and although I found a rougue client setup that I forgot
about that was trying to connect without lzo, I disabled it, and the error
continues.

Tcpdump reveals this funny bit:

~~~
21:08:56.542726 f2:3c:91:ae:13:53 > ff:ff:ff:ff:ff:ff, ethertype Unknown
(0x88a2), length 32:
  0x0000:  1000 ffff ff01 0000 0000 0000 0000 0000  ................
  0x0010:  0000         
~~~

Turning on ipv6 clears that up:

    21:26:49.553612 IP6 fe80::1 > ff02::1: ICMP6, router advertisement, length 64

but still doesn't explain why I'm still getting that IP packet with unknown IP
version=15 seen message.

Hmm. No, still getting that error about the ethertype Unknown.

Here's something; the ICMP6 broadcast is legit, but the 0x88a2 broadcast is
fishy. Check out this thread from [gentoo][gentoo0x88a2]. They suggest its
a some device announcing itself to the world. Wonderful! Since its
a broadcast, the nature of the tun device receives it too, so I'm trying out the
solution they suggest to use ebtables.

    -A FORWARD -p 0x88a2 -j DROP

didn't do it, so I'm trying:

    -A INPUT -p 0x88a2 -j DROP

as well.

Not there yet, now trying:

    ebtables -A INPUT -s f2:3c:91:ae:13:53/ff:ff:ff:ff:ff:ff -j DROP
    ebtables -A FORWARD -s f2:3c:91:ae:13:53/ff:ff:ff:ff:ff:ff -j DROP

Hey what do you know - f2:3c:91:ae:13:53 is my MAC addr. Its probably something
to do with the hardware platform that linode is using, that may use AoE.

I'm just going to dial down the verbosity of OpenVPN until it becomes an issue.
Argh, that didn't work either, and I couldn't give it up; so decided to switch
back to the Ubuntu stock kernel. That seems to have fixed all sorts of
annoyances. I'm pretty certain that unknown ethertype was AoE, the module being
compiled into the linode kernel.

    aoe: AoE v50 initialised.

I suspect that was the culprit of the unknown ethertype, but I'm still not sure
about the original oddity; the IP packet with unknown IP version=15 seen log.
That's thankfully gone away, it could have been something missing from the
linode kernel, or it could have been one of the new rules I've setup with ufw.

Ufw rocks; I dig it.

^1 - I am not sure if using the stock linode kernel or the stock ubuntu kernel
will be more memory efficient, could be the latter, as only the necessary
modules will get loaded in. Its a theory.

[gentoo0x88a2]: http://forums.gentoo.org/viewtopic-t-945874.html
