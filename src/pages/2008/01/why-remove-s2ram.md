---
title: Why remove s2ram 
comments:
  - author: Albert
    date: 03/26/2008 05:23:28 PM
    text: >
      As of the new Ubuntu 8.04 - s2ram is back - thankfully!
date: 2008-01-31
tags: none
author: Albert Lash
---
The latest Ubuntu distro removes a key piece of software, s2ram, without justification. This is a major folly in my opinion, and from <a href="https://bugs.launchpad.net/ubuntu/+source/uswsusp/+bug/134238">this</a> thread, it appears many others feel the same.

I hope they restore this binary. In the mean time, I'm attempting to install the <a href="http://packages.debian.org/sid/uswsusp">one from Debian</a>. Why do I need this? For this:

<pre>s2ram --force --vbe_post</pre>

Hooray! It works! Now I just have to enable some devices to help the machine wake up.
<h4>Where's xfsm-shutdown-helper?</h4>

Now I can't find xfsm-shutdown-helper... where is it? Why isn't it included n Xubuntu? It is included on Debian: /usr/sbin/xfsm-shutdown-helper. See:

<a href="http://packages.debian.org/etch/xfce4-session">http://packages.debian.org/etch/xfce4-session</a>

While I'm sure its a good thing for GUIs to be modular, it can be frustrating from time to time, especially when distros like Ubuntu are omitting or removing standard resources in lieu of their own methods. Again Ubuntu has aggravated me...

¥

