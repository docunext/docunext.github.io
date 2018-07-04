---
title: Viewpoint Gem for Accessing Exchange
date: 2011-08-07
tags: exchange
---
* <https://rubygems.org/gems/viewpoint>

At work we've upgraded from Microsoft Exchange 2003 to Exchange 2008 and as such we have to stop using the POP3 gem and instead use the Viewpoint gem.

So far, for checking and downloading emails and attachments, its working fine.

One of my co-workers has the bright idea to convert the Exchange format emails to regular mail, so that we could continue to use the standard TMail gem for parsing and data processing.

I would have preferred to use [DavMail to continue to use POP3 or an IMAP client](http://www.docunext.com/blog/2011/04/davmail-for-exchange.html), but Viewpoint seems fine for now.

