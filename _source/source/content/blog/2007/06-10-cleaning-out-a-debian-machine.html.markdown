---
title: Cleaning out a debian machine
date: 2007-06-10
tags: awk,debian,dpkg
---
I enjoy computer maintenance and recently I wanted to clean up my dpkg database.

I searched and searched and found what I was looking for!

## How to clean up a Debian GNU/Linux machine
<pre>dpkg --purge $(dpkg --list | grep ^rc | awk '{ print $2; }')</pre>

Thanks much to:

<a href="http://julipedia.blogspot.com/2005/09/cleaning-up-debian-box.html">Juliepedia's "Cleaning up a Debian box"</a>

