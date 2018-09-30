---
title: Test Suites
date: 2007-08-15
---
I've been using testing suites with the selenium core, and I discovered that you must put a login command at the beginning and a log out command at the end of a test in order for selenium to be able to run through the next test in the suite.

This is different from the Selenium IDE, which uses your current browser session, so if you are logged in, so is the test.

