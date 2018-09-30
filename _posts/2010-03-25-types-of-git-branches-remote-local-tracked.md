---
title: Types of Git Branches Remote Local Tracked
date: 2010-03-25
tags: branches,merging,remotes
---
Git continues to amaze me. Yesterday I learned about "tracked branches", sometimes also referred to as tracked remote branches.

I've been using git for several months now and am comfortable with the idea of cloning, forking, and to some degree merging. I felt like something was missing in terms of keeping up to date with "upstream" - the tree which was originally cloned.

The idea of tracked branches is sort of filling in the gap for me. I'm using it to keep a local copy of another remote and actively developed source repository. In doing so, the task of trying to keep my tree and the other tree relatively in sync has become a lot easier.

For example, last night I brought in some changes from deadlyicon's tree of git wiki. A lot has changed in both our branches from the original git-wiki source from sr. I tried:

<pre class="sh_sh">
git pull deadlyiconupstream master
</pre>

It failed miserably, so I reset my tree to the head of the origin:

<pre class="sh_sh">
git fetch origin
git reset --hard origin
</pre>

I tried creating a new branch and then pulling the the deadlyicon upstream into it, but for whatever reason it kept propagating into my master. Thankfully I found this page on [remotely tracking branches](http://www.gitready.com/beginner/2009/03/09/remote-tracking-branches.html). It didn't explain exactly what I was trying to do, but very close.

To do what I wanted, I added a new remote pointing to the other branch:

<pre class="sh_sh">
git remote add micahbrichgwups git://github.com/micahbrich/git-wiki.git
</pre>

After that, I fetched the remote ref:

<pre class="sh_sh">
git fetch micahbrichgwups
</pre>

Then set a branch to track it:

<pre class="sh_sh">
git branch --track mb micahbrichgwups/master
</pre>

If I have other repositories which I want to get up to date, I can do this:

<pre class="sh_sh">
git checkout -b mb
</pre>

Actually this causes a "branch already exists" error, so I'm just using this:

<pre class="sh_sh">
git checkout mb
</pre>

Though I'm not sure what the difference is between that and the [command gitready](http://www.gitready.com/intermediate/2009/01/09/checkout-remote-tracked-branch.html) suggests:

<pre class="sh_sh">
git checkout --track -b mb
</pre>

Maybe its combination?

Still more to learn!!!

#### UPDATE

One more time for review:

<pre class="sh_sh">
user@dev-48-gl:/var/www/dev/movabletype-stuff/mt-plugin-tidings$ git remote add upstream http://github.com/sixapart/mt-plugin-Tidings.git
user@dev-48-gl:/var/www/dev/movabletype-stuff/mt-plugin-tidings$ git fetch upstream
remote: Counting objects: 30, done.
remote: Compressing objects: 100% (21/21), done.
remote: Total 24 (delta 10), reused 0 (delta 0)
Unpacking objects: 100% (24/24), done.
From http://github.com/sixapart/mt-plugin-Tidings
 * [new branch]      master     -> upstream/master
user@dev-48-gl:/var/www/dev/movabletype-stuff/mt-plugin-tidings$ git branch --track upstream/master
Branch upstream/master set up to track local branch master.
user@dev-48-gl:/var/www/dev/movabletype-stuff/mt-plugin-tidings$
</pre>

Nope, that doesn't work. What am I doing wrong here? Ah, I need a name for the branch (I think)!

Like so:

<pre class="sh_sh">
user@dev-48-gl:/var/www/dev/movabletype-stuff/mt-plugin-tidings$ git branch --track ups upstream/master
</pre>

