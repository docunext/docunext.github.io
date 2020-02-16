---
title: Compiling CVS ming on Mac OS X
date: 2003-11-20
tags: Apple
---
New effort:

Used plumber fixes from the Ming wiki. Copied the libming.a that I created manually to the build/ming-build/ directory, then copied several files from the ming/php_ext/ directory to the php-5.0.3/ext/ming/ directory. Really not sure if that will work, but work a try. Had created a backup copy of the php-503/ext/ming/ dir but had to remove it.

The problem here is not compiling Ming, that compiles OK, can't get it to work with PHP 5, it seems like there is some dependency in the PHP code /ext/ming/ that is preventing it from working OK.

Finally got it to work. First it was the libxml2 that needed to be updated, then once that was updated, libxslt compiled OK. For Ming, I had to edit the php-5.0.4/ext/ming/ming.c and php_ming.h files. (While I was at it, I ended u pgrabbing the latest version of PHP from the snapshot page). I commented out a bunch of lines that were causing errors and it compiled OK, then I added the required code for PrebuiltClip, which is an absolute necessity for me. Finally, it compiled OK and installed OK and works!

I've saved the dmg as a backup, but should probably save the entire setup for future usage.
