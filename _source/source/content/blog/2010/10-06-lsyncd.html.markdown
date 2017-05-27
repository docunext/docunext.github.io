---
title: Lsyncd
date: 2010-10-06
tags: mirrors
---
I'm finally putting lsyncd into production to synchronize web site mirrors. After I work out any kinks, I'll put it to use for some configuration files, too.

#### What is lsyncd?
Its a small piece of software that connects inotify (the file watching component of the linux kernel) with rsync in a very manageable way. More specifically, it enables systems administrators and computer enthusiasts to easily mirror files and directories across multiple servers with ease - and perhaps more importantly - near immediate mirroring speed.

#### How does it work?
Lsyncd works like this:

1. Setup a configuration file which includes:
    * Settings for rsync
    * A set of source and target directories to synchronize (see our wiki page for more information about lsyncd.conf.xml)
2. Run lsyncd

#### To-Do
I don't want to always start lsyncd manually from the command line. In my opinion, it should always be running. I could add an init script, or I could manage it with daemontools. **Which one do you recommend?**

#### Excludes File
Rsync has a great method of excluding files, simply create a list of globs in a file, and then tell rsync about it.

With lsyncd, I use this line:

<pre class="sh_xml"/>
&lt;exclude-from filename="/root/rsync_virtual_tools/constant_excludes" />
</pre>

In it I have these entries:
<pre class="sh_sh">
*.new
*/wiki
svnlog
.git
svnlogs
.ikiwiki
dnu
</pre>

The \*.new file exclusion is important because Movable Type creates an *example.html.new* file as it publishes, and **I just noticed as I first published this entry, lsyncd was transferring, then deleting those files!**

**Yes, its that fast!**

Hmm... still seems to be triggered by the *.new files... so I'll turn off temp files in the mt-config.cgi file:

<pre class="sh_sh">
NoTempFiles 1
</pre>

Yup! That worked. I bet there are plenty of situations where some tweaks are needed.

#### More information:

* [lsyncd](http://www.docunext.com/wiki/Lsyncd)

