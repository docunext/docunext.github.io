---
title: Nano and Screen
date: 2006-08-14
tags: none
author: Albert Lash
---
<p>On a few distributions (not to name names, but RedHat and Debian), nano comes with an annoying configuration, where backspace is a forward delete.</p>
<p>To fix this, uncomment the following line in /etc/nanorc:

<pre>#set rebinddelete</pre></p>
<p>The GNU screen software has a similar issue. When I hit &quot;delete&quot; it barks &quot;Wuff! Wuff!&quot;. You can make your screen delete work again by calling TERM=screen screen. Add alias screen='TERM=screen screen' to your bash profile to simplify your life.</p>

Thanks!

<a href="http://www.ubuntuforums.org/showthread.php?t=90910">http://www.ubuntuforums.org/showthread.php?t=90910</a>

