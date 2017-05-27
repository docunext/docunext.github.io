---
title: Git Remote Branch Commands
date: 2011-03-04
tags: branches,git,remotes
---
I've been wanting to figure out how to set an existing local branch to track a remote branch for awhile. Here's how! As well as the command to delete a remote branch.

To set the a branch to track a remote branch:

<pre class="sh_sh">
git branch --set-upstream mybranch remotes/origin/mybranch
</pre>

To delete a remote branch:

<pre class="sh_sh">
git push origin --delete mybranch
</pre>

