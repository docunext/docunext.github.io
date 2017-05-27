---
title: Amazon S3 Hosting Service
date: 2009-05-31
tags: storage
---
I'm again evaluating the use of Amazon S3 for storing backups of images. I've dabbled with it before and liked it quite a bit, but never got into the habit of using it regularly. I guess the idea of incremental pricing concerns me.

I'm less concerned about that nowadays as I've been using reverse proxies, compression and caching to reduce bandwidth consumption, as well as combining shared resources into a single domain instead of serving the same data over different domains.

My plan is to use Amazon S3 as a static image backup and fail-over, not a direct provider of service. I buy bandwidth from other network providers and use it for a variety of services beyond REST / HTTP content deliver. Besides, the bandwidth on S3 can get pricey pretty quick!

I've chosen a few tools to use and made some preliminary notes over at Docunext:

<ul><li><a href="http://www.docunext.com/wiki/S3cmd">s3cmd</a></li><li><a href="http://www.docunext.com/wiki/Apache2::S3">Apache2::S3</a></li></ul>
I should also note that I reviewed Flickr and Picasa as potential image hosting services, but both have terms of service which involve providing an overreaching license to uploaded content. I'm quite surprised that they don't offer a commercial alternative to that clause. I also researched other image hosting services, but the market is so saturated with low-cost, no-cost limited solutions, I gave up!

