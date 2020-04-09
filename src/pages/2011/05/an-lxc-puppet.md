---
title: A GNU Debian LXC Puppet
date: 2011-05-22
tags: lxc
---
As a continuation to my post on setting up [Rails 3 apps via RVM, CentOS on OpenVZ, Mastered by Puppet](http://www.docunext.com/2011/04/rails-3-apps-via-rvm-centos-on-openvz-defined-by-puppet/), this is an entry about doing something similar with [LXC](http://www.docunext.com/).

I will first mention that the networking configuration I'm using is sub-optimal. I've setup lxc on my notebook which uses wireless, and bridging doesn't like it (in fact, it surprisingly appears that recent updates to the linux kernel do not support bridging with wireless devices). See the [Docunext wiki page about LXC for more information about my LXC networking configuration, as well as building the container itself](http://www.docunext.com/).

After installing RVM in the container and using it to download, configure, compile, and install Ruby 1.9.2, I then proceeded to use apt-get to install Puppet.

<pre class="terminal">
apt-get install puppet
</pre>

That went fine, but when I tried to check <tt>syslog</tt> for details, I realized I don't have a syslogger installed yet. Right - lxc-create installs a minimal debian system. I try to install rsyslog:

<pre class="terminal">
apt-get install rsyslog
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following extra packages will be installed:
  cron exim4 exim4-base exim4-config exim4-daemon-light heirloom-mailx liblockfile1 libpcre3 lockfile-progs logrotate
Suggested packages:
  anacron checksecurity mail-reader eximon4 exim4-doc-html exim4-doc-info spf-tools-perl swaks rsyslog-mysql rsyslog-pgsql rsyslog-doc rsyslog-gnutls rsyslog-gssapi
  rsyslog-relp
Recommended packages:
  mailx
The following NEW packages will be installed:
  cron exim4 exim4-base exim4-config exim4-daemon-light heirloom-mailx liblockfile1 libpcre3 lockfile-progs logrotate rsyslog
0 upgraded, 11 newly installed, 0 to remove and 0 not upgraded.
Need to get 3031 kB of archives.
After this operation, 6713 kB of additional disk space will be used.
Do you want to continue [Y/n]? n
Abort.
</pre>

Argh. It wants to install exim4. For this container I'd like to use nullmailer:

<pre class="terminal">
apt-get install nullmailer
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following extra packages will be installed:
  klogd sysklogd
The following NEW packages will be installed:
  klogd nullmailer sysklogd
0 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.
Need to get 196 kB of archives.
After this operation, 762 kB of additional disk space will be used.
Do you want to continue [Y/n]? n
Abort.
</pre>

Wait! That wants to install klogd. Ugh. OK, let's try again:

<pre class="terminal">
apt-get install nullmailer rsyslog
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following extra packages will be installed:
  cron heirloom-mailx liblockfile1 lockfile-progs logrotate
Suggested packages:
  anacron checksecurity rsyslog-mysql rsyslog-pgsql rsyslog-doc rsyslog-gnutls rsyslog-gssapi rsyslog-relp
Recommended packages:
  exim4 postfix mail-transport-agent mailx sysklogd system-log-daemon
The following NEW packages will be installed:
  cron heirloom-mailx liblockfile1 lockfile-progs logrotate nullmailer rsyslog
0 upgraded, 7 newly installed, 0 to remove and 0 not upgraded.
Need to get 861 kB of archives.
After this operation, 2478 kB of additional disk space will be used.
Do you want to continue [Y/n]?
</pre>

**YES!** I am so glad that apt has super cow powers, aren't you?

