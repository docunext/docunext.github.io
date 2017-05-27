---
title: Trying out C re2c
date: 2008-06-11
tags: apache,mod_rewrite,regex
---
After reading about re2c on the planet debian site, I read up on it a little, then today when I was thinking about modrewrite and mysql, I decided to try writing a little bit of c. Although I'm not totally familiar with python, the two share some similarities.

I've grasped the idea of main, but when it comes to pointers, I'm still a little foggy.

And I'm stuck trying to use stdin to supply a string for use with a mysql prepared statement. I've got to read some more C code to get comfortable with it.

UPDATE: I've made some progress with re2c - thanks to <a href="http://use.perl.org/~Matts/journal/30597">re2xs from Matts</a>. It makes creating and using the regexes a little easier. I was trying to figure out how to handle back-references (aka backreferences), and it took me awhile because the <a href="http://re2c.org/manual.html">re2c manpage calls them backtracks</a>.

I've also made some progress with the C client I coded for use with mod_rewrite. Its pretty straightforward, I'd like to use prepared statements though.

Along the way, I found this which seems interesting: <a href="http://code.google.com/p/openvpn-auth-ldap/">http://code.google.com/p/openvpn-auth-ldap/</a>

I also found out about <a href="http://www.swig.org/">swig</a>. I'd heard of it before but for some reason thought it had something to do with graphics.

