---
title: Awesome I used an Aweful Command 
date: 2009-07-14
---
This is a big step for me - I finally figured out how to do something useful in the awesomewm (Awesome window manager) configuration file (rc.lua).

I'm using awful to automatically center sticky apps so that they can be positioned more easily using their titlebars. In my configuration file, I've also set my sticky apps to be floating, and for floating apps to have titlebars. Xterm, however, starts up against the top of the screen, hiding the menubar, so it can't be repositioned.

To cut to the chase, here's the command I'm using:

 <pre>awful.placement.centered(c)</pre>

Not very exciting, huh? Actually I'm quite pleased!

In my book, a sticky window isn't sticky unless its always on top. Thankfully the default titlebar I mentioned earlier includes a star icon which makes the window always on top. :-)
