---
title: Embedded Thoughts
date: 2007-06-26
tags: compact flash,embedded
---
Compact flash is a pain in the neck.

* The fact that some cards support DMA and others don't is really aggravating.
* Write limitations are aggravating as well. Even with jffs2 and yaffs, I'm nervous a database like sqlite or mysql would burn through a flash drive in no time at all.

Some disks have built-in wear leveling. Interesting - the Emphase disk-on-modules have up to 4,000,000 writes. How many writes does a database make?

Related Links:

<a href="http://www.filipdewaard.com/php/SQLite-in-memory-databases/">http://www.filipdewaard.com/php/SQLite-in-memory-databases/</a>
<a href="http://www.sqlite.org/cvstrac/wiki?p=InMemoryDatabase">http://www.sqlite.org/cvstrac/wiki?p=InMemoryDatabase</a>

