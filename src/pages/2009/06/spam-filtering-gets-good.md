---
title: Spam Filtering Gets Good
date: 2009-06-23
tags: maildrop,postfix,spam,spamassassin,spamhaus
---
I'm very pleased with my current spam filtering setup. Its taken a long time to get working but it was totally worth it.

Thank goodness for quality software like Postfix, gray listing daemon, spamassassin, and for the resources provided by upstanding netizens like spamhaus and dnswl.

The first line of defense is Postfix and the dns block lists and the gray listing daemon. After those two hurdles, a few stray spams get through, and that's where spamassassin comes into play. There are some really great features available with Postfix spam controls - such as the address classes. For example, one of my clients regularly gets email from Asia, while I hardly ever do. With recipient address classes, I'm able to filter incoming mail differently, depending on its final destination. How cool is that?!?!? I previously disabled the <a href="http://www.okean.com/antispam/sinokorea.html">Okean</a> lists to make sure my client's mail isn't interrupted, but I may resume use for my own emails - possibly for rejecting, but maybe just for appending a header to possibly make spamassassin's life a little easier.

Spamassassin has been tough for me to figure out, I think because its so flexible. I don't expect it to be perfect, but it is able to catch obvious spams via content which I don't want to bother postfix with. Besides, spamassassin can work with maildrop to quarantine the spam, not reject it.

To avoid false positives - the situation where a non-spam email gets flagged as spam, I use the dns pass list I mentioned earlier, and I also create my own pass lists for regular email addresses and clients. This was a good thing for me to do - its keeps email delivery fast and efficient for ham messages, and it also avoids the overhead of scanning legitimate emails with spamassassin.
