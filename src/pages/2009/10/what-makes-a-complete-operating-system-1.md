---
title: What makes a complete operating system 
date: 2009-10-01
tags: netbsd
---
<span style="display: inline;">
I've been working with open source operating systems and software for years, but I continue to learn so much about these pursuits everyday.

I compiled my first linux kernel a few years back using Gentoo, and then thanks to Debian I learned that linux is the kernel itself and that there is a lot more to an operating system that most people call linux, hence the term GNU/linux.

In GNU/linux, GNU provides what I think is called the "userland".

In my opinion, an operating system must or should minimally be comprised by the following:

* An initialization system, aka init, process manager, or similar.
* A shell - bash, tcsh, csh, etc.
* A networking daemon - telnet, dropbear, or ssh.

More recently in my escapades I've learned about how some BSD operating systems are a little different. The kernel and the base userland system are part of the same development effort.

At first I didn't think that this was a big deal at all, but lately I've been finding this to be very interesting.

It has put operating systems into a new light for me; almost like hardware. I love the idea that NetBSD has a kernel and userland in the same boat, especially since [NetBSD has impressive Xen support](http://www.docunext.com/2009/09/a-case-for-debian-gnuknetbsd/). Although I love to tinker with machines, when I build a server, I most often refrain from making any adjustments because "if it isn't broken, don't try and fix it".

When it comes to software, things can "break" if a security vulnerability is discovered, so updates are important. But what if a software update impairs the operability of a system? I can't tell you how many times a software update has bit me.

That may be why I'm such fan of virtualization. Why not put an abstraction layer between the hardware and the service layer? That role could be fulfilled by a NetBSD Xen setup, and this is where I feel a unified, minimal, and complete operating system. It would be quite advantageous to have a solid, reliable, and secure base operating system which could run other virtual environment and machines. All I would want would operational and diagnostic data. If I can get that, I feel its a complete operating system.

The separation of "system" and "user" land is important. Super users can always meddle with everything, and that is quite dangerous! In my experience there has been too fine a line between hardware and userland. I've disabled network interfaces remotely over SSH before, and that stinks!

As I write this, I realize that the concept of virtualization is really starting to change what I think about operating systems. I'm believe that very soon the focus of what an operating system is supposed to do will absolutely include virtualization. Where does that leave userland? I think it stays exactly where it is, it will only include the absolute minimum, kind of like a BIOS-based operating system.

Furthermore, virtualization can run entire operating systems within userspace. Its quite obvious, yes, but I think the distinction that it can be userspace is an important one.

NOTE: I include the Space Glenda drawing from the Plan9 folks because I believe that they are the ones who pioneered the idea of distinguishing between user and system space. I could be totally wrong about this,

