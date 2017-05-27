---
title: Full Name From Message Header with Mailx
date: 2009-08-16
tags: sendmail
---
Too bad its not a little easier to get full "From" headers with mailx. Two possibilities:

* Postfix canonical header rewrites to include full name in message headers (<a href="http://www.irbs.net/internet/postfix/0405/0945.html">not currently available</a>)
* Mailrc would grab the information from the passwd getent

Its possible to manually add a customized from message header with mailx on the command line, but for some reason its not possible to set the message header in .mailrc.

I found a workaround <a href="http://unix.derkeiler.com/Newsgroups/comp.unix.solaris/2003-07/2331.html">here</a>, which creates a wrapper to /usr/lib/sendmail and sets the full name in the from header like this:

.mailrc:
<pre class="sh_sh">
set sendmail=~/bin/mymailx
</pre>

~/bin/mymailx:
<pre class="sh_sh">
#!/bin/sh
(echo "From: Full Name &lt;full.name@example.com&gt;"; cat ) | /usr/lib/sendmail $@
</pre>

