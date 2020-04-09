---
title: Drupal IS Its Modules and Drupal Packaging on Debian 
date: 2010-12-18
tags: debian,drupal,joomla,modules,packaging
---
Ah, the term modular. It has many different meanings in many different contexts, but in general it suggests flexibility, interoperability, and a certain amount of *buildability*.

**Drupal** uses the term "module" to refer to additional "packages" of code which can enhance, extend, or customize its functionality. It uses the term very well!

A co-worker of mine described Drupal along these lines: "Drupal is its modules". That simple phrase says a lot.

The modularity of Drupal proves its value and worth to me by the fact that so many modules are able to run concurrently with one another. I currently have about seven or eight modules running on an installation I am setting up and I have not perceived ANY incompatibilities.

Another co-worker of mine described Joomla! along these lines: "Joomla works fine with one large component, functionally with two large components, but starts to break down with three or more large components."

While that's somewhat besides the point for this article, I recently wrote an [article comparing Joomla, Drupal and Wordpress](http://www.docunext.com/2010/09/joomla-versus-drupal-and-wordpress.html), referencing Debian's policy towards the three content management systems. In the article I stated how much I value the opinion of the Debian community, and I have to echo that sentiment in this post. (Also, don't mistake this as a diss to Joomla, I've worked a bunch with it and found the experience quite satisfactory.)

More specifically, I reference the **dh-make-drupal** package that is available in the Debian Squeeze repository. What is the dh-make-drupal package? Let's find out:

<pre class="sh_sh">

lash@pro-2-gl:/var/www/var/lib/drupal6/modules$ apt-cache show dh-make-drupal
Package: dh-make-drupal
Priority: extra
Section: web
Installed-Size: 96
Maintainer: Gunnar Wolf <gwolf@debian.org>
Architecture: all
Version: 0.6-2
Depends: ruby, libruby, libcommandline-ruby, libhpricot-ruby, debhelper (>= 5), build-essential
Suggests: drupal6 | drupal5
Filename: pool/main/d/dh-make-drupal/dh-make-drupal_0.6-2_all.deb
Size: 19108
MD5sum: 92539d5b7da069cac913485dc81812c9
SHA1: 7778cd034013dd419da9aa1ee0d02d8facda820d
SHA256: 877c8bc8c2f8ad6a1aa4793dfd0b37c8c76cba2ac97909ed39601707437ceaf3
Description: Create Debian packages from Drupal modules and themes
 The purpose of this program is to generate Debian packages for any Drupal
 projects (that is, modules or themes).
 .
 Given that Drupal developers publish their work through the main Drupal
 site (http://drupal.org), this program fetches the information for the
 latest available versions (for the right Drupal release, and with the
 specified stability level), and prepares a Debian package from it.
Homepage: http://www.github.com/gwolf/dh-make-drupal
</pre>

That is very awesome, because right now there aren't that many drupal modules available:

<pre class="sh_sh">
drupal6-mod-i18n - i18n module for Drupal 6
drupal6-mod-inline - inline module for Drupal 6
drupal6-mod-ldap-integration - ldap_integration module for Drupal 6
drupal6-mod-masquerade - masquerade module for Drupal 6
drupal6-thm-arthemia - arthemia theme for Drupal 6
drupal6-trans-ru - Russian translation for Drupal 6
</pre>

And compared to using apt-get, manually installing drupal modules is an inefficient process.

Given that drupal7 is going to include some of the more widely popular modules like CCK and views, it would be really terrific if a core set of drupal modules got packaged together, like "movabletype-plugin-core - Core Movable Type plugins".

Even more modules I'm using:

* Chaos Tools
* Data
* Schema
* Advanced Help

