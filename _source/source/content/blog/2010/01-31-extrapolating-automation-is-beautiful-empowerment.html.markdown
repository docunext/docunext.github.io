---
title: Extrapolating Automation is Beautiful Empowerment
date: 2010-01-31
tags: automation,rake
---
I've been using Rake a lot lately, and today I had a nice "epiphany" about automation - that its not about just setting up a bunch of tasks and writing shortcuts to them.

Automation can get really sophisticated with tools like Rake. This isn't a new concept to me, but its practical applicability is.

Its truly the *beautiful empowerment* that comes along with programming.

## **Beautiful Empowerment**

Beautiful Empowerment... sounds cool. But what do I mean by that? Like it sounds, its a bit of a smoke and mirrors, but only mostly the real deal. Its the capability to leverage evolving, adaptive logic. Doesn't that sound wonderful?

What about the practical application? To be specific, I'll reference [Martin Fowler's page on Rake tasks](http://martinfowler.com/articles/rake.html) (written almost five years ago!) specifically the part about [synthesizing rake tasks](http://martinfowler.com/articles/rake.html#SynthesizingTasks).

I'm glad he used the word *synthesizing* instead of generating or compiling because the tasks are very much real, but only manifested upon instantiation. It was hard to wrap my head around the idea until the use of file modification times came into play. With their involvement, I began to see how substantially different tasks could be defined from a single "master" task. Almost the way an abstract class can become wildly different objects, depending upon their instantiation.

And I find it interesting to note the similarity here to lambda functions (aka anonymous functions): functions that can be passed as arguments to other functions. They too provide wildly flexible abstraction of concrete logic, while thankfully keeping the complexity of the domain space within reason.

Specific examples to come! Feedback and additional thoughts are welcome and appreciated!

