---
title: Ming Shape and Bitmap Image
date: 2007-01-10
tags: none
author: Albert Lash
---
<p><a href="http://www.docunext.com/2007/01/10/ming-examples/">SWF output of this ming php code</a></p>

<pre><span style="color: #000000"><span style="color: #0000BB">&lt;?php


function </span><span style="color: #0000BB">get_content</span><span style="color: #007700">(</span><span style="color: #0000BB">$url</span><span style="color: #007700">){   </span><span style="color: #0000BB">$ch </span><span style="color: #007700">= </span><span style="color: #0000BB">curl_init</span><span style="color: #007700">();   </span><span style="color: #0000BB">curl_setopt </span><span style="color: #007700">(</span><span style="color: #0000BB">$ch</span><span style="color: #007700">, </span><span style="color: #0000BB">CURLOPT_URL</span><span style="color: #007700">, </span><span style="color: #0000BB">$url</span><span style="color: #007700">);   </span><span style="color: #0000BB">curl_setopt </span><span style="color: #007700">(</span><span style="color: #0000BB">$ch</span><span style="color: #007700">, </span><span style="color: #0000BB">CURLOPT_HEADER</span><span style="color: #007700">, </span><span style="color: #0000BB">0</span><span style="color: #007700">);   </span><span style="color: #0000BB">ob_start</span><span style="color: #007700">();   </span><span style="color: #0000BB">curl_exec </span><span style="color: #007700">(</span><span style="color: #0000BB">$ch</span><span style="color: #007700">);   </span><span style="color: #0000BB">curl_close </span><span style="color: #007700">(</span><span style="color: #0000BB">$ch</span><span style="color: #007700">);   </span><span style="color: #0000BB">$string </span><span style="color: #007700">= </span><span style="color: #0000BB">ob_get_contents</span><span style="color: #007700">();   </span><span style="color: #0000BB">ob_end_clean</span><span style="color: #007700">();   return </span><span style="color: #0000BB">$string</span><span style="color: #007700">;   }</span><span style="color: #0000BB">?&gt;</span></span>
