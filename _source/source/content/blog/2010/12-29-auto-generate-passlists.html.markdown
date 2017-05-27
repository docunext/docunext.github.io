---
title: Auto Generate Passlists
date: 2010-12-29
tags: spamassassin
---
In the past, I have used this shell script to generate a passlist of trusted emails gathered from a user's "sent" Maildir.

<pre class="sh_sh">
#!/bin/sh
SADIR=/home/example.com/home/user/.spamassassin
SENTMAIL="/home/example.com/home/user/.maildir/.Sent Messages/cur/"
touch $SADIR/sent_whitelist
rm -f $SADIR/sent_whitelist
#ls "$SENTMAIL"
for x in `grep -r "^To:" "$SENTMAIL" |
        grep -o "[[:alnum:]\.\+\-\_]*@[[:alnum:]\.\-]*" |
        tr "A-Z" "a-z" |
        sort -u` ;
        do echo "whitelist_from $x" >> $SADIR/sent_whitelist
done
cat $SADIR/user_prefs.base $SADIR/sent_whitelist > $SADIR/user_prefs
</pre>

Why did I do this? To save cycles by avoiding the overhead of spamassassin for trusted senders.

Not a bad idea, eh?

