---
title: Trac Mercurial
date: 2008-04-22
tags: python,trac
---
I've tried out git a bunch and compared to subversion it still confuses me a little. Mercurial seems promising, though there aren't many code browsers for it. Trac has an experimental plugin for it, and its in the debian repositories, but I can't get it to work right. I keep getting this error:

<pre class="sh_sh">Traceback (most recent call last):
File "/var/lib/python-support/python2.4/trac/web/main.py", line 406, in dispatch_request    dispatcher.dispatch(req)
File "/var/lib/python-support/python2.4/trac/web/main.py", line 191, in dispatch    chosen_handler = self._pre_process_request(req, chosen_handler)
File "/var/lib/python-support/python2.4/trac/web/main.py", line 263, in _pre_process_request    chosen_handler = f.pre_process_request(req, chosen_handler)  File "/var/lib/python-support/python2.4/trac/versioncontrol/api.py", line 73, in pre_process_request    self.get_repository(req.authname).sync()
File "/var/lib/python-support/python2.4/trac/versioncontrol/api.py", line 91, in get_repository    raise TracError('Unsupported version control system "%s". '
TracError: Unsupported version control system "hg". Check that the Python bindings for "hg" are correctly installed.</pre>
I tried importing mercurial and hg from the python console and it works. I think there is a problem with the trac and mercurial versions.

UPDATE: I finally got it working! When I was trying out the trac-bzr package in debian, I noticed that the conf/trac.ini needs [components], plural, not [component] singular. I'm afraid I've made that mistake before...

