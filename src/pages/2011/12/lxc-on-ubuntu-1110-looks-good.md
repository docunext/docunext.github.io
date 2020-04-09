---
title: LXC on Ubuntu 11.10 Looks Good
date: 2011-12-25
tags: git,lxc,openvz,ubuntu
---
I upgraded my Lenovo g555 laptop to Ubuntu Oneric Ocelot on Friday and it was
a little rocky, but now its working really well.

I have setup a few new / different items:

* I'm using the ATI proprietary driver, much to my chagrin solely because it
  gets less hot than the open source one. As far as performance goes, I don't
  notice a difference, but no doubt - KMS is awesome. The raw terminals look
  magnificient. Specifically, using this makes all the difference:

<pre> amdconfig --px-igpu </pre>

* I am now using ext4 for the /home directory. I was hesitant to use ext4
  because ext3 is so reliable, but then I read about some basic performance
  factors - like extents specifically, so I'm giving it a go.
* While I'm using OpenVZ extensively these days, I'm now checking out LXC for
  a development environment on my laptop. I actually just setup another user
  account "app" that I ssh into (yes, ssh'ing to the same machine - for ssh
  forwarding), and that's working OK because I've got Ruby installed with rbenv,
  but I want to encapsulate mysql, and I don't want it polluting my base
  workstation OS.
* I'm also using libnss-extrausers because it is awesome - I'd rather use
  something like puppet or csync2 to manage hard files instead of using ldap
  - maybe even something like git-annex for that, or maybe just plain git.

I'm still doing plenty the same:

* Gnome + Awesome
* Still using rbenv, homesick, and major dotfiles in my home directories (which
  is why I split my laptop user with the development user)
* Still using jEdit, sorta.

I'm no longer using:

* Picasa3 - see ya! I'm tired of Wine, and realized I can manage my images
  better than Picasa can.
* No longer bothering with the default folders in my home

Other stuff catching my attention:

* Fuse BindFS
* mbr
* mr (not related)
* caspar ( see [this](http://www.hoppie.nl/pub/node/79))

Probably going to stick with csync2, maybe? Actually I'm liking the idea of
simply using git more and more. There are actually plenty of folks doing this,
and here's the best example I found:

* <http://git.rot13.org/?p=bak-git.git;a=blob;f=bak-git-server.pl;hb=HEAD>
