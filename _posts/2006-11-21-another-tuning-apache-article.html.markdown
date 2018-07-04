---
title: Another Tuning Apache Article
date: 2006-11-21
tags: apache,configuration
---
I just spent most of the day working with Apache, tuning it to run better. My main effort was to eliminate the use of .htaccess files. It doesn't make sense for that server to use them, as they configuration is straightforward, unchanging, and the server is not shared. I still have one .htaccess file in the setup, but it won't be there long.

<ul>
<li>Other items I was working on included:</li>
<li>Setting up php as an Apache module</li>
<li>Removing unused Apache modules</li>
<li>Turning off Mmap</li>
<li>Simplifying the overall config files</li>
</ul>

