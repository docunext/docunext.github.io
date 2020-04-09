---
title: gd2 ffij
date: 2010-05-20
tags: ruby
---
I forked another ruby library today: [gd2-ffij](http://github.com/docunext/gd2-ffij), which happens to be a fork of a fork of sorts.

It provides bindings to the gd2 library (think awesome graphics utility) via ffi (foreign function interface).

There is another ffi interface, gd2-ffi, but its limited in the functionality it covers.

This one didn't work with Ruby 1.9.1 right out of the box, but with a little bit of hackage, I was able to get things going. I reported by experience back to dark panda (J) who responded speedily.

Hopefully this will be the standard GD2 library.

