---
title: Converting MemcacheDB Posts to MongoDB
comments:
  - author: Scott F
    email: scottf@2levelsabove.com
    url: http://alltherides.com
    date: 05/11/2010 02:21:41 PM
    text: >
      Any particular reason you went to MongoDB instead of MemcacheDB?<br/><br/>Thank You
  - author: Albert
    email: albert.lash@savonix.com
    date: 05/12/2010 03:31:37 PM
    text: >
      Hi Scott, yes - mainly because MongoDB allows you to search sub-fields within a json document.
date: 2010-03-01
tags: mongodb,sinatra
---
This probably won't make much sense out of context, but I wanted to make note of this anyway.

I started work on a little blog engine to learn more about NoSQL, more specifically, publishing with MemcacheDB. I later decided I wanted to use MongoDB. To migrate the old posts to the new storage backend, I wrote this little convert function within my Sinatra App to do so:

<pre class="sh_ruby">
    # Temp func to convert memc posts to new mongodb posts
    get '/news/convert' do
      coll = Dlabzapp1.runtime['mgdb'].collection('entries')
      @rawst = Dlabzapp1.memcdb.get('index');
      index = JSON.parse(@rawst)
      index.each_pair do |key,value|
        cnt = Dlabzapp1.memcdb.get(value).to_s
        coll.insert({
          :rurl => value,
          :entry_title => cnt.gsub(/\n\n.+/,''),
          :entry_text => cnt.gsub(/^[^\n]+\n\n/,''),
          :created_on => Time.now.to_i
        })
      end
    end
</pre>

Then once I confirmed they had been migrated, I deleted them:

<pre class="sh_ruby">
    # Temp func to delete memc posts to new mongodb posts
    get '/news/delete' do
      @rawst = Dlabzapp1.memcdb.get('index');
      index = JSON.parse(@rawst)
      result = ""
      index.each_pair do |key,value|
        if Dlabzapp1.memcdb.get(value)
          Dlabzapp1.memcdb.delete(value)
          result << "#{value} has been deleted\n"
        end
      end
      result
    end
</pre>

I ran this twice. First it reported that the entries had been deleted. Then it reported nothing, as the entries were not found. Then I ran this to delete the index:

<pre class="sh_ruby">
    # Temp func to delete memc post index to new mongodb posts
    get '/news/delindex' do
      @rawst = Dlabzapp1.memcdb.delete('index');
      "ok"
    end
</pre>

¥

