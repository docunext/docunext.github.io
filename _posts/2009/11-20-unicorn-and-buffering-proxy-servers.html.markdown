---
title: Unicorn and Buffering Proxy Servers
date: 2009-11-20
tags: proxies
---
I recently read up about Unicorn, a web server written in Ruby. The README file states the following:

<blockquote>Unicorn is a HTTP server for Rack applications designed to only serve fast clients on low-latency, high-bandwidth connections and take advantage of features in Unix/Unix-like kernels. Slow clients should only be served by placing a reverse proxy capable of fully buffering both the the request and response in between Unicorn and slow clients.</blockquote>

This is a very clear and concise explanation of on example of how and when HTTP proxies might be used.

Everything I've read about Unicorn has been well put, and since there is more to read - I'm on it! :-)

