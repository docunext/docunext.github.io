---
title: Acts as Nested Set for Rails 3
date: 2011-07-02
tags: ruby on rails 3
---
A new project I am working on using Rails 2.3.11 introduced me to acts\_as\_list and acts\_as\_tree, so I decided to look for those for use with Rails 3.

I did a quick search and stumbled upon [nested set](https://github.com/skyeagle/nested_set). Its about as dead-simple as I could imagine, so I'm giving it a try.

To use it, I modified my migration to this:

<pre class="sh_ruby">
class CreateAccounts < ActiveRecord::Migration
  def self.up
    create_table :accounts do |t|
      t.string :name
      t.integer :parent_id
      t.string :type
      t.integer :lft
      t.integer :rgt

      t.timestamps
    end
  end

  def self.down
    drop_table :accounts
  end
end
</pre>

and the model to look like this:

<pre class="sh_ruby">
class Account < ActiveRecord::Base
  ACCOUNT_TYPES = ["Asset", "Liability", "Equity", "Revenue", "Expense"]

  validates_uniqueness_of :name

  acts_as_nested_set
end
</pre>

So far, so good!

