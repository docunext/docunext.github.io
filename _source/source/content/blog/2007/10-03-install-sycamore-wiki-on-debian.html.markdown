---
title: Install Sycamore Wiki on Debian
date: 2007-10-03
tags: none
author: Albert Lash
---
<pre>
apt-get install python-imaging python2.5 python-mysqldb mysql-server-5.0

apt-get install python-xapian memcached subversion</pre>

After that, I followed the instructions here, <a href="http://www.projectsycamore.org/How_to_Install">Installing Sycamore</a>, but I ran into some serious issues. It seems like python programs have problems dealing with file system and web document roots.

To update the settings, I have to run Sycamore/maintenance.py, then restart apache.

OK, I think I got it right this time, there are way too many places I have to set path info.

<pre>
data_dir = os.path.join(__directory__, 'data')

web_root = os.path.join('http://192.168.0.35/wiki-2/', 'web')

web_dir = '/wiki-2'

url_prefix = ''

relative_dir = 'wiki-2'

wiki_base_domain = '192.168.0.35'#use_ssl =</pre>

If you thought I was kidding, the above proves otherwise. Sycamore looks great though, its pretty quick. Via Sycamore, I found <a href="http://www.devjavu.com/">Devjavu, a Trac hosting service</a>. Cool!

There are a lot of cool things about Sycamore, but there are so many rampant issues with paths I'm going to give up on it for now. I'll definitely check back in a few months to find out if the path issues have been resolved.

I just submitted a bug at the sycamore trac:

<blockquote>

The sycamore_config.py file needs improvement. There must be a way to consolidate the following:

data_dir = os.path.join(__directory__, 'data')

web_root = os.path.join(__directory__, 'web')

web_dir = ''

url_prefix = ''

relative_dir = ''

wiki_base_domain = ''

Along those lines, the current svn code (as of last night) has problems with paths. When I installed, the "All Pages" page required a trailing slash in the config file for relative_url, which caused "//" in most of the other links. I also found a page which pointed back to the root, which was no good. Wish I could be more help, I'm a PHP guy, though python looks good. When I do this stuff in PHP, I work very hard to have the php environment figure out as much of the path stuff as possible, even trying some likely guesses, then hone the required installation config to one path setting. It doesn't make sense to hard code all the environment paths though, so where possible allow the user to override paths, if they want to put a component somewhere else. This may be how you've already got it setup and just need to add more comments to the config.

NOTE: The Apache install instructions for FastCGI do work. This looks like a great project, I'm interested to see more. Thanks. </blockquote>

Hopefully they'll take interest in my feedback.

UPDATE: The Sycamore developers did indeed answer my call, they added some more comments to the config file to clarify what would need to be changed and what could most likely be left alone. Good!

