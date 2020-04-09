---
title: Trac MySQL
comments:
  - author: Sean Tierney
    email: sean@jumpbox.com
    url: http://www.scrollinondubs.com
    date: 09/05/2007 06:52:24 PM
    text: >
      what's the motivation behind the move to MySQL specifically? depending on what the goal is you might look at migrating your existing instances to a JumpBox for Trac/SVN instead-&gt;<br/><a href="http://www.jumpbox.com/jumpbox-for-tracsubversion-software-project-management" rel="nofollow">http://www.jumpbox.com/jumpbox-for-tracsubversion-software-project-management</a><br/><br/>The Trac JumpBox uses SqlLite under the hood but it has advantages like simplified application updates via our backup/restore mechanism, portability due to reliance upon virtualization and the ability to dump the state of the entire instance at regular intervals to preserve a history of backups over time.<br/><br/>There's a decent writeup in our forums here that explains the migration process from an existing trac instance here-&gt;<br/><a href="http://www.jumpbox.com/node/224" rel="nofollow">http://www.jumpbox.com/node/224</a><br/><br/>that is unless you're genuinely interested in knowing the manual setup process.<br/><br/>sean
  - author: admin
    email: albert.lash@savonix.com
    date: 09/05/2007 09:20:05 PM
    text: >
      HI Sean, That looks pretty cool. I like virtualization for many things, but the jumpbox wouldn't help with redundancy. If I'm hosting a public project, I'd like to make sure that the http service is multi-homed and can withstand network outages, as well as hardware failure. MySQL replicates and is accessible over the network very easily.<br/><br/>Make sense?<br/><br/>Anyway I'm glad to have learned about JumpBox. However, I will most likely not purchase something like that. I prefer to setup and configure all the services myself, to make sure its going to work the way I want.
date: 2007-09-03
tags: fastcgi,mysql,trac
---
I'm planning to change from using SQLite to MySQL on my Trac installations. I'll have to learn more about python, but this page I found is a good start:

<a href="http://www.fadingred.org/blog/articles/2007/05/04/trac-migration-sqlite-to-mysql/" rel="nofollow">Trac Migration (SQLite to MySQL)</a>

I plan to use the same multi-homing strategy I'm using for Wordpress, which won't work for SQLite for a couple of reasons:

* No replication
* No remote updates

For that strategy to work with trac, I'll need to figure out how to change the SQL host when updates occur.

I also made a sincere effort to find a reasonable workaround for the limitations of using fastCGI with trac, namely the trac home environment variable. I tried a bunch of different things (tried to get http_host in the fcgi script, but no go) and eventually used vhost_alias to point to different trac.fcgi scripts using VirtualScriptAlias. It worked fine and should only require a little bit of maintenance.

¥

