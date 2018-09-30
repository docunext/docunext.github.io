---
title: Rake Quietly Supports Modification Time Checks
date: 2009-12-21
tags: automation
---
I was hesitant to try Rake because it moved away from the XML style of modern make systems like and and phing.

I tried it anyway, and I really like it. I can still see XML being useful for specifying some tasks, but I appreciate how quickly I can write simple tasks for rake to process.

Here's a portion of the Rakefile I'm using for [Regdel](http://www.regdel.com/):

<pre class="sh_ruby">
task :default do
    puts "hi"
end
task :publish_account_form => 'public/s/xhtml/account_form.html'
file 'public/s/xhtml/account_form.html' => ['data/accounting_data_model.xml', 'views/xsl/account_model_to_xhtml_form.xsl'] do
    xslt = ::XML::XSLT.new()
    xslt.xml = 'data/accounting_data_model.xml'
    xslt.xsl = 'views/xsl/account_model_to_xhtml_form.xsl'
    xslt.parameters = { 'account_submit' => '/account/submit' }
    html = xslt.serve
    File.open('public/s/xhtml/account_form.html', 'w') {|f| f.write(html) }
end
</pre>

The first part is about as simple as a task can get, it just puts "hi".

The second and third tasks start to get more complicated and they introduce dependencies, though not obviously. The "file" keyword has build-in modification time checking (I love it!).

The publish_account_form task only depends on the account_form.html file, but doesn't do anything by itself. The account_form.html file task depends on two other files. If called upon as a dependency, the account_form.html task will  check its dependencies and republish if either have changed since its own last modification time. If its dependencies have not changed since it has, the task will quickly complete without actually doing anything, simply because its work has already been done.

That, my friend, is awesome!

