---
title: Converting WP Cumulus to Haxe
date: 2009-11-21
tags: Actionscript,haxe,ming,wordpress
---
[WP-Cumulus](http://www.roytanck.com/2008/03/06/wordpress-plugin-wp-cumulus-flash-based-tag-cloud/) is a really beautiful implementation of a three-dimensional (3D) tag cloud the in Shockwave Flash format.

It was originally published by Roy Tanck for use with Wordpress, as the name would suggest. It's been ported to several other blog engines and general purposes, but all the ports which I have seen retained the same or slightly varied Actionscript 3 codebase.

I was really impressed with WP-Cumulus when I first found it, so much that I tried to incorporate it into a project I was working on. My initial attempts were curtailed by the fact that it is apparently impossible (according to Adobe) to import version 9 swf files into swf files of previous versions. Since I was using a previous version as my primary swf format, I gave up.

The reason why I was using a previous swf format is due to ming. In my humble opinion, ming rocks!

But what about Haxe? It apparently can bridge the swf format version divide. I've been reading up on it the past few days, and converting the open source WP-Cumulus project to Haxe seems like an manageable opportunity to do something really cool while learning about Actionscript 3 and Haxe.

Let's get started! As a second step, I'm following the [guidelines on the Haxe website to migrate AS3 to Haxe](http://haxe.org/doc/start/flash/as3migration). My first step was to try and compile as3tohaxe, but I hit a wall with ["Could not find module `Text.Parsec.Expr': "](http://www.docunext.com/2009/11/could-not-find-module-textparsecexpr/). If I can eventually get it to compile, I certainly give it a try, but in the meantime, I'll go the manual route with WP-Cumulus.

**Initial Notes**

This:

<pre class="sh_javascript">
import flash.net.navigateToURL;
</pre>

doesn't work for me for some reason,.

I'm also having trouble with XML / String / Arrays - can the Flash compiler deal with multi-types / on-the-fly casting?

**Sup w/ Sort?**

AS3:

<pre class="sh_javascript">
// mix up the list so not all a' live on the north pole
mcList.sort( function(){ return Math.random()<0.5 ? 1 : -1; } );
</pre>

Haxe:

<pre class="sh_javascript">
// mix up the list so not all a' live on the north pole
mcList.sort(
    function(mcList,mcList):Int {
        //return Math.random()<0.5 ? 1 : -1;
        var myr:Float = Math.random();
        if(myr == 0) {
            return 0;
        } else if (myr<0.5) {
            return 1;
        } else {
            return -1;
        }
    }
);
</pre>

There are some clear differences between Haxe and AS3, and this is one of them. When I first tried compiling the AS3 code, haxe replied with:

<pre class="sh_sh">
./Cloud.hx:83: characters 21-69 : Void -> Int should be flash.display.MovieClip -> flash.display.MovieClip -> Int
</pre>

Huh? What's that mean? The Haxe Array API docs define the Array.sort function like so:

<blockquote>
function sort( f : T -> T -> Int ) : Void
</blockquote>

What do the f, T, and Int items mean? In this case, the f specifies that the sort function takes a function as its argument (aka lambda or anonymous functions), and "T -> T -> Int" specifies that the function should take whatever type of objects the array is holding (integers, strings, or in this case MovieClips) as the first two arguments, and return an integer.

Related:

* <http://www.haxe.code-experiments.com/blog/2009/11/flash-as3-example-with-addeventlistener.html>
* <http://remixtechnology.com/view/astar-haxe>
* <http://livedocs.adobe.com/flash/9.0/ActionScriptLangRefV3/Array.html#sort()>
* <http://haxe.org/api/array>
* <http://lambda-the-ultimate.org/node/3654>
* <http://lists.motion-twin.com/pipermail/haxe/2009-May/024905.html>
* <http://lists.motion-twin.com/pipermail/haxe/2008-April/016181.html>
* <http://asserttrue.com/articles/2006/08/07/haxe-found>

