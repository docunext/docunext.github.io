---
title: Wordpress Cache Plugin
date: 2006-12-22
tags: none
author: Albert Lash
---
This Wordpress cache plugin uses Pear's Cache_Lite:

<blockquote>Plugin Name: Docunext Cache

Plugin URI:

Description: Caching thanks to Pear's Cache Lite. This plugin will capture all output from

wordpress, compress it using deflate, then cache it to /tmp/. When accessing the cached files,

it will check to see if the client can accept deflated content. Accordingly, it will only cache if the requesting

client supports deflate. If not, it will decompress the content.

It will clear out the entire cache if anything is posted to the site. It attempts to support multiple domains.

Supports client and server caching!

Version: 0.1

Author: Albert Lash

Author URI: http://www.docunext.com

To do:

1. Make sure varied placement of footer call doesn't break anything. Search for closing tags in output?
2. Ability to store cache in various places - try to find a writeable folder.
3. Ability to store to different backends - file, xcache, where else?
4. Test with other plugins.
5. How to manage lifetime? Is it necessary?
6. Turn off caching for people who are logged in.

Find potential directory targets:

find -maxdepth 3 -name proc -prune -o -noleaf -user www-data -type d

if there is no directory, just use memory?</blockquote>

