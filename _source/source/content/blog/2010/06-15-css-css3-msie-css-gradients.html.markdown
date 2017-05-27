---
title: CSS CSS3 MSIE CSS Alpha Gradients and Browser Detection 
date: 2010-06-15
tags: css,css3,gradients,msie
---
#### Alpha Gradients - Yay!

Creating *gradients with transparency* are usually relegated to PNG graphics files, as they support 24-bit alpha channels. With CSS3, this is becoming possible. Its not all that difficult either!

Here's a simple **CSS3** class which employs a **gradient** from gray to black, with support for recent versions of MSIE, Webkit (Safari, Chrome, etc.), and Mozilla (Firefox, Iceweasel, etc.):

<pre class="sh_css">
.g2b {
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#555555', endColorstr='#000000');
  background: -webkit-gradient(linear, left top, left bottom, from(#555), to(#000));
  background: -moz-linear-gradient(top,  #555,  #000);
}
</pre>

For transparency, I'm using **rgba**, which in my experience is not supported by MSIE 7 or 8.

<pre class="sh_css">
.transpgdbd {
  background: transparent;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), color-stop(0.5, #000), to(#000));
  background: -moz-linear-gradient(top, rgba(0,0,0,0), #000 400px);
}
</pre>

I've setup sketch99.com to with a CSS3 gradient so visitors can witness the action for themselves.

#### Multiple Transitions
#### Browser Detection

Speaking of MSIE versus the-rest-of-the-world, this [page](http:// blog.niccai.com/post/51688182/maintainable-css-using-ie-specific-css-selectors) suggests and interesting way of creating an HTML body class specific to different versions of MSIE. I wouldn't use it, as its pretty bulky, and as the author admits, it doesn't validate.

If I were to do something like this, I would use the conditional operators to set a javascript variable in the head, and then use javascript or jquery to add the class once the opening body tag gets loaded. Granted, I don't know if that would even work, but its where I would start.

When it comes to browser detection, I'm OK with the comment based IE conditionals, but I don't like them. I don't enjoy supporting a company that doesn't support open source software! More to the point, I'm OK with them because even if a browser spoofs their user agent, only real MSIE browsers will process them.

This is similar to how jQuery suggests testing for user agents - [check to see if it supports certain functionality](http://api.jquery.com/jQuery.support/) that needs to get used. If I want to check if a browser is IE, I will usually use:

<pre class="sh_javascript">
if($.support.opacity) {
  // not IE, or at least not a modern browser
}
</pre>

