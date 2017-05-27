---
title: Blocking Bot Requests with Apache
date: 2006-12-09
tags: none
author: Albert Lash
---
Awhile back I had setup an htaccess file with rules to block "bad bots", but I soon realized it wasn't the best way to set up the service, so I removed it and haven't done it the right way yet. I'm not revisiting that concept and am going to post my notes here.

Here's the type of requests I'm looking to block:

<pre>SetEnvIfNoCase Request_URI "(cmd|root|shell)\.exe(.*)$" bad_bot

SetEnvIfNoCase Request_URI "(admin|httodbc)\.dll(.*)$" bad_bot

SetEnvIfNoCase Request_URI "nsiislog\.dll(.*)$" bad_bot

SetEnvIfNoCase Request_URI "\/\x90\x02" bad_bot

SetEnvIfNoCase Request_URI "^PROPFIND(.*)$" bad_bot</pre>

These requests may be legitimate for some servers, but not the ones I run publicly, so they will get blocked. Now I'm off to search for similar requests, like MSOffice and _vti_bin.

Here's some good leads:

This page suggests redirecting some requests to Microsoft!

<pre>redirect /_vti_bin http://www.microsoft.com

redirect /scripts http://www.microsoft.com

redirect /MSADC http://www.microsoft.com

redirect /c http://www.microsoft.com

redirect /d http://www.microsoft.com

redirect /_mem_bin http://www.microsoft.com

redirect /msadc http://www.microsoft.com

RedirectMatch (.*)\cmd.exe$ http://www.microsoft.com$1</pre>

<a href="http://www.htpasswdgenerator.com/apache/htaccess.html">http://www.htpasswdgenerator.com/apache/htaccess.html</a>

These pages as well:

<a href="http://forums.macosxhints.com/showthread.php?t=22371">http://forums.macosxhints.com/showthread.php?t=22371</a>

<a href="http://www.digitlcoup.org/node/21">http://www.digitlcoup.org/node/21</a>

This page suggests redirecting these requests to homeland security:

<pre>RewriteEngine on# RewriteLog "logs/rewrite.log"# RewriteLogLevel 1  RedirectMatch permanent (.*)cmd.exe(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)root.exe(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/_vti_bin\/(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/scripts\/\.\.(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/_mem_bin\/(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/msadc\/(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/MSADC\/(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/c\/winnt\/(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/d\/winnt\/(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/x90\/(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/FormMail(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/Formmail(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/cgi-bin(.*)$ http://www.dhs.gov  RedirectMatch permanent (.*)\/xmlrpc(.*)$ http://www.dhs.gov </pre>

<a href="http://archives.neohapsis.com/archives/openbsd/2006-01/1165.html">http://archives.neohapsis.com/archives/openbsd/2006-01/1165.html</a>

And this page suggests a script using ipfw to block worm requests:

<a href="http://www.macosxhints.com/article.php?story=20020919054738194">http://www.macosxhints.com/article.php?story=20020919054738194</a>

Come to think of it, this is really a job for snort. However, SpamValve from Geek Ramblings looks great!

<a href="http://dougal.gunters.org/">SpamValve Download</a>

Maybe mod_security is appropriate? Actually this looks like the right choice: <a href="http://www.steve.org.uk/Software/mod_ifier/">http://www.steve.org.uk/Software/mod_ifier/</a>, it is included in Debian etch!

