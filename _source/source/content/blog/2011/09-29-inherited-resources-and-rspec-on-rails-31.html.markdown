---
title: Inherited Resources and Rspec on Rails 3.1
date: 2011-09-29
tags: rspec
---
I'm trying to use Rspec to test a Rails 3.1 application that uses Inherited Resources, but I keep getting these types of errors with spec:views :

<pre class="sh_ruby">
     Failure/Error: render
     ActionView::Template::Error:
       undefined local variable or method `resource' for #<#<Class:0xca64a94>:0xcb3bc88>
</pre>

I believe it is in the way I am mocking objects:

<pre class="sh_ruby">
  4   it "Renders payment form" do
  5     assign(:payment, stub_model(Payment))
  6     render
  7     view.should render_template(:partial => "_form", :count => 1)
  8   end
</pre>

That would result in an instance variable @payment getting set in a mock controller, but that's not what my views are using anymore - they are using <tt>resource</tt>.

So what's a developer to do?

I'm under the impression that this before block will do the trick:

<pre class="sh_ruby">
  before do
    controller.singleton_class.class_eval do
      protected
        def collection
          [Factory(:payment)]
        end
        def resource
          Factory(:payment)
        end
        helper_method :resource, :collection
    end
  end
</pre>

Its far from perfect, but it does kind of work. I ended up with something slightly different than that, but that's the idea.

NOTE: Given that I'm using **Factory** there, it should be mentioned that I'm using factory\_girl.

* <https://www.relishapp.com/rspec/rspec-rails/docs/view-specs/view-spec>

