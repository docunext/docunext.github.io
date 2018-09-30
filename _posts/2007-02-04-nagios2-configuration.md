---
title: Nagios2 Configuration
date: 2007-02-04
---
Once you get your basic nagios2 configuration together, the setup is a breeze for a large installation. The use of templates makes it much easier. Ony thing that irks me so far is that for http virtual hosts, you need a host entry and a service entry, as you can't use the address setting in the services.cfg file. Right now I'm checking if a host can be checked without a service entry. Seems logical enough. Ah I see, you can use the same services.cfg entry for multiple hosts in the hosts.cfg file, listing them out separated by commas. Perfect.

I just found the nagios page that talks about this exact setup:

<a href="http://nagios.sourceforge.net/docs/1_0/templatetricks.html">Nagios 2: Time-Saving Tricks For Template-Based Object Definitions</a>

Also called: "How To Preserve Your Sanity"!

The beauty of this is that to create new checks for additional websites I put up, all I have to do is update the hosts file with two pieces of info: the name of the host and the address to use. For example;

<pre>host_name       example.com

address     www.example.com</pre>

Wow, even cooler is the fact that you can use regexp with the wildcard option!

So here's how I have my virtual host www's setup for checking in nagios2. This way, the dns and the webserver will be checked to some extent.

<strong>hosts.cfg</strong>

<pre>define host{        use                     virtual-host        host_name               example.com        address                 www.example.com}</pre>

<strong>hostgroups.cfg</strong>

<pre>define hostgroup{        hostgroup_name  vhost-production-machines        alias           vhost        members         .*com}</pre>

For my purposes, all I need for semi-automated nagios configuration files is a simple template I can make in PHP. If you are considering one of the many web based nagios management tools, I note that for me, it was easier to get the configuration files in place first, then write up a small script to serve my needs.

Sidenote: <strong>Similarities between configuration of fail2ban and nagios2</strong>

I like what I'm seeing here. There are some definitely similaries between the structure of the configuration files for fail2ban and nagios2. Cool!

