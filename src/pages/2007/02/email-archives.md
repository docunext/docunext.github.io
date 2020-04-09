---
title: Email Archives
date: 2007-02-01
---
To archive my old emails, I keep them in courier-imap Maildir folders for easy access. I separate them by year, and then change them to be readonly. The tmp/ file in the directory has to stay writeable though.

Hmm, my server won't respect those rules. But oh well, I'm on to other things:

<a href="http://blogs.maven.org/brett/2006/08/22/1156211940000.html">Setup Postfix and Dovcot on Mac OS X</a>

<a href="http://www.hawkwings.net/2006/06/19/john-gruber-mark-pilgrim-mailapp-and-openness/">Discussion of Mac Mail.app's use of emlx format instead of mbox</a>

<a href="http://mailman.mit.edu/pipermail/macpartners/2005-June/000932.html">Talk of Evolution email client for Mac OS X</a>

<a href="http://randomfoo.net/blog/id/4099">Good review of Mail.app versus Thunderbird on Mac OS X</a>

<a href="http://www.macosxhints.com/article.php?story=20040407062603804">IMAP Subscriptions hack with Mac OS X Mail.app</a>

<a href="http://forums.macosxhints.com/showthread.php?p=350081">Similar - a hack to enable IMAP Subs in Mac OS X Mail.app</a>

What I've gathered so far is that the choice by Apple to use a proprietary format instead of maildir wasn't the best idea. I understand they didn't want to go with mbox because of Spotlight, and because mbox just puts all the emails into one huge file. Not good for me with so many emails.

I like the idea of keeping my emails in maildir format for archival purposes. Simple, straightforward, and manageable. However, with the lack of IMAP subs in Mail.app, it makes my connection a bit much. On top of that, I syncronize my home directory between my notebooks, desktops, and server environments so it makes sense to leverage the existing maildir storage hierarchy instead of having another storage mechanism I have to work around.

I'm keeping my fingers crossed that Evolution on Mac OS X will actually be a decent email client solution, AND be able to read local maildir folders. Argh, I think Ximian Evolution requires Gnome so I'm going to skip the 650MB+ installation.

<a href="http://fivepoundsflax.blogspot.com/2006/09/imap-idle-103-for-apples-mailapp.html">IDLE Plugin for Mail.app</a>

<a href="http://www.npcole.com/usingimaptiger.html">Local IMAP Server to serve maildir archives to Mail.app</a> <- This is probably what I'm going to go with.

<a href="http://software.complete.org/offlineimap/wiki/FrequentlyAskedQuestions">OfflineIMAP</a> This looks very cool too. Unfortunately its not a IMAP server, so you'd have to install courier-imap or dovecot.

<a href="http://www.dovecot.org/list/dovecot/2004-November/005286.html">Great discussion on using Dovecot to act as an offline liason to maildir folder storage</a>

<a href="http://use.perl.org/~rjbs/journal/29776">Postfix on Mac OS X, mentions offlineimap</a>

<a href="http://the.taoofmac.com/space/Perl/Snippets/IMAP%20Proxy">Is this the only IMAP Proxy for Mac OS X?</a>

Unrelated: this looks cool! http://www.socialsourcecommons.org/tag/mail

As lame as it is, setting up a local IMAP server might be the best option. But how to get new emails? Hmm, maybe I could do something tricky, yet reliable with the network settings or something.

The IMAP Proxies I've looked at don't seem to cache emails into a maildir at the local level, so it would have to be done with a full fledged imap server. Hmmm.

This sounds good:

<a href="http://www.stepwise.com/Articles/Workbench/eart.2.1.html">Section I: What Is UW imapd and Why Use It? as it relates to Mac OS X</a>
