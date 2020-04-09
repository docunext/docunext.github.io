---
title: Rspec 2 Shoulda Rails 3.1 Awesome
comments:
  - author: Brian Cardarella
    email: bcardarella@gmail.com
    date: 10/31/2011 01:31:11 AM
    text: >
      Shoulda the gem has two parts: context and matchers. The matchers are the only part that is activated when used with RSpec. The matchers themselves then are mostly only relevant for Rails models and controllers. For example, you'd use shoulda-matchers for validations or when testing the behavior of a controller action.
  - author: Albert
    email: albert.lash@savonix.com
    date: 10/31/2011 09:27:32 AM
    text: >
      Thanks Brian! Well, don't I feel silly! I will update the examples with some should components.
date: 2011-10-26
tags: rails3,rspec
---
I've been digging deeper into Rspec, and along the way I've found some truly amazing features enabled by combining Rspec and shoulda from thoughtbot.

#### A Brief History of Rspec and Shuolda

First a bit of background - Ruby has been dominated by Ruby on Rails for quite some time, and it ships with Test::Unit. Test::Unit does the job, obviously - to this day tons of developers use Test::Unit on a daily basis. But the fact remains - there is room for improvement. Case in point, Rails 3 actually switched to MiniTest, a Test::Unit clone. Not that Rspec was or is perfect - its gone through a major shift from version 1 to version 2. I thought version 1 was cool, Rspec version 2 is wicked awesome.

How about Shoulda? Shoulda is a gem created by the folks at ThoughtBot - where giant robots smash into other, not-so-giant-robots. They've contributed some seriously awesome gems to the Ruby on Rails community, including Paperclip, high\_voltage, and Factory Girl.

Shoulda is certainly in their greatest hits, in my humble opinion. Just think - Shoulda is good to go with Test::Unit, MiniTest, *or* Rspec, though it originated in the world of Test::Unit. When I first used it, I took it for granted, and assumed it was just part of the Rails testing suite. After reading up on how well it interacts with Rspec, I'm very grateful for Shoulda.

#### RSpec and Shoulda = Awesome

Note, a lot of the awesomeness I've discovered is thanks to this awesome [presentation](http://pure-rspec-scotruby.heroku.com/) by Lark.

Take a look at these Rspec examples with Shouda:

<pre class="sh_ruby">
describe BlogPost do
  it { should be_invalid }
end
</pre>

That Rspec example can expand into this beauty:

<pre class="sh_ruby">
describe BlogPost do
  subject { BlogPost.new :title => 'foo', :body => 'bar' }
  it "sets published timestamp" do
    subject.publish!
    subject.published_on.should == Date.today
  end
end
</pre>

and furthermore into this:

<pre class="sh_ruby">
describe BlogPost do
  subject do
    BlogPost.new(:title => 'foo', :body => 'bar').tap do |p|
      p.publish!
    end
  end
  it { should be_valid }
  its(:errors) { should be_empty }
  its(:title) { should == 'foo' }
  its(:body) { should == 'bar' }
  its(:published_on) { should == Date.today }
end
</pre>

Wicked awesome, huh?

As Lark puts it, "Hold it right there."

<pre class="sh_ruby">
expect do
  foo.bar
end.to change {baz.quux}.from('corge').to('grault')
</pre>

Nuff said. Actually, no, I've got more to discuss.

#### Describe, Context, and It

Using Rspec and Shoulda can be challenging because its so flexible, but sticking to the core has helped me. I also try to keep my tests consistent and to the bare minimum. Like this for example:

<pre class="sh_ruby">
describe Make do
  let (:make) { Make.make }
  it { should respond_to :name }
end
</pre>

It is so to the point! But what about a *real* test? Not just an obvious confirmation that the associations are still setup right. For me, that's when I bring in **context**. Note that context and describe are interchangeable, but in my humble opinion, they are different. I use describe to frame a test, and context to position it. I use describe to describe and object, and context to put that object in a situation.

While it can be passed a string to explain what it should be doing, including shoulda will combine the two together. That is truly awesome.

#### What About Rails 3??

Actually, Rspec 2 and Shoulda are awesome on their own, it just turns out that I'm using them extensively on a bunch of rails 3.1 apps and engines, so that's what got me researching them. I am convinced that Rails 3.1 is totally awesome, too, and the fact that these projects all work together is a thing of beauty, in my humble opinion.

¥

