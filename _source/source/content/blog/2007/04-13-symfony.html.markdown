---
title: Symfony
date: 2007-04-13
tags: none
author: Albert Lash
---
I'm finally trying out <a href="http://www.symfony-project.com/">symfony</a>! <ol><li>Installed framework via pear</li><li>Downloaded sandbox site</li><li>Viewed welcome page!</li></ol>

That was pretty easy. I actually didn't need to install both the sandbox and the pear library, but I did anyway. It appears that the sandbox download includes all the libraries.

The next steps were just as easy, though I had to install sqlite for php5. On debian, this was done:

<pre>apt-get install php5-sqlite</pre>

And then I added these to the /etc/php5/apache2/php.ini file:

<pre>extension=php_pdo.so

extension=php_sqlite.so </pre>

but that's gotta be wrong, because I'm getting this:


I confirmed that pdo was loaded with:

<pre><?php

phpinfo();?></pre>

in a temp.php file, and yes it is:


So I tried rebuilding the symfony propel stuff from the command line, and it worked! I can see why they use sqlite for the initial module, its nice and easy to get going.

Great work Fabien, and thanks again to Joshua for introducing me to symfony (and a bunch of other awesome php / linux stuff, like Gentoo!)

Based upon this very positive experience, I may just try to somehow merge what I like about nexista with what I find helpful about symfony. I've created ALOT of applications with nexista, so I won't ditch nexista any time soon. To review, my favorite things about nexista are:

<ul><li>Separation of code, database I/O, and presentation</li><li>Speed</li><li>Use of widespread open standards like XSL and XML</li><li>Role based authentication</li><li>Minimalist design - Joshua did a great job of limiting the scope of nexista</li></ul>

Things I like about symfony so far:

<ul><li>There is book</li><li>Large user community</li><li>Internationalization support</li><li>Caching</li><li>Well organized</li><li>Nice DB IO</li></ul>

Things I don't like about symfony:

<ul><li>Yaml - I'm sure its fine, but xml is just so basic it can't be beat imho</li><li>No xsl support that I've seen yet</li></ul>

In my mind, I'm pretty pumped up about wordpress (and bbpress), nexista, mediawiki, and symfony these days. Something will probably come of excitement!

