---
title: Getting to know Merb
date: 2009-08-01
tags: merb,ruby
---
I'm reviewing the code base for merb and have noticed the following:

* Hyphens and underscores are intermixed as word separators
* Modules seem to be structured like Perl (a note about Ruby, actually)
* Are assets only javascript and css files? In movabletype they are media content files, like images, audio, and the like
* I like that the docs include a README file in many places, written in Markdown format - nice!
* Slices appear to be what I call extensions in <a href="http://www.nexista.org/">Nexista</a>, sort of like mini-apps
* I've heard good things about datamapper, but I'm still a little uneasy about ORM, I just really like SQL!
* I'm interested in merb-core, merb-exceptions, merb-gen, merb-slices, and merb_datamapper

So, off to a slow start in comprehending the library code, so now I'm going to try installing merb and building a quick app.

To install merb on debian, I'm doing the following:

<pre class="sh_sh">
apt-get install libsqlite3-dev
apt-get install libextlib-ruby1.8
</pre>

OK, now this:

<pre class="sh_sh">dev-48-gl:/var/www/dev# gem install merb
 Building native extensions.  This could take a while...
Successfully installed do_sqlite3-0.9.12
Successfully installed dm-timestamps-0.9.11
Successfully installed dm-types-0.9.11
Successfully installed dm-aggregates-0.9.11
Successfully installed dm-validations-0.9.11
Successfully installed randexp-0.1.4
Successfully installed dm-sweatshop-0.9.11
Successfully installed dm-serializer-0.9.11
Successfully installed merb-1.0.12
9 gems installed
Installing ri documentation for do_sqlite3-0.9.12...
Installing ri documentation for dm-timestamps-0.9.11...
Installing ri documentation for dm-types-0.9.11...
Installing ri documentation for dm-aggregates-0.9.11...
Installing ri documentation for dm-validations-0.9.11...
Installing ri documentation for randexp-0.1.4...
Installing ri documentation for dm-sweatshop-0.9.11...
Installing ri documentation for dm-serializer-0.9.11...
Installing ri documentation for merb-1.0.12...
Installing RDoc documentation for do_sqlite3-0.9.12...
Installing RDoc documentation for dm-timestamps-0.9.11...
Installing RDoc documentation for dm-types-0.9.11...
Installing RDoc documentation for dm-aggregates-0.9.11...
Installing RDoc documentation for dm-validations-0.9.11...
Installing RDoc documentation for randexp-0.1.4...
Installing RDoc documentation for dm-sweatshop-0.9.11...
Could not find main page README.txt
Could not find main page README.txt
Could not find main page README.txt
Could not find main page README.txt
Installing RDoc documentation for dm-serializer-0.9.11...
Could not find main page README.txt
Could not find main page README.txt
Could not find main page README.txt
Could not find main page README.txt
Installing RDoc documentation for merb-1.0.12...
</pre>

What do I do now? I tried calling "merb" but that didn't work. Hmmmm.... ah! Have to use the full path /var/lib/gems/1.8/gems/merb-core-1.0.12/bin/merb (or add it to PATH).

I'm looking for merb-gen though, here it is:

