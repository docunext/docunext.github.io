---
title: Debconf LDAP Backend
date: 2008-04-26
tags: debian,ldap
---
Awhile back, I wrote about wanting a <a href="http://www.docunext.com/blog/2008/02/wishlist-network-based-configuration.html">method to use LDAP to store configuration files</a>, so I was really pleased when I read that there is an experimental backend for debconf which uses LDAP.

I *have* to try this out!

While I was reading up on debconf, I also noticed that there is a web interface frontend for it. And since its easy to try out, I did. I reconfigured proftpd as I knew it had an easy configuration process (one question whether to use inetd or run standalone). As explained in the debconf docs, the shell provides a url, which I loaded in elinks and was able to reconfigure proftpd.

Debconf is a sweet program, I can tell already. I fear it uses a lot of bash to do its thing though - maybe xsl can fit in there somehow.

#### Other LDAP Stuff

**libapache2-mod-vhost-ldap** looks great - it can be used with the threaded, worker apache2 mpm. I am currently using mod_rewrite to power virtual hosts, but something like ldap might be a better choice for easier and faster management.

And that's not all - most of my othe favorite packages have ldap interfaces.
