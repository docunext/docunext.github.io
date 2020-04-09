---
title: Spamassassin lint no network tests 
date: 2006-12-13
tags: spam
---
I've been pulling my hair out trying to figure this one out: on Gentoo, this command shows networks tests:

<pre>spamassassin -D --lint</pre>

However, on Debian, it doesn't. I opened up /usr/bin/spamassassin, and found this:

<pre># bug 5048: --lint should not cause network accesses

if ($opt{'lint'}) { $opt{'local'} = 1; }</pre>

Not knowing what bug 5048 is, I still think the lint option should show the network lookups. I use it all the time as a configuration test debugger.

For awhile, I thought the issue had something to do with DNS, but I was wrong.

