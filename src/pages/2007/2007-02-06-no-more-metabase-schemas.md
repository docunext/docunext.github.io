---
title: No More Metabase Schemas
date: 2007-02-06
---
I've decided to no longer use metabase schemas. I used to think they were awesome, they became a bit of a pain once I moved to a more consistent database model. I now work directly with phpmyadmin (which is really awesome) on a production (rarely) and development (better to experiment with) database. If I want to make a change, I edit the development database, test, then update the production database. True this requires a little extra effort on my part, but I think its for the best.

I'm really "married" to MySQL at this point, and happy being that way. I use the MyISAM storage engine (I know - not ACID compliant) but its fast, and I've done a good job on my SQL statements. Therefore, I don't really need to be able to switch database servers readily. I may switch to Postgres as some point in the future, but not any time soon.
