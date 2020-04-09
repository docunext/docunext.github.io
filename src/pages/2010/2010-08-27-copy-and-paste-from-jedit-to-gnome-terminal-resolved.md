---
title: Copy and Paste from jEdit to Gnome Terminal RESOLVED 
comments:
  - author: taiganaut
    email: taiganaut@thisblueroom.net
    url: https://twitter.com/#!/taiganaut
    date: 04/24/2012 03:00:24 PM
    text: >
      This is Linux yakshaving fail of truly rare and pure quality. I have not seen such a fine specimen in months, possibly years.<br/><br/>BTW, it's still broken in 2012.<br/><br/>My "solution" is going to be to get another editor, and next time we get new workstations at work, not give up on getting a frigging Mac this time.  I have been using Linux since 1994.  OVER IT.
  - author: Albert
    email: albert.lash@savonix.com
    date: 04/28/2012 12:29:17 AM
    text: >
      Vim is dead! Long live vim!
date: 2010-08-27
tags: java
---
On a recent install of Lucid Lynx Ubuntu version 10.4, **I was unable to copy and paste from jEdit to Gnome Terminal**.

I found [this](http://baroque.posterous.com/19170112) web page that explained how installing the Sun JRE fixed it:

<pre class="sh_sh">
sudo apt-get install sun-java6-jdk
</pre>

But Lucid Lynx doesn't have the Sun JRE! Thankfully, [this](https://wiki.ubuntu.com/LucidLynx/ReleaseNotes) page explains that it is available in the partner repository, and how to add it:

<pre class="sh_sh">
sudo add-apt-repository "deb http://archive.canonical.com/ lucid partner"
</pre>

After I got that installed, I was still having problems, apparently because I'm using the Awesome window manager. The awesome [wiki](http://awesome.naquadah.org/wiki/Problems_with_Java) has a fix that worked for me, putting this at the top of /usr/bin/jedit:

<pre class="sh_sh">
wmname LG3D
</pre>

Alas, this causes problems with search and replace! I decided to switch back to the OpenJDK packages and switch to lxterminal.

Funny, lxterminal started getting kind of sluggish for me, so I installed Xfce4-terminal and it rocks! So it's not so much a resolution but a workaround.

<pre class="sh_sh">
sudo apt-get install xfce4-terminal
sudo update-alternatives --config x-terminal-emulator
</pre>

¥

