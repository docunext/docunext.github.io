---
title: Mtsend.py
date: 2011-01-01
tags: python
---
I'm using Mysend.py to post messages to Movable Type from the command line. I had to hack up the rpc-xml code within MTOS, but its still worth it.

This is the default template header I'm using:

<pre>
title:
CATEGORY:
tags:
CONVERT BREAKS: markdown_with_smartypants
</pre>

Hopefully it supports the tags option.

UPDATE: It didn't support the TAGS option right out of the box, but with a quick change its now supported. I added this around line 721:

<pre class="sh_python">
  elif key == 'TAGS':
      post['mt_tags'] = val
</pre>

