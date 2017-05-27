---
title: Upgrading MediaWiki
date: 2007-11-13
tags: errors,mediawiki,mysql,php,updates
---
Today I'm updating my MediaWiki databases from 1.7 to 1.10. The process is fairly painless, just go to maintenance/ and issue "php update.php". I had to make sure my AdminSettings.php and LocalSettings.php files were in order though.

You'll have to upgrade if you get this error:

<pre class="sh_sh">
MySQL returned error "1054: Unknown column 'user_editcount' in 'field list' (...)".
</pre>

