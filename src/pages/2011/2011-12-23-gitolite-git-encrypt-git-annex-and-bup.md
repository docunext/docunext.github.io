---
title: Gitolite Git encrypt Git annex and Bup
date: 2011-12-23
tags: bup,git
---
I've been working more git lately, covering at least the following items:

* Gitolite
* Git enrypt
* Git annex
* Bup

Here are my notes on each component:

#### Gitolite

I've been using Gitosis for awhile, and its fine. I decided to try Gitolite because it supports git-annex-shell, and I've been seriously getting into git annex after realizing it supports bup.

I was able to set it up and got it working well, but then I came to realize that git-annex-shell is not compatible with bup:

<blockquote>
"git-annex-shell does not support bup, due to the wacky way that bup starts its server. So, to use bup, you need full shell access to the server."
</blockquote>

So much for reading the manual! :-)

Now I've got both gitosis and gitolite setup. I'm only actively using gitosis right now - I won't switch anytime soon - probably when I have another hankering to use git-annex-shell!

UPDATE: It looks like this isn't a show stopper, because apparently git annex repositories can still stored in gitosis or gitolite servers, its just that the annexed contents, cannot. That's fine though, in my opinion. I'll try it out.

#### Git encrypt

Git encrypt is a really nice script for using git smudge and clean to pretty much transparently encrypt / decrypt git repository data *while* allowing git to still do its thing.

I've been tinkering with it today while working with homesick - a ruby gem that allows cloning and symlinking dotfiles for home directory configuration. Its really awesome, but I have some additions I'd like to make, such as the ability to symlink dotfiles *within* dotfolders, like the .ssh or .config folders.

Anyway, back to git encrypt - given that some dotfiles have some relatively sensitive data (like .s3cfg and the .ssh folder items) - its a perfect combo with homesick.

I've gotten the two to work together, but getting it to work is a very manual process,  since the passphrase must be entered before the repository is checked out. Maybe when I have some free time, I'll try smoothing it out.

#### Git annex

This is such an awesome project.

#### Other All Stars

* bindfs
* mkisofs + fuseiso
* mr

