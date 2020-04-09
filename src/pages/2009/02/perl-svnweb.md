---
title: Perl SVN Web
date: 2009-02-23
tags: none
author: Albert Lash
---
I'm trying to fix this bug:

<a href="http://www.docunext.com/2008/10/22/svn_ra_get_log-assertion-path-failed/">Assertion `*path != '/'' failed.</a>

I was able to fix some stuff, and now I'm trying to use Alien::SVN. Awesome! It worked!

On a debian system, I used CPAN to install Alien::SVN, like this:

<pre  class="bash">
cpan
force install Alien::SVN</pre>

It took me a few times to figure out that when prompted to configure Subversion, I had to use /usr/lib as the libdir:

<pre class="bash">
Run Subversion's configure now? [y ]
y
Would you like to pass any arguments to configure? [--libdir=/usr/local/lib/perl/5.10.0/Alien/SVN --prefix=/usr/local ]--libdir=/usr/lib</pre>

