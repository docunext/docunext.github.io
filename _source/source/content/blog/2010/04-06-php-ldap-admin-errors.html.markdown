---
title: PHP LDAP Admin Errors
comments:
  - author: turk182
    email: dservellon75@yahoo.es
    ip: 10.10.2.8
    url:
    date: 04/29/2010 11:35:46 AM
    text: >
      Albert, just delete this: "=0"<br/><br/>and restart slapd.<br/><br/>hope this help you, good luck!!
  - author: Albert
    email: albert.lash@savonix.com
    ip: 96.240.136.9
    url:
    date: 05/01/2010 05:46:44 AM
    text: >
      Hi Turk182 - thanks for commenting! I will give it a try and let you know if it works.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 96.240.136.9
    url:
    date: 05/01/2010 09:42:55 AM
    text: >
      Oh yes - I had actually already done that. Worked like a charm!
date: 2010-04-06
tags: errors,ldap,php
---
I'm trying to login to my phpldapadmin installation but I'm getting these errors:

<pre class="sh_sh">
E_STRICT: Declaration of AJAXTree::draw_dn() should be compatible with that of PLMTree::draw_dn()
</pre>

and

<pre class="sh_sh">
error (a:5:{i:0;s:97:"E_STRICT: Declaration of AJAXTree::...&lt;TRUNCATED>)
</pre>

I'm uninstalling it and reinstalling it... that of course didn't help. This did:

* <https://bugs.launchpad.net/ubuntu/+source/phpldapadmin/+bug/446669>

which points to this diff for /usr/share/phpldapadmin/lib/AJAXTree.php:

* <http://launchpadlibrarian.net/33321446/phpldapadmin.diff>

<pre class="sh_diff">
16c16
<       protected function draw_dn($dn,$level=0,$first_child=true,$last_child=true) {
---
>       protected function draw_dn($dn,$level,$first_child=true,$last_child=true) {
</pre>

¥

