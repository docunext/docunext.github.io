---
title: Chromium on Ubuntu 
date: 2009-03-23
tags: none
author: Albert Lash
---
I was surprised to find that <a href="https://code.launchpad.net/chromium-project">Ubuntu has a package for Chromium - the open source browser from Google</a>. It uses the WebKit HTML engine, and a new javascript engine called V8.

I love trying out new stuff, so I managed to hack it into my debian laptop, but (I guess due to ia32 / gtk differences) the browser won't display any pages, everything just shows up blank.

I then started to try and install on a 32-bit ubuntu machine, but of course I also decided to upgrade it to Jaunty Jackalope. Jaunty is still in alpha, so I wasn't surprised to find its wasn't a totally smooth upgrade. I'm still working on it... well the upgrade is done and everything looks good. Unfortunately, I'm still getting blank screens with Chromium. :-(

Turns out I just needed to install the Microsoft fonts installer package. After that, it started to display pages. Let's see if that works for on my Debian 64-bit machine:

<pre class="sh_sh">
apt-get install ttf-mscorefonts-installer</pre>

Nope, I guess I already had that installed.

I noticed on the opening screen that blogging is discouraged. That's too bad, I disagree with the statement that it doesn't help.

