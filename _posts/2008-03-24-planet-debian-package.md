---
title: Planet Debian Package
date: 2008-03-24
tags: debian,packages,planet
---
As regular readers of Docunext know, one of my favorite websites is <a href="http://planet.debian.org/" rel="nofollow">Planet Debian</a>. While perusing some debian packages last night, I realized that the software which powers <a href="http://packages.debian.org/planet" rel="nofollow">Planet Debian is actually a debian package itself</a>. Its pleasant surprises like that are what always impresses me about debian - it is a great group of people and they are constantly willing to share what makes them great with whoever is interested.

So I tried out "planet" and its super easy to get going. Here's what I did:

1. apt-get install planet
2. vim /etc/planet.conf - added a \[http://www.example.com/feed/\] section at the bottom
3. cd /var/www/
4. ln -s /var/lib/planet/www/ ./planet/
5. planetplanet /etc/planet.conf

It worked! Right off the bat I'm wary to learn another template language / syntax though, so I'm wondering how easy / difficult it would be to use <strong>XSLT</strong> as the rendering engine. Hmmmm.

