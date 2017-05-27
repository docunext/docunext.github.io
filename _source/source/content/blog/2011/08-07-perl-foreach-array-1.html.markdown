---
title: Perl Foreach Array
date: 2011-08-07
tags: perl
---
Perl has all these funky magic vairables, like $\_. Its tough because they are useful with foreach loops, like this one:

<pre class="sh_perl">
foreach (@myarr) {
 	print $_;
}
</pre>

An expanded example:

<pre class="sh_perl">
  1 my @x = [];
  2 $xa = "a, b, c,d";
  3 @x = split(/[,]\ ?/, $xa);
  4 foreach $item (@x) {
  5   $key = $item;
  6   if($key eq 'c') {
  7     print $key;
  8     print "\n";
  9   }
 10 }
</pre>

