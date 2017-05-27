---
title: Bulk Email Timing
date: 2009-08-02
tags: php
---
One of my clients recently requested a bulk mailing to their opted-in fan email list.

I timed one of the mailings, and it came to almost thirty two hours to send approximately fifty thousand emails.

It could have been done *much* faster, but I preferred sending it that way. Its much easier to manage and monitor. To accomplish this, I used PHP / PEAR's Mail class, and issued a sleep command of two seconds between each single email getting sent out.

I'm quite pleased to learn that PHP can run for thirty two hours and exit successfully. Cool!

