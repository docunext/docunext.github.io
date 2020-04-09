---
title: MySQL Replication Issues
comments:
  - author: admin
    email: albert.lash@savonix.com
    date: 05/16/2007 10:08:11 AM
    text: >
      I'm running into the same problem again:<br/><br/>ERROR 1201 (HY000): Could not initialize master info structure; more error messages can be found in the MySQL error log<br/><br/>I don't see why this happens!<br/><br/>Could it be:<br/><br/># expire-logs-days      = 20    FIXME: Currently this setting causes mysqld to<br/>#                                      crash (debian#368547 mysql#17733)<br/>expire-logs-days        = 0<br/><br/>I changed expire-log-days to be 2. Let's see what happens...
  - author: admin
    email: albert.lash@savonix.com
    date: 05/16/2007 10:18:25 AM
    text: >
      <pre>May 16 10:15:31 elvira mysqld[16430]: 070516 10:15:31 [ERROR] Failed to open the relay log '/var/run/mysqld/mysqld-relay-bin.000616' (relay_log_pos 235)<br/>May 16 10:15:31 elvira mysqld[16430]: 070516 10:15:31 [ERROR] Could not find target log during relay log initialization</pre><br/><br/>This helped out, found this page:<br/><br/><a href="http://forums.mysql.com/read.php?26,77408,84915#msg-84915" rel="nofollow">http://forums.mysql.com/read.php?26,77408,84915#msg-84915</a><br/><br/>which says:<br/><blockquote>You lose data if you skip. There are two solutions:<br/><br/>1. CHANGE MASTER TO the positon _on the master_ where the slave was, the slave will get the transactions from the master binary logs again and you will lose nothing. Requires that the master still has those binary logs.<br/><br/>2. Recopy everything to the slave as a new slave setup.<br/><br/>James Day<br/>Support Engineer, MySQL AB</blockquote>
date: 2007-04-18
---
<pre>ERROR 1201 (HY000): Could not initialize master info structure; more error messages can be found in the MySQL error log</pre>

error log

<pre>Could not find target log during relay log initialization</pre>

I think this happened because I changed IP numbers on the replicating server. I issued the command "RESET SLAVE" (though I don't recommend you doing this) and was then able to start the slave again.

Now it seems the replicated server is going through the motions to synchronize with the master.

That wasn't working right so I ended up redoing the entire thing manually following the howtoforge docs. Works now. :-)

¥

