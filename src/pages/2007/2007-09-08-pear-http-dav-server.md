---
title: PEAR HTTP DAV Server
date: 2007-09-08
tags: dav,"file systems"
---
Last year a really awesome package was contributed to PEAR: the HTTP_WebDAV_Server. This is a pure-PHP implementation of a DAV server, complete with file locks and put capabilities.

What's the big deal, as they ask in the docs, why not just use mod_dav? Well the really cool potential is in the ability to create an extremely flexible relational file system. That's right! You heard right, a relational file system. Think of it this way - a dynamic filesystem that reorganizes itself based upon how you are browsing through it.

Maybe I should explain it this way. You have a bunch of files: your bank statements for the past two years. You could organize them by date, or you could organize them by account. In the "real world" its one or the other, and the same goes for most filesystems (though you could use symlinks to extend the organization a little). But by storing and accessing the files in a relational filesystem, you can do so much more. "Why bother?" is what Google would say, because you can just search through everything. But you might not know what you are searching for, only some criteria. You can use that criteria to sort your files until you find the target.

I like this idea!
