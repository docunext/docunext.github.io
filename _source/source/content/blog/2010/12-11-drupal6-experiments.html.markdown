---
title: Drupal6 Experiments and Implementation on Debian 
date: 2010-12-11
tags: drupal,drush,php
---
I'm working with drupal6. Its impressive.

<pre class="sh_sh">
sudo apt-get install drupal6-thm-arthemia drush
</pre>

<pre class="sh_sh">
sudo su
cd /usr/share/drupal6
wget http://ftp.drupal.org/files/projects/views-6.x-2.11.tar.gz
tar -xzvf views-6.x-2.11.tar.gz
</pre>

But....

<blockquote class="svxlb"><pre>
Cron has not run. Please visit the status report for more information.
</pre></blockquote>

Interesting... I run Apache on port 88 behind an NGINX proxy, so I've updated <tt>/usr/share/drupal6/scripts/cron.sh</tt> to use localhost:88. Hopefully that will fix the issue.

Whenever I start using a new software package, I like to have a project with which to use it on. The project I'm using for Drupal6? Docunext!

No, not replacing Movable Type, just setting up Drupal6 to publish even more information here.

More notes about setting up Drupal6:

* I dropped the default db, opting to setup a db prefix for all tables, selectively sharing the prefix for users, sessions, role, authmap, and sequences. I've done something similar with Mediawiki.
* I created /etc/drupal/6/sites/www.docunext.com for the above settings in settings.php
* I created /etc/drupal/6/sites/all/modules for shared modules

The sites/all/modules idea was documented in /usr/share/drupal6/modules/README.txt:

<blockquote class="svxlb"><pre>
This directory is reserved for core module files. Custom or contributed
modules should be placed in their own subdirectory of the sites/all/modules
directory. For multisite installations, they can also be placed in a subdirectory
under /sites/{sitename}/modules/, where {sitename} is the name of your site
(e.g., www.example.com). This will allow you to more easily update Drupal core files.

For more details, see: http://drupal.org/node/176043
</pre></blockquote>

Still, I would prefer that folder not be in /etc. Actually, yeah, I don't want modules there. Instead, I removed the /usr/share/drupal6/sites symlink, created a folder in its place, then linked /etc/drupal/6/sites/www.docunext.com inside of it. I then moved the "all" folder from /etc/drupal/6/sites/all inside of it as well. The "views" module I'm trying is around 5mb alone, so I just don't want that clogging up my etckeeper repository!

As for modules, I'm trying out the following:

* Views
* Markdown / Tipogrify

To get Markdown / Tipogrify to work, I decompressed the files into /usr/share/drupal6/sites/all/modules (yay - consistently organized files!!), then navigated to Admin -> Site Building -> Modules and enabled the modules, then went to Admin -> Site configuration -> Input Formats, add input format. A little convoluted, but this system is very modular and extensible - I consider it a small price to pay.

