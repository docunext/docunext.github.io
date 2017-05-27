---
title: Mod Rewrite and RewriteMap
date: 2007-09-02
tags: apache,mod_rewrite,php
---
The new RewriteMap feature of mod_rewrite by Ralf is pretty awesome. To learn more about it, I rewrote the perl example provided on the site in php:

<pre class="sh_php">
#!/usr/bin/php5
&lt;?php
//print_r($_SERVER);
//while($stdin=fopen('php://stdin','r')) {
if($stdin=fopen('php://stdin','r')) {
$mystr = fgets($stdin,100);
echo "www.".$mystr;
fclose($stdin);
}
?>
</pre>

I also tried the DBM hash capability. That looks interesting, but for manageability, I'm going to use MySQL instead. Its so much easier to backup, propagate, and update.

Following <a href="http://www.onlamp.com/pub/a/apache/2005/04/28/apacheckbk.html" rel="nofollow">this</a>

article, I tried connecting to a db, but I'm having no luck with RewriteCond. I'm trying to set the default to "nomatch" when there is no match by returning NULL from the perl script. However, it keeps trying to redirect to a null value: http://. Grr.

Ah OK, instead of trying to use a default value in the RewriteCond, I'm just returning the value of "nomatch\n" when nothing is found in the database. Cool. Still needs more testing!

