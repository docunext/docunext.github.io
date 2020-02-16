---
title: Ming Stuff
date: 2007-08-20
---
I've been using Ming for years, and recently Manuel Lemos of <a href="http://phpclasses.org" rel="nofollow">phpclasses.org</a> sent a message to the list with some questions. Just sent this back to him:

<blockquote>

I'm not familiar with the ExternalInterface package, but here is a snibbet from something I wrote: <<$main_actionscript = "

var greyscale = 225;

var j=1;

var gf = new flash.filters.GlowFilter(0xFFCC00, 10, 5, 5, 2, 1, false, false);

var selection;>>

I'm assuming you have your actionscript defined as a string and then imported into the outgoing movie like so: $m->add(new SWFAction($main_actionscript));?

Not sure if I can help more than that... would you mind replying back to the list with this email my alby account is just out of my reach at the moment.

Also I should mention that while actionscript has made a lot of improvements over the past few years, it is still really slow. If you are importing media elements, you may want to seriously consider importing them into the movie before outputting swf, it has been multiple times faster in my experience.

Say for example, you have a flv movies, you may want to have ming build a swf with the flv reference hard coded (and rebuild it every time a user chooses a different movie to play) rather than having actionscript point the player to the new reference. </blockquote>

If you aren't familiar with <a href="http://ming.sourceforge.net/">ming</a>, it is an amazing library which can be used to create swf movies, with bindings for PHP, perl, and more!
