---
title: New Plans For Email Servicing
date: 2009-10-31
tags: courier,dovecot,imap,spam,ssl,tls
---
I've got some new plans for hosting email services:

* Use Dovecot instead of Courier
* Use Dovecot instead of Perdition
* Only allow SMTP SASL authentication over port 587
* Separate outgoing and incoming SMTP servers
* Phase out the use of POP3
* Phase out the use of IMAP SSL, use TLS instead

And some more questions:

* Combine /etc/postfix/relay-recipients and /etc/postfix/relay-domains?
* Does it make sense to use whitelists?
* Switch to using DSpam instead of Spamassassin for Bayesian analysis?

