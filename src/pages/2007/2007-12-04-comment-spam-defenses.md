---
title: Comment Spam Defenses
comments:
  - author: Zeth
    email: warrior@commandline.org.uk
    url: http://commandline.org.uk/
    date: 12/05/2007 09:09:44 PM
    text: >
      My comment spam went from hundreds per week to 0 when I switched from Wordpress, your mileage may vary but I try to avoid software monocultures.
  - author: Albert
    email: albert.lash@savonix.com
    date: 12/05/2007 10:30:15 PM
    text: >
      Hi Zeth,<br/><br/>That's a good point, and may be one of the (many?) reasons why Microsoft operating systems are such a popular targets for "spy ware" and viruses - its like shooting fish in a barrel.<br/><br/>I'm actually not too concerned with the Wordpress spam, the Spam Karma 2 plugin takes care of almost all of it. I'm more worried about trac and mediawiki. One, I'm not familiar with python (though I'm starting to learn), and two, mediawiki has too much freedom for spammers to hide their shenanigans.
date: 2007-12-04
tags: spam
---
I'm trying new ways to defend against comment spam, thanks to these sites for providing IP block lists, or links to IP block lists:

<a href="http://spamtrackers.eu/wiki/index.php?title=Forum_spam">http://spamtrackers.eu/wiki/index.php?title=Forum_spam</a>

<a href="http://www.heise.de/ix/nixspam/dnsbl_en/">http://www.heise.de/ix/nixspam/dnsbl_en/</a> (this one is more email spam)

<a href="http://www.gearhack.com/Forums/TrackBack.php?file=Computer/Network/Internet/Fight_Comment_Spam,_Ban_IP..s.html">http://www.gearhack.com/Articles/FightSpam/</a>

<a href="http://www.stopforumspam.com/">http://www.stopforumspam.com/</a>

<a href="http://sumbit.com/phpbb_spam.htm">http://sumbit.com/phpbb_spam.htm</a>

Like those pages say, or should say, block lists are not infallible. They probably won't block every bad IP, and they might block some good IPs. Therefore, I'm only using the block list to potentially block those that try to use the HTTP post method. Not only will it result in a lower load on the server, but also prevent legitimate access to my websites.

¥

