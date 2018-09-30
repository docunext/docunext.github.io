---
title: Rails Generate Model Syntax
date: 2010-10-31
tags: activerecord,rails
---
For future reference, this is the way I create models with rails generators:

<pre class="sh_sh">
ruby script/generate model cspayment payment_date:date amount:integer memo:string check_number:integer cashed_data:date
</pre>

Check out these [Simple Rails 3 Generator Examples](http://www.docunext.com/rails/simple-rails-3-generator-examples.html) too.

