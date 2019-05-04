---
title: Importing a Large Dataset in MongoDB
comments:
  - author: Albert
    email: albert.lash@savonix.com
    ip: 96.240.136.9
    url:
    date: 04/26/2010 02:14:04 AM
    text: >
      I recently did something similar with Perl and was astounded by how quick it was. I imported over 140,000 documents, albeit small ones, and  it took less than thirty minutes. The mongoimport command line tool alone would probably been faster, but then I would have had to use Perl to convert the documents into JSON.
date: 2010-03-04
tags: json,mongodb,ruby
---
Last night I imported a large, but not outrageously large, dataset into a MongoDB database. The complication might have been the structure of each document. They weren't too complicated, just a hash with two keys, one having a string as a value, and the other having an array.

At first I was using Ruby1.9.1, but it was taking too long so I switched to using the command line interface, "mongoimport".

The cool thing about this is that it can import JSON directly. I converted my data set to JSON format, saved it to a single file with about 23,000 JSON objects, and then ran it:

<pre class="sh_sh">mongoimport --host 192.168.8.103 --db doculabsappone -c tags < tmp/tags.json</pre>

It was **way** faster than using Ruby1.9.1!

¥

