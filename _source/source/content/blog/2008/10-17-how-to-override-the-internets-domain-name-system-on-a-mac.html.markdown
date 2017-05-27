---
title: How to override the internet s domain name system on a Mac
date: 2008-10-17
tags: none
author: Albert Lash
---
What you are doing here is overriding the internet's domain name system, so that when you type www.web_address_here.com <http://www.web_address_here.com> into a browser, it will send you to the new server.<ol>	<li>open the Terminal</li>	<li>sudo su</li>	<li>enter your computer's password</li>	<li>vim /etc/hosts</li>	<li>Use the down arrow key to get to the end of the file</li>	<li>Press "o"</li>	<li>Then add the following line: [ip address you want to reroute to] www.web_address_here.com <http://www.web_address_here.com></li>	<li>esc</li>	<li>:wq</li></ol>

Ok that's it. You should now automatically be routed to the ip address you entered. When you're ready to stop routing to the given ip address simply go back to the file and delete the line you added.

