---
title: Even more perl notes
date: 2008-06-24
tags: none
author: Albert Lash
---
Yes I've got more:

Does mod_deflate cause problems with memory expansion? I *think* its due to Apache claiming small bits of memory, which would eventually level off. Using GTop, I see the Apache process add about 20kb of memory usage every request. If I turn off compression, it goes away. Yeh - I guess it has to do with how the output streams out of Apache. If the deflate output filter doesn't know how much data is coming, its going to add a little more, just in case its needed. By turning off (aka disable) output buffering in the perl output handler, the deflate filter knows ahead of time how much memory it will need, and if it needs to allocate some more. I am doing this using the following method:

<pre lang="perl">
sub handler {    $| = 0;    my $r = shift;    my $output;...} </pre>

Hmmm, tested that again, the memory still bumps up a little each request. Meh, so I turned off compression, and am now using nginx as a reverse proxy to compress the content:

<pre lang="bash">
25013 www-data  15   0  4968 1420  700 S  0.0  0.1   0:00.17 nginx
25544 www-data  15   0 42384  25m  532 S  0.0  2.6   0:00.00 apache2
25545 www-data  18   0 68024  30m 5592 S  0.0  3.2   0:01.88 apache2
25587 www-data  15   0 68480  31m 5592 S  0.0  3.2   0:01.03 apache2        </pre>

Oh yes, and of course I have varnish setup in front of nginx to cache content too. :-)

Good stuff:* use strict;* use warnings;* Running apache as a single process is helpful for identifying memory leaks with gtop.

Surprise:

Nginx is very efficient. Good.
