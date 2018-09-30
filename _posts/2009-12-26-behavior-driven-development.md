---
title: Behavior Driven Development
date: 2009-12-26
tags: ruby,sinatra,testing
---
<iframe src="http://rcm.amazon.com/e/cm?t=inforbanki-20&o=1&p=8&l=as1&asins=1934356379&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr" style="width:120px;height:240px;float:right;margin-left:8px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
Behavior Driven Development (BDD) is an awesome paradigm that I've recently learned about while transitioning to Ruby as my primary development language.

I'm getting familiar with a couple BDD frameworks available for Ruby:

* RSpec
* Cucumber

If I understand correctly, these two frameworks can actually work in concert with each other.

The application I'm starting to use BBD with is called [Regdel, an open source bookkeeping program written in Ruby](http://www.regdel.com/), and here's an example of a very simple RSpec test:

<pre class="sh_ruby">
  it "should respond to /journal/0" do
    get '/journal/0'
    last_response.should be_ok
  end
</pre>

This test also leverages Rack::Test, because Regdel is a Sinatra application, and like most Ruby frameworks, Sinatra is a Rack-compatible framework. To "test the tests", I'm using Rake to run the tests, and using Rcov, a code coverage tool, to measure how much of the application is getting tested.

Cucumber takes the idiom further, by defining full-features instead of simple functions. I haven't quite gotten there yet with Regdel, but another bookkeeping project, [Bookkeeper](http://github.com/snl/bookkeeper), uses Cucumber so that may be a good way to learn more about it.

With regards to the software development life cycle in general, I expect that BDD will have a dramatic effect on the quality and robustness of software that it produces, while maintaining the rapid speed that agile development practices support.

In my previous experiences as an agile "dogfooding" developer, I would test software by using it, modifying functionality and implementing new features along the way. That works fine most of the time, but there is a substantial downfall: the lack of comprehensive regression testing, i.e. checking to make sure changes to one part of a program do not break other parts of it. I haven't yet witnessed it myself, but I expect that the combination of BDD and comprehensive code coverage testing to greatly alleviate, if not eliminate that downfall. :-)

