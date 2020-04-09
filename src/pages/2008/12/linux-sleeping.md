---
title: Linux Sleeping
date: 2008-12-04
tags: none
author: Albert Lash
---
My <a href="http://www.my-tech-deals.com/blog/2008/08/399-laptop-pictures-acer-extensa-5620z.html">Acer Extensa 5620Z notebook</a> used to suspend to ram fine with the following command:

<pre lang="bash">s2ram --force --vbe_post</pre>

Now, that doesn't seem to work well. It goes to sleep, but freezes on wakeup. I'm now able to suspend and hibernate using the GUI in Gnome, but it doesn't work every time. It seems to work the first time, but then freezes up on subsequent suspends. Doh!

UPDATE: Hibernate seems to work every time. It takes longer, but its more reliable.
