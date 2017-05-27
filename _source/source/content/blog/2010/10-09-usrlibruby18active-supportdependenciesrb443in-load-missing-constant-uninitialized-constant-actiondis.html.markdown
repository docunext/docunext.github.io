---
title: usr lib ruby 1.8 active support dependencies.rb 443 in load missing constant uninitialized constant ActionDispatch NameError 
date: 2010-10-09
tags: activesupport,gems,rails3,ruby 1.9
---
Whoa! This is an interesting error.

Turns out I initialized my rails environment with the 1.9 rubygems version of rails, which is at version 2, and then was trying to run it with 1.8 rubygems - where I have rails version 3 setup. (During this process, I came up with a way to easily switch back and forth, see: )

Needless to say, unicorn, rack, and friends were all very confused!

I re-initialized my rails environment using the rails command line binary from the ruby 1.8 version of rubygems. Hopefully everything will run smoothly now!

