---
title: Regex to Flatten CSS Files
date: 2010-02-28
tags: css,jedit,regex
---
<style type="text/css">
tt { border:1px solid #EEEEEE; font-family:courier,mono; font-size:75%; line-height:80%; padding:1px 2px 0; vertical-align:2px; }
</style>
I'm using jEdit to flatten some CSS files.

I search for this: <tt>(;|\{)\n</tt> and replace with this: <tt>$1 </tt> (note the extra space after the $1 substitution.

By "flat", I refer to this:

<pre class="sh_css">
.widget { position:relative; overflow:hidden; width:100%; }
</pre>

instead of this:

<pre class="sh_css">
.widget {
  position:relative;
  overflow:hidden;
  width:100%;
}
</pre>

