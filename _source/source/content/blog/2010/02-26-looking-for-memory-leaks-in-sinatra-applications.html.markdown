---
title: Looking for Memory Leaks in Sinatra Applications
date: 2010-02-26
tags: sinatra
---
I like fixing things, so tracking down memory leaks and patching them is fun for me.

In the past I've done this using GTop in [Aortica](http://www.aortica.com/blog/) (a port of [Nexista](http://www.nexista.org/blog/) to Perl):

<pre class="sh_perl">
    my $mem = GTop->new->proc_mem($$)->share/1024;
    my $proc_mem = GTop->new->proc_mem($$)->size/1024;
    my $diff     = $proc_mem - $mem;
    my $shared   = GTop->new->proc_mem($$)->vsize/1024;
    my $memory = " Shared: ".$mem." Total: ".$proc_mem." PID: ".$$ ;
</pre>

I can't find an exact match for GTop in Ruby, so I might just use the command line based top for now. I can use it to monitor a unicorn process id and watch if the memory it uses grows. It can even be run from within Sinatra:

<pre class="sh_ruby">
get '/runtime/info' do
    `pmap #{Process.pid} | tail -1`[10,40].strip
end
</pre>

#### Related

The "[God](http://god.rubyforge.org/)" process monitor caught my attention. Its way more than I am looking for at the moment. It even looks like it might be able to replace how I'm using daemontools.

