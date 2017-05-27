---
title: mod perl sessions are wacky
date: 2008-06-15
tags: none
author: Albert Lash
---
I've been wrestling with mod_perl sessions for the past few hours. I don't mind as its helping me learn perl! :-)

Anyway, its pretty incredible how many flexible perl is, almost too flexible - it looses shape a little bit! I've latched onto Apache::Session, but it has only been bearable thanks to Session, an OOP wrapper.

Methinks that there should be a better Apache2::Session, but in the meantime this works. Its roundabout for sure - I'm using the Session package to wrap around Apache::Session, with Apache2::Cookie being used to track and maintain the session. Furthermore, Session uses the API of Apache::Session::Flex, which isn't very clear. :-( I'm not sure it it supports file based locking?

You do have very granular control though, which I guess is a plus.

Besides the wacky sessions (I'm used to PHP sessions which are about as simple as they come), mod_perl is really awesome.

