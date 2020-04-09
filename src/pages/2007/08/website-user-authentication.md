---
title: Website User Authentication
date: 2007-08-24
tags: none
author: Albert Lash
---
I value privacy, and to get it I use encryption. To use encryption on a website, you can use SSL, but to use SSL you need a certificate, and to have the certificate match the domain, <strong>you need a separate IP number for each certificate / domain</strong>. That's no good!

If you only want to encrypt the user name and password transmissions, your alternatives include HTTP digest authentication, logging in through a common domain using a single SSL cert, and javascript encryption. Each of these has a price, but in my opinion its better than the cost of SSL certs and IP addresses for each of your domains.

Why bother with so many domains? For branding purposes of course! :-)

Choose your own adventure:* Username and password in one form using http digest* Username on one page, password on next, can use username to retrieve salt to encrypt password during transmission, non-existent users get a consistent yet randomly generated salt result

There are<strong> advantages to using web server based digest authentication </strong>alongside an application:* you can let the webserver quickly serve private information that don't require complex application logic, like images, otherwise you'd have to feed them through the scripting language, which is potentially bad for performance* you can improve the security of the transmission of the password over unencrypted channels* the server is protected even if the script / application malfunctions

Once the user has authenticated using http digest authentication, the application can go ahead and start a session for the user, as well as do its own authentication, and initialize a permissions roster for that user.

Like some have suggested, I don't recommend having your PHP or scripting language handle the digest authentication on its own. This won't give you as many benefits as having both the server and the scripting language manage the authentication and session.

One problem I encountered using http digest is that the password MUST be stored in an MD5 hash (no salt) on the server (along with the realm and the username). This is incompatible with other authentication mechanisms, which use part of the hashed password as the salt used to calculate the password hash. That is a better way to store the password, but it isn't implemented in the digest format. Furthermore, if you wanted to provide flexible access to authenticate both against the web server and the scripted application, you'd likely need to use Apache, as it has the ability to authenticate via pam, and thus all of its modules.

Seeing how we're balancing design with practical needs, I'm starting to think that <strong>the best practice is to store passwords in multiple formats</strong>.

If you don't need to bother authenticating to the web server yet still want to encrypt the password before transmission over an insecure channel, you can use javascript to to the encryption instead of the browser, and change the way it hashes the password before transmission, but this requires a two stage process. First the user identifies themselves by sending their username, then the server fetches and sends the salt back to the user, which is then used to hash the password before sending the password back to the server to compare with the one stored in the database. Depending on the network performance between the client and the server, this could be completed in one fell swoop, but that might be tricky. Also, to authenticate against both the web server and the application, you would still need to have more than one password.

The point to all this is to setup a system that is reasonably secure. First off, storing passwords in cleartext in a database is a bad idea, it causes many legitimate bad practices to occur, like systems administrators retrieving passwords for users. Isn't it nice to say - "I don't know your password, it is hashed in the database". Beyond that, while it is possible to crack md5 based algorithms, it isn't practical or legal (though I am not a lawyer!). Depending on your use, you should consider the other options as well, like SSL and VPNs.

<a href="http://pajhome.org.uk/crypt/md5/auth.html">http://pajhome.org.uk/crypt/md5/auth.html</a>

<a href="http://www.peej.co.uk/articles/http-auth-with-html-forms.html">http://www.peej.co.uk/articles/http-auth-with-html-forms.html</a>

<a href="http://daptivate.com/archive/2007/04/02/hacker-s-challenge-2-crack-the-ajax-login-control-plain-text-provided.aspx">

http://daptivate.com/../ajax-login-control-plain-text-provided</a>

<a href="http://code.google.com/p/ajax-login-system/">http://code.google.com/p/ajax-login-system/</a>

<a href="http://www.clipperz.com/">http://www.clipperz.com/</a>

<a href="https://www.passlet.com/">https://www.passlet.com/</a>

NEW LINK:

<a href="http://joseph.randomnetworks.com/archives/2007/09/19/http-basic-authentication-a-tale-of-atompub-wordpress-php-apache-cgi-and-ssltls/">joseph.randomnetworks.com/http-basic-authentication-php-apache-cgi-and-ssltls/</a>
