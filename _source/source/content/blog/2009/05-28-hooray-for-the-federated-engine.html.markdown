---
title: Hooray for the FEDERATED Engine 
date: 2009-05-28
tags: mysql,relay_recipients
---
Today the hay that my camel was carrying had one straw too many - the camel's back broke, and so I had to muster up the gusto to *automate*.

For some time, I've been running a mail gateway and its worked out swimmingly for routing mail centrally with <b>Postfix</b> and <b>Perdition</b>. Incoming mail is relayed to different and separate back-end servers and mail-stores. It makes fighting spam and debugging problems SO much easier, not to mention that it reduces the amount of reverse DNS entries which need to be worried about.

<b>HOWEVER</b>, there is one serious problem: the relay_recipients_map table for Postfix to reduce backscatter spam. Since the recipients are defined in separate databases, I have been manually editing this table for awhile and half the time I forget to update it when I add a new address.

Now back to the poor camel - it had too much! There had to be an easier way and there is indeed. Thanks to the FEDERATED MySQL engine, I was able to aggregate the different backend datasources into several tables in a single database. From there I created a simple view, and voila, a single select query provides the complete and current dataset of all emails fit to receive. Now I just need to create a script to grab the result set and postmap it.

