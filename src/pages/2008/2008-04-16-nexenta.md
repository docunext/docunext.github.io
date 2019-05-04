---
title: Nexenta
comments:
  - author: Shiv
    email: shivakumar.gn@gmail.com
    ip: 59.92.222.64
    url: http://www.belenix.org
    date: 04/16/2008 10:48:30 PM
    text: >
      Most codebase at opensolaris.org is under CDDL and not GPL
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 04/16/2008 11:35:41 PM
    text: >
      Ah - you are right Shiv, I read that they were considering the GPL v3, assumed that they went ahead with it, but I just checked again and they never did anything about it.<br/><br/>I found this too:<br/><br/><a href="http://ianmurdock.com/2007/06/08/where-do-i-download-opensolaris/" rel="nofollow">http://ianmurdock.com/2007/06/08/where-do-i-download-opensolaris/</a><br/><br/>Interesting...
date: 2008-04-16
tags: nexenta,opensolaris
---

<a href="http://www.nexenta.org/os" rel="nofollow">Nexenta
</a> looks very cool too - I'll have to try this out tomorrow as well!

It uses the SunOS kernel and GNU userland tools... as well as... are you ready... apt! Nice.

I'm really happy that Sun has decided to release their operating system under the
<del>GPL
</del> CDDL. I've heard very good things about Sun and Solaris but its always been just out of my reach.

<h4>My experience with Nexenta
</h4>

My initial experience was great- the install went fine - apt-get update, yup. The problems started when I tried to login remotely via ssh. It prompts me for my usename, says its entering interactive mode, and hangs... forever.

Oh well. I found
<a href="http://www.livibetter.com/blog/2007/07/11/ssh-takes-exactly-1-minute-20-seconds-or-80-seconds/" rel="nofollow">this
</a> which seemed like it was going to help, but alas, it did not.

I feel like I'm missing something incredibly obvious.

<pre class="sh_sh">
debug1: Authentication succeeded (keyboard-interactive).
debug1: channel 0: new [client-session]
debug1: Entering interactive session.
</pre>

It feels like a blocked process - like the kernel / os is waiting for something, and won't allow the process to move forward. Hmmm. I guess its a network driver bug for the chip on the d201gly - I got ssh working by adding a USB nic. The driver causing the problems is "sfe".

The one that works is a belkin usb nic, driver "upf".

A couple things which helped:

<a href="http://solaris-x86.org/documents/tutorials/network.mhtml" rel="nofollow">http://solaris-x86.org/documents/tutorials/network.mhtml</a>

<a href="http://www.rite-group.com/rich/solaris_dhcp.html" rel="nofollow">http://www.rite-group.com/rich/solaris_dhcp.html
</a>

This is pretty cool:

</a>

I tried installing phpsysinfo on top of apache2 and it runs but I get many errors:

<blockquote>

WARNING: The SunOS version of phpSysInfo is work in progress, some things currently don't work
</blockquote>

This is kind of cool too:

</a>

The filesystems layout is different than both linux and freebsd it seems. I've heard good things about zfs so I'm very curious.

UPDATE: I've got moinmoin installed so I can really test out the platform.

More notes:

<a href="http://www.docunext.com/wiki/Nexenta">Nexenta Notes at Docunext
</a>

¥

