---
title: GEM HOME gem path ruby gems path gem push
date: 2010-03-26
tags: gems,ruby,ruby 1.9
---
I know. The title of this post is vague. I'm grumpy because "gem push" to rubygems.org is not working for me.

If I try this:

<pre class="sh_sh">
gem1.9.1 push ...
</pre>

I get an unknown error command.

<pre class="sh_sh">
ERROR:  While executing gem ... (RuntimeError)
    Unknown command push
</pre>

Huh!??!?! I'm trying an update of my installed rubygems. I also think its time to purge my system of Ruby 1.8.

Well, maybe not. Looks like 1.8 works now that I've installed libopenssl-ruby1.8:

<pre class="sh_sh">
$ sudo apt-get install libopenssl-ruby1.8
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following extra packages will be installed:
  libssl-dev libssl0.9.8
The following NEW packages will be installed:
  libopenssl-ruby1.8
The following packages will be upgraded:
  libssl-dev libssl0.9.8
2 upgraded, 1 newly installed, 0 to remove and 350 not upgraded.
Need to get 5,566kB of archives.
After this operation, 709kB of additional disk space will be used.
Do you want to continue [Y/n]?
Get:1 http://ftp.debian.org squeeze/main libssl-dev 0.9.8m-2 [2,155kB]
Get:2 http://ftp.debian.org squeeze/main libssl0.9.8 0.9.8m-2 [3,020kB]
Get:3 http://ftp.debian.org sid/main libopenssl-ruby1.8 1.8.7.249-2 [391kB]
Fetched 5,566kB in 40s (138kB/s)
Preconfiguring packages ...
(Reading database ... 109200 files and directories currently installed.)
Preparing to replace libssl-dev 0.9.8k-8 (using .../libssl-dev_0.9.8m-2_i386.deb) ...
Unpacking replacement libssl-dev ...
Preparing to replace libssl0.9.8 0.9.8k-8 (using .../libssl0.9.8_0.9.8m-2_i386.deb) ...
Unpacking replacement libssl0.9.8 ...
Selecting previously deselected package libopenssl-ruby1.8.
Unpacking libopenssl-ruby1.8 (from .../libopenssl-ruby1.8_1.8.7.249-2_i386.deb) ...
Processing triggers for man-db ...
Setting up libssl0.9.8 (0.9.8m-2) ...
Setting up libssl-dev (0.9.8m-2) ...
Setting up libopenssl-ruby1.8 (1.8.7.249-2) ...
localepurge: Disk space freed in /usr/share/locale: 0 KiB
localepurge: Disk space freed in /usr/share/man: 0 KiB
Total disk space freed by localepurge: 0 KiB
</pre>

Still won't work with gem1.9.1!!

Aha, I think I figured it out. For some reason, even though recent releases of gemcutter, like 0.5.0 require rubygems 1.3.6, I only have rubygems 1.3.5. Debian won't allow a --system upgrade.

Aha!

<pre class="sh_sh">
gem install gemcutter -v 0.4.0
ERROR:  Error installing gemcutter:
	gemcutter requires RubyGems version >= 1.3.6
</pre>

Alas, debian squeeze just doesn't have 1.3.6, so I've installed rubygems-update and ran /var/lib/gems/1.9.1/bin/update_rubygems.

Uh-oh!

<http://help.rubygems.org/discussions/problems/78-no-such-file-to-load-rubygemscommandsmigrate>

To revert from this, I deleted /usr/lib/ruby1.9.1/gems/1.9.1/gems/gemcutter-0.5.0/ and uninstalled the debian rubygems1.9.1 package and then installed it again.

Ugh. That didn't do it either, I needed to do this, too:

<pre class="sh_sh">
rm -rf /usr/local/lib/site_ruby/1.9.1/
</pre>

After all that, I again tried installing gemcutter and in went ahead and installed 0.5.0. That's clearly not compatible with rubygems 1.3.5 so it just shouldn't install.

So, indeed, if I want to use "gem push", it appears I have to keep ruby 1.8.

More information:
* <http://pkg-ruby-extras.alioth.debian.org/upstream-devs.html>

