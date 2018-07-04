---
title: NewRelic Ruby Process Management System
date: 2011-05-29
tags: errors
---
At my **new job as a Ruby on Rails developer**, I've been exposed to a very nice application process management service called NewRelic. When I first heard of it, I did some research on it and discovered it can also be used for other languages besides Ruby, too!

#### NewRelic Watches Out For Errors

The first function of NewRelic that I became familiar with was its error reporting. While it is possible to watch logs for errors, or have errors trigger an email notification, NewRelic has a nifty web interface which can report all sorts of information about errors that occur in development, staging or production environments.

Its actually caught me red handed with a routing error - I was very pleased to realize my fault so quickly. Another time it caught me after I renamed a method - I had forgotten one other place that I used the method. It was quick to discover as well as fix. So far, NewRelic is earning its keep!

#### NewRelic Measures Apdex

I'll admit that I'd never heard of the term apdex before, and I'll also admit that I really should have known. Apdex is short for "Application Performance Index" and it is a measurement of customer satisfaction when they are using a web application. Wikipedia describes like this:

<blockquote class="svxlb"><pre>
Apdex (Application Performance Index) is an open standard developed by an alliance of companies. It defines a standard method for reporting and comparing the performance of software applications in computing. Its purpose is to convert measurements into insights about user satisfaction, by specifying a uniform way to analyze and report on the degree to which measured performance meets user expectations.
</pre></blockquote>

The formula is this:

<pre class="terminal">
Apdex = (Satisfied Count + Tolerated Count / 2) / Total Samples
</pre>

I am really looking forward to digging into the rest of what NewRelic has to offer. For my own personal side projects like FathersWork, an on-line community for divorced dads, I might use something like God, a process monitoring framework for Ruby, written by Tom Preston-Werner.

