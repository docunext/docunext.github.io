---
title: SQL Ledger Debian
comments:
  - author: Chris Travers
    email: chris@metatrontech.com
    url: http://www.metatrontech.com
    date: 05/16/2007 01:45:23 AM
    text: >
      Hi;<br/><br/>SQL-Ledger does not work with mod_perl.   Nor at the moment do any of the forks.<br/><br/>I am a founding member of LedgerSMB, a fork of SQL-Ledger designed to add better security and data integrity.  We release Debian packages. And I am somewhat in touch with our efforts to get LSMB running under mod_perl.  We expect to have mod_perl supported properly somewhere around 2.0 (maybe 1-2 years off).<br/><br/>Having said this, it *is* possible to get SQL-Ledger or LedgerSMB running with minimal mod_perl support.  It is not easy nor is it something we support, but one person on our core team has done this as a proof of concept.<br/><br/>Best Wishes,<br/>Chris Travers<br/>LedgerSMB core team.
  - author: admin
    date: 05/16/2007 02:09:25 PM
    text: >
      Thanks for commenting Chris. So instead of mod_perl, I should just use a cgi handler to pass the perl calls to /usr/bin/perl or something?<br/><br/>I just visited your website - looks cool I'll definitely try to install it soon. If you have a moment, check out <a href="http://www.pbooks.org" rel="nofollow">http://www.pbooks.org</a> which is a new PHP-based accounting package I'm working on. Its not open source yet but will be soon.
date: 2007-05-15
tags: none
author: Albert Lash
---
Installing SQL-Ledger on debian for use with apache2:

<ul><li>apt-get install sql-ledger</li><li>apt-get install libapache2-mod-perl2</li><li>Can't get .pl files to execute.</li></ul>

Grrrr.

¥