<pre class="sh_sh">$ /var/lib/gems/1.8/gems/merb-gen-1.0.12/bin/merb-gen app testmerb
Generating with app generator:
     [ADDED]  Rakefile
     [ADDED]  app/controllers/application.rb
     [ADDED]  app/controllers/exceptions.rb
     [ADDED]  app/helpers/global_helpers.rb
     [ADDED]  app/models/user.rb
     [ADDED]  app/views/exceptions/not_acceptable.html.erb
     [ADDED]  app/views/exceptions/not_found.html.erb
     [ADDED]  autotest/merb.rb
     [ADDED]  autotest/merb_rspec.rb
     [ADDED]  autotest/discover.rb
     [ADDED]  config/router.rb
     [ADDED]  config/database.yml
     [ADDED]  config/dependencies.rb
     [ADDED]  config/environments/rake.rb
     [ADDED]  config/environments/development.rb
     [ADDED]  config/environments/staging.rb
     [ADDED]  config/environments/production.rb
     [ADDED]  config/environments/test.rb
     [ADDED]  config/init.rb
     [ADDED]  config/rack.rb
     [ADDED]  public/javascripts/application.js
     [ADDED]  public/stylesheets/master.css
     [ADDED]  merb/session/session.rb
     [ADDED]  merb/merb-auth/strategies.rb
     [ADDED]  merb/merb-auth/setup.rb
     [ADDED]  tasks/merb.thor
     [ADDED]  spec
     [ADDED]  gems
     [ADDED]  .gitignore
     [ADDED]  public/.htaccess
     [ADDED]  tasks/doc.thor
     [ADDED]  public/javascripts/jquery.js
     [ADDED]  doc/rdoc/generators/merb_generator.rb
     [ADDED]  doc/rdoc/generators/template/merb/index.html.erb
     [ADDED]  doc/rdoc/generators/template/merb/merb.rb
     [ADDED]  doc/rdoc/generators/template/merb/merb.css
     [ADDED]  doc/rdoc/generators/template/merb/merb_doc_styles.css
     [ADDED]  doc/rdoc/generators/template/merb/prototype.js
     [ADDED]  doc/rdoc/generators/template/merb/api_grease.js
     [ADDED]  public/robots.txt
     [ADDED]  public/favicon.ico
     [ADDED]  public/images/merb.jpg
     [ADDED]  public/merb.fcgi
     [ADDED]  app/views/layout/application.html.erb
</pre>

Wow, this is a serious error log!

<pre>Loading init file from /var/www/dev/testmerb/testmerb/config/init.rb
Loading /var/www/dev/testmerb/testmerb/config/environments/development.rb
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:40,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/stdlib.h:33:20: error: stddef.h: No such file or directory
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:40,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/stdlib.h:140: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__ctype_get_mb_cur_max'
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:40,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/stdlib.h: In function 'atof':
/usr/include/stdlib.h:281: error: 'NULL' undeclared (first use in this function)
/usr/include/stdlib.h:281: error: (Each undeclared identifier is reported only once
/usr/include/stdlib.h:281: error: for each function it appears in.)
/usr/include/stdlib.h: In function 'atoi':
/usr/include/stdlib.h:286: error: 'NULL' undeclared (first use in this function)
/usr/include/stdlib.h: In function 'atol':
/usr/include/stdlib.h:291: error: 'NULL' undeclared (first use in this function)
/usr/include/stdlib.h: In function 'atoll':
/usr/include/stdlib.h:300: error: 'NULL' undeclared (first use in this function)
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:40,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/stdlib.h: At top level:
/usr/include/stdlib.h:337: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:367: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:369: error: nonnull argument with out-of-range operand number (argument 1, operand 4)
/usr/include/stdlib.h:471: error: expected ')' before '__size'
/usr/include/stdlib.h:473: error: expected ')' before '__nmemb'
/usr/include/stdlib.h:485: error: expected declaration specifiers or '...' before 'size_t'
In file included from /usr/include/stdlib.h:497,
                 from /usr/lib/ruby/1.8/i486-linux/ruby.h:40,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/alloca.h:33: error: expected ')' before '__size'
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:40,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/stdlib.h:502: error: expected ')' before '__size'
/usr/include/stdlib.h:507: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:507: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:684: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:684: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:685: error: nonnull argument with out-of-range operand number (argument 1, operand 5)
/usr/include/stdlib.h:689: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:689: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:690: error: nonnull argument with out-of-range operand number (argument 1, operand 4)
/usr/include/stdlib.h:692: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:692: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:694: error: nonnull argument with out-of-range operand number (argument 1, operand 4)
/usr/include/stdlib.h:767: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:770: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:774: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:778: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:787: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdlib.h:790: error: expected ')' before '*' token
/usr/include/stdlib.h:794: error: expected declaration specifiers or '...' before 'wchar_t'
/usr/include/stdlib.h:798: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'mbstowcs'
/usr/include/stdlib.h:801: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'wcstombs'
/usr/include/stdlib.h:864: error: expected declaration specifiers or '...' before 'size_t'
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:44,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/string.h:39: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:43: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:52: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:59: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:62: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:66: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:77: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:88: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:96: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:102: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:109: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'strxfrm'
/usr/include/string.h:124: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'strxfrm_l'
/usr/include/string.h:138: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:184: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'strcspn'
/usr/include/string.h:188: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'strspn'
/usr/include/string.h:225: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:226: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:227: error: nonnull argument with out-of-range operand number (argument 1, operand 3)
/usr/include/string.h:232: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:235: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:242: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'strlen'
/usr/include/string.h:249: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'strnlen'
/usr/include/string.h:281: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:294: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:298: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:302: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:305: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:335: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:347: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:348: error: nonnull argument with out-of-range operand number (argument 1, operand 4)
/usr/include/string.h:376: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:379: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/string.h:386: error: expected declaration specifiers or '...' before 'size_t'
In file included from /usr/include/string.h:423,
                 from /usr/lib/ruby/1.8/i486-linux/ruby.h:44,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/bits/string2.h:969: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strcspn_c1'
