---
title: mod perl is appealing
date: 2008-06-13
tags: apache,mod_perl,perl
---
I'm getting interested in modperl 2.0. While I'm quite satisfied with mod_fcgid, I'm very interested in the idea of using modperl to manage Apache's configuration, and full access to the Apache request processing cycle.

I've tinkered with Apache's request cycle, but stuff like bucket brigades still confuse me. For a newbie like me with a short attention span who prefers interaction with trial and error as opposed to a more structured approach, compiling is a big hurdle, and for a big program like Apache, its too high for me.

So modperl could be like a convenience module for me. Reading up on it - its a heck of a lot more than that. but that's what it would be for me in the beginning. Here's some links I found interesting:

<a href="http://www.cpan.org/modules/by-module/Apache2/">http://www.cpan.org/modules/by-module/Apache2/</a>

<a href="http://search.cpan.org/~pajas/XML-LibXML-1.66/lib/XML/LibXML/Reader.pod">http://search.cpan.org/~pajas/XML-LibXML-1.66/lib/XML/LibXML/Reader.pod</a>

<a href="http://search.cpan.org/dist/XML-LibXML/LibXML.pod">http://search.cpan.org/dist/XML-LibXML/LibXML.pod</a>

<a href="http://www.xml.com/pub/a/2001/11/14/xml-libxml.html">http://www.xml.com/pub/a/2001/11/14/xml-libxml.html</a>

<a href="http://www.kitebird.com/articles/mysql-xml.html">http://www.kitebird.com/articles/mysql-xml.html</a>

<a href="http://perl-xml.sourceforge.net/faq/">http://perl-xml.sourceforge.net/faq/</a>

<a href="http://search.cpan.org/~drtech/Config-Merge-1.00/Merge.pm">http://search.cpan.org/~drtech/Config-Merge-1.00/Merge.pm</a>

Also <a href="http://pagekit.org/">PageKit</a> and <a href="http://www.cpan.org/modules/by-module/Apache2/Apache2-Mogile-Dispatch-0.2.readme">Mogile Dispatcher</a> look pretty awesome!

This is a great thread: <a href="http://www.mail-archive.com/modperl@apache.org/msg33020.html">thread about shared memory and apache2 modperl2 processes</a>.

I tried out IPC::ShareLite - very interesting. Why did I bother at this very preliminary stage of the game? Well when dealing with persistent processes, its important to differentiate between process <em>initialization</em> and process <em>instantiation</em>. I'm not sure if instantiation is the right word there, but the idea is that one of the benefits to fastcgi or an embedded interpreter like modperl is that scripts are loaded once and run many times, as opposed to both loaded and run many times.

With a little planning, you can use the initialization step to process data which is unlikely to change from request to request - which is why I have to reload apache when I change the configuration. However, if I change a file it is serving, I don't have to reload the server. Its the difference between configuration and runtime.

To learn about this concept with modperl, I made an increment, which added 1 to itself each time for each request (inside the handler sub). As I refreshed, it increased, but sometimes started over - that's the jump from one Apache2 process to another. Each process is meant to serve only a certain number of requests, so for persistence of perl variables within the sub handler, I used inter-process communication (IPC). I'm still having a little difficulty with it though, seems like a delicate scenario to balance.
