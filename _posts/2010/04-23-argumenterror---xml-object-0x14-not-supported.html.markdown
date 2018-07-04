---
title: ArgumentError XML object 0x14 not supported
date: 2010-04-23
tags: errors,ruby,unicorn
---
I'm getting this odd error from Unicorn....

<pre class="sh_sh">
ArgumentError - XML object #0x14 not supported
</pre>

For whatever reason, I had set my XML content to be a symbol. Doh!

<pre class="sh_ruby">
xml = :'&lt;root />'
</pre>

