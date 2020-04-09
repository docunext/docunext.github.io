---
title: Starting to test gnash slowly
comments:
  - author: strk
    email: strk@keybit.net
    date: 05/15/2008 10:09:57 AM
    text: >
      Your guess seems wrong to me, the effect seems to be the same as setRate(12).<br/><br/>BTW, I'd discourage you from trying to go as fast as possible, as the effect<br/>is really you wouldn't give any rest to the CPU, with debatable visual effects.
  - author: Albert
    date: 05/15/2008 11:41:39 AM
    text: >
      Hi strk, I didn't want to go as fast as possible, I wanted the movie to stop. My bad, but still I'd want gnash to do a sanity check for me.
date: 2008-05-14
tags: none
author: Albert Lash
---
One of my projects, <a href="http://www.internetfloorplans.com/blog/">Internet Floor Plans</a>, uses ming to generate swf-powered interactive floor plans. I recently decided to open source the project, and it only made sense to get it working with gnash.

I sent a note to the gnash mailing list that I'd been involved with ming, and would like to help out gnash. Strk suggest I work on testing, and it made perfect sense.

I just wrote a small test using some old code I wrote as a ming example, and the cpu pegged. Doh! This was the problem:

<pre lang="php">$m->setRate(0);</pre>

I guess it makes the movie play as fast as possible. I removed that line and the cpu in not 100% for the gtk-gnash process. Good!

After a quick irc conversation with strk on #gnash, I'm going to test the same movie on Windows using a debugging flash player, hopefully available from Adobe, and an actionscript to monitor fps.

Also want to test the rate of 100 down to 80.

I'm also going to test building gnash against a few different versions of ming, 0.3 - 0.6, as well as reviewing actionscript.all, Rectangle.as and Point.as.

Wow, its been years since I've used irc, but its pretty amazing! Strk just helped me figure out the gnash tests really well. I'm going to try wrapping asm {} blocks with #ifdef MING_SUPPORTS_ASM.

¥

