---
title: Managing email lists
date: 2009-08-13
tags: scripts
---
I find these shell commands quite helpful for managing email lists:

<pre class="sh_sh">
cd /var/spool/postfix/defer
cat */* | grep timed | grep -v reason | awk '{ print "UPDATE `fans`.`fans` SET `fan_email_valid` = '-1', `fan_modified` = NOW() WHERE `fans`.`fan_email` = \"" $1 "\" LIMIT 1;" }' | sed -r s/[\&lt;\&gt;:]//g | sort | uniq
grep -r 'No route' ./*&nbsp; | awk '{print $1}' | sed -r "s/....([A-Z0-9]+).+/postsuper -d \1/g" | uniq &gt; ../runme
</pre>

Nice, huh?

