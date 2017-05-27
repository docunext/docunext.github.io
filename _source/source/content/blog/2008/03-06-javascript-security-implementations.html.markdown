---
title: Javascript Security Implementations
date: 2008-03-06
tags: javascript,security
---
Analysis and my personal, tentative conclusions:

* hmac-md5 / hmac-sha is good, but not entirely portable across services / protocols, AFAIK
* http digest is good, but has the same problem
* crypt-md5 is popular, but not very efficient, and probably not suitable for client-side javascript implementation (same with crypt-blowfish)
* RSA is a possible solution, and public / private keys could be generated and regenerated at random, and would withstand password updates initiated by the user through various channels
* Storing multiple password hash formats in a database is another option, though updates to the password would require a special mechanism
* I like unix / linux user management because it goes through extensive scrutiny, therefore I like the idea of extending off of some form of ldap, nss, and pam
* I don't think its a good idea for all services to use the same credentials, though it might be helpful for them all to be tied to same user entity - for example, I'd mind much less if my jabber credentials were compromised than if one of my shell accounts were compromised

