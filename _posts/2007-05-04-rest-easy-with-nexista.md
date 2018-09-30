---
title: REST Easy with Nexista
date: 2007-05-04
tags: nexista,php
---
<div id="notice" style="border: 2px; border-color: #FF6699; border-style: solid; background: #FFCCCC; padding: 2px;">SPECIAL NOTE: If you happen upon this page searching for information about Representational State Transfer (REST), please also visit the <a href="http://en.wikipedia.org/wiki/Representational_State_Transfer">wikipedia article on Representational State Transfer (REST) web development architectures</a>. If you know anything about REST, please contribute it to that page. That page needs help! </div>

I previously blogged about my <a href="http://www.docunext.com/blog/2007/04/separating-functionality.html">theories on separation of functionality</a> and how I wanted to setup a RESTful app API methodology in the <a href="http://www.nexista.com/">nexista PHP / XSL / XML framework </a>.

Its now in motion and its working well. Here's some quick updates on the matter:

<ul><li>The requester is a nexista action called curl.action.php and appropriately uses the libcurl client functions to make the request and handle the response.</li><li>It uses the same session as the current accessing browser.</li><li>It takes the following parameters:<ul><li>url</li><li>params (most likely an xpath reference)</li><li>target flow node to store the results</li></ul></li><li>The rawxml.action.php is also used to parse he result into flow as a set of nodes rather than a string. This might be possible within curl.action.php.</li><li>I modified flow.php to add a parameter for requesting an associative array.</li></ul>

Lingering questions: <ol><li>Should only unique parameters be passed? i.e. - should a request contain a duplicate value for the same parameter name: user_id[]=100 and user_id[]=100? I don't think so and I setup curl.action.php to filter dups out.</li><li>Is there a common REST response format? I've seen resource tags used, as well as XLINK attributes, though the <a href="http://en.wikipedia.org/wiki/Representational_State_Transfer">wikipedia article on Representational State Transfer</a> I read was vague on the difference between REST responses and Plain old XML (POX) responses.</li></ol>

In other Nexista news, I hacked my way through adding configurable support for data access entities, aka custom table names and table name prefixes. It still needs some work, but the idea was inspired by the table prefix method used by Wordpress and many other great apps. With Wordpress on debian specifically, I really like how easy it is to create new database table prefixes based upon server name. Here's what I use:

<pre class="sh_php">
&lt;?php
include('shared-config.php');
$specific_site = str_replace('.','',$_SERVER['SERVER_NAME']);
$table_prefix = $specific_site.'_';
?>
</pre>

And shared:

<pre class="sh_php">
&lt;?php
define('DB_NAME', 'mysql');
define('DB_USER', 'myisam');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');
define('CUSTOM_USER_TABLE', 'wp_all_users');
define('CUSTOM_USER_META_TABLE', 'wp_all_usermeta');
$server = DB_HOST;
$loginsql = DB_USER;
$passsql = DB_PASSWORD;
$base = DB_NAME;
?>
</pre>

I'm starting to feel that Nexista is more of a web application framework than a php application framework.

Related:

<a href="http://www.phpwact.org/php/mvc_frameworks" rel="nofollow">PHP Frameworks</a>

