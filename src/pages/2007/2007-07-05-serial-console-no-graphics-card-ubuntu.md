---
title: Serial Console No Graphics Card Ubuntu
date: 2007-07-05
tags: serial,ubuntu
---
I wanted to setup a linux server with no graphics card. After installing the os and configuring the network and all that jazz, I set it up to redirect the console over a serial connection.

<a href="http://www.vanemery.com/Linux/Serial/serial-console.html">http://www.vanemery.com/Linux/Serial/serial-console.html</a>

<a href="http://ubuntuforums.org/showthread.php?t=292507">http://ubuntuforums.org/showthread.php?t=292507</a>

<del>added file "ttys0" with contents: </del><del>T0:2345:respawn:/sbin/getty -L ttyS0 38400 vt100</del>

That didn't work!

Useless:

* <https://answers.launchpad.net/ubuntu/+question/3386>

better:

<a href="http://paste.ubuntu-nl.org/28047/">http://paste.ubuntu-nl.org/28047/</a>

Actually both helped, along with this:

<a href="http://www.howtoforge.com/setting_up_a_serial_console">http://www.howtoforge.com/setting_up_a_serial_console</a>

I got it to work and its great. I'll mainly use ssh for connections, but have the serial connection to fall back on if the network configuration gets mucked up, which has happened to me way too many times already.

I just picked up a DLI SS20 for serial connections. Took a little tinkering to get started - I had to turn on hardware flow control to get it to work right with a soekris net4501.

