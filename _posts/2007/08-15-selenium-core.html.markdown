---
title: Selenium Core
date: 2007-08-15
---
I keep getting this error in the middle of my tests.  I can't find anything wrong with the code, so I'm not sure what the problem is.

<pre><code>
[error] Unexpected Exception: message -> openedWindow has no properties, fileName ->
chrome://selenium-ide/content/selenium/scripts/selenium-browserbot.js, lineNumber -> 457, stack ->
("","selenium_blank54774")@chrome://selenium-ide/content/selenium/scripts/selenium-browserbot.js:457
("","selenium_blank54774")@chrome://selenium-ide/content/selenium/scripts/selenium-browserbot.js:384
([object
HTMLAnchorElement])@chrome://selenium-ide/content/selenium/scripts/selenium-browserbot.js:1305
("click",[object
HTMLAnchorElement],undefined,undefined)@chrome://selenium-ide/content/selenium/scripts/selenium-browserbot.js:1806
([object
HTMLAnchorElement])@chrome://selenium-ide/content/selenium/scripts/selenium-browserbot.js:1291
("link=PBooks Homepage ->","")@chrome://selenium-ide/content/selenium/scripts/selenium-api.js:210
apply([object Object],[object Array])@:0 ("link=PBooks Homepage
->","")@chrome://selenium-ide/content/selenium/scripts/htmlutils.js:60 ([object Object],[object
Object])@chrome://selenium-ide/content/selenium/scripts/selenium-commandhandlers.js:307
()@chrome://selenium-ide/content/selenium/scripts/selenium-executionloop.js:112
(21)@chrome://selenium-ide/content/selenium/scripts/selenium-executionloop.js:78 apply([object
Object],[object Array])@:0 (21)@chrome://selenium-ide/content/selenium/scripts/htmlutils.js:60 @:0 , name
-> TypeError
</code></pre>

