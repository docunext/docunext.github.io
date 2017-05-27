---
title: SMTP Bug
date: 2008-02-01
---
This is a tricky one:

1. Set RoundCube to log SMTP mail.
2. Do not provide write access to log folder.
3. Try and send mail.

My server was logging a 400 error. :-(

Once I gave write permissions to the logs folder for the web server, the messages sent successfully.

