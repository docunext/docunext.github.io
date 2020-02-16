---
title: More Lua and Perl
date: 2009-06-11
---
<font style="font-size: 1.25em;"><b>Lua</b></font>
I'm having a little bit of trouble getting some traction with Lua. Its a relatively new language and doesn't have too many libraries or bindings in the Debian package archives. Since I rely upon Debian quite a bit, that makes a significant difference to me.

On the other hand, I do note that it is super fast. I've written a couple of shell scripts with it, and I've followed a few WSAPI tutorials for FastCGI.

I also rely quite heavily on XML and unfortunately I find the XML support in Lua to be really foreign. I just don't get it. I found a suggestion on some one's blog to <a href="http://www.latenightpc.com/blog/archives/2006/02/06/converting-simple-xml-to-lua-tables-with-xslt">transform XML into a Lua table using XSL</a> and that actually worked really well! I may use that technique in <a href="http://www.nexista.org/">Nexista</a> instead of running SimpleXML functions over and over.

<font style="font-size: 1.25em;"><b>Perl</b></font>
I've really grown to like Perl. Its not the fastest language under the sun, but it is incredibly flexible and there are an incredible amount of libraries and modules out there.

I just built my first Catalyst application for a client of mine and it went very well. A decent user interface and database connectivity in under thirty minutes. Talk about rapid application development! I also learned that Catalyst has an XSLT view-module. That is very very good.

I've generally stayed away from MVC frameworks because they tend to avoid XML. I still plan to rely heavily on XML, but I'm impressed enough with Catalyst as an MVC to research more of them. I've tried Symfony and Ruby on Rails, so I want to try Orbit next - the Lua MVC framework.
