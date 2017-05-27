---
title: Rails Tests and Rcov Best Practices
date: 2010-12-31
tags: activerecord,rails,testing
---
Yesterday I spent a good amount of time writing and updating tests for a Ruby on Rails application.

Besides being beneficial to the project, it was an excellent process to get an overall view of rails in general.

Let me be more specific. At the onset of the project, the goals were not well defined. With that in mind, I rapidly prototyped a concept with scaffolds. Once I got a feel for the app's functionality, I started to refined and reorganize the structure of the controllers and views.

As the codebase matured, there remained a lot of cruft stubs that had been created by the scaffolding generators. Thanks to Rcov, I was able to review what code was not getting tested by my required functionality and then remove it.

At the end of the day, I achieved 80% coverage. Not bad! The remaining coverage involves users and sessions, and I plan to test that at some point as well. For now, I don't mind missing it.

## Ruby on Rails Testing Best Practices

* Test. Seriously, test.
* Use fixtures. They are often needed to actually test ActiveRecord associations.
* Use Rcov. Its awesome! <tt>rake rcov</tt>

#### Rcov

I put this in my Rakefile:

<pre class="sh_ruby">
begin
  require 'rcov/rcovtask'
  Rcov::RcovTask.new do |test|
    test.libs << 'test'
    test.pattern = 'test/**/*_test.rb'
    test.verbose = true
  end
rescue LoadError
  task :rcov do
    abort "RCov is not available. In order to run rcov, you must: sudo gem install spicycode-rcov"
  end
end
</pre>

#### Test::Unit

Here is an example unit test I'm using with a Rails application I'm working on:

<pre class="sh_ruby">
   test "should create a new payment" do
     assert_difference("Payment.count") do
       post :create, :payment => { :amount => '300' }
     end
     assert_redirected_to payment_path(assigns(:payment))
   end
</pre>

And for my own future reference, here are some other assertions I'm using:

<pre class="sh_ruby">
assert_valid(record)
assert_response("200")
assert_template("mytemplate")
</pre>

