---
title: Debian Wheezy on an Older Mac Mini Mac Keyboard Needed 
date: 2011-04-29
---
I'm trying to install Debian Wheezy on one of the earlier Intel based Mac Minis. I first tried pressing "C" a non-Mac keyboard, but that just didn't work! Then I tried asking the system settings to boot off of the foreign operating system CD, but that didn't work either - I guess I burned a amd64 version of Wheezy by accident...

Unfortunately, the system would not boot off the hard drive again. At least I was able to eject the CD by holding down the **left mouse button** upon boot. Still, I was presented with the "No Operating System Found" error.

Finally I figured I would try a real Mac keyboard. Wow - that worked! I was able to choose which OS by holding down the option key.

Now I'm using "diskutil" to resize the volume so I can have at least 10GB of space to work with. I may end up removing Mac OS altogether, even.

Actually, I'm running squeeze, and I like it because its super stable.

Helpful Links:

* <http://bredsaal.dk/generating-entropy-with-a-wireless-network-card>
* <http://www.macworld.com/article/135944/2008/10/startupboot.html>
* <http://www.thiscoolsite.com/?tag=single-boot-linux-new-mac-mini>

