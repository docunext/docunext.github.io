---
title: debian apt get hold
date: 2007-03-17
---
From the apt-get manpage:

<pre>echo libc6 hold | dpkg --set-selections</pre>

will hold back libc6, useful when you want to hold back a package from upgrading if you call:

<pre>apt-get upgrade</pre>

An even easier way from <a href="http://www.debian.org/doc/FAQ/ch-pkg_basics.en.html">http://www.debian.org/doc/FAQ/ch-pkg_basics.en.html</a>

<blockquote>With aptitude, you can hold a package using     aptitude hold package_name

and remove the hold with     aptitude unhold package_name</blockquote>

Hmmmm, the aptitude command isn't working for me. I wonder if I'm missing something. Nope, doesn't seem like it. I've never used aptitude before.

