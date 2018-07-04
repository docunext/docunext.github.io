---
title: Contributing Packages to Debian
date: 2007-10-21
tags: none
author: Albert Lash
---
<a href="http://www.docunext.com/blog/2007/10/21/contributing-packages-to-debian/">

As a follow-up to the last docunext post on PHP5-Readline and a debian package for it, here are a few notes I've taken on what I believe it takes to contribute packages to debian:

<ul><li>New package maintainers need to be sponsored or mentored by an existing package maintainer</li><li>New packages must fit the requirements for a debian package, simply put, it has to be legal, useful, and properly package, among other requirements</li></ul>

I'm sure there are others, but that's all I'm aware of so far. I'm not ready to contribute any packages yet, but chances are it will make sense to do so in the near future. I would especially like to contribute <a href="http://www.pbooks.org/">PBooks</a>, but I'm not sure if debian has embraced the AGPL v3 license as part of what they consider to be free software. Furthermore, I'm wondering how PEAR-packaged dependencies should be handled. PBooks relies upon MDB2 at the moment, though support for PHP's native PDO is in the works. <a href="http://www.nexista.org/">Nexista</a> is also required, and that isn't a PEAR library, so it could easily be packaged as a debian .deb.

UPDATE November 3, 2007: I've subscribed to the debian mentor's mailing list and I've picked up a few good ideas so far:

<ul><li>No empty spaces at eol or eof</li></ul>

