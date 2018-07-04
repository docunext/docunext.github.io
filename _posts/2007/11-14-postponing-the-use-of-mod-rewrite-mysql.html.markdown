---
title: Postponing the use of mod rewrite MySQL
date: 2007-11-14
tags: apache,google,mod_rewrite,mysql,perl,xslt
---

Since mod\_rewrite and mod\_dbd aren't quite ready for production use yet, I'm going to remove my mod\_rewrite perl script which looks up redirects.

Instead I plan to use the basic hash files, which I might even build with data from MySQL. There are many benefits to this - such as a fast a reliable lookup mechanism, which even updates when the modification time on the file changes.

This jives well with my thoughts about using the sitemaps data I have prepared to keep track of the uri's I weave.

<strong>CONTINUED</strong> November 14, 2007:

How do I plan on managing migrating URLs? With hashed rewritemaps.  As I mentioned earlier, I plan to store the information I need in a database. I'll use XSL to transform it to an ascii text file, and then convert it to a hash dbm file. I'm using a hash dbm file because the input key (the domain or url) I'll be searching for will be random, requiring a lot of scanned lookups. If I understand correctly, this is where hash dbms excel. I can have a huge list of keys and values and I won't get bogged down with a lookup penalty as the list grows.

The tool: <strong>/usr/sbin/httxt2dbm</strong>

I'm also going to use hash maps to set certain variables for use in some of my php scripts, since they'll be used by different applications and I don't want to have to redo the logic over and over. For example, the Google analytics code to get inserted on each page so it will get tracked.

