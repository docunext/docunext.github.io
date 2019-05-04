---
title: Ruby DataMapper Associations
date: 2009-11-23
tags: datamapper,orm,ruby,sinatra
---
After some initial excitement [learning about DataMapper](http://www.docunext.com/wiki/DataMapper), I became concerned that it might not be all it that I thought it was.

Thankfully, it is!

I was concerned about the associations capability. The documentation sounded great, but got a little fuzzy on me.

I finally figured it out, and here's a quick and simple explanation of what I was concerned about. This should be an interesting example as it also involves single table inheritance:

<pre class="sh_ruby">
class Entry
  include DataMapper::Resource
  property :id,Serial
  property :memorandum,String
  property :status,Integer
  property :fiscal_period_id,Integer
  has n, :credits
  has n, :debits
end
class Amount
  include DataMapper::Resource
  property :id,Serial
  property :entry_id,Integer
  property :type,Discriminator
  property :amount,String
  property :account_id,Integer
  property :memorandum,String
  belongs_to :entry
  belongs_to :account
end
class Credit &lt; Amount; end
class Debit &lt; Amount; end
</pre>

Can you guess what type of data model this is? That's right - a double entry accounting system!

Entries and credit and debit amounts are bound by foreign key constraints. Inasmuch, they are often grouped into result sets.

The DataMapper docs clearly explain how to get the entries, like this:

<pre class="sh_ruby">
get '/entries' do
    @myitems = Entry.all()
    erb :entry_list
end
</pre>

But how can I get the credits and debits as well? It took a minute to figure it out, but I don't have to do anything at all. DataMapper does it for me. Impressive!

To be more specific, I'll include this erb template, which is accesses the @myitems object, and what an object it turns out to be!

<pre>
&lt;div class="accounts"&gt;
&lt;ul&gt;
&lt;% @myitems.each do | item | %&gt;
&lt;li&gt;Entries: &lt;%= item.id %&gt;,&lt;%= item.memorandum %&gt;
&lt;br /&gt;&lt;% item.credits.each do | credit | %&gt;
Credits: &lt;%= credit.id %&gt;,&lt;%= credit.amount %&gt;&lt;br/&gt;
&lt;% end %&gt;
&lt;br /&gt;&lt;% item.debits.each do | debit | %&gt;
Debits: &lt;%= debit.id %&gt;,&lt;%= debit.amount %&gt;&lt;br/&gt;
&lt;% end %&gt;
&lt;/li&gt;
&lt;% end %&gt;
&lt;/ul&gt;
&lt;/div&gt;
</pre>

See what happens? I iterate through the entries, and on each entry, I'm able to access the associated data objects. *C'est incroilable!*

I'm not too crazy about erb templates, and I think that's one of the reasons why I had such a hard time figuring out the way DataMapper associations work.

Wait! I'm not done yet. Another question I had involved how to create entry rows and associated amount rows.

<pre class="sh_ruby">
post '/new/entry' do
    @entry = Entry.new(:memorandum => params[:entry_name])
    @entry.save
    @credit = @entry.credits.create(:amount => '5.00')
    @debit = @entry.debits.create(:amount => '2.00')
    @debit = @entry.debits.create(:amount => '3.00')
    redirect '/entries'
end
</pre>

There is no error checking going on there, and the entry amounts are hard-coded, but it was enough for me to learn how DataMapper associations assist with the creation of data.

NOTE: This code is from a Sinatra app I'm working on, hence the:

<pre class="sh_ruby">
post '/new/entry' do
</pre>

syntax.

