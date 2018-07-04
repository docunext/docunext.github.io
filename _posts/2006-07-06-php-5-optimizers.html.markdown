---
title: PHP 5 Optimizers
date: 2006-07-06
tags: none
author: Albert Lash
---
<p>After reviewing some PHP 5 frameworks, I happened upon the subject of PHP optimizers. I had tried APC, but it was causing segmentation faults on almost every call. I even tried the CVS version to no avail.</p>
<p>There are many options:</p>

<ul>    <li>APC Alternative PHP Cache</li>    <li>Turck MMCache </li>    <li>eAccelerator - branch and continued development of Turck MM Cache</li>    <li>Zend Optimizer</li>    <li>Xcache</li></ul><p><strong>Xcache</strong>

While xcache's configuration setup is a little confusing, its awesome! It appears to chop off about .04 seconds of execution time. Awesome!</p>
<p>There is also a terrific PHP API within xcache, allowing it to store variables. This is really sweet. We can then stop using the pear cache package. The variable cache is not automatic, you need to use the php api to explicity store information into the cache.</p>

