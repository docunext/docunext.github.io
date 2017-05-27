---
title: NGINX Proxy Cache and Proxy Store
date: 2009-06-05
tags: none
author: Albert Lash
---
NGINX has some awesome proxy features which make it a competitor to Varnish. It doesn't have all the fancy features of varnish, nor does it have the VCL language for configuration.

On the major plus side, it doesn't consume as much memory, and its proxy store feature is an easy way to create local copies of remote files. It doesn't check for freshness though.

I'm using it on low-memory systems instead of Varnish.

