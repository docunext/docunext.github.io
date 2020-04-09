---
title: Debian versus the Cheeseshop
comments:
  - author: Andrey Nordin
    email: anrienord@inbox.ru
    url: http://abstracthack.wordpress.com/
    date: 01/01/2008 07:39:45 PM
    text: >
      Thanks for the link on debianizing Pylons!<br/><br/>P. S. I'm preparing my example project to try out dpkg and compare it to RPM. I'll be ready to continue our email conversation a little bit later.
  - author: Albert
    date: 01/01/2008 09:37:42 PM
    text: >
      Cool, take your time. I'll be bugging you about pycoon in the meantime. :-)
date: 2008-01-01
tags: debian,python
---
Today's python effort - getting comfortable with python packages on debian.

The steps I took:

<pre>
apt-get install python-cherrypy
apt-get install python-paste
</pre>

<pre>
apt-cache search wsgi
python-beaker - Simple WSGI middleware that uses the Myghty Container API
python-flup - Implements Python Web Server Gateway Interface (WSGI)
python-jinja - simple pythonic template language
python-myghty - Python based templating framework originally based on HTML::Mason
python-paste - Tools for using a Web Server Gateway Interface stack
python-pastedeploy - Load, configure, and compose WSGI applications and servers
python-pastewebkit - port/reimplementation of Webware WebKit in WSGI and Paste
apt-cache search python | grep xsl
libxslt1-dbg - XSLT processing library - debugging symbols
python-libxslt1 - Python bindings for libxslt1
python-libxslt1-dbg - Python bindings for libxslt1 (debug extension)
python-lxml - pythonic binding for the libxml2 and libxslt libraries
python-lxml-dbg - pythonic binding for the libxml2 and libxslt libraries (debug extension)
</pre>

Interesting... when installed, where do the packages go? /usr/lib/python2.5/site-packages/

I also installed:

* python-egenix-mxdatetime
* python-flup
* python-webpy
* python-lxml

It seems that python's license is friendlier with the GPL and debian. This is good! While I like PHP a lot, the fact that it is incompatible with the GPL is a pretty big deal, and only for the fact that they restrict the use of the term "PHP". Duh.

This is helpful:

<a href="http://wiki.pylonshq.com/display/pylonscookbook/Creating+a+Debian+package+from+your+Pylons+project">debianize a pylons project</a>

<a href="http://www.docunext.com/">Docunext Python Wikipage</a>

¥

