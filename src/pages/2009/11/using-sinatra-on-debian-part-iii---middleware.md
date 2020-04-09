---
title: Using Sinatra on Debian Part III Middleware
date: 2009-11-22
tags: rack,ruby,thin
---
Here's a great intro to Rack middleware:

* <http://vision-media.ca/resources/ruby/ruby-rack-middleware-tutorial>

The example in the above tutorial didn't work with my Sinatra app, and it took me a long time to figure out what was up, but I think I've got it now.

<pre class="sh_ruby">
module Rack
  class Blah
    def initialize(app)
      @app = app
    end
    def call(env)
        @status, @headers, @response = @app.call(env)
        [@status, @headers, self]
    end
    def each(&block)
        @response.each { |x|
            x.reverse!
            yield x
        }
    end
  end
end

require 'hi'
use Rack::Blah
app = Sinatra::Application
run app
</pre>

By the way, the error I was getting before I got this to work:

<pre class="sh_sh">
!! Unexpected error while processing request: undefined method `body' for #<Rack::CommonLogger:0xb76d1aac>
</pre>

When I tried to track down why call was returning a CommonLogger object as the third component of the array, I had a tough time with the Rack documentation. It seems sparse and not very clear, which is too bad because so much of the Ruby community is basing their work upon it.

From the Rack spec:

<blockquote>A Rack application is an Ruby object (not a class) that responds to call. It takes exactly one argument, the environment and returns an Array of exactly three values: The status, the headers, and the body.</blockquote>

So far so good, but I can't make heads or tails of this:

<blockquote>The Body must respond to each and must only yield String values. The Body itself should not be an instance of String, as this will break in Ruby 1.9. If the Body responds to close, it will be called after iteration. If the Body responds to to_path, it must return a String identifying the location of a file whose contents are identical to that produced by calling each; this may be used by the server as an alternative, possibly more efficient way to transport the response. The Body commonly is an Array of Strings, the application instance itself, or a File-like object.</blockquote>

Ugh! Let's instead refer to some other web pages that go beyond that cryptic, but important response body object.

Really the only page I could find that goes into detail on this is this one:

* <http://railscasts.com/episodes/151-rack-middleware>

**Conclusion**

Shifting gears to MVC programming from XSL pipelines has been awkward, and many, many times I find myself scratching my head why I am bothering. Fact is, I still use XSL pipelines in most of my open source projects and will continue to do so. Fact is I'm focused on web applications and XSL works really well for me in my efforts.

Its my curiosity to learn new things which keeps me coming back to learn more about what other software developers are working on. My strategy is evolving, slowly, and I'm starting to envision more cooperation between XSL pipelines and MVC programming.

How? Good question. I like the idea of using the MC components of MVC programming, meaning that I'm impressed with how object-relation mappers work together with controllers to prepare data for output through views, but not always. In most of my experience, data goes from SQL to XML, XML is processed, and then rendered with XSL, and incredibly that has worked quite well despite many limitations.

As I said, using an abstraction layer to work with data objects directly, instead of coding SQL feels awkward to me. However, there are many times when processing the data represented in that data would be much more elegantly and sensibly done using an interface specific interface, not bending time and space to access the data in a way supportive of the object's structure via the generic interface of an xml object.

So here's where I'm stuck  (but I think I have a solution): I've become so accustomed to directly mapping SQL result sets to XML and directly injecting them into an existing XML document that I feel a little bit lost in thinking about how else to do it.

The solution I'm thinking about now is the use of the "simple xml" bindings that most languages have to map native objects to xml structures. I just don't know...

UPDATE: Wowzer! [Builder](http://builder.rubyforge.org/) appears to be *exactly* what I was looking for.

I'm a little on the fence about the applicability of what I could use middleware for.

