---
title: Extending the retry lifetime in response to more greylisting
date: 2006-12-04
tags: spam
---
Since more and more SMTP servers use greylisting, I'm increasing the lifetime of how long our servers keep trying to resend failed emails.

I'm using this setting:

<pre>maximal_queue_lifetime = 7d</pre>

I know 7 days is really long, but better safe than sorry.

<a href="http://www.postfix.org/QSHAPE_README.html">Here's a more thorough listing of all the queue lifetime settings from the Postfix documentation</a>.

