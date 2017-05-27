---
title: Let s Use Flat Files For Storage
date: 2010-01-15
tags: git,ledger-cli,pfsense,postfix,xml
---
I ran out of time while writing the blog post titled "[What's Up CouchDB, Ledger, XML, BNF, Ragel, and Git?](http://www.docunext.com/blog/2010/01/whats-up-ledger-xml-bnf-ragel-and-git.html)", so I had to end it before I got to one of the more important points: using flat files as storage.

Obviously not the best for real time data management, but in many cases it might work really well.

Ragel makes it relatively easy to write super fast parsers, so why not store blogs, project plans, finances, forums, and even something like emails in a git repository? Thinking about this makes me wonder if git is involved with Google Wave?

I find GMail's threading behavior annoying, but I also find the duplicity of quoted text in emails annoying. Why not use git to pass a single document back and forth as part of a conversation? It would be tracked with each version retained, and thankfully not needlessly duplicitous.

No doubt there are some very nice features and functions in modern RDBMS, but its a simple task to convert a structured document, like an XML document, into a SQL-powered database. That's what I'm considering doing with [Regdel](http://www.regdel.com/).

The canonical store will be in a ledger-cli flat file, and save for simple data entry, all data manipulation would be performed via the Regdel web interface. The flat file format makes it lightweight and perfect for version tracking with something like git. XML would work too, but its a lot heavier than the ledger format, and since ledger-cli exists, I don't see a reason for storing the data as XML.

If similar parsers existed to convert flat file data to XML structured data, I would be inclined to store even more information in git, and use an RDBMS to manage it. I don't know of any, but I'm pretty sure that there are some BIND-format DNS record parsers which can export to XML. If so, that would be another good example of something to store as a flat file in git.

**Other Uses for Flat File Data Storage**:

* Firewall rules
* ACLs
* Postfix maildirs and / or aliases
* pfSense / m0n0wall configurations (already in XML)

I've started saving my OpenOffice.org spreadsheets as flat-XML files. If and when I change them, the change can be more efficiently stored within git. I haven't tested it, but I imagine that after a few committed revisions, an oocalc flat XML file would be less than the same amount of oocalc compressed XML files - simply due to the fact that git would have to store a copy of each compressed file, instead of the differences between them. Git also compresses the old data, too.

Of course XML is not so much fun for humans to read and write, so its nice to think that for consistent data, something like Ragel can bridge the gap between consistently formatted documents and fully structured documents.

Anyone else find this an interesting road to follow?

