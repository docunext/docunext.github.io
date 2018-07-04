---
title: PHPUnit Selenium RC
date: 2007-08-13
---
I really like the looks of PHPUnit working with Selenium RC, but my main complaint about it at this point is that I'm running the proxy server on my local machine, rather than a remote machine. I think I'll be able to run it on a remote machine without a problem, but to view the test in progress, I believe I'll need VNC or No Machine's FreeNX to connect to an X server. That is something I've wanted to setup anyway, so I'll get to it. I've got the perfect machine to set this up on: an <a title="Cheap laptop" href="http://www.my-tech-deals.com/blog/2007/06/23/recommended-notebook-everex-stepnote-nc1503/">Everex NC1503 running linux</a>!

Actually, I'm ending up using the <a href="http://www.my-tech-deals.com/blog/2007/06/01/350-laptop-arrived/">$350 laptop</a> I purchased from Fry's awhile back, it's less energy efficient than the Everex, but it will only be on while I'm conducting tests. For this to work, I'm setting up a VNC server on the laptop. Its already running Ubuntu, and I'm following these instructions:

<a rel="nofollow" href="http://ubuntuforums.org/showthread.php?t=122402">HOWTO: Set up VNC server with resumable sessions</a>

Actually that howto is really old, this one is better for Ubuntu 7:
<a href="http://www.movingtofreedom.org/2007/02/16/howto-remote-desktop-with-vnc-in-ubuntu-edgy-gnu-linux/">HOWTO: Set up VNC server with resumable sessions</a>

The laptop is currently updating a bunch of stuff, so I'm waiting for that to finish before installing VNC.

Got VNC up and running, now I'm upgrading Java (Selenium RC requires Java 1.5 or greater).
<pre><code>java -version
java version "1.5.0_11"
Java(TM) 2 Runtime Environment, Standard Edition (build 1.5.0_11-b03)
Java HotSpot(TM) Client VM (build 1.5.0_11-b03, mixed mode, sharing)</code></pre>

All set!

I've run into this issue several times: when I try and start a new browser session, I get "<a href="http://forums.openqa.org/message.jspa?messageID=16541">Preparing Firefox profile...</a>" then it hangs there. This has happened on Mac OS X and Ubuntu. Hmmmm, maybe this is caused by a firefox that crashed? Nope, I guess that's caused by a Firefox 2.0 thing, so I'm going to use the latest version of Selenium RC.

Now I'm installing PHP5, PEAR, and Apache2, as well as phpunit through pear. Done, that was easy!

So, while I have testing environments set up for various application servers, this will be our first testing client machine. :-)

<h3>Benefits of driving Selenium RC with PHPUnit</h3>
As far as I can tell, the benefit for me to use PHPUnit with Selenium is that PHPUnit can output reports of the test results.

In addition to that, we can also build tests automatically, which is pretty sweet.

I also just figured out how to set a test to use a remote selenium RC server:

<pre><code>void setHost(string $host)	</code></pre>
"Set the hostname for the connection to the Selenium RC server."

<b>Related Links</b>

Getting Selenium RC and PHPUnit to work together was a little vague, but I found these links helpful:

<a href="http://sebastian-bergmann.de/archives/631-Integrating-PHPUnit-with-Selenium.html">sebastian-bergmann.de/...Integrating-PHPUnit-with-Selenium</a>

<a href="http://devzone.zend.com/article/2242-Acceptance-Testing-of-Web-Applications-with-PHP">devzone.zend.com/...Acceptance-Testing-of-Web-Applications-with-PHP</a>

<a href="http://www.phpunit.de/pocket_guide/3.1/en/selenium.html">phpunit.de/...selenium.html</a>

<a href="http://www.openqa.org/selenium-rc/tutorial.html">openqa.org/selenium-rc/tutorial.html</a>

