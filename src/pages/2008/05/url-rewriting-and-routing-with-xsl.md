---
title: URL Rewriting and Routing with XSL
comments:
  - author: Jose E.
    email: tank6b@gmail.com
    url: http://nlapse.com
    date: 11/07/2008 08:22:29 AM
    text: >
      Can you explain how to do it with Nexista?
  - author: Albert
    date: 11/19/2008 01:44:25 AM
    text: >
      I've finally got an example setup with Nexista - check out phunkybb.
date: 2008-05-24
---
Being a fan of Apache, I've read the mod_rewrite guide a few times. Its very cool stuff, and allows you to do almost anything you want with URLs. If you've interacted with the rewriting capabilities of mod_rewrite, you know its raw power, and sometimes its capacity is overkill, and something more flexible is required.

Therein lies the concept of url routing. I'm not a fan of that name at all. Routing to me means defining connections between separate networks, but the name has stuck.

<h4><b>Frameworks that use Routing</b></h4>
Ruby on Rails and Symfony are two that I'm aware of, and I'm sure that there are many more. What I do like about the way they manage the routing specifications - in a configuration file. Symfony uses YAML, and while I prefer XML, the idea is the similar enough to give me a sense of like-mindedness.

<h4><b>Downfalls of Routing</b></h4>
Sometimes routing can actually obfuscate what's going on, that's why a lot of times I like to keep the url as the default query string parameters that are used by browsers and web servers by default on private applications.

<h4><b>Benefits of Routing</b></h4>
However, when it comes to public resources, the url can serve as another preview for users to see before visiting a website.

<h4><b>Routing with XSL</b></h4>
XSL isn't really designed for routing as far as I can tell, but it is possible to integrate a routing process into an XSL framework, like <a href="http://www.nexista.org/blog/">Nexista</a>.

http://www.symfony-project.org/book/1_0/09-Links-and-the-Routing-System

http://api.rubyonrails.org/classes/ActionController/Routing.html
http://wiki.rubyonrails.org/rails/pages/Routes
http://manuals.rubyonrails.com/read/chapter/65

¥

