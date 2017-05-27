---
title: nm applet usr bin nm applet wants access to keyring
comments:
  - author: ibrahim
    email: iaz966@hotmail.com
    ip: 192.168.8.12
    url:
    date: 01/13/2009 01:58:37 PM
    text: >
      I've faced the same problem once!<br/><br/>I remember that I solve it by removing (delete) ~./.gnome2/keyrings/login.keyring<br/><br/>and then log out and in again !<br/><br/>that's it the file will be created again !!!<br/><br/>hope this will work for others too.
  - author: CeeJay
    email: beeskneesc@yahoo.com
    ip: 192.168.8.12
    url:
    date: 01/16/2009 07:29:59 PM
    text: >
      I have been having a problem with a new Acer Aspire1 running linpus linux lite. The notebook first worked well at my son-in-law's house but when I tried to connect to my wireless, the icon for the network would not work.  Using advice from a forum I tried the command 'sudo /usr/bin/nm-applet'  in the terminal  After running this it gave me a bunch of stuff including something about not finding the keyring somewhere.  It also set something to -1 or 0  Then when I shut down and rebooted, it asked me to set up my network connection and the icon works again.  When I power off and reboot, it is the same thing all over again. If I put it on sleep, the network just asks me to give it the wpa password again.  Hmmm wonder if your fix will work for me.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 192.168.134.22
    url:
    date: 01/17/2009 12:14:47 AM
    text: >
      Hi Ceejay, I'm not familiar with linpus lite. Have you ever tried debian? I think that there are some instructions on how to install it on the Acer Aspire1 if you are feeling adventurous!<br/><br/><a href="http://wiki.debian.org/DebianAcerOne" rel="nofollow">http://wiki.debian.org/DebianAcerOne</a>
  - author: alex
    email: eneth80@yahoo.com
    ip: 82.170.33.37
    url:
    date: 07/13/2009 02:10:44 AM
    text: >
      Could you refresh the link?
date: 2008-08-26
---
This was driving me crazy!! Every time I'd try and use nm-applet to configure my wireless internet with WPA, it would connect, but then be unable to save or retrieve the password afterwards. Grr! That essentially caused it not to work at all.

Thankfully, I was able to fix it. Thanks to the Ubuntu forums (Ubuntu is based off of debian), I found a solution which worked for me. I moved the keyring folder inside of ~/.gnome2/, and then tried again. It asked me for a new password, and so far so good!

Thanks: <del>http://ubuntuforums.org/showthread.php?t=130192</del>

Page no longer available.

¥

