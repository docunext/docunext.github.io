---
title: ExecJS RuntimeUnavailable
comments:
  - author: preth00nker
    email: preth00nker@gmail.com
    ip: 189.221.213.233
    url:
    date: 09/12/2011 08:56:02 PM
    text: >
      tnx you so much. I've just gotten my rails installation working.<br/>In other hand. Mongrel is another story..<br/>kind regards!
date: 2011-08-20
tags: javascript
---
I just started a new Rails 3.1 project, and got the following error:

<pre class="terminal">
/gems/execjs-1.2.4/lib/execjs/runtimes.rb:45:in `autodetect': Could not find a JavaScript runtime. See
https://github.com/sstephenson/execjs for a list of available runtimes. (ExecJS::RuntimeUnavailable)
</pre>

The fix:

<pre class="sh_terminal">
sudo apt-get install nodejs
</pre>

I bet this has something to do with coffeescript, but I haven't started with it yet, so I can't say for sure.

¥

