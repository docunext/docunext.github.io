---
title: fatal The remote end hung up unexpectedly
date: 2010-03-08
tags: errors
---
I still get this error when using Git from cygwin from time to time:

<pre class="sh_sh">
$ git pull origin master
remote: Counting objects: 25, done.
remote: Compressing objects: 100% (22/22), done.
fatal: The remote end hung up unexpectedly
fatal: early EOFs:  95% (21/22)
fatal: unpack-objects failed
</pre>

I'm not sure what causes it, I think it has something to do with ssh. At first I had to clone the repository again, and since then all I have to do it retry the pull command.

