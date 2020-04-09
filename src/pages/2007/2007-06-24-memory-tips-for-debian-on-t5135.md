---
title: Memory tips for Debian on t5135
comments:
  - author: Ben
    email: b.ansems.de.vries@hccnet.nl
    date: 11/30/2008 10:31:51 AM
    text: >
      Hello,<br/><br/>Did you get the network working?<br/>module vai-rhine is loaded, ifup eth0 gives no device<br/><br/>Greetz,<br/><br/>Ben
  - author: Albert
    email: albert.lash@savonix.com
    date: 11/30/2008 11:36:07 AM
    text: >
      Yes - these work fine for me. What does dmesg say? You using debian?
date: 2007-06-24
tags: acpi,debian,hp,modules
---
<strong>These are my notes on how to reduce memory consumption of debian on an HP t5135 thin client.</strong>

Add to modules blacklist:

<pre>
blacklist snd_via82xx
blacklist snd_ac97_codec
blacklist snd_pcm
blacklist snd_timer
blacklist snd_mpu401_uart
blacklist snd_rawmidi
blacklist snd_seq_device
blacklist via82cxxx_audio
blacklist uart401
blacklist parport_pc
blacklist parport
blacklist pcspkr
blacklist soundcore
blacklist sound
blacklist via82cxxx_audio</pre>

Remove device mapper from init scripts:

<pre>update-rc.d -f libdevmapper1.02 remove</pre>

Edit /etc/default/acpid:

<pre>MODULES="processor button thermal"</pre>

For more info like this, check out <a href="http://www.docunext.com/blog/2007/06/dectop-debian-tips.html">dectop Debian tips</a>

¥

