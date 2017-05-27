---
title: m0n0jabber Progress
date: 2007-08-19
tags: none
author: Albert Lash
---
I made some serious progress on m0n0jabber today:


More importantly, the djabberd server starts automatically and you can login and chat with statically set users and passwords! That is pretty awesome. :-)

To start, I'm just going to setup the creation of usernames and passwords via the m0n0wall webgui, and store that information in the config file. When the system boots, it will parse the users into an htdigest format and save it in the filesystem. The passwords can be easily saved in the htdigest format by using:

<pre>$hashed_pass = md5('$user_name:$vhost_realm:$user_password'); </pre>

At some point it might be possible to have users be able to register themselves.

