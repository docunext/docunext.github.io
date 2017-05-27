---
title: Mtasc and Ming actionscript compilers
date: 2006-12-20
tags: Actionscript,ming,swf
---
I'm trying to figure out if Mtasc and Ming can work together, and if it makes sense to get them to work together. Can't seem to figure out mtasc yet. I think you need a function called main.

Mtasc has been replaced by haxe? First impression is that it tries too hard. :-( Attempting to be too many things.

Ming already has a decent actionscript compiler, with subtle syntax variances. However, one of the reasons why I'm interested in mtasc is to improve the quality and organization of my actionscript code.

OK I'm definitely doing something wrong. My file size is not commensurate with the data I'm generating, so I've got to look at this logically.

I'm starting to get it now...

<pre class="sh_sh">mtasc -out teste0_out.swf -swf bah.swf -main test.as</pre>

and even better:

<pre class="sh_sh">mtasc -out teste0_out.swf -swf bah.swf -version 8 -main test.as</pre>

I used to use Ming for combining and rapidly duplicating movie clips during compile. However, to support a wider set of functionality, I'm now using bitmaps, and the amazing power of the Flash bitmap API is increasing the benefit of using Actionscript to build swfs. That being the case, I really need my actionscript to be tight and efficient.

Here's what I'm thinking: * Build swf and actionscript seperately and dynamically using PHP* Compile actionscript using mtasc

However, the issue here is the runtime versus buildtime. I love ming because its fast enough to compile at runtime, building and outputting dynamic flash files on the fly. With a php / ming / mtasc / actionscript setup, would it be possible to manage updates without a complex freshness system?

On second thought, I bet if the classes and files were built correctly, they wouldn't require updating very often. In my case, I'm dealing with data sets and images, with regular updates and common variances to both. I do not want to use actionscript to load external entities, but would rather asseble the necessary components prior to downloading the main swf file. This thread from the mtasc mailing list matches my opinion suprisingly well:

<a href="http://lists.motion-twin.com/pipermail/mtasc/2005-March/024682.html">Dynamically linking media files to a swf file at runtime</a>."erixtekila wrote:&gt;&gt; One feature that would be awesome to have would be the ability to &gt;&gt; include static images (.gif, .jpg, .bmp, whatever) in .swf files, and &gt;&gt; give them linkage id's so we can attach them at runtime."

Also have to hand it to <a href="http://www.gazbming.com/getexample.php?id=18">gabz AGAIN - this page on swf actionscript objectregisterclass</a> is very helpful.

* <a href="http://www.mtasc.org">
* <http://kumamushi.org/~k/ming/examples/examples.html>
* <http://www.ubergeek.tv/article.php?pid=99> - interesting, uses ant for building, makes sense with swfmill

<strong>Annoying variances in syntax betwen compilers</strong>

Works in ming set to version 8 (hack):

<pre>removeMovieClip(rotate);</pre>

does not work:

<pre>rotate.removeMovieClip();</pre>

How to unset a variable?

<pre>delete varname;</pre>

Somewhat-related cool links:

* <http://www.quasimondo.com/archives/000572.php>
* <http://www.kirupa.com/developer/flash8/filter_effects2.htm>
* <http://www.gskinner.com/blog/archives/2005/10/major_flash_pla.html> - memory management
* <http://article.gmane.org/gmane.comp.web.ming.general/1541>
* <http://www.kirupa.com/developer/oop/AS1OOPClassesWithMCs6.htm>

