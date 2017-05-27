---
title: Machinist on the Test Environment Console
date: 2011-08-03
---
I am using Machinist 2 beta with Rails 3.1 and its working quite nicely. Though its beta, I've found it to be working quite well.

To do some manual *"manufacturing"*, I use the console, but for that to work, I have to load the test helper:

<pre class="sh_terminal">
Loading test environment (Rails 3.1.0.rc4)
>> require "./test/test_helper.rb"
</pre>

For what its worth, here's a sample of my blueprints.rb file, too:

<pre class="sh_ruby">
  1 require 'machinist/active_record'
  2
  3 Asset.blueprint do
  4   name { "Photo Copier" }
  5 end
  6
  7 BankAccount.blueprint do
  8   name { "National Bank" }
  9   number { 12345 }
 10 end
</pre>

