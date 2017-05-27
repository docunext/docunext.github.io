---
title: Source Code Syntax Highlighting For Fun and Profit
date: 2009-03-05
tags: javascript,"source code",syntax
---
I use wp-syntax for syntax highlighting on Wordpress, but I changed the code to use:

<pre class="sh_html">
&lt;pre class="sh_html">
&lt;/pre>
</pre>

instead of:

<pre class="sh_html">
&lt;pre lang="html">
&lt;/pre>
</pre>

I did this for future xhtml compliance. I also did it for <a href="http://shjs.sourceforge.net/doc/documentation.html" rel="nofollow">shjs</a>, which uses class too. Ultimately I think that syntax highlighting should be a client side process, especially for code snibbets which are embedded in other markup. Complete files are much easier to send through a web server filter (like source-highlighter) for faster processing and cacheable content. Wordpress does some wacky internal formatting and filtering like changing quotes and such, and thankfully wp-syntax avoids all that, so I'm sticking with it for as long as I use Wordpress for rendering output.

I would also like to use &lt;code&gt; tags along with &lt;pre&gt;, but that makes some of my transformations with XSL a little more difficult to use them together. I may end up switching to only using &lt;code&gt; - in that case I'll have a lot of tags to change over!

