---
title: Migrating to Dovecot
date: 2009-07-06
tags: courier,cram-md5,dovecot,imap,outlook,sasl,sqlite
---
I'm planning to migrate away from **Courier** to **Dovecot** - not set in stone, but I'm 99% there.

Why? The following reasons:

* Sieve support
* Really flexible authentication support - I'll probably use SQLite because Cyrus Sasl also supports it, so Postfix can directly authenticate through it
* Actually, Dovecot can act as a sasl authentication server itself, so Postfix doesn't even need Cyrus Sasl - wow!
* Occasionally customers' Outlook versions will have issues with Courier, though Outlook IMAP support has been laughably bad in my experience
* I figured out how to get CRAM-MD5 AUTH working with Dovecot!

This will take awhile, as I'm planning to revisit my entire email services setup.

