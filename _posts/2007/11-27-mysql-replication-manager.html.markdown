---
title: MySQL Replication Manager
comments:
  - author: Alexey Kovyrin
    email: alexey@kovyrin.net
    ip: 208.100.36.32
    url: http://blog.kovyrin.net
    date: 11/28/2007 02:14:40 PM
    text: >
      No, MMM does not use LVM. I mean if you want, you can use it, but if you're going to manage your servers' data manually - NP, just don't use MMM's features for that.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 11/29/2007 04:22:00 PM
    text: >
      Thanks for clearing that up Alexey. My mistake!
date: 2007-11-27
tags: mysql,replication
---
I've been searching for a MySQL Replication Manager, and found a lot of stuff, but nothing yet fits my needs.

This one looks good:

<a href="http://matt.simerson.net/computing/sql/mrm/" rel="nofollow">http://matt.simerson.net/computing/sql/mrm/</a>

but it has a dependency for Matt::Bundle which I'm not sure works on linux, and has a lot of stuff I'll never use.

This article is helpful too:

<a href="http://blog.kovyrin.net/mysql-master-master-replication-manager/use-cases/" rel="nofollow">kovyrin.net/mysql-replication-manager/use-cases/</a>

The software by Kovyrin looks to be the one I need. I initially thought it would only be used for dual-master setups, but I don't want to do that. Thankfully, this software manages setups that include a single master, and a failover replicant which can be promoted to master.

Urg, upon further investigation, it might not be the right choice for me. <del datetime="2007-11-29T21:20:30+00:00">It uses LVM, which although it has some great benefits, I don't want to use. </del>

#### Simple MySQL Replication Script

This one comes from <a href="http://www.onlamp.com/pub/a/onlamp/2005/06/16/MySQLian.html" rel="nofollow">O'Reilly</a>:

<pre class="sh_sh">
mysqldump --user=root --password=my_pwd \      --extended-insert --all-databases \      --master-data  > /tmp/backup.sql
</pre>

True, it just looks like a regular backup script, but the most important part is that the "--master-data" adds the necessary data to the end of the script, i.e. the MASTER_LOG_FILE and MASTER_LOG_POS. Pretty cool huh?

The important thing is that the master must not have any writes while the backup, transfer, and import is taking place, so we'll use the "FLUSH TABLES WITH READ LOCK" command before getting started.

Just had another idea - it might make sense to keep the last copy of the backup on the failover server, so that it can be used with rsync, so that only the changes to the databases need to be transferred. Interesting.

Here's the idea:

1. Lock master
2. Backup master
3. Transfer backup to replicant and import
4. Start replication
5. Unlock master

The script would be run from the replicant, and would use ssh to issue a command on the remote, primary server. Then rsync would be called to transfer the backup file, using compression of course, and then the backup file would be imported.

In the past I've had MySQL with multiple databases, of which only some would get replicated. I'm going to stop that practice and instead replicate all of them. Therefore, before I even get started, I have some consolidating to do.

Related articles:

http://dev.mysql.com/books/hpmysql-excerpts/ch07.html

http://www.mysqlperformanceblog.com/2006/08/21/using-lvm-for-mysql-backup-and-replication-setup/

UPDATE November 29, 2007 - Per the comment from Alexey, I've deleted out the statement I made about MMM using LVM. I'll have to go back and read more about it!

UPDATE December 2, 2007: I did some more reading on MMM, namely the <a href="http://blog.kovyrin.net/mysql-master-master-replication-manager/installation-instructions/" rel="nofollow">MMM installation instructions</a>. Learned that MMM is written in perl, and so I venture further into its code... there is a nice install.pl script, I'll try it out on my testing machine. I installed libproc-daemon-perl and libalgorithm-diff-perl using apt-get rather than using CPAN, and then I also had to install iproute. After that, it installed with no problem. So far, so good!

<pre class="sh_sh">
# ./install.pl
Checking platform support... linux Ok!
Checking required module 'Data::Dumper'...Ok!
Checking required module 'POSIX'...Ok!
Checking required module 'Cwd'...Ok!
Checking required module 'threads'...Ok!
Checking required module 'threads::shared'...Ok!
Checking required module 'Thread::Queue'...Ok!
Checking required module 'Thread::Semaphore'...Ok!
Checking required module 'IO::Socket'...Ok!
Checking required module 'Proc::Daemon'...Ok!
Checking required module 'Time::HiRes'...Ok!
Checking required module 'DBI'...Ok!
Checking required module 'DBD::mysql'...Ok!
Checking required module 'Algorithm::Diff'...Ok!
Checking iproute installation...Ok!
Installing mmm files...
Confgiuration:  - installation directory: '/usr/local/mmm'  - create symlinks: on  - symlinks directory: '/usr/local/sbin'
Copying files to '/usr/local/mmm' directory...Ok!
Creating symlink: '/usr/local/mmm/sbin/mmm_get_dump' -> '/usr/local/sbin/mmm_get_dump'...Ok!
Creating symlink: '/usr/local/mmm/sbin/mmmd_agent' -> '/usr/local/sbin/mmmd_agent'...Ok!
Creating symlink: '/usr/local/mmm/sbin/mmm_clone' -> '/usr/local/sbin/mmm_clone'...Ok!
Creating symlink: '/usr/local/mmm/sbin/mmm_backup' -> '/usr/local/sbin/mmm_backup'...Ok!
Creating symlink: '/usr/local/mmm/sbin/mmm_control' -> '/usr/local/sbin/mmm_control'...Ok!
Creating symlink: '/usr/local/mmm/sbin/mmmd_mon' -> '/usr/local/sbin/mmmd_mon'...Ok!
Creating symlink: '/usr/local/mmm/sbin/mmm_restore' -> '/usr/local/sbin/mmm_restore'...Ok!
Creating symlink: '/usr/local/mmm/sbin/mmmd_angel' -> '/usr/local/sbin/mmmd_angel'...Ok!
Creating symlink: '/usr/local/mmm/man/man1/mmmd_agent.1' -> '/usr/local/man/man1/mmmd_agent.1'...Ok!
Creating symlink: '/usr/local/mmm/man/man1/mmmd_mon.1' -> '/usr/local/man/man1/mmmd_mon.1'...Ok!
Creating symlink: '/usr/local/mmm/man/man1/mmm_control.1' -> '/usr/local/man/man1/mmm_control.1'...Ok!
Installation is done!
</pre>

After re-reading Alexey's comment, and perusing the code, I'm thinking now that without the LVM part of MMM, it is a replication monitoring system. So I would still need some way to setup and start new replication nodes. I probably should consider using LVM - from the looks of it, this is a pretty sweet program for managing MySQL replication! I've tried LVM before and found it very useful, though I've never used its snapshot capabilities.

UPDATE December 3, 2007: Stuff I learned today:

* MySQL replication is much easier when you replicate all the databases from one server, rather than mixing and matching.
* You can't have multiple replicants with the same server_id, I was getting the following error:

<pre class="sh_sh">
Slave: received end packet from server, apparent master shutdown
</pre>

* With debian, if you do replicate all the databases from a server, the replicated servers need to have copies of the /etc/mysql/debian.cnf file for debian's maintenance scripts.

¥

