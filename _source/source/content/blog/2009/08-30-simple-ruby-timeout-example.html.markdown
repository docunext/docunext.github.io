---
title: Simple Ruby Timeout Example
date: 2009-08-30
tags: ruby
---
 <pre class="sh_ruby">
require 'timeout'
begin
    timeout(5) do
        system("sleep 100")
    end
rescue Timeout::Error
    puts "done"
end
</pre>

This is turning out to be a very handy library for me. There's a more extensive example in the wiki:

[Ruby FastCGI Timeout](http://www.docunext.com/wiki/Ruby_FastCGI_Timeout)

