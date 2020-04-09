---
title: Apache 2.2 DBD Module
comments:
  - author: Shawn
    email: holwegner@gmail.com
    url: http://www.holwegner.com/
    date: 09/22/2007 09:53:40 PM
    text: >
      I feel your pain.<br/><br/>Feel free to lift my little 'walkthrough'; it's fairly commented, and I came to essentially the same conclusions in April.  :)<br/><br/><a href="http://www.holwegner.com/article/448/fixing-debian-etchs-broken-apache-mod_dbd" rel="nofollow">http://www.holwegner.com/article/448/fixing-debian-etchs-broken-apache-mod_dbd</a>
  - author: admin
    date: 09/22/2007 10:40:04 PM
    text: >
      Hi Shawn, thanks for commenting. I checked out your site - very cool. Thankfully, the MySQL drivers are now in Apache's SVN base, so we might have it in the next release. :-)<br/><br/><a href="http://bahumbug.wordpress.com/2007/09/05/new-dbd-drivers/" rel="nofollow">http://bahumbug.wordpress.com/2007/09/05/new-dbd-drivers/</a>
date: 2007-09-11
tags: apache,ssl
---
The new Apache 2.2 DBD module, at least the one that's included in Debian's package repository, isn't ready for prime time yet, but its close.

Yesterday I spent the day getting <a href="http://www.docunext.com/">Apache compiled with DBD and apr_dbd_mysql.c</a>. My notes are a mess but they may be of use to you, I'm sure they'll be useful to me pretty soon!

What's this new module all about? It provides access to SQL databases. What's the big deal with that? Well it will provide much better resource management, meaning a more efficient web server. **It will also provide the ability to tie easily managed  authentication to your apache web server**. This is a good thing TM. Most people don't want to have to manage dbm hash and or htpasswd files all over the place, so they use a rdbms to store their user's credentials which would usually require a scripting language module or cgi program to access. There are a couple of problems with that, if there is an error in the scripting language or a configuration change on the server, a malfunction could cause a security breach, and it also uses system resources inefficiently. Most of the time this is not a big deal, but since the practice of authenticating web users has become so commonplace, its nice to know that this optimized module can be used very soon.

Unless you wanted to fiddle with javascript or use SSL, you'd be sending your credentials in cleartext over the internet, which isn't any fun. The new module **mod_dbd can even use digest authentication**, which isn't perfect, but is way better than cleartext.

My guess is that we'll also see this module getting used with mod_rewrite to provide the ability to store rewrite rules in a database. Wouldn't that be awesome! While it's possible to do today using the prg: hook, its not the best solution.

I'm hoping to see mod_dbd empower apache to log directly to a sql database. That would be magnificent!

Special thanks to:

<a href="http://bahumbug.wordpress.com/2007/09/05/new-dbd-drivers/">http://bahumbug.wordpress.com/2007/09/05/new-dbd-drivers/</a>

<a href="http://packages.qa.debian.org/a/apache2.html">http://packages.qa.debian.org/a/apache2.html</a>

¥

