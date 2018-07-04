---
title: More perl thoughts
date: 2008-06-17
tags: none
author: Albert Lash
---
Perl is interesting. I've started a few patterns, for what its worth...
<h4>Object Parameters</h4>

<pre lang="perl">$self->{ BLAH } = "barf";</pre>

for setting object parameters. I wonder if I should instantiate them upon object creation? Probably, but why? I started using this technique  A LOT, without knowing if it was common practice in perl code. I just looked over some code by Brad Fitz and it looks like he does that stuff too, good!
<h4>My</h4>

I'm blindly putting "my" in front of all of my new variables. I don't know why, only that I'm supposed to.
<h4>use</h4>

Perl has tons of modules, and I find myself using "use" a lot too, I hope that's OK!
<h4>shift</h4>

What is bless and shift? I'm using them to make classes and methods, without knowing why that works. I'm OK with that, but I'd like to know what's up with those at some point.
<h4>Hashes, Arrays, References</h4>

Would be nice to know how to properly manage, create and access these guys - I'm do so by trial and error at the moment. I think references have something to do with memory management, and making sure you don't end up making ten copies of the same thing, when all you wanted to do was manipulate the first one ten different ways. To avoid having to deal with this, I'm relying on singleton objects and the self referential:

<pre lang="perl">$self->{ blah } = 'barf';</pre>

I mentioned earlier. I think this is actually a good way to structure programs.

