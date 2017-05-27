---
title: Speedit
date: 2007-09-27
tags: none
author: Albert Lash
---
My Macbook gets hot. This is old news. The bigger deal in Apple-land was the whining or mooing that Macbook Pro (MBP) users experienced. First I found Coolbook, but I don't want to spend $10 on it. Then I found Speedit, with no docs at all, but finally I think I got it to work.

I was running into a problem when I would try to load the kernel, it would say something about a different version. I then uninstalled all the speedit things I had, and then realized that the module was also used by some temp monitor I also downloaded, which never uninstalled it. I removed that one manually too, and then when I tried installing the new version I got from the actual speedit site, it works. My cpu now runs at 1000MHz:

<pre>kern.cpu_currentfreq: 1000kern.cpu_minfreq: 1000kern.cpu_maxfreq: 2000</pre>
Hopefully it will throttle up when necessary. Most importantly my legs aren't frying now. :-)

UPDATE: Day 1 of working with SpeedIt has been good. No problems so far, and smcFanControl reports around 48 degrees Celsius instead of 51 degrees. Speaking of which, I really wish the smcFanControl would follow my setting and be on high all the time. Oh well. (AHA! - Found <a href="http://forums.macrumors.com/archive/index.php/t-308871.html">this</a> which explains that FanControlDaemon isn't part of smcFanControl, so I had two fan monitor controllers running at the same time. Ugh.

UPDATE 2: Hooray Speedit!

Day three and its still working great. I got the impression today that my Macbook is a <em>little</em> bit slower, but it is well worth the cooling factor. Even though the processor is running slow, the graphics card, RAM, and system bus are still way faster than my old TiBook, which is surprisingly still quite a capable and useful machine.

Links:

<a href="http://speedit.increw.org/" rel="nofollow"http://speedit.increw.org/</a><a href="http://www.increw.com/en/downloads/index.php">Download Speedit</a>

