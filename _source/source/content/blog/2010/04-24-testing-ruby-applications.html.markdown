---
title: Testing Ruby Applications
date: 2010-04-24
tags: rack,rspec
---
I feel more empowered when using Ruby than almost any other tool I've ever used. Besides how awesome that is unto itself, my experience using it thus far has inspired me to push beyond my comfort zone and work on areas where my programming skills need improvement.

Testing is one of these areas that needs improvement. I've always respected the importance of testing software, but I was often so daunted by the scope of what can, in general, be done with software. Its often so flexible and configurable, I have a tough time balancing between non-exhaustive tests and tests which could become "big O" problems of their own.

Thankfully I'm starting to see some convergence between the scope of the tasks and the tools at my disposal. I'm starting to get comfortable with expansive, maybe even factorial style programming, where I'm instructing other instructions on how to create new instructions, and my work is increasingly focused on less complex applications.

More specifically, I'm using the **Rack::Test::Methods** mixin with **RSpec**, and that is making things nice and straightforward. I don't consider these "real world" tests because they lack the involvement of web browsers and thus cannot process javascript, but in my experience it is a solid testing platform.

I'd like to evolve to using **Webrat**, **Watir**, or **Selenium** or some combination of those at some point in the near future, but I just haven't had the time as of late.

Cucumber looks interesting, too, but its not for me. I prefer to develop more rapidly.

This is a helpful page:

* <http://www.sinatrarb.com/testing.html>

