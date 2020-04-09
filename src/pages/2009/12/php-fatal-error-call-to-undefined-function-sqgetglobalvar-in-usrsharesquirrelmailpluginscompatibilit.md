---
title: PHP Fatal error Call to undefined function sqgetGlobalVar in usr share squirrelmail plugins compatibility includes 1.5.2 global.php on line 999
comments:
  - author: james@drwotson.co.uk
    email: james@drwotson.co.uk
    date: 08/12/2010 01:14:29 PM
    text: >
      I am having this exact issue, can you please tell me where i add your code to fix this issue ?<br/><br/>Thanks!
  - author: Albert
    date: 08/12/2010 01:36:31 PM
    text: >
      Hi Scott, on my debian machine the courier_vacation options file is:<br/><br/>/usr/share/squirrelmail/plugins/courier_vacation/options.php<br/><br/>Hope that helps! Good luck!
  - author: Sa.W
    email: epsilon@unixos.eu
    date: 08/22/2010 02:15:54 PM
    text: >
      Hi Scott,<br/><br/>works very well. Please annotate that the user hast to modify<br/><pre><br/>      ...<br/>      include_once ('../src/validate.php');<br/>      ...<br/>      include_once ('../src/load_prefs.php');<br/></pre><br/>to<br/><pre><br/>      ...<br/>      include_once ('../include/validate.php');<br/>      ...<br/>      include_once ('../include/load_prefs.php');<br/></pre><br/><br/>Thank you!
date: 2009-12-17
tags: squirrelmail,webmail
---
Just fixed a SquirrelMail installation. I guess the latest SquirrelMail update on Debian caused some conflicts between the courier_vacation plugin and the compatibility plugin.

I edited the courier vacation options file:

<pre class="sh_php">
/*
   if (defined('SM_PATH'))
      include_once(SM_PATH . 'plugins/compatibility/functions.php');
   else if (file_exists('../plugins/compatibility/functions.php'))
      include_once('../plugins/compatibility/functions.php');
   else if (file_exists('./plugins/compatibility/functions.php'))
      include_once('./plugins/compatibility/functions.php');
*/
//   if (compatibility_check_sm_version(1, 3))
   if (1==2)
   {
      include_once (SM_PATH . 'include/validate.php');
      include_once (SM_PATH . 'functions/page_header.php');
      include_once (SM_PATH . 'include/load_prefs.php');
      include_once (SM_PATH . 'plugins/courier_vacation/config.php');
   }
   else
   {
      include_once ('../include/validate.php');
      include_once ('../functions/page_header.php');
      include_once ('../include/load_prefs.php');
      include_once ('../plugins/courier_vacation/config.php');
   }
</pre>

On my debian machine, the file is located here:

/usr/share/squirrelmail/plugins/courier_vacation/options.php

SquirrelMail isn't a perfect webmail system, but its the one that I use. And the courier vacation plugin is actually pretty good, as well as the change password plugin.

Now that I think of it, I'm going to setup some Git repositories of SquirrelMail.

¥

