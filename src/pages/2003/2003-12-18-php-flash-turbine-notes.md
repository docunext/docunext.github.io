---
title: PHP Flash Turbine 7 by Blue Pacific versus the Open Source Libming Project
date: 2003-12-18
---

<h4>PHP Turbine 7</h4><p>PHP Flash Turbine, aka PHP Turbine 7, is a dynamic swf generator not unlike the original Flash Generator of years gone by, or the up-and-coming libming library.</p>
<h4>Blue Pacific</h4><p>PHP Flash Turbine is developed and marketed by Blue Pacific Software. I used this Flash product for several years before switching to Ming due to a previous delay in the upgrade of the product to the most recent version. Although I now use ming, I like Blue Pacific products quite a bit, and was very impressed with their customer support. Hopefully I'll get to try out the new version sometime soon.</p>
<h4>Notes from my usage of PHP Flash Turbine in 2003</h4><p>What a pain!</p>
<p>For use as a CGI binary, you have to prepend any turbine using files with this:</p>

<pre class="sh_php">$_SERVER[‘PHP_SELF’] = $_SERVER[‘SCRIPT_URL’];$_SERVER[‘SCRIPT_NAME’]=$_SERVER[‘SCRIPT_URL’];</pre>
