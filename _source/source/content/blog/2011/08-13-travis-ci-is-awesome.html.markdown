---
title: Travis CI is Awesome 
comments:
  - author: gretch
    email: gapolgretchen@gmail.com
    ip: 112.202.98.116
    url:
    date: 09/30/2011 06:33:10 PM
    text: >
      Hi,<br/><br/>I would like to setup Travis CI for my private repos as well. Was it a success?<br/><br/>Thanks
  - author: Albert
    email: albert.lash@savonix.com
    ip: 71.178.29.218
    url:
    date: 10/03/2011 08:44:44 PM
    text: >
      Hi gretch, I haven't set it up locally yet...
date: 2011-08-13
tags: ruby
---
I'm trying out Travis CI for [Regdel](http://www.regdel.com/) and it is awesome! I'm also using it for rack-xsl, and I finally got that to pass.

It took me thirteen tries to get rack-xsl to pass, but that's because my current workstation isn't setup to test it.

What does the CI stand for? Its means continuous integration, and it is a big help when rapidly developing software.

I have hit some stumbling blocks:

* Gems that are from git repositories, like rails-3.1. I had to create local copies of them and then add all my vendor/cache gems to the git repository. Yuck.
* Travis-ci doesn't seem to like bcrypt_ext.

My next step will be to try and setup a Travis CI server for private projects.

¥

