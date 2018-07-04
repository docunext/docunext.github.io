---
title: Ruby Unicorn
date: 2009-12-16
tags: rack,ruby,unicorn
---
I've read some positive words about Unicorn, so I decided to try it out, even though its not in the debian repositories yet.

I haven't noticed anything out of the ordinary with it yet, but I am pleased to report that it is working fine with Regdel. Only glitch is that each request gets logged twice - could be a misconfiguration on my part. Yup - I commented out "#use Rack::CommonLogger" in my config.ru and now each request is only logged once.

What is Unicorn? Its a Ruby-based webserver, is Rack compatible, and stays true to the UNIX philosophy.

