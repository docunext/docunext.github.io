---
title: libnss mysql documentation
date: 2006-10-28
---
<p>If you have many machines that have the same set of users on them, it doesn't make sense to have user identity information on each of them. How can you unify this information? There are two ways I know of (I am sure there are more): LDAP and libnss-mysql.</p>
<p>In this tutorial I will talk about libnss-mysql.</p>
<p>Using libnss-mysql to authenticate linux shell users is easy! Just install libnss-mysql, then add mysql to /etc/nsswitch.conf. You will need to edit the nss-mysql.conf and nss-mysql-root.conf files to match your database. We use a custom database schema, but you can use the one that comes with the package.</p>
<p>But how do you link all the machines to use the same database? We use stunnel. In this situation, there is a tricky workaround for getting it to work, see stunnel documentation<a class="" href="https://www.savonix.com/acc/nxwiki/new/stunnel%20documentation">?</a> for more information.</p>
<p><strong>Related Links:</strong>

<a href="http://libnss-mysql.sourceforge.net/" onclick="window.open(this.href, '_blank'); return false;">http://libnss-mysql.sourceforge.net/</a></p>
<p>PAM!

I finally got apache2 and pam to connect to mysql. Took long enough! Ugh. I did learn a bunch though: namely pam is a good thing!

I ran into this error and had a difficult time squashing it:

couldn't check access.  No groups file? - ARGH. Probably a module missing.</p>
<p><a href="http://pam-mysql.cvs.sourceforge.net/pam-mysql/pam_mysql/Readme?revision=1.1.4.9&amp;view=markup" onclick="window.open(this.href, '_blank'); return false;">http://pam-mysql.cvs.sourceforge.net/pam-mysql/pam_mysql/Readme?revision=1.1.4.9&amp;view=markup</a>

<a href="http://pam.sourceforge.net/mod_auth_pam/faq.html" onclick="window.open(this.href, '_blank'); return false;">http://pam.sourceforge.net/mod_auth_pam/faq.html</a>

<a href="http://www.ma.utexas.edu/users/stirling/computergeek/mysqluser.html" onclick="window.open(this.href, '_blank'); return false;">http://www.ma.utexas.edu/users/stirling/computergeek/mysqluser.html</a>

<a href="http://www.weltraumsofa.de/pam_mysql/doku_pamnssmysql_jh_en.pdf" onclick="window.open(this.href, '_blank'); return false;">http://www.weltraumsofa.de/pam_mysql/doku_pamnssmysql_jh_en.pdf</a>

<a href="http://www.jameslinden.com/2006-04-12/pam_mysql-07rc1/" onclick="window.open(this.href, '_blank'); return false;">http://www.jameslinden.com/2006-04-12/pam_mysql-07rc1/</a></p>

