---
title: Comparison of PHP Bug Trackers
date: 2006-09-12
tags: none
author: Albert Lash
---
<h3 id="toc0">What is a Bug Tracking System? (BTS)</h3><p>A bug tracking system is a user interface for organizing, tracking, and updating software bugs. There is an overlap with another common type of software focused on trouble tickets for customer support, in fact some software can handle both. There is also another overlap with project management software.</p><h3 id="toc1">Important factors for a bug tracking system</h3>

<ul>    <li>Ease of integration with email, project management applications, and source code versioning</li>    <li>Ease of use</li>    <li>Customization</li></ul><p>There are many bug tracking systems, and many that are written in PHP. Here is a list of the ones I found:</p>

<ul>    <li><a href="http://phpbt.sourceforge.net/" onclick="window.open(this.href, '_blank'); return false;">phpBugTracker</a></li>    <li><a href="http://www.mantisbugtracker.com/about.php" onclick="window.open(this.href, '_blank'); return false;">Mantis Bug Tracker</a></li>    <li>Olate Arctic - commercial, Â£49.99 GBP as of 09/2006</li>    <li><a href="http://dev.mysql.com/downloads/other/eventum/" onclick="window.open(this.href, '_blank'); return false;">Eventum</a></li>    <li><a href="http://anthill.vmlinuz.ca/" onclick="window.open(this.href, '_blank'); return false;">Anthill</a> - no longer actively developed.  </li>    <li>Pesticide - not available yet</li>    <li><a href="http://flyspray.rocks.cc/" onclick="window.open(this.href, '_blank'); return false;">Flyspray The Bug Killer</a> </li></ul><p>Non-php based bug trackers:</p>

<ul>    <li><a href="http://www.bugzilla.org/" onclick="window.open(this.href, '_blank'); return false;">Bugzilla</a> - perl</li>    <li><a href="http://www.bestpractical.com/" onclick="window.open(this.href, '_blank'); return false;">Request Tracker</a> a.k.a. (also known as) &quot;RT&quot; - perl </li>    <li><a href="http://roundup.sourceforge.net/" onclick="window.open(this.href, '_blank'); return false;">Roundup Issue Tracker</a> - python</li>    <li><a href="http://myrapid.com/webcall/" onclick="window.open(this.href, '_blank'); return false;">WebCall</a> - perl</li>    <li><a href="http://www.gnacademy.org/tech/dbedit/frontdesk.html" onclick="window.open(this.href, '_blank'); return false;">Frontdesk</a> - perl</li>    <li><a href="http://trac.edgewall.org/" onclick="window.open(this.href, '_blank'); return false;">Trac</a> - python</li></ul><p><strong>The Demo</strong>

The first thing I look for is a demo. It is by far the easiest way to get a feel for a piece of software. The attention to detail balanced with simplicity is telling of the developer's commitment to quality. Furthermore, if there is no demo available, it may be a sign that the software is not yet ready for distribution - a problem which plagues many open source projects.</p>

<table>    <tr>        <td>Project</td>        <td>Demo Available</td>        <td>Notes</td>    </tr>    <tr>        <td>Flyspray</td>        <td>Yes</td>        <td>The demo is the actual bug tracker for the project. Impressive! Reminds me of when subversion started using itself for source versioning. However, you can't see the admin side of the application.</td>    </tr>    <tr>        <td>phpBugTracker</td>        <td>Yes</td>        <td>Running on Sourceforge it is slow.</td>    </tr>    <tr>        <td>Mantis</td>        <td>Yes</td>        <td>The Mantis demo was down, so I was unable to evaluate it.</td>    </tr>    <tr>        <td>Eventum</td>        <td>No</td>        <td>They have some good screenshots, though they seem more complex than I'd like.</td>    </tr>    <tr>        <td>Arctic</td>        <td>Yes</td>        <td>The demo is fully functional which is a must for a commercial piece of software. However the software seemed TOO simple for being commercial.</td>    </tr></table><p><strong>Database Model</strong>

Another tell-tale sign for quality in open source projects is the data model. Is is simple, easy to understand? Does it conform to data modeling guidelines? Is it flexible?</p>

<ul>    <li>Anthill: Comes with MySQL and PgSQL dumps. Has a highly abstract &quot;config&quot; table with different settings whose attribute is set by an id. I've considered doing so in the past, but avoided it because it was too abstract, and likely difficult for developers to work with. Has its own user and sessions tables. The bug tables are: bugs, bugdesc, products, versions, and components. There are other tables which I would consider configuration rather than data: severity_d, priority_d, status_d. These are presumably used to set various levels for use within the application.  </li>    <li>Eventum: </li>    <li>Flyspray: First thing I noticed is that the table names are prepended with &quot;flyspray_&quot;, which means the author likely intended the database to be integrated with other information - a good sign. Flyspray also has configuration options in the database: task type, resolution, categories. Has tables for projects and tasks which seem logical in design, and the same with users and groups. </li></ul><p><strong>Conclusion</strong>:

I may do more evaluation, but thus far, Flyspray is the clear winner. It has simplicity, sophistication, and integration possibilities. While I'm also going to evaluate Trac, I'm going to go ahead and install Flyspray and evaluate that in a separate page.</p>
<p>Flyspray Documentation<a class="" href="https://www.savonix.com/acc/nxwiki/new/Flyspray%20Documentation">?</a></p><hr />

Thanks to this great page of open source software packages:

<a href="http://linas.org/linux/pm.html" onclick="window.open(this.href, '_blank'); return false;">http://linas.org/linux/pm.html</a><p><strong>Other resources</strong>:

<a href="http://dev.budts.be/item/68/catid/19" onclick="window.open(this.href, '_blank'); return false;">http://dev.budts.be/item/68/catid/19</a>

<a href="http://www.dotproject.net/" onclick="window.open(this.href, '_blank'); return false;">http://www.dotproject.net/</a> - Project management software that integrates with Mantis.</p>
