---
title: OpenLDAP with backsql and MySQL
date: 2009-07-06
---
OpenLDAP is a popular open source LDAP server. It is available on Debian and I use it for storing and distributing user information.

I've had a tough time administering the data in the directory though. I use phpLDAPAdmin, and although it works, I find it pretty slow and generally bloated.

This is now, but several years ago when I first tried out slapd (the OpenLDAP server), I wanted to use MySQL as the backend. Although I managed to set it up on a gentoo server, I never ended up using it.

I just tried setting it up again on a debian server and got it function! It was a lot of fun to setup and I'm excited by the results, however I'm still on the fence as to whether I want to use the server in a production environment just yet.

Lately I've been very pleased with the general reliability of "flat static files". As such, I find myself managing data in a MySQL database, then exporting it to a static file. I could do the same with user data, either to passwd/group/shadow files or to LDIF (LDAP import/export format) files.

I really like that concept - managing data in a relational database, and exporting it out to static files for production use. One major issue comes with sensitive data such as passwords. Passwords may need to be in different and potentially conflicting formats for different consumers. For example, many applications can use the crypt-md5 method, but others may prefer hmac-md5 / cram-md5. Would it be better to store both versions?

Links:

<ul><li><a href="http://www.docunext.com/">BackSQL at Docunext</a></li></ul>

