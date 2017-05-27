---
title: Nexista XSL error failed to open stream infinite recursion prevented in
date: 2007-04-20
tags: none
author: Albert Lash
---
Getting this error when trying to process xslt in php:

<pre>failed to open stream: infinite recursion prevented in</pre>

Never figured out what was causing it... ...but now its happening again...

I still can't figure out what was wrong, but I think it had something to do with the file not being there. Hmmm.

<pre>
Warning: XSLTProcessor::importStylesheet(svn://main.xsl) [function.XSLTProcessor-importStylesheet]: failed to open stream: infinite recursion prevented in /usr/share/php/nexista/modules/handlers/xsl.handler.php on line 44

Warning: XSLTProcessor::importStylesheet() [function.XSLTProcessor-importStylesheet]: I/O warning : failed to load external entity "svn://main.xsl" in /usr/share/php/nexista/modules/handlers/xsl.handler.php on line 44

Warning: XSLTProcessor::importStylesheet() [function.XSLTProcessor-importStylesheet]: compilation error: file /usr/share/pbooks/apps/auth/templates/xsl/login.xsl line 3 element import in /usr/share/php/nexista/modules/handlers/xsl.handler.php on line 44

Warning: XSLTProcessor::importStylesheet() [function.XSLTProcessor-importStylesheet]: xsl:import : unable to load svn://main.xsl in /usr/share/php/nexista/modules/handlers/xsl.handler.php on line 44

Warning: XSLTProcessor::transformToXml() [function.XSLTProcessor-transformToXml]: No stylesheet associated to this object in /usr/share/php/nexista/modules/handlers/xsl.handler.php on line 46

Exception Trace

Gate:login/

Message:XSL Handler - Error processing XSL file: /usr/share/private-wiki/apps/auth/templates/xsl/login.xsl

Traceback:

Error::init in /usr/share/php/nexista/modules/handlers/xsl.handler.php in line 50

XslHandler->process in /usr/share/private-wiki/cache/192.168.0.3/build/gate-1.php in line 45

require in /usr/share/php/nexista/kernel/init.php in line 416

Init->run in /usr/share/php/nexista/kernel/init.php in line 483

Init->display in /usr/share/private-wiki/web/192.168.0.3.php in line 26

include in /usr/share/private-wiki/web/index.php in line 8</pre>

Turns out this is getting caused by two erroneous settings in the main config file: the xsl path and the link_prefix path.

