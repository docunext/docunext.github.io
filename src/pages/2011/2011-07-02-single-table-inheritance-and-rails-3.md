---
title: Single Table Inheritance Inherited Resources Inherited Views and Rails 3
date: 2011-07-02
tags: ruby on rails
---
In working on Regdel, an open source bookkeeping system I am writing with Ruby on Rails, I pondered the question about whether to use Single Table Inheritance (STI), an abstract base class, a model namespace, and/or polymorphic associations for the top-level account types: assets, liabilities, equity, revenue, and expenses.

Its really quite a tough call! I want all the accounts to be in one table, i.e. the chart of accounts, and I also want scoped routes to select accounts of each type. For example, a request to "/accounts" would return all the accounts, and a request to "/assets" would only return assets.

I have it working, and I want to review the configuration so that I am certain it is right for this problem domain.

Remember, this is Rails 3.1!

First, the Account class:

<pre class="ruby">
class Account < ActiveRecord::Base
  include AccountMethods

  ACCOUNT_TYPES = ["Asset", "Liability", "Equity", "Revenue", "Expense"]

  serialize :attrs

  validates :name,
            :presence => true,
            :uniqueness => true

  has_many :entries
  has_many :entry_amounts, :through => :entries

  acts_as_nested_set

  state_machine :initial => :active do

  end

end
</pre>

Now here's the Asset class:

<pre class="sh_ruby">
class Asset < Account
end
</pre>

Basic, right? So this is using STI just fine - the table has a type column which sets Asset when a new Asset is created.

So how about the routes and views? Can we inherit there? Yes, with some help from InheritedResources!

Here is the AccountsController:

<pre class="sh_ruby">
class AccountsController < InheritedResources::Base
  defaults :resource_class => Account, :collection_name => 'accounts', :instance_name => 'account'

  def show
    @account = Account.find(params[:id])
    @sub_accounts = Account.find_all_by_parent_id(params[:id])
  end

end
</pre>

and the AssetsController:

<pre class="sh_ruby">
class AssetsController < AccountsController
  defaults :resource_class => Asset, :collection_name => 'accounts', :instance_name => 'account'
end
</pre>

Since these are separate controllers, routes.rb needs resources for each:

<pre class="sh_ruby">
  resources :accounts do
    resources :entries
  end
  resources :bank_accounts
  resources :assets
</pre>

At this point, we might expect that assets have their own views, and usually they need their own, but thanks to the fact that Rails 3.1 has inherited views built in, the controllers that inherit from the accounts controller share the same views!

Thanks to **Inherited Resources**, the views use <tt>resource</tt> and <tt>resources</tt> to access the instance objects, so it greatly simplifies the controllers, too.

For entries, I did something a little different, mainly because I only want new objects to have specific routes, but the rest of the restful actions to share the same controller actions. More specifically, although checks, transfers, invoices, and deposits are all subclasses of entries, they need to be typed upon instantiation for the new action form.

Here's the routes I have for this:

<pre class="sh_ruby">
  resources :entries do
    collection do
      get 'write_check'
      get 'transfer_funds'
    end
  end
</pre>

#### Links

* http://stackoverflow.com/questions/598177/layer-supertype-in-activerecord-rails
* http://www.ruby-forum.com/topic/159894
* http://api.rubyonrails.org/classes/ActiveRecord/Base.html
* http://code.alexreisner.com/articles/single-table-inheritance-in-rails.html
* https://gist.github.com/44525
* http://www.strictlyuntyped.com/2008/06/rails-where-to-put-other-files.html

