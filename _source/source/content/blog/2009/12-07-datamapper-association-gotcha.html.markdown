---
title: DataMapper Association Gotcha
comments:
  - author: namelessjon
    email: jonathan.stott@gmail.com
    ip: 62.49.1.168
    url:
    date: 12/07/2009 05:46:41 PM
    text: >
      Hi<br/><br/>You might want to update your checkout of DataMapper, and also your dm-gems.  DataMapper is currently on 0.10.1, and 0.10.2 is about to drop.  There are over 100 commits between your repository and the current edge :)<br/><br/>In the new version of the code, :model is the correct usage, or even:<br/><br/>belongs_to :author, 'User', :child_key => [:post_id]
date: 2009-12-07
tags: datamapper
---
I've got a class that has a property that is the same name as the symbol for another class it has a "belongs_to" relationship with.

<pre class="sh_ruby">
class Ledger
  include DataMapper::Resource
  property :id,Serial
  property :posted_on,Integer
  property :memorandum,String
  property :amount,Integer
  property :account_id,Integer
  property :entry_id,Integer
  property :entry_amount_id,Integer
  property :fiscal_period_id,Integer
  property :currency_id,Integer
  belongs_to :account
  belongs_to :entry
  belongs_to :entry_amount, :class_name => 'Amount', :child_key => [ :entry_amount_id ]
end
</pre>

Looks like the docs at datamapper.org are a little out of sync with the version of datamapper I'm using, as they specify that something like this will work:

<pre class="sh_ruby">
class Post
  include DataMapper::Resource
  belongs_to :author, :model => 'User', :child_key => [ :post_id ]
end
</pre>

I scoped out my cloned copy of the dm-core code and noticed the conspicuous options:

<pre class="sh_ruby">
OPTIONS = [ :class_name, :child_key, :parent_key, :min, :max, :through ]
</pre>

and guessed ":class_name" might work. Indeed it does! Nice. I have to remark that working with datamapper is intellectually rewarding.

UPDATE: <a href="http://datamapper.lighthouseapp.com/projects/20609-datamapper/tickets/1146-minor-inconsistency-with-docs-and-reality" rel="nofollow">Issue has been logged</a>! Lighthouse looks nice, too. I'd previously only heard of it via my [work with SD](http://www.docunext.com/wiki/SD).

¥

