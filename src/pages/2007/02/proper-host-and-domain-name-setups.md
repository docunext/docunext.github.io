---
title: Proper host and domain name setups
date: 2007-02-22
tags: none
author: Albert Lash
---
There are a few files and commands:
<h3>/etc/hosts</h3>

<pre>nano /etc/hosts</pre>

Should at least have this:

<pre>127.0.0.1       localhost</pre>

If the machine is on a local area network, this too:

<pre>192.168.0.4    hostname.example.com    hostname</pre>

The above entry states that your private network accessible ip address is 192.168.0.4, your short hostname is "hostname" and your domain name is example.com. Your "full" hostname is "hostname.example.com" and your domainname is "example.com".

You can manually set your machine to use this with the following command:

<pre>hostname hostname.example.com</pre>

This should make the file /etc/hostname contain "hostname.example.com".
<h3>/etc/resolv.conf</h3>

There are a few options, but we'll cover search and nameserver. Search is for your domain name, in this case "example.com", so if you have another host named "hostname2" and you ping "hostname2", the first thing the name resolver will do is search the "example.com" domain. Nice.

The nameserver item is for public (or network specific) domain name servers. You want to use a provider you trust, like your ISP. Here's a quick example:

<pre>search    example.com

nameserver 4.2.2.1</pre>(4.2.2.1 is a dns server run by Verizon. It's slow but easy to remember!)

Almost done! Just check with the following commands:

Command:

<pre>hostname -s</pre>

Result:

<pre>hostname</pre>

Command:

<pre>hostname -d</pre>

Result:

<pre>example.com</pre>

Command:

<pre>hostname</pre>

Result:

<pre>hostname.example.com</pre>

