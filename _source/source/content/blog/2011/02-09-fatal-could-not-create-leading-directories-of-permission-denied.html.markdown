---
title: fatal could not create leading directories of ... Permission denied
date: 2011-02-09
tags: errors,git
---
The fix for this error: **"fatal: could not create leading directories of '...': Permission denied"** was much different than what I thought it would be. I'd think if permission was denied, it would be caused by folder or file mode. Not the case!

But let me take a step back and explain how I encountered this error. It was getting generated during a deployed using vlad. Thankfully the error report included the command that vlad was trying to execute. I tried running it manually and received the same response, so I broke it up into its pieces, then tried running them on the remote target. That revealed it was actually an ssh-key problem.

Wow! I'm surprised that the explanation was so far off the mark.

Anyway, all it took was to login to the remote target, ssh to the git origin remote server, accept the key, and away I went. Whee...

