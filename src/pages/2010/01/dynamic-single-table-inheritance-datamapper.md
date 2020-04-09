---
title: Dynamic Single Table Inheritance Datamapper
date: 2010-01-14
tags: datamapper,ruby
---
I'm tinkering with a new datamodel for Regdel which relies heavily upon datamapper's single-table inheritance capabilities.

However, I'm not sure how much work would be required to manage the datamapper classes. Its a concern, and I've considered an alternative of dynamically generating the classes.

It is fairly common to find Ruby code that generates more code, and then runs it: **"eval"**.

<div>
What's extra nice about Ruby's ability to do such a thing is that has a class_eval function.
</div>

That makes it possible to do cool stuff like this:

<pre class="sh_ruby">
# This will only work for trees with two generations
inh = ""
{"Bank" => "Asset", "Trust" => "Bank", "Operating" => "Bank"}.each_pair { |k,v|
    acc = Extlib::Inflection.pluralize(k).downcase
    Xact.class_eval("has n, :"+acc)
    eval "defined?(#{v})"
    unless eval("defined?(#{v})") == 'constant'
      inh = inh + "class #{k} < #{v}; end\n"
    else
      eval("class #{k} < #{v}; end\n")
    end
}
eval(inh)
</pre>

