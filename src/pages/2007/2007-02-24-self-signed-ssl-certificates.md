---
title: Self Signed SSL Certificates
date: 2007-02-24
---
With my new m0n0wall, I'm finally getting around to getting my security certificates in order. In my humble opinion, I don't think it makes sense to get a wildcard certificate, or to get a certificate for every domain and sub-domain under the sun. For many reasons, its not a good idea. For example, you need a unique IP address for every separate security certificate, and there simply aren't enough IP numbers to go around.

I imported my self-signed certificates into m0n0wall. It was very easy, just a copy, paste, and reboot and its all set. Now I'm reviewing some of the other services that use SSL certificates, like postfix, courier, jabber, and my KVM-over-ip server.

To do this yourself, I suggest you document everything in a secure manner. You will have to document the process, as there are many pieces of information you'll need to remember, but are way too complex for the average human being to memorize.

Took awhile, but I think I finally got things organized. Here are some links I found useful:

<a href="http://sial.org/howto/openssl/exporting/">Exporting OpenSSL Certificates</a>

<a href="http://sandbox.rulemaker.net/ngps/m2/howto.ca.html">HOWTO: Creating your own CA with OpenSSL</a> - There is an error in this document though, don't try the de-encryption method listed here. Instead, use this instead:

<pre>openssl rsa -in newkey.pem -out newkey.pem</pre>

I first got started in creating SSL certificates for Apache, and then thanks to the famous <a href="http://www.gentoo.org/doc/en/virt-mail-howto.xml">Gentoo virtual mail server howto</a>, I learned more about using SSL certificates for other services. If you haven't read that document, I highly suggest you do.

For Apache, check out <a href="http://www.modssl.org/">mod_ssl</a>.
