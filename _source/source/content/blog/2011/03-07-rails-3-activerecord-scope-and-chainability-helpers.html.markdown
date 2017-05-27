---
title: Rails 3 ActiveRecord scope and chainability Helpers
date: 2011-03-07
tags: activerecord,class,helpers,ruby
---
The upgrade of Rails 2 to Rails 3 is a bunch of really helpful simplifications, including this one by changing <tt>named\_scope</tt> to <tt>scope</tt>.  Funny, it almost reminds me of how plain and simple the module names are for Drupal - Views, Backup & Restore, etc.

While simplifying it, Rails 3 adds to the scope concept by incorporating "chainability". I would normally refer to this concept as *method chaining*, but in this case of helpers, I gotta stick with **chainability**.

In short, scopes can now be chained together!

Here's a quick example:

<pre class="sh_ruby">
class Memory < ActiveRecord::Base
  validates_presence_of :date
  scope :publik, :conditions => 'privacy = 10'
end
</pre>

Class instantiation then looks something like this:

<pre class="sh_ruby">
res = Memory.publik.where(:user_id => @current_user.id).limit(5)
</pre>

