---
title: Mutt Email Reader
date: 2009-07-08
tags: offlineimap
---
I've only used the Mutt email reader a little bit in the past, but I'm having a bit of a console renaissance - and Mutt is one of the applications I'm using from the command line.

Its surprisingly flexible! I'd previously thought that Mutt could only access a local Maildir, but now I'm using it to access a remote IMAP server. I'm actually quite amazed with how many protocols and even authentication methods Mutt supports.

When I first set it up, I had some problems with outgoing emails. Mutt was using my local hostname. I then figured out how to arrange a few headers:

<pre>
set realname="Joe User"
set from="user@host"
set use_from=yes
</pre>

I may end up reverting back to using a local maildir, and OfflineIMAP to synchronize the folders.
