---
title: Postfix Notes
date: 2006-04-28
tags: maildrop,postfix
---
<h3 id="toc0">Postfix Vacation Autoresponder Howto</h3>
<h4 id="toc1">Setting up courier-vacation:</h4>
<p>1. Needs maildrop - emerge maildrop

1b.Need to edit master.cf - change /usr/local/bin/maildrop to /usr/bin/maildrop

1c.Add this to /etc/postfix/main.cf:
</p><pre>
transport_maps = mysql:/etc/postfix/mysql-transport.cf

virtual_transport = $transport_maps

maildrop_destination_recipient_limit = 1</pre>

2. change transport in database to be maildrop: instead of virtual:

3. Edit /etc/maildrop/maildropmysql.cf

4. Install courier-maildrop plugin

5. Config courier-maildrop plugin

6. Edit /etc/maildroprc

7. Add .mailfilter to home directory:<p></p>
<p></p><pre>
if (/^X-Spam-Flag: *YES/){
    # log this spam mail
    log "SPAM date: $DATE, recipient: $RECIPIENT, sender: $SENDER -&gt; /dev/null"    to "/dev/null"
    # nothing more to do
    exit
}
`test -f vacation.msg &amp;&amp; exit 1 || exit 0`
if ($RETURNCODE==1){
       {
       if (!/^List-Unsubscribe:.*/:h )
       {
               if (!/^X-Spam-Flag: YES/:h )
               {
                      #RESPOND="$MAILDIR/$USER.autorespond.msg"
                      RESPOND="vacation.msg"
                      RESPONDDB="$MAILDIR/$USER.autorespond.db"
                      # The following must be one contiguous line
                      cc "| mailbot -t $RESPOND -A 'From: $LOGNAME' -s 'Auto Response: from $LOGNAME' /usr/sbin/sendmail -t -f ''"
               }
       }
       }
}</pre>
<h4 id="toc2">Spamassassin:</h4><p>Add to /etc/postfix/master.cf:
 -o content_filter=spamassassin</p><h4 id="toc3">Postfix related links: </h4><p><a href="http://gentoo-wiki.com/Maildrop_configuration#Autoreply" rel="nofollow">http://gentoo-wiki.com/Maildrop_configuration#Autoreply</a></p>

