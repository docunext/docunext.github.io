---
title: CSS3 Transparency Opacity
date: 2010-06-15
tags: css,css3,opacity,transparency
---
Its simple enough:

<pre class="sh_css">
.transp5 {
	opacity: 0.5;
}
</pre>

For browsers without CSS3 support:

<pre class="sh_css">
.transp5 {
  filter:alpha(opacity=50);
	-moz-opacity:0.5;
	-khtml-opacity: 0.5;
	opacity: 0.5;
}
</pre>

I setup a couple of classes with trans + "the level of opacity".

Also, I recently wanted to set a background color to be transparent, but not the text within it. This is also possible in browsers that support rgba (red, green, blue, alpha) color specifiers:

<pre class="sh_css">
.transp5bg {
  background-color: rgba(0,0,0,0.50);
}
</pre>

