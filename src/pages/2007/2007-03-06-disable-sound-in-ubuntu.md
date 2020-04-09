---
title: Disable Sound in Ubuntu
comments:
  - author: melbert
    email: melbert.baqueriza@gmail.com
    date: 03/17/2008 01:50:16 AM
    text: >
      i dont know what to do
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/17/2008 11:27:10 AM
    text: >
      Hi Melbert, what is it you are trying to do?
date: 2007-03-06
tags: none
author: Albert Lash
---
Hooray! I finally disabled sound altogether in Ubuntu! It was surprisingly difficult... but in the end all I did was copy the noALSA.modprobe.conf file to /etc/modprobe.d/:

<pre>cp /lib/linux-sound-base/noALSA.modprobe.conf /etc/modprobe.d/</pre>

Helpful Link:

<a href="http://ubuntuforums.org/showthread.php?p=1824685">http://ubuntuforums.org/showthread.php?p=1824685</a>

¥

