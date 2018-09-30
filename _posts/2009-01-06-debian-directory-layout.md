---
title: Debian Directory Layout
date: 2009-01-06
---
Debian follows the standard directory layout for figuring out where to put files, and as I'm starting to package some of the open source software I work on, I'm naturally looking to figure out where certain things go.

The obvious ones:

* Configuration files with sensitive information go into /etc/
* Shared application files go into /usr/share/
* Variable data, like cache files go into /var/ - specifically I'm wondering it Nexista cache files should go into /var/cache/nexista/...

