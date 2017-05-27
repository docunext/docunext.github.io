---
title: Debian Perl Conflict libxml sax perl local version
comments:
  - author: JOhn
    email: john.z.olson@gmail.com
    ip: 127.0.0.1
    url:
    date: 05/01/2009 02:55:34 PM
    text: >
      Thanks for the info this was exactly what I needed to get out of the spot I was in! That will teach me to use cpan in distros.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 127.0.0.1
    url:
    date: 05/01/2009 11:13:33 PM
    text: >
      Glad to help John, and thanks for commenting!
  - author: Swathy prabhu
    email: swathyprabhu@gmail.com
    ip: 127.0.0.1
    url: http://www.rkmvu.ac.in
    date: 05/22/2009 02:42:03 AM
    text: >
      Thanks Albert.  A newbie like me otherwise could not have crossed this hurdle so easily...
  - author: Albert
    email: albert.lash@savonix.com
    ip: 127.0.0.1
    url:
    date: 05/22/2009 03:59:23 AM
    text: >
      Hey Swathy - thanks for commenting, glad I could help!
  - author: Hanz
    email: hanzam@gmail.com
    ip: 60.53.138.164
    url:
    date: 08/08/2009 11:41:31 AM
    text: >
      It was so GREAT....thanks man !!!!
  - author: J. Alves
    email: jotajj@usp.br
    ip: 128.172.67.111
    url:
    date: 11/30/2009 04:13:01 PM
    text: >
      I was searching for this too, and it's a well known incompatibility.<br/><br/>This is a problem in the interaction between the CPAN version of XML::SAX and the one Debian packages, or something like that.<br/><br/>When I followed the error's message advice and read /usr/share/doc/libxml-sax-perl/README.Debian.gz (no need to uncompress, just use "less") and used the little Perl script at the end of that to remove XML::SAX (have to "sudo" or it does not do it and does NOT give error, just looks like it was done), things worked fine.
  - author: Mag
    email: mag@laposte.net
    ip: 62.244.82.38
    url:
    date: 07/19/2010 10:52:16 AM
    text: >
      Thank you so much!!<br/>
date: 2009-04-25
tags: debian,perl,shell,xml
---
I am running into an error with Perl on Debian, more specifically a conflict with libxml-sax-perl.

<pre class="sh_sh">
Preparing to replace libxml-sax-perl 0.96+dfsg-1 (using libxml-sax-perl_0.96+dfsg-1_all.deb) ...
Unpacking replacement libxml-sax-perl ...
Setting up libxml-sax-perl (0.96+dfsg-1) ...
update-perl-sax-parsers: Registering Perl SAX parser XML::SAX::PurePerl with priority 10...
Fatal: cannot call XML::SAX-&gt;save_parsers_debian().
You probably have a locally installed XML::SAX module.
See /usr/share/doc/libxml-sax-perl/README.Debian.gz .
dpkg: error processing libxml-sax-perl (--install): subprocess post-installation script returned error exit status 1
Processing triggers for man-db ...
Errors were encountered while processing: libxml-sax-perl
</pre>

I was able to work around this using:

<pre class="sh_sh">
cd /usr/local/share/perl/5.10.0/XML/
mkdir dnu
mv SAX* dnu/
apt-get install libxml-libxml-perl
</pre>

¥

