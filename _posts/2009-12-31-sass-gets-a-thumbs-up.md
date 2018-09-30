---
title: Sass Gets a Thumbs Up
date: 2009-12-31
tags: css,ruby,sass,sinatra
---
I'm writing [Regdel, another open source bookkeeping and accounting program](http://www.regdel.com/) in Ruby using the Sinatra framework.

Sinatra supports Sass templates, so I decided to give it a try. I was a little skeptical, because Haml, the HTML template system by the same creators, is not right for me.

I'm glad I tried Sass. It is quite nice, actually. It has a "Ruby-esque" feel to it, and thankfully it doesn't detract too much from CSS strength.

My one complaint is that it works off of Ruby's symbol syntax instead of CSS param-value syntax. For example, instead of this (CSS):

<pre class="sh_css">
width: 500px;
</pre>

Sass uses this:

<pre class="sh_sh">
:width 500px
</pre>

It will just take some getting used to.

