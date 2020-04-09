---
title: Learning About the Awesome Window Manager WM 
date: 2009-07-03
tags: none
author: Albert Lash
---
I'm enjoying the learning process involved with setting up Awesome. Its working for me, though I did encounter quite a few gotchas:

<ul><li><a href="http://www.informedcoding.com/blog/2009/07/awesome-wm-java-guis.html">Java apps had problems with awesome (not specifically awesome), and the fix I found didn't work with the 64-bit version of Java</a></li><li>I was confused by the actual setup and initialization of awesome as like the perl folks say, there is more than one way to do it!</li></ul>

Here's what I setup:
<b>.xinitrc / .Xsession</b>

<pre>
nm-applet &

exec awesome</pre>

Then I copied the default rc.lua:

<pre>
cp /etc/xdg/awesome/rc.lua ~/.config/awesome/rc.lua</pre>

I messed around with rc.lua for awhile, but just couldn't figure out anything useful. Eventually I'll figure it out, but first I have to figure out the tags.

I'm glad the config file is written in Lua, as I've been trying to learn more of it lately.

UPDATE: I'm also using slim as my display manager now.

