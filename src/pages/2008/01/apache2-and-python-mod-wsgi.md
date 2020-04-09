---
title: Apache2 and python mod wsgi
date: 2008-01-02
tags: apache,python,wsgi
---
libapache2-mod-wsgi

* <http://packages.debian.org/unstable/python/libapache2-mod-wsgi>
* <http://tools.cherrypy.org/wiki/ModRewrite>
* <http://code.google.com/p/modwsgi/wiki/IntegrationWithTrac>

installed mod_wsgi and web.py 0.2

"Premature end of script headers" was getting caused by a collision with a cgi-script directive I had elsewhere in my config, as well as an incorrect mode setting, I think.

Now I'm on to python-xml... trying to generate a simple xml document. Switched to lxml, got it.

But now I'm wondering how to architect WSGI requests. Maybe I should use paste or cherrypy middleware? I'm just a little confused about the best way to instantiate and run web applications a daemons.

<div>

<h4>What's up with __call__?</h4>

I finally figured out what's up with __call__. Imagine you have a class. You create an object instance of it. class car, my_car = car(), and when my_car is created, __init__ is called. If you want to run my_car as a function, you can call my_car(), but you'll need a __call__ function. I'm not really sure what the benefit of this is, but I imagine its good for something.
</div>

<a href="http://www.docunext.com/2_and_mod_wsgi">Apache 2 and mod_wsgi</a>

