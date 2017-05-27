---
title: Git Submodules
date: 2010-03-07
tags: git,submodules
---
I use Vlad to deploy my web applications that use git as their code management system, so I haven't used submodules much.

Today I decided to find out if Vlad supports submodules - it was recently added!

<pre class="sh_sh">
git submodule add git@github.com:docunext/1bb02b59.git views/xsl/1bb02b59
git submodule init
git submodule update
git add .gitmodules
git commit -m "sm" !$
</pre>

That's a read / write path which requires authentication.

I'm wonder if there is a process for deciding between authenticated and read-only anonymous access for git submodules?

