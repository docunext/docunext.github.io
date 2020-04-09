---
title: apt cacher
date: 2007-02-05
---
I tried running apt-cacher but I can't get it to work at all. Whenever I try to update another machine, it stalls and apt-cacher requires a restart. I am now trying out some new tips from this page:

<a rel="nofollow" href="http://ubuntu-tutorials.com/2007/01/08/save-bandwidth-during-updates-with-apt-cacher-ubuntu-610/">ubuntu-tutorials.com/save-bandwidth-during-updates-with-apt-cacher-ubuntu-610/</a>

Especially this one:

<pre>Acquire::http::Proxy "http://apt-cache-machine:3142";</pre>

in the apt conf file.

UPDATE November 20, 2007: I'm no longer using apt-cacher.  Instead I'm using squid or caching apache web server proxy, depending on the setup.

