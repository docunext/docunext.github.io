---
title: etc hosts is my friend
comments:
  - author: a9db0
    email: a9db0@myway.com
    date: 03/28/2008 10:09:59 AM
    text: >
      Next time you decide to try dns on your local subnet, try dnsmasq.  Works very well, is well supported and documented, and is in the Debian repository.  I use it on several networks - far easier to cope with than bind.
  - author: Albert
    date: 03/28/2008 10:24:04 AM
    text: >
      Hi a9db0 - yeah I love dnsmasq! I use it for caching dnsbl requests for several mail servers. Good stuff.
date: 2008-03-27
tags: dns,postfix,vpn
---
I'm happily using /etc/hosts as my internal / vpn host resolver, as opposed to running a separate dns service for my private ip space. Why? I can't explain exactly at this point, other than to say its working for me.

Running a separate dns server was a lot more of a hassle than I thought it would be, and since I wrote a simple script to keep /etc/hosts up-to-date, its not bad at all. I tried using ldap for it but it wasn't fast enough - I continue to store the hostnames in ldap though.

I found this page especially helpful when it comes to <a href="http://lists.debian.org/debian-user/2003/05/msg00579.html" rel="nofollow">setting up /etc/hostname in debian for use with postfix</a>.

¥

