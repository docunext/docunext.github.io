---
title: MySQL Replication Error Alert
date: 2007-09-01
tags: errors,mysql
---
One thing I really like about MySQL replication is that when it encounters an error, it "pauses" until someone comes and fixes it. After the error is fixed, you can start the replicated server again and it will execute the updated that had been on hold since the error paused the server.

What I'm looking for now is the ability to have the replicated server email a notice to me when it encounters an error. Seems like a useful function, right? If its not built-in, I can probably setup a cron job easily enough to check the server for an error.

This looks promising:

<a href="http://forge.mysql.com/snippets/view.php?id=6" rel="nofollow">Check Replication Slave Status</a>

The script is written by Matthew Montgomery, and described as:

<blockquote>This script produces no output when replication slave is running normally. If either IO or SQL threads are not running it will print a message indicating so and the "Last Error:"

I typically set it up on a 2minute cron. It has some logic in place to avoid repeat e-mailing from CRON when down status is found. It will wait 15 minutes before producing the next message. You can also disable the scripts checking by changing the "active" variable to "no". This allows users without direct access to cron to controll the script. This script assumes that a ~/.my.cnf will be in place for authentication.</blockquote>

I just set this up and while it works, it isn't behaving clearly. I am trying to test it, and I get hung up on the fact that I'm running it via cron (do I need to?) and that it has its own alert redundancy checker (it will only send a message per x amount of time).

I've received one error message, but it didn't contain what was wrong, just that something was wrong.

Oh well, I have more plans for it, but its a good start. I'm aiming to tie this in with our nagios server.

UPDATE November 11, 2007: The script mentioned in this article continues to work well, though it still won't include the error in the alert email. Doesn't matter that much though, as long as I know when replication isn't running.

