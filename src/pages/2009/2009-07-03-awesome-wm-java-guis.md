---
title: Awesome WM Java GUIs
comments:
  - author: Bruno
    email: brunovern.a@gmail.com
    date: 07/30/2009 05:33:22 AM
    text: >
      There is an easier and more robust solution: use wmname. 
  - author: Albert
    email: albert.lash@savonix.com
    date: 08/02/2009 01:38:01 PM
    text: >
      Bruno, you are a lifesaver! Thank you for posting this workaround on my blog.<br/><br/>The ia32 / MToolkit workaround was still a little buggy on my AMD64 system. Yours is working like a charm. Thanks again.
  - author: Albert
    email: albert.lash@savonix.com
    date: 08/03/2009 08:19:29 PM
    text: >
      Unfortunately, I'm still having problems with the search and replace dialog. It opens and runs fine, but when I close it, Awesome still thinks its open.<br/><br/>Its quite strange actually. I've turned on titlebars for it, and when I close the search and replace dialog, the titlebar remains. Doh! I'm not even able to click the X to close it.
  - author: Albert
    email: albert.lash@savonix.com
    date: 08/03/2009 08:33:29 PM
    text: >
      I've had to revert back to the ia32 libs and MToolkit solution. That works fine with the search and replace dialog.
  - author: G
    email: spamous@gmail.com
    date: 10/31/2010 02:35:57 PM
    text: >
      Have you found any solution to this? I am running Java applications with OpenJDK 64-bit and experience the same problem with windows not closing.
  - author: Albert
    email: albert.lash@savonix.com
    date: 10/31/2010 08:36:28 PM
    text: >
      Not for java in general, but I am successfully using jEdit with openjdk, but actually its in 32-bit.
date: 2009-07-03
---
Doh! I'm really starting to like using the Awesome window manager, but I've just now realized that jEdit doesn't work with it. I read some solutions involving this:

<pre class="sh_sh">
export AWT_TOOLKIT=MToolkit
</pre>

Alas, that's crashing the JRE for me:

<pre class="sh_sh">
# A fatal error has been detected by the Java Runtime Environment:
#
#  SIGSEGV (0xb) at pc=0x00007fa29802f63f, pid=1622, tid=140336298363216
#
# JRE version: 6.0_14-b08
# Java VM: Java HotSpot(TM) 64-Bit Server VM (14.0-b16 mixed mode linux-amd64 )
# Problematic frame:
# C  [libc.so.6+0x3063f]  catgets+0x1f
#
# An error report file with more information is saved as:
# /home/user/hs_err_pid1622.log
#
# If you would like to submit a bug report, please visit:
#   http://java.sun.com/webapps/bugreport/crash.jsp
# The crash happened outside the Java Virtual Machine in native code.
# See problematic frame for where to report the bug.
</pre>

This workaround makes it happen:
<pre class="sh_sh">
apt-get install ia32-sun-java6-bin
</pre>

and then I put this in /usr/bin/jedit:

<pre class="sh_sh">
export JAVA_HOME=/usr/lib/jvm/ia32-java-6-sun/jre/
export AWT_TOOLKIT=MToolkit
</pre>

¥

