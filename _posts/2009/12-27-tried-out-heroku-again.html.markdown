---
title: Tried Out Heroku Again
date: 2009-12-27
tags: heroku,ruby,"web applications"
---
Heroku is a really cool idea for hosting Ruby web applications, but right now its failing on me.

I've been trying to update my app for the past few hours and all I get is this response:

<pre class="sh_sh">
-----> Heroku receiving push
-----> Launching........................................................... failed (Heroku error)
 !     Previous app version is still running, try pushing again shortly
 !     We've been notified, see http://support.heroku.com if the problem persists
 !     Heroku push rejected, testfire failed
error: hooks/pre-receive exited with error code 2
</pre>

I guess I shouldn't complain, seeing how I'm using the free version. But I have to wonder - does this sort of thing happen on the fee-based services?

UPDATE: Its back working again. I should note that the problem didn't cause my application to stop working, I just couldn't update it.

Also, based on how awesome Heroku deployment is, I've investigated other [Ruby deployment tools](http://www.docunext.com/wiki/Ruby#Ruby_Deployment_Tools), and have decided to go with [Vlad](http://www.docunext.com/wiki/Vlad) for now.

