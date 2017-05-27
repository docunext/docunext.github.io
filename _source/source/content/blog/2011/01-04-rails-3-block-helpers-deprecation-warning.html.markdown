---
title: Rails 3 Block Helpers Deprecation Warning
date: 2011-01-04
tags: rails3
---
When I run <tt>rake test</tt> for a Rails 3 application I am developing, I receive a deprecation warning about block helpers:

<pre class="sh_sh">
.DEPRECATION WARNING: &lt;% %> style block helpers are deprecated. Please use &lt;%= %>.
</pre>

Hmmm. When I try to do so, Vim gives me an error, because I have it setup to parse eruby files. If I save the file anyway and run <tt>rake test</tt> again, the tests run fine, and no deprecation warning about block helpers is issued.

I also confirmed the code works OK when running <tt>rails server -p 3001</tt>, the latter part of that command instructing the web server to run on port 3001.

The final result is:

<pre class="sh_ruby">
&lt;%= form_for([:child_support, payment]) do |f| -%>
  &lt;input type="text" name="payment[payment_date]"/>
  &lt;input type="text" name="payment[amount]"/>
  &lt;p>
    &lt;%= f.submit %>
  &lt;/p>
&lt;% end -%>
</pre>

