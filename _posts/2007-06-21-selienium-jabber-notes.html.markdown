---
title: Selienium Jabber Notes
date: 2007-06-21
tags: jabber,selenium,testing
---
We are working on trying out as many Selenium functions as possible that we can find in the Selenium reference document.

Here's a quick IM conversation we had on ejabberd:

<pre>have you used timeout and refresh?
11:48
ive used refesh, but not timeout
11:49
use timeout, and try some different values.
49:40
it will test to see if the page will load in a certain amount of time, I think
49:55
kind of like pause, but with a limit
11:50
ok, I see
50:17
Im having trouble locating it in the reference
11:50
sorry its setTimeout
50:55
setTimeout ( timeout )   Specifies the amount of time that Selenium will wait for actions to complete.   Actions that require waiting include "open" and the "waitFor*" actions.   The default timeout is 30 seconds.   Arguments:
* timeout - a timeout in milliseconds, after which the action will return with an error
51:11
fyi - there are 1000 milliseconds in a second</pre>