/usr/include/bits/string2.h:971: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strcspn_c1'
/usr/include/bits/string2.h:979: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strcspn_c2'
/usr/include/bits/string2.h:982: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strcspn_c2'
/usr/include/bits/string2.h:991: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strcspn_c3'
/usr/include/bits/string2.h:994: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strcspn_c3'
/usr/include/bits/string2.h:1045: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strspn_c1'
/usr/include/bits/string2.h:1047: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strspn_c1'
/usr/include/bits/string2.h:1056: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strspn_c2'
/usr/include/bits/string2.h:1059: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strspn_c2'
/usr/include/bits/string2.h:1068: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strspn_c3'
/usr/include/bits/string2.h:1071: error: expected '=', ',', ';', 'asm' or '__attribute__' before '__strspn_c3'
/usr/include/bits/string2.h: In function '__strpbrk_c2':
/usr/include/bits/string2.h:1129: error: 'NULL' undeclared (first use in this function)
/usr/include/bits/string2.h:1129: error: 'size_t' undeclared (first use in this function)
/usr/include/bits/string2.h:1129: error: expected ';' before '__s'
/usr/include/bits/string2.h: In function '__strpbrk_c3':
/usr/include/bits/string2.h:1142: error: 'NULL' undeclared (first use in this function)
/usr/include/bits/string2.h:1142: error: 'size_t' undeclared (first use in this function)
/usr/include/bits/string2.h:1142: error: expected ';' before '__s'
/usr/include/bits/string2.h: In function '__strtok_r_1c':
/usr/include/bits/string2.h:1177: error: 'NULL' undeclared (first use in this function)
/usr/include/bits/string2.h: In function '__strsep_1c':
/usr/include/bits/string2.h:1227: error: 'NULL' undeclared (first use in this function)
/usr/include/bits/string2.h: In function '__strsep_2c':
/usr/include/bits/string2.h:1237: error: 'NULL' undeclared (first use in this function)
/usr/include/bits/string2.h: In function '__strsep_3c':
/usr/include/bits/string2.h:1265: error: 'NULL' undeclared (first use in this function)
/usr/include/bits/string2.h: At top level:
/usr/include/bits/string2.h:1322: error: expected declaration specifiers or '...' before 'size_t'
In file included from /usr/include/stdio.h:75,
                 from /usr/lib/ruby/1.8/i486-linux/ruby.h:54,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/libio.h:53:21: error: stdarg.h: No such file or directory
In file included from /usr/include/stdio.h:75,
                 from /usr/lib/ruby/1.8/i486-linux/ruby.h:54,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/libio.h:332: error: expected specifier-qualifier-list before 'size_t'
/usr/include/libio.h:364: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/libio.h:373: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/libio.h:489: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/libio.h:491: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/libio.h:493: error: expected '=', ',', ';', 'asm' or '__attribute__' before '_IO_sgetn'
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:54,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/stdio.h:80: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'va_list'
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:54,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/stdio.h:294: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdio.h:300: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdio.h:312: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdio.h:319: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdio.h:347: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/stdio.h:352: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/stdio.h:355: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/stdio.h:361: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdio.h:363: error: format string argument not a string type
/usr/include/stdio.h:365: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdio.h:366: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/stdio.h:367: error: format string argument not a string type
/usr/include/stdio.h:375: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/stdio.h:391: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/stdio.h:450: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/stdio.h:457: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/stdio.h:462: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/stdio.h:635: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdio.h:638: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdio.h:648: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/stdio.h:678: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'fread'
/usr/include/stdio.h:684: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'fwrite'
/usr/include/stdio.h:706: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'fread_unlocked'
/usr/include/stdio.h:708: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'fwrite_unlocked'
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:54,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/stdio.h:873: error: expected declaration specifiers or '...' before '__gnuc_va_list'
In file included from /usr/include/stdio.h:903,
                 from /usr/lib/ruby/1.8/i486-linux/ruby.h:54,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/bits/stdio.h:37: error: expected declaration specifiers or '...' before '__gnuc_va_list'
