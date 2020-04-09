---
title: Advanced ActiveRecord Queries with Rails 3.1 Arel joins and merge
date: 2011-08-18
tags: activerecord,"ruby on rails 3"
---
I've been exploring **Rails 3.1** for a couple weeks now and last night I focused on advanced queries with Active Record, utilizing some new scoping features thanks to Arel.

Note: I'm not fully versed in **Arel** as of yet, but as far as I understand, it's related to what I figured out last night.

I've written about [scopes in Rails 3](http://www.docunext.com/2011/03/rails-3-activerecord-scope-and-chainability-helpers/) before, but nowadays I'm keener on class methods, like this one:

<pre class="sh_ruby">
1 class Entry < ActiveRecord::Base
...
 45   class << self
 46     def before_date(date)
 47       where(["date <= ?", date])
 48     end
 49   end
...
 92 end
</pre>

In the above example, the before\_date method will not be called until it is used, and it will change the SQL generated for the database query.

How about a more advanced example? Here's a sweet thing:

<pre class="sh_ruby">
  1 class Transaction < Record
  2
  3   validates :amount_in_cents,
  4             :presence => true,
  5             :numericality => true
  6
  7   class << self
  8     def before_date(date)
  9       joins(:entry).merge(Entry.before_date(date))
 10     end
 11   end
 12
 13   def amount_in_cents=(amount_in_cents)
 14     write_attribute(:amount_in_cents, amount_in_cents.to_f * 100)
 15   end
 16
 17   def amount
 18     amount_in_cents * 0.01
 19   end
 20 end
~
</pre>

In this case, it results in some awesome SQL:

<pre class="sh_terminal">
>> @expense.entries.before_date(Date.today + 1.day).to_sql
=> "SELECT \"entries\".* FROM \"entries\" INNER JOIN \"transactions\" ON \"entries\".\"id\" = \"transactions\".\"entry_id\" WHERE \"transactions\".\"account_id\" = 1 AND (date <= '2011-08-19')"
</pre>

Nice, huh?

Supposedly, this syntax:

<pre class="sh_ruby">
joins(:entry).merge(Entry.before_date(date))
</pre>

is equivalent to:

<pre class="sh_ruby">
joins(:entry) & Entry.before_date(date)
</pre>

But I have found that to be entirely false and not true. For the above referenced scenario, I found the latter syntax to result in two SQL queries instead of a join, like so:

<pre class="sh_ruby">
>> @expense.transactions.joins(:entry) & (Entry.before_date(Date.tomorrow))
  Transaction Load (0.6ms)  SELECT "transactions".* FROM "transactions" INNER JOIN "entries" ON "entries"."id" = "transactions"."entry_id" WHERE "transactions"."type" IN ('Transaction') AND "transactions"."account_id" = 16
  Entry Load (0.5ms)  SELECT "entries".* FROM "entries" WHERE (date <= '2011-08-21')
</pre>

Thanks:

* <http://asciicasts.com/episodes/215-advanced-queries-in-rails-3>

