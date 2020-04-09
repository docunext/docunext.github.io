---
title: Rails 4 and Ruby 2 Are Upon Us
date: 2013-03-01 13:03 +00:00
tags:
---
I took some time off from Rails development to try out Golang (it rocks), but
now I'm back on the tracks and am digging into Rails 4 beta fresh out the oven
and Ruby 2 which coincidentally reached a production status. Here's a few items
I've noticed:

1. Using rubygems with Ruby 2 seems phenomenally slower than with 1.9.3; has
   anyone else noticed? Is that going away soon (I hope!)?
2. JBuilder is cool - it can be used to create complex json output in a 
   manageable manner. If you've tried yajl with tilt you might dig this.
3. Perhaps the coolest new feature I've found in Rails 4 is native support for
   hstore in Postgres. Postgres has a hash datatype that stores only strings as
   keys and values; the Rails 4 interface to it is spot on. I'll go into more
   detail on this killer app.

### Rails 4 and Hstore from Postgres 9.2

The combination mentioned above is truly a magical pairing: its both SQL and
NoSQL at the same time in a single ORM for rails. If you're familiar with the 
ActiveRecord serialize method, this is quite similar - but its a native datatype
in Postgres _and_ it can be arbitrarily indexed and queried upon. That's the
hook from pg; on the Rails side its, like I said, spot on. The attribute is
treated exactly like a Ruby hash.
Another interesting new feature of Postgres 9.2 is the json data type; it adds
format validation for input as well as a couple of handle transformation
functions; returning the results of a row query in json format. Rails likely
won't get into that detailed feature, but I sure will. And there is PL/v8,
adding javascript as a procedural language.

# Sweet.

<http://schneems.com/post/19298469372/you-got-nosql-in-my-postgres-using-hstore-in-rails>

### Rails 4 TurboLinks or Ember?

I'm not sure how I feel about TurboLinks yet. On one hand, I see it as
a stop-gap measure towards the almighty single page app; on the other hand, I do
appreciate the speed and responsiveness boosts. The Rails
community is just shy of embracing the HTML5 history API. I recently tried
building a single page application with Rails 3.2 and Ember and Rails just felt
too big. It felt like Sinatra or Padrino would have been a better, simpler fit.
I would much prefer if the
ember-data layer stabilized and began to play nicely with the Rails and
ActiveRecord superpower of a JSON API that has backwards compatibility to
a multi-page website. All I gotta say is **remember dbslayer**.


### Upgrading a Rails 3.2 App to Rails 4

This was surprisingly simple, though I am cheating with the protected\_attributes
gem (not as awesome as StrongParameters). Hmm, this is interesting:

```
DEPRECATION WARNING: The following options in your User.has_many :vehicles
declaration are deprecated: :include. Please use a scope block instead. For
example, the follow
ing:

  has_many :spam_comments, conditions: { spam: true }, class_name: 'Comment'

should be rewritten as the following:

  has_many :spam_comments, -> { where spam: true }, class_name: 'Comment'
```

That <code>-></code> syntax is unfamiliar. Not a big deal, right?! Anyone for
bike sheds? I'm also hitting the fact that they gemified a lot of the guts of
3.2, like no caching. Not a big deal, either; I was only using it in one place
to cache an action. I definitely agree with moving those components to gems.

---

    ( Post continued several days later on March 6th )

### Rails 4 Encrypted and Signed Session Cookies

I put together a simple Rails auth system over the weekend and discovered
encrypted and signed cookies. These are really cool, because:

1. They can't be tampered with, because they are signed
2. They can't be read, because they are encrypted

These factors allow the cookie alone to serve as the storage for the session; no
need for file system storage like PHP or a database query for every request.
However, the store is limited to 4k, so if you need more you can switch on the
ActiveRecord session storage gem.

Along the lines of security, but not specific to Rails 4, is the fact that Rails
has HTTP digest authentication in it. I'm a fan of digest authentication.

---

    ( Post continued a couple weeks later on March 24th )

### Rails4 Controller Concerns

<code>Model Concerns</code> in Rails3 are straightforward, especially when used with
<code>Rails Engines</code>; they enable developers to override and/or decorate other
models in the interests of reusable, DRY code. With
<code>ActiveSupport::Concern</code>, the interface to Ruby's metaprogramming
capabilities is simple and <em>manageable</em>. Here's and example from svxbox,
a "junk drawer" of code that's collected in one of my GitHub repos:

```
module SvxBox::Roary
  # Overrides the ActiveRecord::Base#find method to find by a speficied param.
  #
  #   class Something < ActiveRecord::Base
  #     include SvxBox::Roary
  #     to_param_suffix :name
  #   end
  extend ActiveSupport::Concern

  included do
    cattr_accessor :param_suffix
    validates :param_key, :presence => true, :uniqueness => true, :if => :param_key_attribute?
  end

  # ... snip ...

  module ClassMethods

    # ... snip ...

    def find(key)
      return super if !self.attribute_method?(:param_key)
      begin
        where("param_key = ?", key.to_s).first!
      rescue ActiveRecord::RecordNotFound
        super
      end
    end
  end

  def to_param
    return self.param_key if param_key_attribute?
    super
  end
end
```

