---
title: SASL authentication failure cannot connect to saslauthd server No such file or directory RESOLVED 
comments:
  - author: Marc Richter
    email: mail2010@marc-richter.info
    url: http://www.zoosau.de
    date: 08/14/2010 11:22:30 PM
    text: >
      Great , thanks a lot! :) I had to use it vice versa, but that gave me the hint to chroot :)
  - author: Albert
    email: albert.lash@savonix.com
    date: 08/17/2010 01:57:02 AM
    text: >
      Glad to help Marc, and thanks for commenting!
  - author: Scott
    email: scottlinux@gmail.com
    url: http://scottlinux.com
    date: 12/14/2010 10:30:43 PM
    text: >
      Thanks - I had this exact same issue. Resolved!
  - author: Olivier
    email: olivier@blackswan.fr
    date: 12/30/2011 07:00:10 AM
    text: >
      Dude, you saved my day!
  - author: Jcampos
    email: jcampos79@gmail.com
    date: 03/28/2012 12:42:56 AM
    text: >
      Thanks Sr...
date: 2010-08-06
tags: debian,dkim,docunext,errors,postfix,sasl,smtp
---
This is a blog post about an error I found in my /var/log/mail.log file reported by postfix: "**SASL authentication failure: cannot connect to saslauthd server: No such file or directory**", and the solution I used to resolve it.

First off, this turned out to be a very interesting error! As I explained on the Docunext Wiki Postfix page in the section about using [Postfix and Saslauthd on Debian](http://www.docunext.com/wiki/Postfix#Postfix_and_SASL), Postfix processes must run under a chroot.

While the submission service (port 587) in /etc/postfix/master.cf usual runs under a chroot, I had added a new submission directive to relay outgoing messages through dkimproxy:

<pre class="sh_sh">
submission  inet  n     -       n       -       -       smtpd
    -o smtpd_etrn_restrictions=reject
    -o smtpd_sasl_auth_enable=yes
    -o content_filter=dksign:[127.0.0.1]:10028
    -o receive_override_options=no_address_mappings
    -o smtpd_recipient_restrictions=permit_mynetworks,permit_sasl_authenticated,reject
</pre>

For some reason, I had set chroot to "n", and so it was unable to connect to the saslauthd socket!

The resolution for me was to simply change the second "n" to "-", like so:

<pre class="sh_sh">
submission  inet  n     -       -       -       -       smtpd
</pre>

Voila!

¥

