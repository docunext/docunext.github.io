---
title: vzquota error Quota on syscall for 111 Device or resource busy
date: 2008-07-09
tags: none
author: Albert Lash
---
Just ran into this issue when trying to start a ve. The problem was a process running in the private area.

<pre>
lsof 2> /dev/null | egrep '/vz/root/111|/vz/private/111'</pre>

That revealed that find was doing its thing inside the private area, so I stopped that process and was then able to start the ve. :-)

