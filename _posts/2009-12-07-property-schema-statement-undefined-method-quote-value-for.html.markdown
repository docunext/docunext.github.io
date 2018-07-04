---
title: property schema statement undefined method quote value for
date: 2009-12-07
tags: datamapper,ruby
---
Just updated DataMapper:

<pre class="sh_sh">
$ sudo gem install dm-core
Successfully installed extlib-0.9.13
Successfully installed addressable-2.1.1
Successfully installed dm-core-0.10.1
</pre>

But now I'm getting this error....
<pre class="sh_sh">
migrations.rb:279:in `property_schema_statement': undefined method `quote_value' for #<DataObjects::Sqlite3::Connection:0xb74845b0> (NoMethodError)
</pre>

Looks like I'm missing something....

<pre class="sh_sh">
sudo gem install data_objects
sudo gem install do_sqlite3
</pre>

Had to remove the dpkgs too:
<pre class="sh_sh">
$ sudo apt-get remove libdataobjects-ruby1.8
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages were automatically installed and are no longer required:
  libio-compress-zlib-perl libcompress-raw-zlib-perl mailfront libmatrixssl1.8 libhttp-response-encoding-perl python-numeric libio-compress-base-perl libparted1.8-12 ipsvd
  libevtlog0
Use 'apt-get autoremove' to remove them.
The following packages will be REMOVED:
  libdataobjects-mysql-ruby1.8 libdataobjects-postgres-ruby1.8 libdataobjects-ruby1.8 libdataobjects-sqlite3-ruby1.8
0 upgraded, 0 newly installed, 4 to remove and 500 not upgraded.
After this operation, 537kB disk space will be freed.
Do you want to continue [Y/n]?
(Reading database ... 119767 files and directories currently installed.)
Removing libdataobjects-mysql-ruby1.8 ...
Removing libdataobjects-postgres-ruby1.8 ...
Removing libdataobjects-sqlite3-ruby1.8 ...
Removing libdataobjects-ruby1.8 ...
</pre>

That worked!

...but the hooks are giving me trouble again... and also my associations... DOH!

This is very strange...  it appears that I cannot use the dm-aggregate sum function with an inherited class?

<pre class="sh_ruby">
class Entry
  include DataMapper::Resource

  property :id,Serial
  property :memorandum,String
  property :status,Integer
  property :fiscal_period_id,Integer
  property :entered_on,Integer, :default => Time.now.to_i
  has n, :ledgers

  def credit_sum
    # Does not work:
    # !! Unexpected error while processing request:
    # +options[:fields]+ entry #<DataMapper::Property @model=Amount @name=:amount>
    # does not map to a property in Credit
    #return Credit.sum(:amount, :entry_id => self.id)

    # Works fine, but isn't it the same thing?
    return Amount.sum(:amount, :type => 'Credit', :entry_id => self.id)
  end
end

class Amount
  include DataMapper::Resource

  property :id,Serial
  property :entry_id,Integer
  property :type,Discriminator
  property :amount,Integer
  property :account_id,Integer
  property :memorandum,String
  property :currency_id,Integer
  belongs_to :entry, :model => 'Entry', :child_key => [:entry_id, Integer]

  def to_usd
      return "%.2f" % (self.amount.to_r.to_d / 100)
  end
  def self.sum_usd
    return self.entry.credits.sum(:amount)
  end

end

class Credit &lt; Amount; end
class Debit &lt; Amount; end
</pre>

Thought it might have been caused by some outdated libraries... but I've just cleared out some older libraries, still no luck.

* <http://gist.github.com/200093>
* <http://datamapper.lighthouseapp.com/projects/20609/tickets/1147-cant-use-dm-aggregate-sum-function-on-inherited-classes>

