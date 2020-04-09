---
title: Puppet is Written in Ruby Can Use ERB
date: 2009-12-13
tags: erb,ruby
---
I'm really enjoying Ruby, and I'm pleased to remember that Puppet is written in Ruby, too.

Puppet is one of those packages that I have to *remember* to use, though. Its a huge help, but I need to be better disciplined about using it to configure, rather than configuring things manually because it is more direct and seemingly more efficient. Fact is, using Puppet is way more efficient over the mid and long term.

Last time I spent some significant time with Puppet was a few months back when I tried out the configuration template options with Erb. Of course I got distracted with the various erb implementations, and which one had the great performance (fun, it is).

I was also interested in the storage of data for use with puppet / erb templates. For example, let's say I want to use a different memcached server on a few different networks. Where can I store that information? I believe it can be stored in an LDAP server, as one option, but there could be a variety of options, considering that Puppet uses Ruby and Ruby has bindings to lots and lots of good stuff!

But that's for advanced use. Let's focus on a simple erb template using an in-context variable / parameter: the hostname of the client requesting a file.

I use Varnish a ton (see my notes on [Varnish](http://www.docunext.com/)), and here's an example of how I use Puppet with an erb template:

<pre class="sh_c">
sub vcl_fetch {
    unset obj.http.Vary;
    set obj.grace = 24h;
    set obj.http.X-Backend = req.backend;
    set obj.http.X-Proxy = "&lt;%= hostname %>";
}
</pre>

When the host connects to the puppetmaster, it sends along its hostname. Puppetmaster passes that to the erb process. Simple as that!

