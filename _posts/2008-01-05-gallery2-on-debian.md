---
title: Gallery2 on Debian
date: 2008-01-05
tags: debian,php
---
I'm installing Gallery2 on debian - so far so good!

<pre>
apt-get install gallery2
cd /var/www/public/
ln -s /usr/share/gallery2 gallery2</pre>

Note: I use public as my docroot. I had to enter a mysql username and password for the apt-get install.

Then I loaded up the webserver where g2 is hosted and it brought me to the installation process. I had to verify / authenticate by putting a file on the server for it, not a problem.

Wow, I'm impressed with the installer. It prompter me to setup a web directory, a storage directory, and allowed all this to work for a multisite setup. That is very very cool.

The one thing I'm a little skeptical of is the affiliate commerce sections which come pre-populated with affiliate ids. It would be nice to know who the affiliate is, and how to reconfigure the relationships.

