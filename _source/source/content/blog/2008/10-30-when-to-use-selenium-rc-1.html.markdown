---
title: When to use Selenium RC 
date: 2008-10-30
---
We use all three of the Selenium testing applications to ensure quality releases of PBooks. These are:

<ul><li>Selenium IDE</li><li>Selenium Core</li><li>Selenium RC</li></ul>

Selenium IDE is great for learning, but is limited to Firefox, so we use Selenium Core to test out other browsers. With Selenium Core, you also need to get into the test code (we use HTML) because Selenium Core is a little more complicated that Selenium IDE for a variety of reasons.

With the ability to use Selenium Core to test a variety of browsers, why bother with Selenium RC?

The way I see it, Selenium RC is appropriate for testing with dynamic information. It might also be possible to dynamically create test scripts using XSL, I hadn't thought of that, but it might actually work very well.

