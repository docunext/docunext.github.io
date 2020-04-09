---
title: Another ejabberd attempt
comments:
  - author: admin
    date: 07/17/2007 05:51:46 PM
    text: >
      Trying again.... I think these are the problems:<br/><pre> 2493 ?        00:00:00 ssl_esock<br/> 2495 ?        00:00:00 inet_gethost</pre>
  - author: admin
    date: 07/17/2007 06:36:40 PM
    text: >
      I changed my apt sources to use unstable instead of etch and the issue went away. :-)
date: 2007-04-06
tags: jabber,"open source",xmpp
---
Why is ejabberd so difficult? I have not idea, but it is. The problem is caused by networking - it wants to check DNS for hostname information for some reason. Finally got it working by purging the conf files and then installing again, skipping the admin user, and making sure the domain name was correct.

¥

