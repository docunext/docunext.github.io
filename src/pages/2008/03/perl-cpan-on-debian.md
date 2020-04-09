---
title: Perl CPAN on Debian
comments:
  - author: mistermartin75
    email: mistermartin75@gmail.com
    date: 11/13/2008 10:19:39 AM
    text: >
      You rock!<br/><br/>This just solved a problem I've been looking at for two hours. Thanks a lot!
  - author: Albert
    date: 11/13/2008 10:22:50 AM
    text: >
      Hey mistermartin75! Thanks for commenting and letting me know that this post helped you out. Have fun with Debian it is amazingly great.
  - author: Albert
    date: 12/16/2008 08:10:53 PM
    text: >
      I just noticed I had to install libextutils-xsbuilder-perl  using apt-get install when trying to force install Scalar::Util.
  - author: Kamal
    email: kalotus@gmail.com
    date: 03/13/2009 05:25:49 PM
    text: >
      Thanks so much, you saved me a lot of time!<br/>Documentation on Perl XS appears to be quite bad.<br/>Now I have XS version of Scalar::Util and I could get Net::SSLeay (1.35) installed by cpan.<br/>I needed that for having Net::SMTP::SSL installed, which in turn I needed to use Gmail SMTP server in Dada Mail (http://dadamailproject.com/).<br/><br/>So after:<br/><br/>apt-get install gcc libc6-dev openssl libssl-dev<br/><br/>(Maybe some of these isn't needed but I don't care now).<br/><br/>I could finally:<br/><br/>cpan -f Scalar::Util<br/><br/>How could I know that I needed gcc and something else to have the XS version of Scalar::Util?<br/><br/>Thanks again.
  - author: Albert
    date: 03/15/2009 07:48:44 PM
    text: >
      Hi Kamal,<br/><br/>Glad I could help, and thanks for commenting.<br/><br/>On debian you can do "apt-get build-dep packagename" to install the stuff needed to build that package from source.<br/><br/>- Albert
date: 2008-03-06
tags: cpan,debian,perl
---
You don't have the XS version of Scalar::Util

<pre>
cpan> force install Scalar::Util
</pre>

Again I am installing djabberd on debian via cpan, have to install make, gcc, libc6-dev, libxml2-dev, openssl, libssl-dev.

I couldn't get Net::SSLeay to install from CPAN, so I used libnet-ssleay-perl from debian.

UPDATE: See <a href="http://www.docunext.com/wiki/DJabberd_on_Debian">DJabberd on Debian</a>

¥

