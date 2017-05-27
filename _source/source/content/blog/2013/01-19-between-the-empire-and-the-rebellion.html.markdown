---
title: Between the Empire and the Rebellion
author: Albert Lash
tags: golang,computer science
date: 2013-01-19
---
I just read [Why I Program in Go][tahir] by Tahir Hashmi and really enjoyed it.
It traces his path through Python, PHP, Java, C++ and now to Go, and
some of his commentary echoed my own past (though my experience with Ruby sounds
like his experience with C++). My primary languages are PHP, Ruby, and
Javascript.  I'm on the verge of diving into Go based on a single premise:
**static-linked binaries**.
I like single-file static binary web apps because of my dual-experience as
sysadmin and developer. It is difficult to both build and maintain custom web
apps; the tasks are often delegated to separate people or teams with great
success. Doing both inspires and liberates me but the cost of maintaining
dependencies spawned by that same liberating inspiration is crushing. Debian
handles dependencies successfully but I did not find their strategy applicable
to custom web app dependencies. It is perfect for the underlying system, but 
but not for me as an individual developer leveraging a wide range of external
resources.
I've used Ruby's bundler tool with moderate results; it takes a hybrid approach
by dynamically bundling all dependencies along with each deployment resulting 
in what seems like a static deployment. But the dependencies are still there;
they can still fail and they are not shared ^1. As such it worsens what many
dislike about Ruby: its performance and memory consumption, resulting in
a different type of fragility where a creation can collapse under its own
weight.

I've partly avoided the issue of dependencies by switching most of my personal
web apps (blogs) to static HTML files with the dynamic bits powered via
Javascript. I like that strategy, but its new for me and I expect it to evolve,
or maybe, devolve, into
something similar to the cgi-bin isolation from days past. I can definitely say
that the reliability factor of static HTML files has been a serious relief. If
I try out Go and find a similar relief when deploying a full application I will
be greatly satisfied. Keeping web applications up-and-running 24/7/365 is a lot
of work, but it doesn't have to be that way. We've put up with it for
so long because its an interesting challenge. But remember: the future _always_
holds interesting challenges for us. Its time to move on.

I don't want to waste time chasing a rabbit, so as Tahir mentions, the folks
behind Go should make it a worthwhile venture. But there are lots of accomplished
people out there who are doing insubstantial work. Prior feats of those involved
are not enough for me and brings me back to the salient factor: **static-linked
binaries**. I could build a small project, deploy it, and monitor its
reliability. It would need to serve enough purpose to stand the test of time,
and not fade away; a "middle ground", if you will.
Web applications massively thrive or quickly fade, and I bet there is
room for something in-between. I would find comfort there and it would
encourage diversity and free expression. Software doesn't have to be either the
empire or the rebellion.

I want to express myself with the best tools available, but not at the
expense of my expressions. I have much to contribute, and little time to do it.
More than express myself, I want to build great things. I've chosen software to
help me accomplish that. Sophisticated tools are prone to malfunction if they
are not routinely maintained and I've found that many of my creations do not
stand the test of time, and I want them to. If Go can bring more persistence to
my creations, it will be useful to me. This is my rationale for taking
the time to build something in Go and observe its wherewithal over the
ensuing years.

##### Update January 21, 2013
I built a simple CGI binary in Golang this weekend and the experience was highly
positive and I'm planning to delve further into it soon. For now I'll briefly
share my notes:

* Building go for 386 architecture was fun, I develop on AMD64 but deploy to 386
* Go's dependency management system is crazy good; the compiler tool-chain
  includes support for package distribution like rubygems or the cheese shop
* As new as Go is, there are an impressive number of library bindings
* Go binaries are fast, even when run over CGI

My next steps:

1. Create a long running Go app server via an HTTP or FastCGI server 
2. Monitor its memory usage



[tahir]: http://tech.t9i.in/2013/01/why-program-in-go/

^1: Passenger and the Ruby Enterprise Edition helped out a lot with Ruby and
Ruby on Rails memory management and performance by sharing dependencies across
multiple web apps and forked processes. Bundler inhibits those optimizations by
not sharing any dependencies.
