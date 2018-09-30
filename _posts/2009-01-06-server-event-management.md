---
title: Server Event Management
comments:
  - author: Albert
    email: albert.lash@savonix.com
    ip: 192.168.8.2
    url:
    date: 01/15/2009 02:43:13 AM
    text: >
      Reviewing the list there - I think that puppet, csync2, and pssh will be helpful to me in general.
  - author: Albert
    email: albert.lash@savonix.com
    ip: 192.168.8.2
    url:
    date: 01/18/2009 01:23:18 PM
    text: >
      Keyword: "require"
date: 2009-01-06
tags: inotify,puppet,servers,ssh,ubuntu
---
A couple of ideas regarding server event management:

* monit
* inotify / incrond
* libpam-script
* cron
* logcheck
* Other file scanning - fail2ban
* rungetty
* <a href="http://www.docunext.com/wiki/Daemontools">daemontools</a>
* knockd
* ldirectord
* csync2
* ssh - sshproxy, pssh, rssh, sshfp, clusterssh, autossh
* tentakel
* puppet, bcfg2, Cfengine

Init is something that has many people annoyed - Apple replaced it with launchd, Ubuntu replaced it with Upstart, and there is another project called Initng.

But I really like init - its so simple! And simple is good.

On the other hand, its limited. What happens one the machine has completed booting up? Events can come from many sources, so how should various jobs or processes be triggered? That question immediately leads to a complicated path, so its easier to break it up into smaller pieces.

Events, triggers, and tasks/jobs/processes, these all have complex relationships and dependencies - sounds like a job for XML! Thinking about all of this reminds me of phing, the php version of ant.

Somewhat related: shell scripts that exit with non-zero values indicate failure, which can influence other shell scripts. <a href="http://www.hsrl.rutgers.edu/ug/shell_help.html">Thanks to this handy page on shell scripts</a>!

I just read up on "start-stop-daemon". I'm a little disappointed to learn that it isn't a more standard unix tool.

#### Top Level Triggers

User logins (libpam-script), file alterations (incron / inotify / gamin / fam), time lapses (cron / polling), and process status changes (monit / init / rungetty). One problem I see with these at the moment, is that they are all internal events and monitors. What type of external events could be used as a trigger? It might have to be poll based, but it could also be triggered by a "user login". For example, an event on a remote machine could trigger an ssh script to login to another machine, to either touch a file which would trigger inotify or to run a script initiated by libpam-script.

Another possibility is a network bases syslog-ng setup. Really any network daemon which could listen on a network port, provide some level of security, and trigger an internal event. Even scp or ftp could work. Maybe an anonymous FTP server which could receive files, then checksum them, decrypt them, and... yeah that's a little complicated!

#### Dependency Triggers

To keep this clear, I'll use an example. A web template gets updated, and all the cached web pages that depend on it need to be rebuilt. Or a database record gets updated, and data needs to then be formatted, exported, and processed. My initial thought is that these types of relationships would be documented in XML files, but also with dynamic scripts. Something to think about...

#### Monitoring Event Triggered Tasks

What happens if an event occurs, which triggers a task, but then the task fails?

<strong>Related Links</strong>

<a href="http://en.wikipedia.org/wiki/Comparison_of_open_source_configuration_management_software">http://en.wikipedia.org/wiki/Comparison_of_open_source_configuration_management_software</a>

¥

