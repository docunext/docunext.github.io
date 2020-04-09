---
title: too many errors after RSET
date: 2010-06-14
tags: norton,postfix,smtp
---
I was again bit by this error which appears to be caused by Norton security software.

#### **Background**

I ran into this error once before when a client reported to me that [his computer was popping up warning from some Norton security software whenever he tried to send an email](http://www.docunext.com/2009/08/symantec-norton-email-smtp-problems.html). I tried to figure out what was going on, but in the end had to switch to port 587.

#### **New Report**

The latest report was also able to be fixed by switching to port 587, but the client didn't inform me that Norton was issuing warnings at first. I did some digging and finally found the "**too many errors after RSET**" error (from Postfix), but was unable to diagnose it until he mentioned Norton.

While I was at it, I raised the error limit which causes a disconnect when the client sends too many junk commands:

<pre class="sh_sh">
smtpd_junk_command_limit = 1000
</pre>

