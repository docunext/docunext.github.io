---
title: Good Passwords
date: 2007-10-07
tags: none
author: Albert Lash
---
Just started to use this new technique for generating random passwords:

<pre>
xxd -p -l 4 /dev/random</pre>

Should be very random. You can increase the length by using a larger number than 4. Though 4 produces an 8 character key, which is good enough for me.

