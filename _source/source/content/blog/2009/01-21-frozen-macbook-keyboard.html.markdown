---
title: Frozen Macbook Keyboard
date: 2009-01-21
tags: none
author: Albert Lash
---
I've just updated the linux kernel on my Macbook running Debian, and unfortunately the keyboard and mouse no longer work. :-(

I had to jump through some serious hoops to get remote access to the machine so that I can try and get an older kernel installed again and ready for lilo. I wish I could just install grub on this, but I don't want to screw anything else up further.Yup - works OK with 2.6.18! How about 2.6.22?

UPDATE: This persisted even through to tightvncserver. I found an answer <a href="http://ubuntuforums.org/showthread.php?t=382441">here</a>. In a nutshell, its a workaround using ~/.vnc/xstartup.

