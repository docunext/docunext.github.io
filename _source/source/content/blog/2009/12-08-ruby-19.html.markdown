---
title: Ruby 1.9
date: 2009-12-08
tags: ruby
---
I'm going to make another attempt to try using Ruby 1.9 on Debian.

Its going to power www.labs.docunext.com, and I'm really hoping it works! I've heard great things about the performance increase in Ruby 1.9 from YARV.

<pre class="sh_sh">
apt-get install ruby1.9
The following extra packages will be installed:
  libruby1.9
Suggested packages:
  ruby1.9-examples rdoc1.9 ri1.9 rubygems1.9
The following NEW packages will be installed:
  libruby1.9 ruby1.9
0 upgraded, 2 newly installed, 0 to remove and 445 not upgraded.
Need to get 6371kB of archives.
After this operation, 18.4MB of additional disk space will be used.
Do you want to continue [Y/n]?
Get:1 http://ftp.us.debian.org squeeze/main libruby1.9 1.9.0.5-1 [5850kB]
Get:2 http://ftp.us.debian.org squeeze/main ruby1.9 1.9.0.5-1 [520kB]
Fetched 6371kB in 0s (8609kB/s)
Selecting previously deselected package libruby1.9.
(Reading database ... 57236 files and directories currently installed.)
Unpacking libruby1.9 (from .../libruby1.9_1.9.0.5-1_i386.deb) ...
Selecting previously deselected package ruby1.9.
Unpacking ruby1.9 (from .../ruby1.9_1.9.0.5-1_i386.deb) ...
Processing triggers for man-db ...
Setting up libruby1.9 (1.9.0.5-1) ...
Setting up ruby1.9 (1.9.0.5-1) ...
</pre>

And for gems:
<pre class="sh_sh">
apt-get install rubygems1.9.1
The following NEW packages will be installed:
  irb1.9.1 libreadline-ruby1.9.1 libruby1.9.1 rdoc1.9.1 ruby1.9.1 rubygems1.9.1
0 upgraded, 6 newly installed, 0 to remove and 445 not upgraded.
Need to get 6146kB of archives.
After this operation, 14.7MB of additional disk space will be used.
Do you want to continue [Y/n]?
Get:1 http://ftp.us.debian.org squeeze/main libruby1.9.1 1.9.1.243-2 [3503kB]
Get:2 http://ftp.us.debian.org squeeze/main ruby1.9.1 1.9.1.243-2 [589kB]
Get:3 http://ftp.us.debian.org squeeze/main libreadline-ruby1.9.1 1.9.1.243-2 [571kB]
Get:4 http://ftp.us.debian.org squeeze/main irb1.9.1 1.9.1.243-2 [610kB]
Get:5 http://ftp.us.debian.org squeeze/main rdoc1.9.1 1.9.1.243-2 [682kB]
Get:6 http://ftp.us.debian.org squeeze/main rubygems1.9.1 1.3.5-2 [191kB]
Fetched 6146kB in 0s (7430kB/s)
Selecting previously deselected package libruby1.9.1.
(Reading database ... 57852 files and directories currently installed.)
Unpacking libruby1.9.1 (from .../libruby1.9.1_1.9.1.243-2_i386.deb) ...
Selecting previously deselected package ruby1.9.1.
Unpacking ruby1.9.1 (from .../ruby1.9.1_1.9.1.243-2_i386.deb) ...
Selecting previously deselected package libreadline-ruby1.9.1.
Unpacking libreadline-ruby1.9.1 (from .../libreadline-ruby1.9.1_1.9.1.243-2_i386.deb) ...
Selecting previously deselected package irb1.9.1.
Unpacking irb1.9.1 (from .../irb1.9.1_1.9.1.243-2_all.deb) ...
Selecting previously deselected package rdoc1.9.1.
Unpacking rdoc1.9.1 (from .../rdoc1.9.1_1.9.1.243-2_all.deb) ...
Selecting previously deselected package rubygems1.9.1.
Unpacking rubygems1.9.1 (from .../rubygems1.9.1_1.3.5-2_all.deb) ...
Processing triggers for man-db ...
Setting up libruby1.9.1 (1.9.1.243-2) ...
Setting up ruby1.9.1 (1.9.1.243-2) ...
Setting up libreadline-ruby1.9.1 (1.9.1.243-2) ...
Setting up irb1.9.1 (1.9.1.243-2) ...
Setting up rdoc1.9.1 (1.9.1.243-2) ...
Setting up rubygems1.9.1 (1.3.5-2) ...
</pre>

Also needing ruby1.9.1-dev... and rack for thin.

I'm planning to use gems more than debian packages this time. Also, I'm going to try out Unicorn instead of thin!

