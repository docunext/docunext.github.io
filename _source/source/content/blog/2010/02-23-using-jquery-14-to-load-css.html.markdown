---
title: Using jQuery 1.4 to Load CSS
date: 2010-02-23
tags: css,html,javascript,jquery
---
#### Foreward
I *think* these are features new to jQuery 1.4, but I'm certain they are new to me.

In the past, I've often wondered the best way to create new HTML with jQuery. I have a way I like to do it with raw javascript, but I only employ that when automatically generating the code.

With jQuery, unless I'm loading in data from an external resource, I usually only need to add a little HTML; a single node for instance.

Let's look at the old, recent and new ways I've done and am doing this.

#### Old Way
<pre class="sh_javascript">
if($('.thickbox').length > 0) {
  $.getScript('/s/js/jquery/plugins/thickbox-compressed.js', function() {
    $('head').append('&lt;link rel="stylesheet" type="text/css" href="/s/css/thickbox.min.css" />');
  });
}
</pre>

One problem here is that I don't think its not compatible with both HTML and XHTML. Its also pretty ugly, too.

#### Recent Way

I read up on using jQuery to load CSS and found something like following. Better, huh?

<pre class="sh_javascript">
if($('.thickbox').length > 0) {
  $.getScript('/s/js/jquery/plugins/thickbox-compressed.js', function() {
    $('head').append('&lt;link>');
    css = $('head').children(':last');
    css.attr({
      rel:  'stylesheet',
      type: 'text/css',
      href: '/s/css/thickbox.min.css'
    });
  });
}
</pre>

I like this because it uses more javascript, but it requires two updates to the DOM.

#### New Way

This is what I think is new with jQuery 1.4+. Its the ability to create a new node internally, modify it, and then add it to the DOM. This might have been possible with jQuery 1.3, but I wasn't aware of it. Regardless, its cool!

<pre class="sh_javascript">
if($('.thickbox').length > 0) {
  $.getScript('/s/js/jquery/plugins/thickbox-compressed.js', function() {
    $('&lt;link>', {
      'rel':  'stylesheet',
      'type': 'text/css',
      'href': '/s/css/thickbox.min.css'
    }).appendTo('head');
  });
}
</pre>

I'm not done with this yet. I'm planning to make it into a function with the CSS href as the argument.

