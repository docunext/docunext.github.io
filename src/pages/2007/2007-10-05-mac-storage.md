---
title: Mac Storage
date: 2007-10-05
---
I've been helping out a client with their Xserve and increasing their storage. I setup a RAID1 device and added it to an existing share by mounting it in a directory. Since Mac OS  X doesn't use fstab by default, I followed these hints to do so:

http://www.macosxhints.com/article.php?story=20021011053443661
http://www.macosxhints.com/article.php?story=20030227194830916

Even with these hints, I could not get an additional drive mounted and nested inside an existing share mount. Too bad!
