---
title: Wishlist Network LDAP Based Configuration
comments:
  - author: Vidar
    email: vidar@hokstad.com
    ip: 82.70.200.181
    url: http://www.hokstad.com/
    date: 02/13/2008 04:36:26 AM
    text: >
      There IS something like that in LDAP. It's called LDAP. Seriously, LDAP can store any data you want to put in it. The problem is that writing LDAP schemas is painful and most people aren't running LDAP servers in the first place. Franky I like the schema-less nature of NIS(+) better, but NIS is a whole other can of worms.<br/><br/>The problem isn't finding a way of storing it - there are tons of protocols that could be co-opted for that. The problem is that support for it would need to be standard (as in "available almost everywhere" standard) or application developer won't bother adding support for it when they can always rely on files being available.<br/><br/>Therein lies the rub. But you can always rsync your configuration data to/from a central server - that reduces the problem to common expectations of the directories to store config data in and/or filename patterns.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 02/13/2008 12:22:48 PM
    text: >
      Hi Vidar, thanks for commenting. I'm also thinking about using NFS to mount my home directory - in which I'll only keep minimal settings, and then mount additional directories on top of that which store the heavy files, like my maildir and my documents. I use SVN to synchronize my heavier documents across multiple computers.<br/><br/>Next question - how could this get combined with an encrypted home?
date: 2008-02-12
tags: jedit,ldap,network
---
Its been at the top of my wish list for awhile - a standard method for configuring applications! Wouldn't it be nice if there was something like this in LDAP?

I'm setting up my jEdit preferences <em>again</em> and I'm just wondering why I can connect to a server and download my settings in 2 seconds flat. Hmmm.

¥

