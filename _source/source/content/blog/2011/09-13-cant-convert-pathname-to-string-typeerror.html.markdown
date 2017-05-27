---
title: can t convert Pathname to String TypeError 
date: 2011-09-13
tags: errors,ruby,strings
---
I'm revamping an old Sinatra app I built and unfortunately I'm running into this odd error:

<pre class="terminal">
can't convert Pathname to String (TypeError)
</pre>

It was occurring due to the octopussy gem, which I believe uses the httparty gem.

I haven't figured it out yet, but based upon some initial searches, it looks like this has to do with rubygems in some way. I noted that some folks ran into it when using bundler, as well.

When I commented out octopussy from my Gemfile, I was able to install the rest of the required gems with bundler.

I was only using the Octopussy gem in one of the [Docunext Lab Experiments](http://www.labs.docunext.com/demo/doculabsappone/news/), so it isn't a big deal. In fact I've made a lot of improvements to those experiments lately; representing a much more important change to that game. In particular, I'm now using the amazon\_product gem by [hakanensari](https://github.com/hakanensari/amazon_product) instead of the older ruby-aaws gem (that apparently doesn't work with Amazon's new query requirements). I also updated the mongo gem, which resulted in having to use BSON::ObjectId instead of Mongo::ObjectID.

Thankfully, for both gems, I had wrapped the interface with svxbox, so I was able to swap out the gem and the method in only one place. :-)

