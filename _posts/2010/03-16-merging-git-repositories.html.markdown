---
title: Merging Git Repositories
date: 2010-03-16
tags: git,merging,subversion
---
This is an example task that shows how awesome git is.

What exactly was I trying to do? I had a few ikiwiki repositories in subversion, and I decided I wanted to switch them to git. Then I figured I wanted to back them up at Github privately. Since Github limits the number of repositories and these wouldn't take up too much room, I decided to combine them.

First thing I had to do was rewrite their history inside of a sub-folder instead of the root directory. **git filter-branch** to the rescue!

Had some trouble with it though because I was using a subversion import...

<pre>Rewrite 422a38a0e9d2c61098b98e6c56213ac83b7bacc2 (1/42)mv: cannot stat `/home/.../wikis/nodows/.git-rewrite/t/../index.new': No such file or directory
</pre>

It was the missing trunk folder. So instead of:

<pre>git filter-branch --index-filter \
        'git ls-files -s | sed "s-\t\"*-&nodows/-" |
                GIT_INDEX_FILE=$GIT_INDEX_FILE.new \
                        git update-index --index-info &&
         mv $GIT_INDEX_FILE.new $GIT_INDEX_FILE' HEAD</pre>

I used:

<pre>
git filter-branch --index-filter \
        'git ls-files -s | sed "s-\t\"*-&nodows/-" |
                GIT_INDEX_FILE=$GIT_INDEX_FILE.new \
                        git update-index --index-info &&
         mv $GIT_INDEX_FILE.new $GIT_INDEX_FILE' HEAD~40..HEAD</pre>

The "40" listed above depends on the repository I'm switching and filtering. There were 42 total commits in the svn repository. I'm working on another with 256:

<pre>r256 = eb6f0f706d5109f48a4e3e46b0de69498ec5877b (refs/remotes/trunk)</pre>

I'll try 255 first. Nope, 254 worked.

Then its as simple as:

<pre>git remote add nodows ../nodows
git pull nodows</pre>

Yes, to merge two git repositories, all I had to do was add a remote reference and pull it in. The merge happens automatically, but if there are file conflicts, it will bail - hence the sub-folder task I started out with.

