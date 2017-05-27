---
title: Drupal Modules Data Tables Schema and Views
date: 2010-12-19
tags: drupal,modules,"movable type",mysql
---
"Data Tables" and "Schema" - these two Drupal modules are incredibly powerful!

A co-worker told me that Drupal could access external data sources, so I had to give it a try. First I had to track down the modules which could perform such a task.

I came across "Table Wizard", and it appeared to do the trick, but it was also noted that it is being deprecated in favor of "Data".

I read up on a helpful comparison of "Table Wizard" and "Data":

<blockquote class="svxlb"><pre>
- Table allocation API: Data has an API to create, update and delete tables, TW doesn't.
- Adding existing tables: TW can manage existing tables, create Schema API information and generate views integration for it. Data can do this only with its own tables. However, Data uses very similar approaches to generate schema API information and views integration for its tables. Adding existing tables would be a rather small change. Both modules rely heavily on schema module for some of this functionality.
- Relate tables: Both modules have an API for relating tables (Data has also a UI for it, don't know about TW).
- Data API: Data has an API for creating, updating and deleting records in data tables. I am looking into strengthening this API. TW does not have such an API and I'm not sure whether it should/is planning to do so.
- Import: TW has import data functionality, Data itself does not have any. Data relies on FeedAPI for importing data (see FeedAPI Data module).
- Data can export table definitions CTools-style, I'm working on a install() update() infrastructure ATM so that we can use Data better as API for other contrib modules.
- Data allows additional meta data per fields (e. g. for defining human readable labels).
- TW analyzes table content, Data doesn't at all.
- There are some other features that I don't see in TW: Configure which views handlers to pick for which fields, search integration, relating data records to nodes (working on that one), manage differences between schema info and table. Some of these features may fit into TW's concept, others may not. I don't know.
</pre></blockquote>

Cool! So I decided to go with the Data module. I installed it and the Schema table as well as the dependency: Ctools.

The user interface for both of these tools is a little clunky and took me a couple of hours to get acquainted with. **The most important point that I had to figure out was to enable an additional database entry in the settings.php file, changing $db_url from a string to an array.** This enables Schema to choose which database it is going to inspect.

Since I run debian, it looks like this:

<pre class="sh_php">
$db_url['default'] = "$dbtype://$dbuser:$dbpass@$dbserver/$dbname";
$db_url['mtosblogs'] = "$dbtype://$dbuser:$dbpass@$dbserver/$otherdbname";
</pre>

I wrestled with this concept for awhile, trying to figure out if I could access both databases simultaneously. It seems to be possible in a programmatic manner, but I instead opted to create a **MySQL federated table** to access the external database - specifically my Movable Type database.

It went like this:

<pre class="sh_sql">
CREATE TABLE IF NOT EXISTS `docunext_mt_entry` (
  `entry_id` int(11) NOT NULL auto_increment,
  `entry_title` varchar(255) collate utf8_swedish_ci default NULL,
  PRIMARY KEY  (`entry_id`)
) ENGINE=FEDERATED DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci CONNECTION='mysql://drupal6:****@localhost:3306/mtosblogs/mt_entry';
</pre>

That was just a test, and it sort of worked. I had to create the table with "Schema", adopt it with "Data", then manually drop it with phpmyadmin, then use phpmyadmin to create the federated table described above. For some reason, if I created the federated table first, I was unable to adopt it with the "Data" module. Now that I think of it, it may have been because I was trying to adopt the entire table, not the subset mentioned above.

As I said, the federated table mentioned above was just a test. I'll want to create a couple of federated tables bridging a Movable Type database and a MediaWiki database.

So anyway... all of the above is just the first step! The real magic starts to happen with "**Views**". That will have to wait for another post. Until then, Drupal rocks!

**UPDATE**: I have confirmed that for whatever reason, Data Tables cannot "adopt" a federated table by going through the process again:

1. Created federated table.
2. Tried to adopt it. Was unsuccessful, without encountering any errors.
3. Manually created table using "Data Tables", then manually dropped it using phpmyadmin, then re-created the federated table, then adusted the schema using Data Tables.
4. Done.

Furthermore, I should note that this post is NOT a "HOWTO". Its just my notes, and I have far from concluded that this is a good idea for me to use in the future.

