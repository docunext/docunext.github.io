---
title: Git Stash
date: 2010-03-22
tags: commits,git
---
This seemed like a really useful little command, but I only found the chance to try it yesterday.

What does "git stash" do? In my understanding, its sort of like a temporary pre-commit. Meaning, its not a commit, but it temporarily saves the current tree state, then restores the tree to the last commit.

I used it yesterday to quickly return to the last commit, tag it, and then restore my changes to commit them, like so:

<pre class="sh_sh">
git status
git stash save bigrefactor
git status
ls
cat VERSION
git tag
git tag -a 0.1.3
git push origin master tags
git push origin master --tags
git stash list
git stash apply
git status
git commit -m "major refactor, preparing for new version, fixed tests. still needs more testing" -a
git push origin master
git diff
git commit -m "removed unused variable" -a
git diff
</pre>

Nice!

