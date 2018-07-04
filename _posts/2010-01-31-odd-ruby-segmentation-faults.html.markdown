---
title: Odd Ruby Segmentation Faults
date: 2010-01-31
tags: bugs,ruby,sinatra
---
I'm getting these bizarre segmentation faults while running spec tests on a sub-classed Sinatra app, docunext-forked-nesta.

<pre class="sh_ruby">
albertlash@dev-48-gl:/var/www/dev/docunext-forked-nesta$ spec spec/app3_spec.rb
....../usr/lib/ruby/1.8/fileutils.rb:1135: [BUG] Segmentation fault
ruby 1.8.7 (2010-01-10 patchlevel 249) [i486-linux]
Aborted
albertlash@dev-48-gl:/var/www/dev/docunext-forked-nesta$ spec spec/app3_spec.rb
....../usr/lib/ruby/1.8/hpricot/elements.rb:285: [BUG] Segmentation fault
ruby 1.8.7 (2010-01-10 patchlevel 249) [i486-linux]
Aborted
albertlash@dev-48-gl:/var/www/dev/docunext-forked-nesta$ spec spec/app3_spec.rb
....../usr/lib/ruby/1.8/hpricot/traverse.rb:328: [BUG] Segmentation fault
ruby 1.8.7 (2010-01-10 patchlevel 249) [i486-linux]
Aborted
albertlash@dev-48-gl:/var/www/dev/docunext-forked-nesta$ spec spec/app3_spec.rb
.............
Finished in 1.442889 seconds
13 examples, 0 failures
</pre>

