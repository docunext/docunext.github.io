---
title: Ruby s Exception Class aka Error Handling and Management
date: 2010-03-20
tags: errors,exceptions
---
I'm re-contemplating my comprehension of error handling in computer programming.

Like testing, error management is sometimes relegated to a post-programming task. And likewise for both, I see more and more Ruby developers engage in testing and error management at the *beginning* of a project. While I plan to do more thinking and writing about testing, this post will only be about error management.

#### Example Error Handing in Ruby

Let's take an example. Here's an excerpt of code which shows how Ruby can handle an error:

<pre class="sh_ruby">
begin
    barf &lt;&lt; "yo"
rescue => e
    puts e.to_s
end
</pre>

When I try and run that code in irb1.9.1, this is the result:

<pre>undefined local variable or method `barf' for main:Object</pre>

If I try running just:

<pre class="sh_ruby">barf &lt;&lt; "yo"</pre>

This is the result:

<pre>
NameError: undefined local variable or method `barf' for main:Object
	from (irb):6
	from /usr/bin/irb1.9.1:12:in `&lt;main>'
</pre>

Still with me? None of this is very exciting, but it may help some readers.

How about something more interesting? Even Ruby-ish? Well I've been noticing that some Ruby developers are treating errors as likely situations which can help initiate further steps to produce desirable results, rather than situations that should be avoided or should not happen.

In fact, I really like that the base class is named "Exception". It reminds me of the "unless" operator, as opposed to the "if" operator. I'm not sure, but there may even be some efficiency going on here. Even if there isn't, I still ike the idea of viewing a logical statement as saying, this is going to happen almost all of the time, except in certain circumstances. In those circumstances, do something special.

#### A Really Good Ruby Exception Example

Let's take a look at git-wiki.rb, shall we?

These few lines say a lot:

<pre class="sh_ruby">
    def self.find(name)
      page_blob = find_blob(name)
      raise PageNotFound.new(name) unless page_blob
      new(page_blob)
    end
    def self.find_or_create(name)
      find(name)
    rescue PageNotFound
      new(create_blob_for(name))
    end
</pre>

Here's how I see this might flow:

1. The method "find or create" is called with a name
2. It immediately calls find
3. The find method will either finish successfully or raise an PageNotFound error

There are many other ways to achieve this same control structure, what makes this one better?

When I first came upon this, I didn't grasp its power because its so simple. The "find or create" method is nothing more than an interface to the find or new methods. I have to think it is faster to assume that the page exists instead of checking for it, and then finding it. But what if we are wrong?

Again, rather than testing for the existence of the page each time it is requested, we can setup a listener for the less-likely case of when there isn't one, and send it signals when those cases occur. I find this to be a very clean and elegant way!

Rather than having to keep track of every little thing that is happening in the control structure, listeners and signals can modify the control structure on a grander scale, with less effort and I would expect greater efficiency.

#### Do You Know The Internals?

I'm curious if whether this type of control structure is more efficient than using if/then statements to check for success or failure or certain functions. I'll try and setup a benchmark comparison, but until then, if you know anything about this topic, please share!

**UPDATE**: After writing this blog entry post, I re-factored [Rack-XSLView](http://www.docunext.com/). The change was substantial and in my humble opinion, a major improvement.

