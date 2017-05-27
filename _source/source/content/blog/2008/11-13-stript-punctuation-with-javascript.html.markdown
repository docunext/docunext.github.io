---
title: Strip Punctuation with Javascript
date: 2008-11-13
tags: none
author: Albert Lash
---
This one had me bugged for awhile... and to be more specific, I also wanted to change spaces to underscores and convert the text to lowercase. Why? For pretty urls of course!

<pre lang="javascript"><script type="text/javascript">

function copyValue(field1,field2){  document.getElementById(field2).value=document.getElementById(field1).value.replace(/[ ]+/g,'_').replace(/[\W]+/g,'').toLowerCase();}</script></pre>

