---
title: More fun with trac
date: 2007-12-02
---
I just installed the latest and greatest trac software on a new server I'm building. In this case, I wanted to install to a separate directory, so I followed these directions:

<a href="http://peak.telecommunity.com/DevCenter/EasyInstall#administrator-installation">http://peak.telecommunity.com/DevCenter/EasyInstall#administrator-installation</a>

And also updated my PYTHONPATH environment variable, but I'm sure if I had to. Unfortunately, I jumped the gun and installed it to my debian base prior to doing the custom install. I've heard that easy_install and debian don't get along terribly well, which is really too bad, as I'm obviously a huge fan of debian, and at the same time enjoying python more and more.

To sum up some other notes about how I use trac, I set it up with Apache 2.2, mod_fcgid, and VirtualScriptAlias. Although its not totally automagic, its pretty darn close, and runs very well. I finally am now able to use <a href="http://www.docunext.com/2007/11/trac-with-mysql/">trac with mysql</a>, and that is really awesome too.

UPDATE December 5, 2007: The file required to have a different python location is: altinstall.pth in the site-packages folder.

