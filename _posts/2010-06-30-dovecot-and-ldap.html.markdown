---
title: Dovecot and LDAP
date: 2010-06-30
tags: courier,dovecot,ldap,openvz
---
I'm really itching to switch from Courier to Dovecot for IMAP access. While I'm at it, I'm planning to phase out POP3.

Instead of MySQL, I want to use LDAP - its lighter and simpler and just as easy to replicate.

I'll continue to use Postfix; and that way I can migrate from CDB to LDAP too.

My plan to switch to Dovecot will likely go like this:

1. Setup a new openvz container
2. Install dovecot and configure it
3. Setup LDAP
4. Migrate my mail directories
5. Re-route my incoming email

I've done this before so it shouldn't be too bad.

UPDATE: I've done it! Most of my notes are over at the Docunext Wiki, so check 'em out:

* [Dovecot](http://www.docunext.com/wiki/Dovecot)

