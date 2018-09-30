---
title: Nagios Thoughts
comments:
  - author: Peter Mui
    email: pmui@groundworkopensource.com
    ip: 67.107.141.2
    url: http://www.groundworkopensource.com
    date: 02/05/2007 01:10:55 PM
    text: >
      GroundWork unifies Nagios with other open source tools to automate Nagios configuration.  For example, our Monitor Architect (Monarch) tool is available both standalone and in GroundWork Monitor Open Source to automate Nagios config.
date: 2007-02-04
tags: open source
---
I'm reviewing our Nagios setup, and came up with a few thoughts:

<ul><li>Automate the creation of the Nagios configuration files, especially the hosts.cfg.</li><li>Check both machine hosts with an IP and virtual hosts with a dns record, which would be a child of a machine host.</li><li>Check general services of the machine, such as DNS, web, database, etc.</li></ul>

I wanted to add a second email for myself to the contact list and couldn't seem to find definitive docs on this, so I just tried a comma separated list and am testing it now. Yup, it worked!

Now onto more concepts:

<strong>hosts.cfg or services.cfg</strong>

I think that an organization setting up nagios will edit all the files to begin with, and then once its up and running, they would only need to edit hosts from time to time as they add / remove machines. However, it seems that services is just as involved. I would think that for each host you could specify a set of services, but it seems to be the other way around. In services.cfg, you specify the host that a service is hosted upon.

¥

