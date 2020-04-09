---
title: Learning Python
comments:
  - author: Rick Harding
    email: rharding@mitechie.com
    url: http://www.mitechie.com
    date: 12/15/2007 09:56:46 PM
    text: >
      Congrats on the move to Python. It's fun stuff. Learning Python is ok, but you'll get through it pretty quick and it's pretty basic.<br/><br/>There are some python build utils, but I've honestly not messed with them enough to be able to advise on which path is best to head down. The big thing to play with is using easyinstall for the app for easy inclusion into the cheeseshop. (Kind of like a CPAN for python)
  - author: Albert
    email: albert.lash@savonix.com
    date: 12/15/2007 11:29:34 PM
    text: >
      Thanks for commenting Rick! I've tried easy_install a little, and was even able to adjust the location for installs. I'm still a little foggy about how eggs work, as well as the pyc and psyco stuff works, but I'm comfortable with them enough to keep coding away. The one complaint I have with easy_install is that I've heard reports it doesn't play well with apt-get on debian.
  - author: Andrey Nordin
    email: anrienord@inbox.ru
    url: http://abstracthack.wordpress.com/
    date: 12/16/2007 06:22:50 PM
    text: >
      You're right, setuptools makes wonderful RPMs for both pure Python and C extension packages (usually python setup.py bdist_rpm does the right stuff for you), but AFAIK it doesn't support dpkg.<br/><br/>BTW, are you an active dpkg user? I'm an RPM guy and I find dpkg tools and the packaging process quite ugly. Nevertheless I like modern Ubuntu more than Fedora, but I cannot start using it because of dpkg. Could you help me to change my mind if you are one of those people who like dpkg? :)
  - author: Albert
    email: albert.lash@savonix.com
    date: 12/17/2007 12:24:08 PM
    text: >
      I LOVE dpkg. Granted, in my limited experience with RedHat (we're talking mid-90s when getting ethernet drivers working was a pain) I never got too hooked on RPMs.<br/><br/>Before dpkg, I used gentoo portage, and that was cool but I'm glad I found dpkg. I find dpkg to be a little heavy, but if you can get over the amount of text involved with all the packages, its well worth it. The packaging can be pretty easy, here's an example:<br/><br/><a href="http://www.docunext.com/blog/2007/11/creating-debian-packages-part-ii.html">http://www.docunext.com/blog/2007/11/creating-debian-packages-part-ii.html</a><br/><br/>It probably won't be long before debian and python setuptools can play well together. There are several pear packages which are in the debian repositories, but can also be installed via pear.<br/><br/>Maybe I can help more if you tell me what you don't like about dpkg. Are you familiar with apt-get? There are lots of high level tools for working with dpkgs but I prefer "apt-get install packagename" and "apt-cache search packagename", as well as "apt-get update" and "apt-get upgrade". The "dpkg -l" command is nice too.
  - author: Andrey Nordin
    email: anrienord@inbox.ru
    url: http://abstracthack.wordpress.com/
    date: 12/18/2007 11:24:05 AM
    text: >
      Thanks, Albert. This week I'll install Ubuntu again and contact you via email to ask some questions about dpkg. Yes, I'm familiar with apt-get a little. In Fedora, there is a tool named yum, and in Mandriva such a tool is named urpmi. These tools do automatic dependency checks and manage remote media too. As a user, I like apt-get, but it is hard for me to dive into dpkg packaging process details. I'll email you if you don't mind. Maybe dpkg/apt-get worth starting a special page in my Wordpress blog (I don't have a wiki unfortunately).
  - author: Albert
    email: albert.lash@savonix.com
    date: 12/19/2007 10:55:19 AM
    text: >
      Hi Andrey - sure shoot me an email when you are up and running. If you have a program you are looking to package I can help with that too. I'm not a debian developer so I can't upload anything though.
date: 2007-12-15
tags: python
---
I've decided to make a concerted effort to learn python, so I just purchased O'Reilly's "Learning Python" by Mark Lutz. I might even consider porting <a href="http://www.nexista.org/blog/">Nexista</a> to Python, but I'd also work to make it more compliant with some evolving standards suggested by Cocoon and followed by Popoon. I wonder if there is a python version of ant / phing?

UPDATE December 16, 2007:

There are projects for both cocoon and ant in python:

* <a href="http://code.google.com/p/pycoon/" rel="nofollow">http://code.google.com/p/pycoon/</a>
* <a rel="nofollow" href="http://sourceforge.net/projects/pyant" rel="nofollow">PyAnt</a> - last update 2003

You really don't need a python ant though, if you have php phing will work fine.
