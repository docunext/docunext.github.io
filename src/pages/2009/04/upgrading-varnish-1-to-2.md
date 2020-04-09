---
title: Upgrading Varnish 1 to 2
date: 2009-04-27
---
Varnish 2.x is now is Debian Squeeze, and it includes some cool failover functionality I want to give a whirl. The 2.x branch has actually been around for awhile, but since Varnish is the frontline gateway to most of the web sites and services I publish, I wanted to give it some time to get tested.

I've been testing it too, and everything seems fine to me. I checked if there was a backport of Varnish 2.x for lenny, but I coulnd't find one. That would be great if it were possible!

Anyway, I'm dreading having to update the syntax of the vcl files. I don't think that they are too different, but my vcl files are messy and disorganized. In preparation of the upgrade, I've at least started to clean them up a bit.

UPDATE: I just tried my version 1 vcl with version 2 and the switch was really easy, I just used this in vim:

<pre>:%s/set backend//g</pre>
