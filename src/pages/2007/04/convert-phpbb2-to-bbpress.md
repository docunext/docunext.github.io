---
title: Convert phpbb2 to bbpress
date: 2007-04-07
tags: none
author: Albert Lash
---
I just converted a phpbb2 database to bbpress database using this script:

<a href="http://www.iteisa.com/phpbb2bbpress/">Convert phpbb2 to bbpress database</a>

It was surprisingly easy to do. The script worked great. I used the script to output the converted database to a file, and then opened the file and edited it to adjust what I needed. The phpbb forums were so full of fake spammer users I didn't convert them.

I also had to edit the bbpress forums to advance the topic_id, forum_id, and post_id's ahead of the ones from phpbb2. That was the easiest way for me to do it, might be different for you.
