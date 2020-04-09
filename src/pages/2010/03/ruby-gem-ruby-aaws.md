---
title: Ruby Gem ruby aaws
comments:
  - author: Ian Macdonald
    email: ian@caliban.org
    url: http://caliban.org/
    date: 03/19/2010 06:34:42 AM
    text: >
      People who install the gem often overlook the introductory README file. I should probably move all of the information out of there and into the library itself, so that RDoc documentation gets generated for it.<br/><br/>I'm not sure why you have cache problems with UTF-8. What's the error you're getting?
  - author: Albert
    date: 03/19/2010 08:05:38 AM
    text: >
      Hi Ian! Good idea. I had no idea that the Gem even includes examples, too. I'll test out the cache again and see what the error is. Its odd because the cache file was in good shape when I would open it manually.
  - author: Albert
    date: 03/22/2010 10:26:58 AM
    text: >
      Hi Again Ian,<br/><br/>This is what I've found out:<br/><br/><pre><br/>missing attribute quote<br/>Line: 1<br/>Position: 1739<br/>Last 80 unconsumed characters:<br/>&lt;ItemSearchResponse xmlns=\"http://webservices.amazon.com/AWSECommerceService/200<br/>Line: 1<br/>Position: 1739<br/>Last 80 unconsumed characters:<br/>&lt;ItemSearchResponse xmlns=\"http://webservices.amazon.com/AWSECommerceService/200<br/>	/usr/lib/ruby/1.9.1/rexml/parsers/treeparser.rb:95:in `rescue in parse'<br/></pre><br/><br/>Looks like Rexml (or whatever is reading the cache file) is escaping the attribute quotes for some reason. The cached file does not have the attribute quotes escaped.
  - author: AJ ONeal
    email: coolaj86@gmail.com
    url: http://coolaj86.info
    date: 04/26/2010 11:44:41 PM
    text: >
      It is a problem with ruby-aaws, here's the snippet in amazon/aws.rb that fixes the issue:<br/><br/>      # Retrieve the cached response associated with _url_.<br/>      #<br/>      def fetch(url)<br/>          digest = Digest::MD5.hexdigest( url )<br/>          cache_file = File.join( @path, digest )<br/><br/>          return nil unless File.exist? cache_file<br/><br/>          Amazon.dprintf( 'Fetching %s from cache...', digest )<br/>          File.open( cache_file ).readlines.join().to_s<br/>      end<br/><br/>before it had<br/>          File.open( File.join(cache_file) ).readlines.to_s
  - author: Albert
    date: 04/27/2010 01:52:38 AM
    text: >
      Thanks for commenting AJ! I'm caching the resulting page, which seems to work OK.<br/><br/>Also, I recently starting using flix4r (Netflix API for ruby) and it uses the api_cache gem. I haven't scoped it out too much but I like the idea.
date: 2010-03-08
tags: gems
---
This is an awesome gem, though I ran into many errors when I first started to try it out. Here's the code I was trying:

<pre class="sh_ruby">
require 'amazon/aws'
require 'amazon/aws/search'
require 'pp'
include Amazon::AWS
include Amazon::AWS::Search
ASSOCIATES_ID = "removed"
KEY_ID = "removed"
#req = Request.new(KEY_ID, ASSOCIATES_ID, 'us', false)
is = ItemSearch.new( 'Books', { 'Title' => 'Ruby' } )
is.response_group = ResponseGroup.new( :Small )
req = Request.new(KEY_ID, ASSOCIATES_ID, 'us', false)
resp = req.search( is )
pp(resp.item_search_response)
pp(resp)
</pre>

I first had trouble figuring out that I needed to put my AWS "secret" key in ~/.amazonrc.

I was getting UTF-8 errors, too. I think adding this to my ~/.amazonrc fixed the problem:

<pre>
encoding = 'UTF-8'
</pre>

Hmmm. I guess using the cache also causes UTF-8 related errors.

UPDATE: Finally, late last night I figured it out. The [example aaws code](http://www.somelifeblog.com/2008/12/ruby-amazon-associates-web-services-aws.html) I was basing my tests on uses ItemLookup.

<div>ItemLookup has an item_lookup_response object. When I switched to searching, item_lookup_response is not there. I eventually switched to item_search_response, but had cleared out the rest of the example for debugging. Adding it back in returned the right set.</div>

<pre class="sh_ruby">
is = ItemSearch.new( 'Books', { 'Title' => 'Ruby' } )
is.response_group = ResponseGroup.new( :Small )
req = Request.new(KEY_ID, ASSOCIATES_ID, 'us', true)
resp = req.search( is )
item_sets = resp.item_search_response[0].items
  item_sets[0..3].each do |item_set|
  item_set.item.each do |item|
    attribs = item.item_attributes[0]
    puts attribs
  end
end
</pre>

The way the secret key is handled seems odd. Maybe there is a better way? The ruby-aaws RDoc says its the only way though.

UPDATE: There are different ways to set where the amazonrc file is. In my case, running unicorn via daemontools caused ENV['HOME'] to be nil, resulting in amazon.rb trying to evaluate ENV['HOMEDRIVE'] + ENV['HOMEPATH'], causing a NoMethodError that was very difficult to decipher (running unicorn with the "-d" option after invoking the Ruby interpreter helped track down the cause).

I had tried setting $AMAZONRCFILE at first, then $AMAZONRCDIR, but that didn't work I noticed in amazon.rb that it was looking for ENV['AMAZONRCDIR'], so I set it in config.ru and voila - functionality!!

UPDATE:

I've send Ian an email:

<blockquote>
Hi Ian,

Nice work on the ruby-aaws gem. I'm using it with Sinatra and Unicorn,
which is run by daemontools. For whatever reason, ENV['HOME'] was
resulting in nil, causing it to try ENV['HOMEDRIVE'] + ENV['HOMEPATH'],
which for me resulted in a NoMethodError.

Setting ENV['AMAZONRCDIR'] fixed the issue for me, but perhaps you'd
consider putting an exception trap there, as the NoMethodError is so vague
it was tough to track down.

Thanks for this sweet gem!

- Albert

PS - I've blogged about the gem, too:

http://www.docunext.com/2010/03/ruby-gem-ruby-aaws.html

Still not sure what the problem is with UTF-8 and caching....

--

http://www.docunext.com/
</blockquote>

¥

