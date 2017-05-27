---
title: Punbb Patches
date: 2007-09-07
tags: mysql,sql
---
I've forked punbb to support multiple sites within one codebase, as well as use two different mysql data sources - one primary and one replicant.

The database has some problems:

* posts show up twice
* show new posts doesn't work

I'll fix these, and release the modified codebase and maybe patches too.

UPDATE: September 17, 2007: I think I fixed the double post issue - just needed a "DISTINCT" keyword in the SQL.

UPDATE 2: Punbb admin requires the use of the http_referer request header. Doh! Hopefully I can remove that dependency.

