---
title: inotify and incrond
date: 2007-10-17
tags: none
author: Albert Lash
---
inotify is a kernel module which can watch files for activity, such as creation, modification, access, and similar events. This is quite a helpful feature!

incrond is an interface to these kernel messages and like regular cron, can issue commands based upon inotify events. For example, if a file is edited, incrond can restart a service it is dependent upon, or it can send an email out containing what file was modified. Useful? Absolutely!

