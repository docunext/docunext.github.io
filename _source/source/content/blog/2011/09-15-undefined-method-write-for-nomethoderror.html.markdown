---
title: undefined method write for Syck Emitter 0x97c0d90 NoMethodError 
date: 2011-09-15
tags: bundler,ruby
---
<pre class="terminal">
Using activesupport (3.1.0) from git://github.com/rails/rails.git (at 3-1-stable) /usr/lib/ruby/1.9.1/psych/visitors/emitter.rb:17:in `end_document': undefined method `write' for #<Syck::Emitter:0x97c0d90> (NoMethodError)
        from /usr/lib/ruby/1.9.1/psych/visitors/emitter.rb:17:in `visit_Psych_Nodes_Document'
        from /usr/lib/ruby/1.9.1/psych/visitors/visitor.rb:10:in `accept'
        from /usr/lib/ruby/1.9.1/psych/visitors/emitter.rb:10:in `block in visit_Psych_Nodes_Stream'
        from /usr/lib/ruby/1.9.1/psych/visitors/emitter.rb:10:in `each'
        from /usr/lib/ruby/1.9.1/psych/visitors/emitter.rb:10:in `visit_Psych_Nodes_Stream'
        from /usr/lib/ruby/1.9.1/psych/visitors/visitor.rb:11:in `accept'
        from /usr/lib/ruby/1.9.1/psych/nodes/node.rb:36:in `to_yaml'
        from /usr/lib/ruby/1.9.1/psych.rb:166:in `dump'
        from /usr/lib/ruby/1.9.1/psych/core_ext.rb:13:in `psych_to_yaml'
        from /usr/lib/ruby/1.9.1/rubygems/specification.rb:687:in `node_export'
        from /usr/lib/ruby/1.9.1/rubygems/specification.rb:687:in `add'
        from /usr/lib/ruby/1.9.1/rubygems/specification.rb:687:in `encode_with'
        from /usr/lib/ruby/1.9.1/rubygems/specification.rb:708:in `block (2 levels) in to_yaml'
        from /usr/lib/ruby/1.9.1/rubygems/specification.rb:707:in `map'
        from /usr/lib/ruby/1.9.1/rubygems/specification.rb:707:in `block in to_yaml'
</pre>

A workaround is to use:

<pre class="terminal">
RUBYOPT='-rpsych' bundle install
</pre>

