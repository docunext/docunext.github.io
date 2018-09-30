---
title: SVN Branches and Tags
date: 2007-04-20
---
Easiest way to create a branch:

<pre>$ svn copy http://svn.example.com/repos/calc/trunk \           http://svn.example.com/repos/calc/branches/my-calc-branch \      -m "Creating a private branch of /calc/trunk."

Committed revision 341.</pre>

Tags are made the same way:

<pre>svn copy http://svn.example.com/repos/calc/trunk \           http://svn.example.com/repos/calc/tags/tag-0.0 \      -m "Creating a snapshot of the repository at this point in time and development."</pre>

