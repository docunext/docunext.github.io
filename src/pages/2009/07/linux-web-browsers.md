---
title: Linux Web Browsers
date: 2009-07-06
tags: none
author: Albert Lash
---
At the moment, I'm using these web browsers on my debian GNU/linux notebook:

<ul><li>Manually Built Epiphany Webkit</li><li>Google Chrome from Google Repositories
</li><li>Iceweasel 3.5 from a Debian developer</li><li>Midori
</li></ul> Of them all, <b>Firefox</b> is by far the most convenient and reliable. Almost everything works in it, and amazing add-ons such as Firebug make it indispensable for me. Only problem is that it is the slowest of the bunch. Firefox 3.5 is a heck of a lot faster than 3.0, but it still lags behind WebKit powered browsers.
<b>
Google Chrome</b> is great - super fast and pretty stable. A couple of problems though - the tab switcher relies upon ctrl instead of alt, which conflicts with my keyboard layout as well as the tab switcher for Iceweasel. I would try building it on my own, but I can't find the source for it. While Chromium is an open source project, Google Chrome is not. It could be compared to the open source nature of Apple's operating system - Darwin is open source, OS X is not. (It should also be noted that Apple's browser, Safari, is not open source, but it relies upon and contributes to the open source Webkit project, like Epiphany WebKit, Midori, and Google Chrome.)

UPDATE: HA! I'm not the only one who is annoyed that <a href="http://code.google.com/p/chromium/issues/detail?id=13395">Chromium used the ctrl key instead of alt on linux to switch tabs</a>!

I have high hopes for <b>Epiphany WebKit</b>. Epiphany has been around for some time and had been using the Mozilla Gecko rendering engine until only recently. I've heard rumors of the Webkit version getting added to the Debian repositories, but I've not seen any yet, so I've been building my own. I was using it regularly as an alternative to Iceweasel until Google released Chrome for linux. Of major importance and convenience for me, Epiphany Webkit has Gnome keyring support, but I have only gotten it to work for HTTP authentication.

UPDATE: I just added sid to my sources.list and epiphany-webkit is there. Installing it now... works great, but still no saving of non-http passwords.

<b>Midori</b> is yet another Webkit powered browser. I like it because it support Flash and has fast rendering. However, in my experience it has slow initial page loading, and doesn't provide enough feedback as to its loading status. I only use this as a WebKit test browser.

Links:

<ul><li><a href="http://www.docunext.com/2009/03/25/building-webkit-svn-on-debian/">My notes on building WebKit on Debian</a>
</li></ul>

