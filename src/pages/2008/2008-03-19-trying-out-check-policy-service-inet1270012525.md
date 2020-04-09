---
title: Trying out check policy service inet 127.0.0.1 2525
comments:
  - author: a9db0
    email: a9db0@myway.com
    date: 03/19/2008 11:05:13 AM
    text: >
      I use both.<br/><br/>Postgrey works reasonably well on low to medium volume sites.  On higher volume sites gld seems to work better, as it uses mySql as the backend.  Gives it better stability and performance.<br/><br/>I've also had some stability issues with postgrey, which seem to be volume related.  Monit is a great utility for watching it and restarting it when dies.
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/19/2008 05:40:15 PM
    text: >
      Hey! Yeah I agree about monit -great program. I just started using it again and am happy I did.<br/><br/>I've had no issues with postgrey, but I'd like to be able to share my auto-passlist data amongst several servers.
date: 2008-03-19
tags: cdb,mysql,postfix,proxies,smtp
---
I'm trying out postfix-gld, a greylisting daemon which uses mysql and is available in the debian repositories. It looks pretty good. I'm willing to try something new (I use postgrey in production) as I'm setting up a backup MX.

While I'm at it, I'm also examining postfix-cdb.

UPDATE: I finally got postfix-gld to work, the hang-up was my own dumb typo, but its working now. It looks good too, I think it will make managing greylisting a lot easier, especially when it comes to multiple SMTP hosts. It would be nice if there was the option to set a different host for reads and writes, so that MySQL replicants could be used, but maybe that will be an excuse for me to explore MySQL proxy some more.

¥

