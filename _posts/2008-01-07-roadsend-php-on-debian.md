---
title: Roadsend PHP on Debian
date: 2008-01-07
tags: debian,php
---
I read that Roadsend released another version of their PHP compiler on Freshmeat.net so I decided to try it out on debian.

First I had to install bigloo. I've never heard of that before - cool!

Uh-oh:

<pre>
checking for bigloo... bigloo
checking version of bigloo... 2.8c, bad
configure: error: Bigloo version 3.0b, 3.0c required
See `config.log' for more details.</pre>

Looks like I'll have to wait until bigloo version 3.0b+ is available on debian unstable.

