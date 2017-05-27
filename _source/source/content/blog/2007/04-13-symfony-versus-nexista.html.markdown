---
title: Symfony versus Nexista
date: 2007-04-13
tags: none
author: Albert Lash
---
Symfony is a lot more like Nexista than I originally thought. I use the following web directory structure right under the web server directory root:

<pre>
build/

conf/

htdocs/

logs/

php/

tmp/

usr/

xml/

xsl/</pre>

while symfony uses this layout:

<pre>apps/  frontend/  backend/

batch/

cache/

config/

data/  sql/

doc/

lib/  model/

log/

plugins/

test/  unit/  functional/

web/  css/  images/  js/  uploads/</pre>

Doesn't seem to support xsl, which is too bad.

