---
title: Trying our the Courier Email Project Webadmin on Debian GNU Linux
date: 2008-04-20
tags: courier,"systems administration",webmail
---
Wrestled with courier webadmin for a bit tonight. The apache2 server I was trying to install it on had a VirtualScriptAlias setup for trac fastcgi, and I couldn't get courier webadmin to work without removing it.


Courierwebadmin is different than most web apps I've used before. There is a binary elf interface to to perl scripts and html templates on the back end.

Once I got it to work, I realized I didn't really need it. It might be helpful for setting up esmtp stuff, but I use postfix for that. Speaking of which I just started a new project <a href="http://www.chimailmadmin.com/blog/">Chimailmadmin</a>. Its inspired by the original postfixadmin and uses <a href="http://www.nexista.org/">Nexista</a> as the framework.

