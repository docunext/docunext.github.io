---
title: Home Folder Data Storage
comments:
  - author: veera
    email: veerapower@yahoo.com
    date: 02/19/2010 03:39:38 AM
    text: >
      hi i'm veera
date: 2009-10-02
tags: configuration
---
I recently blogged about [home folder configuration settings storage](http://www.docunext.com/blog/2009/07/home-folder-configuration-files.html), and now I'm thinking about how data could be stored.

Thinking about data too, I wonder if .config is the best name for a "top level" storage folder. Maybe something generic like ".storage" might be more appropriate.

By the way, the dot (".") in front of config or storage lets the graphical user interface, the GUI, know that the folder should normally be hidden. I guess that's why its been OK for so many programs to simply dump their configurations and storage folders right into a home directory for so long.

<div>I did a little research and found [this awesome thread at the Arch Linux Forums about putting $HOME in .home](http://bbs.archlinux.org/viewtopic.php?id=77606) where I learned about $XDG_CONFIG_HOME!</div>

The author that thread suggests using .home as the "top level" home directory. Personally, I think that's a brilliant name for it, but I'm not too crazy about the implementation.

Another possibility found in the thread is the use of libetc.

¥

