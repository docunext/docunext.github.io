---
title: MacFUSE and sshfs
comments:
  - author: Graham Perrin
    email: grahamperrin@gmail.com
    ip: 87.81.165.9
    url:
    date: 05/06/2007 09:21:05 PM
    text: >
      You'll probably be prompted for a restart after installation of MacFUSE.<br/><br/>MacFusion should be launchable after MacFUSE has been installed and recognised by your system.<br/><br/>Enhancements and bug fixes to MacFUSE and MacFusion are in the pipeline, so please bookmark <a href="http://www.sccs.swarthmore.edu/users/08/mgorbach/MacFusionWeb/" rel="nofollow">http://www.sccs.swarthmore.edu/users/08/mgorbach/MacFusionWeb/</a> for the most up-to-date information on installation routines.<br/><br/>We hope that you will enjoy the improvements.
  - author: Graham Perrin
    email: grahamperrin@gmail.com
    ip: 87.81.165.9
    url:
    date: 05/12/2007 03:43:40 PM
    text: >
      There are now many enhancements.<br/><br/>Considering the recent activity in the Google Groups and Google Code project areas for both MacFUSE and MacFusion, I should recommend a visit to the MacFusion Project Home page <a href="http://code.google.com/p/macfusion/" rel="nofollow">http://code.google.com/p/macfusion/</a> where you'll find FAQ, links and other useful information.
  - author: admin
    email: albert.lash@savonix.com
    ip: 74.94.149.33
    url:
    date: 05/18/2007 06:20:04 PM
    text: >
      Yup! I'm using the latest beta, which even includes the ability to pass command line arguments including the ability to turn off caching. Macfusion is awesome.
date: 2007-05-02
tags: open source
---
Looks like the newest release of MacFUSE and sshfs are all I need to turn the switch for AFP and SMB to "off". That'll be a great move!

To use MacFUSE and sshfs (you need Mac OS X 10.4 Tiger): <ol><li>Download and install <a href="http://macfuse.googlecode.com/files/MacFUSE-Core-0.2.5.dmg">MacFUSE-Core-0.2.5.dmg</a></li><li>Download and install <a href="http://macfuse.googlecode.com/files/sshfs-0.2.0.dmg">sshfs-0.2.0.dmg</a></li><li>You should probably restart now</li><li>Open the sshfs program, enter the target server address, username, and directory. After clicking enter, you'll be prompted for a password.</li><li>Upon authentication, the remote filesystem will be mounted.</li></ol>

I just found <a href="http://code.google.com/p/macfusion/">MacFusion</a> (<a href="http://www.sccs.swarthmore.edu/users/08/mgorbach/MacFusionWeb/MacFusion.dmg">Macfusion.dmg</a>)which looks like it has some cool gui niceties, like keychain password integration! Actually, it even has the one feature I really missed: public key!

¥

