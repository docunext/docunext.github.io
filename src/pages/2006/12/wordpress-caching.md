---
title: Wordpress Caching
date: 2006-12-11
---
Wordpress rocks, but it doesn't have much for http client or server caching. Currently I use Cache Lite from PEAR and it works wonders. I also use caching techniques learned from mnot and sitepoint.com. I have to add these to Wordpress, however care must be taken to alert users to my experiences with caching: that the best way to handle caching is to let Apache (my server of choice) do as much of the header control as possible, and only use PHP caching headers when you have to. Furthermore, its a good idea to let MySQL do as much caching as possible as well, but that's for another entry.

For example, I usually use SSL for anything that is authenticated ( a practice I'd like to wean myself off of ) so I set anything that is not over ssl to have a public cache headers. This caused serious issues with the theme editor bringing up stale files - something that users would likely blame on Wordpress, even though its really due to Apache in this situation. Therefore, I added this to my Apache configuration:

<pre>        &lt;LocationMatch ".*wp-admin.*"&gt;                Header set Cache-Control "no-store"        &lt;/LocationMatch&gt;</pre>

And it fixed the issue. By the way, my tool of choice for <a href="http://hetima.com/safari/stand-e.html">viewing http headers is with Safari Stand</a>.

More about Wordpress caching! As I mentioned in my last entry, I use the <a href="http://kimili.com/plugins/kml_flashembed">kimili flash plugin for embedding flash into Wordpress entries</a>. This great tool uses my favorite Flash embedding tool from deconcept: swfobject. The author did an awesome job of setting this up, but he omitted any caching possibilities, so even though the content hasn't changed in awhile (the last version was released in April 2006), every time a page is loaded, the same code is downloaded again and again.

Here is a gzipped diff of my changes to kml_flashembed.php: <a href="/resources/code/kml_flashembed.php.patch.gz">kml_flashembed.php.patch.gz</a>

I'll have to take a look at more of the internal's of Wordpress to figure out how I can get it to cache better. I think I've identified the biggest problem: Wordpress does not properly issue a validation response to requests like "If-modified-since", breaking expires headers and must-revalidate cache-control headers. Further investigation resulted in some unexpected results. An inquiry to the Cacheability engine returned:


While Safari Stand reports that the object will be fresh for 1 minute:


Then Apache seems to be responding with it's own information too:

<pre>[12/Dec/2006:14:36:02 -0500] "GET /resources/blog/?page_id=4 HTTP/1.1" 304 - "http://www.docunext.com/blog/" "Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/418.9 (KHTML, like Gecko) Safari/419.3"</pre><b>IMPORTANT NOTE!</b>

Aha, OK. It appears that my caching code for the kml plugin was messing things up. Fixed. Alright, now we're back in business. Apache's expires header is working OK, and various clients are getting the same info. So now I'm back to the same conclusion, since Wordpress does not issue a validator, there is no way to tell if the client's cache is fresh.

END OF NOTE.

The docunext.com Wordpress caching plugin is now functional. There is plenty of testing to do, and a few remaining questions: * How do I create an interface to the plugin? Does it need one? Test for a server writeable directory: /tmp/, the document root, etc.* When should the cache get cleaned? Currently, the cache is emptied anytime there is a post made to the server, like in the case of a post edit or comment.

Also found out that Mozilla's live http headers is working again in the latest versions of Mozilla / Firefox - WOO HOO! (but not Camino! ARGH).

Here are the links that inspired this:

<a href="http://www.sitepoint.com/article/php-anthology-2-5-caching">PHP cache header practical explanation</a>

<a href="http://alexandre.alapetite.net/doc-alex/php-http-304/index.en.html">Proposal for a single method for php to generate http cache headers</a>

<a href="http://www.mnot.net/cache_docs/">The legendary mnot cache docs</a>

<a href="http://www.sitepoint.com/forums/showthread.php?t=440706">How to defer or delay javascript loading</a> - off topic, but the idea the got this started about an hour ago. :-)

<pre><script type="text/javascript" defer="defer"></script></pre>