/usr/include/bits/stdio.h: In function 'vprintf':
/usr/include/bits/stdio.h:39: error: '__arg' undeclared (first use in this function)
/usr/include/bits/stdio.h:39: error: too many arguments to function 'vfprintf'
/usr/include/bits/stdio.h: At top level:
/usr/include/bits/stdio.h:116: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/bits/stdio.h: In function 'getline':
/usr/include/bits/stdio.h:118: error: '__n' undeclared (first use in this function)
/usr/include/bits/stdio.h:118: error: too many arguments to function '__getdelim'
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:91,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/limits.h:125:26: error: no include path in which to search for limits.h
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:736,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/lib/ruby/1.8/i486-linux/intern.h: At top level:
/usr/lib/ruby/1.8/i486-linux/intern.h:254: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'ruby_stack_length'
In file included from /usr/include/sched.h:35,
                 from /usr/include/pthread.h:25,
                 from /usr/lib/ruby/1.8/i486-linux/ruby.h:745,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/bits/sched.h:193: error: expected ')' before '__setsize'
/usr/include/bits/sched.h:195: error: expected ')' before '__count'
In file included from /usr/include/pthread.h:25,
                 from /usr/lib/ruby/1.8/i486-linux/ruby.h:745,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/sched.h:110: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/sched.h:114: error: expected declaration specifiers or '...' before 'size_t'
In file included from /usr/include/pthread.h:26,
                 from /usr/lib/ruby/1.8/i486-linux/ruby.h:745,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/time.h:200: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'strftime'
/usr/include/time.h:218: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'strftime_l'
In file included from /usr/lib/ruby/1.8/i486-linux/ruby.h:745,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:1:
/usr/include/pthread.h:297: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/pthread.h:298: error: nonnull argument with out-of-range operand number (argument 1, operand 2)
/usr/include/pthread.h:302: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/pthread.h:361: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/pthread.h:362: error: nonnull argument with out-of-range operand number (argument 1, operand 2)
/usr/include/pthread.h:368: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/pthread.h:375: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/pthread.h:376: error: nonnull argument with out-of-range operand number (argument 1, operand 3)
/usr/include/pthread.h:382: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/pthread.h:389: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/pthread.h:391: error: nonnull argument with out-of-range operand number (argument 1, operand 3)
/usr/include/pthread.h:396: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/pthread.h:398: error: nonnull argument with out-of-range operand number (argument 1, operand 3)
/usr/include/pthread.h:446: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/pthread.h:448: error: nonnull argument with out-of-range operand number (argument 1, operand 3)
/usr/include/pthread.h:451: error: expected declaration specifiers or '...' before 'size_t'
/usr/include/pthread.h:453: error: nonnull argument with out-of-range operand number (argument 1, operand 3)
In file included from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:2:
/usr/lib/ruby/1.8/i486-linux/intern.h:254: error: expected '=', ',', ';', 'asm' or '__attribute__' before 'ruby_stack_length'
In file included from /usr/include/signal.h:350,
                 from /usr/include/sys/ucontext.h:23,
                 from /usr/include/ucontext.h:27,
                 from /usr/lib/ruby/1.8/i486-linux/node.h:379,
                 from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:5:
