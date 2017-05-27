---
title: cc error trying to exec cc1plus execvp No such file or directory
comments:
  - author: proton
    email:
    ip: 81.183.69.81
    url:
    date: 02/06/2011 10:53:36 AM
    text: >
      thanks buddy
date: 2009-06-10
tags: none
author: Albert Lash
---
I'm trying to install encode::detect on debian, but got this error:

<pre class="sh_sh">
cc: error trying to exec 'cc1plus': execvp: No such file or directory</pre>

This fixed it:

<pre class="sh_sh">
apt-get install g++</pre>

¥

