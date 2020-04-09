---
title: Subversion Documentation
date: 2006-07-09
tags: none
author: Albert Lash
---
<h3 id="toc0">Subversion Rocks!</h3><p>I'd been using Concurrent Versioning System, aka CVS, for some time to manage a previous software development project I had managed. It worked OK to do basic code management, backups and versioning control. However, the limits of CVS were apparent if you even tried to do anything beyond the basics. Don't get me wrong, I don't mean to trash CVS - the issues I ran into could have been my own lack of knowledge on how to use it!</p>
<p><strong>Enter Subversion</strong>

I was introduced to Subversion through Nexista, which was hosted at Tigris. Tigris also hosted Subversion, so I gave it a shot. Seemed to fill the shoes of CVS perfectly well, the commands were similar so it was easy to learn. Hadn't had any reason to try anything fancy, until now.</p>
<p>We rebuilt several of our servers so first I had to move the repository from one machine to another. We actually moved the entire filesystem, so the repository came with it. No problem. As an aside, here are instructions on doing it manually:</p>
<p><a href="http://dotnot.org/blog/archives/2005/01/13/move-a-subversion-repository-from-one-machine-to-another/">Migrate a subversion repository to another machine</a></p>
<p>Next, I created a branch. Branches are like alternate lines of software development. You can mix and match revisions along the branch developments in a very simple and straightforward manner. Best of all, branches do not complicate or overburden the repository, so if you have a reason to create a branch, go for it, create a subversion repository branch.</p>
<p>To keep learning about SVN, I decided to move the repository to another part of the filesystem. To do so, I used the commands outlined in the above link. Then I decided to merge to repositories, and rearrange the projects within the repository. Guess what, it all worked! And it all made sense! The free online book helps out immensely, so I recommend going directly to that source:</p>
<p><a rel="nofollow" href="http://svnbook.red-bean.com/en/1.1/svn-book.html#svn-ch-4-sect-2.1">http://svnbook.red-bean.com/en/1.1/svn-book.html#svn-ch-4-sect-2.1</a></p>
<p>Just realized something about tags and branches. Since I am the only one developing software, a tag is all I need at this point. It seems like branches are better for concurrent versioning, where multiple people are working on different checkouts.</p>
<p><strong>External Links about Subversion</strong>

<a href="http://www.germane-software.com/~ser/R_n_R/subversion.html">A novices Subversion Tutorial</a>

<a href="http://www.tigris.org/" rel="nofollow">Tigris</a></p>
