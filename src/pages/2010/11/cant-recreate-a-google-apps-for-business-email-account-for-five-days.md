---
title: Can t Recreate a Google Apps for Business Email Account For Five Days 
date: 2010-11-11
tags: gmail,google,imap
---
I am working on migrating a client's email services to Google's Apps for Business Service.

We planned to change the MX record tonight, but then we discovered that previous synchronizations with Google's IMAP sync tool had not been real "synchronizations", merely copies, making one of the target IMAP accounts a total mess.

To fix, I deleted the messed up target account to recreate it as an empty one, only to discover that doing so was not allowed and would not be possible *until five days later*.

**ARGHHH!!**

I think I'll try a *real* IMAP sync tool like imapsync.

