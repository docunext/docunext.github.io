---
title: Heroku
comments:
  - author: Albert
    date: 08/20/2009 09:49:10 PM
    text: >
      They also use Debian which is awesome. I found it quite interesting that they place Varnish behind Nginx. I do it the other way around so that NGINX can compress the documents before they are cached. Hmmm, maybe both are good ways to operate.
date: 2009-08-18
tags: erlang,heroku,postgres,rails,ruby
---
Heroku is a new Ruby application hosting platform. I signed up for their free service - looks really nice. They support Rails, Merb, Sinatra, and raw Rack applications.

The service uses Varnish and NGINX, Postgres, even an Erlang system for managing their grid! One nice thing about erlang is it apparently very stable and resilient.

<a href="http://heroku.com/">Heroku</a>

¥

