---
title: Python WSGI
comments:
  - author: Rick Harding
    email: rharding@mitechie.com
    url: http://www.mitechie.com
    date: 12/22/2007 11:38:55 PM
    text: >
      Thanks for bringing this up. I'm trying to play with Pylons and this idea of WIGO middleware seems so strange coming from the PHP world. I need to spend some more time on it.
  - author: Albert
    email: albert.lash@savonix.com
    date: 12/25/2007 10:24:22 PM
    text: >
      Hi Rick! What do you mean by WIGO? The python stuff is making more and more sense to me, slowly but surely. I like the idea of mod_wsgi, so I can rely on Apache for authentication, compression and logging, yes use a daemon application server for semi-persistence. Its still a little foggy but starting to congeal. :-)
date: 2007-12-22
tags: python,wsgi
---

I followed the
<a href="http://www.python.org/dev/peps/pep-0333/" rel="nofollow">WSGI Hello World Tutorial
</a>, and modified it to learn a little bit about how WSGI URIs are handled. I am familiar with how Apache and PHP deal with requests via the REQUEST_URI parameter, but WSGI uses PATH_INFO instead. That seems odd, but oh well, maybe I'm missing something.

<pre class="sh_python">
def simple_app(environ, start_response):
    """Simplest possible application object"""
    status = '200 OK'
    response_headers = [('Content-type','text/plain')]
    start_response(status, response_headers)
    if environ["PATH_INFO"]=="/blah" :
        blah = 'blah\n' + environ["PATH_INFO"]
    if environ["PATH_INFO"]!="/blah" :
        blah = 'not blah\n' + environ["PATH_INFO"]
    return [blah]
from wsgiref.simple_server import make_server, demo_app
httpd = make_server('', 8000, simple_app)
print "Serving HTTP on port 8000..."# Respond to requests until process is killed
httpd.serve_forever()
</pre>

This whole WSGI thing seems a lot more edible that the servlet engines that Java uses, but that might be simply due to my reliance on mod_php when I started doing this stuff way back when. For a long time I felt a web server always had to point towards a file, rather than be a running daemon itself. I like the idea of using python to fulfill that role, as it can handle complex objects so well.

<b>environ</b>

WSGI uses a dictionary object to handle the incoming HTTP stuff, like the request method and so on. That dictionary is called the <b>environ</b>.

You can access the values in the dictionary by passing it a key reference, like this:

<pre class="sh_python">
print environ["PATH_INFO"]
</pre>

I'm surprised there isn't a REQUEST\_URI key, but you can create one by concatenating the PATH_INFO + "?" + QUERY\_STRING.

I'm also keeping ongoing notes about my learning curve with python here:

<a href="http://www.docunext.com/wiki/Python_Notes">Python Notes</a>

¥

