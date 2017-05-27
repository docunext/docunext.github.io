---
title: DataMapper Hook Loop Traps
comments:
  - author: namelessjon
    email: jonathan.stott@gmail.com
    ip: 62.49.1.168
    url:
    date: 12/07/2009 06:15:35 PM
    text: >
      If you're redefining `save` you will probably want to make it<br/><br/>def save(context = :default)<br/><br/>Where  context is the validation context of the resource, which is usually :default, but might be others.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 12/07/2009 06:19:42 PM
    text: >
      Thanks namelessjon! Datamapper is really amazing - I  saw your other comment and will definitely update my version.
date: 2009-12-07
tags: datamapper
---
Long story made short: I can't definte a save hook with one class that involves another object getting saved, because it triggers the same hook again.

<pre class="sh_sh">
!! Unexpected error while processing request: stack level too deep
</pre>

Doh!

Then I tried redefining the save method:
<pre class="sh_ruby">
  def save
    myaccount = self.account
    myaccount.cached_journal_balance = myaccount.journal_balance
    self.myaccount.save
    super
  end
</pre>

No go:

<pre>
>> Listening on 0.0.0.0:3000, CTRL+C to stop
!! Unexpected error while processing request: wrong number of arguments (1 for 0)
</pre>

Grrrr... I believe part of the problem is that the class I'm trying to work with is inherited by a couple others.

It looks like I might have been able to get away with this lame-o instance variable on a parent object:

<pre class="sh_ruby">
  after :save, :account_balances
  before :save, :unsaved
  def unsaved
    entry = self.entry
    if entry.saved == nil
      entry.saved = 0
    end
  end
  def account_balances
    entry = self.entry
    if entry.saved == 0
      entry.saved = 1
      account = Account.get(account_id)
      puts account.id
      mybal = account.journal_balance
      puts mybal
      account.cached_journal_balance = mybal
      account.save
    end
  end
</pre>

I'm not exactly sure why its working (and I don't think its working extremely well), but so far so good.

Related:

* <http://datamapper.org/docs/callbacks.html>
* <http://www.mail-archive.com/datamapper@googlegroups.com/msg01224.html>
* <http://www.andrewbuntine.com/articles/about/merb>

¥

