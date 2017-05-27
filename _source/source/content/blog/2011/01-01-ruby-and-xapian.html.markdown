---
title: Ruby and Xapian
date: 2011-01-01
---
Today I **FINALLY** got around to automating the process of updating my Xapian indexes that contain information from the blogs and wikis I manage.

I'm writing about it here because I'm using the Ruby xapian-full gem to do most of the work. To automate the process, I copied the apt-xapian-index cron task found in /etc/cron.weekly and modified it like so:

<pre class="sh_sh">
#!/bin/sh
CMD=/usr/local/sbin/svx/xapianindex.sh
IONICE=/usr/bin/ionice
# Rebuild the index
if [ -x $CMD ]
then
  if [ -x $IONICE ]
  then
    nice $IONICE -c3 $CMD --quiet
  else
    nice $CMD --quiet
  fi
fi
</pre>

I think this will work just fine.

And some example code to search the xapian index:

<pre class="sh_ruby">
#!/usr/bin/ruby1.9.1
require 'xapian-fu'
include XapianFu
xpdb = '/var/lib/xapian-indexes/blogsandwikis.db'
db = XapianDb.new(:dir => xpdb)
db.search(ARGV[0]).each do |match|
  puts "* [#{match.values[:title]}](#{match.values[:url]})"
end
</pre>

It took me awhile to actually give xapian a try, but I'm so glad I did. I plan to use it much more in the future for searching, but also for finding and promoting associated relationships between content.

