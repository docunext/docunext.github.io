---
title: Accounting Database Review and Database Modeling Notes
date: 2007-05-15
tags: none
author: Albert Lash
---
I'm preparing to release <a href="http://www.pbooks.org/">pbooks</a> and of course tweaking the database model a little. As I work on the db model, I've reviewing some other open source project database models, including the following projects:

<ul><li>Arias</li><li>phpOrg</li><li>WebERP</li><li>SQL-ledger</li><li>CK-ERP</li></ul>

So far I have kept the pbooks data model as simple as possible. It is three tables:

<ul><li>Accounts - bank accounts, credit cards, fixed assets, etc.</li><li>Entries</li><li>Entry amounts</li></ul>

The entry amounts table has a foreign key constraint against the entries table, but I might change that. The idea I'm toying around with now is that in a transaction, there is at least one side of the double-entry accounting system that has only one account, while the other side could have two or more accounts. I will thus keep the three tables, but I'll add etnry_type_id, amount, and account.

Actually what I was trying to do here was make a general ledger, but I'm going to do that in a different table.

The problem with accounting systems in today's world is that its backwards - previously you would record the transaction in the journal first, then add it to the ledger, whereas now you would most likely add it to the ledger first, then to the journal (due to the number of electronic transactions). While redundant, I think there needs to be three tables. journal entries, entry amounts, and ledger transactions.

