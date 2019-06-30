---
title: Cache with PHP Webservers and Browsers
date: 2007-08-05
---
Caching is a great boost for performance, but its tough to balance freshness, expiration, and updates. These are the guidelines I follow to help setup caching:
<h3>Decide what is doing the actual serving</h3>

If PHP is serving the content, it should play a role in the caching. If not, it can't! So if you have an image being served that is not touched by PHP, you should definitely setup your web server to support caching, namely HTTP headers and the expires capabilities. Careful though, the expires without checking for modification times can be dangerous, because if content has updated but the client's version of it has not yet expired, they will continue to use the old version.
<h3>Accept that you'll need to cover more than one base</h3>

With the understanding that when you use PHP with a web server you really have two web servers, you will need to have two sets of caching specifications. While it might be possible to contain them in one file and parse out the values, I'm not going to cover that here. In most cases, you'll want your web server like Apache or Lighttpd to pass control of caching to PHP for dynamic content.
<h3>PHP Caching</h3>

There are even more types of PHP caching than there are of HTTP caching. So let's name a few that are involved with PHP:

<ul><li>Opcode caching</li><li>Data source caching (MySQL caching, memcache, xcache var cache, etc)</li><li>Content generation caching</li></ul>

These, combined with HTTP caching, give you so many choices its hard to nail down the best configuration. For this post, I'll just focus on content, and leave the opcode and data source caching for another day.

I usually separate these concepts into two piles: server and client, and the two can benefit each other. If you have content that changes fairly often, forget about it. In my opinion, its not worth it. Leave the caching up to the data source, like MySQL.

If you have content that doesn't change too often, or is client specific, read on!

First off I never use the expires caching feature, its just too much. I may in the future, but I don't right now. I check for modification times. This is very effective, but how do you do so in PHP? Well this is where server caching and client caching unite. If you cache the content on the server, you have a file to test the modification time of. You can then use a PHP script to compare that with the client's last modified time. You'll need to specify a window for saying how long a client cache is good for after the modification time of the server static cache, which is similar to the expires header, but in this case you have a server-controlled cache clearing mechanism: you can delete the server cache file.

This is your rescue! You can program in a trigger to wipe the cache when the seldom updated content is changed, and when the client requested data it has cached, the server checks its freshness against the server cache, finds nothing, rebuilds the content, tells the client that its cache is stale, and sends a new version.

In the case that the client doesn't have a cached copy and the server does, the information will obviously have to be sent. BUT - the server won't have to rebuild it every time, it can just send a static file. On my server, that is the difference of .1 second and .005 seconds.

In my opinion, caching is THE most effective weapon in the fight for efficient web servers. The catch? If configured incorrectly, in is your worst enemy.
<h3>Clearing the cache</h3>

Making caching work is a little easier when you can be certain things have updated or changed, so using a single method for updates is a good idea, like POST. But what about delete? In that case I use an AJAX request to make the post. What if the use has disabled javascript? Then disable caching.
<h3>Unique Caching Problem</h3>

I discovered this bizarre occurrence last night that would cause the server to check the freshness of a cached page, find it fresh, and tell the client it could use its cached version, even though the cached version on the server was just recently cleared and rebuilt. Its hard to explain, but I'll try. <ol><li>Client would make update</li><li>Database updated, cache cleared</li><li>New page rendered, new cache saved</li></ol>

If the above transpires in a single request, then a subsequent request will fool the client into thinking that its cached version is still good. I was able to fix the situation by causing an additional request before the last step above with a redirect header to the same page. I think this might be possible to fix with a change to the last modified header that gets send out, but since its working for now, I'll leave it at that and focus on more pressing issues.
