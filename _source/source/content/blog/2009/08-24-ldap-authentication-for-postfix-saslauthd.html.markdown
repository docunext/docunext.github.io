---
title: LDAP Authentication for Postfix Saslauthd
date: 2009-08-24
tags: authentication,dovecot,ldap,postfix,sasl,tls
---
Awhile back I pondered the idea of having multiple distributed, replicated, isolated outgoing smtp servers. My idea was to use the following packages:

* Postfix for sending the mail
* Saslauthd for authentication senders
* Dovecot for providing the authentication mechanisms for saslauthd

I tested it out and it worked, but I never got around to implementing it.

Today I tried setting up the same solution with LDAP as the authentication mechanism for saslauthd and it worked great! Its nice to have options. Here are some links to my notes on the subject:

* <a href="http://www.docunext.com/wiki/LDAP_TLS">LDAP TLS</a>
* <a href="http://www.docunext.com/wiki/SASL">SASL</a>

Its great that LDAP and SASL can communicate using TLS. Currently and for some time I've used the "remote imap" server authentication capability of saslauthd. That has worked really well, but I'm wary to distribute a setup like this over too wide a scope unless the authentication connections are encrypted. I am not sure if the rimap connection can be done over tls / ssl, but I know for a fact that LDAP connections can be done securely.

