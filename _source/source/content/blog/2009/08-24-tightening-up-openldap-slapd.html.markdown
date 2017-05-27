---
title: Tightening Up OpenLDAP slapd
date: 2009-08-24
tags: ldap,openldap,php,ruby
---
I'm working on LDAP now, and just realized some of the changes I made yesterday made my primary LDAP server too tight.

To be able to login via phpldapadmin, I had to add this to my slapd.conf:

<pre class="sh_sh">access to attrs=entry,cn by anonymous read</pre>

I'm also reading up on Ruby's LDAP extension. Like many ruby libraries, it looks very good!

<b>UPDATE:</b> slapd.conf needed more to it that the above. After adding the above, other users were getting no results for their subtree searches. Access control in slapd.conf depends upon the order in which rules are listed. Additionally, it appears that rules can only be listed once. I've updated the access rules to only allow anonymous access to certain subtrees, read access to everything by a replicating user, and the rest remains the same. I'm specifying the user, but I may use this instead:

<pre class="sh_sh">access to attrs=entry,cn by anonymous read</pre>

<b>"SEARCH RESULT tag=101 err=32 nentries=0 text="</b>
That's the error I was getting at first. After switching to loglevel 128 (access control processes), I was able to determine that was the problem.

