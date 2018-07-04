---
title: More Python WSGI moinmoin and pycoon Notes
date: 2007-12-29
tags: php,python,wsgi
---
WSGI is pretty cool stuff - I messed around with cherrypy today, and enjoyed what I found. For a fairly small codebase its quite flexible and competent. I was reading a bunch of code from moinmoin and pycoon and took some notes...

moinmoin notes:

* function description comes after "def functionname:"
* php session parser very interesting...
* Can you save PHP bytecodes to a file like .pyc files?

<pre class="sh_python">
lists = [1,2,3]
tuples = (1,2,3)
dictionaries = {1: "ablh"}
</pre>

The colon is a great character, and python makes swell use of it.

<div>
Private functions in python start with __, everything else is public. Ian of the Paste project seems to think that these type of private functions are a bad idea though.
</div>

#### CherryPy

I've been reading up on CherryPy too - <a href="http://www.cherrypy.org/wiki/WSGI">this is a great read</a>. They have a page of templates and they don't trash talk xslt - good! :-)

#### Paste

I haven't actually tried out Paste yet, but the docs are very good. They explain a lot of what WSGI applications are all about. I read up on the WSGI spec too.

That leads me to another thought - I need to get more comfortable with how the python libraries and packages are installed. I may be wrong, but it feels like the packaging and path setup for python is a little haphazard.

#### PHP versus python

Just some comparison notes...

* PHP's "this" is like python's "self"
* PHP's constructor class functions/methods are like python's __init__ class functions/methods* both languages are down with the idea of camelCaseForMethodNames

PHP foreach:

<pre class="sh_php">$blah = array("a","b","c");
foreach ($blah as $barf){
     echo $barf;
}</pre>

Python for:

<pre class="sh_python">
blah = ["a","b","c"]
for barf in blah:
    print barf
</pre>

My personal opinions:

* I like the dot syntax of python for referencing objects and methods, reminds me of javascript and actionscript
* Lists, tuples, and dictionaries still confuse me a little, but I'm figuring it out
* For some strange reason I feel more comfortable with <strong>self</strong> than <strong>this</strong>

