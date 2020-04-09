---
title: Command line subversion and Trac
date: 2007-10-12
tags: none
author: Albert Lash
---
I logged into the command line using ssh:

<pre>
ssh username@hostname</pre>

Edited a document:

<pre>
vim filename.txt</pre>

SVN (subversion) diff showed where the change was made:

<pre>
svn diff</pre>

Committed the change to the repository

<pre>
svn commit</pre>

Viewed the changes in trac. :-)

The repository holds all the info pertaining to a specific set of data, in this instance the data is for Pbooks. you can remove data from the check out and the info will always be retrievable in the repository. This is very handy when you are continuously editing and changing something, because you never know when you're going to want to go back to a previous version.

