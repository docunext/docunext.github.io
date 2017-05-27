---
title: AwesomeWM Gnome Keyring and SSH Agent
date: 2009-10-02
tags: gnome
---
Just links at the moment:

* [http://ubuntuforums.org/archive/index.php/t-770953.html](http://ubuntuforums.org/archive/index.php/t-770953.html)
* [http://live.gnome.org/GnomeKeyring/Ssh](http://live.gnome.org/GnomeKeyring/Ssh)
* [Very good page on the subject of display managers and security daemons](http://www.math.ucla.edu/~jimc/documents/x-login/)

I'll follow with more notes...

I'm getting there. For me an important step was to remove the use-ssh-agent from /etc/X11/Xsession.options.  I had to reboot for this to take effect.

Now I'm getting this:
<pre>
Message: couldn't set environment variable in session: The name org.gnome.SessionManager was not provided by any .service files
</pre>

If I set the environment variable manually, its all good.

Will this help?
<pre>
pam-auth-update --force
</pre>

