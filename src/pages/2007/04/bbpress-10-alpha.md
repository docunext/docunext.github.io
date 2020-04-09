---
title: bbpress 1.0 alpha
comments:
  - author: mdawaffe
    email: mda@blogwaffe.com
    url: http://blogwaffe.com/
    date: 04/28/2007 03:05:44 AM
    text: >
      Thanks for noticing this.  Please feel free to log bug reports and other tickets at <a href="http://trac.bbpress.org/" rel="nofollow">http://trac.bbpress.org/</a> (you'll need to login with a username and password you create either on the <a href="http://bbpress.org/forums/" rel="nofollow">bbPress forums</a> or the <a href="http://wordpress.org/support/" rel="nofollow">WordPress.org support forums</a>).
  - author: admin
    date: 04/28/2007 02:37:28 PM
    text: >
      Sure thing mdawaffe, I've alse submitted a few bugs to the mailing lists too, namely the urlencode bug for themes. I always put my notes here in docunext while I'm debugging and testing out new installations.
date: 2007-04-27
tags: open source
---
Just updated bbpress svn checkout and getting this error:

<pre>
Warning: Call-time pass-by-reference has been deprecated - argument passed by value; If you would like to pass it by reference, modify the declaration of [runtime function name](). If you would like to enable call-time pass-by-reference, you can set allow_call_time_pass_reference to true in your INI file. However, future versions may not support this any longer. in /usr/share/bbpress/bb-includes/classes.php on line 260</pre>

¥

