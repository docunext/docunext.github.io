---
title: Working with Joomla Components Modules and Plugins
date: 2010-12-09
tags: drupal,joomla,pear,php
---
Over the past couple of months, I've been working with Joomla. Its been an interesting experience, because I've run the gamut of many extensions to the core:

* **Components** for building extensions in an MVC style framework
* **Modules** for creating dynamic template extensions
* **Plugins** for extending Joomla classes

More specifically, I primarily worked on two Joomla installations, one where I ran the gamut interfacing with Joomla's core, and the other where I built a payment gateway plugin for a third-party Joomla component: **Event Registration Pro**.

## Interfacing with Joomla's core

The Joomla component I built powers a search engine backed by MySQL. I enjoyed building it, and am planning to work on it some more to refactor the code and leverage more built-in Joomla helper functions.

For instance, I'd like to make sure all the SQL queries use the Joomla query string cleaning and escaping functions, like so:

<pre class="sh_php">
$mycleanvar = $db->getEscaped($myvar, true);
</pre>

The module I wrote acts as the front-end interface to the search engine, and its dynamic as it pulls information from the database and request parameters to make on-the-fly adjustments. I also enjoyed writing that module.

The plugin I wrote hooks into the Joomla registration and authentication processes so that certain hooks are triggered depending upon on information submitted along with user registration, like bookmarking search results and registering for a newsletter.

## Payment Gateway Plugins for Event Registration Pro

This was an interesting task because the Event Registration Pro payment plugin API is apparently not documented. Still, I was able to build one, and thanks to the Payment_Process PEAR library, it can connect to several different payment gateways, including Authorize.net and LinkPoint (aka YourPay, aka FirstData).

## What's next?

I'm interested in digging into Drupal. I've heard many testaments that it rocks.

