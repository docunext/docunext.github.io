---
title: Saslauthd and LDAP
date: 2009-08-23
tags: debian,ldap,sasl,tinyldap
---
I just setup a test saslauthd server which authenticates against an LDAP server. It works wonderfully!

Now I'm wondering about where to go from here. I've previously <a href="http://www.docunext.com/blog/2009/02/tinyldap.html">setup tinyldap on debian</a> and I would really like to continue using that. However, I really don't have the time required to dedicate maintaining that effort over time in a production environment, so I think I'll use openldap / slapd instead.

There are so many LDAP compatible clients:

* Courier
* Dovecot
* Saslauthd
* libnss
* PAM
* Thunderbird / Icedove
* RoundCube
* Djabberd

