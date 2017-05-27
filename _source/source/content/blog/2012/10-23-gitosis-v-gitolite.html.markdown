---
title: Gitosis v. Gitolite
date: 2012-10-23
tags: git
author: Albert
---
<script type="text/javascript"><!--
google_ad_client = "ca-pub-9657495873329253";
/* 728x90, created 1/5/08 */
google_ad_slot = "9737089361";
google_ad_width = 728;
google_ad_height = 90;
//-->
</script>
<script type="text/javascript"
src="//pagead2.googlesyndication.com/pagead/show_ads.js">
</script>

Gitolite is newer, and offers more granular control, but it spreads the security
measures beyond SSH's regularly peer-tested capacities. Let me explain:

### Both involve the following components:

* An admin repository, i.e. gitosis-admin, or gitolite-admin
* SSH keys
* A git, gitolite, or gitosis user
* Git hooks that trigger configuration changes via the gitosis or gitolite scripts

IIUC, the major difference between gitolite and gitosis is that gitosis only
manages access to git repositories, while gitolite provides more granular
control over git repositories *and* their branches.

Both use SSH keys for authentication and repository level authorization. The
keys and the ACLs are stored in the admin repository, and the git triggers
convert the ACLs to the git user .ssh/config file via git hooks. So when you
commit and push a change, the ACLs will be parsed then transformed and copied
into a .ssh/config file, while the keys are also concatenated into
.ssh/authorized_keys - a process you are familiar with.

The gitosis .ssh/config files only ever allow a user to issue a single command
- a git binary. In fact, when "using" gitosis, gitosis itself, is hardly ever
used, its 99.999% purely ssh and git. Gitolite is similar, but it uses a wrapper
to the git binary which evaluates logic in the ACLs to grant or deny access for
every git command. Conversely, when using gitolite, you use it all the time.

### They Don't Conflict with Each Other

These days I'm using gitolite at work, and gitosis at home. I hardly know they
are different.
