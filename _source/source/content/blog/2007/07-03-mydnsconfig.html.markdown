---
title: MyDNSConfig
date: 2007-07-03
tags: dns,php
---
I tried updating to MyDNSConfig 1.1.0 today but ran into some issues.

<ul><li>Filter function not working - I use it all the time, so when it didn't work, I explored around 1.1.0 a little, then reverted to 1.0.0.</li><li>After reverting, I noticed I couldn't access any of the records. I must have broken something when I was exploring MyDNSConfig 1.1.0.</li></ul>

Turns out it was the groups field in the db. I had to have "1,2" in the field for the admin. Hmmm.

Found the fix:

<a href="http://www.howtoforge.com/forums/showthread.php?p=78513">http://www.howtoforge.com/forums/showthread.php?p=78513</a>

Thanks to Matthew on the mydns mailing list. Works out great now.

