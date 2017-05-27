---
title: DEBIAN md5sums
date: 2008-03-13
tags: debian,dpkg,packaging,pear,php
---
Turns out this is a must! :-) How else is apt-get supposed to know what to install? Duh!

OK, there is probably a helper to create the list... hmmmm. Maybe md5sums isn't necessary. I had my DEBIAN folder setup wrong, and I just found this page about <a href="http://quietsche-entchen.de/cgi-bin/wiki.cgi/CreatingDebianPackages" rel="nofollow">creating debian</a> packages which says its optional.

Trying again... aha! Turns out the problem was that dh-make-php only supports the old version of package.xml - version 1.0. That's too bad. Thankfully I was able to create one thanks to dfm.

The goal for me in setting up package files is to be able to type "debian/rules binary" and have it produce the package for me. The term "binary" might be different depending on the package, but that's what I'm using for php-nexista.

Thanks to this <a href="http://www.debian.org/doc/manuals/repository-howto/repository-howto">repository howto</a> and devscripts (dkpg-scanpackages) I was even able to setup a repository. W00t!! I'm just doing simple repositories for now, so the sources.list file is:

<pre>deb http://www.docunext.com/debian/ binary/</pre>

And this page is one I'll need to reference to create a key:

<a href="http://wiki.debian.org/SecureApt">http://wiki.debian.org/SecureApt</a>

