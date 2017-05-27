---
title: PHP on Debian
date: 2006-06-09
---
PHP works great on debian. Here's on thing I found that caught me by surprise:

php5 has a setting for session lifetime. On debian, there are funky php ownership settings, so they have a cron job setup to remove sessions over 30 minutes. I turned mine off because at least for development I want the sessions to have an infinite lifetime.

