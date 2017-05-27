---
title: Web Traffic Tracking and Analysis QA Testing
date: 2007-05-06
tags: none
author: Albert Lash
---
Off-site Services:

<ul><li>Google Analytics</li><li>Urchin</li><li></li></ul>

Apache Web Server Logging:

<ul><li>Apache logging with log rolling and apache2splitlogfile</li><li>Apache logging with vlogger</li><li></li></ul>

Misc:

<ul><li>phpOpenTracker</li></ul><hr/>

And then to complete the loop: * PHP Unit* Selenium - <a href="http://wiki.openqa.org/pages/viewpage.action?pageId=763">http://wiki.openqa.org/pages/viewpage.action?pageId=763</a>* MaxQ* <a href="http://ottomate.org/">http://ottomate.org/</a>* http://www.lastcraft.com/web_tester_documentation.php* http://www.openqa.org/watir/watir_user_guide.html* http://code.google.com/p/firewatir/downloads/list* libhttp-recorder-perl = HTTP::Recorder  * WWW::Mechanize

Wouldn't it be nice if you could generate, or at least glean some test cases from server logs?

Gasp - I installed IE7 on my Windows XP VM within Parallels to try out Watir (which is VERY nice by the way) and IE7 is actually pretty nice. Its about time!

FireWatir Info:

<a href="http://crasch.livejournal.com/550521.html">How to install Firewatir on Mac OS X Tiger (Intel)</a>

The above-linked tutorial was a little hard to follow, but it did work. Here's what I did:

Install ruby with fink (though I think ruby was already installed).

Installed rubygems from tip on HiveLogic:

<pre>curl -O http://files.rubyforge.mmmultiworks.com/rubygems/rubygems-0.9.2.tgz

tar xzvf rubygems-0.9.2.tgz

cd rubygems-0.9.2

sudo /usr/local/bin/ruby setup.rb</pre>

Installed Jssh for Firefox:

<a href="http://albert.lash.googlepages.com/jssh-20070312-linux-1.xpi">jssh-20070312-linux-1.xpi</a> or <a href="http://alephzarro.com/files/jssh-20070312-linux.xpi">jssh-20070312-linux.xpi</a> (Thanks to Alephzarro for providing this).

Then installed Firewatir gem:

<a href="http://firewatir.googlecode.com/files/firewatir-1.0.2.gem">http://firewatir.googlecode.com/files/firewatir-1.0.2.gem</a>

<pre>gem install firewatir-1.0.2.gem</pre>

Then I followed the instructions from:

<a href="http://crasch.livejournal.com/550521.html">http://crasch.livejournal.com/550521.html</a> - #2 almost all the way at the bottom, and the installed tests works.  Very very cool. :-)

Even SafariWatir looks good!

<a href="http://rubyforge.org/frs/?group_id=1912&release_id=9982">http://rubyforge.org/frs/?group_id=1912&release_id=9982</a>

