---
title: Ruby MongoDB Driver API
date: 2010-03-07
tags: documentation,mongodb,ruby
---
#### Databases

<pre class="sh_ruby">
db = Mongo::Connection.new("localhost", 27017).db("mydb")
</pre>

#### Collections

<pre class="sh_ruby">
db.collection_names.each { |name| puts name }
coll = db.collection("mycollection")
</pre>

#### Documents

<pre class="sh_ruby">
mydoc = coll.find_one()
puts coll.count()
coll.find().each { |doc| puts doc.inspect }
coll.find({"title" => /^a/})
coll.find({},{:skip => 10, :limit => 20 })
</pre>

