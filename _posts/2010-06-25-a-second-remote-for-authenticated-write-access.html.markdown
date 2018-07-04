---
title: A Second Remote for Authenticated Write Access
date: 2010-06-25
tags: git,remotes,submodules
---
I'd previously pondered how to setup git submodules for public repositories, so that everyone can have read access to the submodules, but developers could have write access.

I believe the right answer is a simple one: use the read-only public access URL for the submodule, and then just add another remote URL that has read / write access.

I've done this on a few repositories and it works fine for me.

