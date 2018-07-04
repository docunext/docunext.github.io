---
title: No lines in buffer 
date: 2010-10-10
---
This is an annoying little bug in Vim when using the remote browsing capabilities of netrw.

Its annoying because I have to press enter to continue! Thankfully there is a quick workaround that *sort of* works:

<pre class="sh_sh">
:set ch=2
</pre>

That gives the vim console enough room to display two  "--No lines in buffer--" errors without asking the user to continue.

There has got to be a way to silence this! I tried:

<pre class="sh_sh">
silent! g:netrw_scp_cmd
</pre>

and:

<pre class="sh_sh">
let g:netrw_silent = 1
let g:netrw_use_noswf= 0
</pre>

with no luck. I also tried disabling all my other plugins, but that didn't work either.

* <http://groups.google.com/group/vim_use/browse_thread/thread/57c20cae297736ac>

