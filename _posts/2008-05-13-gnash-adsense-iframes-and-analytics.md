---
title: Gnash Adsense Firefox3 iframes Analytics
date: 2008-05-13
tags: firefox,gnash
---
I'm building Gnash again as I was finally able to get it working in Firefox 3, and I'm curious if the current repository (CVS at the moment, soon to be git) codebase will work with Google Analytics.

Its strange, but whenever I run Gnash, it makes Adsense ads show up in iframes. I guess they already are in iframes, but they now show scrollbars. :-/

<pre class="sh_sh">mkdir gnash
cd gnash
apt-get build-dep gnash
apt-get source gnash
cvs co gnash-cvs-path... gnash_cvs
cd gnash_cvs
cp ../gnash-0.82/debian ./debian -a./autogen.sh./configure
debian/rules build
</pre>
I'm going to try helping out the Gnash project with testing:
<a href="http://wiki.gnashdev.org/Testing/QA">http://wiki.gnashdev.org/Testing/QA
</a>
Keeps failing here:

<pre class="sh_sh">Output file name: ops.swf
Output compression level: 9
Output SWF version: 5
Importing symbols from Dejagnu.swf: dejagnu
Preprocessing ./dejagnu_so_init.as... done.
Compiling `./dejagnu_so_init.as.pp' into frame 1... done.
Preprocessing ./ops.as... done.
Compiling `./ops.as.pp' into frame 2... failed:   push "z", null, undefined                           ^  Line 343:  Reason: 'syntax error'
</pre>

Even with the errors I was able to install, but still no go with Google analytics. I wonder if it has anything to do with ssl.

Also, just an FYI - I'm able to watch YouTube videos with libgnash 0.8.2.

<b>iframe wackiness</b>

<pre lang="css">iframe {
overflow-x: hidden;
overflow-y: hidden;
}</pre>

