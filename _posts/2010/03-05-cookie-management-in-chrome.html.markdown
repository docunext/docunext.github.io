---
title: Cookie Management in Chrome and Squid 
date: 2010-03-05
tags: chrome,privacy
---
I've grown quite tired of having to clear out useless cookies from my browser. They are quite a pain in my opinion. I visit many websites only once, and thanks to Google Analytics, almost every website out there sets cookies.

In addition to being annoying to clear out, they also cause proxy caches to not cache their content some of the time.

So here's what I've done:

* [Set Squid to "anonymize" http requests](http://www.docunext.com/wiki/Squid_3_To_Block_HTTP_Headers)
* Set Google Chrome to block sites from storing any data

Many web applications require cookies, so I use the "Exceptions" feature to allow them to store cookies.

Unfortunately, many web applications also span across multiple sub-domains, and Google Chrome apparently doesn't support wildcard domain settings. More specifically, I have been unable to use this in my exceptions:

<pre class="sh_sh">.example.com</pre>

Usually that means any sub-domain of example.com. I also tried:

<pre class="sh_sh">*.example.com</pre>

Neither worked. :-(

That means to access [online banking services](http://www.informedbanking.com/) from BankofAmerica.com or Chase.com, I've had to add about six domains for each one. Not a fun exercise.

Thankfully, its possible to manually edit the Google Chrome preferences file on Debian. On my machine, its in ~/.config/google-chrome/Default/Preferences, and the file looks like its in JSON format:

<pre class="sh_javascript">
         "www.docunext.com": {
            "cookies": 1
         },
</pre>

UPDATE: I've been browsing the net for a few days with this setup. The first day or so were annoying, but now things are going along smoothly and I'm occasionally finding more sites I still need cookies for. Thankfully Chrome notifies me when the cookie is required by the same domain as the one I'm currently viewing, and provides a shortcut button to edit my cookie preferences. I'm really glad I decided to make this step!

