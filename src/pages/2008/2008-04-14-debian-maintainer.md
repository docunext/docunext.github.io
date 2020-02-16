---
title: Debian Maintainer
date: 2008-04-14
tags: none
author: Albert Lash
---
Some of the debian ideas are starting to "click". I'm signing up at mentors.debian.org, and I've just created my gpg key using instructions from here:

<a href="http://www.gnupg.org/gph/en/manual.html#INTRO">How to create a gpg signature</a>

Doh!

<pre code="bash">

Apr 15 00:01:22 franklin postgrey[23422]: action=greylist, reason=new, client_name=bender.workaround.org, client_address=209.40.206.148, sender=support...izat...mentors.debian.net, recipient=albert.lash...izat...docunext.com

Apr 15 00:01:22 franklin postfix/smtpd[4961]: NOQUEUE: reject: RCPT from bender.workaround.org[209.40.206.148]: 450 4.2.0 <albert.lash...izat...docunext.com>: Recipient address rejected: Greylisted, see http://postgrey.schweikert.ch/help/docunext.com.html; from=<support...izat...mentors.debian.net> to=<albert.lash...izat...docunext.com> proto=ESMTP helo=<bender.workaround.org></pre>

Nice... it came through a few moments later. So now I can upload packages. :-) I think the most refined package I have at the moment is nexista, so I'll get that to the most recent state and upload that one.
