---
title: Git Rebase and Amending Git Commits
date: 2010-12-29
tags: commits,git
---
I read up about the "git rebase" command as well as the "git commit --amend ..." flag, and I'm so glad that I did. Read on to find out why!

#### Git Rebase
Learning more about the rebase command is definitely helping me understand git workflow.

And as usual, explaining new concepts helps me understand them better, so here goes nuthin'...

The git rebase command takes changes from one branch the occurred in the time since the branch was created, and replays them on the current branch in such a way that they *before* the changes in the current branch actually take place.

OK, that sounds a bit odd, right? I'm trying to come up with an easy way to explain this... how about this: git rebase is like an inverted merge.

Does that help? Maybe not.... but from a practical perspective, rebasing can help a situation where two branches are concurrently changing. Instead of creating a third branch to merge the two into, resolve, etc., rebasing can allow the one that is a "work-in-progress", to keep up with updates to the branch is was split from. Yeah... I think I like that explanation.

So how does one actually rebase a branch? Given two branches, dev and master, where dev is the work-in-progress and master is the one getting sporadically updated, I would do something like this:

<pre class="sh_sh">
git checkout dev
git rebase master dev
</pre>

That will make it seem like the branch was started from the current head of master, presumably making it easier to merge dev back into master, when it is ready.

#### Amending Git Commits

This feature of git is awesome!! What's the big deal? It allows me to update my last commit. Say I committed a change without testing the change, only to realize I made a typo. I can then fix the typo, and update the last commit, so that there aren't useless commits in the repository. Yay!

