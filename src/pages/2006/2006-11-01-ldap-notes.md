---
title: LDAP Notes
date: 2006-11-01
tags: none
author: Albert Lash
---
<p>Wow LDAP is confusing. To boot, I'm using LDAP with a MySQL back-end. I may try an LDAP server with a standard back end too, just to see if it is any different.</p>
<p>I also bought LDAP System Adminstration to see if that helps out at all.</p>
<p><strong>Basic installation of slapd on Debian</strong>:</p><ol>    <li>apt-get install slapd ldap-utils</li>    <li>Agree to the suggestions</li>    <li>Test with ldapsearch returns nothing, test with ldapsearch and base reference returns some basic stuff.</li>    <li>Insert some data with ldapadd from a basic ldif file</li></ol><p>Can't seem to authenticate from Mac OS X, it keeps searching for a dn with cd=cram-md5 or something. Argh. Trying out libpam_ldap to see if I can learn anything there. It appears that slapd defaults to sasl if it can't get the pw from the database. Hmmmm.</p>
<p>Authentication is a pain! First you need to authenticate to the ldap server, then you need to authenticate to the machine. Confusing, yes.

I keep getting this error:

<pre>
Error: unable to open Berkeley db </pre></p>

<pre>
ldapsearch -x -ZZ -h hostname.com -b &quot;&quot; -s base -LLL supportedSASLMechanisms</pre><p>But I don't want to connect to berkleydb. I want to connect to pam_mysql.

<a href="http://www.web-cyradm.org/pipermail/web-cyradm/2004-November/017985.html" onclick="window.open(this.href, '_blank'); return false;">http://www.web-cyradm.org/pipermail/web-cyradm/2004-November/017985.html</a></p>
<p>Force sasl to ignore other modules:

<a href="http://www.sendmail.org/~ca/email/cyrus2/options.html" onclick="window.open(this.href, '_blank'); return false;">http://www.sendmail.org/~ca/email/cyrus2/options.html</a></p>
<p>OK, so its a Cyrus Sasl error really, and I don't want to go round about to pam, I just want to authenticate with sasl to the ldap directory. Ugh.</p>
<p>FINALLY! Special thanks goes to: <a href="http://www.jimmy.co.at/weblog/?p=52" onclick="window.open(this.href, '_blank'); return false;">http://www.jimmy.co.at/weblog/?p=52</a> who reminded me that the sasl socket is owned by the sasl group, because postfix runs in its own jail. Since openldap does too, I had to add it to the sasl database! No more:

<pre>
Failure: cannot connect to saslauthd server: Permission denied</pre></p>
<p>Now I can authenticate to the ldap server using data WITHIN its back-end. Now that I understand it a little better, its awesome. Next up: remote authentication, indexing, and replication!</p>
<p>AWESOME! I am now able to authenticate to the LDAP server from Mac OS X! Now that most everything is working, I'd like to revisit the process and document it properly. So far, these are the components I'm working with:</p>

<ul>    <li>Linux: OpenLdap slapd, Back-sql mysql, Cyrus SASL</li>    <li>Mac: Directory Access, Address Book (for testing purposes) - N.B. - I changed all the connection and query timeouts to much less than 120 (I use 10) so that testing is easier. </li></ul><p>I also noticed something very strange about my ldap administration book, on page 59, the content shifts to another book about hardware! Here's what I sent to Amazon:

The book is printed incorrectly, about half the book is from some other book, talking about computer architecture. Two chapters are missing. It goes from page 60, to 59, and then on page 106, it skips to page 109. Very strange. Please just send a replacement. Thanks.</p><hr /><p><strong>External References</strong>:</p>

<ul>    <li><a href="http://www.openldap.org/doc/admin23/" onclick="window.open(this.href, '_blank'); return false;">http://www.openldap.org/doc/admin23/</a></li>    <li><a href="http://aqua.subnet.at/~max/ldap/" onclick="window.open(this.href, '_blank'); return false;">http://aqua.subnet.at/~max/ldap/</a></li>    <li><a href="http://linsec.ca/usermgmt/openldap.php" onclick="window.open(this.href, '_blank'); return false;">http://linsec.ca/usermgmt/openldap.php</a> - this looks helpful. </li></ul>
