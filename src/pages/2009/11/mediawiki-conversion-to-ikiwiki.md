---
title: MediaWiki Conversion to Ikiwiki
date: 2009-11-14
tags: ikiwiki,mediawiki
---
I'm converting the Green Computing wiki to Ikiwiki.

<pre class="sh_sh">cat blah2 | awk '{print $1, $1}' | sed -r "s/([^ ]+)$/\L\1/"  | sed -r "s/(\ [^\(]+)\(/\1__40__/" | sed -r "s/(\ [^\)]+)\)/\1__41__/" | awk '{ print "wget -q \"http://www.docunext.com/.php?title=" $1 "&action=raw\" -O " $2 ".mdwn" }'
</pre>

UPDATE: This ended up working out OK. I based my efforts off the [tips at the ikiwiki site](http://ikiwiki.info/tips/convert_mediawiki_to_ikiwiki/). I'm refraining from using the MediaWiki markup plugin, and instead converting everything to markdown, which by the way I'm become a very big fan of. I still keep meaning to put [discount](http://www.docunext.com/) into place!

More information:

* <http://www.docunext.com/#Wiki_Conversions>