/usr/include/bits/sigstack.h:54: error: expected specifier-qualifier-list before 'size_t'
In file included from /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:5:
/usr/lib/ruby/1.8/i486-linux/node.h:412: error: expected specifier-qualifier-list before 'size_t'
/var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c: In function 'add_to_parse_tree':
/var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c:681: error: 'CHAR_BIT' undeclared (first use in this function)
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb: In function 'parse_tree_for_meth':
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: 'size_t' undeclared (first use in this function)
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected ';' before '__s1_len'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: '__s1_len' undeclared (first use in this function)
cc1: warnings being treated as errors
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: incompatible implicit declaration of built-in function 'strlen'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: '__s2_len' undeclared (first use in this function)
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:1103: error: expected expression before 'const'
/var/lib/gems/1.8/gems/RubyInline-3.8.2/lib/inline.rb:589:in `build': error executing "cc -shared -Werror  -fPIC -fno-strict-aliasing -g -g -O2  -fPIC   -I /usr/lib/ruby/1.8/i486-linux  -I /usr/include -L/usr/lib -o \"/var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.so\" \"/var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c\"  ": 256 (CompilationError)
Renamed /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c to /var/www/dev/testmerb/testmerb/tmp/.ruby_inline/Inline_RawParseTree_ab80.c.bad
	from /var/lib/gems/1.8/gems/RubyInline-3.8.2/lib/inline.rb:819:in `inline'
	from /var/lib/gems/1.8/gems/ParseTree-3.0.4/lib/parse_tree.rb:250
	from /usr/lib/ruby/1.8/rubygems/custom_require.rb:31:in `gem_original_require'
	from /usr/lib/ruby/1.8/rubygems/custom_require.rb:31:in `require'
	from /var/lib/gems/1.8/gems/merb-action-args-1.0.12/lib/merb-action-args/get_args.rb:2
	from /usr/lib/ruby/1.8/rubygems/custom_require.rb:31:in `gem_original_require'
	from /usr/lib/ruby/1.8/rubygems/custom_require.rb:31:in `require'
	from /var/lib/gems/1.8/gems/merb-action-args-1.0.12/lib/merb-action-args.rb:1
	from /var/lib/gems/1.8/gems/merb-core-1.0.12/lib/merb-core/core_ext/kernel.rb:149:in `require'
	from /var/lib/gems/1.8/gems/merb-core-1.0.12/lib/merb-core/core_ext/kernel.rb:149:in `load_dependency'
	from /var/lib/gems/1.8/gems/merb-core-1.0.12/lib/merb-core/bootloader.rb:405:in `load_dependencies'
	from /var/lib/gems/1.8/gems/merb-core-1.0.12/lib/merb-core/bootloader.rb:405:in `each'
	from /var/lib/gems/1.8/gems/merb-core-1.0.12/lib/merb-core/bootloader.rb:405:in `load_dependencies'
	from /var/lib/gems/1.8/gems/merb-core-1.0.12/lib/merb-core/bootloader.rb:393:in `run'
	from /var/lib/gems/1.8/gems/merb-core-1.0.12/lib/merb-core/bootloader.rb:99:in `run'
	from /var/lib/gems/1.8/gems/merb-core-1.0.12/lib/merb-core/server.rb:172:in `bootup'
	from /var/lib/gems/1.8/gems/merb-core-1.0.12/lib/merb-core/server.rb:42:in `start'
	from /var/lib/gems/1.8/gems/merb-core-1.0.12/lib/merb-core.rb:170:in `start'
	from /var/www/dev/testmerb/testmerb/public/merb.fcgi:20
[Sat Aug 01 18:24:32 2009] [warn] (104)Connection reset by peer: mod_fcgid: read data from fastcgi server error.
[Sat Aug 01 18:24:32 2009] [error] [client 192.168.1.240] Premature end of script headers: merb.fcgi
[Sat Aug 01 18:24:33 2009] [notice] mod_fcgid: process /var/www/dev/testmerb/testmerb/public/merb.fcgi(31868) exit(communication error), terminated by calling exit(), return code: 1
</pre>

Looks like some making / compiling is going on. Do I have rake installed? No, I installed it. Running rake in the testmerb directory reveals this:
<pre>$ rake
(in /var/www/dev/testmerb/testmerb)
Loading init file from /var/www/dev/testmerb/testmerb/config/init.rb
Loading /var/www/dev/testmerb/testmerb/config/environments/development.rb
 ~
 ~ FATAL: The gem data_objects (= 0.9.11, runtime), [] was not found
 ~
</pre>

Oh yeah? Well how about this?
<pre>sudo apt-get install libdataobjects-ruby1.8 libdataobjects-sqlite3-ruby1.8 libdataobjects-mysql-ruby1.8
</pre>

No? How aobut this?
<pre>sudo gem install data_objects</pre></br></br>
Oh, picky, huh? Too bad, I've installed data_objects 0.9.12. Ugh...

