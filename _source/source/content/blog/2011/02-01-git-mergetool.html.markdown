---
title: Git Mergetool
date: 2011-02-01
tags: git
---
Two of my co-workers were actively working on a Rails site today, transferring files to-and-from the demonstration server via FTP, as well as pulling and pushing to a shared git repository.

Needless to say, there were a *lot* of conflicts!

We ended up using the "git mergetool" sub-command, which then loaded an external tool called vimdiff.

Vimdiff displayed three buffers:

* On the left, the local file
* In the middle, the conflicted merge
* On the right, the remote file

It was actually really easy to clean up the conflicted merge this way; it our circumstance it mainly involved deleting lines, but I noticed that there is built-in functionality to copy lines from the other buffers to the merge as well.

After the conflicted merge(s) were complete, the process asked if the conflicts were resolved. Yes, they were, and we were able to commit, then push the resolutions back to the origin.

