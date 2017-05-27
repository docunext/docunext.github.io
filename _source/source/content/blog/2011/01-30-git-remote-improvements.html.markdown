---
title: Git Remote Improvements
date: 2011-01-30
tags: git
---
The git remote sub-command has received some improvements recently:

Here's output from a recent version of git-core:

<pre class="sh_sh">
# git remote -h
usage: git remote [-v | --verbose]
   or: git remote add [-t <branch>] [-m <master>] [-f] [--mirror] <name> <url>
   or: git remote rename <old> <new>
   or: git remote rm <name>
   or: git remote set-head <name> [-a | -d | <branch>]
   or: git remote show [-n] <name>
   or: git remote prune [-n | --dry-run] <name>
   or: git remote [-v | --verbose] update [-p | --prune] [group]

    -v, --verbose         be verbose
</pre>

And the latest version (or the current version available in Debian Squeeze):

<pre class="sh_sh">

# git remote -h
usage: git remote [-v | --verbose]
   or: git remote add [-t <branch>] [-m <master>] [-f] [--mirror] <name> <url>
   or: git remote rename <old> <new>
   or: git remote rm <name>
   or: git remote set-head <name> (-a | -d | <branch>)
   or: git remote [-v | --verbose] show [-n] <name>
   or: git remote prune [-n | --dry-run] <name>
   or: git remote [-v | --verbose] update [-p | --prune] [group | remote]
   or: git remote set-url <name> <newurl> [<oldurl>]
   or: git remote set-url --add <name> <newurl>
   or: git remote set-url --delete <name> <url>

    -v, --verbose         be verbose; must be placed before a subcommand
</pre>

Most useful to me at the moment is the ability to change the URL for remotes, as I recently setup a gitosis server, then decided to change the hostname pointing to it. Thankfully, this makes is super easy.

<pre class="sh_sh">
sudo git remote set-url origin gitosis@git.example.com:mygitproject.git
</pre>

