---
title: m0n0wall Development Environment
date: 2007-06-27
tags: askozia,development,freebsd,freenas,m0n0wall,mac,php
---
I'm trying to setup a development environment for m0n0wall on my Macbook, but now I'm running into a weird problem with FreeBSD when installing the jail.

I'm following the AskoziaPBX how to install freebsd6 for m0n0wall development instructions, which is a combination of the <a href="http://m0n0.ch/wall/development.php">m0n0wall development docs</a> and the miniBSD docs available at ultradesic.com.

Here's a screenshot of the problem I'm running into:


Hmm, seems to have worked OK. Couple of notes:

<ul><li>Didn't need to download the minichroot.sh to any particular directory.</li><li>Needed to put the 'set prompt = "MiniBSD %~ %# "' line at the bottom of /usr/jail/root/.cshrc</li></ul>

I'm rebuilding world now, and yes I am drinking a cup of coffee. Well a glass of iced coffee. :-)

#### <b>m0n0dev Notes</b>

m0n0dev is looking real good. Just one note so far:

<ul><li>After untarring the tarball, I chmodded m0n0dev.php: chmod 0700 m0n0dev.php</li></ul>

Getting an error when trying to patch everything:

<pre>COMMAND FAILED: cd /usr/src; patch -p0 &lt; /usr/m0n06branch/build/patches/kernel/kernel-6.patch</pre>

DOH! I missed this step:

<blockquote>Change the 'cvs tag' line so we sync the OS sources to Release 6.2:* default release=cvs tag=RELENG_6_2</blockquote>

Back to that cup of coffeee... good thing I just stocked up from <a href="http://www.hungryblogger.com/blog/2007/06/trader-joes-trip.html">Trader Joe's</a>!

While I'm on it, I did some reading up on FreeNAS, another distribution based off m0n0wall. There are a few things about FreeNAS that really caught my attention:

<ul><li>Uses lighttpd instead of mini_httpd</li><li>Uses PHP5 instead of PHP4</li></ul>

More information available at the <a href="http://www.freenas.org/downloads/docs/devel-docs/">FreeNAS Developer's Handbook</a>.

I've been using FreeNAS a little bit here and these, and although I was annoyed by the NFS bug (or lack of functionality), it is working quite well for me now. The thing that really interests me about FreeNAS is how it can gracefully coordinate the management of hard drives from a solid-state flash storage device. What I mean is that the operating system uses a rock-solid base of FreeBSD and a user-interface which allows very little to no changes to the operating system, but provides isolated management of other system resources, like drives, (whereas m0n0wall focuses on network interfaces), etc. This results in a very stable, yet configurable focus.

At this point, I have several m0n0wall-based servers:

<ol><li>Network bridge for bandwidth management and traffic shaping. Runs stable m0n0wall 1.23, running on a generic PC (PC Chips V21G VIA C7 w/ dual gigE intel ethernet cards). </li><li>Firewall and router for my LAN, also m0n0wall stable, running on WRAP platform.</li><li>AskoziaPBX running on an HP t5135 (VIA EDEN) for our phone system.</li><li>FreeNAS running on a generic PC (AMD)</li></ol>

I had tried out pfsense a bunch of times and although it had some features I liked (CARP), there was a lot I didn't need, so I'm opting for the simplicity of m0n0wall instead.

<a href="http://m0n0.ch/wall/list-dev/showmsg.php?id=23/43">An email was posted to the development list recently mentioning m0n0AP</a>, which is something I'd be interested in checking out at some point:


I expect there to be many more m0n0wall based embedded applications to come out very soon. Some ideas: a virtual machine server, where you can create, edit, start and stop virtual servers, kind of like virtuozzo, but free and open, based on FreeBSD and QEMU: FreeQEMU anyone? (pronounced "freak-a-moo"). Also, a database management system - SQLite would be perfect for this. Like FreeNAS, you'd need a hard drive (or possibly even an NFS share) for this stuff, due to performance, storage requirements, and the number of writes required.

<h3>Back to m0n0wall Development Environment</h3>

<pre>./m0n0dev.php patch everything</pre>

It worked this time:

<pre>Hmm...  Looks like a unified diff to me...

The text leading up to this was:--------------------------
|--- Makefile.orig       Tue Feb  6 12:03:13 2007
|+++ Makefile    Tue Feb  6 12:03:35 2007--------------------------

Patching file Makefile using Plan A...

Hunk #1 succeeded at 27.

done

patched bootloader

MiniBSD ~/m0n0dev/m0n0dev-0.1.2 # </pre>

I'm now building everything and I was just asked a bunch of questions about SNMP - I just used the defaults. Also given options for dnsmasq - didn't select anything, just chose OK.

Running into a problem with ipsec:

<pre>cd: can't cd to /usr/ports/security/ipsec-tools/work/ipsec-tools-0.6.6</pre>

what's up?

<pre>MiniBSD ~/m0n0dev/m0n0dev-0.1.2 # cd /usr/ports/security/ipsec-tools/work/

MiniBSD /usr/ports/security/ipsec-tools/work # ls.build_done.ipsec-tools._usr_local      .extract_done.ipsec-tools._usr_local    ipsec-tools-0.6.7.configure_done.ipsec-tools._usr_local  .patch_done.ipsec-tools._usr_local</pre>

Aha, no 0.6.6, how about installing it? Or how about just changing m0n0dev.php to use 0.6.7, that was easy enough. Will it work?? Had to also copy /usr/m0n06branch/build/patches/packages/ipsec-tools-0.6.6 to 0.6.7, but it worked! Resulting in this: "built and patched racoon (albeit hackily)"

Couldn't have said it better myself! Everything compiled and packaged without any serious problems, though I did get this:

<pre>fstab: /etc/fstab:0: No such file or directory</pre>

Didn't stop the process though.

