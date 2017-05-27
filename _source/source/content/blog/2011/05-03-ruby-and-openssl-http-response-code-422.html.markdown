---
title: Ruby and OpenSSL HTTP Response Code 422
date: 2011-05-03
tags: ruby
---

Here are my Ruby and Ruby on Rails notes for this week! They involve OpenSSL and the 422 HTTP response code.

#### Ruby and OpenSSL

I tried using RVM on Debian Wheezy last week and <tt>rvm install ree</tt> was flailing miserably. A little spelunking led to the fact that Wheezy uses OpenSSL 1.x! Wow, imagine how long openssl has been around, and its finally reached "1.0"! Was there an announcement?

The solution was not a big deal. While there are some patches to the ruby code, I opted to add the squeeze repositories and install openssl 0.9.8. The same should work for ubuntu, as I actually discovered many other folks who ran into a similar problem on ubuntu.

#### Response Code 422

While running a rails test this week, one of my assertions failed and I could not figure out why. I then dig some quick spelunking and found it to be that part of the controlled which response with "unprocessable entity" for XML requests. Indeed I was using <tt>xhr</tt> in my test. That really narrowed it down and I was able to change my xhr request to pass the assertion.

