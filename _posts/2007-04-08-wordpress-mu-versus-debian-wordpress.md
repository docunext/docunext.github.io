---
title: Wordpress MU versus Debian Wordpress
date: 2007-04-08
tags: open source
---
I'm trying out Wordpress Multi-user and having a tough time with it. First off, some of the assumptions they make about domains and urls is clashing terribly with my architecture. Along with no-www, they are claiming that the "www" before many domain names is deprecated, but I have to wholeheartedly disagree.

In fact, I couldn't be in more disagreement with them on this one. However, this post is about the multi-user software. Unfortunately, their is no debian package for it, which makes installing and managing it more difficult.

I don't mean to be so negative. Automattic has done a great job with the regular version (though I do have some complaints about that too!).

I tried out Wordpress MU because I wanted to see how they manage multiple blogs, which they do so effectively, but its really designed for one domain, with many sub domains. Debian already has a pretty good method for doing this, but linking the config file to a domain-specific config file in /etc/wordpress/. The problem I've encountered is that fact that I have an admin user for each blog, which is very redundant. It seems like some hooks exist to support what I'm trying to get at, but I don't really understand why they were design the way they were.

In wp_prefix_usermeta the keys for user roles are defined by the wp_prefix_capabilities and wp_prefix_user_level. This is also redundant because the software is only loading values from that one table. Confusing, yes! This data model would support allowing a single user access to different blogs at different access levels, which is great, but the problem is the strict prefixing that Wordpress commits across all db tables. Otherwise, you'd need to have prefix specific (i.e. domain specific) posts in a single table.

AH! Actually hey, they do support what I'm looking for. In wp-settings.php, there is a check for a constant:

<pre>if ( defined('CUSTOM_USER_TABLE') )        $wpdb->users = CUSTOM_USER_TABLE;

if ( defined('CUSTOM_USER_META_TABLE') )        $wpdb->usermeta = CUSTOM_USER_META_TABLE;</pre>

That's great!

They also have "blog_id" in the wp_prefix_options table, which is cool. It would be nice to be able to share things like the comment blacklist to several blogs. But functions.php doesn't know anything about blog_id:

<pre>$row = $wpdb->get_row("SELECT option_value FROM $wpdb->options WHERE option_name = '$setting' LIMIT 1");</pre>

