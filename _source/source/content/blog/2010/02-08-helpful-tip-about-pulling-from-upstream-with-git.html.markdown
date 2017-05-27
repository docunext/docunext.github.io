---
title: Helpful Tip About Pulling From Upstream With Git
date: 2010-02-08
tags: git,github,subversion
---
I found this post very helpful:

[easily fetching upstream changes @ gitready.com](http://www.gitready.com/intermediate/2009/02/12/easily-fetching-upstream-changes.html)

In a nutshell (for my own reference):

<pre class="sh_sh">
git remote add upstream git://github.com/user/repo.git
</pre>

<pre class="sh_sh">
[alias]
  pu = !"git fetch origin -v; git fetch upstream -v; git merge upstream/master"
</pre>

Git is really impressing me these days. Unfortunately for subversion, its showing me things I didn't even know about the ol' reliable svn...

After trying this on [docu-not-git-wiki](http://github.com/docunext/docu-not-git-wiki) (a new branch to inspect minad's fork), I'm getting this error:

<pre class="sh_sh">fatal: You have not concluded your merge. (MERGE_HEAD exists)</pre>

I'm not sure how I fixed this, but I fiddled around with git reset HEAD git-wiki.rb and manually edited files, and then did:

<pre class="sh_sh">git commit -m "ok" -a</pre>

It seems to be fine, as I pushed the new branch and its now available on github.

And lastly, to push tags to github:

<pre class="sh_sh">git push --tags</pre>

UPDATE: I'm not going to use that shortcut again anytime soon! It got me started with the idea, but obviously I don't understand the process well enough yet. My second attempt at creating a branch and merging upstream changes with it resulted in the entire history getting applied to both the branch and my mainline branch. Ugh! Thankfully docu-not-git-wiki is fairly simple. :-)

Duh, yeah. I just looked at the alias again and it does indeed merge with master. Doh!

