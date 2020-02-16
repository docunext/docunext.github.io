---
title: linux add user to group
date: 2007-05-12
tags: none
author: Albert Lash
---
Note to self: this is how you add a user to a group in linux:

usermod -G<em>groupname</em> <em>username</em>

Except for the fact that I'm using nss_mysql, so it can't find the username(s) in /etc/passwd. Instead I added the group to the database and added the user group relationship as well. So this is where nss mysql  gets tricky, the groups in the files on separate computers are most likely going to be different but the ones in the database will be the same. I guess that's where you need to step up to using ldap instead.
