---
title: Migrating to Google Apps for Business
date: 2010-09-20
tags: gmail,google,imap,microsoft,migration,offlineimap
---
I'm helping one of my customers migrate their email to Google's "Apps for Business" service offering and decided to share my thoughts on the topic with the world at large.

## **IMAP Folders versus GMail Labels**

While I use GMail for my personal email, I'm not crazy about Google's email service. Why? Because I'm a huge fan of IMAP, and although Google's email service supports IMAP, it isn't quite the same. More specifically, Google uses GMail "labels", whereas IMAP uses folders. This could potentially cause problems when migrating *from* Google's email service to a standard IMAP service. Since a single message can be applied with multiple labels, it could result in duplicate emails on the target IMAP server.

Perhaps this is Google's way of coercing their clients to stay? I hope not. That type of business strategy is why I'm not fond of Microsoft, and while I've questioned some of Google's actions, I still like them.

## **Google's IMAP Migration Tool**

Anyway, back to the task of migrating emails from a Courier IMAP server to Google's email service. I'd contemplated using some of the usual suspects:

* OfflineIMAP
* Isync
* Imapsync

Then I found the Google IMAP Migration tool! I tested it, it worked, and then I tested it again with the same account to make sure that no duplicates were migrated, and that worked, so I was sold. I even sent a new message to the test account, migrated again, and only the new message was sent. Perfect!