This module, when included in an A/R class, evaluates some code to within the
context class definition, adds/overrides class methods, and adds/overrides
instance methods, the latter of which would be familiar to those who have used
Ruby Modules in the traditional sense.
Descendants of <code>ActionController::Base</code> are full-fledged Ruby classes;
they too can benefit from <code>ActiveSupport::Concern</code>. Here's how I'm using
it to encapsulate extradomain-logic and clean up the ApplicationController: 


```
require 'active_support/concern'

module ControllerJavascript
  # Returns "application" and controller-specific file if it exists.
  #
  #   <%= javascript_include_tag javascript_includes %>
  # 
  # Thanks to the AssetPipeline and blog.nikoroberts.com/post/45834700876
  # Should work with Rails 3.2 and 4.0.
  extend ActiveSupport::Concern
  include AbstractController::Helpers

  APPLICATION = "application".freeze

  included do
    helper_method :javascript_includes
  end

  def javascript_includes
    if controller_javascript?
      return APPLICATION, controller
    else
      return APPLICATION
    end
  end

  private

  def controller_javascript?
    !Rails.application.assets.find_asset(controller, ext: 'js').nil? &&
      controller != APPLICATION
  end

  def controller
    @controller ||= params["controller"]
  end
end
```

The simplicity of this pattern kicks some serious butt. I'm also using this for
a Rails implementation of nginx's secure_link module. It will eventually
become a gem and its awesome how little I have to do to abstract it out while
I fine-tune the design. The _clean_ inclusion of small chunks of reusable code
within my codebase helps with the dependency soup I've encountered with Rails
in the past ([see my post about Golang dependency freedom][golang-deps]).

Rails Engines are awesome in certain cases, in others, overkill. Concerns like
this fill a niche for Rails plugins as gems when an Engine is too much. Last
year I authored a few Rails3 engines and this year I plan to refactor a few
into simpler non-Engine plugins. One of them is Invytr, a
generalized invitation system, and it will be better off smaller and simpler.
Thankfully Rails4 retains the ```rails plugin new my_plugin``` generator
(though vendor/plugins is gone from Rails4). Also, since Rails logically
continues to play nicely with Rack, rubygem libraries that include base
functionality as Rak middleware can easily support multiple frameworks besides
Rails, such as Sinatra, Padrino, or Rackup. [Rack Policy][rack-policy] is a
good example of such a gem.
 



### Signed Cookies Serializer

```ActionDispatch::Cookies::SignedCookieJar``` uses
```ActiveSupport::MessageVerifier``` to work its magic. Verifier accepts a
serializer in the initialization options hash, but alas that's not configurable
for use with the signed cookie jars API built into Rails. Here's the monkey
initializer I use:

```
module ActionDispatch
  class Cookies
    SignedCookieJar.class_eval do 
      def initialize(parent_jar, key_generator, options = {})
        @parent_jar = parent_jar
        @options = options
        secret = key_generator.generate_key(@options[:signed_cookie_salt])
        @verifier   = ActiveSupport::MessageVerifier.new(secret, digest: 'SHA256', serializer: JSON)
      end
    end
  end
end
```

I hope that becomes configurable at some point. Marshal may be the more space
efficient serializer, but for general, non-session cookies, JSON is far more
portable. Besides, Base64 encoded data has approximately 33% overhead, so it
may just be a losing battle. Also, Rails depends on MultiJson, providing more
control over serialization. When it comes to encrypted session cookies, not
as much of a big deal because its less likely that they'll need to be portable,
but judging by the following links, this needs to be configurable:

* <https://gist.github.com/jeffyip/4091166> Rails session cookies with JSON
* <https://gist.github.com/wvanbergen/1220401> Rails compatible Node.js verifier
* <http://blog.ericrichardson.com/2012/03/1786-making-django-and-rails-play-nice-part-2>


### rbenv, Rails4, Ruby2, Ruby1.9, and Debian / Ubuntu

For one of my websites, I use rbenv, Debian, Rails4 and Ruby2 in development
and run Ubuntu, Rails4 and system Ruby1.9 in production and its working fine.
In production, I'm also using gems provided by apt-get. Its only been about a
month so far, but I like it so far. I likely need to place a hold on those
packages, come to think of it. Anyway, I'll share how I did it.

The rubygems-integration via apt-get makes the ```gem``` command recognize gems
from apt-get. After that, its just a matter of finding gems in the Debian /
Ubuntu repos that are compatible with Rails4 dependencies. I've found these:

```
gem 'pg', '0.13.2'
gem 'erubis', '2.7.0'
gem 'tzinfo', '0.3.33'
gem 'bcrypt-ruby', '3.0.1'
gem 'yajl-ruby', '1.1.0'
```

The yajl, bcrypt, and pg gems are nice to get via apt because I don't have
to install a compiler tool chain. It seems that the friction between Debian
and Rubygems may have subsided, but I'm not counting my chickens yet.


### Appendix
#### Rails 4 Queue

This looked cool, but it was removed late 2012:

<https://github.com/rails/rails/commit/775829869e23666e114edbe8d6d3ff08d5d71025>

#### ActiveModel::Model

The author of active_attr said it was "what was missing" from ```ActiveModel```
and I agreed. Thankfully, in Rails4, its in there.

#### Changes to Sprockets


[asset-pipeline-controller]: http://guides.rubyonrails.org/asset_pipeline.html#how-to-use-the-asset-pipeline
[golang-deps]: http://www.docunext.com/2013/01/between-the-empire-and-the-rebellion.html 
[rack-policy]: https://github.com/peter-murach/rack-policy

