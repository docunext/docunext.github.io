---
title: No input file specified.
date: 2010-10-06
tags: apache
---
I ran into this wacky error at work today when I tried running php files on an Apache webserver.

All that showed up was:

"No input file specified."

The response code was a 404, so I thought it was Apache throwing the error. Nope! It was PHP, because the Apache PHP module was loading a php.ini in the document root which specified an alternate base_open_dir path.

Once I changed the path to the folder the php files were in, it worked! Yay!

