---
title: Ubuntu 10.10 Is Terrific WOW 
comments:
  - author: Albert
    date: 05/05/2011 11:58:08 AM
    text: >
      NOTE: I still like Debian better! :-)
date: 2011-05-03
tags: ubuntu
---
As luck would have it, I decided today that I wanted to switch from using the <tt>fgrlx</tt> proprietary ATI video graphics driver to the preferable open source driver <tt>radeon</tt>.

Like most of the luck I've had, it was not without a challenge - or with surprises!

When I switched video drivers, my **X11 screen was fuzzy**. After some research, it appeared that the most appropriate next step was to upgrade the kernel. So I did, and it worked (works). But what about Firefox 4?

Firefox 4 is an amazing upgrade. Little did I know that upgrading to Firefox 4 would transition my state to an X server without any input capabilities - i.e. **UPGRADE TO 10.10 - mouse and keyboard not working**. Right - nowhere and nohow.

What next? A recovery boot - netroot - to upgrade **everything** to the "N-stage" of Ubuntu:

<pre class="terminal">
apt-get dist-upgrade
</pre>

A long time later... my machine boots up... and works... but my AWESOME WINDOW MANAGER is GONE!!!!

But wait, this environment is not bad. Wow, its good!

#### Update = Not Awesome

So after enjoying natty for a moment, I found myself wanting AWESOMe back immensely, so I found [this](http://ubuntuguide.net/ubuntu-11-04-natty-login-to-classic-gnome-2-desktop), which brought me back to normal gnome, but no awesome. Ugh.

#### Update #2 - Its Not That Hard

I shouldn't have scorned so easily - its actually not that difficult to get the Lua-energized Awesome window manager cooperating with Gnome in ubuntu 11.xometin aka natty the narwhale.

Or at least it wasn't too bad for me. Here's what I wrote on launchpad:

<blockquote class="svxlb">
Albert Lash wrote 2 hours ago: 	#7
Same here... I upgraded to FF4, then had to upgrade to natty, enjoyed the new GUI for a bit, then needed my awesome wm back, so I logged into Ubuntu Gnome classic from gdm, only to find awesome gone. :-(
Hopefully I can figure it out. If I do, I'll post back. If I can't, I'll check back!
Albert Lash wrote 2 hours ago: 	#8
That wasn't so bad... I restarted, chose awesome from the environment menu option list at the bottom of the login screen - that produced awesome, but no gnome, so I restarted, chose Ubuntu Classic - (not the "no effects" choice).
Note: I also set awesome as my window manager again with gconf in the midst of all that:
https://awesome.naquadah.org/wiki/Quickly_Setting_up_Awesome_with_Gnome
</blockquote>

¥

