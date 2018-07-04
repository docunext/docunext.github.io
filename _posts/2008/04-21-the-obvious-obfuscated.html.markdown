---
title: The Obvious Obfuscated
date: 2008-04-21
tags: apache,compression
---
For me, the most obvious solutions are often highly obfuscated. Its true, common sense is not readily accessible for me. Why? I have no clue, but given the chance, I could probably come up with a very complicated reason why, so let's skip that for now.

The obviousness I'd like to talk about today is /usr/share/doc/. I've often wished I could browse this with Iceweasel - and finally this morning I realized I could, so I am! I made a few adjustments to /etc/apach2/sites-available/default:

<pre class="sh_sh">
ExtFilterDefine gunzip mode=output cmd="/bin/gunzip"
&lt;Files *.gz>
  SetOutputFilter gunzip
&lt;/Files>
Alias /doc/ "/usr/share/doc/"
&lt;Directory "/usr/share/doc/">
  Options Indexes MultiViews FollowSymLinks
  AllowOverride None
  Order deny,allow
  AddType text/plain .gz
  Deny from all
  Allow from 127.0.0.0/255.0.0.0 ::1/128
  Allow from 192.168
&lt;/Directory></pre>

Thanks:

<a href="http://samat.org/weblog/2005/10/06/trying_to_emulate_mod_gunzip_with_apache_2_filters">Emulate mod_gunzip on Apache2</a>

<a href="http://www.innerjoin.org/apache-compression/howto.html#A">Apache compression</a>

