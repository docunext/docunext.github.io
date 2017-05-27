---
title: Apache 2 mod proxy
date: 2009-02-23
tags: apache,proxies
---
I'm working with Apache 2 as a proxy again. Its pretty amazing how powerful it is - especially when it comes to filtering content.

The mod_ext_filter provides the ability to insert practically anything that can take input via stdin and output results via stdout and make it a filter. For example, sed, discount, and source-highlight can all be used to alter content in transit from a back-end to a client.

So cool!

