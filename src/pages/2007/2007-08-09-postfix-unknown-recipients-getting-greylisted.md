---
title: Postfix Unknown Recipients Getting Greylisted
date: 2007-08-09
tags: spam
---
My postfix logs were reporting that mail sent to non-existent was getting greylisted. I would expect this mail to get rejected right away, so I dug up the reason why it wasn't. Turns out I only had the virtual domains getting checked, not the mailboxes. So I added this line back in (I had commented it out for simplicity!):

<pre>virtual_mailbox_maps = mysql:/etc/postfix/mysql-virtual-homedirs.cf</pre>

As explained in the docs, virtual_mailbox_maps is an optional setting:

<a href="http://www.postfix.org/postconf.5.html#virtual_mailbox_maps">http://www.postfix.org/postconf.5.html#virtual_mailbox_maps</a>

<pre>Recipient address rejected: User unknown in virtual mailbox table;</pre>

