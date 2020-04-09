---
title: Sinatra Metadef
date: 2010-03-23
tags: configuration,methods,sinatra
---
The Sinatra configuration capacity has always mystified me, but I think I've found the code I need to review to understand how its done.

First, look at the set method:

<pre class="sh_ruby">
     # Sets an option to the given value.  If the value is a proc,
      # the proc will be called every time the option is accessed.
      def set(option, value=self, &block)
        raise ArgumentError if block && value != self
        value = block if block
        if value.kind_of?(Proc)
          metadef(option, &value)
          metadef("#{option}?") { !!__send__(option) }
          metadef("#{option}=") { |val| metadef(option, &Proc.new{val}) }
        elsif value == self && option.respond_to?(:to_hash)
          option.to_hash.each { |k,v| set(k, v) }
        elsif respond_to?("#{option}=")
          __send__ "#{option}=", value
        else
          set option, Proc.new{value}
        end
        self
      end
</pre>

Talk about rock and roll, OK? But wait, there's more. The metadef:
<pre class="sh_ruby">
      def metadef(message, &block)
        (class << self; self; end).
          send :define_method, message, &block
      end
</pre>

Do you think metadef sounds better than metameth?

