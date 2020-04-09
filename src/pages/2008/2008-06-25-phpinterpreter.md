---
title: PHP Interpreter
comments:
  - author: 7ota
    email: 7ot@7ot.cc
    date: 07/10/2008 07:38:24 AM
    text: >
      do you mean you have a success result with PHP::Interpreter ?
  - author: Albert
    email: albert.lash@savonix.com
    date: 07/10/2008 08:17:51 AM
    text: >
      I 70ta - yeh - I did get it to work successfully. Its a really interesting idea, don't you think?
  - author: 7ota
    email: 7ot@7ot.cc
    date: 07/10/2008 01:08:45 PM
    text: >
      Yeah , i know its good idea :D<br/><br/>but i faced a lot of failed steps when i install it , do you mind if you tell me what is the way that you followed to install it ?
  - author: Albert
    email: albert.lash@savonix.com
    date: 07/10/2008 01:14:53 PM
    text: >
      Are you on Debian?
  - author: 7ota
    email: 7ot@7ot.cc
    date: 07/10/2008 01:18:06 PM
    text: >
      iam on Centos 4
  - author: Albert
    email: albert.lash@savonix.com
    date: 07/11/2008 11:35:19 AM
    text: >
      Hmmm, well I'm not too sure on how to work on Cent OS, but what have you tried so far? Maybe I can help if I understand your specific problem better. Have you downloaded the php src?
  - author: 7ota
    email: 7ot@7ot.cc
    date: 07/31/2008 03:05:16 PM
    text: >
      Yes i tried it several times , visit more than 10 Sites that talk about PHP::Interpreter and no succes result , i tomorow i will try to compile php without apache becuz some thread on the net say may be i want to compile php without apache :S
  - author: Albert
    email: albert.lash@savonix.com
    date: 07/31/2008 03:16:56 PM
    text: >
      Hi 7ota - yeah try that. I use fastcgi instead of PHP as an apache module...
date: 2008-06-25
tags: perl,php
---
This looks very interesting... should be helpful in getting me more acquainted with perl. To install on Lenny, I first installed php5-dev, but unfortunately that still didn't do it. Looks like this module needs the --embed option set in the php interpreter to be used. Going to have to hold of on this to install it on a testing environment rather than a development machine.

Now I'm trying to get PHP installed in such a way I can use it... I tried getting the perl makefile to use the php headers installed by debian, but it wants to look in /usr/local/*. Hmmm.

UPDATE: I was able to get this going. :-)

* php-5.2.6* ./configure --enable-embed=shared --enable-maintainer-zts
* make
* make install

That put the new php into /usr/local. Then I installed PHP::Interpreter manually after trying to get it via CPAN, which didn't happen. When I tried to use it, I got complaints about Exporter, so I added that as a use include, and it worked! Getting it to work with mod_perl and even as a regular cgi-bin file was challenging, but I got it to go:
<h4>CGI</h4>

<pre class="sh_perl">#!/usr/bin/perl
use Exporter;
use PHP::Interpreter;
print "Content-Type: text/html\
n\
n";
my $php = PHP::Interpreter-&gt;new();
my $old_hander = $php-&gt;set_output_handler(\
$scalar);
my $output = $php-&gt;eval(q^ phpinfo(); ^);
my $outbuf = $php-&gt;get_output;
print $outbuf;</pre>

<h4>mod_perl</h4>

<pre class="sh_perl">
sub handler {
  my $r = shift;
  my $php = PHP::Interpreter-&gt;new();
  my $scalar;
  my $old_hander = $php-&gt;set_output_handler(\
$scalar);
  my $output = $php-&gt;eval(q^ phpinfo(); ^);
  my $outbuf = $php-&gt;get_output;
  $r-&gt;print($outbuf);
  return Apache2::Const::OK;
}</pre>

Why bother doing this? The novelty of it is pretty good by itself!

Next up, a more challenging configuration setup:

<pre class="sh_sh">
    --enable-embed=shared \
    --enable-maintainer-zts \
    --disable-rpath \
    --disable-static \
    --with-pic \
    --with-pear=/usr/share/php \
    --enable-calendar \
    --enable-sysvsem \
    --enable-sysvshm \
    --enable-sysvmsg \
    --enable-bcmath \
    --with-bz2 \
    --enable-ctype \
    --without-gdbm \
    --with-iconv \
    --enable-ftp \
    --with-gettext \
    --enable-mbstring \
    --enable-shmop \
    --enable-sockets \
    --enable-wddx \
    --with-libxml-dir=/usr \
    --with-xsl=/usr \
    --with-zlib \
    --with-openssl=/usr \
    --enable-zip</pre>

The Server API 	Ham and Cheese ?

External Links

* <a href="http://search.cpan.org/dist/PHP-Interpreter/lib/PHP/Interpreter.pm">cpan.org/dist/PHP-Interpreter/lib/PHP/Interpreter.pm</a>
* <a href="http://www.perlmonks.org/?node_id=612502">http://www.perlmonks.org/?node_id=612502</a>
* <a href="http://search.cpan.org/src/GSCHLOSS/PHP-Interpreter-1.0.1/README">http://search.cpan.org/src/GSCHLOSS/PHP-Interpreter-1.0.1/README</a>

¥

