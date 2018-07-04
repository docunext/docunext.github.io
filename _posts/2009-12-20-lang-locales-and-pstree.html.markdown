---
title: LANG Locales and pstree
comments:
  - author: Albert
    email: albert.lash@savonix.com
    ip: 96.231.130.53
    url:
    date: 01/06/2010 07:07:04 PM
    text: >
      I found this page helpful too:<br/><br/><a href="http://www.divvun.no/doc/tools/utf-8-setup.html">http://www.divvun.no/doc/tools/utf-8-setup.html</a>
date: 2009-12-20
tags: debian,inotify,shell
---
A few months back, I started getting strange output when issuing the pstree command. Not too strange - just the tree was not looking how it was supposed to - instead it was displaying a bunch of question marks!


I didn't bother for a long time, then I noticed if I unset the LANG variable, the pstree display looked normal again.

Today I decided to try and fix it so the LANG variable could stay.

This page on [LANG tips](http://computing.fnal.gov/unix-users/tips/Lang_Tips.html) explained that en_US is much faster than en_US.UTF-8, so I figured I'd give it a try.

To set this up, I ran:

<pre class="sh_sh">
dpkg-reconfigure locales
</pre>

<div>
I selected both en_US.UTF-8 and en_US.ISO-8859-1, with en_US being the default.
</div>

Yay! Its fixed. :-)

As for the specific different? I believe that UTF-8 is unicode, and can handle multiple character sets - such as those in foreign languages. I don't think that's the whole story though, just because the locale can handle multiple character sets, doesn't mean int can display them. That's another story, and I've still got some learning to do in that department.

¥

