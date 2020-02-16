---
title: Postfix Dovecot and Spamassassin
date: 2009-07-07
tags: dovecot,milters,spamassassin
---
One thing I really like about Courier is the fact that I can filter messages with Spamassassin from a maildroprc file, essentially as an after queue postfix filter. Upon retrospect, it is probably a good thing that sieve scripts cannot execute arbitrary system commands!

So how should Spamassassin get integrated into a Dovecot / Postfix world?

As I see it, there are two options:

<ul><li>As a content filter</li><li>Through a spampd relay proxy
</li></ul>Although another option might be to use a spamassassin milter. I'll have to read up on that.

While I'm at it, I need to read up on Amavis, ClamAV and DSpam.

UPDATE: Looks like a spamassassin milter or a spampd relay proxy might be the way to go. It would be nice to flag some messages as spam, and flat out reject (before queue) other messages that have a very high spam rating.

The problem with a before queue filter / proxy relay is that all incoming mail must be either accepted or rejected. To reject mail, it must be analyzed. If its not rejected, then it would be bounced if its not deliverable, causing potential backscatter spam.

So, a post-queue content filter is really the way to go. So how should it be configured? There are many ways, and a proxy relay can be configured as a post content filter too. Milters are before-queue, so how about a Postfix content_filter using spampd as a proxy relay or as a content_filter? Decisions, decisions...

Probably a proxy relay, as Postfix supports sender dependent relay hosts, which is interesting. Thankfully there are a number of smtp proxies out there which could potentially be used as a conduit to spamassassin. I actually prefer using spamc though... because it can connect to remote spamassassin hosts as a specific user. Also, by using a spamc content filter, the filtering could take place on the gateway. I'll have to check into how to specify different users, exclude certain messages by header content, and so on.

Also noting: if I remove courier and maildrop, I'll use Dovecot as the LMTP / virtual transport. Need to figure out how to do that.

Links:

<ul><li><a href="http://wiki.apache.org/spamassassin/IntegratePostfixViaSpampd">Spamassassin as a Before Queue Postfix Filter or Relay Proxy</a></li><li><a href="http://wiki.apache.org/spamassassin/IntegratedSpamdInPostfix">Spamassassin as an After Queue Postfix Filter</a></li><li><a href="http://www.postfix.org/FILTER_README.html">Postfix Filter READ</a>
</li></ul>
