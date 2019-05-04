---
title: FreeWRT
date: 2007-07-21
---
I've been reading a little about OpenWRT today when I happened upon the <a href="http://www.embeddedfreebsd.org/boards.html">FreeBSD Embedded project page</a>, where they mention the Avila Gateworks platform. I did a little searching on that subject, and eventually found my way to FreeWRT. I've had a good experience with OpenWRT, and I like the looks of <a href="http://www.freewrt.org/trac/">FreeWRT</a>.

While it doesn't have the hardware support that OpenWRT has, it looks like they are putting their efforts on the building process - a wise idea! This is definitely something I'd like to check out in greater depth.

Tomato and Milkfish look pretty awesome too!
<h3>Tomato</h3>

Well Tomato looks cool, but is it? What is the license? What's up with this:

<pre><!--        Tomato GUI        Copyright (C) 2006 Jonathan Zarate        http://www.polarcloud.com/tomato/        For use with Tomato Firmware only.        No part of this file may be used without permission.--></pre>

Might be open source but not free. :-( Tomato uses mini_httpd, which is interesting.
<h3>FreeWRT</h3>

My guess is that FreeWRT really is free! I'm exploring the source tree and it reminds me a lot like m0n0wall and m0n0dev. Very nice!

Some information on the <a href="http://freewrt.org/trac/wiki/Documentation/Specs/PhpWi">freewrt web interface</a>.

To use on Debian: <ol><li>Download sources</li><li>make</li><li>make</li><li>The second make failed for me, asking for ccache, so I apt-get installed ccache and tried again</li></ol>

Its really cool that FreeWRT will build a rootfs for the WRAP boards. What about ALIX? :-) With only a few minutes spent with FreeWRT, I'm truly impressed. They've done an amazing job with it and have already achieved what I'm trying for with my efforts with phing and m0n0wall.

Hmmm, it looks like the FreeWRT interface is written in C++ not php like I had thought. Strange, the link I referenced earlier speaks of a "wi" package, but I can't find it in the make menuconfig ncurses dialogue anywhere. I just emailed the list to try and get added to the mailing list for developers so I can inquire.

<blockquote>

I'm trying to find the "wi" for lighttpd to no avail. Does it exist yet? I'm curious because of this page:

http://freewrt.org/trac/wiki/Documentation/Specs/PhpWi

I'm working with some embedded web app ideas using m0n0wall / freenas / askozia as inspiration and found your project when revisiting openwrt.

Feedback so far - your ncurses dialogue is amazing! Nice work. The author of askozia built a basic build script for m0n0wall with php, and I'm exploring the idea of using phing to make the process more flexible. An ncurses dialogue to generate the build properties would be nice, but I've never tried building something like that before.

Along those lines, I may try to use a web interface to build the build.properties file, which could then be used to by phing to build custom m0n0wall derivatives.

In m0n0wall and the various derivatives, they call the web interface the "webgui", and although the name lacks luster, its use had been very consistent and everyone seems to know what it refers to. Just a thought in response to the comment about the web interface lacking a name. </blockquote>

Just heard back from someone - there is no "wi", only the fwwif in "tntnet", which is I think is the one I referred to earlier as being developed in c++.

I also noticed that the packages has asterisk listed. Very cool!

