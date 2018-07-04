---
title: Creating a PEAR Nexista package
date: 2007-05-23
tags: none
author: Albert Lash
---

I'm planning on creating a PEAR nexista package with the next snapshot. Lots to do! The code needs to be brought up to PEAR's coding standards, a package.xml file needs to be written, and then even a PEAR_Server needs to be setup.

OK, I've got a basic package.xml file, and I'd like to eventually setup a channel, and I'm wondering how the package is built. I just tried "pear package" but its telling me that the channel is unknown. So I changed channel to uri, then it barked about the date not being today, then the lack of a <file> tag, so I fixed those errors, and it worked! It spit out a tarball: nexista-0.1.0.tgz, which only contained the one file I added to the package.xml file. So the pear system is very specific about how the packages are handled. Guess that's a good thing!

Moving on to the real contents of the package, I get this error when I try to add a class:

<pre>Warning: in action.php: class "Action" not prefixed with package name "nexista"</pre>

For example, the Cache_Lite does this:

<pre>class Cache_Lite {</pre>

This is probably a very good idea, because at some point in the future, if nexista tries to play with another program that also has an "action" class, the two will clash. At least this is only a warning, so I can proceed in my exploration of PEAR package creation without breaking too much.

Very interesting. I knew the code would have to be altered to fit with PEAR's coding standards, but I'm not sure how much sense it makes to make that type of significant change.

Related Stuff:

<a href="http://devzone.zend.com/node/view/id/1051">http://devzone.zend.com/node/view/id/1051</a>

<a href="http://pear.php.net/manual/en/guide.developers.package2.php">package.xml, version 2.0</a>

