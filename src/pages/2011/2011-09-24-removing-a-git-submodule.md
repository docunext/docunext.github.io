---
title: Removing a Git Submodule
date: 2011-09-24
tags: git,submodules
---
I'm noting these instructions on how to remove a git submodule for future reference:

1. Delete the relevant line from the .gitmodules file.
2. Delete the relevant section from .git/config.
3. Run git rm --cached submodule_path.
4. Commit and delete the now untracked submodule files.
5. Run rm -rf submodule_path.

In general, I'm not very fond of git submodules. They are very clunky and can get messed up so easily. Compared to subversion externals, they are not very useful in my humble opinion.

Subversion externals acts just how I would expect - its a reference to another subversion repository within a subversion repository. Git submodules are pegged to a particulate commit of the other repository, and I've run into several problems with submodules becoming corrupt.

