---
title: Trac Error Python Neon Error
comments:
  - author: Ole
    email: ole@phpfreak.dk
    ip: 83.89.45.248
    url:
    date: 10/25/2007 06:55:03 PM
    text: >
      I just started to play around with Trac, and I ran into the exact same problem as you. Installing the libneon26-dev package fixed the problem! Thanks for sharing!
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.92.61.253
    url:
    date: 10/25/2007 08:26:13 PM
    text: >
      Glad you got it worked out! I think you'll like Trac a lot - I know I do!
  - author: Sam
    email: samstep@fastmail.fm
    ip: 195.66.81.4
    url:
    date: 07/17/2008 05:35:09 AM
    text: >
      I had the same problem on Ubuntu, installing libneon26-dev did not work for me. The problem is actually in the clearsilver package which gets confused between python2.4 and python2.5 when both are installed.<br/><br/>The solution which worked for me was:<br/><br/>download package:<br/><br/>python-clearsilver_0.10.4-1ubuntu1_i386.deb<br/><br/>from:<br/><a href="http://packages.ubuntu.com/hardy/i386/python-clearsilver/download" rel="nofollow">http://packages.ubuntu.com/hardy/i386/python-clearsilver/download</a><br/><br/>install using:<br/><br/>sudo dpkg -i python-clearsilver_0.10.4-1ubuntu1_i386.deb<br/><br/>I hope this solution will help many other desperate souls who are  come across this error after installing Trac on Ubuntu.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 75.69.165.231
    url:
    date: 07/20/2008 10:23:57 PM
    text: >
      Thanks for helping Sam!
date: 2007-10-03
tags: none
author: Albert Lash
---
Just after I got so excited about Trac I ran into this python error:

<pre>/var/lib/python-support/python2.5/trac/web/clearsilver.py:128:

RuntimeWarning: Python C API version mismatch for module neo_util:

This Python has API version 1013, module neo_util has version 1012.  import neo_cgi/var/lib/python-support/python2.5/trac/web/clearsilver.py:128:

RuntimeWarning: Python C API version mismatch for module neo_cs:

This Python has API version 1013, module neo_cs has version 1012.  import neo_cgi/var/lib/python-support/python2.5/trac/web/clearsilver.py:128:

RuntimeWarning: Python C API version mismatch for module neo_cgi:

This Python has API version 1013, module neo_cgi has version 1012.  import neo_cgi</pre>

I upgraded to libneon26-dev, will that fix it? Odd, I'm still getting the warning, but its working again. Oh well.

¥

