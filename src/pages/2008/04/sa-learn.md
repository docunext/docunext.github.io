---
title: Using sa learn to Teach Spamassassin about the Difference Between Spam and Ham
date: 2008-04-30
tags: none
author: Albert Lash
---
Note to self, if you are looking to empty your spam mailbox, use this command to train spamassassin first:

<pre lang="bash">
sa-learn --spam -C /etc/mail/spamassassin --showdots --dir ~/.maildir/.Spam/cur/</pre>

and the new command I'm using:

<pre lang="bash">
sa-learn --spam -C /etc/mail/spamassassin --showdots --dir ./.maildir/.NuSpam/cur/</pre>

and for ham from time to time:

and the new command I'm using:

<pre lang="bash">
sa-learn --ham -C /etc/mail/spamassassin --showdots --dir ./.maildir/cur/</pre>

And maybe some help for the honeypot: <a href="mailto:spam.dropbox@savonix.com">spam.dropbox@savonix.com</a>

<a href="http://www.docunext.com/2006/12/defending-against-unsolicited-commercial-email-uce-also-known-as-spam-page-3-spamassassin/">Defending against Unsolicited Commercial Email (UCE), also known as Spam - Page 3 - Spamassassin</a>

And another command:

<pre>
sa-learn --spam -C /etc/mail/spamassassin --showdots --dir /home/savonix.com/home/spamdropboxsavonixcom/.maildir/.NuSpam/cur/</pre>

