---
title: Thank You EscapeGoat.org
date: 2009-08-01
tags: debian,merb,ruby
---
My last post was growing out of control, so I decided to ask for help. <a href="http://escapegoat.org/2008/7/17/installing-merb">EscapeGoat.org</a> came to the rescue.

I'm still trying to find my own way:

 <pre class="sh_sh">sudo gem install data_objects --version=0.9.11
sudo gem install do_sqlite3 --version=0.9.11
</pre>

Still missing something... is it this?
<pre class="sh_sh">sudo gem install ParseTree --version=2.1.1</pre>

Let's find out! That didn't fix it, so I tried removing the ParseTree gem version 3.0.4, but now I'm getting an error saying it can't find the file merb-action-args. Doh!

UPDATE: Success, sorta. I found that running the merb.fcgi script manually did not produce any errors, so I decided to start it with <a href="http://www.docunext.com/">spawn-fcgi</a> and access it from <a href="http://www.docunext.com/wiki/NGINX">NGINX</a>. That worked fine, at least for the index. I don't have the paths setup correctly for the static files. But we're making progress. :-)

