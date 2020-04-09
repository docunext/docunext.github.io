---
title: Perl Hash Performance
comments:
  - author: Mudai
    email: mudai@arcor.de
    date: 12/22/2007 09:49:33 AM
    text: >
      I would ignore the "Building a Better Hash" article.<br/>Why?<br/><br/>      use Benchmark;<br/><br/>      for $i (1..10) {$little_hash{$i} = $i}<br/>      for $i (1..100) {$big_hash{$i} = $i}<br/><br/>      # make it a hash test (instead of an array test)<br/>      $lkeys = [keys %little_hash];<br/>      $bkeys = [keys %big_hash];<br/><br/>      timethese (1000000, {<br/>                  little =&gt; sub {$foo = (@$lkeys)[rand @$lkeys]},<br/>                  big =&gt; sub {$foo =  (@$bkeys)[rand @$bkeys]},<br/>                 });
  - author: Albert
    email: albert.lash@savonix.com
    date: 12/22/2007 02:14:17 PM
    text: >
      Hi Mudai, thanks for commenting! I just tried that script and came up with this:<br/><pre><br/>Benchmark: timing 1000000 iterations of big, little...<br/>       big:  0 wallclock secs ( 0.51 usr +  0.00 sys =  0.51 CPU) @ 1960784.31/s (n=1000000)<br/>    little:  1 wallclock secs ( 0.43 usr +  0.00 sys =  0.43 CPU) @ 2325581.40/s (n=1000000)<br/></pre>
date: 2007-10-23
---
<a href="http://www.docunext.com/blog/2007/10/23/perl-hash-performance/">

I'm always curious about computer performance. Can't help it, must be in my blood. So when I heard that perl hashes were fast, I had to do some research.

From what I've gleaned so far, hashes are best when used for random access, as opposed to sequential access.  For example, if at any given time, any member of a hash might be searched for, it will perform well. On the other hand, if you are going to lookup values in an array one at a time, on after the other, an array will perform well.

I've been thinking about this because unfortunately, mod_dbd combined with mod_rewrite is still a ways away, and I'd like to keep an active database of all my url schemes. Maybe hashes are the way to go?

I'm wondering how this would compare to a database for random access. I bet a hash would be faster, but I really don't know. I do know that in my experience, because of the way I prefer to manage data, its actually easier for me to manage a database than it is to manage several hash files. Just my opinion though, I'm sure others prefer hash files.

I've been thinking about this because unfortunately, mod_dbd combined with mod_rewrite is still a ways away, and I'd like to keep an active database of all my url schemes. Maybe hashes are the way to go?

UPDATE October 26, 2007: Is there any similarity between one way encryption hashes and has files used as databases?<b>Related</b>:

<a href="http://www.dfan.org/real/tpj_hash.html">Building a Better Hash</a> by Dan Schmidt

<a href="http://www.perlmonks.org/?node_id=18684">Re: Why are hashes so much faster?</a> - perlmonks.org

Even better:

<a href="http://perlmonks.org/index.pl?node_id=17890">Shift, Pop, Unshift and Push with Impunity!</a> - also at perlmoks.org

¥

