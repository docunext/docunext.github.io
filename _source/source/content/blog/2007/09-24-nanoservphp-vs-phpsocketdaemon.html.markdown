---
title: Nanoserv.php vs phpsocketdaemon
date: 2007-09-24
tags: none
author: Albert Lash
---
There are two new libraries available for creating socket daemons in php. Both are created by experienced developers, and perform surprisingly well. To explore them more, I tested them using the Apache bench program "ab". NOTICE: these tests do not reliably evaluate the overall performance of one versus the other, they are simple rough estimates at best.
<h3>Nanoserv</h3>

<pre>
ab -n 1000 -c 100 http://192.168.0.32:800/index.html

This is ApacheBench, Version 2.0.40-dev <$Revision: 1.146 $> apache-2.0

Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/

Copyright 2006 The Apache Software Foundation, http://www.apache.org/

Benchmarking 192.168.0.32 (be patient)

Completed 100 requests

Completed 200 requests

Completed 300 requests

Completed 400 requests

Completed 500 requests

Completed 600 requests

Completed 700 requests

Completed 800 requests

Completed 900 requests

Finished 1000 requests

Server Software:        nanoserv/1.1.0-rc1

Server Hostname:        192.168.0.32

Server Port:            800

Document Path:          /index.html

Document Length:        39 bytes

Concurrency Level:      100

Time taken for tests:   1.494168 seconds

Complete requests:      1000

Failed requests:        0

Write errors:           0

Total transferred:      188122 bytes

HTML transferred:       39234 bytes

Requests per second:    669.27 [#/sec] (mean)

Time per request:       149.417 [ms] (mean)

Time per request:       1.494 [ms] (mean, across all concurrent requests)

Transfer rate:          122.48 [Kbytes/sec] received

Connection Times (ms)              min  mean[+/-sd] median   max

Connect:        0    0   1.5      0      10

Processing:     1   15  82.0     11    1432

Waiting:        1   13  82.0      8    1431

Total:          3   15  82.5     11    1438

Percentage of the requests served within a certain time (ms)  50%     11  66%     11  75%     11  80%     11  90%     11  95%     12  98%     48  99%    226 100%   1438 (longest request)</pre>
<h3>PHPSocketDaemon</h3>

<pre>
ab -n 1000 -c 100 http://192.168.0.32:2001/index.html

This is ApacheBench, Version 2.0.40-dev <$Revision: 1.146 $> apache-2.0

Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/

Copyright 2006 The Apache Software Foundation, http://www.apache.org/

Benchmarking 192.168.0.32 (be patient)

Completed 100 requests

Completed 200 requests

Completed 300 requests

Completed 400 requests

Completed 500 requests

Completed 600 requests

Completed 700 requests

Completed 800 requests

Completed 900 requests

Finished 1000 requests

Server Software:

Server Hostname:        192.168.0.32

Server Port:            2001

Document Path:          /index.html

Document Length:        63 bytes

Concurrency Level:      100

Time taken for tests:   2.34689 seconds

Complete requests:      1000

Failed requests:        0

Write errors:           0

Total transferred:      226000 bytes

HTML transferred:       63000 bytes

Requests per second:    491.48 [#/sec] (mean)

Time per request:       203.469 [ms] (mean)

Time per request:       2.035 [ms] (mean, across all concurrent requests)

Transfer rate:          108.12 [Kbytes/sec] received

Connection Times (ms)              min  mean[+/-sd] median   max

Connect:        0    1   3.1      0      13

Processing:     9  195  82.0    130     298

Waiting:        8  195  81.8    130     297

Total:         22  196  81.3    130     299

Percentage of the requests served within a certain time (ms)  50%    130  66%    293  75%    296  80%    297  90%    297  95%    297  98%    298  99%    298 100%    299 (longest request)</pre>

Note that nanoserv had an incredibly fast low-end (50% of the requests were served within 5ms) while phpsocketdaemon had a consistently quick service time across all requests. My guess is that these variances are the result of the content that's getting served, and any server settings like keepalive that I wasn't paying attention to.

The idea of a php-based socket server is really cool. I expect we'll see a php-based jabber server soon, as well as a socket daemon for sqlite databases.

