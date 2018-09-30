---
title: Apache 2.2 FastCGI PHP5
date: 2007-09-27
tags: fastcgi
---
I've finally found my favorite web server setup. Like the title suggests, its Apache 2.2 MPM worker, mod_fcgid, and php5-cgi. Why?
<h3>Apache 2.2</h3>

I've been using Apache for <b>years</b> and I've learned a lot about its benefits and oddities. I'm really comfortable with the configurations and how to make it do what I want. As I've written about several times, there are a few Apache 2 modules I'm really excited about: mod_dbd, mod_proxy, and mod_cache.

Make no mistake, I'm also really interested in both mini_httpd and lighttpd, but for now I'm going to stick with what I'm comfortable with.
<h3>mod_fcgid</h3>

For years I used mod_php4/5, but then more recently as I started to use other cgi scripts such as python (for trac) and perl, it made sense to use fastcgi. Since I use debian, there are two choices, mod_fastcgi and mod_fcgid. mod_fastcgi is considered non-free because of some wacky licensing issues, and in my experience mod_fcgid is much much faster, though I may have misconfigured mod_fastcgi. By using fastcgi, you can use the mpm worker, which has improved performance and memory management over mpm prefork. This is due to the fact that while php5 is threadsafe, third party modules are not likely to be. Also, by using mod_fastcgi, you end up being able to use a variety of different scripting languages, ruby, python, php5, php4, perl, and even compiled C and C++ binaries.

Setting up mod_fcgid was really frustrating to me for awhile, so I'm posting my experience in the <a href="http://www.docunext.com/wiki/Apache_FastCGI">Docunext Wiki under Apache FastCGI</a>.
<h3>php5-cgi</h3>

PHP5 is a great scripting language in my opinion. I like it not only for the syntax and capabilities, but also the community and external libraries.

One potential drawback to using php5 in cgi mode is the potential to not be able to use opcode cachers like xcache. The catch here is to setup the cgi processes to share memory. I think this is possible due to some posts at the lighty wiki and forums, but I haven't wrapped my mind around it yet.

There are other differences between using php5 via mod_php5 and php5-cgi, including output buffering and a few server variables.

