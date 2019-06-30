---
title: More mod perl and XML Thoughts
date: 2008-06-16
tags: none
author: Albert Lash
---
I've been using Apache for years, and I'm still a perl novice. Therefore, I'm glad that mod_perl has so much Apache stuff to it. That is very very cool.

mod_perl sessions posed a bit of a challenge for me yesterday, and today I realized that the hooks needed to really use HTTP auth instead of sessions are there. I'm planning on using sessions anyway, but I may change my mind later once I get HTTP auth running how I want it.

mod_parrot introduced itself to me today thanks to planet perl6. Perl 6 is looking really interesting - the VM raduko will presumably be able to work with many languages, not just perl.
<h4>XML</h4>

I've done a ton of work with XML, and I love it. Every once in awhile, I have to tweak my use of XML in a way that isn't exactly commonplace or standard. I don't like to do that, so when I do, I usually fence it in, and make sure its as limited as possible, with the plan to manage that exclusion differently at some point in the future.

One such case is how I sometimes use XML entities like variables. I then create a dynamic DTD to change the entity value as needed. I feel like that's similar to using a ratchet as a hammer, although it works, its not designed to do that, and so it doesn't work very well.

But how to logically manipulate an XML file - use XSL? Kind of like using a hammer to insert a push-pin into a cork board. Yes, it is sort of what it was designed for, but kind of more power than is needed.

After being exposed to perl for a few days, I read this statement by Michel Rodriguez, the author of XML::Twig:

<blockquote>

When I was younger I wanted to grow up and write a tool that would allow people to process text the way they wanted, offering tons of feature, various ways to achieve the same result, not forcing them into any processing model but allowing them to use the one they felt the most comfortable with. Eventually I grew up and I realized a guy named Larry Wall had already written a language named Perl... Darn!</blockquote>

The perl light sort of dawned on me, and I remembered how cool regular expressions are, sed, and the like, so I think I may end up using those to dynamically manipulate tokens in XML docs using sed or regexp. Those are standard, available in numerous languages, and can express logic in simple strings.

That probably doesn't make sense, so I'll be more specific. I like using applications on multiple domains, and rather than making virtual hosts, I just use a different table prefix for the databases. The prefix has a one-to-one relationship with the http host name, but it could be any key really. At the same time, I write SQL in XML as prepared statements, using XPath as the parameter references. All well and good, but when I want to use a prefix at runtime, things get tricky.

I usually set a default entity, and potentially override it right before the SQL.xml is parsed. Its currently done in PHP using str_replace, but I'd like to make that easier and more standard using sed patterns or regexp.

This idea is still quite preliminary for me - I'm writing it down so I can think about it more.
