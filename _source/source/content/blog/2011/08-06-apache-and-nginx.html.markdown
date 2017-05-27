---
title: Apache and NGINX
date: 2011-08-06
tags: apache
---
For what its worth, having a bit-buffer-bucket-brigade proxy like NGINX in front of Apache is an excellent idea in almost every situation. Apache, and Ruby web applications, are smart, sophisticated, and memory intensive services that should focus entirely on processing, not managing connections. Honestly, I LOVE Apache, but it can manage connections about as well as I can play the violin, which is to say, not very well, at all.

NGINX on the other hand can handle tens of thousands of connections without skipping a beat and using hardly any memory at all. In that case, keepalive on NGINX makes perfect sense - it would act as a proxy to Apache and complete the transaction with it about as fast as possible and store the content in its buffer, all the while serving data out to the client at whatever rate they can transfer. Note, the HTTP client for NGINX that makes the connection to Apache uses HTTP 1.0, not 1.1, which does not support keepalive, so again in that scenario keepalive on Apache should be shut off.

This article "I like Unicorn because its Unix" is great because it explains how different server types behave:

* <http://tomayko.com/writings/unicorn-is-unix>

