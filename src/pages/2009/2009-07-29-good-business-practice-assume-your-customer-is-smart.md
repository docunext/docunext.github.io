---
title: Good Business Practice Assume Your Customer is Smart
date: 2009-07-29
tags: hosting,troubleshooting,vps
---
Prgmr.com has a saying: "We don't assume you are stupid."

Its a good statement, because I believe that there are many systems administrators who run into problems with vendor systems administrators who assume that I have no clue what I'm talking about. It makes it difficult to resolve the situation, and it doesn't have to be that way.

Years ago I found humor in the Dreamhost support request form that gave options such as "I'm a newbie", "I know what I'm talking about", and "I don't mean to brag, but I probably know more about this than you do". Beyond the humor - its very helpful information!

I like Prgmr.com's statement, but their actions are even more of a plus. In my experience, they've assumed that I'm smart, and I appreciate that. I am good at troubleshooting - like today, why wouldn't my recently installed varnish package start? I tried running it manually and received the following error:

 <pre class="bash">myprgmracct:~# varnishd "-a :80 \
             -T localhost:6082 \
             -f /etc/varnish/default.vcl \
             -s file,/var/lib/varnish/myprgmracct.xen.prgmr.com/varnish_storage.bin,1G"
getaddrinfo(): Name or service not known
</pre>Aha! I remembered seeing no localhost entry in /etc/hosts. No problem - I added it: "127.0.0.1 localhost" and it started without issue.

It would probably be a good idea to include this entry as a default as many distros do. Just a suggestion.
