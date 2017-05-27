---
title: Comcast Blocking Port 25 Again
date: 2008-12-30
tags: none
author: Albert Lash
---
One of my customers in Hingham, Massachusetts reported that his email wasn't working yesterday. I was unable to call him until today, and we went through the usual troubleshooting steps, only to discover that his internet service provider, Comcast Cable, has started blocking port 25.

This was no surprise to me, and I'm surprised it was ever unblocked for him, as my experience with most residential cable internet service providers is that they block port 25. <a href="http://www.soggyblogger.com/blog/category/cable/comcast/">Business class Comcast cable internet service</a>, on the other hand, does not block port 25, in my experience. Apparently he hasn't had any problem until this week. I understand that ISPs want to reduce SPAM coming from their networks, but blocking port 25 seems to be such a futile attempt.

I instructed him to change his Outlook SMTP port setting to 587, and he was up and running again. All in a days work...

