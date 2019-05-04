---
title: Debian packages 
date: 2006-11-21
---
Debian packages can get complicated, but they don't have to be. The best howto I've read is from good old TLDP:

<a href="http://tldp.org/HOWTO/Debian-Binary-Package-Building-HOWTO/x88.html">Howto build debian packages</a>

SUMMARY:

You create a localized directory structure of the installation targets, which will form the basis of the package. Inside that directory, you include a file named DEBIAN which will include package name, architecture, dependencies, maintainer, and description. Its actually quite easy.

