---
title: ActiveModel and ActiveRelation
comments:
  - author: lulalala
    email: endofsummer1981@gmail.com
    date: 10/17/2012 03:50:58 AM
    text: >
      You meant ' the Account class would need to have an all method'?
  - author: Albert
    email: albert.lash@savonix.com
    date: 11/07/2012 06:09:57 AM
    text: >
      Yep, it would be a class method.
date: 2011-09-17
tags: git,orm
---
Active Model is a new component of Rails 3+ that abstracts out some generic functionality from ActiveRecord to that a single API can be included with different ORMs and data storage mechanisms.

In my experience, this mostly helps with validations, and that is quite useful, but it also adds many handle methods like new\_record? and destroyed?, to name a couple.

What about persisted? No, that's an ActiveRecord method. There are other ORMs that support persisted, though, too, such as the Git interface included in Regulate.

Speaking of which, the Git interface included in regulate is a very nice abstraction, but I'd prefer if it were more abstract. Its too tied into what regulate is all about, yet it sort of tries to be a little bit like ActiveRecord. I wonder if it could be replaced by gitmodel...?

#### Active Model with Associations?

I would really love it if Active Model could do associations, and had assumed for awhile that it would. But then I thought about my recent experiments with Arel and how it is able to create SQL joins based upon associations. I'd prefer that to having Ruby build all the associations manually.

But still, its a really cool idea: to be able to create associations across different object models? Like setting static data as an array of hashes in the class definition.

But wait! I imagine that it would be possible to have non-AR association method makers - something like "model\_has\_many", which would generate methods to define object-based relationships rather than SQL-based relationships. As a very simple example, it is possible to create AR*-like* methods manually:

<pre class="sh_ruby">
class Person < ActiveRecord::Base

  def accounts
    Account.all.select{|a| a.person_id = self.id}
  end
end
</pre>

Of course, the Person class would need to have an <tt>all</tt> method tha returned an array, in the above example.

I have done some research on this topic because I felt certain that other developers must have been interested in this *very cool* idea. I found a project that seem to abstract out something like this:

* [SuperModel](https://github.com/maccman/supermodel)

and I found a related, albeit difficult to read, PDF:

* [Rails Next Top Model](http://assets.en.oreilly.com/1/event/40/Rails_%20Next%20Top%20Model_%20Using%20ActiveModel%20and%20ActiveRelation%20Presentation.pdf) - describes ActiveSupport, ARel, and ActiveModel

Other related projects to Active Model and Active Relation:

* <https://github.com/jdpace/ShadyDB>
* <https://github.com/Gimi/mongorb>
* <https://github.com/matti/activeredis>
* <https://github.com/starpeak/activeimap>
* <https://github.com/pauldowman/gitmodel>

¥

