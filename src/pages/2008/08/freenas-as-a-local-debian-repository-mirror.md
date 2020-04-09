---
title: FreeNAS as a local Debian Repository Mirror
comments:
  - author: Gary Sims
    email: gary.sims@gmail.com
    url: http://www.learnfreenas.com
    date: 08/16/2008 01:24:56 AM
    text: >
      Great post. This is a good example of a practical use of FreeNAS. Which version did you use? Rsync in FreeNAS is very stable and the ability to schedule syncs is great.<br/><br/>Regards,<br/><br/>Gary<br/>--<br/><a href="http://www.learnfreenas.com" rel="nofollow">http://www.learnfreenas.com</a>
  - author: Albert
    date: 08/30/2008 07:41:05 PM
    text: >
      Hi Gary, thanks for commenting. I wasn't able to get the cron job on FreeNAS to work for some reason. Its strange, because I was able to confirm the cron job was getting triggered, but the anonftpsync was failing.<br/><br/>As an alternative, I decided to use another machine to manage the cron job, so I now have two debian mirrors, but that's fine with me!
date: 2008-08-15
---
I've finally finished setting up a FreeNAS box as a local Debian repository mirror. I've done this with a new feature of FreeNAS - the web server! The document root holds debian/ and I've set a cron job to rsync with a local repository every night at 3AM.

I also updated my local DNS resolver to use that FreeNAS box IP address as the host IP for ftp.debian.org and ftp.us.debian.org. So far I have not experienced any major problems. :-)

¥

