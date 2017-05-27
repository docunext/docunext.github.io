---
title: Verizon 550 You are not allowed to send mail
date: 2007-01-01
tags: spam
---
One of my clients recently reported difficulty sending mail to Verizon.net email addresses. They were right - email was getting bounced by Verizon. I was surprised - we do about everything necessary to make sure our email is seen for what it is - legitimate, non-bulk, non-unsolicited, privately-accessed email.

We use postfix, the amazing open source MTA, and incorporate many of its spam blocking features, including the UCE-protect blacklist. That was the first issue. Verizon was sending an address verification request, and UCE had their IP blacklisted. No suprise there as Verizon's network is used to send incredible amounts of spam, even including commonly fraudulent phishing attempts.

I added the sender of the address verification to the access whitelist, effectively removing the UCE block for west.verizon.net. The sender email is something like: antispam671461@west.verizon.net, where the # changes every time.

Next I thought the dsbl_verify_command in postfix was the problem, but that didn't work. I was still getting the following error:

relay=relay.verizon.net[206.46.232.11]:25, delay=1.3, delays=0.35/0.02/0.15/0.75, dsn=5.0.0, status=bounced (host relay.verizon.net[206.46.232.11] said: 550 You are not allowed to send mail:sv17pub.verizon.net (in reply to MAIL FROM command))

Some of the research I did suggested a whitelist request, but Verizon wrote back saying my ip was not blacklisted. What is the problem?

Hmmm, interesting. Its now working. The only thing I seemed to do was to email from my Verizon.net account to the external account that I was trying to reach. Perhaps that did the trick? I will confirm later.

I want to thank <a href="http://www.wso.net/smtp-issues.htm" rel="nofollow">Web Space Outlet Hosting for sharing their SMTP Issues</a>, and helping me figure out the problems.

