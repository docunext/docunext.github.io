---
title: The Importance of A Comprehensive List of All Emails Accepted at an MX Host
date: 2010-09-25
tags: ldap,postfix,relay_recipients,smtp,spam
---
I was just doing a little work on [Chimailmadmin](http://www.chimailmadmin.com/) focusing at the moment on the export of all email addresses to be accepted at an MX host when I realized I should probably write up a post about why that is such an important piece of information.

#### Postfix and Relay Recipients (i.e. relay\_recipients)

Postfix can be configured a *kazillion* different ways, and one of the relatively common configurations is as an e-mail gateway or relay, where e-mail arriving from the internet is accepted and passed on to another SMTP server for delivery, or in some cases, further relay.

This type of configuration is used for a couple of different reasons, including:

* Simpler management
* Unified spam defenses
* Backup MX servers

Despite these benefits, SMTP relay servers pose a unique challenge, as opposed to a e-mail server which sits directly on the internet using a public IP and knows exactly which addresses it does and does not accept email for.

**But why?** Can't that task be delegated to the final delivery destination of each email? Unfortunately, it often is, and when it is, it becomes nearly an "open relay" for spammers to abuse.

## Backscatter Spam

Even a closed relay, i.e. a relay that only relays emails for certain *domains*, but not all, can be subject to backscatter spam abuse because once an email has been accepted by a relay, it is necessary to send non-delivery notifications back to the sender. If e-mail is simply not-accepted, the non-delivery notification is the responsibility of the server that last attempted to pass along the email.

These types of non-delivery notifications sent are sometimes accepted because they are coming from legitimate, unsuspecting e-mail servers. Spammers have taken advantage of this and end up sending emails to non-existent mailboxes at various domains, with a "from" or "reply-to" address of their real target. When the relay server passes along the email to the final destination and gets a rejection, it then passes the payload along to the original target.

In these circumstances, the target user will get a non-delivery notification suggesting that they sent an email to some address that they've never heard of with spammy content. Imagine the shock!

To make a long story short, this is why Postfix has a configuration parameter named "relay_recipients" in addition to "relay_domains".

I have traditionally used CDB maps of my relay_recipients files, but it can be difficult to manage, especially across multiple backup MX servers and highly available mail gateways. I'd thought about using LDAP, but have more recently become interested in using a solution like **lsyncd** or Puppet.

