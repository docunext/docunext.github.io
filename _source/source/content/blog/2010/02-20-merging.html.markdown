---
title: Merging
date: 2010-02-20
tags: commits,merging
---
I'm now going to attempt a real world merge of two git branches.

There is a master branch on [CHIMAILMADMIN](http://www.chimailmadmin.com/blog/), which contains a converted subversion repository. After converting it to git, I created a branch called chimailr to port the application to Ruby's Sinatra framework.

I've made a bunch of changes to chimailr and now I'd like to merge some of them back to the master branch. The key here is "some", but not all. Unfortunately, that doesn't seem possible.

Oops! I made the mistake of using the --no-commit option because I thought that it was "safer", or less of a commitment in terms of making any changes. The opposite appears true in that it is more difficult to back out of a merge if there is no commit made.

