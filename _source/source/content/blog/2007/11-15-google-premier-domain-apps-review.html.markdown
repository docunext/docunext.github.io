---
title: Google Premier Domain Apps Review
date: 2007-11-15
tags: none
author: Albert Lash
---
Email Premier Apps by Google

Clear pricing...

What does change smtp envelope mean? Kind of strange... Local server would be nice on the bandwidth...

Email routing is the best, but why not have IMAP servers be able to synchronize with each other?

Nice to have the whitelist capabilities, And nice to have catchall, though I won't use it via google.

Then postini looks really interesting. Not going to tackle it today though.

I like the idea of using a cname for my domain to power webmail. BUT it doesn't appear to be able to support ssl, actually I'm sure it wouldn't since all domains are CNAME's of ghs.google.com. You could just setup a webmail IMAP client access to gmail though. The IMAP connection could be secure, and it would be easy to setup the http session to be secure as well.

I think that using the routing feature would require making Gmail managed email accounts on write only. How would a non-gmail managed account send? Through a separately managed smtp server. So you'd have to include both for an SPF record. I don't see getting rid of my own email servers anytime soon. Also, the IMAP client, though cool, is a little funky. You need to use the "[Gmail]" folder prefix, which is a little annoying. I would have preferred if they just used Inbox like most IMAP servers.

This is a great document:
<a rel="nofollow" href="http://www.google.com/support/a/bin/answer.py?answer=60730">http://www.google.com/support/a/bin/answer.py?answer=60730</a>

Still, it appears that the same problem with dual-homed smtp and imap servers is apparent - sent email only appears on one of the servers. This is an annoyance I've run into before, and its important to remember that its usually controlled by the client - ie Thunderbird or the like. An alternative is to automatically copy or forward outgoing mail to CC or BCC it to ones self, and create a filter to place it into the correct "Sent" folder.

Something roughly like this for maildrop mailfilter formats:

<pre><code>
if($sender = me) {
    to ".maildir/.Sent Messages"
}
</code></pre>

<a href="http://www.courier-mta.org/maildropfilter.html#to" rel="nofollow">http://www.courier-mta.org/maildropfilter.html#to</a>

I decided to cancel my Google Premier Domain Apps account, and downgrade to the free version. I'm pretty close to having a very good IMAP setup on my own servers, so I'm going to keep working on that. If in the future I have excess cash, I might reconsider the premier version, but for now, the roughly $4 / month / email address is too steep for me. Hmmm, this is the response I received when trying to cancel:


