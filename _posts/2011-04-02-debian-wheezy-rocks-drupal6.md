---
title: Debian Wheezy Rocks Drupal6 
date: 2011-04-02
tags: debian,drupal,drush,wheezy
---
Drupal6 has been available within Debian for quite some time, and has even had a couple modules available as debian packages, such as **drush**. Its no surprise to me - Debian and Drupal are both open source projects with guidance and support from *Software in the Public Interest*, a non-profit group dedicated to lots of awesome stuff!

In researching Drupal6 on Debian, I noticed that there was even a helper debian package to create debian packages from drupal6 modules! So I wondered... "Why are there so few drupal modules in the debian repository?"

The current testing version of debian, Wheezy, changes all that. Let's take a look:

<pre class="sh_desktop">
root@pro-77-gl:/# apt-cache search drupal6
drupal6-mod-addtoany - addtoany module for Drupal 6
drupal6-mod-cck - cck module for Drupal 6
drupal6-mod-commentrss - commentrss modules for Drupal 6
drupal6-mod-contemplate - contemplate module for Drupal 6
drupal6-mod-filefield - filefield module for Drupal 6
drupal6-mod-i18n - i18n module for Drupal 6
drupal6-mod-imageapi - imageapi module for Drupal 6
drupal6-mod-imagecache-actions - imagecache_actions module for Drupal 6
drupal6-mod-imagecache - imagecache module for Drupal 6
drupal6-mod-imagefield-assist - imagefield_assist module for Drupal 6
drupal6-mod-imagefield - imagefield module for Drupal 6
drupal6-mod-inline - inline module for Drupal 6
drupal6-mod-ldap-integration - ldap_integration module for Drupal 6
drupal6-mod-lightbox2 - lightbox2 module for Drupal 6
drupal6-mod-masquerade - masquerade module for Drupal 6
drupal6-mod-openid-provider - openid_provider modules for Drupal 6
drupal6-mod-pingback - pingback modules for Drupal 6
drupal6-mod-site-verify - site_verify module for Drupal 6
drupal6-mod-tagadelic - tagadelic module for Drupal 6
drupal6-mod-trackback - trackback module for Drupal 6
drupal6-mod-views-groupby - views_groupby modules for Drupal 6
drupal6-mod-views - views modules for Drupal 6
drupal6-mod-xmlsitemap - xmlsitemap module for Drupal 6
drupal6-mod-xrds-simple - xrds_simple modules for Drupal 6
drupal6-thm-arthemia - arthemia theme for Drupal 6
drupal6-trans-ru - Russian translation for Drupal 6
drupal6 - a fully-featured content management framework
</pre>

Sweet, huh? In particular, Debian has packages for cck and views, arguably the most powerful drupal6 modules (they are even included in the core of drupal7). There is one popular package that seems to be missing though: admin views - it adds a handy drop down menu to the top of the page. I'd also like to see the *"basic"* theme added as a debian package.

Its not too tough to add though, thanks to drush:

<pre class="sh_desktop">
drush -l http://www.drupal.code-experiments.com/ dl admin_menu
drush -l http://www.drupal.code-experiments.com/ en admin_menu
drush -l http://www.drupal.code-experiments.com/ dl basic
drush -l http://www.drupal.code-experiments.com/ en pathauto
The following projects have unmet dependencies:
pathauto requires token
Would you like to download them? (y/n): y
Project token (6.x-1.15) downloaded to /usr/share/drupal6/sites/www.drupal.code-experiments.com/modules/token.                                                 [success]
Project token contains 3 modules: token, tokenSTARTER, token_actions.
The following extensions will be enabled: token, pathauto
Do you really want to continue? (y/n): y
pathauto was enabled successfully.                                                                                                                             [ok]
token was enabled successfully.
</pre>

Seriously, how cool is it that drush handles dependencies like that? Does it remind you of anything? Hint hint... apt-get?

Other modules I'm interested in using include:

* Panels
* Backup & Migrate
* Services
* Views Datasource
* Pathauto

Not to complain, but it does get a little annoying for me when there are *some*, but not *enough* plugins / modules / gems / pears or whatever in the debian repositories. I end up having a mixed system - some from debian, and some from the external package system. Except for rubygems, I haven't run into too significant of a problem, but it is something that I find a little uncomfortable.

Nevertheless, I'm obviously very pleased to see that Debian is paving the way for a multitude of Drupal packages to be utilized on their platform!

There are more details about my setup that I feel are worth mentioning:

* I'm running drupal6 inside of an openVZ container, so that I can move it around more easily, if I need to.
* I'm not running the database from the same container, and to prevent debian from automatically installing mysql-server, I added <tt>APT::Install-Recommends "0";</tt> to /etc/apt/apt.conf.d/70debconf.
* I am using a multi-site install, though I do not plan to have multiple sites share a single database at this time.
* My focus is on using CCK and Views to build really basic applications, in addition to creating and managing content.

