---
title: Code to Purge Varnish Caches
comments:
  - author: kenya
    email: kenyajamison@ymail.com
    date: 01/10/2011 04:26:52 PM
    text: >
      how do i use it on a school computer
date: 2010-12-29
tags: varnish
---
I use this script and the "expect" command line utility to purge Varnish caches on remote systems:

<pre class="sh_sh">
#!/usr/bin/expect
set 1 $argv
spawn telnet 192.168.1.99 6082
expect "Escape character is '^]'."
send "url.purge $1\n"
expect "200 0"
close
</pre>

Cool, huh? Varnish is really great.

¥

