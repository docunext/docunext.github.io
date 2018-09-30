---
title: symfony error
date: 2007-04-13
tags: none
author: Albert Lash
---
<pre>[sfException]                                                         Unable to resolve foreign table for column "accounting_account_id" </pre>

Hmmm..... I just needed to specify more stuff:

<pre>{ type: integer, required: true, primaryKey: true, autoIncrement: true }</pre>

