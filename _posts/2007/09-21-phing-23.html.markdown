---
title: Phing 2.3
date: 2007-09-21
tags: phing,php
---

Phing 2.3 just had a new release candidate published and I'm really pleased with some of the new features.

#### **PDOSQLExecTask**

In particular, PDOSQLExecTask is exactly what I need to implement a more sophisticated build-state manager for nodows. The general plan is to include a SQLite database file for each image that is in the works. This will provide a very basic logging facility, but more importantly a way to keep track of the build process.

I'd also like to have general a SQLite database which can be used to build property files on an ad-hoc basis, but that will come later.

#### **DbDeployTask**

Another task that interests me is the DbDeployTask. I've always been impressed with how MediaWiki and Wordpress provide scripts to update database models as the software evolves, and that is something I absolutely need to include with PBooks.

Hopefully DBDeployTask can help!

Then there are the SVN tasks - so cool! I haven't even begun to explore what's there in that area but I bet it is awesome. And it looks like there might be more to the PHPUnit2 interface... hmmm.

I'm really pleased with how much phing has progressed in the recent years and I can't wait to start using it for more of my projects.

Hmm, table creation and inserts work, but not selects:

<pre>
exception 'PDOException' with message 'SQLSTATE[HY000]: General
error: 1 cannot commit transaction - SQL statements in progress' in /usr/local/share/pear/phing/tasks/ext/PDOSQLExecTask.php:319</pre>

