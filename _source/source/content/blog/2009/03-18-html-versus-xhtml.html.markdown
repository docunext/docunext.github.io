---
title: HTML versus XHTML
date: 2009-03-18
tags: html,xhtml
---
Internet Explorer doesn't support XHTML strict? What a surprise. *SARCASM*!

I've given up! After getting very annoyed with document.write and the vast numbers of web users who still use Internet Explorer, I've decided to only use XHTML on private web applications, and continue using HTML for public web applications and pages (like <a href="http://www.phunkybb.com/">phunkybb</a>). Lame, yes. Practical, yes. Ideal, no.

This might help too though:

<a href="http://www.ibm.com/developerworks/xml/library/x-tipapachexhtml/" rel="nofollow">http://www.ibm.com/developerworks/xml/library/x-tipapachexhtml/</a>

And this for PHP:

<pre class="sh_php">
if(strstr($_SERVER['HTTP_USER_AGENT'],"MSIE")) {    ini_set('default_mimetype','text/html');} else {    ini_set('default_mimetype','application/xhtml+xml');}
</pre>

