---
title: PyFileServer on Google App Engine SDK
date: 2008-05-21
tags: google,python
---
This morning I've been trying to get PyFileServer to run with Google's SDK. So far, no go. This error prevents the service:

<pre class="sh_python">  File "/home/moe.sizlak/Desktop/google_appengine/demos/pyfile/pyfileserver/mainappwrapper.py", line 56, in __init__    raise RuntimeError('Failed to read PyFileServer configuration file : ' + specifiedconfigfile + '\nDue to ' + exceptiontext)
RuntimeError: Failed to read PyFileServer configuration file : PyFileServer.conf
Due to AttributeError: 'module' object has no attribute 'load_source'
INFO     2008-05-21 12:13:40,939 dev_appserver.py] "GET / HTTP/1.1" 500 -</pre>

