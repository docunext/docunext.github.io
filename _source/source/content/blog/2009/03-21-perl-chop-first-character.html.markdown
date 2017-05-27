---
title: Perl Chop First Character
comments:
  - author: Fox
    email: dont@wanna.com
    ip: 187.37.58.35
    url:
    date: 10/21/2009 09:23:17 AM
    text: >
      substr $_, 0, 1, "";
  - author: Albert
    email: albert.lash@savonix.com
    ip: 71.163.55.98
    url:
    date: 10/21/2009 07:57:40 PM
    text: >
      Thanks Fox!
  - author: ErnestThing
    email: ErnestThing@towhichireplied.com
    ip: 64.134.221.36
    url:
    date: 10/26/2010 02:13:38 PM
    text: >
      Thanks to both of you!
date: 2009-03-21
tags: perl,strings
---
I can't believe this isn't easier to find.

Probably an easier way:

<pre class="sh_perl">substr($string,1,length($string))</pre>

¥

