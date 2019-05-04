---
title: Psyco Trac
date: 2007-12-05
tags: none
author: Albert Lash
---
I'm trying to setup trac with psyco, and so far it seems to work but I have no clue if it actually is working. I just added this to the start of trac.fcgi:

<pre>
import psyco

psyco.log()

psyco.full(memory=100)

psyco.profile(0.05, memory=100)

psyco.profile(0.2)</pre>

as explained here: <a href="http://psyco.sourceforge.net/psycoguide/node8.html">http://psyco.sourceforge.net/psycoguide/node8.html</a>

I enabled logging, and it looks like its working:

<pre>
13:15:03.71   ______        #1   |100.0 %|  run                       .../fcgi_frontend.py:25

13:15:03.71  memory usage: 14929+ kb                                       %

13:15:03.71  program exit, 12/05/07                     %%%%%%%%%%%%%%%%%%%%</pre>

