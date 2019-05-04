---
title: Docunext MediaWiki Requires Login
date: 2007-07-23
---
In a preemptive strike against wiki spammers, our docunext wiki now requires a login. Chances are I'll be the only one editing it anyway! :-)

If you haven't visited it before, you can find it here: <a href="http://www.docunext.com/resources/mediawiki/index.php/Main_Page">Docunext Tech Stuff Wiki</a>

Kudos to <a href="http://nanofortnight.org/Current_events">Nanofortnight.org</a> for helping me figure out how to set this up by adding the following to LocalSettings.php:

<pre>// Require login to edit$wgGroupPermissions['*']['edit'] = false;</pre>

