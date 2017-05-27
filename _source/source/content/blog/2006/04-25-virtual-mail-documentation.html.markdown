---
title: Virtual Mail Documentation
date: 2006-04-25
---
Got this error when setting up Gentoo Virtual Mail Server:

<pre>
Apr 25 17:20:10 carlos3 postfix/qmgr[15440]: warning: premature end-of-input on private/virtual socket while reading input attribute name

Apr 25 17:20:10 carlos3 postfix/qmgr[15440]: warning: private/virtual socket: malformed response

Apr 25 17:20:10 carlos3 postfix/qmgr[15440]: warning: premature end-of-input on private/virtual socket while reading input attribute name

Apr 25 17:20:10 carlos3 postfix/qmgr[15440]: warning: private/virtual socket: malformed response

Apr 25 17:20:10 carlos3 postfix/qmgr[15440]: warning: transport virtual failure -- see a previous warning/fatal/panic logfile record for the problem description

Apr 25 17:20:10 carlos3 postfix/qmgr[15440]: warning: transport virtual failure -- see a previous warning/fatal/panic logfile record for the problem description

Apr 25 17:20:10 carlos3 postfix/master[15435]: warning: process /usr/lib/postfix/virtual pid 15466 exit status 1

Apr 25 17:20:10 carlos3 postfix/master[15435]: warning: /usr/lib/postfix/virtual: bad command startup -- throttling

Apr 25 17:20:10 carlos3 postfix/master[15435]: warning: process /usr/lib/postfix/virtual pid 15466 exit status 1

Apr 25 17:20:10 carlos3 postfix/master[15435]: warning: /usr/lib/postfix/virtual: bad command startup -- throttling</pre>

It was a permissions error on the virtual mail folder. The virtual transport can create folders for users and their maildirs, but not when the parent directory doesn't give the vmail user write capability. It actually might need write capability for apache. Not sure....

