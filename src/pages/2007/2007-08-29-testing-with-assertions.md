---
title: Testing with Assertions
date: 2007-08-29
---
Testing with assertions is valuable because it allows you to make a test more specific and better tailored to your specific needs.  An assertion tells selenium what element to look for when it runs a test.  For example, you can tell it to look for a certain table size or font size when it opens up a certain window.  These assertions are more specific and must be written by the user.

Another way of using assertions is by inputing something on one page, then testing for it on another.  For example you could submit an entry on one page and then have selenium verify that it is showing up on a separate page.  If the entry pops up but doesn't contain all of the information that it should, then you could have Selenium display an error.
