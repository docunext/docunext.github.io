---
title: Example MongoDB Application
date: 2010-03-04
tags: mongodb,ruby,sinatra,xsl
---
In addition to Docunext, I also work on a website called [Informed Banking](http://www.informedbanking.com/).

Like Docunext, it also has a blog and a wiki, but it also has a bank directory which I just happened to rebuild using Ruby 1.9.1, Sinatra, XSL, Builder, Erubis, Markdown, and MongoDB. The old bank directory used Nexista and MySQL and that worked well for approximately five years. However, it would break from time to time and was difficult to maintain, alter, or update.

The new one was a breeze to create. It took about a week to rebuild and only a couple hours each day. I'm deploying the code with Vlad, which makes a world of difference.

The really cool thing about using MongoDB is how easy it is to filter the data based upon different indices, like state, zip code, or even city and state.

Without further ado, here's a link so you can peruse it and try out the cool new features:

<a href="http://www.informedbanking.com/ibbl/">The New and Improved Informed Banking Bank Directory</a>

Enjoy!

