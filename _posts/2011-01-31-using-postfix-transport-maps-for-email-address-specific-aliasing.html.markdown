---
title: Using Postfix Transport Maps for Email Address Specific Aliasing
date: 2011-01-31
tags: configuration,postfix
---
Postfix has terrific e-mail gateway capabilities, and yesterday I discovered a configuration option to select a mail transport based upon email address, rather than domain.

This is very desireable for me as it allows me to use my backup mail transfer servers to alias addresses within the domains they provide backup mx services for. This means if I want to alias an address to another off-network domain and the primary server is down, the backup mx agent can take can of it right there and then.

Now, onto the configuration specifics! Note: I use the **postfix-cdb** package for fast key-value pair hashing, and I also use <tt>relay\_recipient\_maps</tt> to specify the list of acceptable recipients on the gateway to prevent backscatter spam.

#### Postfix Transport Map Configuration for a Gateway Relay to Address Aliases Locally for Relayed Domains

#### **Postfix main.cf: transport\_maps**

The key configuration option is <tt>transport_maps</tt>:

<pre class="sh_sh">
transport_maps = cdb:/etc/postfix/maps/transport
</pre>

#### **/etc/postfix/maps/transport**
Example transport mapping:

<pre class="sh_sh">
support@example.com local:
example.com relay:[192.168.1.200]
</pre>

In this example, support@example.com is treated as a local address, and Postfix will check the <tt>alias\_maps</tt> configuration option, while the rest of the acceptable addresses for example.com will be relayed to 192.168.1.200.

At first I found it odd that Postfix did not require example.com to be specified in the **mydestination** directive, but just now I have concluded that <tt>transport\_maps</tt> has the same effect, and it makes perfect sense to me.

For local aliasing, my configuration of Postfix is set in this way:

<pre class="sh_sh">
alias_maps = hash:/etc/aliases
alias_database = hash:/etc/aliases
</pre>

#### **Example /etc/aliases**

<pre class="sh_sh">
support:    external.email@gmail.com
</pre>

I haven't rolled this solution out to my backup MX servers, though I plan to do so once I test this solution out some more.

* <http://www.docunext.com/blog/2009/01/mail-gateways-are-good-to-me.html>
* <http://www.docunext.com/blog/2010/09/the-necessity-of-a-comprehensive-list-of-all-emails-accepted-at-an-mx-host.html>

