---
title: Spamassassin User Settings
date: 2009-08-28
tags: imap,sieve,spam,spamassassin
---
I wish that there were some IMAP command or sieve based method of managing custom user spamassassin files.

In lieu of that, I'm reviewing the idea of using SQL to store and retrieve user spamassassin settings. Another benefit to using SQL is that per-domain settings are supported. Is there an interface for this? I'm sure there is, I'll probably create my own at some point, but to start, what is available?

There are a bunch of <a href="http://squirrelmail.org/plugins_category.php?category_id=3" rel="nofollow">spam plugins for squirrelmail</a>, but I'm not sure if that's the direction I want to take.

Sourceforge hosts a couple of projects related to this:

* <a rel="nofollow" href="http://sourceforge.net/projects/webuserprefs/">http://sourceforge.net/projects/webuserprefs/</a>
* <a rel="nofollow" href="http://sourceforge.net/projects/php-sa-mysql/">http://sourceforge.net/projects/php-sa-mysql/</a>

