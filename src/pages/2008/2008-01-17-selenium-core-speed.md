---
title: Selenium Core Speed
comments:
  - author: Albert
    email: albert.lash@savonix.com
    date: 03/10/2008 07:03:32 PM
    text: >
      I ended up doing this manually in the selenium javascript, not the best way but it works.
  - author: christian
    email: asd@sd.de
    url: http://asd
    date: 10/27/2009 06:42:35 AM
    text: >
      We had the same problem, trying to get a reduced execution speed.<br/><br/>The proposed selenium core attribute *runInterval* does not work for some reason (???).<br/><br/>So we use the setSpeed(millies) function from the selenium api.<br/><br/>We use this function in a case that is used by every selenium suite at start up. So we have it available in all suites and all cases.
date: 2008-01-17
---
I wish I could set the Selenium speed in the test suite file.... and for individual tests for that matter.

¥

