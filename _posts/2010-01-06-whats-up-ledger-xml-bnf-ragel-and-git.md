---
title: What s Up CouchDB Ledger XML BNF Ragel and Git 
date: 2010-01-06
tags: couchdb,git,ledger-cli,xml
---
Regular Docunext readers will likely know how much I like boring old technologies.

Stuff like static files, 3Com 3c509 network cards, IDE drives, and so on. Why? Because old technologies that have stuck around long to get boring means that they probably serve some useful purpose as well as being reliable.

No doubt I love trying out new technologies too, but since I'm appreciative of tested, tried, and true technologies I really love seeing old technologies getting combined in new ways.

I'm getting inspired to try out some new techniques with old technologies based upon some inspiration from Ledger, XML, BNF, Ragel, and Git. Git isn't really an "old" technology, but its purpose as a revision control system has been around long enough. Also, in its short life so far, Git has gathered an impressive following of users (including myself) who are testing it and trying it out and many (again, including myself) are espousing positive reviews.

Let me try and get more specific by highlighting some characteristics of the aforementioned technologies:

* Git quickly manages static file revisions and changes and only takes up a tiny amount of storage space to do so.
* Ledger uses a static file as its data source to run reports on financial data. The file format is quite simple and it uses a built-in parser to convert the data into a more machine-centric format.
* XML is a reliable, robust, extensible and structured file format for which there are a ton of parsers making it easier than ever to transfer, transform, and manipulate data and documents. However, it can easily become burdensome for human beings to create or update. It can also require significantly more resources than some other structured formats like JSON or YAML.
* BNF is a format for describing formats. It can be used to define tokens for use in building custom parsers. For example, Ledger includes a BNF reference that described how it parses plain text data files.
* Ragel is a state machine compiler. Since file parsers are state machines, ragel can be used to build custom parsers. Ragel can't directly consume BNF files, but software exists to bridge the gap.
* CouchDB is a document-oriented storage system, sort of similar to an RDBMS, but in my opinion, more like a dynamic filesystem.

In this day and age of complex RDBMS and proprietary "binary blob" file formats, it seems a little old-fashioned.

So what are the new techniques that I've referred to? Patience. I've just run out of time for this article so the deets will have to wait for the next one. In the mean time, don't forget about boring tech!

