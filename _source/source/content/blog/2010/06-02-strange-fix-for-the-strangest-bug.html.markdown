---
title: Strange Fix for the Strangest Bug
date: 2010-06-02
tags: bugs,ruby,ruby 1.9
---
I have no idea why this bug fix works, but it does. When I run tidy_ffi via a Unicorn, a Sinatra app, and Rack-XSLView manually, it works fine. If I run it via daemontools, it returns an empty string because for some reason LibTidy.tidyReleaseDate isn't return a date!

<pre class="sh_diff">
@@ -76,12 +76,7 @@ class TidyFFI::Interface
   def tidy_buf_object
     @tidy_buf_object ||= begin
-      release_date = Date.parse(LibTidy.tidyReleaseDate) rescue nil
-      if release_date && (release_date > Date.parse("Dec 29 2006"))
-        TidyFFI::LibTidy::TidyBufWithAllocator
-      else
-        TidyFFI::LibTidy::TidyBuf
-      end
+      TidyFFI::LibTidy::TidyBufWithAllocator
     end
   end
</pre>

UPDATE: This wasn't the end of it. I submitted the fix to libc (Eugene), and he said the check was needed for Mac OS X which ships with an older version of libTidy. I dug deeper, and found that the date was getting returned, but it just wasn't getting processed correctly. After that, I did some external troubleshooting, and found that in irb1.9.1 I had to require 'date' to parse the date libTidy was returning. I switched out require 'rubygems' with require 'date', and the bug went away. Yay!

